import Image from 'next/image'
import React from 'react'

const Clients = () => {
  return (
    <div className='du-container'>
        <div className='grid grid-cols-12 bg-[#222222] rounded-xl sm:px-12 py-4 lg:gap-20 gap-8 px-4 award-section'>
            <div className='lg:col-span-3 col-span-6 flex items-center justify-center'> <Image alt='cruncebase' src="/home/crunchbase.png" className='sm:w-56 w-40' width="156" height="40" /></div>
            <div className='lg:col-span-3 col-span-6 flex items-center justify-center'> <Image alt='designrush' src="/home/designrush.svg" className='sm:w-56 w-40' width="56" height="40" /></div>
            <div className='lg:col-span-3 col-span-6 flex items-center justify-center'> <Image alt='yourstory' src="/home/yourstory.svg" className='sm:w-56 w-40'width="56" height="40" /></div>
            <div className='lg:col-span-3 col-span-6 flex items-center justify-center'> <Image alt='builtin' src="/home/builtin.svg" className='sm:w-28 w-24' width="56" height="40" /></div>
        </div>

    </div>
  )
}

export default Clients