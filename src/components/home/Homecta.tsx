import Link from 'next/link'
import React from 'react'

const Homecta = () => {
  return (
    <div className='py-12 bg-primary/20'>
        <div className='text-center text-white du-container'>
            <div className='md:text-[60px] text-[40px] font-bold'>Get Free Consultation</div>
            <p>get your quires solutuon with in some seconds. Digital Unicon is here to solve your digital quiries.</p>
            <button className='bg-primary mt-8 text-black text-[20px] px-8 font-semibold py-2 rounded-full'><Link href="/">Get Started!</Link></button>
        </div>
    </div>
  )
}

export default Homecta