import React from 'react'

const Aboutus = () => {
  return (
    <div>
        <div className='du-container text-white py-24'>
            <div className='lg:grid grid-cols-6 items-center gap-12'>
            <div className='col-span-3'>
            <div className='uppercase text-primary'>How We Work</div>
            <h1>Tailored Strategies, Measurable Results, Delivering Excellence Every Step Forward.</h1>
            </div>
            <div className='col-span-3 mt-4'>
                <p>We’ve partnered with over 100 brands, boosting their digital visibility and achieving 10x sales growth. Our clients value our commitment to delivering exceptional services on time and meeting every deadline.</p>
                <button className='bg-primary px-8 py-2 text-xl text-black rounded-full mt-6 capitalize'>know more</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutus