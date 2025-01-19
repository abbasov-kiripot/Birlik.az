// Favorites.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import {
  FaHeart,
  FaTrash,
  FaShare,
  FaShoppingCart,
  FaStar,
  FaEye,
} from "react-icons/fa";
import "./Favorites.css";

const Favorites = () => {
  const [wishlist, setWishlist] = useState([]);
  const [priceRange, setPriceRange] = useState("all");
  const [orderBy, setOrderBy] = useState("default");
  const [toast, setToast] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    // Örnek veri
    const sampleData = [
      {
        id: 1,
        title: "Premium Ağıllı Telefon XS",
        price: 13999,
        image:
          "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/4275b6710bc84e7302cd859bccb04726.jpg?imageView2/2/w/500/q/70/format/webp",
        category: "Elektronika",
        stock: 5,
        rating: 4.8,
        reviews: 128,
      },
      {
        id: 2,
        title: "Pro Gaming Noutbuk Elite",
        price: 25499,
        image:
          "https://img.kwcdn.com/product/fancy/bc7ea29c-4d94-4c4a-a728-afbd08514606.jpg?imageView2/2/w/500/q/70/format/webp",
        category: "Kompüter",
        stock: 3,
        rating: 4.9,
        reviews: 256,
      },
      {
        id: 3,
        title: "Simsiz Qulaqlıq Pro Max",
        price: 2499,
        image:
          "https://img.kwcdn.com/product/open/2024-09-19/1726722271463-a55ab2a9668547859b2b158ee5810322-goods.jpeg?imageView2/2/w/500/q/70/format/webp",
        category: "Aksessuar",
        stock: 10,
        rating: 4.7,
        reviews: 89,
      },
      {
        id: 4,
        title: "4K Smart Televizor Ultra HD",
        price: 17999,
        image:
          "https://img.kwcdn.com/product/fancy/f51bcd3a-6ba7-4152-84d1-2799f28a3b6a.jpg?imageView2/2/w/500/q/70/format/webp",
        category: "Elektronika",
        stock: 2,
        rating: 4.6,
        reviews: 74,
      },
      {
        id: 5,
        title: "Erqonomik Ofis Kreslosu",
        price: 3499,
        image:
          "https://img.kwcdn.com/product/fancy/40549cd2-12a9-44ba-ae73-aae944ba39e3.jpg?imageView2/2/w/500/q/70/format/webp",
        category: "Mebel",
        stock: 15,
        rating: 4.5,
        reviews: 112,
      },
      {
        id: 6,
        title: "Oyun Siçanı RGB Pro",
        price: 799,
        image:
          "https://img.kwcdn.com/product/fancy/fbd2cee7-a83a-4d30-bbc6-5f75473763be.jpg?imageView2/2/w/500/q/70/format/webp",
        category: "Aksessuar",
        stock: 20,
        rating: 4.8,
        reviews: 67,
      },
      {
        id: 7,
        title: "İntellektual Qəhvə Maşını",
        price: 1599,
        image:
          "https://img.kwcdn.com/product/fancy/a3416b5d-fbde-4f2a-adda-c80057332117.jpg?imageView2/2/w/500/q/70/format/webp",
        category: "Mətbəx",
        stock: 8,
        rating: 4.7,
        reviews: 91,
      },
      {
        id: 8,
        title: "3D Printer Creator Pro",
        price: 12499,
        image:
          "https://img.kwcdn.com/product/fancy/8a4491ba-2911-4694-92d4-1f537edcde9a.jpg?imageView2/2/w/500/q/70/format/webp",
        category: "Texnologiya",
        stock: 4,
        rating: 4.9,
        reviews: 40,
      },
      {
        id: 9,
        title: "Ultra Slim Planşet",
        price: 9999,
        image:
          "https://img.kwcdn.com/product/fancy/591bb9ee-3d5b-4b3a-8908-906886809389.jpg?imageView2/2/w/500/q/70/format/webp",
        category: "Kompüter",
        stock: 7,
        rating: 4.6,
        reviews: 134,
      },
      {
        id: 10,
        title: "Portativ Dinamik Bass+",
        price: 1799,
        image:
          "https://img.kwcdn.com/product/fancy/ba08f502-30e5-422a-a381-ecda42802caf.jpg?imageView2/2/w/500/q/70/format/webp",
        category: "Aksessuar",
        stock: 12,
        rating: 4.7,
        reviews: 88,
      },
    ];

    setWishlist(sampleData);
  }, []);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 5000);
  };

  const handleRemove = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
    showToast("Məhsul uğurla silindi");
  };

  const handleAddToCart = (product) => {
    showToast(`${product.title} səbətə əlavə edildi`);
  };

  const handleShare = (product) => {
    navigator.clipboard.writeText(`${product.title} - ${product.price} AZN`);
    showToast("Məhsul linki kopyalandı");
  };

  const filterAndSortItems = () => {
    let result = [...wishlist];

    // Fiyat filtresi
    switch (priceRange) {
      case "budget":
        result = result.filter((item) => item.price < 5000);
        break;
      case "mid":
        result = result.filter(
          (item) => item.price >= 5000 && item.price < 15000
        );
        break;
      case "premium":
        result = result.filter((item) => item.price >= 15000);
        break;
      default:
        break;
    }

    // Sıralama
    switch (orderBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }

    return result;
  };

  return (
    <div className="wish-wrapper">
      <div className="wish-header">
        <h1 className="wish-heading">Favorilərim</h1>
        <div className="wish-controls">
          <div className="view-toggle">
            <button
              className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
              onClick={() => setViewMode("grid")}
            >
              Grid
            </button>
            <button
              className={`view-btn ${viewMode === "list" ? "active" : ""}`}
              onClick={() => setViewMode("list")}
            >
              Siyahı
            </button>
          </div>
          <select
            className="sort-select"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="all">Bütün Qiymətlər</option>
            <option value="budget">5000 AZN-dən Aşağı</option>
            <option value="mid">5000 AZN - 15000 AZN</option>
            <option value="premium">15000 AZN-dən Yuxarı</option>
          </select>
          <select
            className="sort-select"
            value={orderBy}
            onChange={(e) => setOrderBy(e.target.value)}
          >
            <option value="default">Sıralama</option>
            <option value="price-low">Qiymət: Ən Aşağıdan Ən Yuxarıya</option>
            <option value="price-high">Qiymət: Ən Yuxarıdan Ən Aşağıya</option>
            <option value="rating">Ən Çox Qiymətləndirilənlər</option>
            <option value="name">Ada Görə</option>
          </select>
        </div>
      </div>

      {toast && <div className="toast-popup">{toast}</div>}

      {wishlist.length === 0 ? (
        <div className="empty-state">
          <FaHeart className="empty-icon" />
          <p className="empty-text">Hələ favori məhsulunuz yoxdur</p>
          <button className="browse-btn">Məhsulları Kəşf Edin</button>
        </div>
      ) : (
        <div className={`items-container ${viewMode}`}>
          {filterAndSortItems().map((item) => (
            <div key={item.id} className="item-card">
              {item.stock < 5 && (
                <span className="stock-alert">Son {item.stock} Məhsul!</span>
              )}
              <div className="item-media">
                <img src={item.image} alt={item.title} className="item-img" />
                <div className="item-overlay">
                  <button
                    className="action-btn"
                    onClick={() => handleShare(item)}
                    title="Paylaş"
                  >
                    <FaShare />
                  </button>
                  <button
                    className="action-btn"
                    onClick={() => handleAddToCart(item)}
                    title="Səbətə Əlavə Et"
                  >
                    <FaShoppingCart />
                  </button>
                  <button
                    className="action-btn"
                    onClick={() => handleRemove(item.id)}
                    title="Favorilərdən Çıxar"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
              <div className="item-content">
                <span className="item-category">{item.category}</span>
                <h3 className="item-title">{item.title}</h3>
                <div className="item-rating">
                  <FaStar className="star-icon" />
                  <span>{item.rating}</span>
                  <span className="review-count">
                    ({item.reviews} dəyərləndirmə)
                  </span>
                </div>
                <div className="item-details">
                  <span className="item-price">
                    {item.price.toLocaleString()} ₼
                  </span>
                  <span className="stock-info-5">
                    <FaEye /> {item.stock} ədəd
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
