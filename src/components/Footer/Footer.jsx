import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.css";
import Logo from '../../assets/image/Logo.png';
import visa from '../../assets/image/visa.png.slim.webp';
import masder from '../../assets/image/masder.png.slim.webp';
import gpay from '../../assets/image/gpay.png.slim.webp';
import apay from '../../assets/image/apay.png.slim.webp';

const Footer = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleRequestSubmit = (e) => {
        e.preventDefault();
        if (name && message) {
            alert(`Təşəkkürlər, ${name}! Təklifiniz göndərildi.`);
            setName("");
            setMessage("");
        } else {
            alert("Zəhmət olmasa bütün məlumatları doldurun.");
        }
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* About Section */}
                <div className="footer-about">
                    <img src={Logo} alt="Loqo" className="footer-logo" />
                    <p>
                        Birlik.az platforması, istifadəçilər üçün alışverişi sadələşdirmək
                        və sürətləndirmək üçün ən yaxşı xidmətləri təqdim edir. Güvənli və
                        sürətli alışveriş təmin edirik.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-links expanded-links">
                    <h3>Sürətli Keçidlər</h3>
                    <ul>
                        <li><a href="#about">Haqqımızda</a></li>
                        <li><a href="#products">Məhsullar</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#support">Müştəri Xidməti</a></li>
                    </ul>
                </div>

                {/* Social and Contact */}
                <div className="footer-contact">
                    <h3>Əlavə Əlaqə</h3>
                    <p><FaPhoneAlt /> +994 55 123 45 67</p>
                    <p><FaEnvelope /> info@birlik.az</p>
                    <p><FaMapMarkerAlt /> Bakı, Azərbaycan</p>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    </div>
                </div>

                {/* Special Request Form */}
                <div className="footer-request">
                    <h3>Xüsusi İstək və Təkliflər</h3>
                    <form onSubmit={handleRequestSubmit}>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Adınız"
                        />
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Təklif və ya istəyinizi yazın..."
                        ></textarea>
                        <button type="submit">Göndər</button>
                    </form>
                </div>
            </div>

            {/* Payment and Copyright */}
            <div className="footer-bottom">
                <div className="payment-icons">
                    <img src={visa} alt="Visa" />
                    <img src={masder} alt="Mastercard" />
                    <img src={gpay} alt="Google Pay" />
                    <img src={apay} alt="Apple Pay" />
                </div>
                <p>&copy; {new Date().getFullYear()} Birlik.az. Bütün hüquqlar qorunur.</p>
                <div className="footer-bottom-links">
                    <a href="#privacy">Gizlilik Siyasəti</a> | <a href="#terms">İstifadə Şərtləri</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
