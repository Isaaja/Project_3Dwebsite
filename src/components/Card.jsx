import React from "react";

const Card = ({ src, judul, barang }) => {
  return (
    <div
      className="min-w-[250px] h-[250px] bg-cover rounded-[38px]  p-[28px] flex flex-col justify-between"
      data-aos="fade-up"
      data-aos-duration="2000"
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

export default Card;
