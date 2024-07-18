import React, { useState } from 'react';
import DoctorsCard from './Cards/DoctorsCard';

const SpecialitiesCardDetails = [
    
    {
        img: '/Assets/Healthconcernimages/Tooth_sensitivity.png',
        tag: 'Tooth sensitivity'
    },
    {
        img: '/Assets/Healthconcernimages/missing_teeth.png',
        tag: 'Missing teeth'
    },
    {
        img: '/Assets/Healthconcernimages/Jaw_pain.png',
        tag: 'Jaw pain'
    },
    {
        img: '/Assets/Healthconcernimages/tootache.png',
        tag: 'Tootache'
    },{
        img: '/Assets/Healthconcernimages/dental_caries.png',
        tag: 'Dental caries'
    },
    {
        img: '/Assets/Healthconcernimages/red_and_bleeding_gums.png',
        tag: 'Red and Bleeding gums'
    },
    {
        img: '/Assets/Healthconcernimages/tooth_discolouration.png',
        tag: 'Tooth discolouration'
    },
    {
        img: '/Assets/Healthconcernimages/crooked_teeth.png',
        tag: 'Crooked teeth'
    },
    {
        img: '/Assets/Healthconcernimages/black_gums.png',
        tag: 'Black gums'
    },
    {
        img: '/Assets/Healthconcernimages/swollen_gums.png',
        tag: 'Swollen gums'
    },


];
export const dentistryData = {
    name: "Dentistry",
    tags: SpecialitiesCardDetails.map(card => card.tag),
};
const MentalHealthissues = ({ searchQuery }) =>{
    const [active, setActive] = useState(false);
    const sectionMatchesQuery = dentistryData.name.toLowerCase().includes(searchQuery.toLowerCase());

    const filteredSpecialities = SpecialitiesCardDetails.filter(card => 
        sectionMatchesQuery || card.tag.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return(
        <>
        <div className="hidden md:inline-flex flex-col w-full px-[100px] py-[40px]">
        <div className="flex justify-center">
            <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[230px] text-[14px] font-semibold">Dentistry</div>
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
            <p className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[240px] font-semibold text-[12px]">Dentistry</p>
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

export default MentalHealthissues;