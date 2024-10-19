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
      head: "Website Development",
      para: "We create user-friendly, responsive websites that showcase your brand and enhance your online presence.",
    },
    {
      image: "/home/service-icon.png",
      head: "Digital Marketing",
      para: "Our tailored strategies boost your brand’s visibility and engagement across multiple online platforms.",
    },
    {
      image: "/home/service-icon.png",
      head: "SEO",
      para: "We improve your website's ranking, driving organic traffic and increasing your reach to potential customers.",
    },
    {
      image: "/home/service-icon.png",
      head: "Ads Management",
      para: "We optimize ad campaigns to maximize ROI, ensuring your budget works harder for you.",
    },
    {
      image: "/home/service-icon.png",
      head: "App Development",
      para: "Our custom apps enhance user experience and provide seamless functionality for your business needs.",
    },
    {
      image: "/home/service-icon.png",
      head: "Graphic Designing",
      para: "We design visually stunning graphics that capture attention and represent your brand with creativity.",
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
          <div key={index} className="flex flex-col gap-12 items-center px-4 hover:bg-primary/20 p-4 rounded-xl h-[270px]">
            <Image
              width="50"
              height="50"
              src={service.image}
              className="w-24"
              alt={`Service ${index}`}
            />
            <div className="text-[28px] font-semibold py-2">{service.head}</div>
            <p>{service.para}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Services;
