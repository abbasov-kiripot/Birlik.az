// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, Upload, CheckCircle } from "lucide-react";
import "./OrderForm.css";

const OrderForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    productUrl: "",
    productImage: null,
    productName: "",
    size: "",
    color: "",
    quantity: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    note: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileUpload = (e, field) => {
    // eslint-disable-next-line no-undef
    dispatch({ type: "SET_FIELD", field, value: e.target.files[0] });
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  // eslint-disable-next-line react/prop-types, no-unused-vars
  const StepIndicator = ({ number, title, isActive, isCompleted }) => (
    <div>
      <div>{isCompleted ? <CheckCircle /> : number}</div>
      <div>{title}</div>
    </div>
  );

  return (
    <div className="shop-order">
      <div className="shop-order__wrapper">
        <h1 className="shop-order__heading">Trendyol Məhsul Siparişi</h1>

        <div className="progress">
          <StepIndicator
            title="Məhsul Linki"
            isActive={step === 1}
            isCompleted={step > 1}
          />
          <StepIndicator
            title="Məhsul Təfərrüatları"
            isActive={step === 2}
            isCompleted={step > 2}
          />
          <StepIndicator
            title="Əlaqə"
            isActive={step === 3}
            isCompleted={step > 3}
          />
          <StepIndicator
            title="Təsdiq"
            isActive={step === 4}
            isCompleted={step > 4}
          />
        </div>

        <form className="shop-order__form" onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="product-link">
              <div className="input-group">
                <label className="input-group__label">
                  Trendyol Məhsul Linki
                </label>
                <input
                  className="input-group__field"
                  type="url"
                  name="productUrl"
                  value={formData.productUrl}
                  onChange={handleInputChange}
                  placeholder="https://www.trendyol.com/..."
                  required
                />
                <Link />
              </div>

              <div className="input-group">
                <label className="input-group__label">Məhsul Şəkli</label>

                <div className="media-upload">
                  <Upload />
                  <input
                    className="media-upload__input"
                    type="file"
                    onChange={(e) => handleFileUpload(e, "productPhoto")}
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="product-details">
              <label className="input-group__label">Məhsul Adı</label>
              <input
                className="input-group__field"
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleInputChange}
                required
              />

              <label className="input-group__label">Bədən/Ölçü</label>
              <select
                className="input-group__select"
                name="size"
                value={formData.size}
                onChange={handleInputChange}
              >
                <option value="">Seçin</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>

              <label className="input-group__label">Rəng</label>
              <input
                className="input-group__field"
                type="text"
                name="color"
                value={formData.color}
                onChange={handleInputChange}
                required
              />

              <label className="input-group__label">Ədəd</label>
              <input
                className="input-group__field"
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                min="1"
                required
              />
            </div>
          )}

          {step === 3 && (
            <div className="contact-info">
              <h3 className="contact-info__title">
                Əlaqə və Ünvan Məlumatları
              </h3>

              <label className="input-group__label" htmlFor="name">
                Ad Soyad
              </label>
              <input
                id="name"
                className="input-group__field"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Adınızı və Soyadınızı daxil edin"
              />

              <label className="input-group__label" htmlFor="phone">
                Telefon
              </label>
              <input
                id="phone"
                className="input-group__field"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="Telefon nömrənizi daxil edin"
              />

              <label className="input-group__label" htmlFor="email">
                E-poçt
              </label>
              <input
                id="email"
                className="input-group__field"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="E-poçt ünvanınızı daxil edin"
              />

              <label className="input-group__label" htmlFor="defaultAddress">
                Varsayılan Ünvan
              </label>
              <select
                id="defaultAddress"
                className="input-group__select"
                name="defaultAddress"
                value={formData.defaultAddress}
                onChange={handleInputChange}
              >
                <option value="">Yeni Ünvan Əlavə Et</option>
                <option value="home">Ev Ünvanı</option>
                <option value="work">İş Ünvanı</option>
              </select>

              {formData.defaultAddress && (
                <>
                  <label className="input-group__label" htmlFor="city">
                    Şəhər
                  </label>
                  <select
                    id="city"
                    className="input-group__select"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Şəhər Seçin</option>
                    <option value="istanbul">İstanbul</option>
                    <option value="ankara">Ankara</option>
                    <option value="izmir">İzmir</option>
                  </select>

                  <label className="input-group__label" htmlFor="district">
                    Rayon
                  </label>
                  <select
                    id="district"
                    className="input-group__select"
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Rayon Seçin</option>
                    <option value="kadikoy">Kadıköy</option>
                    <option value="besiktas">Beşiktaş</option>
                    <option value="buca">Buca</option>
                  </select>

                  <label className="input-group__label" htmlFor="address">
                    Ünvan
                  </label>
                  <textarea
                    id="address"
                    className="input-group__textarea"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="3"
                    required
                    placeholder="Tam ünvanınızı daxil edin"
                  ></textarea>

                  <label className="input-group__label" htmlFor="postalCode">
                    Poçt Kodu
                  </label>
                  <input
                    id="postalCode"
                    className="input-group__field"
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                    placeholder="Poçt kodunuzu daxil edin"
                  />
                </>
              )}
            </div>
          )}

          {step === 4 && (
            <div className="order-summary">
              <h3 className="order-summary__title">Sifariş Xülasəsi</h3>

              <div className="order-summary__section">
                <h4 className="order-summary__subtitle">Məhsul Məlumatları</h4>
                <p className="order-summary__text">
                  Məhsul: {formData.productName}
                </p>
                <p className="order-summary__text">Ölçü: {formData.size}</p>
                <p className="order-summary__text">Rəng: {formData.color}</p>
                <p className="order-summary__text">Ədəd: {formData.quantity}</p>
              </div>

              <div className="order-summary__section">
                <h4 className="order-summary__subtitle">Əlaqə Məlumatları</h4>
                <p className="order-summary__text">Ad Soyad: {formData.name}</p>
                <p className="order-summary__text">Telefon: {formData.phone}</p>
                <p className="order-summary__text">E-poçt: {formData.email}</p>
              </div>

              <div className="order-summary__section">
                <h4 className="order-summary__subtitle">Ünvan Məlumatları</h4>
                <p className="order-summary__text">Şəhər: {formData.city}</p>
                <p className="order-summary__text">
                  Rayon: {formData.district}
                </p>
                <p className="order-summary__text">Ünvan: {formData.address}</p>
                <p className="order-summary__text">
                  Poçt Kodu: {formData.postalCode}
                </p>
              </div>

              <div className="order-summary__section">
                <h4 className="order-summary__subtitle">Əlavə Qeyd</h4>
                <textarea
                  className="input-group__textarea"
                  name="note"
                  value={formData.note}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Əlavə etmək istədiyiniz qeydlər"
                ></textarea>
              </div>

              <div className="order-summary__actions">
                <button
                  className="btn btn--edit"
                  type="button"
                  onClick={() => setStep(3)}
                >
                  Məlumatları Redaktə Et
                </button>
              </div>
            </div>
          )}

          <div className="form-controls">
            {step > 1 && (
              <button
                className="btn btn--secondary"
                type="button"
                onClick={prevStep}
              >
                Geri
              </button>
            )}
            {step < 4 && (
              <button
                className="btn btn--primary"
                type="button"
                onClick={nextStep}
              >
                İrəli
              </button>
            )}
            {step === 4 && (
              <button className="btn btn--success" type="submit">
                Göndər
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
