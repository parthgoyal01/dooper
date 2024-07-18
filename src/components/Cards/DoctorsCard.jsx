import {Link} from 'react-router-dom';

const DoctorsCard = ({img, tag}) => {
    return (
        <>
        <div className="hidden md:inline-flex flex-col mr-[30px] mb-[30px]">
            <img src={img} alt="tagImage" className="rounded-[10px]" />
            <p className="text-[16px] text-center mt-[10px] font-medium">{tag}</p>
            <Link to={'https://api.whatsapp.com/send/?phone=6375596006&text&type=phone_number&app_absent=0'}><p className="text-center text-[12px] text-[#E40443] underline font-semibold">Consult Now > </p></Link>
        </div>

        <div className="md:hidden mr-[30px] mb-[30px]">
            <img src={img} alt="tagImage" className="rounded-[10px]" />
            <p className="text-[12px] text-center mt-[10px] font-medium">{tag}</p>
            <Link to={'https://api.whatsapp.com/send/?phone=6375596006&text&type=phone_number&app_absent=0'}><p className="text-center text-[10px] text-[#E40443] underline font-semibold">Consult Now > </p></Link>
        </div>
        </>
    );
}

export default DoctorsCard;