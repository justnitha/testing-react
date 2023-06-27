import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Scroll from "../../Components/ScrolTop";
import '../../plugin/css/about.css';
import Animation from "../../Components/Perhitungan";

const About = () => {
   
    return(
        <div className="scroll-smooth">
            <Navbar />
            <section className="text-center py-16 container mx-auto">
                <small className="text-sm">
                    Kulo Group merupakan salah satu grup F&B yang berkembang secara pesat di Indonesia. Dimulai pada akhir tahun 2017 dengan Kedai Kopi Kulo hingga akhir <br /> tahun 2020, Kulo Group telah memiliki lebih dari 1.500 outlet yang tersebar dari Sabang sampai Merauke. Saat ini telah ada 9 brand yang berada di bawah <br /> naungan Kulo Group, yaitu Kedai Kopi Kulo, Pochajjang, Kitamura, Mazeru, Oseng Mie Jontor, Xiboba, Xiji, Bu Eva Spesial Sambal, dan Mo Tahu Aja. Melalui <br /> brand-brand ini, Kulo Group senantiasa berkomitmen untuk terus tumbuh bersama sehingga Kulo Group dapat meningkatkan peluang usaha untuk terciptanya <br /> pemerataan daya serap tenaga kerja di Indonesia. Kulo Group mendorong setiap brand untuk tetap memenuhi dan memahami kebutuhan pelanggan secara <br />konsisten dengan menghadirkan konsep makanan dan minuman yang berkualitas, modern, bervariasi, terjangkau, dan sesuai selera masyarakat Indonesia.
                </small>
                <div className="flex justify-around mt-16">
                    <div>
                    <h1 className="text-4xl font-bold"><Animation targetValue={11} /></h1>
                    <small className="text-sm">Merk food & beverages</small>
                    </div>
                    <div>
                    <h1 className="text-4xl font-bold"><Animation targetValue={1500} /></h1>
                    <small className="text-sm">Outlet di seluruh Indonesia</small>
                    </div>
                    <div>
                    <h1 className="text-4xl font-bold"><Animation targetValue={360} /></h1>
                    <small className="text-sm">Menu Favorit</small>
                    </div>
                </div>
            </section>
            {/* Main menu fav */}
            <section className=" mt-28">
                <div className="text-center">
                    <h1 className="uppercase text-4xl font-bold text-hijau">MASTERPIECE</h1>
                    <p className="text-sm mt-5">KULO Group telah melahirkan brand-brand F&B  yang berkualitas, modern, bervariasi, terjangkau, <br /> dan sesuai selera masyarakat Indonesia.</p>
                </div>
                <div className="flex mt-24">
                    <div class="containerr w-[25%] cursor-pointer">
                        <img src={require ('../../plugin/img/kitamura.jpg')} alt="kitamura" loading="lazy"/>
                        <a href="#" class="middle">
                            <img src={require('../../plugin/img/kitamura-hover.png')} alt="kitamura" loading="lazy"/>
                        </a>
                    </div>
                    <div class="containerr w-[25%] cursor-pointer">
                        <img src={require ('../../plugin/img/oseng-mie.jpg')} alt="mie-oseng" loading="lazy"/>
                        <a href="#" class="middle">
                            <img src={require ('../../plugin/img/mie-oseng-hover.png')} alt="mie-oseng" loading="lazy"/>
                        </a>
                    </div>
                    <div class="containerr w-[25%] cursor-pointer">
                        <img src={require ('../../plugin/img/mazeru.jpg')} alt="mazeru" loading="lazy"/>
                        <a href="#" class="middle">
                            <img src={require ('../../plugin/img/mazeru-hover.png')} alt="mazseru" loading="lazy"/>
                        </a>
                    </div>
                    <div class="containerr w-[25%] cursor-pointer">
                        <img src={require ('../../plugin/img/bu-eva-sambal.jpg')} alt="bu-eva-sambal" loading="lazy"/> 
                        <a href="#" class="middle">
                            <img src={require ('../../plugin/img/bu-eva-sambal-hover.png')} alt="ecva-sambal" loading="lazy"/>
                        </a>
                    </div>
                </div>
                <div className="flex -mt-1">
                    <div class="containerr w-[25%] h-[19.48rem] cursor-pointer">
                        <img src={require ('../../plugin/img/xiji.jpg')} alt="xiji" loading="lazy" className="h-[19.48rem] w-full"/>
                        <a href="#" class="middle">
                            <img src={require ('../../plugin/img/xiji-hover.png')} alt="ecva-sambal" loading="lazy"/>
                        </a>
                    </div>
                    <div class="containerr w-[25%] cursor-pointer">
                        <img src={require ('../../plugin/img/absolutea-menu.jpg')} alt="absolute" loading="lazy" className="h-[19.48rem] w-full"/>
                        <a href="#" class="middle">
                            <img src={require ('../../plugin/img/absolute-hover.png')} alt="absolute" loading="lazy"/>
                        </a>
                    </div>
                    <div class="containerr w-[25%] cursor-pointer">
                        <img src={require ('../../plugin/img/motahumenu.jpg')} alt="motahu" loading="lazy" className="h-[19.48rem] w-full"/>
                        <a href="#" class="middle">
                            <img src={require ('../../plugin/img/motahu-hover.png')} alt="motahu" loading="lazy"/>
                        </a>
                    </div>
                    <div class="containerr w-[25%] cursor-pointer">
                        <img src={require ('../../plugin/img/EL-IMAGE-BANK-11.jpg')} alt="ela" loading="lazy" className="h-[19.48rem] w-full"/>
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