// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";  // Sadece Routes ve Route'u içeri aktarın
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

const App = () => {
  return (
    <div className="app">
      <Routes>  {/* BrowserRouter zaten dışarıda sarmalanmış olduğundan burada sadece Routes kullanıyoruz */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/CombinedForm" element={<CombinedForm />} />
          <Route path="/BrandSlider" element={<BrandSlider />} />
          <Route path="/BrandSliderto" element={<BrandSliderto />} />
          <Route path="/FeatureList" element={<FeatureList />}/>
          <Route path="/ProductCarousel" element={<ProductCarousel />}/>
          <Route path="/ProductList" element={<ProductList />}/>
          <Route path="/FlashDeals" element={<FlashDeals />}/>
          <Route path="/MakeupCard" element={<MakeupCard />}/>
          <Route path="/ClothesDetails" element={<ClothesDetails />}/>
          <Route path="/CardDetails" element={<CardDetails />}/>
          <Route path="/AccessoryDetails" element={<AccessoryDetails />}/>
        </Route> 
      </Routes>
    </div>
  );
};

export default App;
