const Pricing2 = () => {
    return (
        <>
            <div className="hidden md:inline-flex flex-col z-index-class bg-[#FFC8D6] opacity-100 left-1/2 right-1/2 rounded-[20px] custom-shadow flex flex-col items-center py-[50px] px-[30px] h-[650px] w-[400px]">
                <img src="/Assets/MostPopularBanner.png" className="absolute w-[426px]" alt="banner" />
                <p className="text-[40px] text-[#E40443] mt-[80px] font-semibold">Essential</p>
                <p className="mt-[20px]"><span className="text-[40px] text-[#1A1C1F] font-semibold">$25</span> <span className="text-[18px] text-[#8D98A4] "> /Month</span></p>

                <button className="text-white bg-[#E40443] rounded-[10px] px-[20px] py-[6px] mt-[20px] font-semibold text-[14px]">Get Started</button>

                <div className="space-y-3 mt-[30px]">
                    <p className="text-[#1A1C1F] text-[18px] font-semibold text-center">Everything in <span className="text-[#E40443]"> Free Forever </span>and</p>
                    <hr className="border-[#A7A8A8] h-[2px]" />
                    <p className="text-[#1A1C1F] text-[12px] text-center font-medium">For<span className="text-[#E40443]"> Institutions </span></p>
                    <hr  className="border-[#A7A8A8] h-[2px]"/>
                    <p className="text-[#1A1C1F] text-[12px] text-center font-medium"><span className="text-[#E40443]">Analytics </span>and <span className="text-[#E40443]">reporting </span></p>
                    <hr  className="border-[#A7A8A8] h-[2px]"/>
                    <p className="text-[#1A1C1F] text-[12px] text-center font-medium">More <span className="text-[#E40443]">advanced features </span> for increased productivity</p>
                    <hr className="border-[#A7A8A8] h-[2px]"/>
                    <p className="text-[#1A1C1F] text-[12px] text-center font-medium"><span className="text-[#E40443]">Customizable options </span>to meet your specific needs</p>
                </div>
            </div>

            <div className="md:hidden w-[] z-index-class bg-[#FFC8D6] opacity-100 left-1/2 right-1/2 rounded-[20px] custom-shadow flex flex-col items-center py-[25px] px-[20px]">
                <img src="/Assets/MostPopularBanner.png" className="absolute w-[315px]" alt="banner" />
                <p className="mt-[50px]"><span className="text-[16px] text-[#1A1C1F] font-semibold">$25</span> <span className="text-[10px] text-[#8D98A4] "> /Month</span></p>

                <div className="space-y-3 mt-[30px]">
                    <p className="text-[#1A1C1F] text-[12px] font-semibold text-center">Everything in <span className="text-[#E40443]"> Free Forever </span>and</p>
                    <p className="text-[#1A1C1F] text-[10px] text-center font-medium">For<span className="text-[#E40443]"> Institutions </span></p>
                    <p className="text-[#1A1C1F] text-[10px] text-center font-medium"><span className="text-[#E40443]">Analytics </span>and <span className="text-[#E40443]">reporting </span></p>
                    <p className="text-[#1A1C1F] text-[10px] text-center font-medium">More <span className="text-[#E40443]">advanced features </span> for increased productivity</p>
                    <p className="text-[#1A1C1F] text-[10px] text-center font-medium"><span className="text-[#E40443]">Customizable options </span>to meet your specific needs</p>
                </div>

                <button className="text-white bg-[#E40443] rounded-[5px] px-[20px] py-[6px] mt-[20px] font-semibold text-[10px]">Get Started</button>
            </div>
        </>
    );
}

export default Pricing2;