import Image from 'next/image'
import React from 'react'

const Singleblog = () => {
  return (
    <div className='bg-white'>
        <div className='du-container grid grid-cols-12'>
        <div className='col-span-8'>
            <Image alt="feature image" width="400" height="400" src="/lalit-gupta.jpg" />
        <h1>What is Website Designing?</h1>    
        <div className=''>What is Website Designing? djdkfdjkjjfkj</div>    
            
        </div>    
        <div className='col-span-4'>Sidebar</div>    
        </div>
    </div>
  )
}

export default Singleblog