import background from "../../plugin/img/app-image.png";
import background1 from "../../plugin/img/app-bg2.png";
import "../../plugin/font-awesome/css/all.css"
import { Quest } from "../js/Quest";
import React, { useState } from "react";

const Aps =() => {
    const [show,setShow] = useState({});

    const toggleVisibility = (divId) => {
        setShow((prevState) => ({
            ...prevState,
            [divId]: !prevState[divId]
        }))
    }
    return (
        <div>
            <div className="h-[90vh]" style={{ backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat", backgroundSize:'cover'}}></div>
            <section className="text-center">
                <h1 className="text-4xl font-bold text-hijau pt-16 pb-6">Halo SobatKuloku!</h1>
                <p className="text-sm">Selamat datang di KULO App!</p>
                <p className="text-sm py-10">
                    Kulo App adalah membership dari Kulo Group dimana kamu bisa mendapatkan berbagai kemudahan untuk memesan makanan dan minuman dari Brand <br /> Kedai Kopi Kulo, Pochajjang, Kitamura, Mazeru, Xiji, Xiboba, Oseng Mie Jontor, Bu Eva Spesial Sambal, Mo Tahu Aja!, Ela! Greek Doughnuts dan Absolutea. Kamu <br /> juga bisa mengumpulkan dan menukarkan poin menjadi produk makanan/ minuman di setiap brand Kulo Group.
                </p>
            </section>
            {/* jadi member */}
            <section className="text-center mt-12">
                <h1 className="text-sm font-bold text-hijau pt-16 pb-6">JADI MEMBER <br />
                    <span className="text-4xl">BANYAK MANFAATNYA</span>
                </h1>
                <hr className="w-16 mx-auto bg-green-600 h-1" />
                <div className="flex items-center justify-between mt-20 container mx-auto h-[70vh]">
                    <div className="w-[35%] me-6 h-full py-10">
                        <a href="#" className="flex items-start py-4 gap-6">
                            <div className="text-end">
                                <h3 className="text-lg font-bold text-hijau uppercase" > penawaran spesial</h3>
                                <p className="text-xs">Khusus untuk kamu sobat Kuloku, dapatkan berbagai program spesial yang hanya berlaku di aplikasi KULO.</p>
                            </div>
                            <div className="bg-hijau hover:bg-slate-600 cursor-pointer py-6 px-5 rounded-full">
                                <i class="fa-regular fa-star fa-2xl text-white"></i>
                            </div>
                        </a>
                        <a href="#" className="flex items-start gap-6 mt-9 py-4">
                            <div className="text-end">
                                <h3 className="text-lg font-bold text-hijau uppercase" > loyality point</h3>
                                <p className="text-xs">Hanya dengan registrasi di aplikasi KULO, kamu bisa mendapatkan poin dari setiap transaksi baik lewat aplikasi maupun datang langsung ke outlet. Poin ini dapat ditukarkan dengan berbagai rewards.​</p>
                            </div>
                            <div className="bg-hijau hover:bg-slate-600 cursor-pointer py-6 px-5 rounded-full">
                                <i class="fa-solid fa-coins fa-2xl text-white"></i>
                            </div>
                        </a>
                        <a href="#" className="flex items-start gap-6 mt-8">
                            <div className="text-end">
                                <h3 className="text-lg font-bold text-hijau uppercase">rewards</h3>
                                <p className="text-xs">Ikuti berbagai Challenges yang seru di aplikasi KULO dan dapatkan extra poin​</p>
                            </div>
                            <div className="bg-hijau hover:bg-slate-600 cursor-pointer py-6 px-6 rounded-full">
                                <i class="fa-solid fa-award fa-2xl text-white"></i>
                            </div>
                        </a>
                    </div>
                   
                    <div className="w-[30%] h-full">
                        <img src="https://kulogroup.com/wp-content/uploads/2021/05/KuloApp-Preview.png" alt="app-kulo" className="w-full h-full" />
                    </div>

                    <div className="w-[35%] ms-10 h-full py-10">
                        <a href="#" className="flex items-start gap-6 py-4">
                            <div className="bg-hijau hover:bg-slate-600 cursor-pointer py-6 px-5 rounded-full">
                                <i class="fa-solid fa-paper-plane fa-2xl text-white"></i>
                            </div>
                            <div className="text-start">
                                <h3 className="text-lg font-bold text-hijau uppercase" >pick up & dilevery</h3>
                                <p className="text-xs">Dapat memilih untuk mengambil atau meminta pesananmu diantar dari outlet terdekatmu​</p>
                            </div>
                        </a>
                        <a href="#" className="flex items-start gap-6 mt-9 py-4">
                            <div className="bg-hijau hover:bg-slate-600 cursor-pointer py-7 px-5 rounded-full">
                                <i class="fa-solid fa-user-group fa-2xl text-white"></i>
                            </div>
                            <div className="text-start">
                                <h3 className="text-lg font-bold text-hijau uppercase" >program referal</h3>
                                <p className="text-xs">Ajak Kerabatmu sebanyak mungkin untuk bergabung menjadi member kuloku loyalty program dan dapatkan free item atau bonus poin dari Kulo Group</p>
                            </div>
                        </a>
                        <a href="#" className="flex items-start gap-6 mt-12">
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
                <h1 className="text-4xl font-extrabold text-center text-hijau pt-16 pb-6 uppercase">promo kulo app terbaru</h1>
                <div className="flex">
                    <div class="text-center px-2 cursor-pointer">
                        <img src="https://kulogroup.com/wp-content/uploads/2021/09/Promo-Absolutea-September.jpg" alt="ss" />
                        <p className="text-xs uppercase text-hijau mt-4">absolutea</p>
                        <p className=" uppercase text-hijau text-xl font-extrabold -mt-2">discount 60%</p>
                        <button className="bg-hijau text-white hover:bg-slate-600 text-xs px-4 py-2 rounded-full mt-5">
                            <a href="#">Info Selengkapnya<i class="fa-solid fa-arrow-right ms-2"style={{color:"#ffffff"}} ></i></a>
                        </button>
                    </div>
                    <div class="text-center px-2 cursor-pointer">
                        <img src="https://kulogroup.com/wp-content/uploads/2021/09/Xiji-promo-discount-60.jpg" alt="ss" />
                        <p className="text-xs uppercase text-hijau mt-4">xiji</p>
                        <p className=" uppercase text-hijau text-xl font-extrabold -mt-2">discount 60%</p>
                        <button className="bg-hijau text-white hover:bg-slate-600 text-xs px-4 py-2 rounded-full mt-5">
                            <a href="#">Info Selengkapnya<i class="fa-solid fa-arrow-right ms-2"style={{color:"#ffffff"}} ></i></a>
                        </button>
                    </div>
                    <div class="text-center px-2 cursor-pointer">
                        <img src="https://kulogroup.com/wp-content/uploads/2021/09/promo-xiboba-september.jpg" alt="ss" />
                        <p className="text-xs uppercase text-hijau mt-4">xiboba</p>
                        <p className=" uppercase text-hijau text-xl font-extrabold -mt-2">discount 60%</p>
                        <button className="bg-hijau text-white hover:bg-slate-600 text-xs px-4 py-2 rounded-full mt-5">
                            <a href="#">Info Selengkapnya<i class="fa-solid fa-arrow-right ms-2"style={{color:"#ffffff"}} ></i></a>
                        </button>
                    </div>
                    <div class="text-center px-2 cursor-pointer">
                        <img src="https://kulogroup.com/wp-content/uploads/2021/09/ela-promo-september-.jpg" alt="ss" />
                        <p className="text-xs uppercase text-hijau mt-4">ela greek dougnuhts</p>
                        <p className=" uppercase text-hijau text-xl font-extrabold -mt-2">discount 60%</p>
                        <button className="bg-hijau text-white hover:bg-slate-600 text-xs px-4 py-2 rounded-full mt-5">
                            <a href="#">Info Selengkapnya<i class="fa-solid fa-arrow-right ms-2"style={{color:"#ffffff"}} ></i></a>
                        </button>
                    </div>
                    <div class="text-center px-2 cursor-pointer">
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
            <section className="container mx-auto py-16 mt-20">
                <h1 className="text-4xl font-extrabold text-center text-hijau pt-16 pb-6 uppercase">3 langkah mudah jadi member kulo</h1>
                <hr className="w-16 mx-auto bg-green-600 h-1" />
                <div className="flex mt-24 justify-center">
                    <div className="text-center w-[24%]">
                        <i class="fa-solid fa-download fa-4x text-white p-6 bg-hijau hover:text-slate-400 rounded-full"></i>
                        <p className="font-extrabold my-5 text-sm uppercase text-hijau">01. download</p>
                        <p className="text-xs px-9">
                            Kamu Bisa Mengunduh Aplikasi Kulo Yang Sudah Tersedia Di Playstore (Android) Dan Appstore (IOS)
                        </p>
                    </div>
                    <div>
                        <i class="fa-solid fa-chevron-right fa-3x mt-10 text-hijau"></i>
                    </div>
                    <div className="text-center w-[24%]">
                        <i class="fa-regular fa-id-card fa-4x text-white p-6 bg-hijau hover:text-slate-400 rounded-full"></i>
                        <p className="font-extrabold my-5 text-sm uppercase text-hijau">02. registrasi</p>
                        <p className="text-xs px-10">
                            Di Aplikasi KULO, Kamu Bisa Mendaftarkan Diri Dengan Email Dan Nomor Telepon Yang Saat Ini Digunakan/Aktif.
                        </p>
                    </div>
                    <div>
                        <i class="fa-solid fa-chevron-right fa-3x mt-10 text-hijau"></i>
                    </div>
                    <div className="text-center w-[24%]">
                        <i class="fa-solid fa-cart-shopping fa-4x text-white p-6 bg-hijau hover:text-slate-400 rounded-full"></i>
                        <p className="font-extrabold my-5 text-sm uppercase text-hijau ">03. shopping time</p>
                        <p className="text-xs px-9">
                            Akun Yang Terdaftar Akan Langsung Mendapatkan 250 Kuloku Poin Yang Bisa Di Redeem Di Semua Brand
                        </p>
                    </div>
                </div>
            </section>
            <div className="h-[50vh] mt-32" style={{ backgroundImage:`url(${background1})`,backgroundRepeat:"no-repeat", backgroundSize:'cover'}}></div>
            {/* question */}
            <section className="mt-20">
            <h1 className="text-4xl font-bold text-hijau pt-16 text-center">Frequently Asked Questions</h1>
            <div className="normal-case mt-10">
                {Quest.map((item) =>(
                    <div key={item.id} style={{
                        // display: show[item.name] ? '' : '',
                        width: '60%',
                        padding: '10px',
                        borderBottomWidth:"2px",
                        borderColor:'slate',
                        margin:"auto",
                    }} className="text-sm">
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