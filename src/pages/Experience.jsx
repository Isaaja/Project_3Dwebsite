const Experience = () => {
  return (
    <div className="px-5 w-full">
      <div className="bg-[#F7EEDD] h-screen rounded-t-[75px] flex gap-3 justify-between">
        <div className=" w-[50%] flex flex-col h-full justify-center items-left">
          <h1 className="font-bold text-3xl">Brandku</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            placeat architecto culpa fuga ex blanditiis ullam repellat laborum
            laudantium facilis assumenda, at omnis natus sit voluptatum iusto,
            aliquid hic voluptatibus!
          </p>
        </div>
        <div className="w-[50%] h-full flex justify-center items-center">
          <img src="/public/assets/products/experience.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
