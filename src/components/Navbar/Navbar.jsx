import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaAngleDown,
  FaMapMarkerAlt,
  FaQuestionCircle,
  FaRegHeart,
  FaSignOutAlt,
  FaCog,
  FaBell,
  FaWallet,
  FaGift,
  FaBox,
  FaTrash,
  FaMinus,
  FaPlus,
} from 'react-icons/fa';
import './Navbar.css';
import Logo from '../../assets/image/Logo.png';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from '../slices/cartSlice';

const Navbar = () => {
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart); // totalAmount burada kullanılıyor
  const dispatch = useDispatch();

  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggleAccountDropdown = () => {
    setIsAccountOpen(!isAccountOpen);
  };

  const handleMenuToggle = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const toggleCartDropdown = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleQuantityChange = (id, delta) => {
    if (delta > 0) {
      dispatch(increaseQuantity(id));
    } else {
      dispatch(decreaseQuantity(id));
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    alert('Hesabdan çıxış etdiniz.');
  };

  const formatPrice = (price) => {
    return !isNaN(price) && price !== null ? price.toFixed(2) : '0.00';
  };

  return (
    <div className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Yuxarı Navbar */}
      <div className="navbar-top">
        <div className="top-1">
          <span>Sürətli və Pulsuz Çatdırılma</span>
          <span>Münasib Qiymətlər</span>
          <span>5.0 ★</span>
        </div>
        <div className="navbar-actions">
          <select className="language-selector">
            <option>İngilis (ABŞ)</option>
            <option>İspan</option>
          </select>
          <span>
            <FaMapMarkerAlt /> Yer
          </span>
          <span>
            <FaQuestionCircle /> Dəstək
          </span>
        </div>
      </div>

      {/* Orta Navbar */}
      <div className="navbar-middle">
        <img src={Logo} alt="Loqo" className="logo" />
        <div className="search-bar">
          <input
            type="text"
            placeholder="Bütün kateqoriyalarda axtar"
          />
          <button className="search-btn">
            <FaSearch />
          </button>
        </div>

        <div className="cart-account">
          <div className="cart">
            <div className="cart-btn" onClick={toggleCartDropdown}>
              <FaShoppingCart size={20} />
              {totalQuantity}
            </div>
            {isCartOpen && (
              <div className="cart-dropdown">
                {items.length > 0 ? (
                  <ul>
                    {items.map((item) => (
                      <li key={item.id} className="cart-item">
                        <div className="cart-item-info">
                          <span>{item.name}</span>
                          <div className="cart-item-controls">
                            <button onClick={() => handleQuantityChange(item.id, -1)}>
                              <FaMinus />
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => handleQuantityChange(item.id, 1)}>
                              <FaPlus />
                            </button>
                            <button onClick={() => handleRemoveItem(item.id)}>
                              <FaTrash />
                            </button>
                          </div>
                         
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Səbətiniz boşdur.</p>
                )}
                <div className="cart-total">
                  <span>Cəmi:</span>
                  <span>${formatPrice(totalAmount)}</span>
                </div>
              </div>
            )}
          </div>

          <div className="account">
            <div className="account-btn" onClick={toggleAccountDropdown}>
              <FaUser size={20} /> Hesab <FaAngleDown />
            </div>
            {isAccountOpen && (
              <div className="account-dropdown">
                <ul>
                  <li>
                    <FaBox /> Sifarişlərim
                  </li>
                  <li>
                    <FaWallet /> Pulqabım
                  </li>
                  <li>
                    <FaRegHeart /> Sevimli Məhsullar
                  </li>
                  <li>
                    <FaGift /> Hədiyyə Kartları
                  </li>
                  <li>
                    <FaCog /> Parametrlər
                  </li>
                  <li>
                    <FaBell /> Bildirişlər
                  </li>
                  <li className="dark-mode">
                    <span>Qaranlıq Rejim</span>
                    <input type="checkbox" onChange={toggleDarkMode} />
                  </li>
                  {isLoggedIn && (
                    <li onClick={handleSignOut}>
                      <FaSignOutAlt /> Çıxış
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Aşağı Navbar */}
      <div className="navbar-bottom">
        <ul className="navbar-menu">
          <li
            className="menu-item"
            onMouseEnter={() => handleMenuToggle('categories')}
            onMouseLeave={() => handleMenuToggle(null)}
          >
            Bütün Kateqoriyalar
            {activeMenu === 'categories' && (
              <div className="mega-menu">
                <ul>
                  <li>Elektronika</li>
                  <li>Moda</li>
                  <li>Ev və Mətbəx</li>
                  <li>Kitablar</li>
                  <li>İdman</li>
                  <li>Gözəllik</li>
                </ul>
              </div>
            )}
          </li>
          <li className="menu-item">
            <NavLink to="/CombinedForm" className="nav-link">
              TEMU
            </NavLink>
          </li>
          <li className="menu-item">Trendyol</li>
          <li className="menu-item">Aliexpress</li>
          <li className="menu-item">Hepsiburada</li>
          <li className="menu-item">N11</li>
          <li className="menu-item">Mağaza Aç</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
