import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Card3d from "../components/Card3d";

const Konten3D = () => {
  const navigate = useNavigate();

  const gambar = [
    { id: 1, src: "/assets/products/baju.jpeg" },
    { id: 2, src: "/assets/products/jam-tangan.jpeg" },
    { id: 3, src: "/assets/products/baju.jpeg" },
    { id: 4, src: "/assets/products/baju.jpeg" },
  ];

  const goToItemDetails = (id) => {
    navigate(`/item-details/${id}`);
  };

  return (
    <div className="w-full h-[110vh] relative overflow-hidden font-inter">
      <div className="bg-[#F7EEDD] w-[55%] h-[75%] rounded-3xl top-0">
        <div className="text-black h-full flex flex-col p-10 relative ">
          <h1 className="text-5xl top-5 font-bold mt-5" id="bestSeller">
            All of your styling needs are here
          </h1>
          <p className="mt-5">
            Discover a selection of attractive and comfortable apparel for men
            and women, such as shirts and shoes. We also provide a variety of
            attractive and functional timepieces, as well as other accessories
            such as hats.
          </p>
          <motion.div
            className="flex justify-start absolute gap-8 left-10 bottom-6 no-scrollbar"
            drag="x"
            dragConstraints={{ left: -600, right: 0 }}
          >
            {gambar.map((item) => (
              <div key={item.id} onClick={() => goToItemDetails(item.id)}>
                <Card3d src={item.src} link={`/item-details/${item.id}`} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Konten3D;
