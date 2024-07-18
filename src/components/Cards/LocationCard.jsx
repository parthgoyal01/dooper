import {Link} from 'react-router-dom';

const LocationCard = ({img, name, location}) => {
    return (
        <>
        <div className="hidden md:inline-flex flex flex-col items-center bg-[#EEF0F3] rounded-[10px] lg:h-[400px] max-w-[290px] mb-[40px]">
            <img src={img} alt="hospitalImage" className="rounded-t-[10px]" />
            <p className="text-[18px] mt-[5px] font-medium text-center">{name}</p>
            <div className="flex items-center space-x-1 mt-[5px]">
                <img src="/Assets/LocationLogo.png" alt="locationLogo" className="w-[18px]" />
                <p className="text-[#5B6572] text-[14px]">{location}</p>
            </div>
            <Link to={'https://api.whatsapp.com/send/?phone=6375596006&text&type=phone_number&app_absent=0'}><p className="text-center text-[12px] text-[#E40443] underline mt-[5px] mb-[10px] font-semibold">Consult Now > </p></Link>
        </div>

        <div className="md:hidden flex flex-col items-center bg-[#EEF0F3] rounded-[10px] lg:h-[400px] max-w-[290px] mb-[40px]">
            <img src={img} alt="hospitalImage" className="rounded-t-[10px]" />
            <p className="text-[14px] mt-[5px] font-medium text-center">{name}</p>
            <div className="flex items-center space-x-1 mt-[5px]">
                <img src="/Assets/LocationLogo.png" alt="locationLogo" className="w-[12px]" />
                <p className="text-[#5B6572] text-[12px]">{location}</p>
            </div>
            <Link to={'https://api.whatsapp.com/send/?phone=6375596006&text&type=phone_number&app_absent=0'}><p className="text-center text-[10px] text-[#E40443] underline mt-[5px] mb-[10px] font-semibold">Consult Now > </p></Link>
        </div>
        </>
    );
}

export default LocationCard;