import React, { useState } from 'react';
import DoctorsCard from './Cards/DoctorsCard';

const SpecialitiesCardDetails = [
    {
        img: "/Assets/Healthconcernimages/acne.png",
        tag: "Pimples/acne",
    },
    {
        img: "/Assets/Healthconcernimages/reddish_skin.png",
        tag: "Reddish skin",
    },
    {
        img: '/Assets/Healthconcernimages/rashes.png',
        tag: 'Rashes'
    },
    {
        img: '/Assets/Healthconcernimages/spots_on_skin.png',
        tag: 'Spots on skin'
    },
    {
        img: '/Assets/Healthconcernimages/itching.png',
        tag: 'Itching'
    },
    {
        img: '/Assets/Healthconcernimages/dark_circles.png',
        tag: 'Dark circles'
    },
    {
        img: '/Assets/Healthconcernimages/hairfall.png',
        tag: 'Hairfall'
    },
    {
        img: '/Assets/Healthconcernimages/dry_scalp_dandruff.png',
        tag: 'Dry scalp/dandruff'
    },
];

export const skinHealthIssuesData = {
    name: "Skin & Health Issues",
    tags: SpecialitiesCardDetails.map(card => card.tag),
};

const SkinHealthIssues = ({ searchQuery }) => {
    const [active, setActive] = useState(false);
    const sectionMatchesQuery = skinHealthIssuesData.name.toLowerCase().includes(searchQuery.toLowerCase());

    const filteredSpecialities = SpecialitiesCardDetails.filter(card => 
        sectionMatchesQuery || card.tag.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <>
            <div className="hidden md:inline-flex flex-col w-full px-[100px] py-[40px]">
                <div className="flex justify-center">
                    <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[230px] text-[14px] font-semibold">Skin & Health Issues</div>
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
                    <p className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[240px] font-semibold text-[12px]">Skin & Health Issues</p>
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

export default SkinHealthIssues;

























