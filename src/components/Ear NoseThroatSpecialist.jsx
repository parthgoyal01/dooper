import React, { useState } from 'react';
import DoctorsCard from './Cards/DoctorsCard';

const SpecialitiesCardDetails = [
    
    {
        img: '/Assets/Healthconcernimages/Ear_Discharge.png',
        tag: 'Ear discharge'
    },
    {
        img: '/Assets/Healthconcernimages/ear_pain.png',
        tag: 'Ear pain'
    },
    {
        img: '/Assets/Healthconcernimages/mouth_breathing.png',
        tag: 'Mouth breathing'
    },
    {
        img: '/Assets/Healthconcernimages/ringing_in_ears.png',
        tag: 'Ringing in ears'
    },
    {
        img: '/Assets/Healthconcernimages/swelling_over_the_neck.png',
        tag: 'Swelling over the neck'
    },
    {
        img: '/Assets/Healthconcernimages/ear_congestion.png',
        tag: 'Ear congestion'
    },
    {
        img: '/Assets/Healthconcernimages/hearing_aids.png',
        tag: 'Hearing aids'
    },
    {
        img: '/Assets/Healthconcernimages/hearing_loss.png',
        tag: 'Hearing loss'
    },

];
export const earNoseThroatSpecialistData = {
    name: "Ear Nose Throat Specialist",
    tags: SpecialitiesCardDetails.map(card => card.tag),
};
const EarNoseThroatSpecialist = ({ searchQuery }) =>{
    const [active, setActive] = useState(false);
    const sectionMatchesQuery = earNoseThroatSpecialistData.name.toLowerCase().includes(searchQuery.toLowerCase());

    const filteredSpecialities = SpecialitiesCardDetails.filter(card => 
        sectionMatchesQuery || card.tag.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return(
        <>
        <div className="hidden md:inline-flex flex-col w-full px-[100px] py-[40px]">
        <div className="flex justify-center">
            <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[230px] text-[14px] font-semibold">Ear Nose Throat Specialist</div>
        </div>
        {/* <div className="text-[24px] font-medium text-center mt-[10px]">Get On-demand Primary Healthcare</div> */}
        <div className="flex mt-[40px] grid grid-cols-6">
        {
                        filteredSpecialities.map((card, idx) => {
                            if (!active)
                                return idx < 12 ? <DoctorsCard key={idx} img={card.img} tag={card.tag} /> : null
                            else
                                return <DoctorsCard key={idx} img={card.img} tag={card.tag} />
                        })
                    }
                </div>
                {
                    !active && filteredSpecialities.length > 12 ? (
                        <div className="flex justify-center ">
                            <button className="font-semibold text-[14px] text-white bg-[#E40443] rounded-[10px] px-[15px] py-[5px]" onClick={() => setActive(true)}>Load More</button>
                        </div>
                    ) : null
                }
        </div>
        
        <div className="md:hidden px-[20px] pt-[30px] pb-[10px]">
        <div className="flex justify-center ">
            <p className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[240px] font-semibold text-[12px]">Ear Nose Throat Specialist</p>
        </div>
        {/* <div className="text-[24px] font-medium text-center mt-[10px]">Get On-demand Primary Healthcare</div> */}
        <div className="flex mt-[20px] grid grid-cols-3">
        {
                        filteredSpecialities.map((card, idx) => {
                            if (!active)
                                return idx < 12 ? <DoctorsCard key={idx} img={card.img} tag={card.tag} /> : null
                            else
                                return <DoctorsCard key={idx} img={card.img} tag={card.tag} />
                        })
                    }
                </div>
                {
                    !active && filteredSpecialities.length > 12 ? (
                        <div className="flex justify-center ">
                            <button className="font-semibold text-[12px] text-white bg-[#E40443] rounded-[5px] px-[15px] py-[5px]" onClick={() => setActive(true)}>Load More</button>
                        </div>
                    ) : null
                }
        </div>
        </>
    )
} 

export default EarNoseThroatSpecialist;