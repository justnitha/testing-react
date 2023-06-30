import React, { useEffect, useState } from 'react';

const Popup = () => {
    const [isOpen, setIsOpen] = useState(false);
  

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true); // Set isOpen to true after 3 seconds
        }, 3000);
  
        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setIsOpen(false);
    };

    return (
        <div>
        {isOpen && (
            <div className="fixed lg:bottom-20 md:bottom-[28rem] text-white hover:text-slate-400 right-0">
            
                <a onClick={closePopup} href="#/partnership">
                    <img src={require ('../plugin/img/TOOL.png')} className='ms-auto w-[50%] lg:w-[90%]' />
                </a>
            </div>
        )}
        </div>
    );
};

export default Popup;