import { div } from "framer-motion/client";
import React from "react";

const Card3d = ({ src, judul, barang }) => {
  return (
    <div className="w-full h-full flex flex-col justify-between ">
      <div
        className="w-96 h-72 bg-cover rounded-[38px]  p-[28px] bg-center "
        data-aos="fade-up"
        style={{
          boxShadow: "0 4px 7px 0px rgba(0, 0, 0, 0.5)",
          backgroundImage: `url(${src})`,
        }}
      >
        <p className="font-[900] text-[20px] ">{judul}
        </p>
        <p>{barang}</p>
      </div>
    </div>
  );
};

export default Card3d;
