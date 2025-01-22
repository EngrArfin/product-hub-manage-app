import Footer from "./footer/page";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="container mx-auto flex flex-col h-screen">
      <div>{children}</div>
      <Footer />
    </main>
  );
}
