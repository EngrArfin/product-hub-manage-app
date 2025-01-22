"use client";
import { Divider } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer className="p-10 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
      <div className="w-full bg-transparent">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <aside className="flex items-center gap-4">
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current"
            >
              <path d="M22.672 15.226l-2.432.811..."></path>
            </svg>
            <div>
              <p className="font-bold text-lg">ACME Industries Ltd.</p>
              <p className="text-sm">Providing reliable tech since 1992</p>
            </div>
          </aside>

          <nav className="flex flex-col items-center">
            <p className="font-bold text-md mb-2">Social</p>
            <div className="flex gap-4">
              <a href="#" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-..."></path>
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-..."></path>
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-..."></path>
                </svg>
              </a>
            </div>
          </nav>
        </div>

        <Divider className="my-4" />

        <div className="flex justify-center pt-6">
          <p className="text-xs">© 2025 ProductHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
