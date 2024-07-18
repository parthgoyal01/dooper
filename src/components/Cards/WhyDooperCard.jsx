import {Link} from 'react-router-dom';

const WhyDooperCard = ({img, name, content}) => {
    return (
        <>
            <div className="hidden md:inline-flex flex-col p-[20px] border-[2px] border-[#D0D4D9] rounded-[10px] flex flex-col item-center w-full">
                <div className="flex justify-center"><img src={img} alt="community" className="w-[50px]" /></div>
                <p className="text-center mt-[10px] text-[18px] font-semibold">{name}</p>
                <p className="text-center text-[#5B6572] mt-[10px]">{content}</p>
                <Link to={'/#'}><p className="text-center text-[14px] text-[#E40443] mt-[10px] font-semibold underline">Consult Now > </p></Link>
            </div>
            <div className="md:hidden p-[20px] border-[2px] border-[#D0D4D9] rounded-[10px] flex flex-col item-center max-w-[390px]">
                <div className="flex justify-center"><img src={img} alt="community" className="w-[50px]" /></div>
                <p className="text-center mt-[10px] text-[16px] font-medium">{name}</p>
                <p className="text-center text-[#5B6572] mt-[10px] text-[12px]">{content}</p>
                <Link to={'/#'}><p className="text-center text-[14px] text-[#E40443] mt-[20px] font-semibold underline">Consult Now > </p></Link>
            </div>
        </>
    );
}

export default WhyDooperCard;