import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#f3f3f3]'>
      <div className="main-container text-[14px] py-14 gap-7 grid grid-cols-6">
        <div className='flex flex-col justify-between col-span-2'>
          <NavLink to={'/'}>
            <h1 className='text-3xl font-semibold'>
              <span className='text-red-500'>React</span><span>Cart</span>
            </h1>
          </NavLink>
          <p className='text-[14px]'>Lorem ipsum, or lipsum as it is sometimes kno wn, is dummy text used in laying out print, gra phic or web designs the passage</p>
          <div>
            <h1 className='text-lg font-semibold'>NEWSLETTER</h1>
            <div className='flex text-white'>
              <input type="text" className='rounded-s-md py-2 rounded-e-none text-[14px] w-full placeholder:text-gray-400 text-black' placeholder='Your email address' />
              <button className='bg-red-500 rounded-e-md rounded-s-none text-[14px] py-2 px-3'>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4 justify-between col-span-1'>
          <h1 className='text-lg font-semibold'>
            MY ACCOUNT
          </h1>
          <ul className='flex flex-col gap-2  text-[14px]'>
            <li><a className='hover:text-red-500' href="#">Orders</a></li>
            <li><a className='hover:text-red-500' href="#">Wishlist</a></li>
            <li><a className='hover:text-red-500' href="#">Track Order</a></li>
            <li><a className='hover:text-red-500' href="#">Manage Account</a></li>
            <li><a className='hover:text-red-500' href="#">Return Order</a></li>
          </ul>
        </div>
        <div className='flex flex-col gap-4 justify-between col-span-1'>
          <h1 className='text-lg font-semibold'>
            MY ACCOUNT
          </h1>
          <ul className='flex flex-col gap-2  text-[14px]'>
            <li><a className='hover:text-red-500' href="#">Orders</a></li>
            <li><a className='hover:text-red-500' href="#">Wishlist</a></li>
            <li><a className='hover:text-red-500' href="#">Track Order</a></li>
            <li><a className='hover:text-red-500' href="#">Manage Account</a></li>
            <li><a className='hover:text-red-500' href="#">Return Order</a></li>
          </ul>
        </div>
        <div className='flex flex-col justify-between col-span-2'>
          <h1 className='text-lg font-semibold'>
            MY ACCOUNT
          </h1>
          <ul className='flex flex-col  gap-6  text-[14px]'>
            <li>
              <a className='flex gap-2' href="#">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>7895 Dr New Albuquerue, NM 19800, United States Of America</span>
              </a>
            </li>
            <li>
              <a className='flex gap-2' href="#">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>+566 477 256, +566 254 575</span>
              </a>
            </li>
            <li>
              <a className='flex gap-2' href="#">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>info@domain.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer