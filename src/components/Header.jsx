import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src=' https://embed.tawk.to/66614a159a809f19fb39b394/1hvm0iq1u';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

const Header = (props) => {
        const location = useLocation();
    const path = location.pathname;
    const navigate = useNavigate();

    const activeClass = "text-[#1A1C1F] font-medium";
    const inactiveClass = "text-[#8D98A4]";
    const [dropdown, setDropdown] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 0; // Adjust this value based on your fixed header height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        } else {
            console.error(`Element with ID ${id} not found.`);
        }
    };

    const handleNavigation = (id) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                scrollToSection(id);
            }, 100); // Slight delay to ensure the page has navigated
        } else {
            scrollToSection(id);
        }
    };

    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const id = hash.replace('#', '');
            scrollToSection(id);
        }
    }, [location]);

    return (
        <>
            <div className="hidden md:inline-flex w-full px-[100px] py-[25px] border-b-[1px] border-b-[#E3E6E8] z-10 flex flex-row items-center justify-between">
                <div className="w-[30%]">
                    <Link to={'/'}>
                        <div>
                            <img src="/Assets/Logo.png" className="w-[150px]" />
                        </div>
                    </Link>
                </div>
                <div className="flex w-[70%] justify-between space-x-3 items-center">
                    <Link to={"/"}><div className={path === '/' ? activeClass : inactiveClass}>Home</div></Link>
                    <Link to={"/urgentcare"}><div className={path === '/urgentcare' ? activeClass : inactiveClass}>Urgent Care</div></Link>
                    <Link to={"/labs"}><div className={path === '/labs' ? activeClass : inactiveClass}>Lab Tests</div></Link>
                    {/* <div onClick={() => handleNavigation('how-it-works1')} className={path === '/how' ? activeClass : inactiveClass}>How it Works</div> */}
                    <div onClick={() => handleNavigation('how-it-works1')}>
                        <Link className={path === '/how' ? activeClass : inactiveClass}>
                          How it Works
                        </Link>
                    </div>
                    <Link to={"/about"}><div className={path === '/about' ? activeClass : inactiveClass}>About Us</div></Link>
                    <Link to={"/contact"}><div className={path === '/contact' ? activeClass : inactiveClass}>Contact Us</div></Link>
                    <a href="https://api.whatsapp.com/send/?phone=6375596006&text&type=phone_number&app_absent=0">
                        <div className="px-[25px] py-[8px] rounded-[5px] bg-[#FCE6EC]">
                            <button className="text-[#E40443] font-semibold">Get Started</button>
                        </div>
                    </a>
                </div>
            </div>
            <Link to={'/'}>
            <div className="md:hidden flex justify-between items-center py-[20px] px-[25px] border-b-[1px] border-b-[#B8BFC7]">
                <img src="/Assets/DooperLogoMobile.png" alt="logo" className="w-[130px]" />
                <img onClick={() => setDropdown(true)} src="/Assets/SidebarLogo.png" alt="sidebar" className="w-[40px]" />
            </div></Link>
            {dropdown && (
                <div className="absolute top-0 right-0 bottom-0 z-index-class h-[100vh] w-[70vw] bg-white py-[20px]">
                    <div onClick={() => setDropdown(false)} className="flex items-center justify-center w-full border-b-[1px] px-[40px] pb-[20px] border-b-[#DBDADE] space-x-4">
                        <img src="/Assets/DropdownBack.png" alt="arrow" className="w-[40px]" />
                        <a href="https://api.whatsapp.com/send/?phone=6375596006&text&type=phone_number&app_absent=0">
                            <button className="min-w-[170px] text-white text-[12px] bg-[#E40443] text-center px-[20px] py-[15px] rounded-[8px] font-semibold">Get Started</button>
                        </a>
                    </div>
                    <Link to={'/'}><div onClick={() => setDropdown(false)} className="flex items-center justify-start w-full border-b-[1px] px-[40px] py-[10px] border-b-[#DBDADE] space-x-4">
                        <img src="/Assets/DropdownHome.png" className="w-[25px]" alt="icon" />
                        <p className="text-[18px] text-[#4B465C]">Home</p>
                    </div></Link>
                    <Link to={'/urgentcare'}><div onClick={() => setDropdown(false)} className="flex items-center justify-start w-full border-b-[1px] px-[40px] py-[10px] border-b-[#DBDADE] space-x-4">
                        <img src="/Assets/DropdownUrgent.png" className="w-[25px]" alt="icon" />
                        <p className="text-[18px] text-[#4B465C]">Urgent Care</p>
                    </div></Link>
                    <Link to={'/labs'}><div onClick={() => setDropdown(false)} className="flex items-center justify-start w-full border-b-[1px] px-[40px] py-[10px] border-b-[#DBDADE] space-x-4">
                        <img src="/Assets/DropdownLab.png" className="w-[25px]" alt="icon" />
                        <p className="text-[18px] text-[#4B465C]">Lab Tests</p>
                    </div></Link>
                    <Link to={'/healthconcerns'}><div onClick={() => setDropdown(false)} className="flex items-center justify-start w-full border-b-[1px] px-[40px] py-[10px] border-b-[#DBDADE] space-x-4">
                        <img src="/Assets/DropdownHealth.png" className="w-[25px]" alt="icon" />
                        <p className="text-[18px] text-[#4B465C]">Health Concerns</p>
                    </div></Link>
                    <div onClick={() => handleNavigation('how-it-works2')} className="flex items-center justify-start w-full border-b-[1px] px-[40px] py-[10px] border-b-[#DBDADE] space-x-4">
                        <img src="/Assets/DropdownHow.png" className="w-[25px]" alt="icon" />
                        <p className="text-[18px] text-[#4B465C]">How it Works</p>
                    </div>
                    <Link to={'/about'}><div onClick={() => setDropdown(false)} className="flex items-center justify-start w-full border-b-[1px] px-[40px] py-[10px] border-b-[#DBDADE] space-x-4">
                        <img src="/Assets/DropdownAbout.png" className="w-[25px]" alt="icon" />
                        <p className="text-[18px] text-[#4B465C]">About us</p>
                    </div></Link>
                    <Link to={'/contact'}><div onClick={() => setDropdown(false)} className="flex items-center justify-start w-full border-b-[1px] px-[40px] py-[10px] border-b-[#DBDADE] space-x-4">
                        <img src="/Assets/DropdownContact.png" className="w-[25px]" alt="icon" />
                        <p className="text-[18px] text-[#4B465C]">Contact us</p>
                    </div></Link>
                    <Link to={'/'}><div onClick={() => setDropdown(false)} className="flex items-center justify-start w-full border-b-[1px] px-[40px] py-[10px] border-b-[#DBDADE] space-x-4">
                        <img src="/Assets/DropdownJoin.png" className="w-[25px]" alt="icon" />
                        <p className="text-[18px] text-[#4B465C]">Join us</p>
                    </div></Link>
                </div>
            )}
        </>
    );
}

export default Header;

