import React from 'react';
import PageHeading from '../components/Homepage/PageHeading';
import ProductCard from '../components/ProductCard';

const products = {
  fish: [
    {
      id: 1,
      title: 'Shrimp Golda (10/15 pcs) 500 GM',
    },
    {
      id: 2,
      title: 'Deshi Sarputi Fish (3/4 pcs) 500 GM',
    },
    {
      id: 3,
      title: 'Whole Halisha (500 GM)',
    },
    {
      id: 4,
      title: 'Poa Fish (500 GM)',
    },
    {
      id: 5,
      title: 'Black Crap After Cutting (1.5 KG)',
    },
    {
      id: 6,
      title: 'Whole Halisha (900 GM)',
    },
  ],
  vegitables: [
    {
      id: 7,
      title: 'Onion (Red)',
    },
    {
      id: 8,
      title: 'Potato',
    },
    {
      id: 9,
      title: 'Red Tomato',
    },
    {
      id: 10,
      title: 'Cauliflower',
    },
    {
      id: 11,
      title: 'Corilander Leaves',
    },
    {
      id: 12,
      title: 'Garlic',
    },
  ],
};

const shop = () => {
  return (
    <>
      <PageHeading title='Cheapest price in country guranteed' />
      <div className='container'>
        <div className='row mt-4'>
          <h3>Fish</h3>
          {products.fish.map((product) => (
            <ProductCard id={product.id} title={product.title} key={product.id} />
          ))}
        </div>
        <div className='row mt-4'>
          <h3>Vegitables</h3>
          {products.vegitables.map((product) => (
            <ProductCard id={product.id} title={product.title} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default shop;
