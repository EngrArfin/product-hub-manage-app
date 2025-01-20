"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

export type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const router = useRouter();

  return (
    <Suspense fallback={<div>Load...</div>}>
      <LoginContent router={router} />
    </Suspense>
  );
};

interface LoginContentProps {
  router: ReturnType<typeof useRouter>;
}

const LoginContent = ({ router }: LoginContentProps) => {
  const searchParams = useSearchParams();

  const redirectPath = searchParams?.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const resp = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: redirectPath,
    });

    if (resp?.ok) {
      const sessionResp = await fetch("/api/auth/session");

      const session = await sessionResp.json();
      console.log(session);

      if (session?.user?.role === "admin") {
        router.push("/admin");
      } else if (session?.user?.role === "user") {
        router.push(redirectPath);
      } else {
        router.push("/");
      }
    } else {
      console.error("Login failed:", resp?.error);
    }
  };

  return (
    <div className="flex justify-center h-screen">
      <div className="w-1/2 flex items-center justify-center py-6 px-12 sm:px-8 lg:px-10">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl overflow-hidden p-8">
          <h2 className="text-3xl font-medium text-center mb-6 text-gray-800">
            Login
          </h2>

          <form onSubmit={handleLogin} className="space-y-8">
            <div className="space-y-4">
              <div>
                <label className="block text-lg font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-800">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Link
                href="/forget-password"
                className="text-sm text-sky-600 hover:text-sky-700"
              >
                Forgot Password?
              </Link>
              <p className="text-sm text-sky-600">
                i have no an account?
                <Link href="/signup" className="hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r bg-blue-900  text-white font-semibold rounded-lg shadow-lg"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
