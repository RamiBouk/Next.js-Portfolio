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
    caption: 'CE Atletic Setif 4-0 Amjad Setif'
  },
  {
    img: pic2,
    caption: 'CE Atletic Setif  9-1 O M’chedallah'
  },
  {
    img: pic3,
    caption: 'CE Atletic Setif 6-0 MS Khroub'
  },
  {
    img: pic4,
    caption: 'CE Atletic Setif 0-0 CM Batna'
  },
  {
    img: pic4,
    caption: 'CE Atletic Setif 5-0 MS Khroub'
  },
  {
    img: pic4,
    caption: 'CE Atletic Setif  8-0 CSA Borj'
  },
];
export default function VidSlider(){
  var settings = {
    dots:true,
      infinite: true,
      focusOnSelect: true,
      slidesToShow: 4,
      slidesToScroll: 2,

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
            slidesToScroll: 3,
            initialSlide: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
  };
  return (
    <div className='pb-6'>
      <Slider {...settings} className={" pt-8 "}>
        {slideImages.map((slideImage, index)=> (
          <div className='pl-4 pr-4 h-[5rem] '>
            <Image
              src={slideImage.img}
              className=" rounded-lg h-[10rem] object-cover"
            />
        <h5 className="mb-2 h-30 w-[20rem]  text-2xl  ">
              {slideImage.caption}
              </h5>
          </div>
        ))} 
      </Slider>
    </div>
  );
}


