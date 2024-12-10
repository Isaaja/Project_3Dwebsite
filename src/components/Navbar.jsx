import { User } from "@phosphor-icons/react";

const Navbar = () => {
  return (
    <>
      <div className="navbar absolute top-0 left-0 ">
        <div className="navbar-start">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Sepatu</a>
              </li>
              <li>
                <a>Topi</a>
              </li>
              <li>
                <a>Kaos</a>
              </li>
              <li>
                <a>Jam Tangan</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">BrandKu</a>
        </div>
        <div className="navbar-end hidden lg:flex gap-3 *:*:*:text-base-100 ">
          <ul className="menu menu-horizontal px-1 bg-transparent shadow-xl rounded-full">
            <li>
              <a className="hover:text-red-500">Sepatu</a>
            </li>
            <li>
              <a className="hover:text-red-500">Topi</a>
            </li>
            <li>
              <a className="hover:text-red-500">Kaos</a>
            </li>
            <li>
              <a className="hover:text-red-500">Jam Tangan</a>
            </li>
          </ul>
          <a className="btn rounded-full w-12 h-12 px-3">
            <User color="black" size={50} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
