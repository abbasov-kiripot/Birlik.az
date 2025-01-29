// App.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom"; // Sadece Routes ve Route'u içeri aktarın
import MainLayout from "./layout";
import Home from "./Home/Home";
import CombinedForm from "./pages/CombinedForm/CombinedForm";
import BrandSlider from "./components/BrandSlider/BrandSlider";
import FeatureList from "./components/FeatureList/FeatureList";
import ProductCarousel from "./components/ProductCarousel/ProductCarousel";
import ProductList from "./components/ProductList/ProductList";
import FlashDeals from "./components/FlashDeals/FlashDeals";
import BrandSliderto from "./components/BrandSliderto/BrandSliderto";
import MakeupCard from "./components/MakeupCard/MakeupCard";
import CardDetails from "./details/CardDetails/CardDetails";
import ClothesDetails from "./details/ClothesDetails/ClothesDetails";
import AccessoryDetails from "./details/AccessoryDetails/AccessoryDetails";
import OrderSuccessScreen from "./pages/OrderSuccessScreen/OrderSuccessScreen";
import OrdersPage from "./pages/OrdersPage/OrdersPage";
import WalletPage from "./pages/WalletPage/WalletPage";
import PopularProducts from "./pages/PopularProducts/PopularProducts";
import OrderForm from "./pages/OrderForm/OrderForm";
import Favorites from "./pages/Favorites/Favorites";
import BrandSliderThree from "./components/BrandSliderThree/BrandSliderThree";
import CouponPage from "./pages/CouponPage/CouponPage";
import AccountPage from "./pages/accountpage/accountpage";
import OrderDetails from "./details/OrderDetails/OrderDetails";

const App = () => {
  return (
    <div className="app">
      <Routes>
        {" "}
        {/* BrowserRouter zaten dışarıda sarmalanmış olduğundan burada sadece Routes kullanıyoruz */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/CombinedForm" element={<CombinedForm />} />
          <Route path="/BrandSlider" element={<BrandSlider />} />
          <Route path="/BrandSliderto" element={<BrandSliderto />} />
          <Route path="/BrandSliderThree" element={<BrandSliderThree />}/>
          <Route path="/FeatureList" element={<FeatureList />} />
          <Route path="/ProductCarousel" element={<ProductCarousel />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/FlashDeals" element={<FlashDeals />} />
          <Route path="/MakeupCard" element={<MakeupCard />} />
          <Route path="/ClothesDetails" element={<ClothesDetails />} />
          <Route path="/CardDetails" element={<CardDetails />} />
          <Route path="/AccessoryDetails" element={<AccessoryDetails />} />
          <Route path="/OrderSuccessScreen" element={<OrderSuccessScreen />} />
          <Route path="/OrdersPage" element={<OrdersPage />} />
          <Route path="/WalletPage" element={<WalletPage />} />
          <Route path="/PopularProducts" element={<PopularProducts />} />
          <Route path="/OrderForm" element={<OrderForm />}/>
          <Route path="/Favorites" element={<Favorites />}/>\
          <Route path="/CouponPage" element={<CouponPage />}/>
          <Route path="/AccountPage" element={<AccountPage />}/>
          <Route path="/OrderDetails" element={<OrderDetails />}/>

        </Route>
      </Routes>
    </div>
  );
};

export default App;
