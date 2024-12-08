const Navbar = () => {
  return (
    <>
      <div className="absolute top-4 right-4 flex items-center justify-end w-full">
        <div className="w-16 h-16 absolute inset-y-0 left-6 rounded-full bg-[#FFFFFF26]">
          <div className=" w-16 h-16 items-center justify-center flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <div className="rounded-full bg-[#D9D9D90D] h-16 w-[500px] mr-2 gap-5 flex justify-center">
            <button
              className="bg-[#FFFFFF26] text-white rounded-full px-4 py-2 hover:bg-blue-600 transition"
              onClick={() => handleButtonClick("Button 1")}
            >
              Button 1
            </button>
            <button
              className="bg-[#FFFFFF26] text-white rounded-full px-4 py-2 hover:bg-green-600 transition"
              onClick={() => handleButtonClick("Button 2")}
            >
              Button 2
            </button>
            <button
              className="bg-[#FFFFFF26] text-white rounded-full px-4 py-2 hover:bg-red-600 transition"
              onClick={() => handleButtonClick("Button 3")}
            >
              Button 3
            </button>
            <button
              className="bg-[#FFFFFF26] text-white rounded-full px-4 py-2 hover:bg-red-600 transition"
              onClick={() => handleButtonClick("Button 3")}
            >
              Button 3
            </button>
          </div>

          <div className="rounded-full bg-[#D9D9D9] h-16 w-16">
            <div className="h-full w-full rounded-full flex items-center justify-center bg-red">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 text-white"
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
      </div>
    </>
  );
};

export default Navbar;
