"use client";

import axios from "axios";
import Link from "next/link";
import { Suspense } from "react";

const SignUp = () => {
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

      if (resp.status === 200) {
        target.reset();
      }
    } catch (error) {
      console.error("Sign Up failed", error);
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
                  placeholder="Enter  password"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r bg-blue-900  text-white font-semibold rounded-lg shadow-lg "
                >
                  Register
                </button>
              </div>
            </form>

            <p className="text-center mt-4 text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-sky-600 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default SignUp;
/* 
"use client"; 

import { useState } from "react";
import { useSignupMutation } from "../(withCommonLayout)/Redux/api/api";
import { useAppDispatch } from "../(withCommonLayout)/Redux/hooks";
import { signup } from "../(withCommonLayout)/Redux/features/signupSlice";
import Link from "next/link";
import { useRouter } from "next/router";

const Signup = () => {
  const [signupUser, { isLoading, error }] = useSignupMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await signupUser(formData).unwrap();
      dispatch(signup(result));
      router.push("/login");
    } catch (err) {
      console.error("Signup failed", err);
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex justify-center items-center bg-gray-100 p-8">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Sign Up Account
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              {isLoading ? "Signing up..." : "Sign Up"}
            </button>
          </form>

          {error && (
            <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
              There was an error signing up!
            </div>
          )}

          <div className="mt-4 text-center">
            <span className="text-sm text-gray-600">
              Already have an account?{" "}
            </span>
            <Link href="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
 */
