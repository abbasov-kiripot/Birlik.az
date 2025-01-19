// OrderSuccessScreen.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { FileText, Calendar, Home, FileSearch } from "lucide-react";
import "./OrderSuccessScreen.css";

const OrderSuccessScreen = () => {
  const currentDate = new Date().toLocaleDateString();
  const [orderNumber, setOrderNumber] = useState("");

  const trackingSteps = [
    { icon: "✓", label: "Sifariş qəbul edildi", status: "completed" },
    { icon: "📦", label: "Hazırlanır", status: "active" },
    { icon: "🚚", label: "Çatdırılmada", status: "pending" },
  ];

  useEffect(() => {
    // Rastgele 7 haneli bir sayı oluştur
    const randomOrderNumber = Math.floor(1000000 + Math.random() * 9000000);
    setOrderNumber(randomOrderNumber);

    // 3 saniye sonra ana sayfaya yönlendirme
    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 7000);

    // Temizlik fonksiyonu
    return () => clearTimeout(timer);
    
  }, []);

  const estimatedDeliveryDate = new Date();
  estimatedDeliveryDate.setDate(estimatedDeliveryDate.getDate() + 28);

  return (
    <div className="modern-overlay">
      <div className="modern-container">
        {/* Success Animation */}
        <div className="success-animation">
          <svg className="checkmark" viewBox="0 0 52 52">
            <circle
              className="checkmark-circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark-check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>

        {/* Success Message */}
        <div className="success-content">
          <h2 className="success-heading">Təbriklər!</h2>
          <p className="success-message">Sifarişiniz uğurla yerləşdirildi</p>

          {/* Order Info */}
          <div className="order-info">
            <div className="info-card">
              <FileText className="info-icon" size={24} />
              <div className="info-details">
                <span className="info-label">Sifariş nömrəsi</span>
                <span className="info-value">#{orderNumber}</span>
              </div>
            </div>

            <div className="info-card">
              <Calendar className="info-icon" size={24} />
              <div className="info-details">
                <span className="info-label">Sifariş tarixi</span>
                <span className="info-value">{currentDate}</span>
              </div>
            </div>
          </div>

          <div className="info-card">
            <span className="info-label">Təxmini çatdırılma tarixi</span>
            <span className="info-value">
              {estimatedDeliveryDate.toLocaleDateString()}
            </span>
          </div>

          {/* Tracking Steps */}
          <div className="tracking-steps">
            <div className="tracking-line" />
            {trackingSteps.map((step) => (
              <div key={step.label} className={`step ${step.status}`}>
                <div className="step-icon">{step.icon}</div>
                <span>{step.label}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button
              onClick={() => (window.location.href = "/")}
              className="button button-primary"
            >
              <Home size={20} />
              Ana Səhifəyə Qayıt
            </button>
            <button
              onClick={() => (window.location.href = "/orders")}
              className="button button-secondary"
            >
              <FileSearch size={20} />
              Sifarişi İzlə
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessScreen;
