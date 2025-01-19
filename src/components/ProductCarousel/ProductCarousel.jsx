// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import televizor from "../../assets/image/televizor.png";
import ps5menu from "../../assets/image/ps5menu.png";
import "./ProductCarousel.css"

const products = [
  {
    id: 1,
    name: "Apple 2024 10.9\" iPad",
    price: 799,
    reviews: 543,
    rating: 4,
    colors: ["#000000", "#0000FF", "#FF00FF", "#008080"],
    image: televizor,
  },
  {
    id: 2,
    name: "PlayStation®5 Konsolu – 1TB",
    price: 599,
    reviews: 2756,
    rating: 4.5,
    colors: ["#000000", "#0000FF", "#FF00FF", "#008080"],
    image: ps5menu,
  },
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedColors, setSelectedColors] = useState({});
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };


  const selectColor = (productId, color) => {
    setSelectedColors((prev) => ({ ...prev, [productId]: color }));
  };

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { ...product, qty: quantity }]);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [cart]);

  const currentProduct = products[currentIndex];

  return (
    <div className="product-carousel-container">
      <div className="product-carousel-content">
        <div className="product-image-section">
          <div className="product-image-wrapper">
            <img 
              src={currentProduct.image} 
              alt={currentProduct.name} 
              className="product-main-image" 
            />
          </div>
        </div>
        
        <div className="product-details-section">
          <h2 className="product-title">{currentProduct.name}</h2>
          
          <div className="product-price-rating">
            <span className="product-price"> {currentProduct.price} ₼</span>
            <div className="product-rating">
              {[...Array(5)].map((star, index) => (
                <span 
                  key={index} 
                  className={`star ${index < Math.floor(currentProduct.rating) ? 'filled' : ''}`}
                >
                  ★
                </span>
              ))}
              <span className="review-count">({currentProduct.reviews} Rəy)</span>
            </div>
          </div>
          
          <div className="product-color-selection">
            <div className="color-options">
              {currentProduct.colors.map((color) => (
                <button
                  key={color}
                  className={`color-button-2 ${selectedColors[currentProduct.id] === color ? 'selected' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => selectColor(currentProduct.id, color)}
                ></button>
              ))}
            </div>
          </div>
          
          <div className="product-quantity">
            <label htmlFor="quantity">Miqdar:</label>
            <input 
              type="number" 
              id="quantity"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </div>
          
          <div className="product-actions">
            <button className="wishlist-button">
              <FaHeart /> 
            </button>
            <button 
              className="add-to-cart-button"
              onClick={() => addToCart(currentProduct)}
            >
              <FaShoppingCart />Səbətə əlavə et
            </button>
          </div>
        </div>
      </div>
      
      <div className="product-indicator">
        {products.map((_, index) => (
          <span 
            key={index} 
            className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
