import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const topX = 50;
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Untuk mendapatkan URL saat ini

  const { pathname } = location;

  console.log(pathname)

  // Fungsi untuk navigasi
  const handleButtonClick = (buttonName) => {
    navigate(`/item-details/${buttonName.toLowerCase()}`); // Arahkan ke halaman yang sesuai
  };

  // Cek apakah URL saat ini sesuai dengan nama halaman
  const isActivePage = (page) => location.pathname === `/${page.toLowerCase()}`;

  return (
    <div className={`absolute w-full top-0 flex justify-between px-8 transition-all duration-300 ease-in-out ${pathname !== "/" ? "bg-slate-500" : "transparent"}`}>
      {/* Logo */}
      <img
        src="/assets/products/LogoDesign-transformed.webp"
        alt="Logo"
        width={150}
        onClick={() => navigate("/")}
      />

      {/* Button Group */}
      <div className="flex gap-8 items-center">
        <div
          className={`py-3 ${
            isActivePage("sepatu") ||
            isActivePage("topi") ||
            isActivePage("kaos") ||
            isActivePage("jam-tangan")
              ? "text-black"
              : "text-white"
          } bg-[#D9D9D9]/[.05] rounded-[50px] flex justify-center items-center px-[32px] gap-8 font-bold`}
          style={{ boxShadow: "0 0 18px 13px rgba(0, 0, 0, 0.2)" }}
        >
          <button
            className="bg-[#FFFFFF26] rounded-full px-4 py-2 font-inter transition min-w-[122px] h-16"
            onClick={() => handleButtonClick("sepatu")}
          >
            Sepatu
          </button>
          <button
            className="bg-[#FFFFFF26] rounded-full px-4 py-2 font-inter transition min-w-[122px] h-16"
            onClick={() => handleButtonClick("topi")}
          >
            Topi
          </button>
          <button
            className="bg-[#FFFFFF26] rounded-full px-4 py-2 font-inter transition min-w-[122px] h-16"
            onClick={() => handleButtonClick("kaos")}
          >
            Kaos
          </button>
          <button
            className="bg-[#FFFFFF26] rounded-full px-4 py-2 font-inter transition min-w-[122px] h-16"
            onClick={() => handleButtonClick("jam-tangan")}
          >
            Jam Tangan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
