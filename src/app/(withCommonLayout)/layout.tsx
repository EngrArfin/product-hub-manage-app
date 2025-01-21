import { Navbar } from "@/src/components/navbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="container mx-auto flex flex-col h-screen">
      <Navbar />
      <div>{children}</div>
    </main>
  );
}
