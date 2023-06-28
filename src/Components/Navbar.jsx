import React from "react";

import '../plugin/css/navbar.css';
import '../plugin/font-awesome/css/all.css';
import Logo from '../plugin/img/logo.png'


const Navbar = () => {
    return(
        <nav className="mx-auto container py-3 text-center justify-between">
            <div>
                <img src={Logo} alt="logo" className="h-[6rem] mx-auto"/>
            </div>
            <ul className="flex gap-9 justify-center uppercase mt-7 text-sm">
                <li className="text-[#285538] font-bold bnn"><a href="/testing-react/#/about">About</a></li>
                <li class="dropdown z-10 bnn ">
                    <a href="/testing-react/#/" className="text-[#285538] font-bold">Brands <i class="fa-solid fa-chevron-down font-bold"></i></a>
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
                <li className="text-[#285538] font-bold bnn"><a href="/testing-react/#/promo">promo</a></li>
                <li className="text-[#285538] font-bold bnn"><a href="/testing-react/#/app">app</a></li>
                <li className="text-[#285538] font-bold bnn"><a href="/testing-react/#/partnership">partnership</a></li>
                <li className="text-[#285538] font-bold bnn"><a href="/testing-react/#/contact">contact us</a></li>
                
            </ul>
            
        </nav>
    )

}
export default Navbar