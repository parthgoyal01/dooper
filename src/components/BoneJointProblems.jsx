import React, { useState } from 'react';
import DoctorsCard from './Cards/DoctorsCard';

const SpecialitiesCardDetails = [
    {
        img: '/Assets/Healthconcernimages/back_pain.png',
        tag: 'Back pain'
    },
    {
        img: '/Assets/Healthconcernimages/neck_pain.png',
        tag: 'Neck pain'
    },
    {
        img: '/Assets/Healthconcernimages/lower_backpain.png',
        tag: 'Lower backpain'
    },
    {
        img: '/Assets/Healthconcernimages/elbow_pain.png',
        tag: 'Elbow pain'
    },
    {
        img: '/Assets/Healthconcernimages/joint_pains.png',
        tag: 'Joint pains'
    },
    {
        img: '/Assets/Healthconcernimages/sprain.png',
        tag: 'Sprain'
    },
    {
        img: '/Assets/Healthconcernimages/arthritis.png',
        tag: 'Arthritis'
    },
    {
        img: '/Assets/Healthconcernimages/heel_pain.png',
        tag: 'Heel pain'
    },
    {
        img: '/Assets/Healthconcernimages/fracture.png',
        tag: 'Fracture'
    },
    {
        img: '/Assets/Healthconcernimages/left_knee_pain.png',
        tag: 'Left knee pain'
    },
    {
        img: '/Assets/Healthconcernimages/right_knee_pain.png',
        tag: 'Right knee pain'
    },
    {
        img: '/Assets/Healthconcernimages/left_shoulder_pain.png',
        tag: 'Left shoulder pain'
    },
    {
        img: '/Assets/Healthconcernimages/right_shoulder_pain.png',
        tag: 'Right shoulder pain'
    },
];

export const boneJointProblemsData = {
    name: "Bone & Joint Problems",
    tags: SpecialitiesCardDetails.map(card => card.tag),
};

const BoneJointProblems = ({ searchQuery }) => {
    const [active, setActive] = useState(false);
    const sectionMatchesQuery = boneJointProblemsData.name.toLowerCase().includes(searchQuery.toLowerCase());

    const filteredSpecialities = SpecialitiesCardDetails.filter(card => 
        sectionMatchesQuery || card.tag.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="hidden md:inline-flex flex-col w-full px-[100px] py-[40px]">
                <div className="flex justify-center">
                    <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[230px] text-[14px] font-semibold">Bone & Joint Problems</div>
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
                    <p className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[240px] font-semibold text-[12px]">Bone & Joint Problems</p>
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

export default BoneJointProblems;

