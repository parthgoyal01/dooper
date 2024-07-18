import React, { useState, useEffect } from 'react';
import DoctorsCard from "./Cards/DoctorsCard";
import OurMedia from "./OurMedia";
import OurMediaMobile from "./OurMediaMobile";
import Achievements from "./Achievements";
import ConcernsSection, { concernsSectionData } from './ConcernsSection'; 
import WomenHealth, { womenHealthData } from "./WomenHealth";
import SkinHealthIssues, { skinHealthIssuesData } from './SkinHealthIssues';
import BoneJointProblems, { boneJointProblemsData } from './BoneJointProblems';
import SportsRelatedInjuries, { sportsRelatedInjuriesData } from './SportsRelatedInjuries';
import HeartRelatedProblems, { heartRelatedProblemsData } from './HeartRelatedProblems';
import FertilityRelatedProblems, { fertilityRelatedProblemsData } from './FertilityRelatedProblems';
import SurgeryRelatedIssues, { surgeryRelatedIssuesData } from './SurgeryRelatedIssues';
import Neurosurgeryrelatedissues, { neurosurgeryRelatedIssuesData } from './Neurosurgeryrelatedissues';
import Cancerrelatedissues, { cancerRelatedIssuesData } from './Cancerrelatedissues';
import UrinaryTractIssues, { urinaryTractIssuesData } from './UrinaryTractIssues';
import LungRelatedIssues, { lungRelatedIssuesData } from './LungRelatedIssues';
import KidneyRelatedIssues, { kidneyRelatedIssuesData } from './KidneyRelatedIssues';
import DiabetesRelatedIssues, { diabetesRelatedIssuesData } from './DiabetesRelatedIssues';
import EndocrinologyRelatedIssues, { endocrinologyRelatedIssuesData } from './EndocrinologyRelatedIssues';
import EarNoseThroatSpecialist, { earNoseThroatSpecialistData } from './Ear NoseThroatSpecialist';
import GastroenterologyRelatedIssues, { gastroenterologyRelatedIssuesData } from './GastroenterologyRelatedIssues';
import NerveandBrainrelatedIssues, { nerveAndBrainRelatedIssuesData } from './NerveandBrainrelatedIssues';
import ClinicalGenetics, { clinicalGeneticsData } from './ClinicalGenetics';
import MalesexualHealth, { maleSexualHealthData } from './MalesexualHealth';
import MentalHealthissues, { mentalHealthIssuesData } from './MentalHealthissues';
import Dentistry, { dentistryData } from './Dentistry';
import Rheumatology, { rheumatologyData } from './Rheumatology';
import EyeRelatedIssues, { eyeRelatedIssuesData } from './EyeRelatedIssues';
import SurgicalGastroenterology, { surgicalGastroenterologyData } from './SurgicalGastroenterology';
import Physiotherapist, { physiotherapistData } from './Physiotherapist';

