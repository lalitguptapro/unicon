import Header from '@/components/common/Header'
import Aboutus from '@/components/home/Aboutus'
import Banner from '@/components/home/Banner'
import Blog from '@/components/home/Blog'
import Capabilities from '@/components/home/Capabilities'
import Clients from '@/components/home/Clients'
import Homecta from '@/components/home/Homecta'
import Portfolio from '@/components/home/Portfolio'
import Services from '@/components/home/Services'
import Whyus from '@/components/home/Whyus'
import Footer from '@/components/common/Footer'
import React from 'react'

const page = () => {
  return (
    <div>
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