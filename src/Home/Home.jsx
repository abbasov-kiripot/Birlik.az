// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Home.css";
import Header from "../components/Header/Header";
import ProductCard from "../components/ProductCard/ProductCard";
import BrandSlider from "../components/BrandSlider/BrandSlider";
import FeatureList from "../components/FeatureList/FeatureList";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel";
import ProductList from "../components/ProductList/ProductList";
import FlashDeals from "../components/FlashDeals/FlashDeals";
import BrandSliderto from "../components/BrandSliderto/BrandSliderto";
import MakeupCard from "../components/MakeupCard/MakeupCard";
import BrandSliderThree from "../components/BrandSliderThree/BrandSliderThree";


const Home = () => {
  return (
    <div>
      <Header />
      <FlashDeals/>
      <BrandSliderThree />
      <MakeupCard/>
      <BrandSliderto />
      <ProductList/>
      <BrandSlider />
      <ProductCard />
      <FeatureList/>
      <ProductCarousel/>
    </div>
  );
};

export default Home;