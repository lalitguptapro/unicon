import Pagebanner from '@/components/common/Pagebanner'
import Singleblog from '@/components/common/Singleblog'
import React from 'react'

const page = () => {
  return (
    <div>

        <Pagebanner pageTitle='Blog' />
        <Singleblog />
    </div>
  )
}

export default page