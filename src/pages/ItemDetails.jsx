import { useParams } from "react-router-dom";

export default function ItemDetails() {
  const { item } = useParams();

  


  return (
    <>
      <div>
            { }
            <div className=" mt-[135px] p-8 ">
                <h1 className="text-3xl font-bold text-left">Halaman {item}</h1>
                <p className=" text-left text-gray-700">
                    Selamat datang di halaman {item}.
                    <div className="w-[900px] h-[500px] bg-gray-300 shadow-lg flex items-center justify-center text-white font-bold text-xl mx-auto -mt-5">

                    </div>

                </p>
            </div>

        </div>
    );
    </>
  );
}
