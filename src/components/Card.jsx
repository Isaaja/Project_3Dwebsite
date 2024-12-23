import React from "react";

const Card = ({ src, judul, barang, info }) => {
  return (
    <div
      className="min-w-[250px] h-[250px] bg-cover rounded-[38px]  p-[28px] flex flex-col justify-between relative "
      data-aos="fade-up"
      data-aos-duration="2000"
      style={{
        boxShadow: "0 4px 7px 0px rgba(0, 0, 0, 0.5)",
        backgroundImage: `url(${src})`,
      }}
    >
      <p className="text-3xl text-[20px]">{judul}</p>
      {/* <div className=" w-full h-36 rounded-full flex justify-center items-center absolute  ml-7">
        <img src="/assets/point/point.png" alt="" className="hover:bg-black" />
      </div>
      <div className=" w-10 rounded-full flex justify-center items-center mt-28  ">
        <img src="/assets/point/point.png" alt="" className="hover:bg-black"/>
      </div> */}
      <p>tag barang: {barang}</p>
    </div>
  );
};

export default Card;
