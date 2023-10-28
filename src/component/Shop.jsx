import React, { useEffect, useState } from 'react';
import Product from './Product';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  const handleAdd = () => {
    console.log('add product to cart');
  }

  return (
    <div className='max-w-screen-xl mx-auto my-2 py-5 px-2 md:px-3 lg:px-4'>
      <div className="drawer drawer-end lg:drawer-open gap-5">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {products.map(product => <Product product={product} key={product.id} handleAdd={handleAdd} />)}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-2 w-56 bg-base-200 text-base-content mb-3 rounded-xl">
            <li className='text-center text-xl font-semibold'>Order Summary</li>
          </ul>
          <ul className=" p-4 w-56 min-h-min bg-base-200 text-base-content rounded-xl space-y-3">
            <p>Selected Items: 6</p>
            <p>Total Price: $1140</p>
            <p>Total Shipping Charge: $5</p>
            <p>Tax: $114</p>
            <p>Grand Total: $1559</p>
            <div className='space-y-3'>
              <button className='btn btn-sm w-full btn-accent'>Clear Cart</button>
              <button className='btn btn-sm w-full btn-accent'>Review Order</button>
            </div>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Shop;