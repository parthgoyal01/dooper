
import { Link } from "react-router-dom";

const HomepageCard = ({ img, tag, selectedCard, index }) => {
    const cardContent = (
        <>
            <img src={img} alt={`${tag} image`} className="rounded-t-[10px]" />
            <p className="text-[20px] text-center mt-[10px] font-medium">{tag}</p>
            <div className="mt-[15px] flex justify-center mb-[25px]">
                <Link to="https://api.whatsapp.com/send/?phone=6375596006&text&type=phone_number&app_absent=0">
                    <button className="px-[10px] py-[5px] text-[#E40443] w-[120px] text-center rounded-[5px] bg-[#FCE6EC] text-[14px] font-semibold">Book Now</button>
                </Link>
            </div>
        </>
    );

    return (
        <>
            <div className="hidden md:inline-flex flex flex-col border border-[#D0D4D9] rounded-[10px] w-[23%]">
                {cardContent}
            </div>
            <div className="md:hidden border border-[#D0D4D9] rounded-[10px] w-full">
                {cardContent}
            </div>
        </>
    );
}

export default HomepageCard;
