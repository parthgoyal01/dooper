import {Link} from 'react-router-dom';

const DoctorCard = ({img, name, designation, experience, location}) => {
    return (
        <div className="flex flex-col items-center max-h-[400px] max-w-[290px] bg-[#EEF0F3] rounded-[10px]">
            <img src={img} alt="hospitalImage" className="" />
            <p className="text-[18px] mt-[5px] font-medium">{name}</p>
            <div className="">
                <p className="text-[#5B6572] text-center text-[14px]">{designation}</p>
                <p className="text-[#5B6572] text-center">{experience}</p>
            </div>
            <Link to={'https://api.whatsapp.com/send/?phone=6375596006&text&type=phone_number&app_absent=0'}><p className="font-semibold text-center text-[12px] text-[#E40443] underline mt-[5px] mb-[10px]">Consult Now > </p></Link>
        </div>
    );
}

export default DoctorCard;