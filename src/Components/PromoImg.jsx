import React, {useState} from "react";
import { PromoGambar } from "./js/PromoGambar";
import "../../src/plugin/css/navbar.css"
import "../../src/plugin/css/promo.css"

const PromoImg =() =>{
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [hiddenImages, setHiddenImages] = useState([]);
    
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setHiddenImages([]);
    };
    
    const filteredData = selectedCategory === 'All'
        ? PromoGambar
        : PromoGambar.filter(item => item.category === selectedCategory);

    const visibleImages = filteredData.filter(item => !hiddenImages.includes(item.id));
    
    return (
        <div>
            <div className="text-center text-sm lg:text-base text-hijau font-bold flex flex-wrap gap-3 lg:gap-8 justify-center w-[85%] mx-auto">
                <button id="onclick" onClick={() => handleCategoryChange('All')} className={selectedCategory === 'All' ? 'activee' : ''}>All</button>
                <button id="onclick" onClick={() => handleCategoryChange('Kulo')} className={selectedCategory === 'Kulo' ? 'activee' : ''}>Kulo</button>
                <button id="onclick" onClick={() => handleCategoryChange('Pochijang')} className={selectedCategory === 'Pochijang' ? 'activee' : ''}>Pochijang</button>
                <button id="onclick" onClick={() => handleCategoryChange('Xiboba')} className={selectedCategory === 'Xiboba' ? 'activee' : ''}>Xiboba</button>
                <button id="onclick" onClick={() => handleCategoryChange('Kitamura')} className={selectedCategory === 'Kitamura' ? 'activee' : ''}>Kitamura</button>
                <button id="onclick" onClick={() => handleCategoryChange('Bu-eva')} className={selectedCategory === 'Bu-eva' ? 'activee' : ''}>bu eva</button>
                <button id="onclick" onClick={() => handleCategoryChange('Mazeru')} className={selectedCategory === 'Mazeru' ? 'activee' : ''}>Mazeru</button>
                <button id="onclick" onClick={() => handleCategoryChange('Oseng-mie')} className={selectedCategory === 'Oseng-mie' ? 'activee' : ''}>oseng mie jontor</button>
                <button id="onclick" onClick={() => handleCategoryChange('Xiji')} className={selectedCategory === 'Xiji' ? 'activee' : ''}>xiji</button>
                <button id="onclick" onClick={() => handleCategoryChange('Mo-tahu-aja')} className={selectedCategory === 'Mo-tahu-aja' ? 'activee' : ''}>mo tahu aja</button>
            </div>
            <div className="text-center text-sm lg:text-base mt-5 text-hijau font-bold flex gap-3 lg:gap-8 justify-center w-[85%] mx-auto">
                <button id="onclick" onClick={() => handleCategoryChange('absolute')} className={selectedCategory === 'absolute' ? 'activee' : ''}>absolute</button>
                <button id="onclick" onClick={() => handleCategoryChange('ela-geprek')} className={selectedCategory === 'ela-geprek' ? 'activee' : ''}>ela geprek dougnuths</button>
            </div>
            <div className="w-[85%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5">
                {visibleImages.map(item => (
                <div key={item.id} className="image-container img-hover-zoom">
                    <img src={item.image} alt={item.name} loading="lazy" className=" cursor-pointer"/>
                </div>
                ))}
            </div>
        </div>
    );
}
export default PromoImg