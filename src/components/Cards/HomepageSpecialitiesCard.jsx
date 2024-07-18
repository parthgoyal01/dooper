import {Link} from 'react-router-dom';
const HomepageSpecialitiesCard = ({img, tag}) => {
    return (
        <>
        <div className="hidden lg:inline-flex w-[17%] min-h-[220px] flex flex-col justify-between">
            <div>
                <img src={img} alt="tagImage" className="rounded-[10px]" />
                <p className="text-[16px] text-center mt-[10px]">{tag}</p>
            </div>
            <Link to={'https://api.whatsapp.com/send/?phone=6375596006&text&type=phone_number&app_absent=0'}><p className="text-center text-[13px] text-[#E40443] underline font-semibold">Consult Now > </p></Link>
        </div>
        <div className="lg:hidden w-[30%] min-h-[170px] flex flex-col justify-between">
            <div>
                <img src={img} alt="tagImage" className="rounded-[10px]" />
                <p className="text-[13px] text-center mt-[10px]">{tag}</p>
            </div>
            <Link to={'https://api.whatsapp.com/send/?phone=6375596006&text&type=phone_number&app_absent=0'}><p className="text-center text-[12px] text-[#E40443] underline font-semibold">Consult Now > </p></Link>
        </div>
        </>
    );
}

export default HomepageSpecialitiesCard;