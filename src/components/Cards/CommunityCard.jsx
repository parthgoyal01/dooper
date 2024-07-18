import {Link} from 'react-router-dom';

const CommunityCards = ({img, name, content}) => {
    return (
        <div className="p-[20px] border-[2px] border-[#D0D4D9] rounded-[10px] flex flex-col item-center md:w-[390px]">
            <div className="flex justify-center"><img src={img} alt="community" className="w-[50px]" /></div>
            <p className="text-center mt-[10px] font-medium">{name}</p>
            <p className="text-center text-[#5B6572] mt-[10px]">{content}</p>
            <Link to={'/contact'}><p className="text-center text-[14px] text-[#E40443] mt-[10px] font-semibold underline">Join Now > </p></Link>
        </div>
    );
}

export default CommunityCards;