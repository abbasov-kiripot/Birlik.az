// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import "./BrandSliderThree.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Şəkillərin ayrıca import edilməsi
import Oppo from "../../assets/image/Oppo.png";
import Dyson from "../../assets/image/Dyson.png";
import Schafer from "../../assets/image/SCHAFER.png";
import Huawei from "../../assets/image/Huaweinewlogo.png";
import Hp from "../../assets/image/Hp.png";
import Acer from "../../assets/image/Acer.png";
import Panasonic from "../../assets/image/Panasonic.png";
import Electrolux from "../../assets/image/Electrolux.png";
import Braun from "../../assets/image/Braun.png";
import Applenewlogo from "../../assets/image/Applenewlogo.png";
import Blackwiev from "../../assets/image/Blackwiev.png";
import Gorenje from "../../assets/image/Gorenje.png";
import Hoffmann from "../../assets/image/Hoffmann.png";
import Lenovo from "../../assets/image/Lenovo.png";
import Philips from "../../assets/image/Philips.png";
import SamsungLogo from "../../assets/image/SamsungLogo.png";
import Sony from "../../assets/image/Sony.png";
import Tefal from "../../assets/image/Tefal.png";
import Toshiba from "../../assets/image/Toshiba.png";
import Xiaominewlogo from "../../assets/image/Xiaominewlogo.png";

// Yenilənmiş brands massivi
const brands = [
  { id: 1, name: "oppo", img: Oppo },
  { id: 2, name: "dyson", img: Dyson },
  { id: 3, name: "schafer", img: Schafer },
  { id: 4, name: "huawei", img: Huawei },
  { id: 5, name: "hp", img: Hp },
  { id: 6, name: "acer", img: Acer },
  { id: 7, name: "panasonic", img: Panasonic },
  { id: 8, name: "electrolux", img: Electrolux },
  { id: 9, name: "braun", img: Braun },
  { id: 10, name: "applenewlogo", img: Applenewlogo },
  { id: 11, name: "blackwiev", img: Blackwiev },
  { id: 12, name: "gorenje", img: Gorenje },
  { id: 13, name: "hoffmann", img: Hoffmann },
  { id: 14, name: "lenovo", img: Lenovo },
  { id: 15, name: "philips", img: Philips },
  { id: 16, name: "samsunglogo", img: SamsungLogo },
  { id: 17, name: "sony", img: Sony },
  { id: 18, name: "tefal", img: Tefal },
  { id: 19, name: "toshiba", img: Toshiba },
  { id: 20, name: "xiaominewlogo", img: Xiaominewlogo },
];

const BrandSliderThree = () => {
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
    <div className="brand-slider-three-3">
      <Slider {...settings}>
        {brands.map((brand) => (
          <div key={brand.id} className="brand-item-3">
            <img src={brand.img} alt={brand.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandSliderThree;
