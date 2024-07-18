import React, { useState, useEffect } from 'react';
import LocationCard from "./Cards/LocationCard";
import { LabPackages } from "../Database/LabPackagesData";
import PackageCard from "./Cards/PackageCard";
import { IndividualTests } from '../Database/IndividualTests';
import IndividualTestCard from './Cards/IndividualTestCard';
import { RadiologyTests } from '../Database/RadiologyTests';
import RadiologyTestCard from "./Cards/RadiologyTestCard";
import OurMediaMobile from "./OurMediaMobile";
import OurMedia from "./OurMedia";
import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import Achievements from "./Achievements"

const LabCardDetails = [
    {
        img: '/Assets/HomepageHos1.png',
        name: 'Clinical',
        location: 'Bangalore'
    },
    {
        img: '/Assets/HomepageHos2.png',
        name: 'Microbiology',
        location: 'Delhi'
    },
    {
        img: '/Assets/HomepageHos3.png',
        name: 'Haematology',
        location: 'Pune'
    },
    {
        img: '/Assets/HomepageHos4.png',
        name: 'Orthopedic',
        location: 'Mumbai'
    },
    {
        img: '/Assets/HomepageHos1.png',
        name: 'Clinical',
        location: 'Bangalore'
    },
    {
        img: '/Assets/HomepageHos2.png',
        name: 'Microbiology',
        location: 'Delhi'
    },
    {
        img: '/Assets/HomepageHos3.png',
        name: 'Haematology',
        location: 'Pune'
    },
    {
        img: '/Assets/HomepageHos4.png',
        name: 'Orthopedic',
        location: 'Mumbai'
    },
];

