import ReactDom from 'react-dom';
import { useLocation } from 'react-router-dom';
import {useState, useEffect} from 'react';

const ShareModal = ({setModal, url}) => {
    //const location = useLocation();

    const [copied, setCopied] = useState(false);

    return ReactDom.createPortal(
        <>
            <div onClick={() => setModal(false)} className='fixed top-0 bottom-0 left-0 right-0 z-1000 bg-blur backdrop-blur-sm' />
            <div className='hidden md:inline-flex min-w-[600px] flex flex-col items-center p-[20px] fixed z-1000 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF] rounded-[10px] shadow-xl'>
                <p className='text-[18px] font-medium'>Share Blog</p>

                <div className='flex items-center space-x-5 mt-[40px]'>
                    <a href={"whatsapp://send?text=" + {url}} target="_blank"><img src="/Assets/WhatsappIcon.png" className='w-[50px]' alt="icon" /></a>
                    <a href={"linkedin://send?text=" + {url}}><img src="/Assets/LinkedInIcon.png" className='w-[50px]' alt="icon" /></a>
                    <a href={"https://www.facebook.com/sharer/sharer.php?u=example.org"} target="_blank"><img src="/Assets/FacebookIcon.png" className='w-[50px]' alt="icon" /></a>
                    <a href={"https://twitter.com/intent/tweet"} target="_blank"><img src="/Assets/TwitterIcon.png" className='w-[50px]' alt="icon" /></a>
                    <a href={"whatsapp://send?text=" + {url}}><img src="/Assets/InstagramIcon.png" className='w-[50px]' alt="icon" /></a>
                    <a href={`mailto:?subject=Check out this blog&amp;body=Check out this blog ${url}`}><img src="/Assets/GmailIcon.png" className='w-[50px]' alt="icon" /></a>
                </div>

                <div className='flex flex-row items-center w-full mt-[40px]'>
                    <div className='border-[1px] border-[#B8BFC7] h-[1px] w-full ml-[10px]' />
                    <p className='text-[#B8BFC7] px-[30px]'>Or</p>
                    <div className='border-[1px] border-[#B8BFC7] h-[1px] w-full mr-[10px]' />
                </div>

                <div className='mt-[40px] flex items-center w-full justify-between space-x-3'>
                    <input value={url} className='bg-white text-[#1A1C1F] px-[10px] py-[7px] border-[1px] border-[#B8BFC7] w-full rounded-[7px] text-[14px] font-medium' type ="text" disabled />
                    {
                        copied ? (
                            <button className='text-white bg-[#41B079] font-semibold rounded-[10px] px-[20px] py-[8px] text-center w-[180px] font-medium text-[14px]'>URL Copied</button>
                        ) : <button onClick={() => {
                            navigator.clipboard.writeText(url)
                            setCopied(true)
                        }} className='text-white bg-[#E40443] rounded-[10px] px-[20px] py-[8px] text-center font-medium text-[14px]'>Copy</button>
                    }
                </div>
            </div>

            <div className='md:hidden w-[90%] flex flex-col items-center p-[20px] fixed z-1000 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF] rounded-[10px] shadow-xl'>
                <p className='text-[16px] font-medium'>Share Blog</p>

                <div className='flex items-center space-x-5 mt-[20px]'>
                    <a href={"whatsapp://send?text=" + {url}} target="_blank"><img src="/Assets/WhatsappIcon.png" className='w-[50px]' alt="icon" /></a>
                    <a href={"linkedin://send?text=" + {url}}><img src="/Assets/LinkedInIcon.png" className='w-[50px]' alt="icon" /></a>
                    <a href={"https://www.facebook.com/sharer/sharer.php?u=example.org"} target="_blank"><img src="/Assets/FacebookIcon.png" className='w-[50px]' alt="icon" /></a>
                    <a href={"https://twitter.com/intent/tweet"} target="_blank"><img src="/Assets/TwitterIcon.png" className='w-[50px]' alt="icon" /></a>
                    <a href={"whatsapp://send?text=" + {url}}><img src="/Assets/InstagramIcon.png" className='w-[50px]' alt="icon" /></a>
                    <a href={`mailto:?subject=Check out this blog&amp;body=Check out this blog ${url}`}><img src="/Assets/GmailIcon.png" className='w-[50px]' alt="icon" /></a>
                </div>

                <div className='flex flex-row items-center w-full mt-[20px]'>
                    <div className='border-[1px] border-[#B8BFC7] h-[1px] w-full ml-[10px]' />
                    <p className='text-[#B8BFC7] px-[30px]'>Or</p>
                    <div className='border-[1px] border-[#B8BFC7] h-[1px] w-full mr-[10px]' />
                </div>

                <div className='mt-[20px] flex items-center w-full justify-between space-x-3'>
                    <input value={url} className='bg-white text-[#1A1C1F] px-[10px] py-[7px] border-[1px] border-[#B8BFC7] w-full rounded-[7px] text-[14px] font-medium' type ="text" disabled />
                    {
                        copied ? (
                            <button className='text-white bg-[#41B079] font-semibold rounded-[10px] px-[20px] py-[8px] text-center w-[180px] font-medium text-[14px]'>URL Copied</button>
                        ) : <button onClick={() => {
                            navigator.clipboard.writeText(url)
                            setCopied(true)
                        }} className='text-white bg-[#E40443] rounded-[10px] px-[20px] py-[8px] text-center font-medium text-[14px]'>Copy</button>
                    }
                </div>
            </div>

        </>, document.getElementById('portal')
    );
}

export default ShareModal;