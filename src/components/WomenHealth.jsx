import React, { useState } from 'react';
import DoctorsCard from './Cards/DoctorsCard';

const SpecialitiesCardDetails = [
    {
        img: "/Assets/Healthconcernimages/period_related_issues.png",
        tag: "Period-related issues",
    },
    {
        img: "/Assets/Healthconcernimages/pregnancy_related_issue.png",
        tag: "Pregnancy-related issue",
    },
    {
        img: "/Assets/Healthconcernimages/breast_scan.png",
        tag: "Breast scan",
    },
    {
        img: "/Assets/Healthconcernimages/excessive_bleeding.png",
        tag: "Excessive bleeding",
    },
    {
        img: "/Assets/Healthconcernimages/bleeding_after_sex.png",
        tag: "Bleeding after sex",
    },
    {
        img: "/Assets/Healthconcernimages/vomiting_nausea.png",
        tag: "Vomiting/nausea",
    },
    {
        img: "/Assets/Healthconcernimages/thyroid_problems.png",
        tag: "Thyroid problems",
    },
];

export const womenHealthData = {
    name: "Women's Health",
    tags: SpecialitiesCardDetails.map(card => card.tag),
};

const ConcernsSection = ({ searchQuery }) => {
    const [active, setActive] = useState(false);

    const sectionMatchesQuery = womenHealthData.name.toLowerCase().includes(searchQuery.toLowerCase());

    const filteredSpecialities = SpecialitiesCardDetails.filter(card => 
        sectionMatchesQuery || card.tag.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <>
            <div className="hidden md:inline-flex flex-col w-full px-[100px] py-[40px]">
                <div className="flex justify-center">
                    <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[230px] text-[14px] font-semibold">Women's Health</div>
                </div>
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
                    <p className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[240px] font-semibold text-[12px]">Women's Health</p>
                </div>
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
    );
}

export default ConcernsSection;















