import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='footer-bg text-white'>
        <div className='du-container py-12'>
            <div className='grid md:grid-cols-12 grid-cols-3 sm:grid-cols-6 gap-12'>
                <div className='col-span-3 flex flex-col gap-6'>
                    <img src="/kronix.png" className='w-36' />
                    <p>Get your digital needs with digital uniconGet your digital needs with digital uniconGet your digital needs with digital unicon</p>
                    </div>

                    <div className='flex flex-col gap-4 col-span-3'>
                        <div className='font-bold text-[24px]'>Quick Links</div>
                        <Link href="/">home</Link>
                        <Link href="/">home</Link>
                        <Link href="/">home</Link>
                        <Link href="/">home</Link>
                    </div>

                    <div className='flex flex-col gap-4 col-span-3'>
                        <div className='font-bold text-[24px]'>Quick Links</div>
                        <Link href="/">home</Link>
                        <Link href="/">home</Link>
                        <Link href="/">home</Link>
                        <Link href="/">home</Link>
                    </div>

                    <div className='flex flex-col gap-4 col-span-3'>
                        <div className='font-bold text-[24px]'>Quick Links</div>
                        <Link href="/">home</Link>
                        <Link href="/">home</Link>
                        <Link href="/">home</Link>
                        <Link href="/">home</Link>
                    </div>
            </div>
        </div>
        <div className='du-container border-t-2 border-primary/20 py-6'>
            <div className='grid md:grid-cols-12 grid-cols-6'>
                <div className='col-span-6 md:text-left text-center'>© 2024 Digital Unicon, All Rights Reserved.</div>
                <div className='col-span-6 flex gap-4 md:justify-end justify-center'><Link href="/">Sitemap</Link>|<Link href="/">Privacy Policy</Link></div>
            </div>
            
            </div>
    </div>
  )
}

export default Footer