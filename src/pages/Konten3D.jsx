import React from "react";
import { motion } from "framer-motion";
import Card3d from "../components/Card3d";

const Konten3D = () => {
  const gambar = [
    "/public/assets/products/baju.jpeg",
    "/public/assets/products/jam-tangan.jpeg",
    "/public/assets/products/baju.jpeg",
    "/public/assets/products/baju.jpeg",
    "/public/assets/products/baju.jpeg",
    "/public/assets/products/baju.jpeg",
    "/public/assets/products/baju.jpeg",
    "/public/assets/products/baju.jpeg",
  ];

  return (
    <>
      <div className="w-full bg-accent h-[110vh] relative overflow-hidden">
        <div className="bg-[#F7EEDD] w-[55%] h-[75%] rounded-3xl top-0">
          <div className="text-black  h-full flex flex-col p-10 relative">
            <h1 className="text-5xl top-5">Lorem Ipsum</h1>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, dignissimos ab numquam veritatis aperiam quod alias
              reprehenderit, id a maxime, accusamus officia ipsum consequatur
              assumenda? Error non modi deleniti eveniet.
            </p>
          <motion.div
            className="flex justify-start absolute gap-8 left-10 bottom-6 no-scrollbar"
            drag="x"
            dragConstraints={{ left: -600, right: 0 }}
          >
            {gambar.map((src, index) => (
              <Card3d key={index} src={src} link={""} />
            ))}
          </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Konten3D;
