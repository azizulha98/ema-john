import React from 'react';
import navLogo from '../images/Logo.svg'
const Header = () => {
  return (
    <div className='bg-black'>
      <div className="navbar  flex justify-between max-w-screen-xl mx-auto">
        <div>
          <img src={navLogo} alt="" />
        </div>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Shop</a></li>
            <li><a>Order</a></li>
            <li><a>Inventory</a></li>
            <li><a>Login</a></li>
          </ul>
        </div>

        <div className="hidden lg:flex">
          <ul className="">
            <li className='space-x-4 text-white text-xl font-semibold uppercase'>
              <a className='hover:text-orange-400' href="/shop">Shop</a>
              <a className='hover:text-orange-400' href="/order">Order</a>
              <a className='hover:text-orange-400' href="/inventory">Inventory</a>
              <a className='hover:text-orange-400' href="/login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;