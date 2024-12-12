import React from "react";
import Card from "../components/Card";

const Dashboard = () => {
  return (
    <div className="bg-hero-images w-screen min-h-screen bg-no-repeat bg-cover bg-center rounded-b-[50px] text-[#FFFFFF]">
      {/* Order section */}
      <div className="absolute w-full h-screen flex items-center">
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-[#ACE2E1] px-[14px] py-[20px] rounded-full flex gap-2 items-center">
          <p className="font-black text-[#1C2757] text-[22px] leading-[50px]">
            Order Here
          </p>
          {/* Rounded Button */}
          <div className="bg-[#000000] w-[50px] h-[50px] rounded-full"></div>
        </div>

        {/* Main heading */}
        <p className="rubik-distressed-regular text-6xl mx-auto">
          Your Style, Your Way
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex overflow-hidden gap-[36px] items-end w-screen px-[200px] pt-[400px] pb-[142px] ">
        <Card
          src="/public/assets/products/card-1.jpeg"
          judul="asdasdas"
          barang="sepatu"
        />
        <Card
          src="/public/assets/products/card-1.jpeg"
          judul="asdasdas"
          barang="sepatu"
        />
        <Card
          src="/public/assets/products/card-1.jpeg"
          judul="asdasdas"
          barang="sepatu"
        />
        <Card
          src="/public/assets/products/card-1.jpeg"
          judul="asdasdas"
          barang="sepatu"
        />
      </div>
    </div>
  );
};

export default Dashboard;
