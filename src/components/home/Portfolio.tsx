import React from 'react'
import Link from 'next/link'

const Portfolio = () => {

interface typeImage{
    image:string
}

const clientData : typeImage[] = [
{image:"/home/cabsondemand.png",},
{image:"/home/cabsondemand.png",},
{image:"/home/cabsondemand.png",},
{image:"/home/cabsondemand.png",},
{image:"/home/cabsondemand.png",},
{image:"/home/cabsondemand.png",},
{image:"/home/cabsondemand.png",},
{image:"/home/cabsondemand.png",},
{image:"/home/cabsondemand.png",},
{image:"/home/cabsondemand.png",},
{image:"/home/cabsondemand.png",},
{image:"/home/cabsondemand.png",},
{image:"/home/cabsondemand.png",},
{image:"/home/cabsondemand.png",},
]
  return (
    <div className='bg-white py-8'>
     <div className='du-container'>
     <div className='text-center'>
            <h2 className='font-bold'>Our Beautiful Works</h2>
            <p>We help our clients grow their bottom-line with clear and professional websites.</p>
            </div>

            <div className='grid grid-cols-12 gap-4'>
                {
                    clientData.map((e,i)=>(
                        <div className='col-span-2 border-[2px] border-dotted border-black p-4 rounded-md'>
                    <Link href="/"><img src={e.image} /></Link>
                </div>
                    ))
                }
            </div>
     </div>
    </div>
  )
}

export default Portfolio