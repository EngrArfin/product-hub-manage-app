import React, { ReactNode } from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="container mx-auto flex flex-col h-screen">
      <div>{children}</div>
    </main>
  );
}
