/* eslint-disable no-unused-vars */
// AccountPage.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import {
  FiShoppingCart,
  FiUser,
  FiCreditCard,
  FiClock,
  FiMapPin,
  FiGlobe,
  FiDollarSign,
  FiShield,
  FiLock,
  FiBell,
} from "react-icons/fi";
import { FaCreditCard } from "react-icons/fa";
import { IoReturnDownBack } from "react-icons/io5";
import { MdComment, MdRefresh } from "react-icons/md";
import {
  FaGoogle,
  FaApple,
  FaChevronRight,
  FaPercentage,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoFacebook } from "react-icons/bi";
import { FaStar, FaThumbsUp, FaEdit, FaTrash, FaCamera } from "react-icons/fa";

import "./AccountPage.css";

const OrdersPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Fake order data
  const orders = [
    {
      id: "PO-014-0193695118655191",
      date: "14 Eyl 2024",
      deliveryDate: "26 Eyl 2024",
      items: [
        {
          image:
            "https://cdn.dsmcdn.com/ty1451/product/media/images/prod/QC/20240731/14/9ff5bd1d-d00a-3f98-92a9-a3d4cad7475f/1_org.jpg",
          name: "Wireless Charger Set",
          price: "3.23 ₺",
        },
      ],
      status: "processing",
    },
    {
      id: "PO-014-145428020895191",
      date: "18 Agu 2024",
      deliveryDate: "10 Eyl 2024",
      items: [
        {
          image:
            "https://cdn.dsmcdn.com/ty1454/product/media/images/prod/QC/20240731/17/897ca91c-d445-3d27-9915-a7fd2f997c19/1_org.jpg",
          name: "RC Helicopter",
          price: "247.38 ₺",
        },
        {
          image:
            "https://cdn.dsmcdn.com/ty1620/prod/QC/20250110/10/bb6e60b0-2f56-39b9-9eca-1a068c4225aa/1_org.jpg",
          name: "Tool Set",
          price: "15.99 ₺",
        },
      ],
      status: "delivered",
    },
  ];

  const tabs = [
    { id: "all", label: "Tüm siparişler" },
    { id: "processing", label: "İşleniyor" },
    { id: "shipped", label: "Kargoya verildi" },
    { id: "delivered", label: "Teslim edildi" },
    { id: "returns", label: "İadeler" },
  ];

  return (
    <div className="wrapper">
      <div className="navigation__tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`navigation__tab-item ${
              activeTab === tab.id ? "navigation__tab-item--active" : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {orders.map((order) => (
        <div key={order.id} className="order__container">
          <div className="order__header">
            <div className="order__info">
              <p className="order__delivery-date">
                Teslimat tarihi: {order.deliveryDate}
              </p>
              <p>Sipariş Zamanı: {order.date}</p>
            </div>
            <button className="order__details-button">
              Sipariş detaylarını görüntüle &gt;
            </button>
          </div>

          <div className="order__items-list">
            {order.items.map((item, index) => (
              <div key={index} className="order__item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="order__item-image"
                />
                <div className="order__item-info">
                  <p>{item.name}</p>
                  <p className="order__item-price">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="order__summary">
            <span>{order.itemCount}</span>
          </div>

          <div className="order__actions">
            <button className="order__action-btn order__action-btn--primary">
              Takip
            </button>
            <button className="order__action-btn order__action-btn--secondary">
              <MdComment />
              Bir yorum bırak
            </button>
            <button className="order__action-btn order__action-btn--secondary">
              <IoReturnDownBack />
              İade et/Para iadesi yap
            </button>
            <button className="order__action-btn order__action-btn--secondary">
              <MdRefresh />
              Bunu tekrar satın al
            </button>
          </div>

          {order.status === "delivered" && (
            <>
              <div className="return__info">
                Fiyat ayarlaması para iadesi Temu tarafından gerçekleştirildi.
                İade tutarı Temu kredi bakiyenizde mevcuttur &gt;
                <div className="return__fee">
                  Bu sipariş için birden fazla ödeme yapıldığı için birden fazla
                  para iadesi yapılacak. 11.25 ₺ Temu kredi bakiyenize + ayrı
                  para iadesi olarak görülecektir.
                </div>
              </div>

              <div className="credit__fee">
                <div>
                  <FaCreditCard className="credit__fee-icon" />
                  Kredi bakiyesi
                </div>
                <span>11.22 ₺(Kredi)</span>
              </div>

              <div className="credit__fee">
                <div>
                  <FaCreditCard className="credit__fee-icon" />
                  Kredi bakiyesi
                </div>
                <span>0.03 ₺(Kredi)</span>
              </div>
            </>
          )}

          <div className="order__time">
            Talep tarihi: {order.date}, {order.orderTime}
            <span>Sipariş Numarası: {order.id}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const ProfilePage = () => {
  const [profileState, setProfileState] = useState({
    personalData: {
      fullName: "İsmayıl Abbasov",
      avatarUrl:
        "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
      totalReviews: 26,
      helpTips: 0,
      positiveRate: "%100 olumlu",
    },
    reviewMetrics: {
      total: 26,
      fiveStarCount: 24,
      fourStarCount: 2,
    },
    productEntities: [
      {
        uniqueId: 1,
        productTitle: "20W USB-C Hızlı Şarj Adaptörü",
        productDescription:
          "Şık Beyaz, iPhone 15/15 Pro/15 Pro Max, 14, 13, 12, SE, AirPods, iPad, Samsung için Hızlı Şarj Gereci",
        productPrice: "1150.99 ₼",
        productImage:
          "https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_SL1500_.jpg",
        qualityRating: 5,
      },
      {
        uniqueId: 2,
        productTitle: "Kablosuz Bluetooth Kulaklık",
        productDescription: "Uzun Pil Ömrü, Gürültü Önleyici Mikrofon, Siyah",
        productPrice: "750.49 ₼",
        productImage:
          "https://kontakt.az/media/catalog/category/Smart_saatlar_1.png",
        qualityRating: 4,
      },
      {
        uniqueId: 3,
        productTitle: "Taşınabilir Şarj Cihazı (Powerbank)",
        productDescription:
          "20.000 mAh, Hızlı Şarj Destekli, USB-C Çıkışlı, Gri",
        productPrice: "950.99 ₼",
        productImage:
          "https://kontakt.az/media/catalog/category/Smart_qolbaqlar.png",
        qualityRating: 5,
      },
      {
        uniqueId: 4,
        productTitle: "Akıllı Saat",
        productDescription:
          "Kalp Ritmi Takibi, Su Geçirmez, iOS ve Android Uyumu, Siyah",
        productPrice: "1450.99 ₼",
        productImage:
          "https://kontakt.az/media/catalog/category/naushniki.jpg",
        qualityRating: 5,
      },
      {
        uniqueId: 5,
        productTitle: "USB-C Çoklu Bağlantı Adaptörü",
        productDescription:
          "HDMI, USB 3.0, SD Kart Girişli, Alüminyum Gövde, Gri",
        productPrice: "550.99 ₼",
        productImage:
          "https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-smw-1106-bn-0073_1.png",
        qualityRating: 4,
      },
    ],
  });

  const [filterConfiguration, setFilterConfiguration] = useState({
    currentFilter: "quantum-all",
    filteredProducts: profileState.productEntities,
  });

  const performProductFiltering = (filterKey) => {
    const filterMap = {
      "quantum-five-star": profileState.productEntities.filter(
        (product) => product.qualityRating === 5
      ),
      "quantum-four-star": profileState.productEntities.filter(
        (product) => product.qualityRating === 4
      ),
      "quantum-all": profileState.productEntities,
    };

    setFilterConfiguration({
      currentFilter: filterKey,
      filteredProducts: filterMap[filterKey],
    });
  };

  const renderStarEvaluation = (ratingCount) => {
    return Array(5)
      .fill()
      .map((_, index) => (
        <FaStar
          key={index}
          className={`quantum-star-indicator ${
            index < ratingCount ? "quantum-star-active" : "quantum-star-passive"
          }`}
        />
      ));
  };

  const executeProductAction = (actionType, productId) => {
    console.log(`Quantum Action: ${actionType} on Product ${productId}`);
  };

  return (
    <div className="quantum-profile-orchestrator">
      <section className="quantum-profile-header">
        <div className="quantum-avatar-container">
          <div className="quantum-avatar-wrapper">
            <img
              src={profileState.personalData.avatarUrl}
              alt="Quantum Profile"
              className="quantum-avatar-image"
            />
            <button className="quantum-avatar-modifier">
              <FaCamera />
            </button>
          </div>
          <div className="quantum-profile-information">
            <h2 className="quantum-profile-name">
              {profileState.personalData.fullName}
            </h2>
            <div className="quantum-profile-statistics">
              <p>Toplam İnceleme: {profileState.personalData.totalReviews}</p>
              <p>Yardımcı İpuçları: {profileState.personalData.helpTips}</p>
              <p className="quantum-positive-indicator">
                {profileState.personalData.positiveRate}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="quantum-review-navigator">
        <h3>İncelemeler ({profileState.reviewMetrics.total})</h3>

        <div className="quantum-filter-panel">
          {[
            { key: "quantum-all", label: "Tüm İncelemeler" },
            {
              key: "quantum-five-star",
              label: "5 Yıldız",
              count: profileState.reviewMetrics.fiveStarCount,
            },
            {
              key: "quantum-four-star",
              label: "4 Yıldız",
              count: profileState.reviewMetrics.fourStarCount,
            },
          ].map((filter) => (
            <button
              key={filter.key}
              className={`quantum-filter-trigger ${
                filterConfiguration.currentFilter === filter.key
                  ? "quantum-filter-active"
                  : ""
              }`}
              onClick={() => performProductFiltering(filter.key)}
            >
              {filter.label}
              {filter.count !== undefined && `(${filter.count})`}
            </button>
          ))}
        </div>
      </section>

      <section className="quantum-product-gallery">
        {filterConfiguration.filteredProducts.map((product) => (
          <article key={product.uniqueId} className="quantum-product-capsule">
            <div className="quantum-product-visual">
              <img src={product.productImage} alt={product.productTitle} />
            </div>
            <div className="quantum-product-details">
              <h4>{product.productTitle}</h4>
              <p>{product.productDescription}</p>
              <div className="quantum-product-evaluation">
                <div className="quantum-rating-display">
                  {renderStarEvaluation(product.qualityRating)}
                </div>
                <span className="quantum-price-tag">
                  {product.productPrice}
                </span>
              </div>
              <div className="quantum-action-cluster">
                {[
                  {
                    icon: FaThumbsUp,
                    label: "Faydalı",
                    actionType: "useful",
                  },
                  {
                    icon: FaEdit,
                    label: "Düzenle",
                    actionType: "edit",
                  },
                  {
                    icon: FaTrash,
                    label: "Sil",
                    actionType: "delete",
                  },
                ].map((action) => (
                  <button
                    key={action.label}
                    onClick={() =>
                      executeProductAction(action.actionType, product.uniqueId)
                    }
                    className={`quantum-action-button quantum-${action.actionType}-mode`}
                  >
                    <action.icon /> {action.label}
                  </button>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

const CouponsPage = () => {
  const [activeTab, setActiveTab] = useState("unused");
  const [couponCode, setCouponCode] = useState("");

  return (
    <div className="view_container-6">
      <nav className="view_navigation-6">
        <ul className="nav_list-6">
          <li>
            <button
              className={`nav_button-6 ${
                activeTab === "unused" ? "nav_button--active-6" : ""
              }`}
              onClick={() => setActiveTab("unused")}
            >
              İstifadə olunmayan
            </button>
          </li>
          <li>
            <button
              className={`nav_button-6 ${
                activeTab === "used" ? "nav_button--active-6" : ""
              }`}
              onClick={() => setActiveTab("used")}
            >
              İstifadə olunmuş
            </button>
          </li>
          <li>
            <button
              className={`nav_button-6 ${
                activeTab === "expired" ? "nav_button--active-6" : ""
              }`}
              onClick={() => setActiveTab("expired")}
            >
              Müddəti bitmiş
            </button>
          </li>
        </ul>
        <span className="nav_help-6">SSS</span>
      </nav>

      <div className="coupon_input_wrapper-6">
        <input
          type="text"
          className="coupon_input-6"
          placeholder="Kupon kodunu daxil edin"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        <button className="coupon_submit-6">Tətbiq et</button>
      </div>

      <button className="seller_coupon-6">
        <span>Müəyyən bir məhsul üçün satıcının xüsusi kuponu</span>
        <FaChevronRight className="seller_icon-6" />
      </button>

      <div className="empty_state-6">
        <div className="empty_icon-6">
          <FaPercentage />
        </div>
        <p className="empty_text-6">
          İstifadə edə biləcəyiniz kupon və ya təklif yoxdur
        </p>
      </div>

      <div className="help_section-6">
        <p className="help_text-6">
          Kuponunuzu/kuponlarınızı tapa bilmirsiniz?
        </p>
        <div className="help_buttons-6">
          <button className="account_button-6">
            <span>Başqa bir hesabla giriş etməyə çalışın</span>
            <div className="social_icons-6">
              <FaGoogle />
              <FaApple />
              <BiLogoFacebook />
              <FaXTwitter />
              <FaChevronRight />
            </div>
          </button>
          <button className="service_button-6">
            <span>Kupon tapmaq üçün özünə xidmət et</span>
            <FaChevronRight className="service_icon-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

const AddressesPage = () => (
  <div className="addresses">
    <h2 className="addresses__title">Adreslerim</h2>
    <button className="addresses__add-button">+ Yeni Adres Ekle</button>
    <div className="addresses__list">
      <div className="content__empty">
        <div className="content__empty-icon">📍</div>
        <h3 className="content__empty-title">
          Kayıtlı adresiniz bulunmamaktadır
        </h3>
      </div>
    </div>
  </div>
);

const AccountPage = () => {
  const [currentPage, setCurrentPage] = useState("orders");

  const pages = {
    orders: {
      title: "Siparişlerin",
      icon: FiShoppingCart,
      component: OrdersPage,
    },
    profile: { title: "Profilin", icon: FiUser, component: ProfilePage },
    coupons: {
      title: "Kuponlar & teklifler",
      icon: FiCreditCard,
      component: CouponsPage,
    },
    credit: { title: "Kredi bakiyesi", icon: FiDollarSign },
    following: { title: "Takip edilen mağazalar", icon: FiShoppingCart },
    history: { title: "Arama geçmişi", icon: FiClock },
    addresses: { title: "Adresler", icon: FiMapPin, component: AddressesPage },
    language: { title: "Ülke/Bölge ve Dil", icon: FiGlobe },
    payment: { title: "Ödeme yöntemlerin", icon: FiDollarSign },
    security: { title: "Hesap güvenliği", icon: FiShield },
    permissions: { title: "İzinler", icon: FiLock },
    notifications: { title: "Bildirimler", icon: FiBell },
  };

  const renderPageContent = () => {
    const PageComponent = pages[currentPage]?.component;
    return PageComponent ? (
      <PageComponent />
    ) : (
      <div className="content">
        <h2 className="content__title">{pages[currentPage]?.title}</h2>
        <p className="content__message">Bu sayfa yapım aşamasındadır.</p>
      </div>
    );
  };

  return (
    <div className="layout">
      <div className="layout__sidebar">
        {Object.entries(pages).map(([key, { title, icon: Icon }]) => (
          <div
            key={key}
            className={`layout__sidebar-item ${
              currentPage === key ? "layout__sidebar-item--active" : ""
            }`}
            onClick={() => setCurrentPage(key)}
          >
            <Icon className="layout__sidebar-icon" />
            <span className="layout__sidebar-text">{title}</span>
          </div>
        ))}
      </div>

      <div className="layout__main">
        <div className="layout__header">
          <div className="layout__breadcrumb">
            Ana Sayfa {">"} {pages[currentPage]?.title}
          </div>
          <div className="layout__search">
            <input
              className="layout__search-input"
              type="text"
              placeholder="Ürün adı / Sipariş Numarası / Kargo Takip..."
            />
          </div>
        </div>

        {renderPageContent()}
      </div>
    </div>
  );
};

export default AccountPage;
