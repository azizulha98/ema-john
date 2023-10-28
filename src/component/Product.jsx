import React from 'react';

const Product = ({ product, handleAdd }) => {
  const { img, price, name, seller, ratings } = product;
  return (
    <div>
      <div className="card w-full h-{500px} bg-base-100 shadow-xl ">
        <figure><img src={img ? img : 'Not Found'} className='h-56 w-full' /></figure>
        <div className="card-body">
          <h2>{name}</h2>
          <p>Price: {price}</p>
          <div className="card-actions">
            <h2>Seller: {seller}</h2>
            <h2>Ratings: {ratings}</h2>
          </div>
          <div className='relative'>
            <button onClick={() => handleAdd(product)} className='w-full btn'>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;