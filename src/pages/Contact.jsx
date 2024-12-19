const Contact = () => {
  return (
    <>
      <div className="bg-[#384C9D] flex flex-col justify-center items-center gap-[24px] py-[80px] rounded-t-[50px]">
        <img
          src="/assets/products/logo-2.jpeg"
          alt=""
          className="w-[75px] h-[75px] rounded-full"
        />
        <div className="flex gap-[40px] items-center">
          <div
            className="h-[122px] bg-[#D9D9D9]/[.05] rounded-[50px] flex justify-center items-center px-[32px] gap-[40px] "
            style={{
              boxShadow: "0 0 18px 13px rgba(0, 0, 0, 0.2)",
            }}
          >
            <button
              className="bg-[#FFFFFF26] text-white rounded-full px-4 py-2 hover:bg-blue-600 transition min-w-[122px] h-[74px] "
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
        </div>
      </div>
    </>
  );
};
export default Contact;
