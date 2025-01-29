// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Share2, CreditCard, ShieldCheck } from 'lucide-react';
import './OrderDetails.css';

const OrderDetails = () => {
  const orderData = {
    date: '14 Eyl 2024',
    orderNumber: 'PO-014-019369511865339191',
    email: 'atcov23@icloud.com',
    address: {
      name: 'İsmail Abbasov',
      location: 'Bine qəsəbə',
      city: 'Bakı, Bakı AZ 1075, Azerbaycan'
    },
    products: [
      {
        id: 1,
        name: 'Telefonlar, Oyun ve Müzik İle Uyumlu, Terleme Dirençli, Dokunmatik Kontrollü, LED İşaretli',
        price: '5.49'
      },
      {
        id: 2,
        name: 'iPhone için 360 Tam Vücut Koruyucu Kılıf, Entegre Ekran ve Arka Kapak, Şeffaf Çift Taraflı',
        model: 'iPhone 11 / Siyah',
        price: '8.59',
        quantity: 1
      }
    ],
    payment: {
      subtotal: '14.48',
      shipping: 'ÜCRETSİZ',
      credit: '-11.25',
      total: '3.23'
    }
  };

  return (
    <div className="order_details_main">
      <header className="order_details_header">
        <h1>Teslim edildi</h1>
        <button className="order_details_share">
          <Share2 size={16} />
          Paylaş
        </button>
      </header>

      <div className="order_details_info">
        <p>Sipariş zamanı: {orderData.date}</p>
        <p>Sipariş Numarası: {orderData.orderNumber} <span className="order_details_copy">Kopyala</span></p>
        <p>Sipariş olayı {orderData.date} tarihinde {orderData.email} hesabime gönderildi.</p>
      </div>

      <div className="order_details_grid">
        <div className="order_details_recipient">
          <h2>Teslimat alıcısı</h2>
          <p>{orderData.address.name}</p>
          <p>{orderData.address.location}</p>
          <p>{orderData.address.city}</p>
        </div>
        <div className="order_details_delivery">
          <h2>Teslimat süresi</h2>
          <p>Teslim tarihi: 26 Eyl 2024</p>
        </div>
      </div>

      <div className="order_details_products">
        {orderData.products.map((product) => (
          <div key={product.id} className="order_details_product">
            <div className="order_details_product_img"></div>
            <div className="order_details_product_info">
              <h3>{product.name}</h3>
              {product.model && <p className="order_details_model">{product.model}</p>}
              <p className="order_details_price">{product.price} ₼</p>
              {product.quantity && <span className="order_details_qty">+{product.quantity}</span>}
            </div>
          </div>
        ))}
      </div>

      <div className="order_details_payment">
        <div className="order_details_summary">
          <h2>Ödeme detayları</h2>
          <div className="order_details_prices">
            <div className="order_details_price_row">
              <span>Ürün toplamı:</span>
              <span>{orderData.payment.subtotal} ₼</span>
            </div>
            <div className="order_details_price_row order_details_shipping">
              <span>Kargo:</span>
              <span>{orderData.payment.shipping}</span>
            </div>
            <div className="order_details_price_row order_details_credit">
              <span>Kredi:</span>
              <span>{orderData.payment.credit} ₼</span>
            </div>
            <div className="order_details_price_row order_details_total">
              <span>Sipariş toplamı:</span>
              <span>{orderData.payment.total} ₼</span>
            </div>
          </div>
        </div>

        <div className="order_details_method">
          <h2>Ödeme yöntemi</h2>
          <div className="order_details_card">
            <CreditCard className="order_details_card_icon" />
            <div className="order_details_card_info">
              <p>Mastercard ...6555</p>
              <p>Ödeme şu tarihte yapıldı: 14 Eyl 2024</p>
            </div>
            <span className="order_details_amount">{orderData.payment.total} ₼</span>
          </div>

          <div className="order_details_security">
            <ShieldCheck className="order_details_shield" />
            <div className="order_details_security_text">
              <h3>Güvenlik Sertifikası</h3>
              <p>Temu, ödeme bilgilerinizi bankanız tarafından teyit eder. Güvenliğinizi korumak için 
                PCI DSS standartlarına göre güçlü şifreleme kullanılıyor ve sistemi üzerinden 
                düzenli incelemeler gerçekleştiriyoruz.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;