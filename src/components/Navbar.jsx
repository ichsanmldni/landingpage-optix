import React from 'react'
import MainLogo from './MainLogo'

const Navbar = () => {
  return (
    <div className='flex items-center font-[400] justify-between font-poppins top-0 left-0 fixed w-full h-[80px] bg-[#FAFAFA]'>
      <div className='ml-[42px]'>
        <MainLogo/>
      </div>
      <ul className="flex gap-[100px] text-[20px]">
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Features</a></li>
        <li><a href="">Download</a></li>
      </ul>
      <div className='flex gap-[22px] items-center py-[5px] mr-[53px] px-[40px] text-[18px] w-[200px] rounded-full border-black border-[3px] place-content-between'>
        <p>English</p>
        <img src="/Trigonal Icon.png" className='h-[14px]' alt="" />
      </div>
    </div>
  )
}

export default Navbar