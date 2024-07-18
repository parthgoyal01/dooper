const TestimonialCard = ({img, name, content}) => {
    return (
        <div className="rounded-[10px] border-[1px] border-[#EEF0F3] p-[10px] bg-[#FFFFFF] max-w-[350px] mx-auto mb-[40px]">
            <div className="border-b-[1px] p-[10px] border-b-[#EEF0F3] flex items-center">
                <img src={img} alt="userImage" className="w-[60px]" />
                <div className="ml-[15px] ">
                    <p className="text-[18px] font-medium">{name}</p>
                    <img src="/Assets/Stars.png" alt="stars" className="w-[110px] mt-[5px]" />
                </div>
            </div>
            <div className="text-[#1A1C1F] p-[10px] leading-[28.8px] text-[16px]">
                <p>{content}</p>
            </div>
        </div>
    );
}

export default TestimonialCard;

// import React, { useState } from 'react';

// const TestimonialCard = ({ img, name, content }) => {
//   const [expanded, setExpanded] = useState(false);

//   const words = content.split(' ');
//   const isLongContent = words.length > 50;

//   const displayContent = isLongContent && !expanded ? words.slice(0, 50).join(' ') + '...' : content;

//   return (
//     <div className="testimonial-card">
//       <img src={img} alt={`${name}'s picture`} className="testimonial-img" />
//       <p className="testimonial-name">{name}</p>
//       <p className="testimonial-content">{displayContent}</p>
//       {isLongContent && (
//         <button onClick={() => setExpanded(!expanded)} className="view-more-btn">
//           {expanded ? 'View Less' : 'View More'}
//         </button>
//       )}
//     </div>
//   );
// };

// export default TestimonialCard;
