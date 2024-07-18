import {Link} from 'react-router-dom';

const UrgentCareCard = ({data}) => {
    return (
        <>
        <div className="hidden md:inline-flex flex flex-col justify-between items-center h-[280px] mr-[20px]">
            <div className="">
                <img src={data.img} alt="image" className="rounded-[5px] " />
                <p className="text-center mt-[10px] font-medium">{data.heading}</p>
            </div>
            <Link to={'https://api.whatsapp.com/send/?phone=6375596006&text&type=phone_number&app_absent=0'}><p className="font-semibold text-center text-[14px] text-[#E40443] underline mt-[5px] mb-[10px]">Consult Now  </p></Link>
        </div>

        <div className="md:hidden flex flex-col justify-between items-center mx-[10px]">
            <div className="">
                <img src={data.img} alt="image" className="rounded-[5px] " />
                <p className="text-center mt-[10px] font-medium text-[12px]">{data.heading}</p>
            </div>
            <Link to={'https://api.whatsapp.com/send/?phone=6375596006&text&type=phone_number&app_absent=0'}><p className="font-semibold text-center text-[10px] text-[#E40443] underline mt-[5px] mb-[10px]">Consult Now  </p></Link>
        </div>
        </>
    );
}

export default UrgentCareCard;