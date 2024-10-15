import Pagebanner from '@/components/common/Pagebanner'
import React from 'react'

const page = () => {
  return (
    <div>
        <Pagebanner pageTitle='Contact Us' />
        <div className='bg-white'>
        <div className='grid grid-cols-12 du-container'>
          
          <div className='col-span-6'>
hello
            </div>
            <div className='col-span-6 flex flex-col gap-4'>
             <input placeholder='First Name' />
             <input placeholder='First Name' />
             <input placeholder='First Name' />
             <input placeholder='First Name' />
            </div>
          </div>

        </div>
    </div>
  )
}

export default page