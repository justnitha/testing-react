import React,{ useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';

import Notfound from "./Pages/Nav/Notfound";  
import About from "./Pages/Nav/About";
import Brands from "./Pages/Nav/brands";
import Promo from "./Pages/Nav/Promo";
import Aps from "./Pages/Nav/App";
import Partnership from "./Pages/Nav/Partnership";
import ContactUs from "./Pages/Nav/ContactUs";


const App = function() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Brands/>} />
        <Route path="about" element={<About/>} />
        <Route path="promo" element={<Promo/>} />
        <Route path="app" element={<Aps/>} />
        <Route path="partnership" element={<Partnership/>} />
        <Route path="contact" element={<ContactUs/>} />
        <Route path="*" element={<Notfound />}/>
      </Routes>
    </Router>
  )
}

export default App;

 
//   const [getNavbarValue,setNavbarValue] = useState("");
//   const [getNavbarValue2,setNavbarValue2] = useState("");
  

//   const changeNavbarValue= function() {
//     alert("anda berhasil mengubah");
//     setNavbarValue("myConctact" );
//   };
//   const changeNavbarValue2= function() {
//     alert("anda berhasil mengubah");
//     setNavbarValue2("menang");
//   };
//   return (
//     <div className="container mx-auto">
//       <Navigation navValue={getNavbarValue} nav2={getNavbarValue2}/>
//       <h2 className="mt-10">INI Homepage</h2>
//       {/* <button onClick={()=> changeNavbarValue(changeNavbarValue2())}>Ubah Navigasi</button> */}
//       <button className="p-3 bg-purple-400  rounded-2xl" onClick={()=> changeNavbarValue()}>Ubah Navigasi</button>
//       <button className="p-3 bg-orange-400  rounded-2xl" onClick={()=> changeNavbarValue2()}>ubah2</button>
//       <p>lorem20</p>
//     </div>
//   );