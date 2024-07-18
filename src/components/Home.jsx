import React from "react";
import CommunityCards from "./Cards/CommunityCard";
import HomepageCard from "./Cards/HomepageCard";
import HomepageSpecialitiesCard from "./Cards/HomepageSpecialitiesCard";
import LocationCard from "./Cards/LocationCard";
import TestimonialCard from "./Cards/TestimonialCard";
import FAQContainer from "./Containers/FAQContainer";
import TestimonialContainer from "./Containers/TestimonialContainer";
import Testimonials from "../Database/Testimonials";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SemiDonutGraph from "./Cards/SemiDonutGraph";
import OurMedia from "./OurMedia";
import OurMediaMobile from "./OurMediaMobile";
import FAQContainercopy from "./Containers/FAQContainercopy";


// **********************changes*******************
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Achievements from "./Achievements";

const val = 78;
const certificateDetails = [
  { img: "/Assets/startupin.png", alt: "Startup India" },
  { img: "/Assets/istart.png", alt: "iStart" },
  { img: "/Assets/assocham.png", alt: "ASSOCHAM" }
];
const CardDetails = [
  {
    img: "/Assets/HomeCard1.png",
    tag: "Lab Test",
  },
  {
    img: "/Assets/HomeCard4.png",
    tag: "Nursing Care",
  },
  {
    img: "/Assets/HomeCard3.png",
    tag: "Vaccination",
  },
  {
    img: "/Assets/HomeCard2.png",
    tag: "Home Care",
  },
];``

const CommunityData = [
  {
    img: "/Assets/CommunityDHA.png",
    name: "DHA",
    content:"Become a DHA. Impact lives, earn more, and be the future of healthcare."  
},
  {
    img: "/Assets/CommunityHospital.png",
    name: "Hospital",
    content:
      "Join an exclusive network of top hospitals, expand patient care, and be part of the healthcare revolution",
  },
  {
    img: "/Assets/CommunityDoctor.png",
    name: "Doctor",
    content:"Join the best doctors bringing healthcare transformations. Offer online aid and take charge of healthcare’s digital frontier."
  },
  {
    img: "/Assets/CommunityPharma.png",
    name: "Pharma",
    content:"Join us to become a digital lifeline for patients, expand your reach and gain more customers.",
  },
  {
    img: "/Assets/CommunityLab.png",
    name: "Lab",
    content:"Increase your lab’s reach by getting more orders and becoming an online partner for patients.",
  },
];

const SpecialitiesCardDetails = [
  {
    img: '/Assets/Healthconcernimages/HomePediatrician.png',
    tag: 'Pediatrician'
},
{
    img: '/Assets/Healthconcernimages/Homephysician.png',
    tag: 'Physician'
},
{
    img: '/Assets/Healthconcernimages/HomeGynaecologist.png',
    tag: 'Gynaecologist'
},
{
    img: '/Assets/Healthconcernimages/HomeDermatologist.png',
    tag: 'Dermatologist'
},
{
    img: '/Assets/Healthconcernimages/HomeOrthopedician.png',
    tag: 'Orthopedician'
},
{
    img: '/Assets/Healthconcernimages/HomeFertilitySpecialist.png',
    tag: 'Fertility-specialist'
},
{
    img: '/Assets/Healthconcernimages/HomeCardiologist.png',
    tag: 'Cardiologist'
},
{
    img: '/Assets/Healthconcernimages/HomeGeneralSurgeon2.png',
    tag: 'General surgeon'
},
{
    img: '/Assets/Healthconcernimages/HomeGastroenterologist.png',
    tag: 'Gastro-enterologist'
},
];

const HealthConcernsDetails = [
  {
    img: "/Assets/Healthconcernimages/Fever.png",
    tag: "Fever",
  },
  {
    img: "/Assets/Healthconcernimages/blocked_nose.png",
    tag: "Blocked Nose",
  },
  {
    img: "/Assets/Healthconcernimages/cough.png",
    tag: "Cough",
  },
  {
    img: "/Assets/Healthconcernimages/headache.png",
    tag: "Headache",
  },
  {
    img: "/Assets/Healthconcernimages/vomiting_nausea.png",
    tag: "Vomiting",
  },
  {
    img: "/Assets/Healthconcernimages/hairfall.png",
    tag: "Hairfall",
  },
  {
    img: "/Assets/Healthconcernimages/dry_skin.png",
    tag: "Dry-skin",
  },
  {
    img: "/Assets/Healthconcernimages/abdominal_pain.png",
    tag: "Abdominal pain",
  },
  {
    img: "/Assets/Healthconcernimages/Diabetes.png",
    tag: "Diabetes",
  },
];

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

const FAQList = [
  // {
  //   question: "How to book your service?",
  //   answer:
  //     "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // },
  // {
  //   question:
  //     "How do I find information about the hospitals location and contact details?",
  //   answer:
  //     "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // },
  // {
  //   question: "How can I schedule an appointment with a doctor?",
  //   answer:
  //     "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // },
  // {
  //   question: "What types of services or specialties does the hospital offer?",
  //   answer:
  //     "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // },
  // {
  //   question: "How can I access my medical records or test results?",
  //   answer:
  //     "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // },
  // {
  //   question: "What insurance plans does the hospital accept?",
  //   answer:
  //     "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // },
  // {
  //   question:
  //     "How can I pay my medical bills or inquire about billing-related issues?",
  //   answer:
  //     "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // },
];

