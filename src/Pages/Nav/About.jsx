import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Scroll from "../../Components/ScrolTop";
import '../../plugin/css/about.css';
import Animation from "../../Components/Perhitungan";

const About = () => {
   
    return(
        <div className="scroll-smooth">
            <Navbar />
            <section className="text-center max-sm:mt-40 max-sm:px-10 sm:px-10 container mx-auto sm:mt-32">
                <small className="text-sm max-sm:hidden sm:hidden md:hidden lg:inline-flex">
                    Kulo Group merupakan salah satu grup F&B yang berkembang secara pesat di Indonesia. Dimulai pada akhir tahun 2017 dengan Kedai Kopi Kulo hingga akhir tahun 2020, Kulo Group telah memiliki lebih dari 1.500 outlet yang tersebar dari Sabang sampai Merauke. Saat ini telah ada 9 brand yang berada di bawah naungan Kulo Group, yaitu Kedai Kopi Kulo, Pochajjang, Kitamura, Mazeru, Oseng Mie Jontor, Xiboba, Xiji, Bu Eva Spesial Sambal, dan Mo Tahu Aja. Melalui brand-brand ini, Kulo Group senantiasa berkomitmen untuk terus tumbuh bersama sehingga Kulo Group dapat meningkatkan peluang usaha untuk terciptanya pemerataan daya serap tenaga kerja di Indonesia. Kulo Group mendorong setiap brand untuk tetap memenuhi dan memahami kebutuhan pelanggan secara konsisten dengan menghadirkan konsep makanan dan minuman yang berkualitas, modern, bervariasi, terjangkau, dan sesuai selera masyarakat Indonesia.
                </small>
                <small className="text-sm lg:hidden">
                    Kulo Group merupakan salah satu grup F&B yang berkembang secara pesat di Indonesia. Dimulai pada akhir tahun 2017 dengan Kedai Kopi Kulo hingga akhir  tahun 2020, Kulo Group telah memiliki lebih dari 1.500 outlet yang tersebar dari Sabang sampai Merauke. Saat ini telah ada 9 brand yang berada di bawah  naungan Kulo Group, yaitu Kedai Kopi Kulo, Pochajjang, Kitamura, Mazeru, Oseng Mie Jontor, Xiboba, Xiji, Bu Eva Spesial Sambal, dan Mo Tahu Aja. Melalui  brand-brand ini, Kulo Group senantiasa berkomitmen untuk terus tumbuh bersama sehingga Kulo Group dapat meningkatkan peluang usaha untuk terciptanya  pemerataan daya serap tenaga kerja di Indonesia. Kulo Group mendorong setiap brand untuk tetap memenuhi dan memahami kebutuhan pelanggan secara konsisten dengan menghadirkan konsep makanan dan minuman yang berkualitas, modern, bervariasi, terjangkau, dan sesuai selera masyarakat Indonesia.
                </small>
                <div className="flex lg:justify-around sm:justify-around justify-between mt-16">
                    <div>
                    <h1 className="text-2xl lg:text-4xl font-bold"><Animation targetValue={11} /></h1>
                    <small className="text-[10px] lg:text-sm">Merk food & beverages</small>
                    </div>
                    <div>
                    <h1 className="text-2xl lg:text-4xl font-bold"><Animation targetValue={1500} /></h1>
                    <small className="text-[10px] lg:text-sm">Outlet di seluruh Indonesia</small>
                    </div>
                    <div>
                    <h1 className="text-2xl lg:text-4xl font-bold"><Animation targetValue={360} /></h1>
                    <small className="text-[10px] lg:text-sm">Menu Favorit</small>
                    </div>
                </div>
            </section>
            {/* Main menu fav */}
            <section className=" mt-28">
                <div className="text-center px-5">
                    <h1 className="uppercase text-4xl font-bold text-hijau">MASTERPIECE</h1>
                    <p className="text-sm mt-5">KULO Group telah melahirkan brand-brand F&B  yang berkualitas, modern, bervariasi, terjangkau, <br /> dan sesuai selera masyarakat Indonesia.</p>
                </div>
                <div className="lg:flex mt-24 sm:grid grid-cols-3">
                    <div class="containerr lg:w-[25%] cursor-pointer lg:hidden ">
                        <img src={require ('../../plugin/img/kkulo.png')} alt="kulo" loading="lazy" className=""/>
                        <a href="#" class="middle">
                            <img src={require('../../plugin/img/kulogroup.png')} alt="kitamura" loading="lazy"/>
                        </a>
                    </div>
                    <div class="containerr lg:w-[25%] cursor-pointer lg:hidden ">
                        <img src={require ('../../plugin/img/jumboKulo2.jpg')} alt="kulo" loading="lazy"/>
                        <a href="#" class="middle">
                            <img src={require('../../plugin/img/All-Brands.png')} alt="kitamura" loading="lazy"/>
                        </a>
                    </div>
                    <div class="containerr lg:w-[25%] cursor-pointer lg:hidden  ">
                        <img src={require ('../../plugin/img/pochajjang-Interior7.jpg')} alt="kulo" loading="lazy"/>
                        <a href="#" class="middle">
                            <img src={require('../../plugin/img/pochajang1.png')} alt="kitamura" loading="lazy"/>
                        </a>
                    </div>
                    <div class="containerr lg:w-[25%] cursor-pointer lg:hidden ">
                        <img src={require ('../../plugin/img/xiboba-biscoff.jpg')} alt="kulo" loading="lazy"/>
                        <a href="#" class="middle">
                            <img src={require('../../plugin/img/xiboba1.png')} alt="kitamura" loading="lazy"/>
                        </a>
                    </div>
                    <div class="containerr lg:w-[25%] cursor-pointer">
                        <img src={require ('../../plugin/img/kitamura.jpg')} alt="kitamura" loading="lazy"/>
                        <a href="#" class="middle">
                            <img src={require('../../plugin/img/kitamura-hover.png')} alt="kitamura" loading="lazy"/>
                        </a>
                    </div>
                    <div class="containerr lg:w-[25%] cursor-pointer  ">
                        <img src={require ('../../plugin/img/oseng-mie.jpg')} alt="mie-oseng" loading="lazy"/>
                        <a href="#" class="middle">
                            <img src={require ('../../plugin/img/mie-oseng-hover.png')} alt="mie-oseng" loading="lazy"/>
                        </a>
                    </div>
                    <div class="containerr lg:w-[25%] cursor-pointer  ">
                        <img src={require ('../../plugin/img/mazeru.jpg')} alt="mazeru" loading="lazy"/>
                        <a href="#" class="middle">
                            <img src={require ('../../plugin/img/mazeru-hover.png')} alt="mazseru" loading="lazy"/>
                        </a>
                    </div>
                    <div class="containerr lg:w-[25%] cursor-pointer  ">
                        <img src={require ('../../plugin/img/bu-eva-sambal.jpg')} alt="bu-eva-sambal" loading="lazy"/> 
                        <a href="#" class="middle">
                            <img src={require ('../../plugin/img/bu-eva-sambal-hover.png')} alt="ecva-sambal" loading="lazy"/>
                        </a>
                    </div>
                    <div class="containerr lg:w-[25%] cursor-pointer lg:hidden ">
                        <img src={require ('../../plugin/img/xiji2.jpg')} alt="bu-eva-sambal" loading="lazy"/> 
                        <a href="#" class="middle">
                            <img src={require ('../../plugin/img/xiji-hover.png')} alt="ecva-sambal" loading="lazy"/>
                        </a>
                    </div>
                </div>
                <div className="lg:flex -mt-1 grid sm:grid-cols-3 md:grid-cols-3">
                    <div class="containerr lg:w-[25%] lg:h-[19.48rem] h-[26.39rem] lg:block hidden cursor-pointer">
                        <img src={require ('../../plugin/img/xiji.jpg')} alt="xiji" loading="lazy" className="lg:h-[19.48rem] lg:w-full"/>
                        <a href="#" class="middle">
                            <img src={require ('../../plugin/img/xiji-hover.png')} alt="ecva-sambal" loading="lazy"/>
                        </a>
                    </div>
                    <div class="containerr lg:w-[25%]  cursor-pointer">
                        <img src={require ('../../plugin/img/absolutea-menu.jpg')} alt="absolute" loading="lazy" className="lg:h-[19.48rem] lg:w-full"/>
                        <a href="#" class="middle">
                            <img src={require ('../../plugin/img/absolute-hover.png')} alt="absolute" loading="lazy"/>
                        </a>
                    </div>
                    <div class="containerr lg:w-[25%]  cursor-pointer">
                        <img src={require ('../../plugin/img/motahumenu.jpg')} alt="motahu" loading="lazy" className="lg:h-[19.48rem] lg:w-full"/>
                        <a href="#" class="middle">
                            <img src={require ('../../plugin/img/motahu-hover.png')} alt="motahu" loading="lazy"/>
                        </a>
                    </div>
                    <div class="containerr lg:w-[25%]  cursor-pointer">
                        <img src={require ('../../plugin/img/EL-IMAGE-BANK-11.jpg')} alt="ela" loading="lazy" className="lg:h-[19.48rem] lg:w-full"/>
                        <a href="#" class="middle">
                            <img src={require ('../../plugin/img/ea-hover.png')} alt="ela" loading="lazy"/>
                        </a>
                    </div>
                </div>
            </section>
            
            <Footer/>
            <Scroll/>
                
           

           
        </div>  
    )
}
export default About