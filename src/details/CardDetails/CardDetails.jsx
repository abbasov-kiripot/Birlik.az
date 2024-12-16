import React, { useState, useEffect } from "react";
import {
  FaShoppingCart,
  FaHeart,
  FaShareAlt,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import { TbBuildingWarehouse } from "react-icons/tb";

import { IoCheckmarkCircle } from "react-icons/io5";
import "./CardDetails.css";

const CardDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedInstallment, setSelectedInstallment] = useState(null);
  const [showDetails, setShowDetails] = useState(false); const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  const product = {
    id: 1,
    name: "Poco C75 8 GB / 256 GB Gold",
    brand: "Poco",
    images: [
      "https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_SL1500_.jpg",
      "https://new.bakuelectronics.az/_next/image?url=https%3A%2F%2Fimg.b-e.az%2Fmedia%2FinventImages%2Fsmartfon-samsung-galaxy-s24-ultra-12gb256gb-titanium-violet-s928_1.webp&w=3840&q=75",
      "https://new.bakuelectronics.az/_next/image?url=https%3A%2F%2Fimg.b-e.az%2Fmedia%2FinventImages%2Fsmartfon-apple-iphone-15-128gb-black_1.webp&w=3840&q=75"
    ],
    discount: "-40 AZN",
    oldPrice: 349.99,
    newPrice: 309.99,
    installmentOptions: [
      { months: 6, pricePerMonth: 51.67, total: 309.99 },
      { months: 12, pricePerMonth: 25.83, total: 309.99 },
      { months: 18, pricePerMonth: 19.44, total: 349.99 },
    ],
    bonusCash: { cash: 3.1, installment: 3.5 },
    colors: [
      { name: "black", hex: "#000000" },
      { name: "yellow", hex: "#FFD700" },
      { name: "green", hex: "#00FF00" }
    ],
    code: "101187",
    rating: 4.5,
    reviewsCount: 127,
    shipping: "Çatdırılma pulsuz",
    warranty: "Zəmanət 1 il",
    description: "Premium dizayn və gündəlik istifadə üçün güclü performans.",
    specifications: {
      processor: "Snapdragon 695",
      display: "6.67 düymlük AMOLED",
      battery: "5000 mAh",
      camera: "64 MP + 8 MP + 2 MP",
      storage: "256 GB",
      ram: "8 GB",
    },
    reviews: [
      {
        user: "Ayşə K.",
        rating: 5,
        text: "Çox yaxşı telefondur, performansından məmnunam!"
      },
      {
        user: "Mehmet A.",
        rating: 4,
        text: "Qiymətinə görə əla seçimdir."
      }
    ],
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Slayt geçiş süresi (3 saniye)

    return () => clearInterval(interval); // Temizleme işlemi
  },);

  const slides = [
    {
      image: 'https://irshad.az/images/svg-icons/tam-card.svg',
      text: '6.94 AZN x 18 ay\nLeobank ilə 18 aya faizsiz ödə!'
    },
    {
      image: 'https://irshad.az/images/ucard.svg',
      text: '12.34 AZN x 12 ay\nBankınızla rahat ödə!'
    },
    {
      image: 'https://irshad.az/images/leobank.svg',
      text: '9.99 AZN x 24 ay\nFaizsiz və təhlükəsiz ödə!'
    }
  ];

  const handleImageChange = (index) => {
    setSelectedImage(index);
  };

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const handleInstallmentSelect = (option) => {
    // Eğer zaten seçili olan taksite tıklanırsa, seçimi kaldır
    setSelectedInstallment(prevSelected => prevSelected === option ? null : option);
    setShowDetails(true); // Detayları göster
  };

  const handleDetailsClose = () => {
    setShowDetails(false); // Detayları gizle
  };

  const renderStarRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;


  };

  return (
    <div className="product-details-container">
      <div className="carousel-container">
        <div
          className="carousel-slides"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 1s ease", // Geçiş süresi ve animasyon
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="carousel-slide">
              <img src={slide.image} alt="icon" className="carousel-image" />
              <div>
                <h4 className="carousel-title">{slide.text.split("\n")[0]}</h4>
                <p className="carousel-text">{slide.text.split("\n")[1]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="product-details-wrapper">
        <div className="product-gallery">

          <div className="thumbnail-gallery">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={selectedImage === index ? 'selected-thumbnail' : ''}
                onClick={() => handleImageChange(index)}
              />
            ))}
          </div>
          <div className="main-image-container">
            <img
              src={product.images[selectedImage]}
              alt={`${product.name} - View ${selectedImage + 1}`}
              className="zoomable"
            />
          </div>
        </div>

        <div className="product-info">
          <h1 className="product-title-3">{product.name}</h1>

          {renderStarRating(product.rating)}

          <div className="product-meta">
            <div className="availability">
              <div className="icon-2">
                <TbBuildingWarehouse />
              </div>
              <span>Stokda var</span>
            </div>
            <span className="product-code">Mal kodu: {product.code}</span>
          </div>

          <div className="price-section">
            <span className="current-price">{product.newPrice} AZN</span>
            <span className="original-price">{product.oldPrice} AZN</span>
            <span className="discount-tag">{product.discount}</span>
          </div>

          <div className="color-selection">
            <h3>Rəng seçimi</h3>
            <div className="color-options">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  className={`color-button ${selectedColor === color.name ? 'selected' : ''}`}
                  style={{ backgroundColor: color.hex }}
                  onClick={() => setSelectedColor(color.name)}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          <div className="quantity-selector">
            <div className="quantity-control">
              <button onClick={() => handleQuantityChange(-1)}>-</button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantityChange(1)}>+</button>
            </div>
          </div>

          <div className="installment-options">
            <h3>Hissəli ödəniş seçimləri</h3>

            {/* Eğer taksit seçenekleri yoksa, uygun mesajı göster */}
            {product.installmentOptions && product.installmentOptions.length > 0 ? (
              product.installmentOptions.map((option) => (
                <div
                  key={option.months}
                  className={`installment-option ${selectedInstallment === option ? 'selected' : ''}`}
                  onClick={() => handleInstallmentSelect(option)}
                >
                  <div className="installment-details">
                    <span>{option.months} ay</span>
                    <span className="installment-price-2">{option.pricePerMonth.toFixed(2)} AZN/ay</span>
                  </div>
                  <div className="total-amount">
                    Ümumi məbləğ: {option.total.toFixed(2)} AZN
                  </div>
                </div>
              ))
            ) : (
              <p className="no-installments">Bu məhsul üçün taksit seçeneği mevcut değil.</p>
            )}

            {/* Seçili taksit hakkında detayları gösterme */}
            {showDetails && selectedInstallment && (
              <div className="installment-details-popup">
                <div className="popup-header">
                  <h4>Seçilen Taksit Detayı</h4>
                  <button onClick={handleDetailsClose}>Kapat</button>
                </div>
                <div className="popup-body">
                  <p><strong>Taksit Sayısı:</strong> {selectedInstallment.months} ay</p>
                  <p><strong>Aylık Ödeme:</strong> {selectedInstallment.pricePerMonth.toFixed(2)} AZN/ay</p>
                  <p><strong>Toplam Məblağ:</strong> {selectedInstallment.total.toFixed(2)} AZN</p>
                </div>
              </div>
            )}
          </div>

          <div className="action-buttons">
            <button className="add-to-cart-2">
              <FaShoppingCart /> Səbətə at
            </button>
          </div>

          <div className="icon-btn">
            <button
              className={`wishlist-button-card ${isWishlisted ? 'wishlisted' : ''}`}
              onClick={() => setIsWishlisted(!isWishlisted)} >
              <FaHeart />
            </button>
            <button className="wishlist-button-card">
              <FaShareAlt />
            </button>
          </div>

          <div className="bonus-info">
            <div className="bonus-item">
              <IoCheckmarkCircle className="bonus-icon" />
              <span>Nağd alışda {product.bonusCash.cash} AZN bonus</span>
            </div>
            <div className="bonus-item">
              <IoCheckmarkCircle className="bonus-icon" />
              <span>Hissəli alışda {product.bonusCash.installment} AZN bonus</span>
            </div>
          </div>



        </div>
      </div>

      <div className="product-details-tabs">
        <div className="tab-navigation">
          <button
            className={activeTab === "description" ? "active" : ""}
            onClick={() => setActiveTab("description")}
          >
            Təsvir
          </button>
          <button
            className={activeTab === "specs" ? "active" : ""}
            onClick={() => setActiveTab("specs")}
          >
            Texniki Xüsusiyyətlər
          </button>
          <button
            className={activeTab === "reviews" ? "active" : ""}
            onClick={() => setActiveTab("reviews")}
          >
            Rəylər
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "description" && (
            <p>{product.description}</p>
          )}

          {activeTab === "specs" && (
            <div className="specifications">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="spec-item">
                  <span className="spec-name">
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </span>
                  <span className="spec-value">{value}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="reviews-section">
              {product.reviews.length === 0 ? (
                <p>Rəy yoxdur.</p>
              ) : (
                product.reviews.map((review, index) => (
                  <div key={index} className="review-item">
                    <div className="review-header">
                      <span className="review-user">{review.user}</span>
                      <div className="review-rating">
                        {[...Array(review.rating)].map((_, i) => (
                          <FaStar key={i} className="star" />
                        ))}
                      </div>
                    </div>
                    <p className="review-text">{review.text}</p>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardDetails;