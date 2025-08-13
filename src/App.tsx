import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import BarsAndCafes from "./Components/BarsAndCafes/BarsAndCafes";
import Error from "./Components/Error/Error";
import Footer from "./Components/Footer/Footer";
import ForHome from "./Components/ForHome/ForHome";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import Offices from "./Components/Offices/Offices";
import OrderProcess from "./Components/OrderProcess/OrderProcess";
import Painting from "./Components/Painting/Painting";
import Catalog from "./Components/Profile/Catalog";
import ProductDetailPageContainer from "./Components/ProductDetailPage/ProductDetailPageContainer";
import Restaurants from "./Components/Restaurants/Restaurants";
import { Reviews } from "./Components/Reviews/Reviews";
import Salons from "./Components/Salons/Salons";
import Sawing from "./Components/Sawing/Sawing";
import Shops from "./Components/Shops/Shops";
import Welding from "./Components/Welding/Welding";

const App = () => {
  const location = useLocation();

  const hideElementUrl = "/navigate";

  const shouldHideElement = location.pathname === hideElementUrl;

  const isReviewPage = location.pathname === "/reviews";

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <div className={isReviewPage ? "review_grid" : "grid"}>
      <Header />
      <body className="add-wrapper-content">
        <ScrollToTop />
        <Routes>
          <Route path="*" element={<Error />} />

          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Home />} />

          					<Route path="/catalog" element={<Catalog />} />

					<Route path="/product/:id" element={<ProductDetailPageContainer />} />

					<Route path="/business/offices" element={<Offices />} />

          <Route path="/business/salons" element={<Salons />} />

          <Route path="/business/shops" element={<Shops />} />

          <Route path="/business/bars_cafes" element={<BarsAndCafes />} />

          <Route path="/business/restaurants" element={<Restaurants />} />

          <Route path="/service/sawing" element={<Sawing />} />

          <Route path="/service/welding" element={<Welding />} />

          <Route path="/service/painting" element={<Painting />} />

          <Route path="/for_home" element={<ForHome />} />

          <Route path="/about_us" element={<AboutUs />} />

          <Route path="/how_it_will_be" element={<OrderProcess />} />

          <Route path="/navigate" element={<Navigation />} />

          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </body>
      {!shouldHideElement && (
        <Footer
          isAuth={false}
          friends={[]}
          authorizedUserId={0}
          isShowPreloader={false}
          users={[]}
        />
      )}
    </div>
  );
};

export default App;
