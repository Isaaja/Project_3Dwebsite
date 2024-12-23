import React from "react";
import Card from "../components/Card";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <div className="bg-hero-images w-full flex flex-col justify-end h-screen bg-no-repeat bg-cover bg-center rounded-b-3xl text-[#FFFFFF] pb-5">
      {/* Order section */}
      <div className="flex items-center h-1/2 flex-col justify-between">
        {/* Main heading */}
        <h1 className="rubik-distressed-regular md:text-4xl 2x:text-6xl">
          Your Style, Your Way
        </h1>

        {/* Cards Section */}
        <div className="flex justify-end gap-7 items-end w-full px-9">
          <div className="w-1/2 flex overflow-hidden">
            <motion.div
              className="card-wrapper flex gap-8 no-scrollbar "
              drag="x"
              dragConstraints={{ left: -500, right: 0 }}
            >
              <Card
                src="/assets/products/card-1.jpeg"
                judul="Sepatu"
                barang="sepatu"
                
              />
              <Card
                src="/assets/products/card-1.jpeg"
                judul="Topi"
                barang="sepatu"
              />
              <Card
                src="/assets/products/card-1.jpeg"
                judul="Kaos"
                barang="sepatu"
              />
              <Card
                src="/assets/products/card-1.jpeg"
                judul="Jam Tangan"
                barang="sepatu"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
