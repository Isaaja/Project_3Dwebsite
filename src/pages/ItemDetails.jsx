import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ThreeDViewer from "../components/ThreeDViewer";

export default function ItemDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await fetch("/api/data/newData.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        const foundItem = data.items.find((item) => item.id === parseInt(id));
        if (!foundItem) {
          throw new Error("Item not found");
        }

        setItem(foundItem);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItemDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="h-screen overflow-hidden w-full bg-white px-8">
        <div className="item-details w-full h-full flex items-center justify-between">
          <div className="details-wrapper flex flex-col w-1/4 gap-3">
            <h1 className="text-5xl font-bold text-left">{item.name}</h1>
            <p className=" text-left text-xl text-gray-700">
              {item.description}
            </p>
          </div>

          <div className="item-details-control w-1/6 gap-3 flex flex-col relative z-30">
            <h1 className="uppercase font-bold">Pilih Seri Barang</h1>
            <div className="button-wrapper w-full grid grid-cols-2 grid-flow-row place-items-start gap-6">
              <button className="btn btn-outline px-10">Seri A</button>
              <button className="btn btn-outline px-10">Seri B</button>
              <button className="btn btn-outline px-10">Seri C</button>
              <button className="btn btn-outline px-10">Seri D</button>
            </div>

            <div className="color-selection mt-2 2xl:mt-12 flex flex-col gap-4">
              <h1 className="uppercase font-bold">Pilih Warna</h1>
              <div className="color-button-wrapper flex gap-3 flex-wrap">
                <button className="btn w-12 h-12 rounded-full bg-red-500 hover:bg-red-500"></button>
                <button className="btn w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-500"></button>
                <button className="btn w-12 h-12 rounded-full bg-green-500 hover:bg-green-500"></button>
                <button className="btn w-12 h-12 rounded-full bg-yellow-500 hover:bg-yellow-500"></button>
                <button className="btn w-12 h-12 rounded-full bg-purple-500 hover:bg-purple-500"></button>
              </div>
            </div>

            <button className="order-button btn mt-2 2xl:mt-12 rounded-badge text-xl font-bold bg-secondary">Order Here</button>
          </div>
        </div>
        <div className="absolute w-full h-full  z-20 top-0 left-0 overflow-hidden">
          <ThreeDViewer path={item.model3d} texturePath={item.texture} />
        </div>
      </div>
    </>
  );
}
