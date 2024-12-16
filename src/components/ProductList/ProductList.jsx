import React, { useState } from 'react';
import {
  FaHeart,
  FaShoppingCart,
  FaStar,
  FaPercent,
  FaTruck,
  FaEye,
  FaExchangeAlt,
  FaSync,
  FaShareAlt
} from 'react-icons/fa';
import './ProductList.css';

const products = [
  {
    id: 1,
    name: "Klassik Slim Fit Köynək",
    price: 129.99,
    originalPrice: 169.99,
    discount: 23,
    rating: 4.5,
    ratingCount: 256,
    image: "https://cdn.dsmcdn.com/ty1451/product/media/images/prod/QC/20240731/14/9ff5bd1d-d00a-3f98-92a9-a3d4cad7475f/1_org.jpg",
    colors: ["#FFFFFF", "#0000FF", "#000000"],
    sizes: ["XS", "S", "M", "L", "XL"],
    freeShipping: true,
    quickDelivery: true,
    newCollection: true,
    inStock: 15,
    material: "Pambıq Qarışığı",
    careInstructions: "30°C-də yuyulmalı"
  },
  {
    id: 2,
    name: "Rahat T-shirt",
    price: 49.99,
    originalPrice: 59.99,
    discount: 17,
    rating: 4.7,
    ratingCount: 183,
    image: "https://cdn.dsmcdn.com/ty1454/product/media/images/prod/QC/20240731/17/897ca91c-d445-3d27-9915-a7fd2f997c19/1_org.jpg",
    colors: ["#FF5733", "#C70039", "#900C3F"],
    sizes: ["S", "M", "L", "XL"],
    freeShipping: false,
    quickDelivery: true,
    newCollection: false,
    inStock: 30,
    material: "100% Pambıq",
    careInstructions: "Əllə yuyulmalı"
  },
  {
    id: 3,
    name: "İdman Şalvarı",
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    rating: 4.3,
    ratingCount: 120,
    image: "https://cdn.dsmcdn.com/ty1549/product/media/images/ty1548/prod/QC/20240916/16/3ff4ffbd-3739-3e64-b0d1-c1b8277e3db7/1_org.jpg",
    colors: ["#000000", "#808080", "#1A1A1A"],
    sizes: ["M", "L", "XL", "XXL"],
    freeShipping: true,
    quickDelivery: false,
    newCollection: false,
    inStock: 10,
    material: "Polyester Qarışığı",
    careInstructions: "Maşında yuyula bilər"
  },
  {
    id: 4,
    name: "Zərif Qış Palto",
    price: 199.99,
    originalPrice: 249.99,
    discount: 20,
    rating: 4.9,
    ratingCount: 98,
    image: "https://cdn.dsmcdn.com/ty1579/prod/QC/20241004/16/952546b8-5d2a-3ac8-9f3c-a0f4d59bf2a4/1_org.jpg",
    colors: ["#4B4B4B", "#708090", "#D3D3D3"],
    sizes: ["M", "L", "XL"],
    freeShipping: true,
    quickDelivery: false,
    newCollection: true,
    inStock: 5,
    material: "Kaşmir",
    careInstructions: "Quru təmizləmə tələb olunur"
  },
  {
    id: 5,
    name: "Casual Şalvar",
    price: 69.99,
    originalPrice: 89.99,
    discount: 22,
    rating: 4.6,
    ratingCount: 200,
    image: "https://cdn.dsmcdn.com/ty1019/product/media/images/prod/SPM/PIM/20231019/14/0f989513-d56a-3184-9dfc-dc4ca3a553c5/1_org.jpg",
    colors: ["#FFFFFF", "#A0522D", "#8B4513"],
    sizes: ["S", "M", "L", "XL"],
    freeShipping: false,
    quickDelivery: true,
    newCollection: false,
    inStock: 25,
    material: "Denim Qarışığı",
    careInstructions: "Aşağı temperaturda yuyulmalı"
  },
  {
    id: 6,
    name: "Yüngül Yağış Paltarı",
    price: 89.99,
    originalPrice: 129.99,
    discount: 30,
    rating: 4.8,
    ratingCount: 150,
    image: "https://cdn.dsmcdn.com/ty997/product/media/images/prod/SPM/PIM/20230908/11/5d63a994-bf39-38a9-9a11-e34c4b53526f/1_org.jpg",
    colors: ["#00FFFF", "#4682B4", "#5F9EA0"],
    sizes: ["M", "L", "XL", "XXL"],
    freeShipping: true,
    quickDelivery: true,
    newCollection: true,
    inStock: 12,
    material: "Naylon Qarışığı",
    careInstructions: "Əllə yuyulmalı"
  },
  {
    id: 7,
    name: "Ofis Köynəyi",
    price: 99.99,
    originalPrice: 129.99,
    discount: 23,
    rating: 4.4,
    ratingCount: 140,
    image: "https://cdn.dsmcdn.com/ty1579/prod/QC/20241004/16/3fb07dc8-9c80-32bd-8d34-6c2c5c7de8f4/1_org.jpg",
    colors: ["#FFFFFF", "#FFD700", "#8B0000"],
    sizes: ["S", "M", "L", "XL"],
    freeShipping: false,
    quickDelivery: false,
    newCollection: false,
    inStock: 20,
    material: "Koton Qarışığı",
    careInstructions: "Maşında yuyula bilər"
  },
  {
    id: 8,
    name: "Rahat Ev Geyimi",
    price: 39.99,
    originalPrice: 59.99,
    discount: 33,
    rating: 4.9,
    ratingCount: 85,
    image: "https://cdn.dsmcdn.com/ty1594/prod/QC/20241030/17/1330d320-c90f-37d1-af9e-48e1a2673968/1_org.jpg",
    colors: ["#FFE4C4", "#FF6347", "#FFDAB9"],
    sizes: ["XS", "S", "M", "L"],
    freeShipping: true,
    quickDelivery: true,
    newCollection: true,
    inStock: 50,
    material: "Pambıq",
    careInstructions: "30°C-də yuyulmalı"
  }
];


