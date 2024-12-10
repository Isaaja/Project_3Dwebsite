import React from "react";
import ItemDetails from "./ItemDetails";

const Landingpages = () => {
  const item = {
    nama: "sepatu",
    src: "/asset/mm",
    
  }

  return (
    <div>
      <ItemDetails item={item}/>
    </div>
  );
};
export default Landingpages;
