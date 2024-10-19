import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='footer-bg text-white'>
        <div className='du-container py-12'>
            <div className='grid md:grid-cols-12 grid-cols-3 sm:grid-cols-6 gap-12'>
                <div className='col-span-3 flex flex-col gap-4'>
                    <Image alt='logo' src="/kronix.png" className='w-36' width="300" height="300" />
                    <p>Transforming your online presence with innovative strategies that drive engagement, growth, and lasting results.</p>
                    </div>

                    <div className='flex flex-col gap-1 col-span-3'>
                        <div className='font-bold text-[24px] pb-2'>About</div>
                        <Link href="/" className='hover:text-primary/70'>Who We Are</Link>
                        <Link href="/" className='hover:text-primary/70'>Our Clients</Link>
                        <Link href="/" className='hover:text-primary/70'>Testimonials</Link>
                        <Link href="/" className='hover:text-primary/70'>Services</Link>
                    </div>

                    <div className='flex flex-col gap-1 col-span-3'>
                        <div className='font-bold text-[24px] pb-2'>Digital</div>
                        <Link href="/" className='hover:text-primary/70'>Website Design</Link>
                        <Link href="/" className='hover:text-primary/70'>Web Development</Link>
                        <Link href="/" className='hover:text-primary/70'>SEO Services</Link>
                        <Link href="/" className='hover:text-primary/70'>Support & Maintenance</Link>
                        <Link href="/" className='hover:text-primary/70'>Digital Marketing</Link>
                        <Link href="/" className='hover:text-primary/70'>Mobile Apps</Link>
                    </div>

                    <div className='flex flex-col gap-1 col-span-3'>
                        <div className='font-bold text-[24px] pb-2'>Connect With Us</div>
                        <Link href="/" className='hover:text-primary/70'>home</Link>
                        <Link href="/" className='hover:text-primary/70'>home</Link>
                        <Link href="/" className='hover:text-primary/70'>home</Link>
                        <Link href="/" className='hover:text-primary/70'>home</Link>
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