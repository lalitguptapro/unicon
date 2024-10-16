"use client";

import React from "react";
import Slider, { CustomArrowProps } from "react-slick";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Services: React.FC = () => {
  // Define interfaces
  interface ServiceData {
    image: string;
    head: string;
    para: string;
  }

  // Service data for the services slider
  const serviceData: ServiceData[] = [
    {
      image: "/home/service-icon.png",
      head: "Subscribe & get started",
      para: "Submit as many design tasks as you need without worrying about individual project fees.",
    },
    {
      image: "/home/service-icon.png",
      head: "Unlimited design requests",
      para: "Submit as many design tasks as you need without worrying about individual project fees.",
    },
    {
      image: "/home/service-icon.png",
      head: "Fast turnaround",
      para: "Get your designs delivered quickly with a fast and efficient workflow.",
    },
    {
      image: "/home/service-icon.png",
      head: "Custom designs",
      para: "Get designs tailored to your specific needs and brand.",
    },
    {
      image: "/home/service-icon.png",
      head: "Multiple revisions",
      para: "Submit revisions until you're happy with the final result.",
    },
    {
      image: "/home/service-icon.png",
      head: "Affordable pricing",
      para: "Get high-quality designs at an affordable subscription cost.",
    },
  ];

  // Custom Arrow components for slick
  const NextArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
    return (
      <div
        onClick={onClick}
        className="absolute bottom-[-60px] left-[50%] transform translate-x-4 cursor-pointer hover:text-primary"
      >
        <FaCircleArrowRight size={40} />
      </div>
    );
  };

  const PrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
    return (
      <div
        onClick={onClick}
        className="absolute bottom-[-60px] right-[50%] transform -translate-x-4 cursor-pointer hover:text-primary"
      >
        <FaCircleArrowLeft size={40} />
      </div>
    );
  };

  // Slider settings with responsive configuration
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default to 3 slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // lg breakpoint
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // md breakpoint
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="du-container text-white pt-16 pb-24 border-t-[1px] border-primary/40">
      {/* Slider for serviceData */}
      <Slider {...settings} className="service-slider mb-12 relative">
        {serviceData.map((service, index) => (
          <div key={index} className="flex flex-col items-center px-4">
            <Image
              width="50"
              height="50"
              src={service.image}
              className="w-24"
              alt={`Service ${index}`}
            />
            <div className="text-[28px] font-semibold">{service.head}</div>
            <p>{service.para}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Services;
