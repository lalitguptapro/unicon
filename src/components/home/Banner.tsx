import React from 'react'

const Banner = () => {
  return (
    <div className='banner-bg pt-44 pb-12'>
        <div className='du-container'>
            <div className='text-white text-center'>
                <div className='lg:text-[80px] sm:text-[60px] text-[36px] font-bold leading-tight'><span className='lg:text-[100px] sm:text-[70px] text-[55px]'>Digital Innovation</span> <br />for <span className='text-primary italic'>Growth</span></div>
                <p className='my-4'>Creating Tailored Digital Experiences Connecting Business Needs with User-Centered Solutions</p>
                <button className='bg-primary px-8 py-4 text-xl text-black rounded-full mt-6'>Get Free Consultation</button>
                <div className='trust-text pt-16'>TRUSTED BY AMAZING BRANDS</div>
            </div>
        </div>
    </div>
  )
}

export default Banner