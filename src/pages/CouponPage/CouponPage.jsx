// CouponView.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  FaGoogle,
  FaApple,
  FaChevronRight,
  FaPercentage,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoFacebook } from "react-icons/bi";
import "./CouponPage.css";

const CouponView = () => {
  const [activeTab, setActiveTab] = useState("unused");
  const [couponCode, setCouponCode] = useState("");

  return (
    <div className="view_container">
      <nav className="view_navigation">
        <ul className="nav_list">
          <li>
            <button
              className={`nav_button ${
                activeTab === "unused" ? "nav_button--active" : ""
              }`}
              onClick={() => setActiveTab("unused")}
            >
              İstifadə olunmayan
            </button>
          </li>
          <li>
            <button
              className={`nav_button ${
                activeTab === "used" ? "nav_button--active" : ""
              }`}
              onClick={() => setActiveTab("used")}
            >
              İstifadə olunmuş
            </button>
          </li>
          <li>
            <button
              className={`nav_button ${
                activeTab === "expired" ? "nav_button--active" : ""
              }`}
              onClick={() => setActiveTab("expired")}
            >
              Müddəti bitmiş
            </button>
          </li>
        </ul>
        <span className="nav_help">SSS</span>
      </nav>

      <div className="coupon_input_wrapper">
        <input
          type="text"
          className="coupon_input"
          placeholder="Kupon kodunu daxil edin"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        <button className="coupon_submit">Tətbiq et</button>
      </div>

      <button className="seller_coupon">
        <span>Müəyyən bir məhsul üçün satıcının xüsusi kuponu</span>
        <FaChevronRight className="seller_icon" />
      </button>

      <div className="empty_state">
        <div className="empty_icon">
          <FaPercentage />
        </div>
        <p className="empty_text">
          İstifadə edə biləcəyiniz kupon və ya təklif yoxdur
        </p>
      </div>

      <div className="help_section">
        <p className="help_text">Kuponunuzu/kuponlarınızı tapa bilmirsiniz?</p>
        <div className="help_buttons">
          <button className="account_button">
            <span>Başqa bir hesabla giriş etməyə çalışın</span>
            <div className="social_icons-5">
              <FaGoogle />
              <FaApple />
              <BiLogoFacebook />
              <FaXTwitter />
              <FaChevronRight />
            </div>
          </button>
          <button className="service_button">
            <span>Kupon tapmaq üçün özünə xidmət et</span>
            <FaChevronRight className="service_icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CouponView;
