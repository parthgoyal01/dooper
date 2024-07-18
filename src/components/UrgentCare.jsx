import UrgentCareCard from './Cards/UrgentCareCard';
import {useState, useEffect} from 'react';
import WhyDooperCard from './Cards/WhyDooperCard';
import FAQContainer from './Containers/FAQContainer';
import {Link} from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

// *************************chages***********
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import OurMedia from './OurMedia';
import OurMediaMobile from "./OurMediaMobile";
import Achievements from './Achievements';
import FAQContainercopy from "./Containers/FAQContainercopy";

const FAQList = [
    // {
    //     question: 'When should I go to urgent care?',
    //     answer: 'You should visit urgent care when you have an illness or injury that requires prompt attention but is not life-threatening. Examples include sprains, cuts, and urinary tract infections.'
    // },
    // {
    //     question: 'Can urgent care refill my medication?',
    //     answer: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    // },
    // {
    //     question: 'How can I schedule an appointment with a doctor?',
    //     answer: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    // },
    // {
    //     question: 'What kind of tests can urgent care perform with same day results?',
    //     answer: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    // },
    // {
    //     question: 'When should I go to urgent care vs emergency care?',
    //     answer: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    // },
    // {
    //     question: 'When should I see urgent care vs primary care?',
    //     answer: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    // },
    // {
    //     question: 'How can I pay my medical bills or inquire about billing-related issues?',
    //     answer: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    // },
];


const Data = [
    {
        img: "/Assets/UrgentIcon1.png",
        heading: "General Urgent Care Visit",
    },
    {
        img: "/Assets/UrgentIcon2.png",
        heading: "Cold, Flu, Viral & Covid",
    },
    {
        img: "/Assets/UrgentIcon3.png",
        heading: "Urinary Tract Infection",
    },
    {
        img: "/Assets/UrgentIcon4.png",
        heading: "Injury, Fracture & Sprain",
    },
    {
        img: "/Assets/UrgentIcon5.png",
        heading: "Ear pain, Sinus infection",
    },
    {
        img: "/Assets/UrgentIcon6.png",
        heading: "Paediatric urgent Care",
    },
    {
        img: "/Assets/UrgentIcon4.png",
        heading: "General Urgent Care Visit",
    },
    {
        img: "/Assets/UrgentIcon3.png",
        heading: "Paediatric urgent Care",
    },
    {
        img: "/Assets/UrgentIcon2.png",
        heading: "General Urgent Care Visit",
    },
    {
        img: "/Assets/UrgentIcon1.png",
        heading: "Ear pain, Sinus infection",
    },
    {
        img: "/Assets/UrgentIcon5.png",
        heading: "Paediatric urgent Care",
    },
]
const WhyDooperData = [
    {
        img: "/Assets/ImmediateAttention.png",
        name: "Immediate Attention",
        content: "On-demand urgent care for timely treatments",
    },
    {
        img: "/Assets/AtHomeService.png",
        name: "At Home Service",
        content: "Avail on-point testing for 21* vitals at your doorstep",
    },
    {
        img: "/Assets/SkilledTeam.png",
        name: "Smart Tech",
        content:"We leverage technology to build India's unified healthcare ecosystem"
    },
    {
        img: "/Assets/CostEffective.png",
        name: "Const Effective",
        content: "Get quality medical attention at affordable prices with our subscriptions.",
    },
    {
        img: "/Assets/AccessNetwork.png",
        name: "Access to Dooper Network",
        content: "Access the Dooper network of top doctors, hospitals, labs, and pharmacies.",
    },
    {
        img: "/Assets/24-7Service.png",
        name: "24/7 Service",
        content: "Convenient medical care anytime- anywhere",
    },
];

