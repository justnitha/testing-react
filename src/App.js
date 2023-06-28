import React,{ useState } from "react";
import {HashRouter as Router, Routes, Route} from "react-router-dom"
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
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
        <Route path="testing-react/about" element={<About/>} />
        <Route path="testing-react/promo" element={<Promo/>} />
        <Route path="testing-react/app" element={<Aps/>} />
        <Route path="testing-react/partnership" element={<Partnership/>} />
        <Route path="testing-react/contact" element={<ContactUs/>} />
        <Route path="*" element={<Notfound />}/>
      </Routes>
    </Router>
  )
}

export default App;

