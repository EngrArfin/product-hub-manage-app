import { Input } from "@heroui/input";
import { title } from "../../primitives";
import { SearchIcon } from "../../icons";

const Header = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Product Hub &nbsp;</span>
        <span className={title({ color: "violet" })}>Manager&nbsp;</span>
      </div>
      <div className="h-[calc(100vh-64px)] bg-[url('/glass.jpg')] bg-cover bg-center">
        <div className="pt-32 max-w-xl flex-1 mx-auto">
          <form className="flex-1">
            <Input
              aria-label="Search"
              classNames={{
                inputWrapper: "bg-default-100",
                input: "text-sm",
              }}
              placeholder="Search.."
              size="lg"
              startContent={
                <SearchIcon className="pointer-events-none flex-shrink-0 text-ellipsis" />
              }
            />
            {/* <input type="search" name="search" id="search" /> */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Header;