const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isQuickView, setIsQuickView] = useState(false);

  return (
    
    <div className="product-card-modern">
      <div className="product-card-badges">
        {product.newCollection && (
          <span className="badge-new">Yeni Mövsüm</span>
        )}
        {product.discount > 0 && (
          <span className="badge-discount">
            <FaPercent /> {product.discount}
          </span>
        )}
      </div>

      <div className="product-card-actions">
        <button 
          className={`action-button favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <FaHeart />
        </button>
        <button 
          className="action-button quick-view-btn"
          onClick={() => setIsQuickView(true)}
        >
          <FaEye />
        </button>
        <button 
          className="action-button share-btn"
          onClick={() => {/* Paylaşma fonksiyonu */}}
        >
          <FaShareAlt />
        </button>
      </div>

      <div className="product-image-wrapper">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image-modern"
        />
      </div>

      <div className="product-details-modern">
        <div className="product-header-modern">
          <h3 className="product-name-modern">{product.name}</h3>
        </div>

        <div className="product-additional-info">
          <div className="product-material-info">
            <FaSync /> {product.material}
          </div>
          <div className="product-care-info">
           {product.careInstructions}
          </div>
        </div>

        <div className="product-color-selection-modern">
          {product.colors.map(color => (
            <button
              key={color}
              className={`color-option-modern ${selectedColor === color ? 'selected' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>

        <div className="product-info-section">
          <div className="size-stock-info">
            <div className="product-size-selection-modern">
              {product.sizes.map(size => (
                <button
                  key={size}
                  className={`size-option-modern ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="stock-info">
              <span>Stok: {product.inStock} ədəd</span>
            </div>
          </div>

          <div className="product-price-section-modern">
            <div className="price-container-modern">
            <span className="original-price-modern">{product.originalPrice.toFixed(2)}₼</span>

              {product.originalPrice && (
              <span className="current-price-modern">{product.price.toFixed(2)} ₼</span>

              )}
            </div>
            <div className="rating-container-modern">
              <FaStar className="star-icon-modern" />
              <span>{product.rating.toFixed(1)} ({product.ratingCount})</span>
            </div>
          </div>
        </div>

        <div className="product-extra-info">
          {product.freeShipping && (
            <div className="shipping-info-modern">
              <FaTruck /> Pulsuz Çatdırılma
            </div>
          )}
          {product.quickDelivery && (
            <div className="quick-delivery-info">
              <FaExchangeAlt /> Sürətli Çatdırılma
            </div>
          )}
        </div>

        <div className="product-actions-modern">
          <div className="action-buttons-container">
            <button className="add-to-cart-btn-modern">
              <FaShoppingCart /> Səbətə əlavə et
            </button>
          
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="product-list-container-modern">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;