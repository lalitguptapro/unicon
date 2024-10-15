import React from 'react';

// Define the interface for the props
interface titleType {
  pageTitle: string;
}

// Destructure the pageTitle from props
const Pagebanner: React.FC<titleType> = ({ pageTitle }) => {
  return (
    <div className='banner-bg pt-44 pb-12'>
      <div className='du-container'>
        <div className='text-white text-center'>
          <div className='lg:text-[80px] sm:text-[60px] text-[36px] font-bold leading-tight'>
            <span className='lg:text-[50px] sm:text-[70px] text-[55px]'>{pageTitle}</span>
          </div>
          <div className='trust-text pt-16'>TRUSTED BY AMAZING BRANDS</div>
        </div>
      </div>
    </div>
  );
}

export default Pagebanner;
