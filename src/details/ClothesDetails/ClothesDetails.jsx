// ProductDetailsPage.jsx
import React, { useState, useEffect } from 'react';
import './ClothesDetails.css';
import { FaCartPlus, FaHeart, FaExchangeAlt, FaShareAlt, FaPhoneAlt, FaTruck, FaShippingFast, FaStar } from 'react-icons/fa';
import { MdOutlineSupportAgent } from "react-icons/md";

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { MdOutlineRateReview } from 'react-icons/md';
const ClothesDetails = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('Yeşil Ordu');
  const [timeLeft, setTimeLeft] = useState(259200); // 3 gün saniyələrdə
  const [wishlist, setWishlist] = useState(false);
  const [comparisonList, setComparisonList] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: '', comment: '', rating: 0 });
  const [activeImage, setSelectedImage] = useState(0);

  const productData = {
    id: 1,
    name: "Klassik Slim Fit Köynək",
    description: "1 ədəd Kişi Qış Rahat Pambıq Gödəkçə, Flis Astar, Sadə Rəng, Uzun Qol, Yaxalıq Yaxalı, Fermuar Bağlanışı, Elastik Olmayan Parça, Toxunma, Cibli Detal - %100 Pambıq Üst Geyim, Qalın",
    price: 129.99,
    originalPrice: 169.99,
    discount: 23,
    rating: 4.5,
    ratingCount: 256,
    images: [
      "https://img.kwcdn.com/product/fancy/aa006a90-dc81-4210-8e85-1626b0107343.jpg?imageView2/2/w/800/q/70/format/webp",
      "https://img.kwcdn.com/product/fancy/80f8d216-fdc9-48c7-80da-5ae043cdf9de.jpg?imageView2/2/w/800/q/70/format/webp",
      "https://img.kwcdn.com/product/fancy/3df41a45-f664-44ab-b44c-3b3aeab73afb.jpg?imageView2/2/w/800/q/70/format/webp",
    ],
    colors: [
      { code: "#FFFFFF", name: "Ağ" },
      { code: "#0000FF", name: "Göy" },
      { code: "#000000", name: "Qara" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    features: [
      { label: "Material", value: "Pambıq Qarışığı" },
      { label: "Yuma Təlimatı", value: "30°C-də yuyulmalı" },
      { label: "Zəmanət", value: "1 il" },
    ],
    stock: {
      status: "Mövcuddur",
      count: 15,
    },
    shipping: {
      freeShipping: true,
      quickDelivery: true,
    },
    collection: "Yeni Kolleksiya",
    actions: {
      addToCart: () => alert("Məhsul səbətə əlavə edildi."),
      toggleWishlist: () => setWishlist(!wishlist),
      addToComparison: () => {
        if (!comparisonList.includes(productData.id)) {
          setComparisonList((prev) => [...prev, productData.id]);
          alert("Məhsul müqayisə siyahısına əlavə edildi.");
        } else {
          alert("Bu məhsul artıq müqayisə siyahısındadır.");
        }
      },
      shareProduct: () => {
        navigator.clipboard.writeText(window.location.href);
        alert("Məhsul linki kopyalandı.");
      },
      contactSupport: () => alert("Dəstək xidməti ilə əlaqə saxlanılır."),
    },
  };


  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };


  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleReviewSubmit = () => {
    if (newReview.name && newReview.comment && newReview.rating) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: '', comment: '', rating: 0 });
      alert("Rəyiniz əlavə olundu!");
    } else {
      alert("Bütün sahələri doldurun.");
    }
  };

  const changeImage = (index) => {
    setSelectedImage(index);
  };
  return (
    <div className="product-details-container-2">
      {/* Product Gallery */}
      <div className="gallery">
        <div className="thumbnails">
          {productData.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Image thumbnail ${index + 1}`}
              className={activeImage === index ? 'thumbnail-active' : 'thumbnail'}
              onClick={() => changeImage(index)}
            />
          ))}
        </div>
        <div className="main-image">
          <img
            src={productData.images[activeImage]}
            alt={`${productData.name} - Image ${activeImage + 1}`}
            className="image-zoom"
          />
        </div>
      </div>
      {/* Product Information Section */}
      <div className="container-details">
        <div className="product-information-section">
          <h1 className="product-name">{productData.name}</h1>
          <p className="product-description">{productData.description}</p>

          <div className="product-pricing">
            <span className="current-price">{productData.price} ₼</span>
            {productData.originalPrice && (
              <span className="original-price">{productData.originalPrice} ₼</span>
            )}
          </div>

          {productData.discount && (
            <p className="product-discount">{productData.discount}% Endirim</p>
          )}



          <div className="offer-timer-container-2">
            {/* Offer Header */}
            <div className="offer-header">
              <span className="offer-label">Qısamüddətli Fürsət</span>
              {timeLeft > 0 && (
                <div className="timer">
                  <span className="timer">Qalan Vaxt: {formatTime(timeLeft)}</span>
                </div>
              )}
            </div>

            {/* Color Selection */}
            <div className="color-selection-2">
              <h4 className="color-title">Rəng: {selectedColor}</h4>
              <div className="color-options">
                <button
                  className={`color-item ${selectedColor === 'qara' ? 'active' : ''}`}
                  onClick={() => handleColorSelection('qara')}
                >
                  <img src="https://img.kwcdn.com/product/temu-avi/image-crop/741572e6-35ff-44ad-9530-0bd02b9493da.jpg?imageView2/2/w/150/q/50/format/webp" alt="Siyah" />
                  <span>qara</span>
                </button>
                <button
                  className={`color-item ${selectedColor === 'Sarı' ? 'active' : ''}`}
                  onClick={() => handleColorSelection('Sarı')}
                >
                  <img src="https://img.kwcdn.com/product/fancy/ab4c5338-3d24-4d04-8368-dd2ebe9618c0.jpg?imageView2/2/w/180/q/70/format/webp" alt="Toprak Sarısı" />
                  <span> Sarı</span>
                </button>
                <button
                  className={`color-item ${selectedColor === 'Yaşıl' ? 'active' : ''}`}
                  onClick={() => handleColorSelection('Yaşıl')}
                >
                  <img src="https://img.kwcdn.com/thumbnail/s/3fdbc60085baa98d11f5eb847a13969b_867188db5a3a.jpg?imageView2/2/w/180/q/70/format/webp " alt="Yeşil Ordu" />
                  <span>Yeşil</span>
                </button>
              </div>
            </div>

            {/* Size Selection */}
            <div className="size-selection">
              <h4 className="size-title">Boyut: {selectedSize || 'Seçim yapılmadı'}</h4>
              <div className="size-options">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    className={`size-item ${selectedSize === size ? 'active' : ''} ${size === 'XL' ? 'disabled' : ''}`}
                    onClick={() => size !== 'XL' && handleSizeSelection(size)}
                    disabled={size === 'XL'}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <a href="#" className="size-guide-link">Bədən kılavuzu</a>
            </div>

            {/* Quantity Selector */}
            <div className="quantity-section">
              <label className="quantity-label">Miqdar</label>
              <select
                className="quantity-dropdown"
                value={quantity}
                onChange={handleQuantityChange}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>

            {/* Information Note */}
            <div className="info-note">
              <p>ⓘ Bəzi müştərilər bunların əla işlədiyini deyirlər. Ölçüləri təsdiqləmək üçün ölçüləri yoxlayın.</p>
            </div>
          </div>

          <button className='add-to-card-btn' onClick={productData.actions.addToCart}><FaCartPlus /> Səbətə Əlavə Et</button>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button onClick={productData.actions.toggleWishlist}>
              <FaHeart /> {wishlist ? '' : ''}
            </button>
            <button onClick={productData.actions.addToComparison}><FaExchangeAlt /></button>
            <button onClick={productData.actions.shareProduct}><FaShareAlt /></button>
            <button onClick={productData.actions.contactSupport}><MdOutlineSupportAgent /></button>
          </div>
          <div className="img-bootom-comment">
            {/* Product Features */}
            {productData.features.length > 0 && (
              <div className="product-features-list">
                {productData.features.map((feature, index) => (
                  <p key={index} className="feature-item">
                    {feature.label}: {feature.value}
                  </p>
                ))}
              </div>
            )}
            <div className="comment-1">

              {/* Shipping Information */}
              {productData.shipping.freeShipping && (
                <p className="free-shipping-info"><FaTruck /> Pulsuz Çatdırılma Mövcuddur</p>
              )}
              {productData.shipping.quickDelivery && (
                <p className="quick-delivery-info"><FaShippingFast /> Tez Çatdırılma Seçimi</p>
              )}
              {productData.collection && (
                <p className="product-collection-info">{productData.collection}</p>
              )}
            </div>
          </div>


          {/* Reviews Section */}
          <div className="reviews-section-container">
            <h4 className="reviews-title">Istifadəçi Rəyləri</h4>
            {reviews.map((review, index) => (
              <div key={index} className="review-item">
                <p className="review-author">
                  <strong>{review.name}</strong> ({review.rating} <FaStar />)
                </p>
              </div>
            ))}

            {/* Add Review */}

            <div className="add-review-section">
              <h4 className="add-review-title">
                Rəyinizi Əlavə Edin <MdOutlineRateReview className="review-icon" />
              </h4>
              <form className="review-form" onSubmit={(e) => { e.preventDefault(); handleReviewSubmit(); }}>
                <input
                  type="text"
                  className="review-input"
                  placeholder="Adınız"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  required
                />
                <textarea
                  className="review-textarea"
                  placeholder="Şərhiniz"
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  required
                ></textarea>
                <input
                  type="number"
                  className="review-input"
                  placeholder="Rating (0-5)"
                  value={newReview.rating}
                  onChange={(e) => setNewReview({ ...newReview, rating: +e.target.value })}
                  min="0"
                  max="5"
                  step="0.1"
                  required
                />
                <button type="submit" className="review-submit-btn">Göndər</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


};

export default ClothesDetails;