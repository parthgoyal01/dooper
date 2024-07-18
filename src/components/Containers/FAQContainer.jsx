import {useState, useEffect} from 'react'; 

const FAQContainer = ({question, answer, mobile}) => {
    const [active, setActive] = useState(false);

    const openHandler = () => {
        setActive(!active);
    }

    return (
        <div className="w-full bg-[#FFFFFF] px-[20px] py-[10px] rounded-[10px] border-[1px] border-[#EEF0F3]">
            <div onClick = {() => openHandler()} className='flex justify-between items-center'>
                <div className={mobile ? 'text-[14px] font-medium' : 'text-[18px] font-medium'}>{question}</div>
                {
                    active ? <img src="/Assets/FAQCloseArrow.png" alt="arrow" className="w-[25px]" /> : <img src="/Assets/FAQOpenArrow.png" alt="arrow" className="w-[25px]" />
                }
            </div>
            {
                active ? (
                    <div className={mobile ? 'mt-[8px] text-[14px] text-[#5B6572]' : 'mt-[8px] text-[#5B6572]'}>
                        {answer}
                    </div>
                ) : null
            }
        </div>
    );
}

export default FAQContainer;

// new faq
// import {useState, useEffect} from 'react'; 
// import AboutDooper from '../FAQS/AboutDooper';
// import UrgentCare from '../FAQS/UrgentCare';
// import NonUrgentCare from '../FAQS/NonUrgentCare';
// import HomeAndNursingCare from '../FAQS/HomeAndNursingCare';
// import Vaccination from '../FAQS/Vaccination';
// import Medicines from '../FAQS/Medicines';
// import General from '../FAQS/General';
// import DooperHealthAssistant from '../FAQS/DooperHealthAssistant';
// import LabAndHealthCheckups from '../FAQS/LabAndHealthCheckups';

// const FAQContainer = () => {
//     return (
//       <>
//         <h1>Urgent Care</h1>
//         <UrgentCare/>
//         <h1>Non Urgent Care</h1>
//         <NonUrgentCare/>
//         <h1>Home And Nursing Care</h1>
//         <HomeAndNursingCare/>
//         <h1>Lab And Health Chechups</h1>
//         <LabAndHealthCheckups/>
//         <h1>Vaccination</h1>
//         <Vaccination/>
//         <h1>Medicines</h1>
//         <Medicines/>
//         <h1>General</h1>
//         <General/>
//         <h1>Dooper Health Assistant (DHA)</h1>
//         <DooperHealthAssistant/>
//         <h1>About Dooper</h1>
//         <AboutDooper/>
//       </>
//     );
// }

// export default FAQContainer;