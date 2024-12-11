import Card from "../components/Card";
import { motion } from "framer-motion";

const Products = () => {
  return (
    <>
      <div className="w-full bg-accent h-[110vh] relative overflow-hidden ">
        <div className="bg-[#F7EEDD] w-[55%] h-[75%] rounded-3xl top-0">
          <div className="text-black  h-full flex flex-col p-10 relative">
            <h1 className="text-5xl top-[20px]">Lorem Ipsum</h1>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, dignissimos ab numquam veritatis aperiam quod alias
              reprehenderit, id a maxime, accusamus officia ipsum consequatur
              assumenda? Error non modi deleniti eveniet.
            </p>
          </div>
          <motion.div
            className="flex justify-start absolute gap-8 left-10 bottom-0 overflow-x-scroll no-scrollbar"
            drag="x"
            dragConstraints={{ left: -600, right: 0 }}
          >
            {[...Array(4).keys()].map((num) => (
              <Card
                key={num}
                src={
                  "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                }
                link={""}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default Products;
