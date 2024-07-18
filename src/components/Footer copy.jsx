import {Link} from 'react-router-dom';
import {useState, useEffect, useRef} from 'react';

const Footer = () => {

    const [openOther, setOpenOther]  = useState(false);
    const [openQuick, setOpenQuick]  = useState(false);
    const [openLink, setOpenLink]  = useState(false);

    //rajcode
    const [openSection, setOpenSection] = useState(null);
 
    return (
        <>
        <div className='hidden md:inline-flex flex-col w-full'>
            <div className="bg-[#B60336] py-[40px] px-[100px] flex justify-between">
                <div className="space-y-5">
                    <img src="/Assets/CompanyLogoWhite.png" alt="companylogo" className="w-[10rem]" />
                    <a href="tel: 1 23 456 7980"><div className="flex items-center space-x-3 mt-[20px]">
                        <img src="/Assets/PhoneIconWhite.png" alt="phone" className="w-[40px]" />
                        <div className="text-white">
                            <p>Phone</p>
                            <p>+91 6375596006</p>
                        </div>
                    </div></a> 
                    <a href="mailto: help@dooper.in"><div className="flex items-center space-x-3 mt-[20px]">
                        <img src="/Assets/MailIconWhite.png" alt="phone" className="w-[40px]" />
                        <div className="text-white">
                            <p>Mail</p>
                            <p>help@dooper.in</p>
                        </div>
                    </div></a>
                </div>
                <div className="text-white">
                    <p className="font-semibold text-[18px]">Quick Links</p>
                    <br/>/
                    <ul className="list-disc text-white space-y-2 ml-[15px]">
                        <Link to={'/pricing'}><li className='mt-[5px]'>Pricing</li></Link>
                        <Link to={'/doctors'}><li className='mt-[5px]'>Doctors</li></Link>
                        <Link to={'/hospitals'}><li className='mt-[5px]'>Services</li></Link>
                        <Link to={'/testimonials'}><li className='mt-[5px]'>Testimonials</li></Link>
                        <Link to={'/faqs'}><li className='mt-[5px]'>FAQs</li></Link>
                    </ul>
                </div>
                <div className="text-white">
                    <p className="font-semibold text-[18px]">Other</p>
                    <br/>
                    <ul className="list-disc text-white space-y-2 ml-[15px]">
                        <Link to={'/'}><li className='mt-[5px]'>Make Appointment</li></Link>
                        <Link to={'/'}><li className='mt-[5px]'>Emergency Call</li></Link>
                        <Link to={'/testimonials'}><li className='mt-[5px]   '>Testimonials</li></Link>
                    </ul>
                </div>
                <div className="text-white">
                    <p className="font-semibold text-[18px]">Links</p>
                    <br/>
                    <ul className="list-disc text-white space-y-2 ml-[15px]">
                        <Link to={'/blogs'}><li className='mt-[5px]'>Blogs</li></Link>
                        <Link to={'/privacy'}><li className='mt-[5px]'>Privacy Policy</li></Link>
                        <Link to={'/terms'}><li className='mt-[5px]'>Terms and Conditions</li></Link>
                    </ul>
                </div>
                <div className="text-white">
                    <p className="font-semibold text-[18px]">Connect with us</p>
                    <br/>
                    <div className="flex justify-between space-x-3">
                    <a href="https://www.instagram.com/dooperhealth/"> 
                    <img src="/Assets/InstagramIconWhite.png" alt="SocialMediaIcon" className="w-[40px]" /> </a>
                    <a href="https://www.facebook.com/Dooperhealth/"> 
                        <img src="/Assets/FacebookIconWhite.png" alt="SocialMediaIcon" className="w-[40px]" /> </a>
                    <a href="https://www.linkedin.com/company/dooperhealth/"> 
                        <img src="/Assets/LinkedinIconWhite.png" alt="SocialMediaIcon" className="w-[40px]" /></a>
                    </div>
                </div>
            </div>
            <div className="bg-[#B60336] py-[10px] px-[100px] flex justify-center mt-[1px]">
                <p className="text-center text-white">Copyright © 2023 | All rights reserved by dooper</p>
            </div>
        </div>
        
        <div className='md:hidden w-full'>
            <div className=" bg-[#B60336] py-[43px] px-[20px] flex flex-col items-center">
                    <img src="/Assets/CompanyLogoWhite.png" alt="companylogo" className="w-[10rem]" />
                    <div className='flex items-center justify-between w-full'>
                        <a href="tel: 1 23 456 7980"><div className="flex items-center space-x-3 mt-[20px]">
                            <img src="/Assets/PhoneIconWhite.png" alt="phone" className="w-[30px]" />
                            <div className="text-white">
                                <p className='text-[12px] font-medium'>Phone</p>
                                <p className='text-[12px] font-medium'>+91 6375596006</p>
                            </div>
                        </div></a> 
                        <a href="mailto: help@dooper.in"><div className="flex items-center space-x-3 mt-[20px]">
                            <img src="/Assets/MailIconWhite.png" alt="phone" className="w-[30px]" />
                            <div className="text-white">
                                <p className='text-[12px] font-medium'>Mail</p>
                                <p className='text-[12px] font-medium'>help@dooper.in</p>
                            </div>
                        </div></a>
                    </div>
                
                <div className='py-[20px] flex flex-col items-center space-y-2 text-white'>
                    <div onClick={() => setOpenOther(!openOther)} className='flex justify-center items-center space-x-2'>
                        <p className='font-semibold text-[14px]'>Other</p>
                        {
                            openOther ? <img src="/Assets/OpenArrow.png" alt="arrow" className='w-[10px]' /> : <img src="/Assets/NotOpenArrow.png" alt="arrow" className='w-[5px]' />
                        }
                    </div>
                    {
                        openOther ? (
                            <div className='flex flex-col items-center space-y-1'>
                                <Link to={'/'}><p className='text-[12px] font-medium'>Make Appointment</p></Link>
                                <Link to={'/urgentcare'}><p className='text-[12px] font-medium'>Emergency Call</p></Link>
                                <Link to={'/testimonials'}><p className='text-[12px] font-medium'>Testimonials</p></Link>
                            </div>
                        ) : null
                    }
                    <div onClick={() => setOpenQuick(!openQuick)} className='flex justify-center items-center space-x-2'>
                        <p className='font-semibold text-[14px]'>Quick Links</p>
                        {
                            openQuick ? <img src="/Assets/OpenArrow.png" alt="arrow" className='w-[10px]' /> : <img src="/Assets/NotOpenArrow.png" alt="arrow" className='w-[5px]' />
                        }
                    </div>
                    {
                        openQuick ? (
                            <div className='flex flex-col items-center space-y-1'>
                                <Link to={'/pricing'}><p className='text-[12px] font-medium'>Pricing</p></Link>
                                <Link to={'/doctors'}><p className='text-[12px] font-medium'>Doctors</p></Link>
                                <Link to={'/hospitals'}><p className='text-[12px] font-medium'>Services</p></Link>
                                <Link to={'/testimonials'} ><p className='text-[12px] font-medium'>Testimonials</p></Link>
                                <Link to={'/faqs'} ><p className='text-[12px] font-medium'>FAQs</p></Link>
                            </div>
                        ) : null
                    }
                    <div onClick={() => setOpenLink(!openLink)} className='flex justify-center items-center space-x-2'>
                        <p className='font-semibold text-[14px]'>Links</p>
                        {
                            openLink ? <img src="/Assets/OpenArrow.png" alt="arrow" className='w-[10px]' /> : <img src="/Assets/NotOpenArrow.png" alt="arrow" className='w-[5px]' />
                        }
                    </div>
                    {
                        openLink ? (
                            <div className='flex flex-col items-center space-y-1'>
                                <Link to={'/blogs'}><p className='text-[12px] font-medium'>Blogs</p></Link>
                                <Link to={'/privacy'}><p className='text-[12px] font-medium'>Privacy Policy</p></Link>
                                <Link to={'/terms'}><p className='text-[12px] font-medium'>Terms and Conditions</p></Link>
                            </div>
                        ) : null
                    }
                </div>

                <div className="text-white flex items-center justify-center space-x-3">
                    <p className="font-semibold text-[16px]">Connect with us</p>
                    <div className="flex justify-between space-x-4">
                       
                        <img src="/Assets/InstagramIconWhite.png" alt="SocialMediaIcon" className="w-[35px]" />
                        <img src="/Assets/FacebookIconWhite.png" alt="SocialMediaIcon" className="w-[35px]" />
                        <img src="/Assets/LinkedinIconWhite.png" alt="SocialMediaIcon" className="w-[35px]" />
                    </div>
                </div>
            </div>
            <div className="bg-[#B60336] py-[10px] px-[20px] flex justify-center mt-[1px]">
                <p className="text-center text-white text-[12px] font-medium">Copyright © 2023 | All rights reserved by dooper</p>
            </div>
        </div>
        </>
    );
}

export default Footer;