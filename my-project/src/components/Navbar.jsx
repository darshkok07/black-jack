import React from 'react';
import { NavLink } from 'react-router-dom';
import {assets} from '../assets/assets';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='flex  items-center justify-between py-5 font-medium'>
      <h1 className='text-[2rem] text-gray-800 ml-6 '>BlackJack</h1>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

       <NavLink to='/' className='flex flex-col items-center justify-between gap-2'>
        <p className='text-[1.09rem] mt-3 mr-3 text-gray-700 gap-1'> HOME</p>
          <hr className='w-2/4 border height-[1.5px] bg-gray-700 hidden'/>
       </NavLink>

       <NavLink to='/Collection' className='flex flex-col items-center gap-2'>
        <p className='text-[1.09rem] mt-3 mr-3 text-gray-700'>COLLECTION</p>
          <hr className='w-2/4 border height-[1.5px] bg-gray-700 hidden'/>
       </NavLink>

       <NavLink to='/About' className='flex flex-col items-center gap-2'>
        <p className='text-[1.09rem] mt-3 mr-3 text-gray-700'>ABOUT</p>
          <hr className='w-2/4 border height-[2px] bg-gray-700 hidden'/>
       </NavLink>

       <NavLink to='/Contact' className='flex flex-col items-center gap-2'>
        <p className='text-[1.09rem] mt-3 text-gray-700'>CONTACT</p>
          <hr className='w-2/4 border height-[1.5px] bg-gray-700 hidden'/>
       </NavLink>

       <h4 className='border-blue-200 border-[0.5px] text-[0.9rem] font-semibold rounded-full px-4 py-2 cursor-pointer'>Admin Panel</h4>
      </ul>

      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} className='w-6 h-6 cursor-pointer' alt="" />

        <div className='group relative'>
          <img src={assets.profile_icon} className='w-6 h-6 cursor-pointer' alt="" />
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>
        <Link to='/Cart' className='relative'>
          <img src={assets.cart_icon} className='w-6 h-6 cursor-pointer' alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;