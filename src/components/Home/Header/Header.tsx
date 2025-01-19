import { title } from "../../primitives";

const Header = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Product Hub &nbsp;</span>
        <span className={title({ color: "violet" })}>Manager&nbsp;</span>
      </div>
    </section>
  );
};

export default Header;
