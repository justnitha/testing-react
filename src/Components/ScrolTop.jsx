import React, {useState} from "react";
import "../plugin/font-awesome/css/all.css";


const Scroll =() => {
    const [showButton, setShowButton] = useState(false);
    const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 20) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
    };
    const scrollToTop = () => {
        window.scrollTo({
             top: 0, 
             behavior: 'smooth'
            });
    };
    window.addEventListener('scroll', handleScroll);

    return(
        <div>
        {/* Content of your page */}
        <div className="fixed bottom-3 text-white hover:text-slate-400 right-3">
        {showButton && (
          <button className="z-1 rounded-full px-3 py-2 bg-hijau border-none" onClick={scrollToTop}>
            <i class="fa-solid fa-arrow-up fa-xl"></i>
          </button>
        )}
        </div>
        
      </div>
    )
}
export default Scroll