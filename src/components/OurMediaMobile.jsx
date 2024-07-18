// working scroll without links

import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { Link } from "react-router-dom";


const certificateDetails = [
    { img: "/Assets/AboutUsBanner5.png", alt: "banner", newslink: "https://hindi.news18.com/news/rajasthan/kota-effect-of-cold-increased-in-education-city-room-heaters-installed-change-in-diet-of-students-also-7912080.html" },
    { img: "/Assets/AboutUsBanner2.png", alt: "banner",newslink: "https://www.linkedin.com/posts/prachirberiwal_healthcareinnovation-quickcare-superdooperhealth-activity-7151962369210900480-nms2/?utm_source=share&utm_medium=member_desktop" },
    { img: "/Assets/AboutUsBanner3.png", alt: "banner", newslink: "https://epaper.patrika.com/Kota?eid=26&edate=16/01/2024&pgid=1440018&device=desktop&view=3" },
    { img: "/Assets/AboutUsBanner4.png", alt: "banner", newslink: "/Assets/Terajasthan.jpg" },
    { img: "/Assets/AboutUsBanner1.png", alt: "banner", newslink: "https://hindi.news18.com/news/rajasthan/kota-leaving-the-package-of-rs-30-lakh-in-mnc-started-duper-health-startup-7278423.html" },
    { img: "/Assets/daniklogo.png", alt: "banner", newslink: "/Assets/abhi.jpg" }
];

const OurMediaMobile = () => {
    const [dot1, setDot1] = useState(true);
    const [dot2, setDot2] = useState(false);
    const [dot3, setDot3] = useState(false);
    const [certificateSelectedDot, setCertificateSelectedDot] = useState(1);

    return (
        <>
            {/* *********************************************mobile our media********************** */}

            <div className="md:hidden flex flex-col items-center py-[30px] px-[20px]">
                <p className="text-center text-[24px] mt-[10px] font-medium">Our Media Coverage</p>
                <div className="w-full mt-[10px]">
                    <Carousel
                        showArrows={false}
                        showStatus={false}
                        showThumbs={false}
                        showIndicators={false}
                        autoPlay
                        interval={3000}
                        infiniteLoop
                        selectedItem={certificateSelectedDot - 1}
                        onChange={(index) => setCertificateSelectedDot(index + 1)}
                    >
                        {
                            certificateDetails.map((certificate, index) => (
                                <div key={index} className="flex justify-center">
                                   <a href={certificate.newslink}>
                                    <img src={certificate.img} alt={certificate.alt} className="" />
                                    </a>
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
                <div className='flex space-x-2 justify-center mt-[20px]'>
                    {certificateDetails.map((_, index) => (
                        certificateSelectedDot === index + 1
                            ? <img key={index} src="/Assets/ActiveDot.png" className='w-[25px]' />
                            : <img
                                key={index}
                                onClick={() => setCertificateSelectedDot(index + 1)}
                                src="/Assets/InactiveDot.png"
                                className='w-[10px] h-[10px] cursor-pointer'
                            />
                    ))}
                </div>
            </div>
        </>
    )
}

export default OurMediaMobile;



