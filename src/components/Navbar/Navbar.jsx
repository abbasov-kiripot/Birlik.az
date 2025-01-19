// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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
  FaExchangeAlt,
} from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { MdSecurity } from "react-icons/md";

import "./Navbar.css";
import Logo from "../../assets/image/Logo.png";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../slices/cartSlice";

const Navbar = () => {
  const { items, totalQuantity } = useSelector((state) => state.cart); // Toplam fiyat hesaplama için ayrı fonksiyon kullanacağız
  const dispatch = useDispatch();

  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Toplam fiyatı hesaplama (toFixed yerine alternatif bir yöntem)
  const calculateTotalPrice = () => {
    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return Math.round(total * 100) / 100; // 2 ondalık basamağa yuvarla
  };

  const toggleAccountDropdown = () => setIsAccountOpen(!isAccountOpen);
  const handleMenuToggle = (menuName) =>
    setActiveMenu(activeMenu === menuName ? null : menuName);
  const toggleCartDropdown = () => setIsCartOpen(!isCartOpen);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };
  const handleSignOut = () => {
    setIsLoggedIn(false);
    alert("Hesabdan çıxış etdiniz.");
  };

  const handleQuantityChange = (id, delta) => {
    if (delta > 0) {
      dispatch(increaseQuantity(id));
    } else {
      dispatch(decreaseQuantity(id));
    }
  };

  const handleRemoveItem = (id) => dispatch(removeFromCart(id));

  return (
    <div className={`navbar ${isDarkMode ? "dark-mode" : ""}`}>
      {/* Üst Navbar */}
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
        <NavLink to="/">
          <img src={Logo} alt="Loqo" className="logo" />
        </NavLink>

        <div className="search-bar">
          <input type="text" placeholder="Bütün kateqoriyalarda axtar" />
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
                            <button
                              onClick={() => handleQuantityChange(item.id, -1)}
                            >
                              <FaMinus />
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() => handleQuantityChange(item.id, 1)}
                            >
                              <FaPlus />
                            </button>
                            <button onClick={() => handleRemoveItem(item.id)}>
                              <FaTrash />
                            </button>
                          </div>
                          <span>{Math.round(item.price * 100) / 100}₼</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Səbətiniz boşdur.</p>
                )}
                <div className="cart-total">
                  <span>Cəmi:</span>
                  <span>{calculateTotalPrice()}₼</span>
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
                  <NavLink className="li-2" to="/">
                    <FaUser /> Hesabım
                  </NavLink>

                  <NavLink className="li-2" to="/OrdersPage">
                    <FaBox /> Sifarişlərim
                  </NavLink>

                  <NavLink className="li-2" to="/WalletPage">
                    <FaWallet /> Pulqabım
                  </NavLink>

                  <NavLink className="li-2" to="/Favorites">
                    <FaRegHeart /> Sevimli Məhsullar
                  </NavLink>

                  <NavLink className="li-2" to="/">
                    <SlLocationPin />
                    Adresler
                  </NavLink>

                  <NavLink className="li-2" to="/">
                    <MdSecurity />
                    Hesab guvenliyi
                  </NavLink>

                  <NavLink className="li-2" to="/CouponPage">
                    <FaGift />
                    Kuponlar & Təkliflər
                  </NavLink>

                  <li>
                    <FaCog /> Parametrlər
                  </li>
                  <li>
                    <FaBell /> Bildirişlər
                  </li>

                  <NavLink className="li-2" to="/">
                    <BsShop />
                    Magazam
                  </NavLink>

                  <NavLink className="li-2" to="/">
                    <FaExchangeAlt />
                    Hesabı Dəyişdir
                  </NavLink>
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

      {/* Alt Navbar */}
      <div className="navbar-bottom">
        <ul className="navbar-menu">
          <li
            className="menu-item"
            onMouseEnter={() => handleMenuToggle("categories")}
            onMouseLeave={() => handleMenuToggle(null)}
          >
            Bütün Kateqoriyalar
            {activeMenu === "categories" && (
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
          <li className="menu-item">
            <NavLink to="/OrderForm" className="nav-link">
              Trendyol
            </NavLink>
          </li>
          <li className="menu-item">Aliexpress</li>
          <li className="menu-item">Hepsiburada</li>
          <li className="menu-item">
            <NavLink to="/PopularProducts" className="nav-link">
              Trend Məsullar
            </NavLink>
          </li>
          <li className="menu-item">Mağaza Aç</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
