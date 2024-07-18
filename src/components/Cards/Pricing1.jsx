const Pricing1 = (props) => {
    return (
        <>
        <div className="hidden md:inline-flex flex-col">
            <div className="rounded-[20px] custom-shadow h-[500px] flex flex-col items-center py-[50px] px-[30px] min-w-[300px]">
                    <p className="text-[32px] text-[#E40443] font-semibold">Free Forever</p>
                    <p className="mt-[20px]"><span className="text-[32px] text-[#1A1C1F] font-semibold">Free</span> <span className="text-[15px] text-[#8D98A4] "> /Forever</span></p>
                    <button className="text-white bg-[#E40443] rounded-[10px] px-[20px] py-[6px] mt-[20px] font-semibold text-[14px]">Get Started</button>
                    <div className="space-y-3 mt-[30px]">
                        <p className="text-[#1A1C1F] text-[12px] text-center font-medium">For<span className="text-[#E40443]"> Individual </span>users</p>                        <hr />
                    <p className="text-[#1A1C1F] text-[12px] text-center font-medium">Includes <span className="text-[#E40443]">essential features </span>to get started</p>
                    <hr />
                    <p className="text-[#1A1C1F] text-[12px] text-center font-medium">Account<span className="text-[#E40443]"> Management</span></p>
                </div>
            </div>
        </div>

        <div className="md:hidden">
            <div className="rounded-[20px] custom-shadow flex flex-col items-center py-[25px] px-[30px] w-full">
                <p className="text-[18px] text-[#E40443] font-semibold">Free Forever</p>
                <p className="mt-[10px]"><span className="text-[16px] text-[#1A1C1F] font-semibold">Free</span> <span className="text-[10px] text-[#8D98A4] "> /Forever</span></p>
                <div className="space-y-2 mt-[20px] items-center flex flex-col">
                    <p className="text-[#1A1C1F] text-[10px] text-center font-medium">For<span className="text-[#E40443]"> Individual </span>users</p>                        <hr />
                    <p className="text-[#1A1C1F] text-[10px] text-center font-medium">Includes <span className="text-[#E40443]">essential features </span>to get started</p>
                    <hr />
                    <p className="text-[#1A1C1F] text-[10px] text-center font-medium">Account<span className="text-[#E40443]"> Management</span></p>
                </div>
                <button className="text-white bg-[#E40443] rounded-[5px] px-[20px] py-[6px] mt-[20px] font-semibold text-[10px]">Get Started</button>
            </div>
        </div>
        </>
    );
}

export default Pricing1;