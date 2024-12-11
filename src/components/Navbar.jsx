import { User } from "@phosphor-icons/react";

const Navbar = () => {
  return (
    <div className="navbar absolute top-0 left-0 w-full h-[15%] px-4">
      <div className="navbar-start flex items-center">
        <img src="/assets/logo/Logo.svg" alt="Logo" width={250} />

        {/* Dropdown Menu for Mobile */}
        <div className="dropdown lg:hidden ml-4">
          <button
            tabIndex={0}
            className="btn btn-ghost"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-10"
          >
            <li><a href="#">Sepatu</a></li>
            <li><a href="#">Topi</a></li>
            <li><a href="#">Kaos</a></li>
            <li><a href="#">Jam Tangan</a></li>
          </ul>
        </div>
      </div>

      {/* Desktop Navigation Menu */}
      <div className="navbar-end hidden lg:flex items-center gap-4 w-full ">
        <ul className="menu menu-horizontal bg-white/15 shadow-2xl rounded-full py-3 px-6 flex justify-around items-center w-3/4">
          <li><a href="#" className="hover:text-black rounded-full bg-white/20 ">Sepatu</a></li>
          <li><a href="#" className="hover:text-black rounded-full bg-white/20">Topi</a></li>
          <li><a href="#" className="hover:text-black rounded-full bg-white/20">Kaos</a></li>
          <li><a href="#" className="hover:text-black rounded-full bg-white/20">Jam Tangan</a></li>
        </ul>

        <button className="btn bg-white/80 rounded-full w-16 h-16 flex justify-center items-center shadow-md">
          <User color="black" size={32} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
