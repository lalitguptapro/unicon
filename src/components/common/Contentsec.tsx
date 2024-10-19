import Image from 'next/image'
import React from 'react'

interface contentType{
    preTitle:string
    headTitle:string
    para:string
}
const Contentsec = ({preTitle, headTitle, para}: contentType) => {

   
  return (
    <div className='bg-white py-12'>
    <div className='du-container grid grid-cols-12 gap-12'>
        <div className='col-span-6'>
        <div className="uppercase text-primary font-bold">{preTitle}</div>
            <h2 className='mb-4'>{headTitle}</h2>
            <p>{para}</p>
        </div>
        <div className='col-span-6'>
            <Image alt='Lalit Gupta' src="/about-us.jpg" width="500" height="500" className='rounded-xl' />
        </div>
    </div>
</div>
  )
}

export default Contentsec