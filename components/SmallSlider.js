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
export default function SmallSlider(){
  var settings = {
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className='pb-6'>
      <Slider {...settings} className={" pt-8 "}>
        {slideImages.map((slideImage, index)=> (
          <div className='pl-4 pr-4'>
            <Image
              src={slideImage.img}
              border="none"
              className=" rounded-lg h-[6rem] w-[10rem]  md:w-[10rem] md:h-[6rem]  object-cover"
            />
            <h3>
              CE ATLETIC setif 4-0 Amjad Setif
              </h3>
          </div>
        ))} 
      </Slider>
    </div>
  );
}


