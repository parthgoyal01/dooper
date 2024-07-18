

import React from 'react';
import { Link } from 'react-router-dom';

const PackageCard = ({ data, setViewPackages }) => {
    return (
        <>
            <div className="hidden lg:inline-flex flex-col px-[25px] py-[35px] rounded-[8px] custom-shadow">
                <div className="flex flex-col justify-between h-full">
                    
                    <div className="mt-[20px] w-[100%]">
                    <p className="text-[#1A1C1F] text-[20px] font-semibold min-h-[100px]">{data.name}</p>
                        <p>Also known as:</p>
                        <ul className="list-disc list-inside mt-[15px]">
                            {data.akaList.map((aka, idx) => (
                                <li key={idx} className="::marker:text-[#E40443] py-[4px]">{aka}</li>
                            ))}
                        </ul>
                        </div>
                        <div>

                        <div className="rounded-[10px] mt-[10px] border-[1px] border-[#E40443] w-[90px] mt-[40px]">
                            <p className="text-center text-[#E40443] text-[12px] font-medium">Know more</p>
                        </div>

                        <div className="flex items-center space-x-2 mt-[20px] w-[100%]">
                            <button className="rounded-[5px] px-[2px] py-[5px] border-[1px] border-[#000000] w-[70%]">
                                <span className='font-semibold'>₹{data.price}</span> 
                                {data.oldPrice !== "" && <span className='line-through text-[#B3B3B3] text-[13px]'>₹{data.oldPrice}</span>}
                                {data.discount !== "" && <span className='text-[#E40443] text-[13px]'>{data.discount}% off</span>}
                            </button>
                            <Link to="/contact">
                                <button className="text-white bg-[#E40443] rounded-[5px] py-[5px] w-[100px] text-center">Book Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:hidden px-[15px] py-[15px] rounded-[8px] custom-shadow">
                <div className="flex flex-col justify-between h-full">
                   
                    <div className="mt-[10px] w-[100%]">
                    <p className="text-[#1A1C1F] text-[16px] font-semibold min-h-[100px]">{data.name}</p>
                        <p className='text-[10px]'>Also known as:</p>
                        <ul className="list-disc list-inside mt-[5px]">
                            {data.akaList.map((aka, idx) => (
                                <li key={idx} className="::marker:text-[#E40443] py-[4px] text-[8px]">{aka}</li>
                            ))}
                        </ul>
                        </div>
                        <div>

                        <div className="rounded-[10px] mt-[25px] border-[1px] border-[#E40443] w-[60px]">
                            <p className="text-center text-[#E40443] text-[8px] font-medium">Know more</p>
                        </div>

                        <div className="flex flex-col mt-[15px] space-y-2">
                            <button className="rounded-[5px] text-[12px] px-[6px] py-[5px] border-[1px] border-[#000000] w-[100%]">
                                <span className='font-semibold'>₹{data.price}</span> 
                                {data.oldPrice !== "" && <span className='line-through text-[#B3B3B3] text-[10px]'>₹{data.oldPrice}</span>}
                                {data.discount !== "" && <span className='text-[#E40443] text-[10px]'>{data.discount}% off</span>}
                            </button>
                            <Link to="/contact">
                                <button className="font-semibold text-white text-[12px] bg-[#E40443] rounded-[5px] px-[15px] py-[5px] w-[100%] text-center">Book Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PackageCard;
