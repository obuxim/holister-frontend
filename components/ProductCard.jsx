import React, { useState, useEffect } from "react";

const ProductCard = ({ id, title }) => {
  const [image, setImage] = useState("");
  useEffect(() => {
    setImage(`/products/products-${id}.png`);
  }, []);
  return (
    <div className="col-4 p-2">
      <div className="card shadow">
        <img src={image} alt="" className="card-top-img" />
        <div className="card-body p-3 text-center">
          <h6 className="card-title">{title}</h6>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
