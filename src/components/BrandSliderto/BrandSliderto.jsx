import React from "react";
import Slider from "react-slick";
import "./BrandSliderto.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Şəkillərin ayrıca import edilməsi
import adidas from "../../assets/image/adidas.png";
import englishhome from "../../assets/image/englishhome.png";
import Schafer from "../../assets/image/SCHAFER.png";
import arzum from "../../assets/image/arzum.png";
import esman from "../../assets/image/esman.png";
import koton from "../../assets/image/koton.jpg";
import puma from "../../assets/image/puma.png";
import lav from "../../assets/image/lav.png";
import nike from "../../assets/image/nike.png";
import nivea from "../../assets/image/nivea.png";
import tıwıst from "../../assets/image/tıwıst.png";

// Yenilənmiş brands massivi
const brands = [
  { id: 1, name: "oppo", img: adidas },
  { id: 2, name: "dyson", img: nike },
  { id: 3, name: "schafer", img: Schafer },
  { id: 4, name: "huawei", img: englishhome },
  { id: 5, name: "hp", img: koton },
  { id: 6, name: "acer", img: puma },
  { id: 7, name: "panasonic", img: nivea },
  { id: 8, name: "electrolux", img: tıwıst },
  { id: 9, name: "braun", img: arzum },
  { id: 10, name: "applenewlogo", img: lav },
  { id: 11, name: "blackwiev", img: esman },
];

const BrandSliderto = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="brand-slider-to">
      <Slider {...settings}>
        {brands.map((brand) => (
          <div key={brand.id} className="brand-item">
            <img src={brand.img} alt={brand.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandSliderto;
