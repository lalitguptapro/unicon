import React from 'react'

const Clients = () => {
  return (
    <div className='du-container'>
        <div className='grid grid-cols-12 bg-[#222222] rounded-xl sm:px-12 py-4 lg:gap-20 gap-8 px-4 award-section'>
            <div className='lg:col-span-3 col-span-6 flex items-center justify-center'> <img src="/home/crunchbase.png" className='sm:w-56 w-40' /></div>
            <div className='lg:col-span-3 col-span-6 flex items-center justify-center'> <img src="/home/designrush.svg" className='sm:w-56 w-40' /></div>
            <div className='lg:col-span-3 col-span-6 flex items-center justify-center'> <img src="/home/yourstory.svg" className='sm:w-56 w-40' /></div>
            <div className='lg:col-span-3 col-span-6 flex items-center justify-center'> <img src="/home/builtin.svg" className='sm:w-28 w-24' /></div>
        </div>

    </div>
  )
}

export default Clients