import React from "react";
import PageHeading from "../components/Homepage/PageHeading";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    title: "Shrimp Golda (10/15 pcs) 500 GM",
  },
  {
    id: 2,
    title: "Deshi Sarputi Fish (3/4 pcs) 500 GM",
  },
  {
    id: 3,
    title: "Whole Halisha (500 GM)",
  },
  {
    id: 4,
    title: "Poa Fish (500 GM)",
  },
  {
    id: 5,
    title: "Black Crap After Cutting (1.5 KG)",
  },
  {
    id: 6,
    title: "Whole Halisha (900 GM)",
  },
  {
    id: 7,
    title: "Basa Fish Fillet (1 KG)",
  },
  {
    id: 8,
    title: "Kaski Fish (250 GM)",
  },
  {
    id: 9,
    title: "Puti Fish (250 GM)",
  },
  {
    id: 10,
    title: "Koi Fish Processed (10/12 pcs) 1 KG",
  },
];

const shop = () => {
  return (
    <>
      <PageHeading title="Cheapest price in country guranteed" />
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <ProductCard
              id={product.id}
              title={product.title}
              key={product.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default shop;
