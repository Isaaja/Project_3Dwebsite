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


  console.log(item)

  return (
    <>
        <div className="h-screen overflow-hidden w-full">
          <div className=" mt-32 p-8 ">
            <h1 className="text-3xl font-bold text-left">{item.name}</h1>
            <p className=" text-left text-gray-700">{item.description}</p>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <ThreeDViewer path={item.model3d} texturePath={item.texture}/>
          </div>
        </div>
    </>
  );
}
