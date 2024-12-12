const Navbar = () => {
  const handleButtonClick = (name) => {
    console.log(`${name} clicked`);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-transparent shadow-lg z-50 flex justify-between px-[60px] py-2">
        {/* Logo */}
        <img
          src="/src/assets/logo.svg"
          alt="Logo"
          className="w-[200px]"
        />

        {/* Button Group */}
        <div className="flex gap-[40px] items-center ">
          <div
            className="h-[100px] bg-[#D9D9D9]/[.05] rounded-[50px] flex justify-center items-center px-[32px] gap-[40px]"
            style={{ boxShadow: "0 0 18px 13px rgba(0, 0, 0, 0.2)" }}
          >
            <button
              className="bg-[#FFFFFF26] text-white rounded-full px-4 py-2 hover:bg-blue-600 transition min-w-[122px] h-[74px]"
              onClick={() => handleButtonClick("Sepatu")}
            >
              Sepatu
            </button>
            <button
              className="bg-[#FFFFFF26] text-white rounded-full px-4 py-2 hover:bg-green-600 transition min-w-[122px] h-[74px]"
              onClick={() => handleButtonClick("Topi")}
            >
              Topi
            </button>
            <button
              className="bg-[#FFFFFF26] text-white rounded-full px-4 py-2 hover:bg-red-600 transition min-w-[122px] h-[74px]"
              onClick={() => handleButtonClick("Kaos")}
            >
              Kaos
            </button>
            <button
              className="bg-[#FFFFFF26] text-white rounded-full px-4 py-2 hover:bg-red-600 transition min-w-[122px] h-[74px]"
              onClick={() => handleButtonClick("Jam Tangan")}
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
    </>
  );
};

export default Navbar;
