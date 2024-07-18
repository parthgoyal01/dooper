import React, { useState } from 'react';
import DoctorsCard from './Cards/DoctorsCard';

const SpecialitiesCardDetails = [
    
    {
        img: '/Assets/Healthconcernimages/Brain_tumor.png',
        tag: 'Brain tumor'
    },
    {
        img: '/Assets/Healthconcernimages/head_and_neck_tumors.png',
        tag: 'Head and Neck tumors'
    },
    {
        img: '/Assets/Healthconcernimages/lung_cancer.png',
        tag: 'lung cancer'
    },
    {
        img: '/Assets/Healthconcernimages/gastrointestinal_cancer.png',
        tag: 'Gastrointestinal cancer'
    },
    {
        img: '/Assets/Healthconcernimages/urogenital_cancer.png',
        tag: 'Urogenital cancer'
    },
    {
        img: '/Assets/Healthconcernimages/spinal_tumors.png',
        tag: 'Spinal tumors'
    },
    {
        img: '/Assets/Healthconcernimages/blood_cancer.png',
        tag: 'Blood cancer'
    },
    {
        img: '/Assets/Healthconcernimages/skin_cancer.png',
        tag: 'Skin cancer'
    },
    {
        img: '/Assets/Healthconcernimages/bone_and_muscle_cancer.png',
        tag: 'Bone and Muscle cancer'
    },
    {
        img: '/Assets/Healthconcernimages/endocrine_cancer.png',
        tag: 'Endocrine cancer'
    },
    {
        img: '/Assets/Healthconcernimages/breast_and_gynaecological_problems.png',
        tag: 'Breast and Gynaecological problems'
    },
    {
        img: '/Assets/Healthconcernimages/chemotherapy_related_queries.png',
        tag: 'Chemotherapy related queries'
    },
    {
        img: '/Assets/Healthconcernimages/renal_cancer.png',
        tag: 'Renal cancer'
    },
];
export const cancerRelatedIssuesData = {
    name: "Cancer Related Issues",
    tags: SpecialitiesCardDetails.map(card => card.tag),
};
const Cancerrelatedissues = ({ searchQuery }) =>{
    const [active, setActive] = useState(false);
    const sectionMatchesQuery = cancerRelatedIssuesData.name.toLowerCase().includes(searchQuery.toLowerCase());

    const filteredSpecialities = SpecialitiesCardDetails.filter(card => 
        sectionMatchesQuery || card.tag.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return(
        <>
        <div className="hidden md:inline-flex flex-col w-full px-[100px] py-[40px]">
        <div className="flex justify-center">
            <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[230px] text-[14px] font-semibold">Cancer Related Issues</div>
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
            <p className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[240px] font-semibold text-[12px]">Cancer Related Issues</p>
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

export default Cancerrelatedissues;