const Doctors = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredComponents, setFilteredComponents] = useState([]);

    const components = [
        { name: concernsSectionData.name, data: concernsSectionData, component: <ConcernsSection searchQuery={searchQuery} /> },
        { name: womenHealthData.name, data: womenHealthData, component: <WomenHealth searchQuery={searchQuery} /> },
        { name: skinHealthIssuesData.name, data: skinHealthIssuesData, component: <SkinHealthIssues searchQuery={searchQuery} /> },
        { name: boneJointProblemsData.name, data: boneJointProblemsData, component: <BoneJointProblems searchQuery={searchQuery} /> },
        { name: sportsRelatedInjuriesData.name, data: sportsRelatedInjuriesData, component: <SportsRelatedInjuries searchQuery={searchQuery} /> },
        { name: heartRelatedProblemsData.name, data: heartRelatedProblemsData, component: <HeartRelatedProblems searchQuery={searchQuery} /> },
        { name: fertilityRelatedProblemsData.name, data: fertilityRelatedProblemsData, component: <FertilityRelatedProblems searchQuery={searchQuery} /> },
        { name: surgeryRelatedIssuesData.name, data: surgeryRelatedIssuesData, component: <SurgeryRelatedIssues searchQuery={searchQuery} /> },
        { name: neurosurgeryRelatedIssuesData.name, data: neurosurgeryRelatedIssuesData, component: <Neurosurgeryrelatedissues searchQuery={searchQuery} /> },
        { name: cancerRelatedIssuesData.name, data: cancerRelatedIssuesData, component: <Cancerrelatedissues searchQuery={searchQuery} /> },
        { name: urinaryTractIssuesData.name, data: urinaryTractIssuesData, component: <UrinaryTractIssues searchQuery={searchQuery} /> },
        { name: lungRelatedIssuesData.name, data: lungRelatedIssuesData, component: <LungRelatedIssues searchQuery={searchQuery} /> },
        { name: kidneyRelatedIssuesData.name, data: kidneyRelatedIssuesData, component: <KidneyRelatedIssues searchQuery={searchQuery} /> },
        { name: diabetesRelatedIssuesData.name, data: diabetesRelatedIssuesData, component: <DiabetesRelatedIssues searchQuery={searchQuery} /> },
        { name: endocrinologyRelatedIssuesData.name, data: endocrinologyRelatedIssuesData, component: <EndocrinologyRelatedIssues searchQuery={searchQuery} /> },
        { name: earNoseThroatSpecialistData.name, data: earNoseThroatSpecialistData, component: <EarNoseThroatSpecialist searchQuery={searchQuery} /> },
        { name: gastroenterologyRelatedIssuesData.name, data: gastroenterologyRelatedIssuesData, component: <GastroenterologyRelatedIssues searchQuery={searchQuery} /> },
        { name: nerveAndBrainRelatedIssuesData.name, data: nerveAndBrainRelatedIssuesData, component: <NerveandBrainrelatedIssues searchQuery={searchQuery} /> },
        { name: clinicalGeneticsData.name, data: clinicalGeneticsData, component: <ClinicalGenetics searchQuery={searchQuery} /> },
        { name: maleSexualHealthData.name, data: maleSexualHealthData, component: <MalesexualHealth searchQuery={searchQuery} /> },
        { name: mentalHealthIssuesData.name, data: mentalHealthIssuesData, component: <MentalHealthissues searchQuery={searchQuery} /> },
        { name: dentistryData.name, data: dentistryData, component: <Dentistry searchQuery={searchQuery} /> },
        { name: rheumatologyData.name, data: rheumatologyData, component: <Rheumatology searchQuery={searchQuery} /> },
        { name: eyeRelatedIssuesData.name, data: eyeRelatedIssuesData, component: <EyeRelatedIssues searchQuery={searchQuery} /> },
        { name: surgicalGastroenterologyData.name, data: surgicalGastroenterologyData, component: <SurgicalGastroenterology searchQuery={searchQuery} /> },
        { name: physiotherapistData.name, data: physiotherapistData, component: <Physiotherapist searchQuery={searchQuery} /> },       
    ];

    useEffect(() => {
        if (searchQuery) {
            const results = components.filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.data.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
            );
            setFilteredComponents(results);
        } else {
            setFilteredComponents(components);
        }
    }, [searchQuery]);

    return (
        <>  
            <div className="md:hidden flex justify-center w-full relative my-[30px]">
                <div className="w-[60%] relative">
                    <input
                        type="text"
                        placeholder="Search for Health Issues"
                        className="text-[12px] border-[1px] border-[#DBDADE] rounded-[20px] w-full h-[30px] pl-[20px] pr-[30px]"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <img src="/Assets/SearchIcon.png" className="absolute right-[10px] bottom-[5px] w-[20px] h-[20px]" alt="icon" />
                </div>
            </div>
            <div className="hidden md:flex justify-center w-full mt-[30px] relative">
                <div className="w-[30%] relative">
                    <input
                        type="text"
                        placeholder="Search for Health Issues"
                        className="text-[16px] border-[1px] border-[#DBDADE] rounded-[40px] w-full h-[40px] pl-[30px] pr-[20px]"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <img src="/Assets/SearchIcon.png" className="absolute right-[30px] bottom-[5px] w-[25px] h-[25px]" alt="icon" />
                </div>
            </div>
            {filteredComponents.map((item, index) => (
                <div key={index}>{item.component}</div>
            ))}
            {/* New section for both mobile and large screens */}
            {/* Larger screens */}
            <div className="hidden md:flex flex-col py-10 px-16">
                <div className="flex flex-row items-center mb-8">
                    <p className="w-1/3 font-medium">Our Media Coverages</p>
                    <div className="border-t border-gray-300 flex-grow"></div>
                </div>
                <div className="flex justify-between space-x-4">
                    <img src="/Assets/AboutUsBanner1.png" alt="banner" className='w-1/6' />
                    <img src="/Assets/AboutUsBanner2.png" alt="banner" className='w-1/6' />
                    <img src="/Assets/AboutUsBanner3.png" alt="banner" className='w-1/6' />
                    <img src="/Assets/AboutUsBanner4.png" alt="banner" className='w-1/6' />
                    <img src="/Assets/AboutUsBanner5.png" alt="banner" className='w-1/6' />
                </div>
            </div>

            {/* Mobile devices */}
            <div className="md:hidden py-8 px-5 bg-white mt-5">
                <div className="flex flex-row items-center mb-5">
                    <p className="font-semibold text-sm">Our Media Coverages</p>
                </div>
                <div className="flex justify-between space-x-2 overflow-hidden relative">
                    <img src="/Assets/AboutUsBanner1.png" alt="banner" className='w-1/3 transition-transform duration-1000 ease-in-out slide-image' />
                    <img src="/Assets/AboutUsBanner2.png" alt="banner" className='w-1/3 transition-transform duration-1000 ease-in-out slide-image' />
                    <img src="/Assets/AboutUsBanner3.png" alt="banner" className='w-1/3 transition-transform duration-1000 ease-in-out slide-image' />
                    <img src="/Assets/AboutUsBanner4.png" alt="banner" className='w-1/3 transition-transform duration-1000 ease-in-out slide-image' />
                    <img src="/Assets/AboutUsBanner5.png" alt="banner" className='w-1/3 transition-transform duration-1000 ease-in-out slide-image' />
                </div>
            </div>
            <Achievements/>
            <OurMedia/>
            <OurMediaMobile/>
        </>
    );
}

export default Doctors;


