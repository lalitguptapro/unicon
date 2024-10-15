"use client";

import React, { useRef } from 'react';
import Slider from 'react-slick';
import { FaCircleArrowLeft, FaCircleArrowRight } from 'react-icons/fa6'; // Import the icons
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Whyus = () => {
  interface Whytype {
    image: string;
    head: string;
    para: string;
  }

  const whyData: Whytype[] = [
    {
      image: "/home/why-icon.png",
      head: "On-demand requests",
      para: "Put all your requests in the design queue in Trello, and we’ll knock them out 1 by 1.",
    },
    {
      image: "/home/why-icon.png",
      head: "Fast delivery",
      para: "We work quickly to deliver the designs you need with precision.",
    },
    {
      image: "/home/why-icon.png",
      head: "High Quality",
      para: "Ensuring top-notch design quality tailored to your brand.",
    },
    {
      image: "/home/why-icon.png",
      head: "Unlimited Revisions",
      para: "Request as many changes as you need to get the perfect design.",
    },
    {
      image: "/home/why-icon.png",
      head: "Dedicated Support",
      para: "Our team is here to support you every step of the way.",
    },
    {
      image: "/home/why-icon.png",
      head: "Affordable Plans",
      para: "Flexible subscription plans that fit your budget.",
    },
  ];

  // Create references for slider navigation
  const sliderRef = useRef<Slider>(null);

  // Slider settings for mobile view
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Disable default arrows
  };

  return (
    <div>
      <div className="du-container text-white py-24">
        <div className="lg:grid grid-cols-6 items-center gap-12">
          <div className="col-span-3">
            <div className="uppercase text-primary">BENEFITS</div>
            <h1>The design subscription that connects you to your dream team</h1>
          </div>
          <div className="col-span-3 mt-4">
            <p>
              A subscription can alleviate the stress of staffing, managing expenses, or make design calls like a Creative Director. We partner with you to ensure that your design elevates your brand to new levels.
            </p>
            <button className="bg-primary px-8 py-2 text-xl text-black rounded-full mt-6 capitalize">
              know more
            </button>
          </div>
        </div>

        {/* Slider for mobile view */}
        <div className="block lg:hidden pt-20">
          <Slider ref={sliderRef} {...sliderSettings}>
            {whyData.map((e, i) => (
              <div key={i} className="text-center p-4">
                <img src={e.image} alt={e.head} className="mx-auto mb-4 w-16 h-16" />
                <div className="text-[20px] font-bold">{e.head}</div>
                <p className="text-sm mt-2">{e.para}</p>
              </div>
            ))}
          </Slider>
          {/* Prev/Next buttons */}
          <div className="flex justify-center mt-4">
            <button onClick={() => sliderRef.current?.slickPrev()} className="mr-4">
              <FaCircleArrowLeft size={30} /> {/* Left icon */}
            </button>
            <button onClick={() => sliderRef.current?.slickNext()} className="ml-4">
              <FaCircleArrowRight size={30} /> {/* Right icon */}
            </button>
          </div>
        </div>

        {/* Grid layout for larger screens */}
        <div className="hidden lg:grid grid-cols-12 pt-20 gap-12">
          {whyData.map((e, i) => (
            <div className="col-span-4" key={i}>
              <img src={e.image} alt={e.head} className="mb-4 w-16 h-16" />
              <div className="text-[28px]">{e.head}</div>
              <p>{e.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whyus;
