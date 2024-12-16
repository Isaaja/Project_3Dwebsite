import React from "react";
import Card from "../components/Card";

const Dashboard = () => {
  return (
    <div className="bg-hero-images w-full h-screen bg-no-repeat bg-cover bg-center rounded-b-3xl text-[#FFFFFF] pb-5">
      {/* Order section */}
      <div className="absolute w-full h-screen flex items-center">
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-[#ACE2E1] px-5 py-4 rounded-full flex gap-2 items-center">
          <p className="font-black text-[#1C2757] text-xl">
            Order Here
          </p>
          {/* Rounded Button */}
          <div className="bg-[#000000] w-12 h-12 rounded-full"></div>
        </div>

        {/* Main heading */}
        <p className="rubik-distressed-regular text-6xl mx-auto">
          Your Style, Your Way
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex justify-end overflow-hidden gap-7 items-end w-full px-9 h-full">
        <Card
          src="/public/assets/products/card-1.jpeg"
          judul="Sepatu"
          barang="sepatu"
        />
        <Card
          src="/public/assets/products/card-1.jpeg"
          judul="Topi"
          barang="sepatu"
        />
        <Card
          src="/public/assets/products/card-1.jpeg"
          judul="Kaos"
          barang="sepatu"
        />
        <Card
          src="/public/assets/products/card-1.jpeg"
          judul="Jam Tangan"
          barang="sepatu"
        />
      </div>
    </div>
  );
};

export default Dashboard;
