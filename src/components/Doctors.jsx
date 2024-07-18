import DoctorsCard from "./Cards/DoctorsCard";
import {useState, useEffect} from 'react';
import OurMedia from "./OurMedia";
import OurMediaMobile from './OurMediaMobile';
import Achievements from "./Achievements";

const SpecialitiesCardDetails = [
    {
        img: '/Assets/Healthconcernimages/HomePediatrician.png',
        tag: 'Pediatrician'
    },
    {
        img: '/Assets/Healthconcernimages/Homephysician.png',
        tag: 'Physician'
    },
    {
        img: '/Assets/Healthconcernimages/HomeGynaecologist.png',
        tag: 'Gynaecologist'
    },
    {
        img: '/Assets/Healthconcernimages/HomeDermatologist.png',
        tag: 'Dermatologist'
    },
    {
        img: '/Assets/Healthconcernimages/HomeOrthopedician.png',
        tag: 'Orthopedician'
    },
    {
        img: '/Assets/Healthconcernimages/HomeFertilitySpecialist.png',
        tag: 'Fertility-specialist'
    },
    {
        img: '/Assets/Healthconcernimages/HomeCardiologist.png',
        tag: 'Cardiologist'
    },
    {
        img: '/Assets/Healthconcernimages/HomeGeneralSurgeon2.png',
        tag: 'General surgeon'
    },
    {
        img: '/Assets/Healthconcernimages/HomeGastroenterologist.png',
        tag: 'Gastroenterologist'
    },
    {
        img: '/Assets/Healthconcernimages/HomePulmonologist.png',
        tag: 'Pulmonologist'
    },
    {
        img: '/Assets/Healthconcernimages/HomeOncologist2.png',
        tag: 'Oncologist'
    },
    {
        img: '/Assets/Healthconcernimages/HomeNeurosurgeon.png',
        tag: 'Neurosurgeon'
    },
    {
        img: '/Assets/Healthconcernimages/HomeUrologist.png',
        tag: 'Urologist'
    },
    {
        img: '/Assets/Healthconcernimages/HomeNephrologist2.png',
        tag: 'Nephrologist'
    },
    {
        img: '/Assets/Healthconcernimages/HomeNeurologist.png',
        tag: 'Neurologist'
    },
    {
        img: '/Assets/Healthconcernimages/HomeDiabetologist.png',
        tag: 'Diabetologist'
    },
    {
        img: '/Assets/Healthconcernimages/HomeEndocrinologist2.png',
        tag: 'Endocrinologist'
    },
    {
        img: '/Assets/Healthconcernimages/HomeAndrologist.png',
        tag: 'Andrologist'
    },
    {
        img: '/Assets/Healthconcernimages/HomePsychiatrist.png',
        tag: 'Psychiatrist'
    },
    {
        img: '/Assets/Healthconcernimages/HomeDentist.png',
        tag: 'Dentist'
    },
    {
        img: '/Assets/Healthconcernimages/HomePsychotherapist.png',
        tag: 'Psychotherapist'
    },
    {
        img: '/Assets/Healthconcernimages/HomeENTSpecialist.png',
        tag: 'ENT specialist'
    },
    {
        img: '/Assets/Healthconcernimages/HomePediatricNeurologist.png',
        tag: 'Pediatric neurologist'
    },
    {
        img: '/Assets/Healthconcernimages/HomeOphthalmologist.png',
        tag: 'Ophthalmologist'
    },
    {
        img: '/Assets/Healthconcernimages/HomeRheumatologist.png',
        tag: 'Rheumatologist'
    },
    {
        img: '/Assets/Healthconcernimages/HomePhysiotherapist.png',
        tag: 'Physiotherapist'
    },
    {
        img: '/Assets/Healthconcernimages/HomeSurgicalGastroenterologist.png',
        tag: 'Surgical gastroenterologist'
    },
];

const Doctors = () => {

    const [active, setActive] = useState(false);

    return (
        <>
            <div className="hidden md:inline-flex flex-col w-full px-[100px] py-[40px]">
                <div className="flex justify-center">
                    <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[230px] text-[14px] font-semibold">Major Specialities</div>
                </div>
                <div className="text-[24px] font-medium text-center mt-[10px]">Get On-demand Primary Healthcare</div>
                <div className="flex mt-[40px] grid grid-cols-6">
                    {
                        SpecialitiesCardDetails.map((card, idx) => {
                            if(!active)
                                return idx < 12 ? <DoctorsCard img={card.img} tag={card.tag} /> : null
                            else 
                                return <DoctorsCard img={card.img} tag={card.tag} />
                        })
                    }
                </div>

                {
                    !active ? (
                        <div className="flex justify-center ">
                            <button className="font-semibold text-[14px] text-white bg-[#E40443] rounded-[10px] px-[15px] py-[5px]" onClick={() => setActive(true)}>Load More</button>
                        </div>
                    ) : null
                }
            </div>

            <div className="md:hidden px-[20px] pt-[30px] pb-[10px]">
                <div className="flex justify-center ">
                    <p className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[240px] font-semibold text-[12px]">Major Specialities</p>
                </div>
                <div className="text-[24px] font-medium text-center mt-[10px]">Get On-demand Primary Healthcare</div>
                <div className="flex mt-[20px] grid grid-cols-3">
                    {
                        SpecialitiesCardDetails.map((card, idx) => {
                            if(!active)
                                return idx < 12 ? <DoctorsCard img={card.img} tag={card.tag} /> : null
                            else 
                                return <DoctorsCard img={card.img} tag={card.tag} />
                        })
                    }
                </div>

                {
                    !active ? (
                        <div className="flex justify-center ">
                            <button className="font-semibold text-[12px] text-white bg-[#E40443] rounded-[5px] px-[15px] py-[5px]" onClick={() => setActive(true)}>Load More</button>
                        </div>
                    ) : null
                }
            </div>
            <Achievements/>
            <OurMedia/>
            <OurMediaMobile/>

        </>
    );
}

export default Doctors;