import React, {useState} from "react";

import '../plugin/css/navbar.css';
import '../plugin/font-awesome/css/all.css';
import Logo from '../plugin/img/logo.png'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [show,SetShow] = useState(false);

    const Dropdown = () => {
        SetShow(!show);
    };
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    return(
        <div>
             {/* nav mobile */}
            <div className="dropdownn bg-white flex w-full px-5 lg:hidden xl:hidden uppercase fixed top-0 left-0 z-10">
                <button className="toggle-buttonn fa-xl " onClick={toggleDropdown}>
                    <i class="fa-solid fa-bars"></i>
                </button>
                <div className={`dropdown-menuu ${isOpen ? 'open ' : ''}`}>
                {/* <div className={`dropdown-menuu ${isOpen ? 'open px-5 (CSS/CLASS UNUTK BUKA)' : 'px-5 (CSS/CLASS UNUTK TUTUP'}`}> */}
                    <ul className="text-abu-abu-100 max-sm:text-xs sm:text-xs font-semibold">
                        <li className="px-5 py-2 hover:bg-abu-abu-100 hover:text-white cursor-pointer"><a href="#/about" className="pe-[17rem] py-2">About us</a></li>
                        <li>
                            <button onClick={Dropdown} className="flex justify-between w-full px-5 py-2 hover:bg-abu-abu-100 hover:text-white cursor-pointer">
                                <p>BRANDS</p>
                                <i class="fa-solid fa-chevron-down font-bold"></i>
                            </button>
                            {show && (
                                <ul className="px-5">
                                    <li className="px-5 py-2 hover:bg-abu-abu-100 hover:text-white cursor-pointer"><a href="#" className="sm:pe-[15rem] max-sm:[15rem] py-2 ">Kedai Kopi Kulo</a></li>
                                    <li className="px-5 py-2 hover:bg-abu-abu-100 hover:text-white cursor-pointer"><a href="#" className="sm:pe-[20rem] max-sm:[20rem] py-2">pochajjang</a></li>
                                    <li className="px-5 py-2 hover:bg-abu-abu-100 hover:text-white cursor-pointer"><a href="#" className="sm:pe-[20rem] max-sm:[20rem] py-2">xiboba</a></li>
                                    <li className="px-5 py-2 hover:bg-abu-abu-100 hover:text-white cursor-pointer"><a href="#" className="sm:pe-[20rem] max-sm:[20rem] py-2">kitamura</a></li>
                                    <li className="px-5 py-2 hover:bg-abu-abu-100 hover:text-white cursor-pointer"><a href="#" className="sm:pe-[12.5rem max-sm:[12.5rem] py-2">bu eva spesial sambal</a></li>
                                    <li className="px-5 py-2 hover:bg-abu-abu-100 hover:text-white cursor-pointer"><a href="#" className="sm:pe-[20rem] max-sm:[20rem] py-2">xiji</a></li>
                                    <li className="px-5 py-2 hover:bg-abu-abu-100 hover:text-white cursor-pointer"><a href="#" className="sm:pe-[12.5rem max-sm:[12.5rem] py-2">oseng mie jontor</a></li>
                                    <li className="px-5 py-2 hover:bg-abu-abu-100 hover:text-white cursor-pointer"><a href="#" className="sm:pe-[12.5rem max-sm:[12.5rem] py-2">ela greek doughnuts</a></li>
                                    <li className="px-5 py-2 hover:bg-abu-abu-100 hover:text-white cursor-pointer"><a href="#" className="sm:pe-[20rem] max-sm:[20rem] py-2">absolutea</a></li>
                                </ul>
                            )}
                        </li>
                        <li className="px-5 py-2 hover:bg-abu-abu-100 hover:text-white cursor-pointer"><a href="#/promo" className="pe-[20rem] py-2">promo</a></li>
                        <li className="px-5 py-2 hover:bg-abu-abu-100 hover:text-white cursor-pointer"><a href="#/app" className="pe-[20rem] py-2">app</a></li>
                        <li className="px-5 py-2 hover:bg-abu-abu-100 hover:text-white cursor-pointer"><a href="#/partnership" className="pe-[20rem] py-2">partnership</a></li>
                        <li className="px-5 py-2 hover:bg-abu-abu-100 hover:text-white cursor-pointer"><a href="#/contact" className="pe-[13rem] py-2">contact us</a></li>
                    </ul>
                </div>
                <img src={Logo} alt="logo" className="h-[4.5rem] mx-auto"/>
            </div>
            {/* nav desktop (LG) */}
            <nav className="mx-auto container py-3 text-center justify-between sm:hidden md:hidden lg:block  max-sm:hidden ">
                <div>
                    <img src={Logo} alt="logo" className="h-[6rem] mx-auto"/>
                </div>
                <ul className="lg:flex gap-9 justify-center uppercase mt-7 text-sm">
                    <li className="text-[#285538] font-bold bnn"><a href="#/about">About</a></li>
                    <li class="dropdown z-10 bnn ">
                        <a href="#/" className="text-[#285538] font-bold">Brands <i class="fa-solid fa-chevron-down font-bold"></i></a>
                        <div class="dropdown-content text-start">
                            <a href="#" class="btn active">Kedai Kopi Kulo</a>
                            <a href="#" class="btn">pochajjang</a>
                            <a href="#" class="btn">xiboba</a>
                            <a href="#" class="btn">kitamura</a>
                            <a href="#" class="btn">bu eva spesial sambal</a>
                            <a href="#" class="btn">xiji</a>
                            <a href="#" class="btn">oseng mie jontor</a>
                            <a href="#" class="btn">ela greek doughnuts</a>
                            <a href="#" class="btn">absolutea</a>
                        </div>
                    </li>
                    <li className="text-[#285538] font-bold bnn"><a href="#/promo">promo</a></li>
                    <li className="text-[#285538] font-bold bnn"><a href="#/app">app</a></li>
                    <li className="text-[#285538] font-bold bnn"><a href="#/partnership">partnership</a></li>
                    <li className="text-[#285538] font-bold bnn"><a href="#/contact">contact us</a></li>
                </ul>
            </nav>
        </div>
       
    )

}
export default Navbar