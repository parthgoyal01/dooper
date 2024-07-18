import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import ShareModal from "./ShareModal";

const BlogCard = ({img, tag, date, header, path, content, tagList}) => {

    const [modal, setModal] = useState(false);
    const temp = window.location.href;

    const details = {
        img,
        tag,
        date,
        header,
        content,
        tagList,
    }
    return (
        <>
        <div className="hidden md:inline-flex flex-col max-w-[21rem] mb-[20px] mx-auto">
            <img src={img} alt="blogImage" className="" />
            <div className="p-[20px]">
                <div className="flex justify-start">
                    <button className="rounded-[5px] bg-[#F5F6F7] px-[8px] py-[5px] text-[#5B6572] text-[12px] text-center font-medium">{tag}</button>
                </div>
                <div className="flex items-center mt-[10px]">
                    <img src="/Assets/CalanderIcon.png" alt="calander" className="w-[16px] h-[14px]" />
                    <p className="text-[#8D98A4] text-[13px] pl-[4px] font-medium">{date}</p>
                </div>
                <p className="text-[#1A1C1F] text-[16px] font-medium">
                    {header}
                </p>
                <div className="flex items-center space-x-5 mt-[10px]"> 
                    <Link 
                        to={`/blogs/${path}`}
                        state = {details}
                    ><button className="text-white bg-[#E40443] rounded-[10px] px-[15px] py-[5px] font-semibold text-[14px]">Read More</button></Link>
                    <button onClick={() => setModal(true)} className="flex items-center bg-[#FCE6EC] rounded-[10px] px-[15px] py-[5px] text-[#E40443]">
                        <img src="/Assets/ShareIcon.png" alt="share" className="w-[14px]" />
                        <p className="pl-[8px] font-semibold text-[14px]">Share</p>
                    </button>
                    {
                        modal ? (
                            <ShareModal setModal={setModal} url ={temp + "/" + path} />
                        ) : null
                    }
                </div>
            </div>
        </div>

        <div className="md:hidden mb-[20px] mx-[10px] min-h-[200px]">
            <img src={img} alt="blogImage" className="" />
            <div className="p-[5px] flex flex-col justify-between">
                <div className="flex justify-start mt-[10px]">
                    <button className="rounded-[5px] bg-[#F5F6F7] px-[8px] py-[5px] text-[#5B6572] text-[8px] text-center font-medium">{tag}</button>
                </div>
                <div className="flex items-center mt-[10px]">
                    <img src="/Assets/CalanderIcon.png" alt="calander" className="w-[16px] h-[14px]" />
                    <p className="text-[#8D98A4] text-[9px] pl-[4px] font-medium">{date}</p>
                </div>
                <p className="text-[#1A1C1F] text-[12px] w-full font-medium">
                    {header}
                </p>
                <div className="flex items-end space-x-1 mt-[10px]"> 
                    <Link 
                        to={`/blogs/${path}`}
                        state = {details}
                    ><button className="text-white bg-[#E40443] rounded-[5px] px-[7px] py-[5px] font-semibold text-[10px]">Read More</button></Link>
                    <button onClick={() => setModal(true)} className="flex items-center bg-[#FCE6EC] rounded-[5px] px-[7px] py-[5px] text-[#E40443]">
                        <img src="/Assets/ShareIcon.png" alt="share" className="w-[14px]" />
                        <p className="pl-[8px] font-semibold text-[10px]">Share</p>
                    </button>
                    {
                        modal ? (
                            <ShareModal setModal={setModal} url ={temp + "/" + path} />
                        ) : null
                    }
                </div>
            </div>
        </div>
    </>
    );
}

export default BlogCard;