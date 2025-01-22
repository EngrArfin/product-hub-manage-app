"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { toast } from "react-toastify"; // Importing toast

const Login = () => {
  const router = useRouter();

  return (
    <Suspense fallback={<div>Loading...</div>}>
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

  // Handle Admin Login
  const handleAdminLogin = () => {
    setEmail("admin@gmail.com");
    setPassword("admin123");
  };

  // Handle User Login
  const handleUserLogin = () => {
    setEmail("user@gmail.com");
    setPassword("user123");
  };

  // Handle login
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

      // Show Toast after login success
      toast.success("Login successful!"); // Display toast on successful login

      if (session?.user?.role === "admin") {
        router.push("/admin");
      } else {
        router.push(redirectPath);
      }
    } else {
      console.error("Login failed:", resp?.error);
    }
  };

  return (
    <div className="flex justify-center h-screen">
      <div className="w-1/2 flex items-center justify-center py-6 px-12">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-3xl font-medium text-center mb-6 text-gray-800">
            Login
          </h2>

          <form onSubmit={handleLogin} className="space-y-8">
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

            <div className="flex justify-between items-center">
              <Link
                href="/forget-password"
                className="text-sm text-blue-600 hover:text-sky-700"
              >
                Forgot Password?
              </Link>
              <Link
                href="/signup"
                className="text-sm text-blue-600 hover:underline"
              >
                Sign Up
              </Link>
            </div>

            {/* Admin and User Login Buttons */}
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleAdminLogin}
                className="w-full py-2 px-4 bg-blue-900 text-white font-semibold rounded-lg shadow-lg mb-4"
              >
                Login Admin
              </button>

              <button
                type="button"
                onClick={handleUserLogin}
                className="w-full py-2 px-4 bg-blue-900 text-white font-semibold rounded-lg shadow-lg mb-4"
              >
                Login User
              </button>
            </div>

            {/* Main Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-900 text-white font-semibold rounded-lg shadow-lg"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