const UrgentCare = (props) => {

    const [dot1, setDot1] = useState(true);
    const [dot2, setDot2] = useState(false);
    const [dot3, setDot3] = useState(false);

    const [whyDooperSelected, setWhyDooperSelected] = useState(1);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [dots, setDots] = useState([true, false, false]);


    const [selectedSection, setSelectedSection] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedSection(prev => {
                const newSection = (prev % 3) + 1;
                updateDots(newSection);
                return newSection;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const updateDots = (section) => {
        const updatedDots = [false, false, false];
        updatedDots[section - 1] = true;
        setDots(updatedDots);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        beforeChange: (current, next) => setCurrentSlide(next)
    };

    const handleCarouselChange = (index) => {
        const nextSection = index + 1;
        setSelectedSection(nextSection);
        updateDots(nextSection);
    };

    return (
        <>
            <div className="hidden md:inline-flex flex justify-between items-center px-[100px] pt-[30px]">
                <div className="flex text-[#1A1C1F] flex-col w-[50%] relative">
                    <img src="/Assets/PinkStar.png" alt="star" className="w-[30px] absolute left-[-30px]" />
                    <img src="/Assets/PinkStar.png" alt="star" className="w-[40px] absolute right-[30px]" />
                    <img src="/Assets/PinkStar.png" alt="star" className="w-[30px] absolute bottom-[-30px] right-[30px]" />
                    <div className="flex justify-start">
                        <div className="bg-[#F5F6F7] text-center text-[14px] px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[150px] font-semibold">Urgent Care</div>
                    </div>
                    <p className="text-[40px] leading-tight mt-[30px] font-medium">Urgent Care: Prompt Treatments Day & Night</p>
                    <p className="text-[#5B6572] mt-[20px]">Dooper provides 24x7 rapid and complete medical care using smart technology.</p>
                    <div className="flex space-x-3 items-center mt-[20px]">
                        <Link to={'/contact'}><div className="bg-[#E40443] text-center px-[6px] py-[5px] text-white rounded-[5px] w-[220px]">
                            <p className="font-semibold text-[14px]">Make An Appointment</p>
                        </div></Link>
                    </div>
                </div>
                {/* <div className="lg: w-[60%] relative">
                    <img src="/Assets/urgentcare.png" className="" alt="heroImage" />
                </div> */}
                <div className="relative w-[60%] lg:w-[60%]">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-pink-50 blur-3xl"></div>
                    <img src="/Assets/urgentcare.svg" className="relative z-10" alt="heroImage" />
                </div>

            </div>

            <div className="relative text-[#1A1C1F] md:hidden flex flex-col bg-white items-center px-[20px] py-[30px]">
                <div className="flex w-full justify-start">
                    <p className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[110px] font-semibold text-[12px]">Urgent Care</p>
                </div>
                <p className="text-start font-medium text-[24px] mt-[10px]">Urgent Care: Prompt Treatments Day & Night</p>
                <p className="text-[12px] w-full text-[#5B6572] mt-[10px]">Dooper provides 24x7 rapid and complete medical care using smart technology.</p>
                {/* <img src="/Assets/urgentcare.png" alt="HeroImage" className="w-full mt-[10px]" />
                 */}
                <div className="relative w-full mt-[10px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-pink-50 blur-3xl"></div>
                    <img src="/Assets/urgentcare.svg" alt="HeroImage" className="relative z-10 w-full" />
                </div>
                {/* <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute left-180 top-[33%] w-[15px]" /> */}
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute left-5 top-[2%] w-[20px]" />
                {/* <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute left-5 top-[50%] w-[30px]" /> */}
                {/* <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute left-8 top-[70%] w-[15px]" /> */}
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute right-10 w-[20px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute right-20 top-[10%] w-[20px]" />
                <div className="flex items-center justify-between space-x-5 mt-[20px]">
                    <Link to={'/contact'}><button className="text-white rounded-[5px] bg-[#E40443] px-[20px] py-[10px] text-[12px] font-semibold">Make an Appointment</button></Link>
                </div>
            </div>



{/* ***********************************Dooper Care web********************* */}
            <div className="hidden md:inline-flex flex-col px-[100px] py-[40px]">
                <div className="flex justify-center">
                    <div className="bg-[#F5F6F7] text-center text-[14px] px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[150px] font-semibold">Urgent Care</div>
                </div>
                <p className="text-[#1A1C1F] text-[40px] font-medium text-center mt-[20px]">Dooper Care</p>
                <div className="flex mt-[30px] grid grid-cols-6">
                    {
                        dot1 ? Data.map((data, idx) => {
                            if(idx < 6)
                                return <UrgentCareCard data = {data} />
                        }) : (dot2 ?
                            Data.map((data, idx) => {
                                if(idx >= 6 && idx < 12)
                                    return <UrgentCareCard data = {data} />
                            }) :
                            Data.map((data, idx) => {
                                if(idx >= 12 && idx < 18)
                                    return <UrgentCareCard data = {data} />
                            }))
                    }
                </div>
                <div className='flex space-x-2 justify-center mt-[20px]'>
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

                <div className="flex justify-center mt-[40px]">
                    <button className="bg-[#E40443] text-center text-[14px] px-[6px] py-[4px] text-white rounded-[5px] w-[120px] font-semibold">View All</button>
                </div>

                <hr className='mt-[40px] border-[1px]'/>
            </div>





{/* ******************************Dooper Care mobile******************** */}
           
        
        <div className="md:hidden px-[20px] py-[30px]">
            <div className="flex w-full justify-center">
                <p className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[110px] font-semibold text-[12px]">Urgent Care</p>
            </div>
            <p className="text-[#1A1C1F] text-[24px] font-medium text-center mt-[10px]">Dooper Care</p>
            <div className="w-full mt-[30px]">
                <Carousel
                    showThumbs={false}
                    showIndicators={false}
                    showStatus={false}
                    infiniteLoop
                    autoPlay
                    interval={3000}
                    selectedItem={selectedSection - 1}
                    onChange={handleCarouselChange}
                    responsive={{
                        desktop: {
                            breakpoint: { max: 3000, min: 1024 },
                            items: 3,
                            partialVisibilityGutter: 40,
                        },
                        tablet: {
                            breakpoint: { max: 1024, min: 464 },
                            items: 2,
                            partialVisibilityGutter: 30,
                        },
                        mobile: {
                            breakpoint: { max: 464, min: 0 },
                            items: 1,
                            partialVisibilityGutter: 20,
                        },
                    }}
                >
                    {[0, 1, 2].map((section) => (
                        <div key={section} className="flex justify-between">
                            {Data.slice(section * 3, (section + 1) * 3).map((data, idx) => (
                                <UrgentCareCard key={idx} data={data} />
                            ))}
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className="flex space-x-2 justify-center mt-[20px]">
                {[1, 2, 3].map((dot) => (
                    <img
                        key={dot}
                        src={selectedSection === dot ? '/Assets/ActiveDot.png' : '/Assets/InactiveDot.png'}
                        className={selectedSection === dot ? 'w-[25px]' : 'w-[10px] h-[10px] cursor-pointer'}
                        onClick={() => {
                            setSelectedSection(dot);
                        }}
                    />
                ))}
            </div>
        </div>


            <div className='hidden md:inline-flex flex flex-col px-[100px] py-[40px] items-center'>
          
                <p className='text-[40px] font-medium'>What you get</p>

                <div className='mt-[30px] space-x-8 flex '>
                    <div className='flex flex-col items-center border-[1px] border-[#D0D4D9] rounded-[10px]'>
                        <img src="/Assets/HomeCard01.png" alt="img" className='rounded-t-[10px]' />
                        <div className='px-[10px] py-[10px]'>
                            <p className='mt-[10px] text-center text-[#1A1C1F] text-[18px] font-medium'>Urgent Treatment</p>
                            <p className='mt-[10px] text-center text-[#1A1C1F]'>Rapid, comprehensive urgent care 24x7</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center border-[1px] border-[#D0D4D9] rounded-[10px]'>
                        <img src="/Assets/HomeCard02.png" alt="img" className='rounded-t-[10px]' />
                        <div className='px-[10px] py-[10px]'>
                            <p className='mt-[10px] text-center text-[#1A1C1F] text-[18px] font-medium'>21 Point-of-care Testing</p>
                            <p className='mt-[10px] text-center text-[#1A1C1F]'>Immediate and accurate testing of <br/> 21* vitals at your home.</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center border-[1px] border-[#D0D4D9] rounded-[10px]'>
                        <img src="/Assets/HomeCard03.png" alt="img" className='rounded-t-[10px]' />
                        <div className='px-[10px] py-[10px]'>
                            <p className='mt-[10px] text-center text-[#1A1C1F] text-[18px] font-medium'>Integrated Care</p>
                            <p className='mt-[10px] text-center text-[#1A1C1F]'>Latest Tech-Based healthcare approach</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center border-[1px] border-[#D0D4D9] rounded-[10px]'>
                        <img src="/Assets/HomeCard04.png" alt="img" className='rounded-t-[10px]' />
                        <div className='px-[10px] py-[10px]'>
                            <p className='mt-[10px] text-center text-[#1A1C1F] text-[18px] font-medium'>Skilled Medical Staff</p>
                            <p className='mt-[10px] text-center text-[#1A1C1F]'>Expert and experienced healthcare professionals</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:hidden flex flex-col px-[20px] py-[30px] items-center'>
            {/* for laptop */}
                <p className='text-[24px] font-medium'>What you get</p>

                <div className='mt-[10px] flex grid grid-cols-2'>
                    <div className='mx-[10px] my-[10px] flex flex-col items-center border-[1px] border-[#D0D4D9] rounded-[10px]'>
                        <img src="/Assets/HomeCard01.png" alt="img" className='rounded-t-[10px]' />
                        <div className='px-[10px] py-[10px]'>
                            <p className='mt-[10px] text-center text-[#1A1C1F] text-[12px] font-medium'>Urgent Treatment</p>
                            <p className='mt-[10px] text-center text-[#1A1C1F] text-[10px]'>Rapid, comprehensive urgent care 24x7</p>
                        </div>
                    </div>
                    <div className='mx-[10px] my-[10px] flex flex-col items-center border-[1px] border-[#D0D4D9] rounded-[10px]'>
                        <img src="/Assets/HomeCard02.png" alt="img" className='rounded-t-[10px]' />
                        <div className='px-[10px] py-[10px]'>
                            <p className='mt-[10px] text-center text-[#1A1C1F] text-[12px] font-medium'>21 Point-of-care Testing</p>
                            <p className='mt-[10px] text-center text-[#1A1C1F] text-[10px]'>Immediate and accurate testing of <br /> 21* vitals at your home.</p>
                        </div>
                    </div>
                    <div className='mx-[10px] my-[10px] flex flex-col items-center border-[1px] border-[#D0D4D9] rounded-[10px]'>
                        <img src="/Assets/HomeCard03.png" alt="img" className='rounded-t-[10px]' />
                        <div className='px-[10px] py-[10px]'>
                            <p className='mt-[10px] text-center text-[#1A1C1F] text-[12px] font-medium'>Integrated Care</p>
                            <p className='mt-[10px] text-center text-[#1A1C1F] text-[10px]'>Latest Tech-Based healthcare approach</p>
                        </div>
                    </div>
                    <div className='mx-[10px] my-[10px] flex flex-col items-center border-[1px] border-[#D0D4D9] rounded-[10px]'>
                        <img src="/Assets/HomeCard04.png" alt="img" className='rounded-t-[10px]' />
                        <div className='px-[10px] py-[10px]'>
                            <p className='mt-[10px] text-center text-[#1A1C1F] text-[12px] font-medium'>Skilled Medical Staff</p>
                            <p className='mt-[10px] text-center text-[#1A1C1F] text-[10px]'>Expert and experienced healthcare professionals</p>
                        </div>
                    </div>
                </div>
            </div>



{/* *************************************website**************************** */}
            <div className='hidden md:inline-flex px-[100px] py-[40px] flex flex-col items-center'>
                <div className="flex justify-center">
                    <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[200px] font-semibold text-[14px]">Dooper Benefits</div>
                </div>
                <p className='mt-[20px] text-[40px] font-medium text-center'>Why Choose Dooper?</p>
                <div className="items-center mt-[40px]">
                    <div className="flex flex-row justify-between space-x-10">
                        <WhyDooperCard img="/Assets/ImmediateAttention.png" name="Immediate Attention" content="On-demand urgent care for timely treatments" />
                        <WhyDooperCard img="/Assets/AtHomeService.png" name="At Home Service" content="Avail on-point testing for 21* vitals at your doorstep" />
                        <WhyDooperCard img="/Assets/SkilledTeam.png" name="Smart Tech" content="We leverage technology to build India's unified healthcare ecosystem" />
                    </div>
                    <div className="flex flex-row justify-between mt-[30px] space-x-10">
                        <WhyDooperCard img="/Assets/CostEffective.png" name="Cost Effective" content="Get quality medical attention at affordable prices with our subscriptions." />
                        <WhyDooperCard img="/Assets/AccessNetwork.png" name="Access to Dooper Network" content="Access the Dooper network of top doctors, hospitals, labs, and pharmacies." />
                        <WhyDooperCard img="/Assets/24-7Service.png" name="24/7 Service" content="Convenient medical care anytime- anywhere" />
                    </div>
                </div>
            </div>




{/* **************************mobile ************************* */}
            {/* <div className='md:hidden px-[20px] py-[30px] flex flex-col items-center'>
                <div className="flex w-full justify-center">
                    <p className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[110px] font-semibold text-[12px]">Dooper Benefits</p>
                </div>
                <p className='mt-[10px] text-[24px] font-medium text-center'>Why Choose Dooper?</p>
                <div className="items-center mt-[10px]">
                    {
                        WhyDooperData.map((data, index) => {
                            if (index + 1 == whyDooperSelected)
                                return <WhyDooperCard name={data.name} content={data.content} img={data.img} />
                        })
                    }
                </div>
                <div className='flex space-x-2 justify-center mt-[20px]'>
                    {whyDooperSelected === 1 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setWhyDooperSelected(1)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {whyDooperSelected === 2 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setWhyDooperSelected(2)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {whyDooperSelected === 3 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setWhyDooperSelected(3)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {whyDooperSelected === 4 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setWhyDooperSelected(4)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {whyDooperSelected === 5 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setWhyDooperSelected(5)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {whyDooperSelected === 6 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setWhyDooperSelected(6)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                </div>
            </div> */}
{/* updating the code due to margin padding issue */}
 {/* <div className='md:hidden px-[20px] py-[30px] flex flex-col items-center'>
      <div className="flex w-full justify-center">
        <p className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[110px] font-semibold text-[12px]">Dooper Benefits</p>
      </div>
      <p className='mt-[10px] text-[24px] font-medium text-center'>Why Choose Dooper?</p>
      <div className="items-center mt-[10px]">
        <Carousel 
          showThumbs={false} 
          showIndicators={false} 
          showStatus={false} 
          selectedItem={whyDooperSelected - 1} 
          onChange={(index) => setWhyDooperSelected(index + 1)}
          
          stopOnHover={true} // Optionally, if you want to disable auto slide on hover
        >
          {WhyDooperData.map((data, index) => (
            <div key={index}>
              <WhyDooperCard name={data.name} content={data.content} img={data.img} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className='items-center flex space-x-2 justify-center mt-[20px]'>
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <img
            key={index}
            src={whyDooperSelected === index ? "/Assets/ActiveDot.png" : "/Assets/InactiveDot.png"}
            className={whyDooperSelected === index ? 'w-[25px]' : 'w-[10px] h-[10px] cursor-pointer'}
            onClick={() => setWhyDooperSelected(index)}
          />
        ))}
      </div>
    </div>  */}

{/* <div className='md:hidden px-[20px] py-[30px] flex flex-col items-center'>
            <div className="flex w-full justify-center">
                <p className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[110px] font-semibold text-[12px]">Dooper Benefits</p>
            </div>
            <p className='mt-[10px] text-[24px] font-medium text-center'>Why Choose Dooper?</p>
            <div className="items-center mt-[10px]">
                <Carousel
                    autoPlay={false} // Disable auto play
                    stopOnHover={true} // Disable auto slide on hover
                    indicators={false} // Hide indicators
                    navButtonsAlwaysVisible={true} // Always show navigation buttons
                    value={whyDooperSelected - 1} // Set the current slide
                    onChange={(index) => setWhyDooperSelected(index + 1)} // Handle slide change
                >
                    {WhyDooperData.map((data, index) => (
                        <div key={index}>
                            <WhyDooperCard name={data.name} content={data.content} img={data.img} />
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className='flex space-x-2 justify-center mt-[20px]'>
                {[1, 2, 3, 4, 5, 6].map((index) => (
                    <img
                        key={index}
                        src={whyDooperSelected === index ? "/Assets/ActiveDot.png" : "/Assets/InactiveDot.png"}
                        className={whyDooperSelected === index ? 'w-[25px]' : 'w-[10px] h-[10px] cursor-pointer'}
                        onClick={() => setWhyDooperSelected(index)}
                    />
                ))}
            </div>
        </div> */}
            
            <OurMediaMobile/>
            <OurMedia/>
            <Achievements/> 


            <div className="hidden md:inline-flex flex-col py-[40px] px-[100px] bg-[#F4F4F4]">
                <div className="flex justify-start">
                    <div className="bg-[#FFFFFF] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[90px] font-semibold">FAQs</div>
                </div>
                <p className="text-[40px] mt-[20px] font-medium">What do you want to know about urgent care services</p>
                <div className="flex items-center space-x-10">
                    <img src="/Assets/FAQimage.png" alt="doctorImage" className="w-[50%]" />
                    <div className="flex flex-col w-[50%] space-y-5">
                        {
                           <FAQContainercopy/>
                        }
                    </div>
                </div>
            </div>


            <div className="md:hidden py-[30px] px-[20px] bg-[#F4F4F4] flex flex-col items-center">
                <div className="font-semibold text-[13px] bg-white  px-[12px] py-[5px] flex justify-center rounded-[5px] text-[#1A1C1F] w-[80px]">
                    <p className="text-center">FAQs</p>
                </div>
                <p className="text-[24px] mt-[20px] font-medium text-center">What do you want to know about urgent care services</p>
                <div className="flex items-center mt-[20px]">

                    <div className="flex flex-col space-y-5">
                        {
                           <FAQContainercopy/>
                        }
                    </div>
                </div>
            </div>
            
        

        </>
    );
}

export default UrgentCare;
