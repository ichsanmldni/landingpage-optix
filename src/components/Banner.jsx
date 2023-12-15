import React from 'react'

const Banner = () => {
  return (
    <div className='flex h-[768px] pt-[80px] px-[120px] justify-between'>
      <div className='w-[600px] pt-[40px] text-white'>
        <h1 className='font-inter text-[56px]'>Welcome to OPTIX <br/> <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> - Your Personal <br/> <span>&nbsp;</span> Eyewear Stylist!</h1>
        <p className="w-[500px] font-urbanist mt-[10px] text-[20px]">Unlock the secret to eyewear perfection with OPTIX, the cutting-edge app designed to recommend the ideal glasses based on your unique face shape. Say goodbye to endless scrolling and hello to personalized style at your fingertips.</p>
      </div>
      <div>
        <img src="/Showcase.png" alt="" />
      </div>
    </div>
  )
}

export default Banner