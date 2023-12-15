import React from 'react'
import MainLogo from './MainLogo'

const Footer = () => {
  return (
    <div className='flex h-[107px] bg-[#FAFAFA] justify-between px-[60px] items-center'>
      <MainLogo/>
      <p className='font-urbanist font-[500] text-[20px] text-[#939393]'>copyright &copy; 2023 OPTIX</p>
    </div>
  )
}

export default Footer