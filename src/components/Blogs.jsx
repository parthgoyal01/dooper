import BlogCard from "./Cards/BlogCard";
import {BlogData, BlogDataShort} from "./BlogData";
import {useState, useEffect} from 'react';

const Blogs = (props) => {

    const [active, setActive] = useState(false);

    return (
        <>
            <div className="hidden md:inline-flex w-full flex justify-center mt-[40px] px-[100px]">
                <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[80px] font-semibold text-[14px]">Blogs</div>
            </div>
            <div className="md:hidden w-full flex justify-center mt-[30px]">
                <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[60px] font-semibold text-[12px]">Blogs</div>
            </div>
            <p className="text-[24px] lg:text-[40px] text-center font-medium">Read what's latest in health</p>

            <div className="hidden md:inline-flex w-full">
                <div className="px-[100px] w-full py-[40px] flex justify-between grid grid-cols-3 ">
                    {
                        active ? 
                        BlogData.map((card, index) => {
                            return <BlogCard img={card.img} tag={card.tag} date={card.date} header={card.header} path={card.path} content={card.content} tagList={card.tagList}/>
                        })
                        :
                        BlogDataShort.map((card, index) => {
                            return <BlogCard img={card.img} tag={card.tag} date={card.date} header={card.header} path={card.path} content={card.content} tagList={card.tagList}/>
                        })
                    }
                </div>
            </div>

            {
                !active ? (
                    <div className="hidden md:inline-flex w-full flex justify-center mb-[100px]">
                        <button className="text-white bg-[#E40443] rounded-[10px] px-[15px] py-[5px]" onClick={() => setActive(true)}>Load More</button>
                    </div>
                ) : (null)
            }


            <div className="md:hidden px-[20px] pb-[30px] pt-[10px] flex justify-between grid grid-cols-2 ">
                {
                    active ? 
                    BlogData.map((card, index) => {
                        return <BlogCard img={card.img} tag={card.tag} date={card.date} header={card.header} path={card.path} content={card.content} tagList={card.tagList}/>
                    })
                    :
                    BlogDataShort.map((card, index) => {
                        return <BlogCard img={card.img} tag={card.tag} date={card.date} header={card.header} path={card.path} content={card.content} tagList={card.tagList}/>
                    })
                }
            </div>

            {
                !active ? (
                    <div className="md:hidden w-full flex justify-center mb-[0px]">
                        <button className="text-white bg-[#E40443] rounded-[5px] text-[10px] px-[15px] py-[7px] font-semibold" onClick={() => setActive(true)}>Load More</button>
                    </div>
                ) : (null)
            }

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

            <div className="md:hidden py-[30px] px-[20px] bg-white mt-[10px]">
                <div className="flex flex-row items-center">
                    <p className="font-semibold text-[14px]">Trusted by 1000+ companies and patients</p> 
                </div>
                <div className="flex justify-between space-x-2 mt-[20px]">
                    <img src="/Assets/AboutUsBanner1.png" alt="banner" className='w-[33%]' />
                    <img src="/Assets/AboutUsBanner2.png" alt="banner" className='w-[33%]' />
                    <img src="/Assets/AboutUsBanner3.png" alt="banner" className='w-[33%]' />
                </div>
            </div>
        </>
    );
}

export default Blogs;