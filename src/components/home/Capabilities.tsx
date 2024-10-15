"use client";

import Link from 'next/link';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import icons
import { FaLaptopCode, FaChartBar, FaEnvelope, FaBullhorn, FaMobileAlt, FaPenNib, FaPencilRuler, FaSearch, FaAd, FaTools} from 'react-icons/fa';
import {FaCircleArrowLeft, FaCircleArrowRight} from 'react-icons/fa6'


const Capabilities = () => {
  // Service data for the slider
  const services = [
    { name: 'Web Design & UI', link: '/web-design', icon: <FaLaptopCode /> },
    { name: 'Social Media Visuals', link: '/social-media-visuals', icon: <FaChartBar /> },
    { name: 'Email Marketing', link: '/email-marketing', icon: <FaEnvelope /> },
    { name: 'Content Marketing', link: '/content-marketing', icon: <FaBullhorn /> },
    { name: 'Digital Marketing', link: '/digital-marketing', icon: <FaBullhorn /> },
    { name: 'App Development', link: '/app-development', icon: <FaMobileAlt /> },
    { name: 'Graphic Designing', link: '/graphic-designing', icon: <FaPenNib /> },
    { name: 'UI & UX', link: '/ui-ux', icon: <FaPencilRuler /> },
    { name: 'SEO', link: '/seo', icon: <FaSearch /> },
    { name: 'Paid Ads Management', link: '/paid-ads', icon: <FaAd /> },
    { name: 'Website Optimization', link: '/website-optimization', icon: <FaTools /> },
    { name: 'Analytics & Reporting', link: '/analytics-reporting', icon: <FaTools /> },
  ];

  // Slider settings for mobile
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // md breakpoint
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Create reference for the slider
  const sliderRef = useRef<Slider>(null);

  return (
    <div className='du-container py-12'>
      <div className='text-center'>
        <div className='uppercase text-primary'>How We Work</div>
        <h2 className='text-white'>We can help you with...</h2>
      </div>

      {/* Slider for mobile view */}
      <div className='block md:hidden pt-8'>
        <Slider ref={sliderRef} {...sliderSettings}>
          {services.map((service, index) => (
            <div key={index} className='text-center px-2'>
              <Link href={service.link}>
                <div className='block bg-primary px-4 py-6 rounded-md capitalize flex flex-col items-center'>
                  <div className='text-white mb-2 text-2xl'>
                    {service.icon}
                  </div>
                  <div className='text-white'>{service.name}</div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>

        {/* Prev/Next buttons with icons */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="mx-2 text-white"
            aria-label="Previous"
          >
            <FaCircleArrowLeft size={24} /> {/* Left arrow */}
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="mx-2 text-white"
            aria-label="Next"
          >
            <FaCircleArrowRight size={24} /> {/* Right arrow */}
          </button>
        </div>
      </div>

      {/* Grid layout for larger screens */}
      <div className='hidden md:flex flex-wrap justify-center items-center pt-8 gap-4'>
        {services.map((service, index) => (
          <Link href={service.link} key={index}>
            <p className='bg-primary px-4 py-2 rounded-md capitalize flex items-center gap-2'>
              {service.icon}
              {service.name}
            </p>
          </Link>
        ))}
      </div>

      <div className='text-primary text-center pt-12'>
        <button>
          <Link href="/">Know More...</Link>
        </button>
      </div>
    </div>
  );
};

export default Capabilities;
