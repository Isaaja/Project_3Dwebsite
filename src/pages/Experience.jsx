const Experience = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full flex justify-center items-center">
        <div className="bg-[#F7EEDD] mr-8 ml-8 h-dvh flex overflow-hidden shadow-lg mx-auto rounded-t-[50px]">
          {/* Left Content */}
          <div className="w-1/2 p-10 flex flex-col justify-center font-inter">
            <h1 className="font-extrabold text-6xl mb-5">Unleash your expression</h1>
            <p className="text-gray-700 leading-relaxed">
              The world of fashion is about self-expression, and we believe that
              everyone has a distinct style that they can share with the world.
              We strive to assist you locate apparel, watches, and other
              accessories that will allow you to confidently express yourself.
            </p>
          </div>

          {/* Right Image */}
          <div
            className="w-1/2 flex justify-center items-center relative"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <img
              src="assets/products/experience.png"
              alt="Fashion Inspiration"
              className="rounded-2xl object-cover w-[80%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
