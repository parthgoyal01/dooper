import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";


const certificateDetails = [
    { img: "/Assets/startupin.png", alt: "Startup India" },
    { img: "/Assets/istart.png", alt: "iStart" },
    { img: "/Assets/assocham.png", alt: "ASSOCHAM" }
];

const Achievements = () => {
    const [dot1, setDot1] = useState(true);
    const [dot2, setDot2] = useState(false);
    const [dot3, setDot3] = useState(false);
    const [certificateSelectedDot, setCertificateSelectedDot] = useState(1);

    return (
        <>
            {/* this is the Achievements section by seperate component */}
            {/* *****************************************websites our Achievments************************ */}
            <div className="hidden md:inline-flex flex-col items-center py-[40px] px-[100px] w-full">
                <div className="flex justify-center mt-[40px]">
                    <p className="bg-[#F5F6F7] text-center px-[10px] py-[3px] rounded-[5px] text-[#1A1C1F] w-[190px] font-semibold text-[14px]">Our Achievements</p>
                </div>
                <p className="text-center text-[40px] mt-[30px] font-medium">Celebrating Our Recognition</p>
                <img src="/Assets/Certificates.png" className="mt-[30px] object-center" alt="certificates" />
            </div>

            {/* *********************************************mobile our Achivement********************** */}

            <div className="md:hidden flex flex-col items-center py-[30px] px-[20px] w-full">
                <div className="font-semibold text-[13px] bg-[#F5F6F7] text-center px-[12px] py-[5px] rounded-[5px] text-[#1A1C1F] w-[160px]">
                    <p>Our Achievements</p>
                </div>
                <p className="text-center text-[24px] mt-[10px] font-medium">Celebrating Our Recognition</p>
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
                                    <img src={certificate.img} alt={certificate.alt} className="" />
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

export default Achievements;