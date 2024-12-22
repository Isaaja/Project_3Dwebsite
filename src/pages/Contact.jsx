import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const topX = 50;
  const [active, setActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false); // Menyimpan apakah tombol sudah diklik
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > topX);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleButtonClick = (buttonName) => {
    setIsClicked(true); // Menandakan tombol sudah diklik
    navigate(`/${buttonName.toLowerCase()}`); // Arahkan ke halaman yang sesuai
  };

  return (
    <div className="bg-[#384C9D] flex flex-col justify-center items-center gap-[24px] py-[80px] rounded-t-[50px]">
      <img
        src="/assets/products/logo-2.jpeg"
        alt=""
        className="w-[75px] h-[75px] rounded-full"
      />
      <div className="flex gap-[40px] items-center">
        {/* Button Group */}
        <div className="flex gap-[40px] items-center ">
          <div
            className="h-[100px] bg-[#D9D9D9]/[.05] rounded-[50px] flex justify-center items-center px-[32px] gap-[40px] font-bold text-white"
            style={{ boxShadow: "0 0 18px 13px rgba(0, 0, 0, 0.2)" }}
          >
            <button
              className={`${isClicked ? "text-black" : "text-white"
                } bg-[#FFFFFF26] rounded-full px-4 py-2 hover:text-black font-inter transition min-w-[122px] h-[74px]`}
              onClick={() => handleButtonClick("Sepatu")}
            >
              Sepatu
            </button>
            <button
              className={`${isClicked ? "text-black" : "text-white"
                } bg-[#FFFFFF26] rounded-full px-4 py-2 hover:text-black font-inter transition min-w-[122px] h-[74px]`}
              onClick={() => handleButtonClick("Topi")}
            >
              Topi
            </button>
            <button
              className={`${isClicked ? "text-black" : "text-white"
                } bg-[#FFFFFF26] rounded-full px-4 py-2 hover:text-black font-inter transition min-w-[122px] h-[74px]`}
              onClick={() => handleButtonClick("Kaos")}
            >
              Kaos
            </button>
            <button
              className={`${isClicked ? "text-black" : "text-white"
                } bg-[#FFFFFF26] rounded-full px-4 py-2 hover:text-black font-inter transition min-w-[122px] h-[74px]`}
              onClick={() => handleButtonClick("Jam Tangan")}
            >
              Jam Tangan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
