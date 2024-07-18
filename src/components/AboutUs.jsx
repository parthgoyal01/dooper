import DoctorCard from "./Cards/DoctorCard";
import LocationCard from "./Cards/LocationCard";
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'


import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Achievements from "./Achievements";
import OurMedia from "./OurMedia";
import OurMediaMobile from "./OurMediaMobile";
const LocationCardDetails = [
    {
        img: '/Assets/HomepageHos01.png',
        name: 'Maitri Hospital',
        location: 'Kota'
    },
    {
        img: '/Assets/HomepageHos02.png',
        name: 'ETHOOS Hospital',
        location: 'Kota'
    },
    {
        img: '/Assets/HomepageHos03.png',
        name: 'Radhakrishna critical care & general Hospital',
        location: 'Kota'
    },
    {
        img: '/Assets/HomepageHos04.png',
        name: 'Agrawal Eye & Skin Hospital',
        location: 'Kota'
    },
];

const LabCardDetails = [
    {
        img: '/Assets/lab01.png',
        name: 'Agilus Labs',
        location: 'Kota'
    },
    {
        img: '/Assets/lab02.png',
        name: 'Dr Lal Path Labs',
        location: 'Kota'
    },
    {
        img: '/Assets/lab03.png',
        name: 'Krishna MRI 3Tesla',
        location: 'Kota'
    },
    {
        img: '/Assets/lab04.png',
        name: 'Aanav Diagnostic',
        location: 'Kota'
    },
    {
        img: '/Assets/lab05.png',
        name: 'Reliable Diagnostic Center',
        location: 'Kota'
    },
];

const DoctorCardDetails = [
    {
        img: '/Assets/DoctorMrinal.png',
        name: 'Mrinal Manjari',
        designation: 'MBBS, DGO, MD- OBS. & GYNAE',
        experience: '3+ Years',
        location: 'Bangalore'
    },
    {
        img: '/Assets/DoctorRachel.png',
        name: 'Rachel Green',
        designation: 'MBBS, DGO, MD- OBS. & GYNAE',
        experience: '3+ Years',
        location: 'Bangalore'
    },
    {
        img: '/Assets/DoctorMonica.png',
        name: 'Monica Geller',
        designation: 'MBBS, DGO, MD- OBS. & GYNAE',
        experience: '3+ Years',
        location: 'Bangalore'
    },
    {
        img: '/Assets/DoctorMrinal.png',
        name: 'Phoebe Buffay',
        designation: 'MBBS, DGO, MD- OBS. & GYNAE',
        experience: '3+ Years',
        location: 'Bangalore'
    },
];

