import { useState, useEffect } from "react";
import {
  FaHeart,
  FaShoppingCart,
  FaTruck,
  FaExchangeAlt,
} from "react-icons/fa";
import "./FlashDeals.css";
import { addToCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";

const FlashDeals = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 24,
    seconds: 51,
  });

  // Timer countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          return { ...prev, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { hours, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const products = [
    {
      id: 1,
      image:
        "https://img.kwcdn.com/product/fancy/1bb601fe-5027-4ca2-989c-536fe4b4a536.jpg?imageView2/2/w/500/q/70/format/webp",
      name: "50 ədədli qolbağ dəsdi",
      description: "Qadınlar və bəylər üçün aksessuar.",
      price: 10.59,
      originalPrice: 18.59,
      discount: 11,
      freeShipping: true,
      rating: 4.7,
      reviews: 18,
      stock: 6,
    },
    {
      id: 2,
      image:
        "https://img-1.kwcdn.com/product/fancy/2a246631-248b-41bb-9cd2-a4cd1aa9cad5.jpg?imageView2/2/w/500/q/70/format/webp",
      name: "ZEALOT səs ucaldıcı",
      description: "İdeal ve güclü səs ucaldıcı.",
      price: 18.99,
      originalPrice:28.99,
      discount: 11,
      freeShipping: true,
      rating: 4.7,
      reviews: 18,
      stock: 6,
    },
    {
      id: 3,
      image:
        "https://img.kwcdn.com/product/open/e4f11fae0a7d4053973fee9c747296b5-goods.jpeg?imageView2/2/w/500/q/70/format/webp",
      name: "Maqnit işıqlı klaviatura qutusu",
      description: "Süni Dəri Üzən Stend, Type-C ilə Simsiz Doldurma, Qatlana bilən Dizayn.",
      price: 29.99,
      originalPrice: 59.99,
      discount: 11,
      freeShipping: true,
      rating: 4.7,
      reviews: 18,
      stock: 6,
    },
    {
      id: 4,
      image:
        "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/98addb2df4a385a45f38e1fa0e131784.jpg?imageView2/2/w/500/q/70/format/webp",
      name: "Rəqəmsal Video Kamera",
      description: "16X Digital Zoom Ultra HD 30FPS Vlogging Kamera 64GB Kart.",
      price: 125.99,
      originalPrice: 165.99,
      discount: 11,
      freeShipping: true,
      rating: 4.7,
      reviews: 18,
      stock: 6,
    },
    {
      id: 5,
      image:
        "https://img.kwcdn.com/product/1e133b362c3/8c0c0343-07a2-4daf-9c66-581ac828eb98_800x800.jpeg?imageView2/2/w/500/q/70/format/webp",
      name: "Xlamulu Vintage 1985 New York Style Beysbol Şapkası",
      description: "Yamaqlı snapback, Yüngül və Əllə yuyula bilən, Bir neçə rəngdə mövcuddur, Beysbol şapkası.",
      price: 12.99,
      originalPrice: 22.99,
      discount: 13,
      freeShipping: false,
      rating: 4.8,
      reviews: 150,
      stock: 12,
    },
  ];

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1, // Varsayılan miktar
      })
    );
  };

  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <div className="flash-deals-container">
      <div className="flash-deals-header">
        <h2>Fürsət Təkliflər</h2>
        <div className="flash-deals-timer">
          <span>{String(timeLeft.hours).padStart(2, "0")}</span>:
          <span>{String(timeLeft.minutes).padStart(2, "0")}</span>:
          <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
        </div>
      </div>
      <div className="flash-deals-products">
        {products.map((product) => (
          <div key={product.id} className="flash-deals-card">
            <div className="product-image-2">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="flash-deals-content">
              <div className="flash-deals-rating">
                {"★".repeat(Math.floor(product.rating))}
                {"☆".repeat(5 - Math.floor(product.rating))} ({product.reviews})
              </div>
              <div className="flash-deals-stock-2">
                Stok: {product.stock > 0 ? `${product.stock} ədəd` : "Tükendi"}
              </div>

              <h3 className="flash-deals-title">{product.name}</h3>
              <p className="flash-deals-description">{product.description}</p>
              <div className="flash-deals-price">
                {product.originalPrice && <del>{product.originalPrice} ₼</del>}
                <span>{product.price} ₼</span>
                {product.discount && (
                  <span className="flash-deals-discount">
                    -{product.discount}%
                  </span>
                )}
              </div>

              {product.freeShipping && (
                <div className="shipping-info-modern-2">
                  <FaTruck /> Pulsuz Çatdırılma
                  <FaExchangeAlt /> Sürətli Çatdırılma
                </div>
              )}

              <div className="flash-deals-buttons">
                <button
                  className="add-to-cart-btn-modern"
                  onClick={() => handleAddToCart(product)}
                >
                  <FaShoppingCart /> Səbətə əlavə et
                </button>
                <button className="wishlist-button-2">
                  <FaHeart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashDeals;
