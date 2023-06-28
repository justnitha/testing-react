const Footer = () => {
    return(
        <footer className="bg-[#243128] mt-24 text-white">
            <div className='container mx-auto pt-20 px-10'>
                <img src={ require ('../plugin/img/logoFooter.png')} alt="LFooter"  className=' w-[5rem]'/>
                <div className="lg:flex sm:flex justify-between border-b-2 pb-16">
                    <div className="lg:w-[25%] sm:w-[25%] bg-red py-3 text-sm font-thin">
                        <small>
                            Kulo Group merupakan salah satu grup F&B yang berkembang secara pesat di Indonesia. Kulo Group telah memiliki lebih dari 1.500 outlet yang tersebar dari Sabang sampai Merauke. Kulo Group mendorong setiap brand untuk tetap memenuhi dan memahami kebutuhan pelanggan secara konsisten dengan menghadirkan konsep makanan dan minuman yang berkualitas, modern, bervariasi, terjangkau, dan sesuai selera masyarakat Indonesia.
                        </small>
                    </div>
                    <div className="lg:w-[15%] sm:w-[15%]">
                        <h1 className='text-lg font-bold py-3'>CORPORATE</h1>
                        <ul className='uppercase text-[11px] lg:text-xs font-medium leading-6'>
                            <li className="hover:text-green-500 border-none"><a href="/about">About</a></li>
                            <li className="hover:text-green-500 border-none"><a href="/promo">promo</a></li>
                            <li className="hover:text-green-500 border-none"><a href="/partnership">partnership</a></li>
                            <li className="hover:text-green-500 border-none"><a href="/partnership">company profile</a></li>
                            <li className="hover:text-green-500 border-none"><a href="/partnership">kulo app</a></li>
                            <li className="hover:text-green-500 border-none"><a href="/partnership">career</a></li>
                            <li className="hover:text-green-500 border-none"><a href="/contact">contact us</a></li>
                        </ul>
                    </div>
                    <div className="lg:w-[15%] sm:w-[15%]">
                        <h1 className='text-lg font-bold py-3'>BRANDS</h1>
                        <ul className='upercase text-[11px] lg:text-xs font-medium leading-6'>
                            <li className='hover:text-green-500 border-none uppercase'><a href="#">Kedai Kopi Kulo</a></li>
                            <li className='hover:text-green-500 border-none uppercase'><a href="#">pochajjang</a></li>
                            <li className='hover:text-green-500 border-none uppercase'><a href="#">xiboba</a></li>
                            <li className='hover:text-green-500 border-none uppercase'><a href="#">Mazeru</a></li>
                            <li className='hover:text-green-500 border-none uppercase'><a href="#">kitamura</a></li>
                            <li className='hover:text-green-500 border-none uppercase'><a href="#">xiji</a></li>
                            <li className='hover:text-green-500 border-none uppercase'><a href="#">bu eva spesial sambal</a></li>
                            <li className='hover:text-green-500 border-none uppercase'><a href="#">oseng mie jontor</a></li>
                            <li className='hover:text-green-500 border-none uppercase'><a href="#">mo tahu aja!</a></li>
                            <li className='hover:text-green-500 border-none uppercase'><a href="#">ela greek doughnuts</a></li>
                            <li className='hover:text-green-500 border-none uppercase'><a href="#">absolutea</a></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='uppercase text-lg font-bold py-3'>connect with us</h1>
                        <ul className='flex gap-4 mt-2'>
                            <li className='border-none'><a href="https://www.facebook.com/kulogroup?_rdc=1&_rdr"><i class="fa-brands fa-facebook fa-2xl icon" ></i></a></li>
                            <li className='border-none'><a href="https://www.instagram.com/kedaikopikulo/?hl=en"><i class="fa-brands fa-instagram fa-2xl icon"></i></a></li>
                        </ul>
                        <h1 className='uppercase mt-12 text-lg font-bold py-3'>download app</h1>
                        <ul className='flex gap-4 mt-2 '>
                            <li className='border-none'><a href="https://apps.apple.com/id/app/kulo/id1517045320"><i class="fa-brands fa-apple lg:fa-2x fa-3x icon"></i></a></li>
                            <li className='border-none'><a href="https://www.instagram.com/kedaikopikulo/?hl=en"><i class="fa-brands fa-google-play lg:fa-2xl fa-3x  icon"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-between items-center text-xs pt-1 pb-6'>
                    <p>© 2021 KULOGROUP. All Rights Reserved</p>
                    <a href="https://kulogroup.com/privacy/">Privacy & Policy</a>
                </div>
            </div>

        </footer>
    )

}
export default Footer