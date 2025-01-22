import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { connectDB } from "@/src/libs/connectDB";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },

  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "your-email@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (!email || !password) {
          throw new Error("Email and password are required.");
        }

        const db = await connectDB();
        if (!db) {
          throw new Error("Failed to connect to the database.");
        }

        const currentUser = await db.collection("users").findOne({ email });
        if (!currentUser) {
          throw new Error("No user found with the provided email.");
        }

        const passwordMatched = await bcrypt.compare(
          password,
          currentUser.password
        );
        if (!passwordMatched) {
          throw new Error("Incorrect password.");
        }
        return {
          id: currentUser._id.toString(),
          email: currentUser.email,
          name: currentUser.name,
          role: currentUser.role,
        };
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async signIn({ user, account }) {
      const { name, email, image } = user;

      if (account?.provider === "github" || account?.provider === "google") {
        if (!email) {
          return false;
        }
      }

      try {
        const db = await connectDB();
        const userCollection = db.collection("users");

        const existingUser = await userCollection.findOne({ email });

        if (!existingUser) {
          await userCollection.insertOne({
            name,
            email,
            image,
            provider: account?.provider,
            role: "admin",
          });
        } else {
          await userCollection.updateOne(
            { email },
            { $set: { role: existingUser.role || "admin" } }
          );
        }

        return true;
      } catch (error) {
        console.error("Error during signIn callback:", error);
        return false;
      }
    },

    async session({ session, token }) {
      session.user = {
        ...session.user,
        role: token.role || "admin",
      };
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.role = user.role || "admin";
      }
      return token;
    },
  },

  secret: process.env.NEXTAUTH_SECRET, // Add your NextAuth secret in the .env file
});

export { handler as GET, handler as POST };