const Labs = (props) => {
    const [viewPackages, setViewPackages] = useState(false);
    const [viewIndividual, setViewIndividual] = useState(false);
    const [viewRadiology, setViewRadiology] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredPackages, setFilteredPackages] = useState(LabPackages);
    const [filteredIndividualTests, setFilteredIndividualTests] = useState(IndividualTests);
    const [filteredRadiologyTests, setFilteredRadiologyTests] = useState(RadiologyTests);


    useEffect(() => {
        if (searchQuery) {
            const packageResults = LabPackages.filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.akaList.some(aka => aka.toLowerCase().includes(searchQuery.toLowerCase()))
            );
            setFilteredPackages(packageResults);

            const individualTestResults = IndividualTests.filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.testList.some(test => test.toLowerCase().includes(searchQuery.toLowerCase()))
            );
            setFilteredIndividualTests(individualTestResults);

            const radiologyTestResults = RadiologyTests.filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) 
            );
            setFilteredRadiologyTests(radiologyTestResults);
        } else {
            setFilteredPackages(LabPackages);
            setFilteredIndividualTests(IndividualTests);
            setFilteredRadiologyTests(RadiologyTests);
        }
    }, [searchQuery]);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <>
            <div className="hidden md:flex flex justify-between items-center px-[100px] pt-[30px]">
                <div className="flex text-[#1A1C1F] flex-col w-[40%] relative">
                    <img src="/Assets/PinkStar.png" alt="star" className="w-[30px] absolute left-[-30px]" />
                    <img src="/Assets/PinkStar.png" alt="star" className="w-[40px] absolute right-[30px] top-[10px]" />
                    <img src="/Assets/PinkStar.png" alt="star" className="w-[30px] absolute bottom-[-30px] right-[30px]" />
                    <div className="flex justify-start">
                        <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[130px] font-semibold text-[14px]">Lab Tests</div>
                    </div>
                    <p className="text-[40px] leading-tight mt-[30px] font-medium">Health Checkups Made Effortless</p>
                    <p className="text-[#5B6572] mt-[40px]">Get insights into your health with quick and accurate results.</p>
                    <div className="flex space-x-3 items-center mt-[30px]">
                        <div className="bg-[#E40443] text-center px-[6px] py-[4px] text-white rounded-[5px] w-[100px]">
                         <Link to={"/contact"}>
                            <p className="text-[14px] font-semibold">Book Now</p>
                            </Link> </div>
                        </div> 
                </div>
                <div className="lg: w-[60%] relative">
                    <img src="/Assets/labs.png" className="" alt="heroImage" />
                </div>
            </div>

            <div className="relative text-[#1A1C1F] md:hidden flex flex-col bg-white items-center px-[20px] py-[30px]">
                <div className="flex w-full justify-start">
                    <p className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[90px] font-semibold text-[12px]">Lab Tests</p>
                </div>
                <p className="text-start font-medium text-[24px] mt-[10px]">Health Checkups Made Effortless</p>
                <p className="text-[12px] w-full text-[#5B6572] mt-[10px]">Get insights into your health with quick and accurate results.</p>
                <img src="/Assets/labs.png" alt="HeroImage" className="w-full mt-[10px] " />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute left-10 top-[7%] w-[0px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute left-5 top-[10%] w-[20px] right-20" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute left-5 right-20 top-[50%] w-[0px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute left-8 top-[70%] w-[0px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute right-10 w-[20px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute right-20 top-[15%] w-[0px]" />
                <div className="flex items-center justify-between space-x-5 mt-[20px]">
                <Link to={"/contact"}>
                    <button className="text-white rounded-[5px] bg-[#E40443] px-[20px] py-[10px] text-[12px] font-semibold">Book Now</button>
                    </Link>
                </div>
            </div>

            <div className="md:hidden flex justify-center w-full relative">
                <div className="w-[60%] relative">
                    <input type="text" placeholder="Search for Lab Test" value={searchQuery} onChange={handleSearch} className="text-[12px] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px]" />
                    <img src="/Assets/SearchIcon.png" className="absolute right-[10px] bottom-[2px] w-[25px] h-[25px]" alt="icon" />
                </div>
            </div>

            <div className="hidden md:flex justify-center w-full py-4">
                <div className="flex items-center border rounded p-2 bg-white">
                    <input type="text" placeholder="Search for Lab Test" value={searchQuery} onChange={handleSearch} className="border-none outline-none px-2" />
                    <img src="/Assets/SearchIcon.png" className="w-[25px] h-[25px] ml-2" alt="icon" />
                </div>
            </div>

            {filteredIndividualTests.length > 0 && (
                <div className="w-full hidden md:inline-flex flex-col px-[100px] pb-[40px] mt-[50px]">
                    <div className="flex justify-between items-end relative">
                        <p className="text-[30px] text-[#1A1C1F] font-semibold">Individual Tests</p>
                    </div>

                    <div className="grid grid-cols-3 mt-[30px] gap-10">
                        {filteredIndividualTests.map((data, idx) => (
                            (viewIndividual || idx < 6) && <IndividualTestCard data={data} key={idx} />
                        ))}
                    </div>

                    {!viewIndividual && filteredIndividualTests.length > 6 && (
                        <div className="flex justify-center mt-[20px]">
                            <button onClick={() => setViewIndividual(true)} className="bg-[#E40443] text-center px-[6px] py-[4px] text-white rounded-[5px] w-[120px] font-semibold text-[14px]">View All</button>
                        </div>
                    )}
                </div>
            )}

            {filteredIndividualTests.length > 0 && (
                <div className="md:hidden px-[20px] pb-[30px] mt-[30px]">
                    <div className="flex justify-between items-end">
                        <p className="text-[18px] text-[#1A1C1F] font-medium">Individual Tests</p>
                    </div>

                    <div className="grid grid-cols-2 mt-[20px] gap-5">
                        {filteredIndividualTests.map((data, idx) => (
                            (viewIndividual || idx < 6) && <IndividualTestCard data={data} key={idx} />
                        ))}
                    </div>

                    {!viewIndividual && filteredIndividualTests.length > 6 && (
                        <div className="flex justify-center mt-[10px]">
                            <button onClick={() => setViewIndividual(true)} className="bg-[#E40443] text-center px-[6px] py-[6px] text-white rounded-[5px] w-[80px] font-semibold text-[10px]">View All</button>
                        </div>
                    )}
                </div>
            )}

            {filteredPackages.length > 0 && (
                <div className="hidden md:inline-flex w-full flex-col px-[100px] py-[40px]">
                    <p className="text-[30px] text-[#1A1C1F] font-semibold">Packages</p>
                    <div className="grid grid-cols-3 mt-[30px] gap-10">
                        {filteredPackages.map((data, idx) => (
                            // !viewPackages ? (idx < 6 ? <PackageCard data={data} key={idx} /> : null) : <PackageCard data={data} key={idx} />
                            (viewPackages || idx < 6) && <PackageCard data={data} key={idx} />
                        ))}
                    </div>
                    {!viewPackages && filteredPackages.length > 6 && (
                        <div className="flex justify-center mt-[20px]">
                            <button onClick={() => setViewPackages(true)} className="bg-[#E40443] text-center px-[6px] py-[4px] text-white rounded-[5px] w-[120px] font-semibold text-[14px]">View All</button>
                        </div>
                    )}
                </div>
            )}

            {filteredPackages.length > 0 && (
                <div className="md:hidden px-[20px] pb-[30px] mt-[30px]">
                    <div className="flex justify-between items-end">
                        <p className="text-[18px] text-[#1A1C1F] font-medium">Packages</p>
                    </div>

                    <div className="grid grid-cols-2 mt-[20px] gap-5">
                        {filteredPackages.map((data, idx) => (
                            (viewPackages || idx < 6) && <PackageCard data={data} key={idx} />
                        ))}
                    </div>

                    {!viewPackages && filteredPackages.length > 6 && (
                        <div className="flex justify-center mt-[10px]">
                            <button onClick={() => setViewPackages(true)} className="bg-[#E40443] text-center px-[6px] py-[6px] text-white rounded-[5px] w-[80px] font-semibold text-[10px]">View All</button>
                        </div>
                    )}
                </div>
            )}

            {filteredRadiologyTests.length > 0 && (
                <div className="hidden md:inline-flex w-full flex-col px-[100px] py-[40px]">
                    <p className="text-[30px] text-[#1A1C1F] font-semibold">Radiology Tests</p>
                    <div className="grid grid-cols-3 mt-[30px] gap-10">
                        {filteredRadiologyTests.map((data, idx) => (
                            (viewRadiology || idx < 6) && <RadiologyTestCard data={data} key={idx} />
                        ))}
                    </div>
                    {!viewRadiology && filteredRadiologyTests.length > 6 && (
                        <div className="flex justify-center mt-[20px]">
                            <button onClick={() => setViewRadiology(true)} className="bg-[#E40443] text-center px-[6px] py-[4px] text-white rounded-[5px] w-[120px] font-semibold text-[14px]">View All</button>
                        </div>
                    )}
                </div>
            )}

            {filteredRadiologyTests.length > 0 && (
                <div className="md:hidden px-[20px] mt-[30px]">
                    <div className="flex justify-between items-end">
                        <p className="text-[18px] text-[#1A1C1F] font-medium">Radiology Tests</p>
                    </div>

                    <div className="grid grid-cols-2 mt-[20px] gap-5">
                        {filteredRadiologyTests.map((data, idx) => (
                             (viewRadiology || idx < 6) && <RadiologyTestCard data={data} key={idx} />
                        ))}
                    </div>

                    {!viewRadiology && filteredRadiologyTests.length > 6  && (
                        <div className="flex justify-center mt-[10px]">
                            <button onClick={() => setViewRadiology(true)} className="bg-[#E40443] text-center px-[6px] py-[6px] text-white rounded-[5px] w-[80px] font-semibold text-[10px]">View All</button>
                        </div>
                    )}
                </div>
            )}

           
            <OurMedia />
            <OurMediaMobile />
             <Achievements />
        </>
    );
}

export default Labs;

