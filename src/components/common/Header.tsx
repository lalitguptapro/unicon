"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RiMenu3Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
const [menutoggle,setMenutoggle] = useState(false);

function hemburger(){
setMenutoggle((menutoggle) => !menutoggle)
}

return (
<div className='absolute lg:w-[100%] w-[100%] m-auto'>
<div className='du-container'>
<div className='lg:grid grid-cols-12 gap-12 py-6 flex justify-between max-w-[550px] m-auto lg:max-w-[100%]'>
<div className='col-span-6 lg:col-span-2'>   <Image alt='logo' src="/kronix.png" width="300" height="300" />
</div>
<div className='col-span-7 lg:block hidden'>
<nav>
<ul className='flex gap-12 justify-end text-white text-[18px]'>
<li><Link href="/">Home</Link></li>
<li><Link href="/about-us/">About Us</Link></li>
<li><Link href="/contact-us/">Contact Us</Link></li>
<li><Link href="/">Home</Link></li>
</ul>
</nav>
</div>
<div className='col-span-3 lg:flex lg:justify-end hidden'>
<button><Link href="/" className='bg-primary text-black py-2 rounded-full lg:px-6'>Get Started!</Link></button>
</div>
<div className='col-span-6 lg:hidden text-white' onClick={hemburger}>

{menutoggle ? <RxCross1 size={40} /> : <RiMenu3Line size={40} />}

</div>
</div>
<div>
{menutoggle && (
    <div className='text-black w-[100%] lg:hidden block z-12'>
    <nav className='max-w-[550px] margin-auto banner-bg m-auto menu-mob'>
    <ul className=''>
    <li className='text-white px-4 py-2 border-b-2'><Link href="/">Home</Link></li>
    <li className='text-white px-4 py-2 border-b-2'><Link href="/">Home</Link></li>
    <li className='text-white px-4 py-2 border-b-2'><Link href="/">Home</Link></li>
    <li className='text-white px-4 py-2 border-b-2'><Link href="/">Home</Link></li>
    </ul>
    </nav></div>
)}
</div>
</div>
</div>
)
}

export default Header