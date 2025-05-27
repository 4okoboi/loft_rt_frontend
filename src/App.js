import React, {useEffect} from "react";
import "./App.css";
import OrderProcess from "./Components/OrderProcess/OrderProcess";
import ForHome from "./Components/ForHome/ForHome";
import AboutUs from "./Components/AboutUs/AboutUs"
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import {compose} from "redux";
import Header from "./Components/Header/Header";
import Error from "./Components/Error/Error";
import Home from "./Components/Home/Home";
import Catalog from "./Components/Profile/Catalog";
import Offices from "./Components/Offices/Offices";
import Salons from "./Components/Salons/Salons";
import Shops from "./Components/Shops/Shops";
import BarsAndCafes from "./Components/BarsAndCafes/BarsAndCafes";
import Restaurants from "./Components/Restaurants/Restaurants";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import Sawing from "./Components/Sawing/Sawing";
import Welding from "./Components/Welding/Welding";
import Painting from "./Components/Painting/Painting";
import {Reviews} from "./Components/Reviews/Reviews";



const App = (props) => {

    const location = useLocation();

    const hideElementUrl = "/navigate";

    const shouldHideElement = location.pathname === hideElementUrl;

    const ScrollToTop = () => {
        const { pathname } = useLocation();
    
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);
    
        return null;
    }

    return (
        <div className="grid">
            <Header/>
            <body className="add-wrapper-content">
            <ScrollToTop />
                <Routes>
                    <Route path="*" element={<Error/>} exact/>

                    <Route path="/" element={<Home/>} exact/>

                    <Route path="/home" element={<Home/>}/>

                    <Route path="/catalog" element={<Catalog/>}/>

                    <Route path="/business/offices" element={<Offices/>}/>

                    <Route path="/business/salons" element={<Salons/>}/>
                    
                    <Route path="/business/shops" element={<Shops/>}/>

                    <Route path="/business/bars_cafes" element={<BarsAndCafes/>}/>

                    <Route path="/business/restaurants" element={<Restaurants/>}/>

                    <Route path="/service/sawing" element={<Sawing/>}/>

                    <Route path="/service/welding" element={<Welding/>}/>
                    
                    <Route path="/service/painting" element={<Painting/>}/>

                    <Route path="/for_home" element={<ForHome/>}/>

                    <Route path="/about_us" element={<AboutUs/>}/>

                    <Route path="/how_it_will_be" element={<OrderProcess/>}/>

                    <Route path="/navigate" element={<Navigation/>}/>

                    <Route path="/reviews" element={<Reviews/>}/>
                </Routes>
            </body>
            {!shouldHideElement && <Footer/>}
        </div>
    );
}

export default App;