const AboutUs = (props) => {

    const [dot1, setDot1] = useState(true);
    const [dot2, setDot2] = useState(false);
    const [dot3, setDot3] = useState(false);
    const [dot4, setDot4] = useState(false);
    const [dot5, setDot5] = useState(false);

    const [hospitalDotSelected, setHospitalDotSelected] = useState(1);
    const [selectedDoctorDot, setSelectedDoctorDot] = useState(1);
    const [selectedLabDot, setSelectedLabDot] = useState(1);
    const [certificateSelectedDot, setCertificateSelectedDot] = useState(1);
    
    // ***********************chages*******************

    const certificateDetails = [
        { img: "/Assets/startupin.png", alt: "Startup India" },
        { img: "/Assets/istart.png", alt: "iStart" },
        { img: "/Assets/assocham.png", alt: "ASSOCHAM" }
    ];

    return (
        <>
            <div className="hidden md:inline-flex flex justify-between items-center px-[100px] pt-[30px]">
                <div className="flex text-[#1A1C1F] flex-col w-[40%] relative">
                    <img src="/Assets/PinkStar.png" alt="star" className="w-[30px] absolute left-[-30px]" />
                    <img src="/Assets/PinkStar.png" alt="star" className="w-[40px] absolute right-[30px]" />
                    <img src="/Assets/PinkStar.png" alt="star" className="w-[30px] absolute bottom-[-30px] right-[30px]" />
                    <div className="flex justify-start">
                        <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[120px] font-semibold">About Us</div>
                    </div>
                    <p className="text-[40px] leading-tight mt-[50px] font-medium">Shifting The Healthcare Paradigm</p>
                    <p className="text-[#5B6572] mt-[40px]">Experience on-demand first-point medical assistance at your doorstep with Dooper's urgent care solutions.</p>
                    <div className="flex space-x-3 items-center mt-[20px]">
                        <Link to={'/contact'}><div className="bg-[#E40443] text-center px-[6px] py-[5px] text-white rounded-[5px] w-[210px]">
                            <p className="font-semibold">Make An Appointment</p>
                        </div></Link>
                    </div>
                </div>
                <div className="lg: w-[60%] relative">
                    <img src="/Assets/aboutus.png" className="" alt="heroImage" />
                </div>
            </div>

            <div className="relative text-[#1A1C1F] md:hidden flex flex-col bg-[#F9F9F9] items-center px-[20px] py-[30px]">
                <div className="font-semibold text-[12px] bg-[#F5F6F7] text-center px-[12px] py-[5px] rounded-[5px] text-[#1A1C1F] w-[100px]">
                    <p>About Us</p>
                </div>
                <p className="text-center font-semibold text-[36px] mt-[10px]">Shifting The Healthcare Paradigm</p>
                <p className="text-[14px] text-center text-[#5B6572] mt-[10px]">Experience on-demand first-point medical assistance at your doorstep with Dooper's urgent care solutions.</p>
                <img src="/Assets/aboutus.png" alt="HeroImage" className="w-full mt-[10px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute left-10 top-[7%] w-[15px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute left-5 top-[20%] w-[20px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute left-5 top-[50%] w-[30px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute left-8 top-[70%] w-[15px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute right-10 w-[20px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute right-20 top-[15%] w-[20px]" />
                <div className="flex items-center justify-between space-x-5 mt-[20px]">
                    <Link to={'/contact'}><button className="text-white rounded-[5px] bg-[#E40443] px-[15px] py-[10px] text-[13px] font-semibold">Make an Appointment</button></Link>
                    <a href="tel: +91 6375596006"><div className="flex items-center justify-center space-x-2 rounded-[5px] bg-[#FCE6EC] px-[15px] py-[10px]"><img src="/Assets/PinkCallIconMobile.png" alt="call" className="w-[20px]" /><p className="text-[#E40443] text-[13px] font-semibold">Urgent Call</p></div></a>
                </div>
            </div>

            <div className="hidden md:inline-flex w-full flex-col py-[80px] px-[100px] bg-[#F4F4F4] relative ">
                <p className="text-center font-semibold text-[28px]">Welcome to Dooper: Healthcare at Your Fingertips.</p>
                <p className="text-center font-small text-[16px] py-[20px]">In emergencies, every minute counts, and rapid health assistance can be life-saving. At Dooper, we prioritize your well-being. Our platform delivers the convenience, affordability, and quality of smart health technology to your doorstep. Choose Dooper for on-demand healthcare, home delivery of lab tests and medicines, potentially life-saving assistance, and point-of-care testing with 21 vital checks. Experience healthcare that puts you first.</p>

                <div className="flex justify-between space-x-10 mt-[50px]">
                    <div className="bg-white px-[15px] py-[10px] w-[23%]">
                        <p className="font-semibold text-[28px] text-center">50+</p>
                        <p className="mt-[5px] text-center">Specialized Doctors</p>
                    </div>
                    <div className="bg-white px-[15px] py-[10px] w-[23%]">
                        <p className="font-semibold text-[28px] text-center">2k+</p>
                        <p className="mt-[5px] text-center">Happy patients</p>
                    </div>
                    <div className="bg-white px-[15px] py-[10px] w-[23%]">
                        <p className="font-semibold text-[28px] text-center">30 min</p>
                        <p className="mt-[5px] text-center">Average Response Time</p>
                    </div>
                    <div className="bg-white px-[15px] py-[10px] w-[23%]">
                        <p className="font-semibold text-[28px] text-center">2k+</p>
                        <p className="mt-[5px] text-center">Certified Lab Reports</p>
                    </div>
                </div>

                {/* <p className="text-center font-semibold text-[32px] mt-[50px]">Get Premium  Services Call Us!</p> */}

                <div className=" flex justify-center">
                    <a href="tel: +91 6375596006" className="w-full flex justify-center"><div className="bg-[#E40443] text-white px-[15px] py-[10px] max-w-[300px] rounded-[10px] text-center font-semibold text-[28px] absolute bottom-[-30px] ">+91 6375596006 </div></a> 
                </div> 
            </div>

            <div className="md:hidden py-[30px] px-[20px] bg-[#F4F4F4] relative">
                <p className="text-center font-semibold text-[18px] ">Welcome to Dooper: <div className=""> Healthcare at Your Fingertips.</div></p>
                <p className="text-center font-medium text-[10px] py-[6px]">In emergencies, every minute counts, and rapid health assistance can be life-saving. At Dooper, we prioritize your well-being. Our platform delivers the convenience, affordability, and quality of smart health technology to your doorstep. Choose Dooper for on-demand healthcare, home delivery of lab tests and medicines, potentially life-saving assistance, and point-of-care testing with 21 vital checks. Experience healthcare that puts you first.</p>

                <div className="flex flex-col justify-between items-center space-y-5 mt-[20px]">
                    <div className="bg-white px-[15px] py-[10px] w-[65%]">
                        <p className="font-semibold text-[28px] text-center">50+</p>
                        <p className="mt-[5px] text-center font-medium">Specialized Doctors</p>
                    </div>
                    <div className="bg-white px-[15px] py-[10px] w-[65%]">
                        <p className="font-semibold text-[28px] text-center">2k+</p>
                        <p className="mt-[5px] text-center font-medium">Happy patients</p>
                    </div>
                    <div className="bg-white px-[15px] py-[10px] w-[65%]">
                        <p className="font-semibold text-[28px] text-center">30 min</p>
                        <p className="mt-[5px] text-center font-medium">Average Response Time</p>
                    </div>
                    <div className="bg-white px-[15px] py-[10px] w-[65%]">
                        <p className="font-semibold text-[28px] text-center">2k+</p>
                        <p className="mt-[5px] text-center font-medium">Certified Lab Reports</p>
                    </div>
                </div>
                {/* <p className="text-center font-semibold text-[16px] mt-[30px] font-semibold">Get Premium  Services Call Us!</p> */}
                <div className="flex justify-center">
                    <a href="tel: +91 6375596006" className="w-full flex justify-center"><div className="bg-[#E40443] text-white px-[15px] py-[10px] max-w-[300px] rounded-[10px] text-center font-semibold text-[14px] absolute bottom-[-20px] ">+91 6375596006</div></a>
                </div>   
            </div>

            <div className="hidden md:inline-flex flex-col py-[40px] px-[100px] mt-[50px]">
                <div className="flex justify-center">
                    <div className="bg-[#F5F6F7] text-center px-[15px] py-[5px] rounded-[5px] text-[#1A1C1F] w-[180px] font-semibold text-[14px]">Our Hospitals</div>
                </div>
                <div className="text-[24px] font-medium text-center mt-[10px]">Top Hospital Network</div>
                <div className="flex justify-between space-x-5 mt-[40px]">
                    {
                        LocationCardDetails.map((card) => {
                            return <LocationCard img={card.img} name={card.name} location={card.location} />
                        })
                    }
                </div>
                <div className='flex space-x-2 justify-center mt-[0px]'>
                    {dot1 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1(true)
                        setDot2(false)
                        setDot3(false);
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {dot2 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1(false)
                        setDot2(true)
                        setDot3(false);
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {dot3 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1(false)
                        setDot2(false)
                        setDot3(true);
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                </div>
                <Link to={'/hospitals'}><div className="flex justify-center mt-[40px]">
                    <button className="bg-[#E40443] text-center px-[6px] py-[4px] text-white rounded-[5px] w-[120px] font-semibold">View All</button>
                </div></Link>
            </div>

            <div className="md:hidden flex flex-col items-center py-[30px] px-[20px] mt-[50px]">
            <div className="font-semibold text-[13px] bg-[#F5F6F7] text-center px-[12px] py-[5px] rounded-[5px] text-[#1A1C1F] w-[130px]">
                <p>Our Hospitals</p>
            </div>
            <div className="text-[24px] font-medium text-center mt-[10px]">Top Hospital Network</div>
            <div className="w-full mt-[40px]">
                <Carousel
                    showArrows={false}
                    showStatus={false}
                    showThumbs={false}
                    showIndicators={false}
                    autoPlay
                    interval={3000}
                    infiniteLoop
                    selectedItem={hospitalDotSelected - 1}
                    onChange={(index) => setHospitalDotSelected(index + 1)}
                >
                    {
                        LocationCardDetails.map((card, index) => (
                            <div key={index} className="flex justify-center">
                                <LocationCard img={card.img} name={card.name} location={card.location} />
                            </div>
                        ))
                    }
                </Carousel>
            </div>
            <div className='flex space-x-2 justify-center mt-[0px]'>
                {LocationCardDetails.map((_, index) => (
                    hospitalDotSelected === index + 1
                        ? <img key={index} src="/Assets/ActiveDot.png" className='w-[25px]' />
                        : <img
                            key={index}
                            onClick={() => setHospitalDotSelected(index + 1)}
                            src="/Assets/InactiveDot.png"
                            className='w-[10px] h-[10px] cursor-pointer'
                        />
                ))}
            </div>
            <Link to={'/hospitals'}>
                <div className="flex justify-center mt-[30px]">
                    <button className="bg-[#E40443] text-center px-[6px] py-[8px] text-white rounded-[5px] w-[120px] font-semibold text-[10px] font-semibold">View All</button>
                </div>
            </Link>
            </div>

            <div className="hidden md:inline-flex flex-col py-[40px] px-[100px]">
                <div className="flex justify-center">
                    <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[130px] font-semibold text-[14px]">Our Doctors</div>
                </div>
                <div className="text-[24px] font-medium text-center mt-[10px]">Consult with Leading Medical Experts</div>
                <div className="flex space-x-5 mt-[40px]">
                    {
                        DoctorCardDetails.map((card) => {
                            return <DoctorCard img={card.img} name={card.name} location={card.location} designation={card.designation} experience={card.experience} />
                        })
                    }
                </div>
                <div className='flex space-x-2 justify-center mt-[40px]'>
                    {dot1 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1(true)
                        setDot2(false)
                        setDot3(false);
                        setDot4(false);
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {dot2 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1(false)
                        setDot2(true)
                        setDot3(false);
                        setDot4(false);
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {dot3 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1(false)
                        setDot2(false)
                        setDot3(false);
                        setDot4(true);
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                </div>
                <Link to={'/doctors'}><div className="flex justify-center mt-[40px]">
                    <button className="bg-[#E40443] text-center px-[6px] py-[4px] text-white rounded-[5px] w-[120px] font-semibold">View All</button>
                </div></Link>
                    
            </div>

            <div className="md:hidden py-[30px] flex flex-col items-center px-[20px]">
            <div className="font-semibold text-[13px] bg-[#F5F6F7] text-center px-[12px] py-[5px] rounded-[5px] text-[#1A1C1F] w-[130px]">
                <p>Our Doctors</p>
            </div>
            <div className="text-[24px] font-medium text-center mt-[10px]">Consult with Leading Medical Experts</div>
            <div className="w-full mt-[40px]">
                <Carousel
                    showArrows={false}
                    showStatus={false}
                    showThumbs={false}
                    autoPlay
                    showIndicators={false}
                    interval={3000}
                    infiniteLoop
                    selectedItem={selectedDoctorDot - 1}
                    onChange={(index) => setSelectedDoctorDot(index + 1)}
                >
                    {
                        DoctorCardDetails.map((card, index) => (
                            <div key={index} className="flex justify-center">
                                <DoctorCard img={card.img} name={card.name} location={card.location} designation={card.designation} experience={card.experience} />
                            </div>
                        ))
                    }
                </Carousel>
            </div>
            <div className='flex space-x-2 justify-center mt-[40px]'>
                {DoctorCardDetails.map((_, index) => (
                    selectedDoctorDot === index + 1
                        ? <img key={index} src="/Assets/ActiveDot.png" className='w-[25px]' />
                        : <img
                            key={index}
                            onClick={() => setSelectedDoctorDot(index + 1)}
                            src="/Assets/InactiveDot.png"
                            className='w-[10px] h-[10px] cursor-pointer'
                        />
                ))}
            </div>
            <Link to={'/doctors'}>
                <div className="flex justify-center mt-[30px]">
                    <button className="bg-[#E40443] text-center px-[6px] py-[8px] text-white rounded-[5px] w-[120px] font-semibold text-[10px]">View All</button>
                </div>
            </Link>
        </div>

            {/* ****************************website our labs************************* */}
            <div className="hidden md:inline-flex flex-col py-[40px] px-[100px]">
                <div className="flex justify-center">
                    <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[110px] font-semibold text-[14px]">Our Labs</div>
                </div>
                <div className="text-[24px] font-medium text-center mt-[10px]">Top-notch Lab Services at your Doorstep</div>
                <div className="flex space-x-5 justify-between mt-[40px]">
                    {
                        LabCardDetails.map((card) => {
                            return <LocationCard img={card.img} name={card.name} location={card.location} />
                        })
                    }
                </div>
                <div className='flex space-x-2 justify-center mt-[0px]'>
                    {dot1 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1(true)
                        setDot2(false)
                        setDot3(false);
                        setDot4(false);
                        setDot5(false);
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {dot2 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1(false)
                        setDot2(true)
                        setDot3(false);
                        setDot4(false);
                        setDot5(false);
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {dot3 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1(false)
                        setDot2(false)
                        setDot3(true);
                        setDot4(false);
                        setDot5(false);
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {dot4 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1(false)
                        setDot2(false)
                        setDot3(false);
                        setDot4(true);
                        setDot5(false);
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {dot5 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1(false)
                        setDot2(false)
                        setDot3(false);
                        setDot4(false);
                        setDot5(true);
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                </div>
                <Link to={'/labs'}><div className="flex justify-center mt-[40px]">
                    <button className="bg-[#E40443] text-center px-[6px] py-[4px] text-white rounded-[5px] w-[120px] font-semibold">View All</button>
                </div></Link>
            </div>



{/* ***************************************mobile our labs****************** */}
            
            <div className="md:hidden flex flex-col items-center py-[30px] px-[20px]">
            <div className="font-semibold text-[13px] bg-[#F5F6F7] text-center px-[12px] py-[5px] rounded-[5px] text-[#1A1C1F] w-[130px]">
                <p>Our Labs</p>
            </div>
            <div className="text-[24px] font-medium text-center mt-[10px]">Top-notch Lab Services at your Doorstep</div>
            <div className="w-full mt-[40px]">
                <Carousel
                    showArrows={false}
                    showStatus={false}
                    showThumbs={false}
                    showIndicators={false}
                    autoPlay
                    interval={3000}
                    infiniteLoop
                    selectedItem={selectedLabDot - 1}
                    onChange={(index) => setSelectedLabDot(index + 1)}
                >
                    {
                        LabCardDetails.map((card, index) => (
                            <div key={index} className="flex justify-center">
                                <LocationCard img={card.img} name={card.name} location={card.location} />
                            </div>
                        ))
                    }
                </Carousel>
            </div>
            <div className='flex space-x-2 justify-center mt-[0px]'>
                {LabCardDetails.map((_, index) => (
                    selectedLabDot === index + 1
                        ? <img key={index} src="/Assets/ActiveDot.png" className='w-[25px]' />
                        : <img
                            key={index}
                            onClick={() => setSelectedLabDot(index + 1)}
                            src="/Assets/InactiveDot.png"
                            className='w-[10px] h-[10px] cursor-pointer'
                        />
                ))}
            </div>
            <Link to={'/labs'}>
                <div className="flex justify-center mt-[30px]">
                    <button className="bg-[#E40443] text-center px-[6px] py-[8px] text-white rounded-[5px] w-[120px] font-semibold text-[10px]">View All</button>
                </div>
            </Link>
        </div>

            <div className="px-[20px] py-[30px] lg:py-[30px] bg-[#EEF0F3] lg:px-[100px]">
                <div className="flex flex-row items-center">
                    <p className="w-[100%] md:w-[40%] text-[13px] font-medium lg:font-medium md:text-[16px] font-medium">Trusted by 1000+ companies and patients</p> 
                    <div className="border-[1px] border-[#B8BFC7] w-[25%] lg:w-full h-[1px]"></div>
                </div>
                <div className="hidden md:inline-flex flex lg:justify-between w-full mt-[30px]">
                    <div className="flex flex-col">
                        <div className="text-[36px] text-[#E40443] font-medium">50+</div>
                        <div>Specialized Doctors</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-[36px] text-[#E40443] font-medium">2k+</div>
                        <div>Happy patients</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-[36px] text-[#E40443] font-medium">30 min</div>
                        <div>Average Response Time</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-[36px] text-[#E40443] font-medium">2k+</div>
                        <div>Certified lab reports</div>
                    </div>
                </div>
                {/* for mobile devices  */}
                <div className="md:hidden space-y-4 mt-[10px]">
                    <div className="flex justify-between ">
                    <div className="flex flex-col">
                            <div className="text-[36px] text-[#E40443] font-medium">2k+</div>
                            <div>Happy patients</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-[36px] text-[#E40443] font-medium">50+</div>
                            <div>Specialized Doctors</div>
                        </div>
                       
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <div className="text-[36px] text-[#E40443] font-medium">30 min</div>
                            <div>Average Response Time</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-[36px] text-[#E40443] font-medium">2k+</div>
                            <div>Certified lab reports</div>
                        </div>
                    </div>
                </div>
            </div>
             
             <OurMedia/>
             <OurMediaMobile/>
             <Achievements/>
        </>
    );
}

export default AboutUs;