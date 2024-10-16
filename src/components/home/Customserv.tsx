import Image from 'next/image';
import React, { useState } from 'react';



interface serviceData{
    image:string,
    head:string,
    para:string,
}

// Interface for props
interface SlideImg {
  images: string; // each image in the array should be a string (URL)
}

interface CustomservProps {
  images: SlideImg[]; // images prop should be an array of SlideImg objects
}

const Customserv: React.FC<CustomservProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

const serviceData: serviceData[] = [
    {
        image: '/home/service-icon.png',
        head: 'Subscribe & get started',
        para: 'Submit as many design tasks as you need without worrying about individual project fees.',
      },
      {
        image: '/home/service-icon.png',
        head: 'Subscribe & get started',
        para: 'Submit as many design tasks as you need without worrying about individual project fees.',
      },
      {
        image: '/home/service-icon.png',
        head: 'Subscribe & get started',
        para: 'Submit as many design tasks as you need without worrying about individual project fees.',
      },
]
   

  return (
    <div className="slider">
 <div className='grid grid-cols-12 gap-12'>
            {
                serviceData.map((e,i)=>(
                <div key={i} className='col-span-4 flex flex-col gap-4'>
                <Image alt='img' src={e.image} className='w-24' />
                <div className='text-[28px] font-semibold'>{e.head}</div>
                <p className=''>{e.para}</p></div>
                ))
            }
        </div>



      {images.map((slide, index) => (
        <div className="" key={index}>
          {index === currentSlide && (
            <Image src={slide.images} alt={`Slide ${index}`} className="slide-image" />
          )}
        </div>
      ))}

      {/* Slide Navigation */}
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Customserv;
