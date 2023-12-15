import React from 'react'
import FeatureCard from './FeatureCard'

const Features = () => {
  return (
    <div className='h-[509px]'>
      <h1 className='text-center font-poppins text-[32px] font-[900] text-white'>Features of our app.</h1>
      <div className='flex px-[100px] justify-between mt-[50px] mx-auto'>
        <FeatureCard/>
        <FeatureCard/>
        <FeatureCard/>
      </div>
    </div>
  )
}

export default Features