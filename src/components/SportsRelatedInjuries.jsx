import React, { useState } from 'react';
import DoctorsCard from './Cards/DoctorsCard';


const SpecialitiesCardDetails = [
    
    {
        img: "/Assets/Healthconcernimages/Wrist_injury.png",
        tag: "Wrist injury",
      },
      {
        img: "/Assets/Healthconcernimages/back_injury.png",
        tag: "Back injury",
      },
      {
        img: "/Assets/Healthconcernimages/hand_injury.png",
        tag: "Hand injury",
      },
      {
        img: "/Assets/Healthconcernimages/shoulder_injury.png",
        tag: "Shoulder injury",
      },
      {
        img: "/Assets/Healthconcernimages/neck_injury.png",
        tag: "Neck injury",
      },
      {
        img: "/Assets/Healthconcernimages/elbow_injury.png",
        tag: "Elbow injury",
      },
      {
        img: "/Assets/Healthconcernimages/knee_injury.png",
        tag: "Knee injury",
      },
      {
        img: "/Assets/Healthconcernimages/hip_injury.png",
        tag: "Hip injury",
      },
      {
        img: "/Assets/Healthconcernimages/return_to_play.png",
        tag: "Return to play",
      },
      {
          img: '/Assets/Healthconcernimages/foot_injury.png',
          tag: 'Foot injury'
      },
      {
          img: '/Assets/Healthconcernimages/shin_splints.png',
          tag: 'Shin splints'
      },
      {
          img: '/Assets/Healthconcernimages/ligament_tear.png',
          tag: 'Ligament tear'
      },
      {
          img: '/Assets/Healthconcernimages/achillies_tendon_injury.png',
          tag: 'Achillies tendon injury'
      },
      {
          img: '/Assets/Healthconcernimages/joint_dislocation.png',
          tag: 'Joint dislocation'
      },
      {
          img: '/Assets/Healthconcernimages/groin_pull.png',
          tag: 'Groin pull'
      },
      {
          img: '/Assets/Healthconcernimages/hamstring_injuries.png',
          tag: 'Hamstring injuries'
      },
      {
          img: '/Assets/Healthconcernimages/muscle_strain.png',
          tag: 'Muscle strain'
      },
      {
          img: '/Assets/Healthconcernimages/workout_injuries.png',
          tag: 'Workout injuries'
      },
      {
          img: '/Assets/Healthconcernimages/footwear_related_queries.png',
          tag: 'Footwear related queries'
      },
];
export const sportsRelatedInjuriesData = {
    name: "Sports Related Injuries",
    tags: SpecialitiesCardDetails.map(card => card.tag),
};
const SportsRelatedInjuries = ({ searchQuery }) =>{
    const [active, setActive] = useState(false);
    const sectionMatchesQuery = sportsRelatedInjuriesData.name.toLowerCase().includes(searchQuery.toLowerCase());

    const filteredSpecialities = SpecialitiesCardDetails.filter(card => 
        sectionMatchesQuery || card.tag.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return(
        <>
        <div className="hidden md:inline-flex flex-col w-full px-[100px] py-[40px]">
        <div className="flex justify-center">
            <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[230px] text-[14px] font-semibold">Sports Related Injuries</div>
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
            <p className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[240px] font-semibold text-[12px]">Sports Related Injuries</p>
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

export default SportsRelatedInjuries;
