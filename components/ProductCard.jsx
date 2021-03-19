import React, { useState, useEffect } from 'react';

const ProductCard = ({ id, title }) => {
  const [image, setImage] = useState('');
  useEffect(() => {
    setImage(`/products/product-${id}.png`);
  }, []);
  return (
    <div className='col-6 col-md-4 p-2 mt-3'>
      <div className='card shadow'>
        <img src={image} alt='' className='card-top-img' />
        <div className='card-body p-3 text-center'>
          <h5 className='card-title text-capitalize'>{title}</h5>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
