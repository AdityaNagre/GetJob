import React from 'react'
import Guest from './Guest'
import Login from './Login'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// [url('https://drive.google.com/uc?export=view&id=1InT3cnf3HhS9U9yCEt24TxTFTvc6ijo6')]

export default function SearchBar() {
    var settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
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
    <>
    <div className="bg-white md:h-[28rem] bg-auto bg-no-repeat bg-center rounded-b-[2rem] md:rounded-b-none h-[20rem] text-center m-auto">
        <div className='md:w-2/3 mx-auto md:pt-20 md:pr-40 md:pl-40 pt-10 pl-4 text-left'>
            <span className='text-2xl font-semibold md:text-4xl md:font-bold '><span className="text-red-500 text-4xl md:text-6xl">WE </span>LIVE... <span className='text-2xl font-semibold md:text-4xl md:font-bold '><span className="text-red-500 text-4xl md:text-6xl">FOR </span>THE DREAMS</span></span>
        </div>
        <div className="flex items-center justify-center space-x-16">
        <Slider {...settings} className="max-w-sm">
        <Guest gender="Chad"/>
        <Guest gender="Queen"/>
        <Guest gender="Person"/>
        </Slider>
        <div className='hidden md:block'>
        <Login/> 
        </div>
         </div>
    </div>
    </>
  )
}
