import Pagebanner from '@/components/common/Pagebanner'
import Singleblog from '@/components/common/Singleblog'
import { Metadata } from 'next';
import React from 'react'


// Metadata for the layout (applies globally)
export const metadata: Metadata = {
  title: "Latest Blogs | Digital Unicon",
  description: "Transform your business with Digital Unicon's expert digital marketing solutions. Drive growth, enhance brand visibility, and engage your audience effectively.",
};


const page = () => {
  return (
    <div>

        <Pagebanner pageTitle='Blog' />
        <Singleblog />
    </div>
  )
}

export default page