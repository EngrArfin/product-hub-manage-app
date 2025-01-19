import { title } from "../../primitives";
import ProducrCard from "./ProducrCard";

const ProducrData = () => {
  return (
    <section className=" py-5 px-5 mx-auto ">
      <h1 className="text-4xl font-medium text-center mb-5 text-gray-900 truncate">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        <ProducrCard />
      </div>
    </section>
  );
};

export default ProducrData;
