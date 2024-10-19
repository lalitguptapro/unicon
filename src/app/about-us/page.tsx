import Contentsec from '@/components/common/Contentsec'
import Meetteam from '@/components/common/Meetteam'
import Pagebanner from '@/components/common/Pagebanner'
import Aboutus from '@/components/home/Aboutus'
import Whyus from '@/components/home/Whyus'
import React from 'react'



const page = () => {
  return (
    <div>
        <Pagebanner pageTitle='About Us' />
        <Contentsec 
        preTitle="Know Me"
        headTitle="About Us"
        para="At Digital Unicon, we pride ourselves on delivering exceptional growth-driven experiences. With over 100 successful projects under our belt, we specialize in generating sales that multiply by 10 times. Our expertise lies in creating innovative web solutions that incorporate the latest creative visuals, ensuring your brand stands out in a competitive market. We understand the unique challenges businesses face, and our tailored strategies are designed to meet your specific goals. Partner with us to elevate your online presence and drive meaningful results that contribute to your long-term success."
        />
       
        <Aboutus />
        <Meetteam />
        <div className='bg-[red] team-bg !text-black'><Whyus /></div>

    </div>
  )
}

export default page