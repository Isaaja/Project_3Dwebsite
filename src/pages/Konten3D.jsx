import React, { useState } from "react";
import { motion } from "framer-motion";
import Card3d from "../components/Card3d";

const Konten3D = () => {
  const gambar = [
    "/assets/products/baju.jpeg",
    "/assets/products/jam-tangan.jpeg",
    "/assets/products/baju.jpeg",
    "/assets/products/baju.jpeg",
    "/assets/products/baju.jpeg",
    "/assets/products/baju.jpeg",
    "/assets/products/baju.jpeg",
    "/assets/products/baju.jpeg",
  ];

  const openModal = () => {
    document.getElementById("text_modal").showModal();
  };

  const closeModal = () => {
    document.getElementById("text_modal").close();
  };

  return (
    <>
      <div className="w-full bg-accent h-[110vh] relative overflow-hidden">
        <div className="bg-[#F7EEDD] w-[55%] h-[75%] rounded-3xl top-0">
          <div className="text-black h-full flex flex-col p-10 relative">
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
                <div key={index} onClick={openModal}>
                  <Card3d src={src} link={""} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <dialog id="text_modal" className="modal w-full h-full bg-transparent flex items-center justify-center">
        <div className="modal-box w-[50%] h-[50%] flex flex-col p-10 bg-red-600 justify-center items-center rounded-3xl">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={closeModal}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Konten3D;
