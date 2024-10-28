import Aboutus from '@/components/home/Aboutus'
import Banner from '@/components/home/Banner'
import Blog from '@/components/home/Blog'
import Capabilities from '@/components/home/Capabilities'
import Clients from '@/components/home/Clients'
import Homecta from '@/components/home/Homecta'
import Services from '@/components/home/Services'
import Whyus from '@/components/home/Whyus'
import Head from 'next/head'
import React from 'react'

const page = () => {
  return (
    <div>
    <Head>
      <title>Your Company Name | Innovative Solutions and Services</title>
      <meta name="description" content="Discover our innovative solutions, expert services, and client success stories. Learn how we can help your business thrive." />
      <meta name="google-site-verification" content="MugTmYFPPG22wGWnDjAARRtVPPtzjQEfvBIx8XYUMuo" />
    </Head>
    <Banner />
    <Clients />
    <Aboutus />
    <Services />
    {/* <Portfolio /> */}
    <Capabilities />
    <Whyus />
    <Blog />
    <Homecta />
  </div>
  )
}

export default page