// PopularProducts.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Search, Heart, ShoppingCart, Star, Filter } from "lucide-react";
import "./PopularProducts.css";

const PopularProducts = () => {
  const [sortBy, setSortBy] = useState("popular");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Örnek ürün verileri
  const products = [
    {
      id: 1,
      name: "Kawaii Panda Yumşaq Yastıq",
      price: 129.99,
      originalPrice: 199.99,
      rating: 4.8,
      reviewCount: 328,
      image:
        "https://cdn.dsmcdn.com/ty1570/product/media/images/prod/PIM/20240926/14/00830fa6-26d8-461e-a335-b8d178c5796b/1_org.jpg",
      discount: 35,
      category: "Ev Dekorasiya",
      stock: 15,
      description:
        "Super yumşaq, anti-allergik materialdan hazırlanmış sevimli panda yastıq",
    },
    {
      id: 2,
      name: "Unicorn LED Gecə Lampası",
      price: 189.99,
      originalPrice: 249.99,
      rating: 4.9,
      reviewCount: 456,
      image:
        "https://cdn.dsmcdn.com/ty1618/prod/QC/20250101/19/ce00ac1b-9782-3606-b05b-828f12c9c06a/1_org.jpg",
      discount: 24,
      category: "İşıqlandırma",
      stock: 8,
      description:
        "7 fərqli rəng seçimi, uzaqdan idarəetmə ilə unicorn dizaynlı LED lampa",
    },
    {
      id: 3,
      name: "Sevimli Pişik Formalı Qələmqabı",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.6,
      reviewCount: 189,
      image:
        "https://cdn.dsmcdn.com/ty1621/product/media/images/prod/PIM/20250106/13/7e8fb9e2-6b97-426f-9edc-4f1753b36d8b/1_org.jpg",
      discount: 20,
      category: "Ofis Məhsulları",
      stock: 25,
      description:
        "Yaponiyadan idxal olunmuş, kawaii üslubunda pişik dizaynlı təşkilatçı",
    },
    {
      id: 4,
      name: "Pusheen Pişik Çiynində Çanta",
      price: 259.99,
      originalPrice: 329.99,
      rating: 4.7,
      reviewCount: 567,
      image:
        "https://cdn.dsmcdn.com/ty1619/prod/QC/20241230/18/cfebc151-eb05-32f7-9f6b-bc84d76f5904/1_org.jpg",
      discount: 21,
      category: "Çantalar",
      stock: 12,
      description: "Suya davamlı, böyük ölçülü Pusheen dizaynlı məktəb çantası",
    },
    {
      id: 5,
      name: "Totoro AirPods Qabı",
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.5,
      reviewCount: 234,
      image:
        "https://img.kwcdn.com/product/fancy/bc7ea29c-4d94-4c4a-a728-afbd08514606.jpg?imageView2/2/w/500/q/70/format/webp",
      discount: 31,
      category: "Aksesuarlar",
      stock: 30,
      description:
        "Silikon materialdan hazırlanmış, şarj dəliyi olan Totoro dizaynlı qab",
    },
    {
      id: 6,
      name: "Rilakkuma Termos Qab",
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.8,
      reviewCount: 345,
      image:
        "https://img.kwcdn.com/product/open/2024-09-19/1726722271463-a55ab2a9668547859b2b158ee5810322-goods.jpeg?imageView2/2/w/500/q/70/format/webp",
      discount: 25,
      category: "Mətbəx",
      stock: 18,
      description: "500ml tutumlu, cüt divarlı sevimli ayı dizaynlı termos",
    },
    {
      id: 7,
      name: "Pikachu Mini Bluetooth Dinamik",
      price: 199.99,
      originalPrice: 299.99,
      rating: 4.4,
      reviewCount: 178,
      image:
        "https://img.kwcdn.com/product/fancy/7b2d8412-e249-4ead-a0a8-6477a095737b.jpg?imageView2/2/w/500/q/70/format/webp",
      discount: 33,
      category: "Elektronika",
      stock: 7,
      description: "Pokemon mövzulu, RGB işıqlı simsiz dinamik",
    },
    {
      id: 8,
      name: "Sakura Naxışlı Yataq Dəsti",
      price: 399.99,
      originalPrice: 599.99,
      rating: 4.9,
      reviewCount: 289,
      image:
        "https://img.kwcdn.com/product/fancy/8b2a6912-ef62-4c35-9d14-685c75486c6e.jpg?imageView2/2/w/500/q/70/format/webp",
      discount: 33,
      category: "Ev Tekstili",
      stock: 10,
      description:
        "Cüt nəfərlik, %100 pambıq, Yapon sakura çiçəyi naxışlı yataq dəsti",
    },
    {
      id: 9,
      name: "Minion AirPods Max Qulaqlıq Stendi",
      price: 159.99,
      originalPrice: 199.99,
      rating: 4.3,
      reviewCount: 145,
      image:
        "https://img.kwcdn.com/product/fancy/7dd0c9a1-b0c9-40a1-9365-7881e320148b.jpg?imageView2/2/w/500/q/70/format/webp",
      discount: 20,
      category: "Aksesuarlar",
      stock: 22,
      description: "3D çaplı, sevimli Minion dizaynlı qulaqlıq stendi",
    },
    {
      id: 10,
      name: "Studio Ghibli Divar Saatı",
      price: 229.99,
      originalPrice: 299.99,
      rating: 4.7,
      reviewCount: 267,
      image:
        "https://img.kwcdn.com/product/fancy/878b0506-b35b-44e0-a917-1cb672d82ba0.jpg?imageView2/2/w/500/q/70/format/webp",
      discount: 23,
      category: "Ev Dekorasiya",
      stock: 15,
      description: "Əl işi, taxta çərçivəli Totoro mövzulu səssiz divar saatı",
    },
  ];

  // Kategori listesini ürünlerden dinamik olarak oluştur
  const categories = [...new Set(products.map((product) => product.category))];

  // Fiyat aralığı state'leri
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [minRating, setMinRating] = useState(0);

  // Filtreleme fonksiyonu
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const matchesPrice =
      (!priceRange.min || product.price >= Number(priceRange.min)) &&
      (!priceRange.max || product.price <= Number(priceRange.max));
    const matchesRating = product.rating >= minRating;

    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });

  // Sıralama fonksiyonu
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price_asc":
        return a.price - b.price;
      case "price_desc":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default: // 'popular'
        return b.reviewCount - a.reviewCount;
    }
  });

  return (
    <div className="products-container">
      <div className="search-filter-section">
        <div className="search-box">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Sevimli məhsullarda axtar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-buttons">
          <button
            className={`filter-btn ${showFilters ? "active" : ""}`}
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter />
            Filtrlə
          </button>
          <select
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="popular">Ən Məşhur</option>
            <option value="price_asc">Ən Aşağı Qiymət</option>
            <option value="price_desc">Ən Yüksək Qiymət</option>
            <option value="rating">Ən Yüksək Reytinq</option>
          </select>
        </div>
      </div>

      <div className="main-content">
        {showFilters && (
        <div className="filters-sidebar">
        <div className="filter-group">
          <h3>Kateqoriyalar</h3>
          {categories.map((category) => (
            <label key={category} className="filter-checkbox">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedCategories([
                      ...selectedCategories,
                      category,
                    ]);
                  } else {
                    setSelectedCategories(
                      selectedCategories.filter((c) => c !== category)
                    );
                  }
                }}
              />
              {category}
            </label>
          ))}
        </div>
      
        <div className="filter-group">
          <h3>Qiymət Aralığı</h3>
          <div className="price-range">
            <input
              type="number"
              placeholder="Min"
              value={priceRange.min}
              onChange={(e) =>
                setPriceRange({ ...priceRange, min: e.target.value })
              }
            />
            <span>-</span>
            <input
              type="number"
              placeholder="Max"
              value={priceRange.max}
              onChange={(e) =>
                setPriceRange({ ...priceRange, max: e.target.value })
              }
            />
          </div>
        </div>
      
        <div className="filter-group">
          <h3>Minimum Reytinq</h3>
          <input
            type="range"
            min="0"
            max="5"
            step="0.5"
            value={minRating}
            onChange={(e) => setMinRating(Number(e.target.value))}
            className="rating-slider"
          />
          <span>{minRating} Ulduz və yuxarı</span>
        </div>
      </div>
      
        )}

        <div className="products-grid">
          {sortedProducts.map((product) => (
            <div key={product.id} className="product-item">
              <div className="product-image-container">
                <img src={product.image} alt={product.name} />
                <button className="wishlist-btn">
                  <Heart />
                </button>
                {product.discount > 0 && (
                  <span className="discount-badge">%{product.discount}</span>
                )}
                <div className="quick-actions">
                  <button className="quick-view">Detalar</button>
                  <button className="add-to-cart">
                    <ShoppingCart />
                     Səbətə əlavə et
                  </button>
                </div>
              </div>

              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="rating">
                  <Star className="star-icon" />
                  <span>{product.rating}</span>
                  <span className="review-count">
                    ({product.reviewCount} dəyərləndirmə)
                  </span>
                </div>
                <div className="price-container">
                  <span className="current-price">{product.price}₼</span>
                  {product.originalPrice > product.price && (
                    <span className="original-price">
                      {product.originalPrice}₼
                    </span>
                  )}
                </div>
                {product.stock < 10 && (
                  <span className="stock-warning-5">
                    Son {product.stock} ədəd!
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
