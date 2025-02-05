"use client";

import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement & {
      name: { value: string };
      email: { value: string };
      password: { value: string };
    };

    const newUser = {
      name: target.name.value,
      email: target.email.value,
      password: target.password.value,
    };

    try {
      const resp = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/signup/api`,
        newUser,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );

      if (resp.status >= 200 && resp.status < 300) {
        target.reset();
        setErrorMessage(null);
        toast.success("Registration successful!"); // Show success toast
      }
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "Sign Up failed");
    }
  };

  return (
    <div className="max-h-screen flex items-center justify-center bg-defult-200 py-3 px-12 sm:px-8 lg:px-10">
      <div className="flex justify-center w-full max-w-5xl bg-slate-50 shadow-lg rounded-lg overflow-hidden">
        <div className="w-full lg:w-1/2 px-8 py-10">
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900">
            Register Account
          </h2>

          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r bg-blue-900 text-white font-semibold rounded-lg shadow-lg"
              >
                Register
              </button>
            </div>
          </form>

          {errorMessage && (
            <div className="text-red-600 text-sm mt-2">{errorMessage}</div>
          )}

          <p className="text-center mt-4 text-sm text-gray-600">
            I have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
