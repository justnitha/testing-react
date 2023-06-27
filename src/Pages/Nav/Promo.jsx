import Navbar from "../../Components/Navbar"
import Prm from "../../Components/Navigation/Prm"
import React, { useState } from 'react';
import { PromoGambar } from "../../Components/PromoGambar";
import PromoImg from "../../Components/PromoImg";
import Footer from "../../Components/Footer";
import Scroll from "../../Components/ScrolTop";


const Promo =() => {
    return (
        <div>
           
            <Navbar/>
            <section className="text-center">
                <h1 className="uppercase text-5xl font-bold text-hijau py-16">promo</h1>
            </section>
            <PromoImg/>
            <Footer/>
            <Scroll/>
        </div>
    )
}
export default Promo