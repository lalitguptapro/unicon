import React from 'react'

const Aboutus = () => {
  return (
    <div>
        <div className='du-container text-white py-24'>
            <div className='lg:grid grid-cols-6 items-center gap-12'>
            <div className='col-span-3'>
            <div className='uppercase text-primary'>How We Work</div>
            <h1>Get a dedicated design team at fraction of the cost.</h1>
            </div>
            <div className='col-span-3 mt-4'>
                <p>Grow your brand with high-quality design for a flat monthly fee. Work with senior designers. Subscribe and make as many requests as you need - no limits.</p>
                <button className='bg-primary px-8 py-2 text-xl text-black rounded-full mt-6 capitalize'>know more</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutus