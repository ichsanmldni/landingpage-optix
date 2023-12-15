import React from 'react'

const FeatureCard = () => {
  return (
    <div className='w-[350px] h-[350px] text-center bg-[#FAFAFA] rounded-[50px]'>
        <img className='mx-auto pt-[20px]' src="/Face Icon.png" alt="" />
        <h3 className='font-poppins px-[40px] mt-[10px] text-[20px] font-[500]'>Precision Face Shape Analysis</h3>
        <p className='font-urbanist px-[40px] mt-[10px] text-[14px] font-[500]'>OPTIX employs advanced facial recognition technology to analyze your unique face shape with pinpoint accuracy. Our algorithms take into account the contours and proportions of your face, ensuring a precise assessment for personalized eyewear recommendations.</p>
      </div>
  )
}

export default FeatureCard