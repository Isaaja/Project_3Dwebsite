import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Determine which logo to show based on the current path
  const isHomePage = location.pathname === "/";
  const logoSrc = isHomePage
    ? "/assets/products/a-logo-with-the-text-brandku-in-a-distre_xI4h2yGbRD6ajuHiiXhGiw_dEGJ21gpT0CNA2HACMFmiQ-removebg@2x.png"
    : "/assets/products/LogoDesign-transformed.webp";
  const logoWidth = isHomePage ? "w-52" : "w-36";

  return (
    <div className="absolute w-full top-0 flex justify-between px-8 transition-all duration-300 ease-in-out z-50">
      {/* Logo */}
      <img
        src={logoSrc}
        alt="Logo"
        onClick={() => navigate("/")}
        className={`cursor-pointer mt-5 ${logoWidth}`}
      />

      {/* Button Group */}
      <div className="flex gap-8 items-center">
        <div
          className="bg-[#D9D9D9]/[.05] rounded-[50px] flex justify-center items-center px-[32px] gap-8 font-bold"
          style={{ boxShadow: "0 0 18px 13px rgba(0, 0, 0, 0.2)" }}
        >
          <button
            className="bg-[#FFFFFF26] rounded-full px-4 py-2 font-inter transition min-w-[122px] h-16"
            onClick={() => scrollToSection("bestSeller")}
          >
            Best Seller
          </button>
          <button
            className="bg-[#FFFFFF26] rounded-full px-4 py-2 font-inter transition min-w-[122px] h-16"
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
          <button
            className="bg-[#FFFFFF26] rounded-full px-4 py-2 font-inter transition min-w-[122px] h-16"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
