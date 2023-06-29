import React, {Component} from "react";
import { useState } from "react";
import Navbar from "../../Components/Navbar";
import background from "../../plugin/img/jumboKulo.jpg"
import { Location } from "../../Components/js/Lokasi";
import image from "../../plugin/img/tulisan.png";
import DataImg from "../../Components/DataImg";
import Footer from "../../Components/Footer";
import '../../../src/App.css';
import "../../plugin/font-awesome/css/all.css";
import '../../plugin/css/navbar.css';
import Scroll from "../../Components/ScrolTop";
import "../../plugin/css/dropson.css"

const Brands =() =>{
    const [show,setShow] = useState({});

    const toggleVisibility = (divId) => {
        setShow((prevState) => ({
            ...prevState,
            [divId]: !prevState[divId]
        }))
    }

    // const handleTab=(e)=>{
    //     setShow(e)
    // 
    return(
        <div className=" scroll-smooth">
            <Navbar/>
            <section>
                <div className="h-[27rem] sm:h-[34rem] md:h-[39rem] lg:h-[36rem] bg-fixed z-0 bg-no-repeat bg-cover" style={{ backgroundImage:`url(${background})`}}>
                    <img src={image} alt="gamabr" className=" mt-36 px-10 sm:mt-30 sm:px-20 lg:px-0 lg:mt-0 md:w-[70%] lg:w-2/5 md:left-[10rem] lg:left-[24rem] md:top-[5rem] lg:top-[18rem] absolute" style={{zIndex:"1"}}/>
                    <div className="bg-black w-full h-full py-[129px] opacity-50">
                    </div>
                </div>
                <div className="px-5 sm:text-xl md:text-lg lg:px-0 mt-12 mx-auto text-center md:mt-16">
                    <small className="text-center">
                        Kedai Kopi Kulo merupakan perjalanan pertama dari KULO Group sampai akhirnya terciptalah beberapa brand makanan dan minuman lain di bawah naungan <br/> KULO Group. Kedai Kopi Kulo adalah titik perubahan dari “Coffee-to-go” di dalam Market Indonesia. <br/>
                        Sebagai pionir yang mempopulerkan menu Avocatto, kini Kedai Kopi Kulo berhasil menciptakan berbagai varian minuman dari produk kopi sampai non-kopi. <br /> Kedai Kopi Kulo menawarkan produk berkualitas dengan harga terjangkau. <br />
                        Dengan biji kopi lokal dari Indonesia, Kami menghadirkan minuman Kopi dan non Kopi yang dapat dinikmati seluruh masyarakat Indonesia.
                    </small>
                </div>
                {/* best seling menu */}
                <div className="mt-16 lg:mt-32 md:mt-16">
                    <h1 className="text-center uppercase text-2xl sm:text-3xl lg:text-4xl font-bold text-hijau">best selling menu</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 container mx-auto mt-10">
                        <div>
                            <div class="img-hover-zoom cursor-pointer h-[18rem] lg:h-[16rem]">
                                <img src={ require('../../plugin/img/menu1.jpg')} alt="" className="h-full w-full"/>
                            </div>
                            <p className="px-5 py-7 text-center bg-abu-abu">Avocatto vanila</p>
                        </div>
                        <div>
                            <div class="img-hover-zoom cursor-pointer h-[18rem] lg:h-[16rem]">
                                <img src={ require('../../plugin/img/menu2.jpg')} alt="" className="h-full  w-full"/>
                            </div> 
                            <p className="px-5 py-7 text-center bg-abu-abu">Avocatto vanila</p>
                        </div>
                        <div>
                            <div class="img-hover-zoom cursor-pointer h-[18rem] lg:h-[16rem]">
                                <img src={ require('../../plugin/img/menu3jpg.jpg')} alt="" className="h-full  w-full"/>
                            </div>
                            <p className="px-5 py-7 text-center bg-abu-abu">Avocatto vanila</p>
                        </div>
                        <div>
                            <div class="img-hover-zoom cursor-pointer h-[18rem] lg:h-[16rem]">
                                <img src={ require('../../plugin/img/menu1.jpg')} alt="" className="h-full  w-full"/>
                            </div>
                            <p className="px-5 py-7 text-center bg-abu-abu">Avocatto vanila</p>
                        </div>
                        <div>
                            <div class="img-hover-zoom cursor-pointer h-[18rem] lg:h-[16rem]">
                                <img src={ require('../../plugin/img/menu2.jpg')} alt="" className="h-full  w-full"/>
                            </div>
                            <p className="px-5 py-7 text-center bg-abu-abu">Avocatto vanila</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="capitalize text-base mt-5 font-semibold text-white ">
                            <a href="#" className="px-5 py-3 rounded-md bg-hijau">lihat menu lengkap</a>
                        </button>
                    </div>
                </div>
                {/* Promo */}
                <div className="mt-32">
                    <h1 className="uppercase text-center text-4xl font-bold text-hijau">promo</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto gap-5 px-10 pb-5 pt-10">
                        <div className="text-center">
                            <img src={ require('../../plugin/img/promo1.jpg')} alt="" srcset="" />
                            <p className="uppercase text-2xl  font-extrabold text-hijau px-1 mt-4">potongan 35k dari grabfood</p>
                            <button className="bg-hijau text-white hover:bg-slate-600 text-xs px-4 py-2 rounded-full mt-5">
                                <a href="#">Info Selengkapnya<i class="fa-solid fa-arrow-right ms-2"style={{color:"#ffffff"}} ></i></a>
                            </button>
                        </div>
                        <div className="text-center">
                            <img src={ require('../../plugin/img/promo2.jpg')} alt="" srcset="" />
                            <p className="uppercase text-2xl  font-extrabold text-hijau px-1 mt-4">Promo gajian diskon 45%</p>
                            <button className="bg-hijau text-white hover:bg-slate-600 text-xs px-4 py-2 rounded-full mt-5">
                                <a href="#">Info Selengkapnya<i class="fa-solid fa-arrow-right ms-2"style={{color:"#ffffff"}} ></i></a>
                            </button>
                        </div>
                        <div className="text-center">
                            <img src={ require('../../plugin/img/promo3.jpg')} alt="" srcset="" />
                            <p className="uppercase text-2xl  font-extrabold text-hijau px-1 mt-4">promo gopay cahback 60%</p>
                            <button className="bg-hijau text-white hover:bg-slate-600 text-xs px-4 py-2 rounded-full mt-5">
                                <a href="#">Info Selengkapnya<i class="fa-solid fa-arrow-right ms-2"style={{color:"#ffffff"}} ></i></a>
                            </button>
                        </div>
                        <div className="text-center">
                            <img src={ require('../../plugin/img/promo4.jpg')} alt="" srcset="" />
                            <p className="uppercase text-2xl  font-extrabold text-hijau px-1 mt-4">promo diskon 12k dari grabfood</p>
                            <button className="bg-hijau text-white hover:bg-slate-600 text-xs px-4 py-2 rounded-full mt-5">
                                <a href="#">Info Selengkapnya<i class="fa-solid fa-arrow-right ms-2"style={{color:"#ffffff"}} ></i></a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-32">
                    <h1 className="text-center p-8 bg-hijau text-white text-2xl font-bold leading-10">
                        Dalam kurun waktu <span className="text-[#f8d748]"> 2 TAHUN</span> <br />
                        Sudah ada lebih dari <span className="text-[#f8d748]">250 OUTLET </span> Kedai Kopi KULO di seluruh Indonesia
                    </h1>
                    <DataImg/>
                </div>
                {/* Lokasi */}
                <div className="mt-32 mx-auto container">
                    <h3 className="uppercase text-center font-medium">lokasi <br /> 
                        <span className="text-hijau font-bold text-3xl">kedai kopi kulo</span>
                    </h3>
                    <div className="grid grid-cols-1 px-10 sm:px-5  md:grid-cols-2 md:gap-5 lg:grid-cols-4 mt-16 container mx-auto">
                        {/* lokasi row 3 */}
                        {Location.map((item) =>(
                            <div key={item.name} 
                            className={`hide-show-div ${show[item.id] ? 'show' : 'border-b border-slate-400 '}`}>
                                <button onClick={() => toggleVisibility(item.id)} className="border-b border-slate-400 p-2 w-full text-start">
                                    {show[item.id] ? '' : ''}
                                    <i class="fa-solid fa-location-dot fa-lg" style={{color:"#285538"}}></i> {item.name}
                                    {show[item.id] && <div className="mt-2 ">{item.location}</div>}
                                </button>
                            </div>   
                        ))}
                    </div>
                </div>
                {/* footer */}
                <div className="mt-32">
                    <h3 className="uppercase text-center font-medium">follow<br /> 
                        <span className="text-hijau font-bold text-3xl">kedai kopi kulo</span>
                    </h3>
                    <div className="text-center mt-10">
                        <a href="https://www.instagram.com/kedaikopikulo/?hl=en" className="flex justify-center items-center gap-3">
                           <span className="bg-hijau p-2  rounded-full"><i class="fa-brands fa-instagram fa-xl hover:bg-black" style={{color:'white'}} ></i></span>
                           <p className="text-hijau tracking-wider font-normal text-2xl">KedaiKopiKulo</p>
                        </a>
                    </div>
                </div>
                <Footer/>
                <Scroll/>
            </section>
        </div>
    )

}
export default Brands