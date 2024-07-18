import { useLocation, Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import ShareModal from './Cards/ShareModal';

const BlogDetail = (props) => {
    const location = useLocation();

    const { state } = location;
    // state contains the following:
    // {
        // img
        // tag
        // date
        // header
        // content
        // tagList
    // }
    const url = window.location.href;
    const [showModal, setShowModal] = useState(false);

    const [detail, setDetails] = useState({
        first: "",
        last: "",
        email: "",
        phone: "",
        message: ""
    })

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setDetails((prev) => {
            return {...prev, [name]: value};
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(detail);
    }

    return (
        <>
            <div className='hidden md:inline-flex py-[40px] px-[100px] flex flex-col items-center'>

                <div className='w-[60%]'>
                    <div className='rounded-[10px] relative'>
                        <img src={state.img} alt="image" className='w-full rounded-[16px]' />
                        
                        {
                            showModal ? (null) : <Link to={'/blogs'}><button className="z-10 top-[15px] left-[15px] bg-[white] absolute flex items-center rounded-[10px] px-[15px] py-[5px] text-[#1A1C1F]">
                                <img src="/Assets/BackArrow.png" alt="share" className="w-[14px]" />
                                <p className="pl-[8px] text-[14px] font-semibold">Back</p>
                            </button></Link>

                        }
                        {
                            showModal ? (<ShareModal setModal={setShowModal} url={url} />) : 
                            <button onClick = {() => setShowModal(true)} className="z-10 top-[15px] right-[15px] absolute flex items-center bg-[#FCE6EC] rounded-[10px] px-[15px] py-[5px] text-[#E40443]">
                                <img src="/Assets/ShareIcon.png" alt="share" className="w-[14px]" />
                                <p className="pl-[8px] text-[14px] font-semibold">Share</p>
                            </button>
                        }
                    </div>

                    <div className='w-full mt-[20px]'>
                        <div className="flex justify-start">
                            <button className="rounded-[5px] bg-[#F5F6F7] px-[8px] py-[5px] text-[#5B6572] text-[13px] text-center font-medium">{state.tag}</button>
                        </div>
                        <div className="flex items-center mt-[10px]">
                            <img src="/Assets/CalanderIcon.png" alt="calander" className="w-[16px] h-[14px]" />
                            <p className="text-[#8D98A4] text-[13px] pl-[4px]">{state.date}</p>
                        </div>
                        <p className="text-[#1A1C1F] text-[32px] font-medium">
                            {state.header}
                        </p>
                    </div>

                    <div className='mt-[20px]'>
                        {state.content}
                    </div>

                    <div className='py-[40px] flex space-x-5'>
                        <p className='font-semibold'>Tags: </p>
                        <div className='grid grid-cols-8 space-x-5'>
                            {
                                state.tagList.map((tag, idx) => {
                                    return <button className='bg-[#EEF0F3] px-[7px] py-[4px] rounded-[5px] text-[12px] font-semibold'>{tag}</button>
                                })
                            }
                        </div>
                    </div>

                    <div className='py-[0px] flex space-x-5'>
                        <p className='font-semibold'>Share Blog:</p>
                        <div className='flex space-x-4'>
                            <a href={"whatsapp://send?text=" + {url}} target="_blank"><img src="/Assets/WhatsappIconBlogs.png" alt="icon" className='w-[30px] h-[30px]' /></a>
                            <a href={"https://twitter.com/intent/tweet"} target="_blank"><img src="/Assets/TwitterIconBlogs.png" alt="icon" className='w-[30px] h-[30px]' /></a>
                            <a href={"whatsapp://send?text=" + {url}}><img src="/Assets/InstagramIconBlogs.png" alt="icon" className='w-[30px] h-[30px]' /></a>
                            <a href={`mailto:?subject=Check out this blog&amp;body=Check out this blog ${url}`}><img src="/Assets/GmailIconBlogs.png" alt="icon" className='w-[30px] h-[30px]' /></a>
                            <a href={"https://www.facebook.com/sharer/sharer.php?u=example.org"} target="_blank"><img src="/Assets/FacebookIconBlogs.png" alt="icon" className='w-[30px] h-[30px]' /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:hidden py-[30px] px-[20px] flex flex-col items-center'>
                <div className='w-[100%]'>
                    <div className='rounded-[10px] relative'>
                        <img src={state.img} alt="image" className='w-full rounded-[16px]' />
                        {
                            showModal ? (<ShareModal setModal={setShowModal} url={url} />) : 
                            <button onClick = {() => setShowModal(true)} className="z-10 top-[15px] right-[15px] absolute flex items-center bg-[#FCE6EC] rounded-[10px] px-[15px] py-[5px] text-[#E40443]">
                                <img src="/Assets/ShareIcon.png" alt="share" className="w-[14px]" />
                                <p className="pl-[8px] text-[14px] font-semibold">Share</p>
                            </button>
                        }
                    </div>

                    <div className='w-full mt-[20px]'>
                        <div className="flex justify-start">
                            <button className="rounded-[5px] bg-[#F5F6F7] px-[8px] py-[5px] text-[#5B6572] text-[10px] text-center font-medium">{state.tag}</button>
                        </div>
                        <div className="flex items-center mt-[10px]">
                            <img src="/Assets/CalanderIcon.png" alt="calander" className="w-[16px] h-[14px]" />
                            <p className="text-[#8D98A4] text-[10px] pl-[4px]">{state.date}</p>
                        </div>
                        <p className="text-[#1A1C1F] text-[18px] font-medium">
                            {state.header}
                        </p>
                    </div>

                    <div className='mt-[20px] text-[12px]'>
                        {state.content}
                    </div>

                    <div className='py-[20px] flex items-start space-x-5 w-full'>
                        <p className='font-semibold text-[12px]'>Tags: </p>
                        <div className='grid grid-cols-4 space-x-1 w-full'>
                            {
                                state.tagList.map((tag, idx) => {
                                    return <button className='bg-[#EEF0F3] px-[7px] py-[4px] rounded-[5px] text-[10px] font-semibold my-[3px]'>{tag}</button>
                                })
                            }
                        </div>
                    </div>

                    <div className='py-[0px] flex space-x-5 items-center'>
                        <p className='font-semibold text-[12px]'>Share Blog:</p>
                        <div className='flex space-x-4'>
                            <a href={"whatsapp://send?text=" + {url}} target="_blank"><img src="/Assets/WhatsappIconBlogs.png" alt="icon" className='w-[30px] h-[30px]' /></a>
                            <a href={"https://twitter.com/intent/tweet"} target="_blank"><img src="/Assets/TwitterIconBlogs.png" alt="icon" className='w-[30px] h-[30px]' /></a>
                            <a href={"whatsapp://send?text=" + {url}}><img src="/Assets/InstagramIconBlogs.png" alt="icon" className='w-[30px] h-[30px]' /></a>
                            <a href={`mailto:?subject=Check out this blog&amp;body=Check out this blog ${url}`}><img src="/Assets/GmailIconBlogs.png" alt="icon" className='w-[30px] h-[30px]' /></a>
                            <a href={"https://www.facebook.com/sharer/sharer.php?u=example.org"} target="_blank"><img src="/Assets/FacebookIconBlogs.png" alt="icon" className='w-[30px] h-[30px]' /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='hidden md:inline-flex flex items-center justify-center px-[100px] py-[40px] space-x-36'>
                <div className='w-[30%]'>
                    <p className='text-[32px] font-medium'>Get in touch with us</p>
                    <div className='mt-[25px] space-y-5'>
                        <input type="text" placeholder='Full Name' className='border-[1px] border-[#B3B3B3] rounded-[5px] w-[100%] px-[10px] py-[6px]' />
                        <input type="text" placeholder='Enter Phone Number' className='border-[1px] border-[#B3B3B3] rounded-[5px] w-[100%] px-[10px] py-[6px]' />
                        <textarea className='border-[1px] border-[#B3B3B3] rounded-[5px] w-[100%] px-[10px] py-[6px]' placeholder='Your Message'></textarea>
                        <div className="flex justify-start">
                            <button className="text-white bg-[#E40443] rounded-[5px] px-[15px] py-[5px] text-[14px] font-semibold">Submit</button>
                        </div>
                    </div> 
                </div>
                <div className='w-[40%]'>
                    <img src="/Assets/BlogPageImage.png" className='w-[80%]' />         
                </div>
            </div>

            <div className='md:hidden py-[30px] px-[20px] flex flex-col lg:flex-row justify-between items-center lg:space-x-10'>
                <div className="flex items-center justify-center w-full lg:w-[70%]">
                    <div className="border-[1px] w-full border-[#E3E6E8] rounded-[10px] p-[20px] lg:p-[40px]">
                        <div className='hidden md:inline-flex w-full'>
                            <form onSubmit={submitHandler} className="w-full">
                                <p className="lg:text-[32px] font-medium">Get in touch with us</p>
                                <div className='space-y-6 mt-[20px]'>
                                    <div className="flex felx-row justify-between space-x-5">
                                        <input type="text" className="bg-[#F4F4F4] rounded-[5px] px-[10px] py-[5px] border-[1px] border-[#EEF0F3] w-[50%]" placeholder="Full Name" name="first" onChange={changeHandler} required />
                                        <input type="text" className="bg-[#F4F4F4] rounded-[5px] px-[10px] py-[5px] border-[1px] border-[#EEF0F3] w-[50%]" placeholder="Enter Phone Number" name="phone" onChange={changeHandler} required />
                                    </div>
                                    <div>
                                        <textarea placeholder="Your message" name="message" className="bg-[#F4F4F4] rounded-[5px] px-[10px] py-[5px] border-[1px] border-[#EEF0F3] w-full" onChange={changeHandler} required />
                                    </div>
                                </div>
                                <button onClick={submitHandler} className="font-semibold text-[14px] rounded-[10px] px-[20px] py-[10px] text-white bg-[#E40443] mt-[10px]">Send Inquiry</button>
                            </form>
                        </div>
                        <div className='md:hidden w-full'>
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
            </div>

            <div className="hidden md:inline-flex flex-col py-[40px] px-[100px]">
                <div className="flex flex-row items-center">
                    <p className="w-[40%] font-medium">Trusted by 1000+ companies and patients</p> 
                    <div className="border-[1px] border-[#B8BFC7] w-full h-[1px]"></div>
                </div>
                <div className="flex justify-between space-x-10 mt-[30px]">
                    <img src="/Assets/AboutUsBanner1.png" alt="banner" className='w-[17%]' />
                    <img src="/Assets/AboutUsBanner2.png" alt="banner" className='w-[17%]' />
                    <img src="/Assets/AboutUsBanner3.png" alt="banner" className='w-[17%]' />
                    <img src="/Assets/AboutUsBanner4.png" alt="banner" className='w-[17%]' />
                    <img src="/Assets/AboutUsBanner5.png" alt="banner" className='w-[17%]' />
                </div>
            </div>

            <div className="md:hidden py-[30px] px-[20px] bg-white mt-[0px]">
                <div className="flex flex-row items-center">
                    <p className="font-semibold text-[14px]">Trusted by 1000+ companies and patients</p> 
                </div>
                <div className="flex justify-between space-x-2 mt-[20px]">
                    <img src="/Assets/AboutUsBanner1.png" alt="banner" className='w-[33%]' />
                    <img src="/Assets/AboutUsBanner2.png" alt="banner" className='w-[33%]' />
                    <img src="/Assets/AboutUsBanner3.png" alt="banner" className='w-[33%]' />
                </div>
            </div>

            {/* <div className="py-[40px] px-[100px] flex items-center justify-center">
                <div className="border-[1px] min-w-[50%] border-[#E3E6E8] rounded-[10px] p-[40px] bg-[#F4F4F4]">
                    <form onSubmit={submitHandler} className="">
                        <p className="text-[32px]">Get in touch with us</p>
                        <div className='space-y-6 mt-[20px]'>
                            <div className="flex felx-row justify-between space-x-5">
                                <input type="text" className=" rounded-[5px] px-[10px] py-[5px] border-[1px] border-[#EEF0F3] w-[50%]" placeholder="First Name" name="first" onChange={changeHandler} required />
                                <input type="text" className=" rounded-[5px] px-[10px] py-[5px] border-[1px] border-[#EEF0F3] w-[50%]" placeholder="Last Name" name="last" onChange={changeHandler}  required />
                            </div>
                            <div className="flex felx-row justify-between space-x-5">
                                <input type="email" className=" rounded-[5px] px-[10px] py-[5px] border-[1px] border-[#EEF0F3] w-[50%]" placeholder="Enter your email" name="email" onChange={changeHandler}  required />
                                <input type="number" className=" rounded-[5px] px-[10px] py-[5px] border-[1px] border-[#EEF0F3] w-[50%]" placeholder="Enter Phone Number" name="phone" onChange={changeHandler} required />
                            </div>
                            <div>
                                <textarea placeholder="Your message" name="message" className="rounded-[5px] px-[10px] py-[5px] border-[1px] border-[#EEF0F3] w-full" onChange={changeHandler} required />
                            </div>
                        </div>
                        <div className='flex justify-center w-full'>
                            <button onClick={submitHandler} className="rounded-[10px] px-[20px] py-[10px] text-white bg-[#E40443] mt-[10px]">Send Inquiry</button> 
                        </div>
                    </form>
                </div>
            </div> */}
        </>
    );
}

export default BlogDetail;