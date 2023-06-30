import background from "../../plugin/img/app-image.png";
import background1 from "../../plugin/img/app-bg2.png";
import "../../plugin/font-awesome/css/all.css"
import { Quest } from "../js/Quest";
import React, { useState } from "react";
import "../../plugin/css/dropson.css";

const Aps =() => {
    const [show,setShow] = useState({});

    const toggleVisibility = (divId) => {
        setShow((prevState) => ({
            ...prevState,
            [divId]: !prevState[divId]
        }))
    }
    return (
        <div className=" scroll-smooth">
            <div className="mt-20 h-[40vh] lg:mt-0  lg:h-[90vh]" style={{ backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat", backgroundSize:'cover'}}></div>
            <section className="text-center">
                <h1 className="text-4xl font-bold text-hijau pt-16 pb-6">Halo SobatKuloku!</h1>
                <p className="text-sm">Selamat datang di KULO App!</p>
                <p className="text-sm py-10 px-10 lg:px-0">
                    Kulo App adalah membership dari Kulo Group dimana kamu bisa mendapatkan berbagai kemudahan untuk memesan makanan dan minuman dari Brand <br /> Kedai Kopi Kulo, Pochajjang, Kitamura, Mazeru, Xiji, Xiboba, Oseng Mie Jontor, Bu Eva Spesial Sambal, Mo Tahu Aja!, Ela! Greek Doughnuts dan Absolutea. Kamu <br /> juga bisa mengumpulkan dan menukarkan poin menjadi produk makanan/ minuman di setiap brand Kulo Group.
                </p>
            </section>
            {/* jadi member */}
            <section className="text-center lg:mt-12">
                <h1 className="text-sm font-bold text-hijau pt-16 pb-6 px-10 lg:px-0">JADI MEMBER <br />
                    <span className="text-2xl lg:text-4xl">BANYAK MANFAATNYA</span>
                </h1>
                <hr className="w-16 mx-auto bg-green-600 h-1" />
                <div className="grid lg:grid-cols-3 md:grid-cols-3 items-center mt-10 container mx-auto px-10 lg:mt-20 lg:h-[70vh]">
                    <div className="h-full py-10">
                        <a href="#" className="flex items-start gap-6">
                            <div className="text-end">
                                <h3 className="text-lg font-bold text-hijau uppercase" > penawaran spesial</h3>
                                <p className="text-xs">Khusus untuk kamu sobat Kuloku, dapatkan berbagai program spesial yang hanya berlaku di aplikasi KULO.</p>
                            </div>
                            <div className="bg-hijau hover:bg-slate-600 cursor-pointer py-6 px-5 rounded-full">
                                <i class="fa-regular fa-star fa-2xl text-white"></i>
                            </div>
                        </a>
                        <a href="#" className="flex items-start gap-6 mt-16 ">
                            <div className="text-end">
                                <h3 className="text-lg font-bold text-hijau uppercase" > loyality point</h3>
                                <p className="text-xs">Hanya dengan registrasi di aplikasi KULO, kamu bisa mendapatkan poin dari setiap transaksi baik lewat aplikasi maupun datang langsung ke outlet. Poin ini dapat ditukarkan dengan berbagai rewards.​</p>
                            </div>
                            <div className="bg-hijau hover:bg-slate-600 cursor-pointer py-6 px-5 rounded-full">
                                <i class="fa-solid fa-coins fa-2xl text-white"></i>
                            </div>
                        </a>
                        <a href="#" className="flex items-start gap-6 mt-16 ">
                            <div className="text-end">
                                <h3 className="text-lg font-bold text-hijau uppercase">rewards</h3>
                                <p className="text-xs">Ikuti berbagai Challenges yang seru di aplikasi KULO dan dapatkan extra poin</p>
                            </div>
                            <div className="bg-hijau hover:bg-slate-600 cursor-pointer py-6 px-6 rounded-full">
                                <i class="fa-solid fa-award fa-2xl text-white"></i>
                            </div>
                        </a>
                    </div>
                   
                    <div className="mx-auto">
                        <img src="https://kulogroup.com/wp-content/uploads/2021/05/KuloApp-Preview.png" alt="app-kulo" className="h-[50vh]" />
                    </div>

                    <div className="h-full py-10">
                        <a href="#" className="flex items-start gap-6 ">
                            <div className="bg-hijau hover:bg-slate-600 cursor-pointer py-6 px-5 rounded-full">
                                <i class="fa-solid fa-paper-plane fa-2xl text-white"></i>
                            </div>
                            <div className="text-start">
                                <h3 className="text-lg font-bold text-hijau uppercase" >pick up & dilevery</h3>
                                <p className="text-xs">Dapat memilih untuk mengambil atau meminta pesananmu diantar dari outlet terdekat</p>
                            </div>
                        </a>
                        <a href="#" className="flex items-start gap-6 mt-16">
                            <div className="bg-hijau hover:bg-slate-600 cursor-pointer py-7 px-5 rounded-full">
                                <i class="fa-solid fa-user-group fa-2xl text-white"></i>
                            </div>
                            <div className="text-start mb-4">
                                <h3 className="text-lg font-bold text-hijau uppercase" >program referal</h3>
                                <p className="text-xs">Ajak Kerabatmu sebanyak mungkin untuk bergabung menjadi member kuloku loyalty program dan dapatkan free item atau bonus poin dari Kulo Group</p>
                            </div>
                        </a>
                        <a href="#" className="flex items-start gap-6 mt-16">
                            <div className="bg-hijau hover:bg-slate-600 cursor-pointer py-6 px-5 rounded-full">
                                <i class="fa-solid fa-money-bill-wave fa-2xl text-white"></i>
                            </div>
                            <div className="text-start">
                                <h3 className="text-lg font-bold text-hijau uppercase" >flexible payment</h3>
                                <p className="text-xs">Nikmati kemudahan pembayaran melalui gopay dan kartu kredit (BCA, BRI, Mandiri dan Maybank )​</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
            {/* promo kulo */}
            <section className="container mx-auto">
                <h1 className="text-2xl lg:text-4xl font-extrabold text-center text-hijau pt-16 pb-6 uppercase">promo kulo app terbaru</h1>
                <div className="grid px-10 md:grid-cols-2 lg:px-10 lg:grid-cols-5 lg: mt-4">
                    <div class="text-center px-2 cursor-pointer">
                        <img src="https://kulogroup.com/wp-content/uploads/2021/09/Promo-Absolutea-September.jpg" alt="ss" />
                        <p className="text-xs uppercase text-hijau mt-4">absolutea</p>
                        <p className=" uppercase text-hijau text-xl font-extrabold -mt-2">discount 60%</p>
                        <button className="bg-hijau text-white hover:bg-slate-600 text-xs px-4 py-2 rounded-full mt-5">
                            <a href="#">Info Selengkapnya<i class="fa-solid fa-arrow-right ms-2"style={{color:"#ffffff"}} ></i></a>
                        </button>
                    </div>
                    <div class="text-center px-2 cursor-pointer mt-10 lg:mt-0 md:mt-0">
                        <img src="https://kulogroup.com/wp-content/uploads/2021/09/Xiji-promo-discount-60.jpg" alt="ss" />
                        <p className="text-xs uppercase text-hijau mt-4">xiji</p>
                        <p className=" uppercase text-hijau text-xl font-extrabold -mt-2">discount 60%</p>
                        <button className="bg-hijau text-white hover:bg-slate-600 text-xs px-4 py-2 rounded-full mt-5">
                            <a href="#">Info Selengkapnya<i class="fa-solid fa-arrow-right ms-2"style={{color:"#ffffff"}} ></i></a>
                        </button>
                    </div>
                    <div class="text-center px-2 cursor-pointer mt-10 lg:mt-0">
                        <img src="https://kulogroup.com/wp-content/uploads/2021/09/promo-xiboba-september.jpg" alt="ss" />
                        <p className="text-xs uppercase text-hijau mt-4">xiboba</p>
                        <p className=" uppercase text-hijau text-xl font-extrabold -mt-2">discount 60%</p>
                        <button className="bg-hijau text-white hover:bg-slate-600 text-xs px-4 py-2 rounded-full mt-5">
                            <a href="#">Info Selengkapnya<i class="fa-solid fa-arrow-right ms-2"style={{color:"#ffffff"}} ></i></a>
                        </button>
                    </div>
                    <div class="text-center px-2 cursor-pointer mt-10 lg:mt-0">
                        <img src="https://kulogroup.com/wp-content/uploads/2021/09/ela-promo-september-.jpg" alt="ss" />
                        <p className="text-xs uppercase text-hijau mt-4">ela greek dougnuhts</p>
                        <p className=" uppercase text-hijau text-xl font-extrabold -mt-2">discount 60%</p>
                        <button className="bg-hijau text-white hover:bg-slate-600 text-xs px-4 py-2 rounded-full mt-5">
                            <a href="#">Info Selengkapnya<i class="fa-solid fa-arrow-right ms-2"style={{color:"#ffffff"}} ></i></a>
                        </button>
                    </div>
                    <div class="text-center px-2 cursor-pointer mt-10 lg:mt-0">
                        <img src="https://kulogroup.com/wp-content/uploads/2021/08/promo-kulo-agustus-4.jpg" alt="ss" />
                        <p className="text-xs uppercase text-hijau mt-4">kedai kopi kulo</p>
                        <p className=" uppercase text-hijau text-xl font-extrabold -mt-2">discount 60%</p>
                        <button className="bg-hijau text-white hover:bg-slate-600 text-xs px-4 py-2 rounded-full mt-5">
                            <a href="#">Info Selengkapnya<i class="fa-solid fa-arrow-right ms-2"style={{color:"#ffffff"}} ></i></a>
                        </button>
                    </div>
                </div>
            </section>
            {/* langkah */}
            <section className="container mx-auto py-16 mt-10">
                <h1 className="text-2xl lg:text-4xl font-extrabold text-center text-hijau pt-16 pb-6 uppercase">3 langkah mudah jadi member kulo</h1>
                <hr className="w-16 mx-auto bg-green-600 h-1" />
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mt-16 md:mt-20 lg:mt-24 justify-center">
                    <div className="text-center px-10 lg:px-0 lg:w-full md:mt-8 mt-0 lg:mt-0">
                        <i class="fa-solid fa-download fa-2x lg:fa-4x text-white p-6 bg-hijau hover:text-slate-400 rounded-full"></i>
                        <p className="font-extrabold my-5 text-sm uppercase text-hijau">01. download</p>
                        <p className="text-xs px-9">
                            Kamu Bisa Mengunduh Aplikasi Kulo Yang Sudah Tersedia Di Playstore (Android) Dan Appstore (IOS)
                        </p>
                    </div>
                    <div className="lg:block hidden mx-auto">
                        <i class="fa-solid fa-chevron-right fa-3x mt-10 text-hijau"></i>
                    </div>
                    <div className="text-center px-10 lg:px-0 lg:w-full mt-7 lg:mt-0">
                        <i class="fa-regular fa-id-card fa-2x lg:fa-4x text-white p-6 bg-hijau hover:text-slate-400 rounded-full"></i>
                        <p className="font-extrabold my-5 text-sm uppercase text-hijau">02. registrasi</p>
                        <p className="text-xs px-10">
                            Di Aplikasi KULO, Kamu Bisa Mendaftarkan Diri Dengan Email Dan Nomor Telepon Yang Saat Ini Digunakan/Aktif.
                        </p>
                    </div>
                    <div className="lg:block hidden mx-auto">
                        <i class="fa-solid fa-chevron-right fa-3x mt-10 text-hijau"></i>
                    </div>
                    <div className="text-center px-10 lg:px-0 lg:w-full mt-7 lg:mt-0">
                        <i class="fa-solid fa-cart-shopping fa-2x lg:fa-4x text-white p-6 bg-hijau hover:text-slate-400 rounded-full"></i>
                        <p className="font-extrabold my-5 text-sm uppercase text-hijau ">03. shopping time</p>
                        <p className="text-xs px-9">
                            Akun Yang Terdaftar Akan Langsung Mendapatkan 250 Kuloku Poin Yang Bisa Di Redeem Di Semua Brand
                        </p>
                    </div>
                </div>
            </section>
            <div className="h-[18vh] lg:h-[50vh] lg:mt-32" style={{ backgroundImage:`url(${background1})`,backgroundRepeat:"no-repeat", backgroundSize:'cover'}}></div>
            {/* question */}
            <section className="lg:mt-20">
            <h1 className="text-2xl lg:text-4xl font-bold text-hijau pt-16 text-center">Frequently Asked Questions</h1>
            <div className="normal-case mt-10">
                {Quest.map((item) =>(
                    <div key={item.id} style={{
                    }} className={`hide-show-div2 ${show[item.id] ? 'show2' : 'border-b border-slate-400 w-[80%] mx-auto py-2'}`}>
                        <button onClick={() => toggleVisibility(item.name)} className="text-start normal-case border-none">
                            {show[item.name] ? '' : ''}
                            <div className="font-bold text-hijau">{item.name}</div>
                            {show[item.name] && <div className="mt-2 ms-4 text-hijau ">{item.answer}</div>}
                        </button>
                    </div>   
                ))}
            </div>

            </section>

        </div>
    )
}
export default Aps