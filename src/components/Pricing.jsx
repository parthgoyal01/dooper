import ImageCarousel from './ImageCarousel';
import Pricing1 from './Cards/Pricing1';
import Pricing2 from './Cards/Pricing2';
import Pricing3 from './Cards/Pricing3';
import {useState, useEffect} from 'react';
import OurMedia from './OurMedia';
import OurMediaMobile from './OurMediaMobile';
import Achievements from './Achievements';

const Pricing = (props) => {

    const [activeCard, setActiveCard] = useState(1);

    const [detail, setDetails] = useState({
        first: "",
        last: "",
        email: "",
        phone: "",
        message: ""
    })

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(detail);
    }

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setDetails((prev) => {
            return {...prev, [name]: value};
        })
    }

    return (
        <>
        <div className="flex flex-col items-center">
            <div className="hidden md:inline-flex flex justify-center pt-[40px] px-[100px]">
                <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-fit font-semibold text-[14px]">Health Plans</div>
            </div>     
            <div className="md:hidden flex justify-center mt-[30px]">
                <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-fit font-semibold text-[12px]">Health Plans</div>
            </div>    

            <div className="px-[20px] lg:px-[100px] mt-[10px] lg:mt-[20px] flex flex-col items-center">
                <p className="text-[24px] lg:text-[40px] font-medium">Affordable Security For Complete Care:</p>
                <p className="text-[24px] lg:text-[40px] font-medium">Subscribe Today For A Safer Tomorrow</p> 
            </div>  

            <div className="hidden md:inline-flex px-[100px] py-[40px]">
                <div className="flex space-x-[-20px] items-center">
                    <Pricing1 />
                    <Pricing2 />
                    <Pricing3 />
                </div>
            </div>

            <div className='md:hidden px-[20px] py-[30px]'>
                {
                    activeCard === 1 ? <Pricing1 /> : activeCard === 2 ? <Pricing2/> : <Pricing3 />
                }
                <div className='flex space-x-2 justify-center mt-[20px]'>
                    {activeCard === 1 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setActiveCard(1)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {activeCard === 2 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setActiveCard(2)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {activeCard === 3 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setActiveCard(3)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                </div>
            </div>

            <div className="hidden md:inline-flex px-[100px] py-[40px] flex items-center space-x-16">
                <div className=" w-[33%]">
                    <div className="py-[30px]">
                        <p className="text-[32px] text-[#E40443] font-medium">Want to know the right plans for you?</p>
                        <p className="text-[#1A1C1F] font-medium">Request call from our expert</p>
                    </div>
                </div>
                <div className="w-[33%] space-y-5">
                    <input type="text" className="border-[1px] border-[#B3B3B3] rounded-[5px] w-full px-[10px] py-[5px]" placeholder="Full Name" required />
                    <input type="text" className="border-[1px] border-[#B3B3B3] rounded-[5px] w-full px-[10px] py-[5px]" placeholder="Enter Phone Number" required />
                    <div className="flex justify-center">
                        <button className="text-white bg-[#E40443] rounded-[5px] px-[15px] py-[5px] text-[14px] font-semibold">Submit</button>
                    </div>
                </div>
                <div className="w-[33%]">
                    <img src="/Assets/PricingHeroImage.png" alt="pricing" className="w-[80%]" />
                </div>
            </div>
                    
            <div className='md:hidden w-full px-[20px]'>
                <div className='md:hidden w-full border-[1px] border-[#E3E6E8] rounded-[10px] p-[20px]'>
                    <form onSubmit={submitHandler} className="w-full">
                        <p className="text-[18px] font-medium">Get in touch with us</p>
                        <div className='space-y-4 flex flex-col mt-[20px] w-full'>
                            <input type="text" className="bg-[#F4F4F4] rounded-[5px] px-[10px] py-[6px] text-[14px] border-[1px] border-[#EEF0F3] " placeholder="Full Name" name="first" onChange={changeHandler} required />
                            <input type="text" className="bg-[#F4F4F4] rounded-[5px] px-[10px] py-[6px] text-[14px] border-[1px] border-[#EEF0F3]" placeholder="Enter Phone Number" name="phone" onChange={changeHandler} required />
                            <textarea placeholder="Your message" name="message" className="bg-[#F4F4F4] text-[14px] min-h-[70px] rounded-[5px] px-[10px] py-[6px] border-[1px] border-[#EEF0F3] w-full" onChange={changeHandler} required />
                        </div>
                        <button onClick={submitHandler} className="font-semibold text-[12px] rounded-[7px] px-[20px] py-[10px] text-white bg-[#E40443] mt-[10px]">Send Inquiry</button>
                    </form>
                </div>
            </div>

         </div>
           <Achievements/>
           <OurMediaMobile/>
           <OurMedia/>
         </>
    );
}

export default Pricing;