// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  FaBalanceScale,
  FaHeart,
  FaRegHeart,
  FaShoppingCart,
  FaRegStar,
  FaRegCommentDots,
} from "react-icons/fa";
import "./ProductCard.css";

import { addToCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";

const ProductCard = () => {
  // Üçlü kart dizisi (toplam 9 ürün)
  const products = [
    {
      id: 1,
      name: "Apple iPhone 13 128GB MIDNIGHT",
      image: "https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_SL1500_.jpg",
      discount: "-150 ₼",
      oldPrice: 1299.99,
      newPrice: 1149.99,
      installmentPrice: { months: 12, pricePerMonth: 108.33 },
      reviewsCount: 0,
      rating: 0,
      isFavorite: false,
    },
    {
      id: 2,
      name: "Smartfon Samsung Galaxy S24 Ultra 12GB/256GB TITANIUM VIOLET (S928)",
      image:
        "https://new.bakuelectronics.az/_next/image?url=https%3A%2F%2Fimg.b-e.az%2Fmedia%2FinventImages%2Fsmartfon-samsung-galaxy-s24-ultra-12gb256gb-titanium-violet-s928_1.webp&w=3840&q=75",
      discount: "-200 ₼",
      oldPrice: 1499.99,
      newPrice: 1299.99,
      installmentPrice: { months: 12, pricePerMonth: 108.33 },
      reviewsCount: 1024,
      rating: 4.5,
      isFavorite: false,
    },
    {
      id: 3,
      name: "Smartfon Apple iPhone 15 128GB BLACK",
      image:
        "https://new.bakuelectronics.az/_next/image?url=https%3A%2F%2Fimg.b-e.az%2Fmedia%2FinventImages%2Fsmartfon-apple-iphone-15-128gb-black_1.webp&w=3840&q=75",
      discount: "-100 ₼",
      oldPrice: 1199.99,
      newPrice: 1099.99,
      installmentPrice: { months: 12, pricePerMonth: 91.67 },
      reviewsCount: 512,
      rating: 4.7,
      isFavorite: false,
    },
    {
      id: 4,
      name: "Notbuk Lenovo IdeaPad 3 15IAU7/ 15.6' FHD IPS 300nits/ i5 1235U/ 8GB/ 512GB",
      image:
        "https://new.bakuelectronics.az/_next/image?url=https%3A%2F%2Fimg.b-e.az%2Fmedia%2FinventImages%2Fnotbuk-lenovo-ideapad-3-15iau7-156-fhd-ips-300nits-i5-1235u-8gb-512gb-ssd-_VrGRej6.webp&w=3840&q=75",
      discount: "-300 ₼",
      oldPrice: 2499.99,
      newPrice: 2199.99,
      installmentPrice: { months: 12, pricePerMonth: 183.33 },
      reviewsCount: 215,
      rating: 4.8,
      isFavorite: false,
    },
    {
      id: 5,
      name: "Apple MacBook Pro 16 M3 Pro (12C CPU/18C GPU) 36GB, 512GB SSD -",
      image:
        "https://new.bakuelectronics.az/_next/image?url=https%3A%2F%2Fimg.b-e.az%2Fmedia%2FinventImages%2Fapple-macbook-pro-16-m3-pro-12c-cpu18c-gpu-36gb-512gb-ssd-space-black-mrw23rua_1.webp&w=3840&q=75",
      discount: "-350 ₼",
      oldPrice: 2599.99,
      newPrice: 2249.99,
      installmentPrice: { months: 12, pricePerMonth: 187.5 },
      reviewsCount: 400,
      rating: 4.6,
      isFavorite: false,
    },
    {
      id: 6,
      name: "Smartfon Apple iPhone 15 PRO MAX 256GB NATURAL TITANIUM",
      image:
        "https://new.bakuelectronics.az/_next/image?url=https%3A%2F%2Fimg.b-e.az%2Fmedia%2FinventImages%2Fsmartfon-apple-iphone-15-pro-max-256gb-natural-titanium_1.webp&w=3840&q=75",
      discount: "-200 ₼",
      oldPrice: 1399.99,
      newPrice: 1199.99,
      installmentPrice: { months: 12, pricePerMonth: 99.99 },
      reviewsCount: 1200,
      rating: 4.4,
      isFavorite: false,
    },
    {
      id: 7,
      name: "Smart saat BOROFONE BD7 GRAY",
      image:
        "https://new.bakuelectronics.az/_next/image?url=https%3A%2F%2Fimg.b-e.az%2Fmedia%2FinventImages%2Fsmart-saat-borofone-bd7-gray_1.webp&w=3840&q=75",
      discount: "-50 ₼",
      oldPrice: 399.99,
      newPrice: 349.99,
      installmentPrice: { months: 6, pricePerMonth: 58.33 },
      reviewsCount: 1500,
      rating: 4.8,
      isFavorite: false,
    },
    {
      id: 8,
      name: "Smart saat Apple Watch Series 9 GPS, 41mm Midnight Aluminium Case With",
      image:
        "https://new.bakuelectronics.az/_next/image?url=https%3A%2F%2Fimg.b-e.az%2Fmedia%2FinventImages%2Fsmart-saat-apple-watch-series-9-gps-41mm-midnight-aluminium-case-with-midn_kacMb68.webp&w=3840&q=75",
      discount: "-100 ₼",
      oldPrice: 499.99,
      newPrice: 399.99,
      installmentPrice: { months: 6, pricePerMonth: 66.67 },
      reviewsCount: 800,
      rating: 4.7,
      isFavorite: false,
    },
  ];

  const [favorites, setFavorites] = useState(
    products.map((product) => product.isFavorite)
  );

  const toggleFavorite = (index) => {
    const updatedFavorites = [...favorites];
    updatedFavorites[index] = !updatedFavorites[index];
    setFavorites(updatedFavorites);
  };

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.newPrice,
        quantity: 1,
      })
    );
    
  };

  return (
    <div className="product-cards-2">
      {products.map((product, index) => (
        <div key={product.id} className="product-card-2">
          <div className="product-image-one">
            <div className="discount-badge">{product.discount}</div>
            <img src={product.image} alt={product.name} />
            <button className="compare-btn">
              <FaBalanceScale />
            </button>
          </div>
          <div className="product-details-2">
            <div className="product-info-2">
              <span className="rating">
                {[...Array(5)].map((_, starIndex) => (
                  <FaRegStar key={starIndex} className="star-icon" />
                ))}{" "}
              </span>
              <span className="reviews-2">
                <FaRegCommentDots /> {product.reviewsCount} rəylər
              </span>
            </div>
            <h3 className="product-title-2">{product.name}</h3>
            <div className="product-prices">
              <span className="old-price">{product.oldPrice} ₼</span>
              <span className="new-price">{product.newPrice} ₼</span>
            </div>
            <div className="instalmenttt">
              <span className="installment-price">
                {product.installmentPrice.months} ay
              </span>
              <span className="">
                {" "}
                {product.installmentPrice.pricePerMonth} ₼
              </span>
            </div>

            <div className="product-actions">
              <button
                onClick={() => handleAddToCart(product)}
                className="add-to-cart"
              >
                <FaShoppingCart /> Səbətə əlavə et
              </button>
              <button
                className="favorite-btn"
                onClick={() => toggleFavorite(index)}
              >
                {favorites[index] ? (
                  <FaHeart className="active" />
                ) : (
                  <FaRegHeart />
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
