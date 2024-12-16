import React, { useState, useEffect } from 'react';
import { FaHeart, FaShoppingCart, FaTruck, FaExchangeAlt } from 'react-icons/fa';
import './FlashDeals.css';
import { addToCart } from '../slices/cartSlice';
import { useDispatch } from 'react-redux';

const FlashDeals = () => {
    const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 24, seconds: 51 });

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
            image: 'https://cdn.dsmcdn.com/ty1538/prod/QC/20240912/02/6427fe25-21f0-3755-85ff-081150b63fef/1_org.jpg',
            title: 'Pandora',
            description: 'Zərif dizaynı və keyfiyyətli materialı ilə ideal hədiyyə seçimidir.',
            price: '300 ₼',
            originalPrice: '350 ₼',
            discount: 14,
            freeShipping: true,
            rating: 4.8,
            reviews: 25,
            stock: 10,
        },
        {
            id: 2,
            image: 'https://cdn.dsmcdn.com//ty1600/prod/QC/20241109/01/35a11c83-d83c-3967-981d-100e0d43396f/1_org.jpg',
            title: 'Mirvari Boyunbağı',
            description: 'Zərif qadınlar üçün mükəmməl aksessuar.',
            price: '400 ₼',
            originalPrice: '450 ₼',
            discount: 11,
            freeShipping: true,
            rating: 4.7,
            reviews: 18,
            stock: 6,
        },
        {
            id: 3,
            image: 'https://cdn.dsmcdn.com/ty1609/prod/QC/20241130/23/f6f48111-4ba7-3473-b923-2cf417759f67/1_org.jpg',
            title: 'Brilyant Sirqa',
            description: 'Zövqlü və dəbdəbəli görünüş yaratmaq üçün idealdır.',
            price: '2000 ₼',
            originalPrice: '2200 ₼',
            discount: 9,
            freeShipping: true,
            rating: 4.9,
            reviews: 50,
            stock: 3,
        },
        {
            id: 4,
            image: 'https://cdn.dsmcdn.com/ty1608/prod/QC/20241203/20/1d496281-9a6f-3e46-9f29-5d8bffb8a9ab/1_org.jpg',
            title: 'Gümüş Bilərzik',
            description: 'Minimalist dizayn sevənlər üçün ideal seçimdir.',
            price: '180 ₼',
            originalPrice: '200 ₼',
            discount: 10,
            freeShipping: true,
            rating: 4.3,
            reviews: 8,
            stock: 15,
        },
    ];

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart({
            id: product.id,
            name: product.title,
            price: product.price
        }));
    };

    // Eğer products dizisi boş veya undefined ise, alternatif bir mesaj gösterebiliriz
    if (!products || products.length === 0) {
        return <div>No products available</div>;
    }

    return (
        <div className="flash-deals-container">
            <div className="flash-deals-header">
                <h2>Fürsət Təkliflər</h2>
                <div className="flash-deals-timer">
                    <span>{String(timeLeft.hours).padStart(2, '0')}</span>:
                    <span>{String(timeLeft.minutes).padStart(2, '0')}</span>:
                    <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                </div>
            </div>
            <div className="flash-deals-products">
                {products.map((product) => (
                    <div key={product.id} className="flash-deals-card">
                        <div className="product-image-2">
                            <img src={product.image} alt={product.title} />
                        </div>
                        <div className="flash-deals-content">
                            <div className="flash-deals-rating">
                                {'★'.repeat(Math.floor(product.rating))}
                                {'☆'.repeat(5 - Math.floor(product.rating))} ({product.reviews})
                            </div>
                            <div className="flash-deals-stock-2">
                                Stok: {product.stock > 0 ? `${product.stock} ədəd` : 'Tükendi'}
                            </div>

                            <h3 className="flash-deals-title">{product.title}</h3>
                            <p className="flash-deals-description">{product.description}</p>
                            <div className="flash-deals-price">
                                {product.originalPrice && <del>{product.originalPrice}</del>}
                                <span>{product.price}</span>
                                {product.discount && (
                                    <span className="flash-deals-discount">-{product.discount}%</span>
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
