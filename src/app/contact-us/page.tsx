import Pagebanner from '@/components/common/Pagebanner'
import { NextSeo } from 'next-seo'
import React from 'react'

const Page = () => {
  return (
    <>
      <NextSeo 
        title="Job List"
        description="Build digital experiences for any tech stack, visually."
        openGraph={{
          title: 'Job List',
          description: 'Build digital experiences for any tech stack, visually.',
        }}
      />
      <div>
        <Pagebanner pageTitle="Contact Us" />
        <div className="bg-white">
          <div className="grid grid-cols-12 du-container">
            <div className="col-span-6">
              hello
            </div>
            <div className="col-span-6 flex flex-col gap-4">
              <input placeholder="First Name" />
              <input placeholder="Last Name" />
              <input placeholder="Email" />
              <input placeholder="Message" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
