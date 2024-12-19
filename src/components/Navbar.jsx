import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const topX = 50;
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Untuk mendapatkan URL saat ini

  // Efek untuk mengubah navbar saat scroll
  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > topX);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi untuk navigasi
  const handleButtonClick = (buttonName) => {
    navigate(`/${buttonName.toLowerCase()}`); // Arahkan ke halaman yang sesuai
  };

  // Cek apakah URL saat ini sesuai dengan nama halaman
  const isActivePage = (page) => location.pathname === `/${page.toLowerCase()}`;

  return (
    <div
      className={`${active ? "bg-opacity-100" : "bg-opacity-0"
        } absolute top-0 left-0 w-full shadow-lg z-50 flex justify-between px-8 py-2 bg-slate-800 transition-all duration-300 ease-in-out`}
    >
      {/* Logo */}
      <img src="/src/assets/logo.svg" alt="Logo" className="w-[200px]" onClick={() => handleButtonClick("")} />

      {/* Button Group */}
      <div className="flex gap-8 items-center">
        <div
          className={`py-3 ${isActivePage("sepatu") || isActivePage("topi") || isActivePage("kaos") || isActivePage("jam-tangan")
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

        {/* Icon User */}
        <div className="rounded-full bg-[#D9D9D9] h-[74px] w-[74px] flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-[24px] w-[24px] text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
