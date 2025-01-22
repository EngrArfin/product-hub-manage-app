"use client";

import { useSession, signOut } from "next-auth/react";

const UserDashboard = () => {
  const { data: session } = useSession();

  if (!session) {
    return <p>Loading...</p>;
  }

  const { name, role } = session.user || {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">
          Welcome, {role === "user" ? "User" : "Admin"}!
        </h1>
        {name && (
          <p className="text-gray-600">
            Hello, <span className="font-semibold">{name}</span>! You're logged
            in as a <strong>{role}</strong>.
          </p>
        )}

        <div className="mt-4">
          <button
            onClick={() => signOut()}
            className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
