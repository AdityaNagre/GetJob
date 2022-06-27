import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderPlay() {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 1500,
        cssEase: "linear",
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
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
    <>
        <div className='mt-16 ml-3 mr-3  md:mt-28 md:ml-24 md:mr-24  '>
          <div className='flex justify-center mb-5 md:mb-10'>
            <p className='text-2xl font-semibold  md:text-4xl md:font-bold'>Trending on JobsJobs Today</p>
          </div>
        <Slider {...settings} className="border border-b-gray-200 border-l-0 border-r-0">
          <div className='p-12 w-1/9'>
            <div className='flex justify-center'><img src="https://drive.google.com/uc?export=view&id=1LJBo1FarMEfoaXZQrLw3sK6U20WqkCP5" alt="" /></div>
          </div>
          <div className='p-12 w-1/9'>
            <div className='flex justify-center'><img src="https://drive.google.com/uc?export=view&id=1Ot-UqofIVGXXNiLbJ_-sZaGrBOWlg2qa" alt="" /></div>
          </div>
          <div className='p-12 w-1/9'>
            <div className='flex justify-center'><img src="https://drive.google.com/uc?export=view&id=1aMpkM1zRk2AC36I4B39W5Rm5NGLqUXyy" alt="" /></div>
          </div>
          <div className='p-12 w-1/9'>
            <div className='flex justify-center'><img src="https://drive.google.com/uc?export=view&id=1QxyE_JhamDs1lOjocc7Me-1VmMCzq1Sp" alt="" /></div>
          </div>
          <div className='p-12 w-1/9'>
            <div className='flex justify-center'><img src="https://drive.google.com/uc?export=view&id=1mzrsjAcAzeRtmDP5SKi6gpVi7a3FDB3l" alt="" /></div>
          </div>
          <div className='p-12 w-1/9'>
            <div className='flex justify-center'><img src="https://drive.google.com/uc?export=view&id=1XnvfG20xJAwvksgbJpoYlfqfykfg3oTW" alt="" /></div>
          </div>
          <div className='p-12 w-1/9'>
            <div className='flex justify-center'><img src="https://drive.google.com/uc?export=view&id=1pq1FCeXmWywBPifxQwvUbNREMds-Kxk0" alt="" /></div>
          </div>
          <div className='p-12 w-1/9'>
            <div className='flex justify-center'><img src="https://drive.google.com/uc?export=view&id=1I3bspgeivXRfe5P-FpN25ZjU9IysjafS" alt="" /></div>
          </div>
          <div className='p-12 w-1/9'>
            <div className='flex justify-center'><img src="https://drive.google.com/uc?export=view&id=1eywCx0qGe6Z2aCz7FC8iqSiE7A9tsOIT" alt="" /></div>
          </div>
        </Slider>
      </div>
    </>
  )
}
