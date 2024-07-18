const Pricing3 = () => {
    return (
        <>
            <div className="hidden md:inline-flex flex-col rounded-[20px] custom-shadow h-[500px] flex flex-col items-center py-[50px] px-[30px] min-w-[300px]">
                <p className="text-[32px] text-[#E40443] font-semibold">Dooper Special</p>
                <p className="mt-[20px]"><span className="text-[32px] text-[#1A1C1F] font-semibold">$40</span> <span className="text-[15px] text-[#8D98A4] "> /Month</span></p>

                <button className="text-white bg-[#E40443] rounded-[10px] px-[20px] py-[6px] mt-[20px] font-semibold text-[14px]">Get Started</button>

                <div className="space-y-3 mt-[30px]">
                    <p className="text-[#1A1C1F] text-[18px] font-semibold text-center">Everything in <span className="text-[#E40443]"> Essential </span>and</p>
                    <hr />
                    <p className="text-[#1A1C1F] text-[12px] text-center font-medium">For<span className="text-[#E40443]"> Both Institutions and Individuals </span></p>
                    <hr />
                    <p className="text-[#1A1C1F] text-[12px] text-center font-medium">Secure <span className="text-[#E40443]">data storage </span></p>
                    <hr />
                    <p className="text-[#1A1C1F] text-[12px] text-center font-medium">Email<span className="text-[#E40443]"> Support</span></p>
                    <hr />
                    <p className="text-[#1A1C1F] text-[12px] text-center font-medium"><span className="text-[#E40443]"> 24/7</span> customer support</p>
                </div>
            </div>

            <div className="md:hidden rounded-[20px] custom-shadow flex flex-col items-center py-[25px] px-[30px]">
                <p className="text-[18px] text-[#E40443] font-semibold">Dooper Special</p>
                <p className="mt-[20px]"><span className="text-[16px] text-[#1A1C1F] font-semibold">$40</span> <span className="text-[10px] text-[#8D98A4] "> /Month</span></p>

                <div className="space-y-3 mt-[30px]">
                    <p className="text-[#1A1C1F] text-[12px] font-semibold text-center">Everything in <span className="text-[#E40443]"> Essential </span>and</p>
                    <p className="text-[#1A1C1F] text-[10px] text-center font-medium">For<span className="text-[#E40443]"> Both Institutions and Individuals </span></p>
                    <p className="text-[#1A1C1F] text-[10px] text-center font-medium">Secure <span className="text-[#E40443]">data storage </span></p>
                    <p className="text-[#1A1C1F] text-[10px] text-center font-medium">Email<span className="text-[#E40443]"> Support</span></p>
                    <p className="text-[#1A1C1F] text-[10px] text-center font-medium"><span className="text-[#E40443]"> 24/7</span> customer support</p>
                </div>

                <button className="text-white bg-[#E40443] rounded-[5px] px-[20px] py-[6px] mt-[20px] font-semibold text-[10px]">Get Started</button>
            </div>
        </>
    );
}

export default Pricing3;