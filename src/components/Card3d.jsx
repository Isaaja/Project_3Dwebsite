import React from "react";

const Card3d = ({ src, judul, barang }) => {
  return (
    <div
      className="min-w-[300px] h-[300px] bg-cover rounded-[38px]  p-[28px] flex flex-col justify-between "
      data-aos="fade-up"
      style={{
        boxShadow: "0 4px 7px 0px rgba(0, 0, 0, 0.5)",
        backgroundImage: `url(${src})`,
      }}
    >
      <p className="font-[900] text-[20px] ">{judul}</p>
      <p>{barang}</p>
    </div>
  );
};

export default Card3d;
