import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connectDB } from "@/src/libs/connectDB";

export const POST = async (request: Request) => {
  const { name, email, password, role } = await request.json();

  if (!name || !email || !password) {
    return NextResponse.json(
      { message: "Name, email, and password are required" },
      { status: 400 }
    );
  }

  try {
    const db = await connectDB();
    const userCollection = db.collection("users");

    // Check if user already exists
    const existingUser = await userCollection.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 12);

    // Insert new user
    const newUser = {
      name,
      email,
      password: hashedPassword,
      role: role || "user",
    };
    const result = await userCollection.insertOne(newUser);

    return NextResponse.json(
      { message: "User created successfully", userId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 }
    );
  }
};
