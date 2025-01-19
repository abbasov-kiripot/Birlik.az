// CouponView.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { 
  FaGoogle, 
  FaApple, 
  FaChevronRight, 
  FaPercentage 
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoFacebook } from "react-icons/bi";
import './CouponPage.css';

const CouponView = () => {
  const [activeTab, setActiveTab] = useState('unused');
  const [couponCode, setCouponCode] = useState('');

  return (
    <div className="view_container">
      <nav className="view_navigation">
        <ul className="nav_list">
          <li>
            <button 
              className={`nav_button ${activeTab === 'unused' ? 'nav_button--active' : ''}`}
              onClick={() => setActiveTab('unused')}
            >
              Kullanılmayan
            </button>
          </li>
          <li>
            <button 
              className={`nav_button ${activeTab === 'used' ? 'nav_button--active' : ''}`}
              onClick={() => setActiveTab('used')}
            >
              Kullanılmış
            </button>
          </li>
          <li>
            <button 
              className={`nav_button ${activeTab === 'expired' ? 'nav_button--active' : ''}`}
              onClick={() => setActiveTab('expired')}
            >
              Süresi dolmuş
            </button>
          </li>
        </ul>
        <span className="nav_help">SSS</span>
      </nav>

      <div className="coupon_input_wrapper">
        <input
          type="text"
          className="coupon_input"
          placeholder="Kupon kodunu girin"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        <button className="coupon_submit">Uygula</button>
      </div>

      <button className="seller_coupon">
        <span>Belirli bir ürün için satıcının özel kuponu</span>
        <FaChevronRight className="seller_icon" />
      </button>

      <div className="empty_state">
        <div className="empty_icon">
          <FaPercentage />
        </div>
        <p className="empty_text">
          Kullanılabilir kuponunuz veya teklifiniz yok
        </p>
      </div>

      <div className="help_section">
        <p className="help_text">Kuponunuzu/kuponlarınızı bulamıyor musunuz?</p>
        <div className="help_buttons">
          <button className="account_button">
            <span>Başka bir hesaba giriş yapmayı dene</span>
            <div className="social_icons">
              <FaGoogle />
              <FaApple />
              <BiLogoFacebook />
              <FaXTwitter />
              <FaChevronRight />
            </div>
          </button>
          <button className="service_button">
            <span>Kupon bulmak için self servis</span>
            <FaChevronRight className="service_icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CouponView;