const Home = (props) => {
  const [dot1, setDot1] = useState(true);
  const [dot2, setDot2] = useState(false);
  const [dot3, setDot3] = useState(false);
  const [dot4, setDot4] = useState(false);
  const [dot5, setDot5] = useState(false);

  const [dot1Solutions, setDot1Solutions] = useState(true);
  const [dot2Solutions, setDot2Solutions] = useState(false);
  const [dot3Solutions, setDot3Solutions] = useState(false);
  const [dot4Solutions, setDot4Solutions] = useState(false);
  const [dot5Solutions, setDot5Solutions] = useState(false);
  const [selectedCard, setSelectedCard] = useState(1);

  const [dot1Speciality, setDot1Speciality] = useState(true);
  const [dot2Speciality, setDot2Speciality] = useState(false);
  const [dot3Speciality, setDot3Speciality] = useState(false);
  const [dot4Speciality, setDot4Speciality] = useState(false);
  const [dot5Speciality, setDot5Speciality] = useState(false);
  const [selectedSection, setSelectedSection] = useState(1);
  const [certificateSelectedDot, setCertificateSelectedDot] = useState(1);
  
// *****************chages****************


const handleCarouselChange = (index) => {
  setSelectedSection(index + 1);
  updateDotStatus(index + 1);
};

const updateDotStatus = (section) => {
  setDot1Speciality(section === 1);
  setDot2Speciality(section === 2);
  setDot3Speciality(section === 3);
};


const settings = {
  dots: false,
  infinite: true,
  
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  beforeChange: (current, next) => setSelectedCommunityDot(next + 1)
};

  const [dot1Health, setDot1Health] = useState(true);
  const [dot2Health, setDot2Health] = useState(false);
  const [dot3Health, setDot3Health] = useState(false);
  const [dot4Health, setDot4Health] = useState(false);
  const [dot5Health, setDot5Health] = useState(false);
  const [selectedSection2, setSelectedSection2] = useState(1);

  const [locationDotSelected, setLocationDotSelected] = useState(1);

  const [selectedTestimonialDot, setSelectedTestimonialDot] = useState(1);

  const [selectedCommunityDot, setSelectedCommunityDot] = useState(1);
  const [selectedTestimonialIndex, setSelectedTestimonialIndex] = useState(1);
  return ( <>
    <div className="">
      <div className="hidden md:inline-flex flex justify-between items-center px-[100px] pt-[30px] bg-[#F4F4F4]">
        <div className="flex text-[#1A1C1F] flex-col space-y-8 w-[40%] relative">
          <img
            src="/Assets/PinkStar.png"
            alt="star"
            className="w-[30px] absolute left-[-30px]"
          />
          <img
            src="/Assets/PinkStar.png"
            alt="star"
            className="w-[40px] absolute right-[30px]"
          />
          <img
            src="/Assets/PinkStar.png"
            alt="star"
            className="w-[30px] absolute bottom-[-30px] right-[30px]"
          />
          <p className="font-semibold">Get Quick Relief at Home</p>
          <p className="text-[60px] font-semibold leading-tight w-[470px]">
            Fast & Affordable Urgent Care
          </p>
          <p className="text-[#5B6572]">
            Transform your urgent healthcare experience with our one-stop
            solution, from tests to medications
          </p>
          <div className="flex space-x-3 items-center mt-[50px]">
            <Link to={"/contact"}>
              <div className="bg-[#E40443] text-center px-[6px] py-[7px] text-white rounded-[5px] w-[220px]">
                <p className="font-semibold">Make An Appointment</p>
              </div>{" "}
            </Link>
            <a href="tel: +916375596006">
              <div className="px-[20px] py-[7px] rounded-[5px] bg-[#FCE6EC]  flex justify-center items-center space-x-2">
                <img
                  src="/Assets/PinkCallIcon.png"
                  className="w-[18px]"
                  alt="icon"
                />
                <p className="text-[#E40443] font-semibold text-center">
                  Urgent Call
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="lg: w-[60%] relative">
          <img src="/Assets/HeroImageFinalupdated.png" className="" alt="heroImage" />
          </div>
      </div>

      <div className="relative text-[#1A1C1F] md:hidden flex flex-col bg-[#F9F9F9] items-center px-[20px] py-[30px]">
        <p className="font-semibold text-[12px]">Get Quick Relief at Home</p>
        <p className="text-center font-semibold text-[36px] mt-[10px]">
          Fast & Affordable Urgent Care
        </p>
        <p className="text-[14px] text-center text-[#5B6572] mt-[10px]">
          Transform your urgent healthcare experience with our one-stop
          solution, from tests to medications
        </p>
        <div>
          <img
            src="/Assets/HeroImageFinalupdated.png"
            alt="HeroImage"
            className="w-full mt-[10px] "
          />
          
        </div>
        <img
          src="/Assets/PinkStarMobile.png"
          alt="star"
          className="absolute left-10 top-[7%] w-[15px]"
        />
        <img
          src="/Assets/PinkStarMobile.png"
          alt="star"
          className="absolute left-5 top-[20%] w-[20px]"
        />
        <img
          src="/Assets/PinkStarMobile.png"
          alt="star"
          className="absolute left-5 top-[50%] w-[30px]"
        />
        <img
          src="/Assets/PinkStarMobile.png"
          alt="star"
          className="absolute left-8 top-[70%] w-[15px]"
        />
        <img
          src="/Assets/PinkStarMobile.png"
          alt="star"
          className="absolute right-10 w-[20px]"
        />
        <img
          src="/Assets/PinkStarMobile.png"
          alt="star"
          className="absolute right-20 top-[15%] w-[20px]"
        />
        <div className="flex items-center justify-between space-x-5 mt-[20px]">
          <Link to={"/contact"}>
            <button className="text-white rounded-[5px] bg-[#E40443] px-[15px] py-[10px] text-[13px] font-semibold">
              Make an Appointment
            </button>
          </Link>
          <a href="tel: +916375596006">
            <div className="flex items-center justify-center space-x-2 rounded-[5px] bg-[#FCE6EC] px-[15px] py-[10px]">
              <img
                src="/Assets/PinkCallIconMobile.png"
                alt="call"
                className="w-[20px]"
              />
              <p className="text-[#E40443] text-[13px] font-semibold">
                Urgent Call
              </p>
            </div>
          </a>
        </div>
      </div>

      <div className="px-[20px] py-[30px] lg:pt-[30px] lg:px-[100px] lg:py-[40px]" id='services'>
        <div className="font-semibold flex justify-center text-center bg-[#F5F6F7] text-center px-[10px] py-[5px] rounded-[5px] text-[#1A1C1F] w-[70px]">
          <p className="text-center text-[13px] md:text-[16px] font-semibold">
            DHA
          </p>
        </div>
        <div className="py-[10px] ">
          <h2 className=" text-[24px] font-medium lg:text-[35px]">
            Urgent Care: Simplifying Your Healthcare
          </h2>
          <p className="pt-[10px] text-[13px] md:text-[16px]">
          Our Dooper Health Assistants, or DHAs, are equipped with advanced medical equipment for assessing 21 crucial vitals in the comfort of your home. They connect you with top doctors, giving you smart and hassle-free urgent care when it is needed most.
          </p>
        </div>

        <div className="md:hidden">
          <img
            src="/Assets/WhatOurHDAProvides2.png"
            alt="leading"
            className="w-full"
          />
        </div>
        <div className="md:hidden text-[13px]">
          <p className="">
          DHAs are paramedics or nursing staff trained to provide symptomatic relief for non-life-threatening conditions. Enjoy our 360° service – from DHA visits to seamless delivery of lab reports, timely medications, and post-check-up follow-up support.
          </p>
          <p className="">
          Cut down your needless expenses and appointment wait times. Request a DHA at home.
          </p>
        </div>
        <div className="md:hidden">
          <div className="flex mt-[10px] flex-row justify-between">
            <div className="w-[50%] flex flex-col">
              <div className="flex items-center">
                <img
                  className="w-[20px]"
                  src="/Assets/SupportIcon.png"
                  alt="icon"
                />
                <p className="ml-[10px] text-[13px] font-medium">
                  24/7 Doctor Support
                </p>
              </div>
              <div className="flex items-center mt-5">
                <img className="w-[20px]" src="/Assets/Doctor.png" alt="icon" />
                <p className="ml-[10px] text-[13px] font-medium">
                  Certified Doctors
                </p>
              </div>
            </div>
            <div className="w-[50%] flex flex-col ">
              <div className="flex items-center">
                <img
                  className="w-[20px]"
                  src="/Assets/TechnologyIcon.png"
                  alt="icon"
                />
                <p className="ml-[10px] text-[13px] font-medium">
                  Modern Technology
                </p>
              </div>
              <div className="flex items-center mt-5">
                <img
                  className="w-[20px]"
                  src="/Assets/Appointment.png"
                  alt="icon"
                />
                <p className="ml-[10px] text-[13px] font-medium">
                  Instant Appointment
                </p>
              </div>
            </div>
          </div>
          <Link to={"/contact"}>
            <div className="bg-[#E40443] text-[13px] text-center mt-[20px] px-[6px] py-[4px] mx-auto text-white rounded-[5px] w-[120px]">
              <p className="font-semibold">Book Service</p>
            </div>
          </Link>
        </div>

        <div className="hidden md:inline-flex flex flex-row items-center justify-between">
          <div className="w-[40%]">
            <img src="/Assets/WhatOurHDAProvides2.png" />
          </div>
          <div className="w-[60%] pl-[50px]">
            <div className="py-[10px] text-[13px] md:text-[16px]">
              <p className="mt-[10px]">
              DHAs are paramedics or nursing staff trained to provide symptomatic relief for non-life-threatening conditions. Enjoy our 360° service – from DHA visits to seamless delivery of lab reports, timely medications, and post-check-up follow-up support.
              </p>
              <p className="mt-[10px]">
              Cut down your needless expenses and appointment wait times. Request a DHA at home.
              </p>
            </div>
            <div className="flex mt-[10px] flex-row justify-between">
              <div className="w-[50%] flex flex-col">
                <div className="flex items-center">
                  <img
                    className="w-[20px]"
                    src="/Assets/SupportIcon.png"
                    alt="icon"
                  />
                  <p className="ml-[10px] font-medium">24/7 Doctor Support</p>
                </div>
                <div className="flex items-center mt-5">
                  <img
                    className="w-[20px]"
                    src="/Assets/Doctor.png"
                    alt="icon"
                  />
                  <p className="ml-[10px] font-medium">Certified Doctors</p>
                </div>
              </div>
              <div className="w-[50%] flex flex-col ">
                <div className="flex items-center">
                  <img
                    className="w-[20px]"
                    src="/Assets/TechnologyIcon.png"
                    alt="icon"
                  />
                  <p className="ml-[10px] font-medium">Modern Technology</p>
                </div>
                <div className="flex items-center mt-5">
                  <img
                    className="w-[20px]"
                    src="/Assets/Appointment.png"
                    alt="icon"
                  />
                  <p className="ml-[10px] font-medium">Instant Appointment</p>
                </div>
              </div>
            </div>
            <Link to={"/contact"}>
              <div className="bg-[#E40443] text-center mt-[20px] px-[10px] py-[4px]  text-white rounded-[5px] w-[130px]">
                <p className="font-semibold">Book Service</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="px-[20px] py-[30px] lg:py-[30px] bg-[#EEF0F3] lg:px-[100px]">
        <div className="flex flex-row items-center">
          <p className="w-[100%] md:w-[40%] text-[13px] font-medium lg:font-medium md:text-[16px] font-medium">
          Trusted by 1000+ doctors & patients
          </p>
          <div className="border-[1px] border-[#B8BFC7] w-[25%] lg:w-full h-[1px]"></div>
        </div>
    
        <div className="md:hidden space-y-4 mt-[10px]">
          <div className="flex justify-between">
          <div className="flex flex-col mr-0">
              <div className="text-[36px] text-[#E40443] font-medium ">2k+</div>
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
            <div className="flex flex-col mr-0">
              <div className="text-[36px] text-[#E40443] font-medium ">2k+</div>
              <div className="hidden md:block">Certified lab reports</div>
              <div className="md:hidden">Certified lab reports</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:inline-flex flex flex-col py-[30px] px-[100px]">
        <div className="font-semibold bg-[#F5F6F7] text-center px-[12px] py-[5px] rounded-[5px] text-[#1A1C1F] w-[260px]">
          Dooper Healthcare for all
        </div>
        <p className="text-[35px] mt-[10px] font-medium">
          {/*for pc */}
          Providing Quality Care- Anytime, Anywhere!
        </p>
        <div className="flex flex-row justify-between mt-[40px]">
          {CardDetails.map((card, index) => {
            return (
              <HomepageCard
                img={card.img}
                tag={card.tag}
                selectedCard={selectedCard}
              />
            );
          })}
        </div>
      </div>

      {/* code beforeof providing health care service */}
     
      <div className='md:hidden flex flex-col px-[20px] py-[30px] items-center'>
        {/* for laptop */}
        <p className='text-[24px] font-medium'>What you get</p>

        <div className='mt-[10px] flex grid grid-cols-2'>
          <div className='mx-[10px] my-[10px] flex flex-col items-center border-[1px] border-[#D0D4D9] rounded-[10px]'>
            <img src="/Assets/HomeCard1.png" alt="img" className='rounded-t-[10px]' />
            <div className='px-[10px] py-[4px]'>
              <p className='mt-[10px] text-center text-[#1A1C1F]  text-[15px] font-medium'>Lab Test</p>
              <a href="https://api.whatsapp.com/send/?phone=6375596006&text&type=phone_number&app_absent=0">
              <button className="px-[10px] py-[5px] text-[#E40443] w-[80px] text-center rounded-[5px] bg-[#FCE6EC] text-[10px] font-semibold">Book Now</button></a>
            </div>
          </div>
          <div className='mx-[10px] my-[10px] flex flex-col items-center border-[1px] border-[#D0D4D9] rounded-[10px]'>
            <img src="/Assets/HomeCard4.png" alt="img" className='rounded-t-[10px]' />
            <div className='px-[10px] py-[4px] flex flex-col items-center'>
              <p className='mt-[10px] text-center text-[#1A1C1F] text-[15px] font-medium'>Nursing Care</p>
              <a href="https://api.whatsapp.com/send/?phone=6375596006&text&type=phone_number&app_absent=0">
              <button className="px-[10px] py-[5px] text-[#E40443] w-[80px] text-center rounded-[5px] bg-[#FCE6EC] text-[10px] font-semibold">Book Now</button></a>
            </div>
          </div>

          <div className='mx-[10px] my-[10px] flex flex-col items-center border-[1px] border-[#D0D4D9] rounded-[10px]'>
            <img src="/Assets/HomeCard3.png" alt="img" className='rounded-t-[10px]' />
            <div className='px-[10px] py-[4px]'>
              <p className='mt-[10px] text-center text-[#1A1C1F]  text-[15px] font-medium'>Vaccination</p>
              <a href="https://api.whatsapp.com/send/?phone=6375596006&text&type=phone_number&app_absent=0">
              <button className="px-[10px] py-[5px] text-[#E40443] w-[80px] text-center rounded-[5px] bg-[#FCE6EC] text-[10px] font-semibold">Book Now</button></a>

            </div>
          </div>
          <div className='mx-[10px] my-[10px] flex flex-col items-center border-[1px] border-[#D0D4D9] rounded-[10px]'>
            <img src="/Assets/HomeCard2.png" alt="img" className='rounded-t-[10px]' />
            <div className='px-[10px] py-[4px]'>
              <p className='mt-[10px] text-center text-[#1A1C1F]  text-[15px] font-medium'>Home Care</p>
              <a href="https://api.whatsapp.com/send/?phone=6375596006&text&type=phone_number&app_absent=0">
              <button className="px-[10px] py-[5px] text-[#E40443] w-[80px] text-center rounded-[5px] bg-[#FCE6EC] text-[10px] font-semibold">Book Now</button></a>

            </div>
          </div>
        </div>
      </div>

      <div id="how-it-works1" className="hidden lg:block text-[40px] mt-[10px] font-medium text-center">How it works!</div>
    
      <div id="how-it-works2" className="md:hidden text-[25px] mt-[10px] font-medium text-center " >How it works!</div>
      <div className=" hidden lg:block px-[20px] py-[30px] lg:py-[40px] lg:px-[100px] bg-[#EEF0F3] flex flex-col lg:flex-row lg:justify-center lg:items-center lg:space-x-12">
      </div>
      <div className=" hidden lg:block px-[20px] py-[30px] lg:py-[40px] lg:px-[100px] bg-[#EEF0F3] flex flex-col lg:flex-row lg:justify-center lg:items-center lg:space-x-12">
          <img src="/Assets/howitworks6.png" alt="howitworksImage" />
      </div>
      <div className=" md:hidden  px-[20px] py-[30px] lg:py-[40px] lg:px-[100px] bg-[#EEF0F3] flex flex-col lg:flex-row lg:justify-center lg:items-center lg:space-x-12 ">
          <img  className="rounded-xl" src="/Assets/howitworksmobile.png" alt="howitworksImage" />
      </div>

      <div className="px-[20px] py-[30px] lg:py-[40px] lg:px-[100px] flex lg:flex-row flex-col justify-between items-center lg:space-x-12">
        <div className="lg:w-[50%]">
          <div className="hidden lg:inline-flex font-semibold bg-[#F5F6F7] text-center px-[12px] py-[5px] rounded-[5px] text-[#1A1C1F] w-[240px]">
          Improving Lives
          </div>
          <div className="md:hidden font-semibold text-[13px] bg-[#F5F6F7] text-center px-[12px] py-[5px] rounded-[5px] text-[#1A1C1F] w-[200px]">
          Improving Lives
          </div>
          <p className="text-[24px] font-medium mt-[10px] lg:text-[40px] lg:mt-[20px]">
          Our Numbers Tell Our Story
          </p>
          <p className="lg:mt-[20px] mt-[10px] text-[13px] lg:text-[16px]">
          Our track record in urgent care tells the story of our commitment to your well-being.
          </p>
        </div>
        <div className="w-full lg:w-[50%] flex flex-col">
          <div className="flex grid grid-cols-3 ">
            <SemiDonutGraph
              percentage={90}
              color={"#41B079"}
              text={"Patient Satisfaction Rate"}
              direction={"up"}
              className="ring"
            />
            <SemiDonutGraph
              percentage={60}
              color={"#41B079"}
              text={"Faster Response Time"}
              direction={"up"}
            />
            <SemiDonutGraph
              percentage={95}
              color={"#41B079"}
              text={"First Call Resolution"}
              direction={"up"}
            />
          </div>
          <div className="flex grid grid-cols-3 mt-[-70px] lg:mt-[0px]">
            <SemiDonutGraph
              percentage={60}
              color={"#F1614B"}
              text={"Decrease in Average Wait Time"}
              direction={"down"}
            />
            <SemiDonutGraph
              percentage={28}
              color={"#F1614B"}
              text={"Reduction in Overall Treatment Cost"}
              direction={"down"}
            />
            <SemiDonutGraph
              percentage={75}
              color={"#F1614B"}
              text={"Decrease in Hospital Readmissions"}
              direction={"down"}
            />
          </div>
        </div>
      </div>

      <div className="hidden lg:inline-flex flex flex-col py-[40px] px-[50px]">
        <div className="flex justify-center">
          <div className="bg-[#F5F6F7] text-center px-[15px] py-[5px] font-semibold rounded-[5px] text-[#1A1C1F] w-[100px] flex justify-center">
            <p className="text-center">Speciality</p>
          </div>
        </div>
        {/* *****************************************Specialities website******************* */}
        <div className=" text-[40px] text-center mt-[10px] font-medium">
          Specialities
        </div>
        <div className="flex space-x-5 mt-[40px]">
          {SpecialitiesCardDetails.map((card) => {
            return <HomepageSpecialitiesCard img={card.img} tag={card.tag} />;
          })}
        </div>
        <div className="flex space-x-2 justify-center mt-[20px]">
          {dot1 ? (
            <img src="/Assets/ActiveDot.png" className="w-[25px]" />
          ) : (
            <img
              onClick={() => {
                setDot1(true);
                setDot2(false);
                setDot3(false);
              }}
              src="/Assets/InactiveDot.png"
              className="w-[10px] h-[10px] cursor-pointer"
            />
          )}
          {dot2 ? (
            <img src="/Assets/ActiveDot.png" className="w-[25px]" />
          ) : (
            <img
              onClick={() => {
                setDot1(false);
                setDot2(true);
                setDot3(false);
              }}
              src="/Assets/InactiveDot.png"
              className="w-[10px] h-[10px] cursor-pointer"
            />
          )}
          {dot3 ? (
            <img src="/Assets/ActiveDot.png" className="w-[25px]" />
          ) : (
            <img
              onClick={() => {
                setDot1(false);
                setDot2(false);
                setDot3(true);
              }}
              src="/Assets/InactiveDot.png"
              className="w-[10px] h-[10px] cursor-pointer"
            />
          )}
        </div>
        <Link to={"/specialities"}>
          <div className="flex justify-center mt-[40px]">
            <button className="bg-[#E40443] text-center px-[6px] py-[4px] text-white rounded-[5px] w-[120px] font-semibold">
              View All
            </button>
          </div>
        </Link>
      </div>

      <div className="md:hidden mt-[-60px] py-[30px] px-[20px] flex flex-col items-center">
            <div className="md:hidden font-semibold text-[13px] bg-[#F5F6F7] text-center px-[12px] py-[5px] rounded-[5px] text-[#1A1C1F] w-[110px]">
                <p>Speciality</p>
            </div>
            <div className="text-[24px] text-center mt-[10px] font-medium">
                Specialities
            </div>
            <div className="w-full mt-[10px]">
                <Carousel
                    showArrows={false}
                    showIndicators={false}

                    showStatus={false}
                    showThumbs={false}
                    autoPlay={true}
                    interval={3000}
                    infiniteLoop
                    selectedItem={selectedSection - 1}
                    onChange={(index) => {
                        setSelectedSection(index + 1);
                        setDot1Speciality(index === 0);
                        setDot2Speciality(index === 1);
                        setDot3Speciality(index === 2);
                    }}
                >
                    {[0, 1, 2].map(section => (
                        <div key={section} className="flex justify-between">
                            {SpecialitiesCardDetails.slice(section * 3, (section + 1) * 3).map((card, index) => (
                                <HomepageSpecialitiesCard key={index} img={card.img} tag={card.tag} />
                            ))}
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className='flex space-x-2 justify-center mt-[20px]'>
                {dot1Speciality ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                    setDot1Speciality(true);
                    setDot2Speciality(false);
                    setDot3Speciality(false);
                    setSelectedSection(1);
                }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                {dot2Speciality ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                    setDot1Speciality(false);
                    setDot2Speciality(true);
                    setDot3Speciality(false);
                    setSelectedSection(2);
                }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                {dot3Speciality ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                    setDot1Speciality(false);
                    setDot2Speciality(false);
                    setDot3Speciality(true);
                    setSelectedSection(3);
                }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
            </div>
            <Link to={"/specialities"}>
                <div className="flex justify-center mt-[30px]">
                    <button className="bg-[#E40443] text-center px-[6px] py-[8px] text-white rounded-[5px] w-[120px] font-semibold text-[10px] font-semibold">
                        View All
                    </button>
                </div>
            </Link>
        </div>

      <hr className="md:hidden" />

      <div className="hidden lg:inline-flex flex flex-col py-[40px] px-[100px]">
        <div className="flex justify-center">
          <div className="font-semibold bg-[#F5F6F7] text-center px-[15px] py-[5px] rounded-[5px] text-[#1A1C1F] w-[180px]">
            Health Concerns
          </div>
        </div>
        <div className="text-[40px] text-center mt-[10px] font-medium">
          Common Health Concerns
        </div>
        <div className="flex space-x-5 mt-[40px]">
          {HealthConcernsDetails.map((card) => {
            return <HomepageSpecialitiesCard img={card.img} tag={card.tag} />;
          })}
        </div>
        <div className="flex space-x-2 justify-center mt-[20px]">
          {dot1 ? (
            <img src="/Assets/ActiveDot.png" className="w-[25px]" />
          ) : (
            <img
              onClick={() => {
                setDot1(true);
                setDot2(false);
                setDot3(false);
              }}
              src="/Assets/InactiveDot.png"
              className="w-[10px] h-[10px] cursor-pointer"
            />
          )}
          {dot2 ? (
            <img src="/Assets/ActiveDot.png" className="w-[25px]" />
          ) : (
            <img
              onClick={() => {
                setDot1(false);
                setDot2(true);
                setDot3(false);
              }}
              src="/Assets/InactiveDot.png"
              className="w-[10px] h-[10px] cursor-pointer"
            />
          )}
          {dot3 ? (
            <img src="/Assets/ActiveDot.png" className="w-[25px]" />
          ) : (
            <img
              onClick={() => {
                setDot1(false);
                setDot2(false);
                setDot3(true);
              }}
              src="/Assets/InactiveDot.png"
              className="w-[10px] h-[10px] cursor-pointer"
            />
          )}
        </div>
        <Link to={"Healthconcerns"}>
          <div className="flex justify-center mt-[40px]">
            <button className="bg-[#E40443] text-center px-[6px] py-[4px] text-white rounded-[5px] w-[120px] font-semibold">
              View All
            </button>
          </div>
        </Link>
      </div>



{/* *******************************************Common Health Concerns mobile*********************** */}
     
<div className="md:hidden py-[30px] px-[20px] flex flex-col items-center">
            <div className="md:hidden font-semibold text-[13px] bg-[#F5F6F7] text-center px-[12px] py-[5px] rounded-[5px] text-[#1A1C1F] w-[150px]">
                <p>Health Concerns</p>
            </div>
            <div className="text-[24px] text-center mt-[10px] font-medium">
                Common Health Concerns
            </div>
            <div className="w-full mt-[10px]">
                <Carousel
                    showArrows={false}
                    showIndicators={false}

                    showStatus={false}
                    showThumbs={false}
                    autoPlay={true}
                    interval={3000}
                    infiniteLoop
                    selectedItem={selectedSection2 - 1}
                    onChange={(index) => {
                        setSelectedSection2(index + 1);
                        setDot1Health(index === 0);
                        setDot2Health(index === 1);
                        setDot3Health(index === 2);
                    }}
                >
                    {[0, 1, 2].map(section => (
                        <div key={section} className="flex justify-between space-x-5">
                            {HealthConcernsDetails.slice(section * 3, (section + 1) * 3).map((card, index) => (
                                <HomepageSpecialitiesCard key={index} img={card.img} tag={card.tag} />
                            ))}
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className='flex space-x-2 justify-center mt-[20px]'>
                {dot1Health ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                    setDot1Health(true);
                    setDot2Health(false);
                    setDot3Health(false);
                    setSelectedSection2(1);
                }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                {dot2Health ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                    setDot1Health(false);
                    setDot2Health(true);
                    setDot3Health(false);
                    setSelectedSection2(2);
                }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                {dot3Health ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                    setDot1Health(false);
                    setDot2Health(false);
                    setDot3Health(true);
                    setSelectedSection2(3);
                }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
        </div>        
        <Link to={"/Healthconcerns"}>
          <div className="flex justify-center mt-[30px]">
            <button className="bg-[#E40443] text-center px-[6px] py-[8px] text-white rounded-[5px] w-[120px] font-semibold text-[10px] font-semibold">
              View All
            </button>
          </div>
        </Link>
      </div>
      <hr className="md:hidden" />

      <div className="hidden md:inline-flex flex-col items-center py-[40px] px-[100px] w-full">
        <div className="flex justify-center">
          <div className="font-semibold bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[180px]">
            Hospital Network
          </div>
        </div>
        <div className="w-full text-[40px] text-center mt-[10px] flex justify-center">
          <p className="w-[500px] font-medium">
          Top Hospital Network
          </p>
        </div>
        <div className="flex justify-between items-center mt-[40px] space-x-7">
          {LocationCardDetails.map((card) => {
            return (
              <LocationCard
                img={card.img}
                name={card.name}
                location={card.location}
              />
            );
          })}
        </div>
        <Link to={"/hospitals"}>
          <div className="flex justify-center mt-[20px] w-full">
            <button className="bg-[#E40443] text-center px-[6px] py-[4px] text-white rounded-[5px] w-[120px] font-semibold">
              View All
            </button>
          </div>
        </Link>
      </div>

      {/* **************************************************Hospital Network Mobile************** */}
      <div className="md:hidden py-[30px] px-[20px] flex flex-col items-center">
            <div className="md:hidden font-semibold text-[13px] bg-[#F5F6F7] px-[12px] py-[5px] flex justify-center rounded-[5px] text-[#1A1C1F] w-[150px]">
                <p className="text-center">Hospital Network</p>
            </div>
            <div className="w-full text-[40px] text-center mt-[10px] flex justify-center">
                <p className="text-[24px] font-medium">Top Hospital Network</p>
            </div>
            <div className="w-full mt-[10px]">
                <Carousel
                    showArrows={false}
                    showStatus={false}
                    showThumbs={false}
                    showIndicators={false}

                    autoPlay={true}
                    interval={2000}
                    infiniteLoop
                    selectedItem={locationDotSelected - 1}
                    onChange={(index) => {
                        setLocationDotSelected(index + 1);
                    }}
                >
                    {[0, 1, 2, 3, 4].map(section => (
                        <div key={section} className="flex justify-center">
                            {LocationCardDetails.slice(section, section + 1).map((card, index) => (
                                <LocationCard
                                    key={index}
                                    img={card.img}
                                    name={card.name}
                                    location={card.location}
                                />
                            ))}
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className="flex space-x-2 justify-center mt-[0px]">
                {locationDotSelected === 1 ? (
                    <img src="/Assets/ActiveDot.png" className="w-[25px]" />
                ) : (
                    <img
                        onClick={() => setLocationDotSelected(1)}
                        src="/Assets/InactiveDot.png"
                        className="w-[10px] h-[10px] cursor-pointer"
                    />
                )}
                {locationDotSelected === 2 ? (
                    <img src="/Assets/ActiveDot.png" className="w-[25px]" />
                ) : (
                    <img
                        onClick={() => setLocationDotSelected(2)}
                        src="/Assets/InactiveDot.png"
                        className="w-[10px] h-[10px] cursor-pointer"
                    />
                )}
                {locationDotSelected === 3 ? (
                    <img src="/Assets/ActiveDot.png" className="w-[25px]" />
                ) : (
                    <img
                        onClick={() => setLocationDotSelected(3)}
                        src="/Assets/InactiveDot.png"
                        className="w-[10px] h-[10px] cursor-pointer"
                    />
                )}
                {locationDotSelected === 4 ? (
                    <img src="/Assets/ActiveDot.png" className="w-[25px]" />
                ) : (
                    <img
                        onClick={() => setLocationDotSelected(4)}
                        src="/Assets/InactiveDot.png"
                        className="w-[10px] h-[10px] cursor-pointer"
                    />
                )}
                {locationDotSelected === 5 ? (
                    <img src="/Assets/ActiveDot.png" className="w-[25px]" />
                ) : (
                    <img
                        onClick={() => setLocationDotSelected(5)}
                        src="/Assets/InactiveDot.png"
                        className="w-[10px] h-[10px] cursor-pointer"
                    />
                )}
            </div>
            <Link to="/hospitals">
                <div className="flex justify-center mt-[30px]">
                    <button className="bg-[#E40443] text-center px-[6px] py-[8px] text-white rounded-[5px] w-[120px] font-semibold text-[10px] font-semibold">
                        View All
                    </button>
                </div>
            </Link>
        </div>


        <div className="hidden md:inline-flex flex-col py-[40px] px-[100px] bg-[#F4F4F4] w-full" id='testimonials1'>
        <div className="flex justify-center">
          <div className="bg-[#FFFFFF] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[140px] font-semibold">
            Testimonials
          </div>
        </div>
        <p className="text-center text-[40px] mt-[20px] font-medium">
        Here's what our patients say
        </p>
        <div className=" flex space-x-10 w-[100%] justify-between items-start mt-[30px]">
          <iframe
            className=" w-[30%] h-[520px]"
            src="https://www.youtube.com/embed/erei6SZjcck"
          ></iframe>
          <TestimonialContainer data={Testimonials} />
        </div>
      </div>

      
     


      
      <div className="md:hidden py-[30px] px-[20px] bg-[#F4F4F4] flex flex-col items-center" id='testimonials2'>
            <div className="font-semibold text-[13px] bg-white px-[12px] py-[5px] flex justify-center rounded-[5px] text-[#1A1C1F] w-[110px]">
                <p className="text-center">Testimonials</p>
            </div>
            <p className="text-center text-[24px] mt-[10px] font-medium">
                Here's what our patients say
            </p>
            <div className="flex w-[100%] justify-center items-center mt-[20px]">
                <iframe
                    className="w-[60%] h-[200px]"
                    src="https://www.youtube.com/embed/erei6SZjcck"
                ></iframe>
            </div>
            <div className="w-full mt-[20px] mx-auto">
                <Carousel 
                    showThumbs={false} 
                    showStatus={false}
                    autoPlay={true}
                    
                    interval={2000}
                    showIndicators={false}
                    showArrows = {false}
                    infiniteLoop
                    selectedItem={selectedTestimonialDot - 1} 
                    onChange={(index) => setSelectedTestimonialDot(index + 1)}
                >
                    {Testimonials.map((data, index) => (
                        <TestimonialCard 
                            key={index} 
                            img={data.img} 
                            name={data.name} 
                            content={data.comment} 
                        />
                    ))}
                </Carousel>
            </div>
            <div className="flex space-x-2 justify-center mt-[20px]">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,].map((dot) => (
                    <img
                        key={dot}
                        src={selectedTestimonialDot === dot ? "/Assets/ActiveDot.png" : "/Assets/InactiveDot.png"}
                        className={selectedTestimonialDot === dot ? "w-[25px]" : "w-[10px] h-[10px] cursor-pointer"}
                        onClick={() => setSelectedTestimonialDot(dot)}
                    />
                ))}
            </div>
        </div>








{/* ********************************join us webside************** */}
      <div className="hidden md:inline-flex flex-col items-center py-[40px] px-[100px] w-full">
        <div className="flex justify-center">
          <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[140px] font-semibold">
            Join Us
          </div>
        </div>
        <p className="text-[40px] mt-[20px] text-center font-medium">
          Join Our Community
        </p>
        <div className="items-center mt-[40px] w-full">
          <div className="flex flex-row justify-between space-x-10">
            <CommunityCards
              img="/Assets/CommunityDHA.png"
              name="DHA"
              content="Dooper Health Assistant (DHA) Become a DHA. Impact lives, earn more, and be the future of healthcare."
            //   content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
            />
            <CommunityCards
              img="/Assets/CommunityHospital.png"
              name="Hospital"
              content="Join an exclusive network of top hospitals, expand patient care, and be part of the healthcare revolution"
            //   content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
            />
            <CommunityCards
              img="/Assets/CommunityDoctor.png"
              name="Doctor"
              content="Join the best doctors bringing healthcare transformations. Offer online aid and take charge of healthcare’s digital frontier."
            //   content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
            />
          </div>
          <div className="flex flex-row justify-center mt-[40px] space-x-10">
            <CommunityCards
              img="/Assets/CommunityPharma.png"
              name="Pharma"
              content="Join us to become a digital lifeline for patients, expand your reach and gain more customers."
            //   content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
            />
            <CommunityCards
              img="/Assets/CommunityLab.png"
              name="Lab"
              content="Increase your lab’s reach by getting more orders and becoming an online partner for patients."
            //   content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
            />
          </div>
        </div>
      </div>


{/* ************************mobile Join us****************** */}
      
       <div className="md:hidden py-[30px] px-[90px] flex flex-col items-center">
      <div className="font-semibold text-[13px] bg-[#F5F6F7] px-[12px] py-[5px] flex flex-col items-center rounded-[5px] text-[#1A1C1F] w-[90px]">
        <p className="text-center">Join Us</p>
      </div>
      <p className="text-[24px] mt-[10px] text-center font-medium">
        Join Our Community
      </p>
      <div className="items-center mt-[10px] w-full size-[50px]">
        <Slider {...settings}>
          {CommunityData.map((data, index) => (
            <div key={index} className="flex justify-center px-[20px]">
              <CommunityCards img={data.img} name={data.name} content={data.content} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex space-x-2 justify-center mt-[20px]">
        {CommunityData.map((_, index) => (
          <img
            key={index}
            src={selectedCommunityDot === index + 1 ? "/Assets/ActiveDot.png" : "/Assets/InactiveDot.png"}
            className={selectedCommunityDot === index + 1 ? "w-[25px]" : "w-[10px] h-[10px] cursor-pointer"}
            onClick={() => setSelectedCommunityDot(index + 1)}
          />
        ))}
      </div>
    </div>
    {/* this is the startup section  */}
    
     
     <OurMediaMobile/>
     <OurMedia/>
     <Achievements/> 


      <div className="hidden md:inline-flex flex-col py-[40px] px-[100px] bg-[#F4F4F4]" id='faq1'>
        <div className="flex justify-start">
          <div className="bg-[#FFFFFF] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[90px] font-semibold">
            FAQs
          </div>
        </div>
        <p className="text-[40px] mt-[20px] font-medium">
          What do you want to know?
        </p>
        <div className="flex items-center space-x-10">
          <img
            src="/Assets/FAQimage.png"
            alt="doctorImage"
            className="w-[50%] "
          />
          <div className="flex flex-col w-[50%] space-y-5">
            {<FAQContainercopy/>}
          </div>
        </div>
      </div>

      <div className="md:hidden py-[30px] px-[20px] bg-[#F4F4F4] flex flex-col items-center" id='faq2'>
        <div className="font-semibold text-[13px] bg-white  px-[12px] py-[5px] flex justify-center rounded-[5px] text-[#1A1C1F] w-[80px]">
          <p className="text-center">FAQs</p>
        </div>
        <p className="text-[24px] mt-[10px] font-medium text-center">
          What do you want to know?
        </p>
        <div className="flex items-center mt-[10px]">
          <div className="flex flex-col space-y-5">
            {<FAQContainercopy/>}
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default Home;
