import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OurMedia from './OurMedia';
import OurMediaMobile from "./OurMediaMobile";
import Achievements from './Achievements';


const ContactUs = () => {
    const [details, setDetails] = useState({
      name: "",
      email: "",
      message: ""
    });
  
    const changeHandler = (event) => {
      const { name, value } = event.target;
      setDetails(prev => ({ ...prev, [name]: value }));
    };
  
    const sendwhatsapp = () => {
      const phonenumber = "+916375596006";
      const { name, email, message } = details;
  
      const url = `https://wa.me/${phonenumber}?text=*Name:* ${name}%0a*Email:* ${email}%0a*Message:* ${message}%0a%0aI need urgent help`;
  
      const newWindow = window.open(url, '_blank');
      if (newWindow) {
        newWindow.focus();
      } else {
        alert("Failed to open WhatsApp. Please check your popup blocker settings.");
      }
    };
  
    const submitHandler = (event) => {
      event.preventDefault();
      console.log(details);
      sendwhatsapp();
    };
return (
        <>
            <div className="hidden md:inline-flex flex justify-between items-center px-[100px] pt-[30px] border-b-[1px]">
                <div className="flex text-[#1A1C1F] flex-col w-[50%] relative">
                    <img src="/Assets/PinkStar.png" alt="star" className="w-[30px] absolute left-[-30px]" />
                    <img src="/Assets/PinkStar.png" alt="star" className="w-[40px] absolute right-[30px]" />
                    <img src="/Assets/PinkStar.png" alt="star" className="w-[30px] absolute bottom-[-30px] right-[30px]" />
                    <div className="flex justify-start">
                        <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[140px] font-semibold">Contact Us</div>
                    </div>
                    <p className="text-[40px] leading-tight mt-[30px] font-medium">Contact us for appointments and enquiries</p>
                    {/* <p className="text-[#5B6572] mt-[30px]">Healing you, one step at a time. Putting your health first. Compassionate care for all types of people</p> */}

                </div>
                <div className="lg: w-[60%] relative">
                    <img src="/Assets/contact.png" className="" alt="heroImage" />
                </div>
            </div>

            <div className="relative text-[#1A1C1F] md:hidden flex flex-col  items-center px-[20px] py-[30px]">
                <div className="flex justify-center">
                    <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[100px] font-semibold text-[12px]">Contact Us</div>
                </div>
                <p className="text-center font-medium text-[24px] mt-[10px]">Contact us for appointments and enquiries</p>
                <img src="/Assets/contact.png" alt="HeroImage" className="w-full mt-[10px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute left-10 top-[7%] w-[15px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute left-5 top-[20%] w-[20px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute left-5 top-[50%] w-[30px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute left-8 top-[70%] w-[15px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute right-10 w-[20px]" />
                {/* <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute right-20 top-[15%] w-[20px]" /> */}
            </div>


          {/* *******************************website ********************* */}
            <div className='py-[30px] px-[20px] lg:py-[40px] lg:px-[100px] flex flex-col lg:flex-row justify-between items-center lg:space-x-10'>
                <div className="flex items-center justify-center w-full lg:w-[70%]">
                    <div className="border-[1px] w-full border-[#E3E6E8] rounded-[10px] p-[20px] lg:p-[40px]">
                        <div className='hidden md:inline-flex w-full'>
                            <form onSubmit={submitHandler} className="w-full">
                                <p className="lg:text-[32px] font-medium">Get in touch with us</p>
                                <div className='space-y-6 mt-[20px]'>
                                    <div className="flex felx-row justify-between space-x-5">
                                        <input type="text" className="name bg-[#F4F4F4] rounded-[5px] px-[10px] py-[5px] border-[1px] border-[#EEF0F3] w-[50%]" placeholder="Full Name" name="name" onChange={changeHandler} required />
                                        <input type="text" className="email bg-[#F4F4F4] rounded-[5px] px-[10px] py-[5px] border-[1px] border-[#EEF0F3] w-[50%]" placeholder="enter mail address" name="email" onChange={changeHandler} required />
                                    </div>
                                    <div>
                                        <textarea placeholder="Your message" name="message" className="message bg-[#F4F4F4] rounded-[5px] px-[10px] py-[5px] border-[1px] border-[#EEF0F3] w-full" onChange={changeHandler} required />
                                    </div>
                                </div>
                                <div className=' space-x-10'>
                                <button  onClick={sendwhatsapp} className="font-semibold text-[14px] rounded-[10px] px-[20px] py-[10px] text-white bg-[#25D366] mt-[10px]">Chat with us</button>
                                </div>
                            </form>
                        </div>
              {/* ****************************mobile******************* */}
                        <div className='md:hidden w-full'>
                            <form onSubmit={submitHandler} className="w-full">
                                <p className="text-[18px] font-medium">Get in touch with us</p>
                                <div className='space-y-4 flex flex-col mt-[20px] w-full'>
                                    <input type="text" className="name bg-[#F4F4F4] rounded-[5px] px-[10px] py-[6px] text-[14px] border-[1px] border-[#EEF0F3] " placeholder="Full Name" name="name" onChange={changeHandler} required />
                                    <input type="text" className="email bg-[#F4F4F4] rounded-[5px] px-[10px] py-[6px] text-[14px] border-[1px] border-[#EEF0F3]" placeholder="enter mail address" name="email" onChange={changeHandler} required />
                                    <textarea placeholder="Your message" name="message" className="message bg-[#F4F4F4] text-[14px] min-h-[70px] rounded-[5px] px-[10px] py-[6px] border-[1px] border-[#EEF0F3] w-full" onChange={changeHandler} required />
                                </div>
                                        <div className="my-[10px] px-[20px] py-[7px] rounded-[5px] text-white bg-[#25D366] flex justify-center items-center space-x-2">
                                            <img src="https://dooperfinal.vercel.app/Assets/whatsapp.png"  className="w-[18px]" alt="icon" />
                                            <button onClick={sendwhatsapp} className="text-white font-semibold text-center">chat with us</button></div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className='w-full lg:w-[30%] space-y-4 lg:space-y-0 flex flex-col justify-center items-center mt-[20px] lg:mt-[0px]'>
                    <div className='space-y-2 lg:py-[30px] w-[100%] rounded-[10px] flex flex-row items-center space-x-3'>
                        <img src="/Assets/CallIconPink.png" alt="icon" className='w-[40px]' />
                        <div className='flex flex-col'>
    
                            <p className='text-[#5B6572] text-[12px] lg:text-[14px] font-medium'>Phone</p>
                            <a href="tel: +91 6375596006">
                            <p className='text-[#1A1C1F] font-medium text-[12px] lg:text-[16px]'>+916375596006</p></a>
                        </div>
                    </div>

                    <div className='space-y-2 lg:py-[30px] w-[100%] rounded-[10px] flex flex-row items-center space-x-3'>
                        <img src="/Assets/MailIconPink.png" alt="icon" className='w-[40px]' />
                        <div className='flex flex-col'>
                            <p className='text-[#5B6572] text-[12px] lg:text-[14px] font-medium'>Mail</p>
                            <a href="mailto:help@dooper.in">
                            <p className='text-[#1A1C1F] font-medium text-[12px] lg:text-[16px]'>help@dooper.in</p></a>
                        </div>
                    </div>

                    <div className='space-y-2 lg:py-[30px] w-[100%] rounded-[10px] flex flex-row items-center space-x-3'>
                        <img src="/Assets/AddressIconPink.png" alt="icon" className='w-[40px]' />
                        <div className='flex flex-col'>
                            <p className='text-[#5B6572] text-[12px] lg:text-[14px] font-medium'>Address</p>
                            <p className='text-[#1A1C1F] font-medium text-[12px] lg:text-[16px]'>410,New Rajeev Gandhi Nagar, Kota, Rajasthan</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* map for mobile devices */}
            <div className='block md:hidden w-full'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111611.19978307962!2d75.84456756145525!3d25.174588213640618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f85623fdbef43%3A0x5b8e067aef07d9fa!2sDOOPER!5e0!3m2!1sen!2sin!4v1717058416005!5m2!1sen!2sin" style={{ width: '100%', height: '100vh' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            {/* map for larger screen */}
            <div className='hidden md:block w-full'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111611.19978307962!2d75.84456756145525!3d25.174588213640618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f85623fdbef43%3A0x5b8e067aef07d9fa!2sDOOPER!5e0!3m2!1sen!2sin!4v1717058416005!5m2!1sen!2sin" style={{ width: '100%', height: '70vh' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            
            <OurMedia />
            <OurMediaMobile />
            <Achievements/>


        </>
    );
}

export default ContactUs;
