import LocationCard from "./Cards/LocationCard";
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import OurMedia from "./OurMedia";
import OurMediaMobile from "./OurMediaMobile";
import Achievements from "./Achievements";
const LocationCardDetails = [
    {
        img: '/Assets/HomepageHos01.png',
        name: 'Maitri Hospital',
        location: 'Kota'
    },
    {
        img: '/Assets/HomepageHos02.png',
        name: 'ETHOOS Hospital',
        location: 'Kota'
    },
    {
        img: '/Assets/HomepageHos03.png',
        name: 'Radhakrishna critical care & general Hospital',
        location: 'Kota'
    },
    {
        img: '/Assets/HomepageHos04.png',
        name: 'Agrawal Eye & Skin Hospital',
        location: 'Kota'
    },
];

const Hospitals = (props) => {

    const [active, setActive] = useState(false);
    const [bar, setBar] = useState(6);

    return (
        <>
            <div className="hidden md:inline-flex flex-col w-full py-[40px] px-[100px]">
                <div className="flex justify-center">
                    <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[140px] font-semibold text-[14px]">Our Hospitals</div>
                </div>
                <div className="text-[24px] text-center mt-[20px] font-medium">Best Hospitals Network at your Service</div>

                <div className="grid grid-cols-4 flex justify-between mt-[40px]">
                    {
                        LocationCardDetails.map((card) => {
                            return <LocationCard img={card.img} name={card.name} location={card.location} />
                        })
                    }
                </div>
            </div>

            <div className="md:hidden pt-[30px] px-[20px]">
                <div className="flex justify-center">
                    <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[120px] font-semibold text-[12px]">Our Hospitals</div>
                </div>
                <div className="text-[24px] text-center mt-[10px] font-medium">Best Hospitals Network at your Service</div>

                <div className="grid grid-cols-2 flex justify-between mt-[20px]">
                    {
                        LocationCardDetails.map((card, index) => {
                            if(index+1 <= bar)
                                return <div className="px-[5px]"><LocationCard img={card.img} name={card.name} location={card.location} /></div>
                        })
                    }
                </div>
            </div>

            {
                !active ? (
                <div className="w-full flex justify-center hidden lg:inline-flex flex-col items-center">
                    <button className="text-white font-medium bg-[#E40443] rounded-[10px] px-[15px] py-[5px]" onClick={() => setActive(true)}>Load More</button>
                </div> ): null
            }
            {
                !active ? (
                <div className="flex justify-center mb-[0px] md:hidden">
                    <button className="text-white font-medium bg-[#E40443] text-[10px] rounded-[5px] px-[15px] py-[7px]" onClick={() => {
                        setActive(true)
                        setBar(LocationCardDetails.length + 1)
                    }}>Load More</button>
                </div> ): null
            }

            <Achievements/>
            <OurMedia/>
            <OurMediaMobile/>

        </>
    );
}

export default Hospitals;