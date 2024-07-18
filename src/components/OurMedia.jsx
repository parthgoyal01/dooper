import React, { Component } from 'react';
import { useState } from 'react';

const OurMedia =()=> {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/Assets/AboutUsBanner5.png",
        "/Assets/AboutUsBanner2.png",
        "/Assets/AboutUsBanner3.png",
        "/Assets/AboutUsBanner4.png",
        "/Assets/AboutUsBanner1.png",

    ];

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const goToPrevSlide = () => {
        setCurrentSlide(prevSlide => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    const goToNextSlide = () => {
        setCurrentSlide(prevSlide => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };
      
        return (
            <>
                {/* New section for both mobile and large screens */}
                {/* Larger screens */}
                <div className="hidden md:flex flex-col py-10 px-16">
                    <div className="flex flex-row items-center mb-8">
                        <p className="w-1/3 font-medium">Our Media Coverages</p>
                        <div className="border-t border-gray-300 flex-grow"></div>
                    </div>
                    <div className="flex justify-between space-x-4">
                        <a href="https://hindi.news18.com/news/rajasthan/kota-leaving-the-package-of-rs-30-lakh-in-mnc-started-duper-health-startup-7278423.html">
                            <img src="/Assets/AboutUsBanner1.png" alt="banner" className='w-1/1' />
                        </a>
                        <a href="https://www.linkedin.com/posts/prachirberiwal_healthcareinnovation-quickcare-superdooperhealth-activity-7151962369210900480-nms2/?utm_source=share&utm_medium=member_desktop">
                            <img src="/Assets/AboutUsBanner2.png" alt="banner" className='w-1/1' />
                        </a>
                        <a href="https://epaper.patrika.com/Kota?eid=26&edate=16/01/2024&pgid=1440018&device=desktop&view=3">
                            <img src="/Assets/AboutUsBanner3.png" alt="banner" className='w-1/1' />
                        </a>
                        <a href="/Assets/Terajasthan.jpg">
                            <img src="/Assets/AboutUsBanner4.png" alt="banner" className='w-1/1' />
                        </a>
                        <a href="/Assets/news18.jpg">
                            <img src="/Assets/AboutUsBanner5.png" alt="banner" className='w-1/1' />
                        </a>
                        <a href="/Assets/abhi.jpg">
                            <img src="/Assets/daniklogo.png" alt="banner" className='w-1/1' />
                        </a>
                    </div>
                </div>
            </>
        );
    }

export default OurMedia;
