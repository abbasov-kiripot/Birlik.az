/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";
import {
  FaHeart,
  FaShoppingCart,
  FaStar,
  FaPercent,
  FaTruck,
  FaEye,
  FaExchangeAlt,
  FaSync,
  FaShareAlt,
} from "react-icons/fa";
import "./ProductList.css";

const products = [
  {
    id: 1,
    name: "Klassik Slim Fit Köynək",
    price: 129.99,
    originalPrice: 169.99,
    discount: 23,
    rating: 4.5,
    ratingCount: 256,
    image:
      "https://cdn.dsmcdn.com/ty1451/product/media/images/prod/QC/20240731/14/9ff5bd1d-d00a-3f98-92a9-a3d4cad7475f/1_org.jpg",
    colors: ["#FFFFFF", "#0000FF", "#000000"],
    sizes: ["XS", "S", "M", "L", "XL"],
    freeShipping: true,
    quickDelivery: true,
    newCollection: true,
    inStock: 15,
    material: "Pambıq Qarışığı",
    careInstructions: "30°C-də yuyulmalı",
  },
  {
    id: 2,
    name: "Rahat T-shirt",
    price: 49.99,
    originalPrice: 59.99,
    discount: 17,
    rating: 4.7,
    ratingCount: 183,
    image:
      "https://cdn.dsmcdn.com/ty1454/product/media/images/prod/QC/20240731/17/897ca91c-d445-3d27-9915-a7fd2f997c19/1_org.jpg",
    colors: ["#FF5733", "#C70039", "#900C3F"],
    sizes: ["S", "M", "L", "XL"],
    freeShipping: false,
    quickDelivery: true,
    newCollection: false,
    inStock: 30,
    material: "100% Pambıq",
    careInstructions: "Əllə yuyulmalı",
  },
  
];



const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [isFavorite, setIsFavorite] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isQuickView, setIsQuickView] = useState(false);

  return (
    <div className="product-card-modern-5">
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

      <div className="product-card-actions-3">
        <button
          className={`action-button-3 favorite-btn ${isFavorite ? "active" : ""}`}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <FaHeart />
        </button>
        <button
          className="action-button-3 quick-view-btn"
          onClick={() => setIsQuickView(true)}
        >
          <FaEye />
        </button>
        <button
          className="action-button-3 share-btn"
          onClick={() => {
            /* Paylaşma fonksiyonu */
          }}
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
          <div className="product-care-info">{product.careInstructions}</div>
        </div>

        <div className="product-color-selection-modern">
          {product.colors.map((color) => (
            <button
              key={color}
              className={`color-option-modern ${
                selectedColor === color ? "selected" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>

        <div className="product-info-section">
          <div className="size-stock-info">
            <div className="product-size-selection-modern">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`size-option-modern ${
                    selectedSize === size ? "selected" : ""
                  }`}
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
              <span className="original-price-modern">
                {product.originalPrice.toFixed(2)}₼
              </span>

              {product.originalPrice && (
                <span className="current-price-modern">
                  {product.price.toFixed(2)} ₼
                </span>
              )}
            </div>
            <div className="rating-container-modern">
              <FaStar className="star-icon-modern" />
              <span>
                {product.rating.toFixed(1)} ({product.ratingCount})
              </span>
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
            <button
              className="add-to-cart-btn-modern"
            >
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
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
