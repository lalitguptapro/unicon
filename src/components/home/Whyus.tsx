"use client";

import React, { useRef } from 'react';
import Slider from 'react-slick';
import { FaCircleArrowLeft, FaCircleArrowRight } from 'react-icons/fa6'; // Import the icons
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const Whyus = () => {
  interface Whytype {
    image: string;
    head: string;
    para: string;
  }

  const whyData: Whytype[] = [
    {
      image: "/home/why-icon.png",
      head: "High-Quality Standards",
      para: "We ensure top-notch quality in every project by following strict guidelines, delivering excellence in every detail.",
    },
    {
      image: "/home/why-icon.png",
      head: "Proactive Time Management",
      para: "We plan ahead to meet deadlines efficiently, staying on track while anticipating any potential challenges.",
    },
    {
      image: "/home/why-icon.png",
      head: "Continuous Improvement",
      para: "We believe in growing and refining our processes, always seeking ways to enhance performance and deliver better results.",
    },
    {
      image: "/home/why-icon.png",
      head: "Client-Centric Approach",
      para: "Your needs come first. We focus on personalized solutions, making sure you're always satisfied with the outcome.",
    },
    {
      image: "/home/why-icon.png",
      head: "Clear Milestones and Goals",
      para: "We set clear, achievable milestones, keeping the journey transparent and the end-goal within reach.",
    },
    {
      image: "/home/why-icon.png",
      head: "Resource Optimization",
      para: "We maximize available resources to ensure efficiency, productivity, and value throughout every project stage.",
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
            <div className="uppercase text-primary">WHY CHOOSE US?</div>
            <h1>Your success, our commitment: quality, reliability, and personalized solutions.</h1>
          </div>
          <div className="col-span-3 mt-4">
            <p>
            Your success is our priority. We provide high-quality, reliable services with personalized solutions, ensuring we meet your unique business needs and help you achieve your goals effectively.
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
                <Image width="50" height="50" src={e.image} alt={e.head} className="mx-auto mb-4 w-16 h-16" />
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
              <Image width="50" height="50" src={e.image} alt={e.head} className="mb-4 w-16 h-16" />
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
