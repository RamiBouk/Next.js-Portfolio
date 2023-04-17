import Image from 'next/image';

import React from 'react';
import Slider from "react-slick";
import 'react-slideshow-image/dist/styles.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from '../public/eas1.jpg';
import pic2 from '../public/eas2.jpg';
import pic3 from '../public/eas3.webp';
import pic4 from '../public/eas4.webp';

const slideImages = [
  {
    img: pic1,
    caption: 'Slide 1'
  },
  {
    img: pic2,
    caption: 'Slide 2'
  },
  {
    img: pic3,
    caption: 'Slide 3'
  },
  {
    img: pic4,
    caption: 'Slide 3'
  },
];
export default function SimpleSlider(){
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed:3000,
    autoplay:true,
    cssEase:"ease-in-out"
  };
  return (
    <div className='pb-6'>
      <Slider {...settings} className={" pt-8 "}>
        {slideImages.map((slideImage, index)=> (
          <div className=''>
            <Image
              src={slideImage.img}
              border="none"
              className="h-[18rem]  md:h-[28rem]  object-cover"
            />
          </div>
        ))} 
      </Slider>
    </div>
  );
}


