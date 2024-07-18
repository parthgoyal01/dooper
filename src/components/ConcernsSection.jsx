import React, { useState } from 'react';
import DoctorsCard from './Cards/DoctorsCard';

const SpecialitiesCardDetails = [
    {
        img: "/Assets/Healthconcernimages/Fever.png",
        tag: "Fever",
    },
    {
        img: "/Assets/Healthconcernimages/blocked_nose.png",
        tag: "Blocked Nose",
    },
    {
        img: "/Assets/Healthconcernimages/cough.png",
        tag: "Cough",
    },
    {
        img: "/Assets/Healthconcernimages/headache.png",
        tag: "Headache",
    },
    {
        img: "/Assets/Healthconcernimages/vomiting_nausea.png",
        tag: "Vomiting",
    },
    {
        img: "/Assets/Healthconcernimages/hairfall.png",
        tag: "Hairfall",
    },
    {
        img: "/Assets/Healthconcernimages/dry_skin.png",
        tag: "Dry-skin",
    },
    {
        img: "/Assets/Healthconcernimages/abdominal_pain.png",
        tag: "Abdominal pain",
    },
    {
        img: "/Assets/Healthconcernimages/Diabetes.png",
        tag: "Diabetes",
    },
    {
        img: '/Assets/Healthconcernimages/runny_nose.png',
        tag: 'Runny nose'
    },
    {
        img: '/Assets/Healthconcernimages/throat_pain.png',
        tag: 'Throat pain'
    },
    {
        img: '/Assets/Healthconcernimages/loose_motion.png',
        tag: 'Loose motion'
    },
    {
        img: '/Assets/Healthconcernimages/constipation.png',
        tag: 'Constipation'
    },
    {
        img: '/Assets/Healthconcernimages/gas.png',
        tag: 'Gas'
    },
    {
        img: '/Assets/Healthconcernimages/high_cholesterol.png',
        tag: 'High cholesterol'
    },
    {
        img: '/Assets/Healthconcernimages/High_BP.png',
        tag: 'High BP'
    },
    {
        img: '/Assets/Healthconcernimages/Low_BP.png',
        tag: 'Low BP'
    },
    {
        img: '/Assets/Healthconcernimages/back_pain.png',
        tag: 'Back pain'
    },
    {
        img: '/Assets/Healthconcernimages/migraine.png',
        tag: 'Migraine'
    },
    {
        img: '/Assets/Healthconcernimages/acne.png',
        tag: 'Acne'
    },
    {
        img: '/Assets/Healthconcernimages/obesity.png',
        tag: 'Obesity'
    },
    {
        img: '/Assets/Healthconcernimages/rashes.png',
        tag: 'Rashes'
    },
    {
        img: '/Assets/Healthconcernimages/period_related_issues.png',
        tag: 'Period-related issues'
    },
    {
        img: '/Assets/Healthconcernimages/erectile_dysfunction.png',
        tag: 'Erectile dysfunction'
    },
    {
        img: "/Assets/Healthconcernimages/nausea.png",
        tag: "Nausea",
    },
];

export const concernsSectionData = {
    name: "Common Health Concerns",
    tags: SpecialitiesCardDetails.map(card => card.tag),
    description: "Get On-demand Primary Healthcare for common health issues such as fever, blocked nose, cough, headache, vomiting, hairfall, dry skin, abdominal pain, and more.",
    // Add more searchable fields if necessary
};

const ConcernsSection = ({ searchQuery }) => {
    const [active, setActive] = useState(false);

    const sectionMatchesQuery = concernsSectionData.name.toLowerCase().includes(searchQuery.toLowerCase());

    const filteredSpecialities = SpecialitiesCardDetails.filter(card => 
        sectionMatchesQuery || card.tag.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="hidden md:inline-flex flex-col w-full px-[100px] py-[40px]">
                <div className="flex justify-center">
                    <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[230px] text-[14px] font-semibold">Common Health Concerns</div>
                </div>
                <div className="text-[24px] font-medium text-center mt-[10px]">Get On-demand Primary Healthcare</div>
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
            <div className="md:hidden px-[20px] pt-[0px] pb-[10px]">
                <div className="flex justify-center ">
                    <p className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[240px] font-semibold text-[12px]">Common Health Concerns</p>
                </div>
                <div className="text-[24px] font-medium text-center mt-[10px]">Get On-demand Primary Healthcare</div>
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
};

export default ConcernsSection;


























