// eslint-disable-next-line no-unused-vars
import React, { useReducer, useState } from "react";
import "./CombinedForm.css";

const initialState = {
  category: "",
  productPhoto: null,
  size: "",
  color: "",
  quantity: 1,
  deliveryDate: "",
  specialNotes: "",
  warranty: false,
  fullName: "",
  email: "",
  phone: "",
  birthDate: "",
  nationalId: "",
  street: "",
  city: "",
  state: "",
  postalCode: "",
  country: "",
  paymentMethod: "",
  cardDetails: { number: "", expiry: "", cvv: "" },
  receipt: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_NESTED_FIELD":
      return {
        ...state,
        [action.parentField]: {
          ...state[action.parentField],
          [action.field]: action.value,
        },
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const CombinedForm = () => {
  const [step, setStep] = useState(1);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [errors, setErrors] = useState({});

  const sizes = [
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "XXXL",
    "4XL",
    "5XL",
    "6XL",
    "7XL",
  ];

  const colors = ["Red", "Blue", "Green", "Black", "White"];

  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      if (!state.category) newErrors.category = "Category is required.";
      if (!state.size) newErrors.size = "Size is required.";
      if (!state.color) newErrors.color = "Color is required.";
      if (state.quantity < 1)
        newErrors.quantity = "Quantity must be at least 1.";
    } else if (step === 2) {
      if (!state.fullName) newErrors.fullName = "Full name is required.";
      if (!state.email) newErrors.email = "Email is required.";
      if (!state.phone) newErrors.phone = "Phone is required.";
    } else if (step === 3) {
      if (!state.paymentMethod)
        if (!state.cardDetails.number)
          newErrors.cardDetailsNumber = "Card number is required.";
      if (!state.cardDetails.expiry)
        newErrors.cardDetailsExpiry = "Expiry date is required.";
      if (!state.cardDetails.cvv) newErrors.cardDetailsCvv = "CVV is required.";
    }

    setErrors(newErrors);
    console.log("Validation Errors:", newErrors); // Ekledim
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      console.log(`Moving to Step ${step + 1}`);
      setStep((prev) => prev + 1);
    } else {
      console.error(`Validation failed on Step ${step}. Errors:`, errors);
    }
  };

  const handlePrev = () => {
    console.log(`Moving back to Step ${step - 1}`);
    setStep((prev) => prev - 1);
  };

  const handleInputChange = (e) => {
    dispatch({
      type: "SET_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleNestedInputChange = (e, parentField) => {
    dispatch({
      type: "SET_NESTED_FIELD",
      parentField,
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleFileUpload = (e, field) => {
    dispatch({ type: "SET_FIELD", field, value: e.target.files[0] });
  };

  const handleOrderSubmit = () => {
    if (validateStep()) {
      console.log("Order Submitted Successfully:", state);
      dispatch({ type: "RESET" });
      setStep(1);
    } else {
      console.error("Order Submission Failed. Validation Errors:", errors);
    }
  };
  // Kart numarası değiştiğinde
  const cardElement = document.querySelector(".card-3");
  if (cardElement) {
    // cardElement'in varlığını kontrol edin
    if (state.cardDetails.number.startsWith("4")) {
      cardElement.setAttribute("data-type", "visa");
    } else if (state.cardDetails.number.startsWith("5")) {
      cardElement.setAttribute("data-type", "mastercard");
    } else {
      cardElement.removeAttribute("data-type");
    }
  }

  const handleConfirmOrder = async () => {
    try {
      // Form alanlarının doğrulama konfigürasyonu
      const requiredFields = {
        product: {
          fields: ["category", "size", "color"],
          messages: {
            category: "Məhsul kateqoriyası seçilməlidir",
            size: "Ölçü seçilməlidir",
            color: "Rəng seçilməlidir"
          }
        },
        personal: {
          fields: ["fullName", "email", "phone"],
          messages: {
            fullName: "Ad və soyad daxil edilməlidir",
            email: "E-poçt daxil edilməlidir",
            phone: "Telefon nömrəsi daxil edilməlidir"
          }
        },
        payment: {
          fields: ["cardDetails.number", "cardDetails.expiry", "cardDetails.cvv"],
          messages: {
            "cardDetails.number": "Kart nömrəsi daxil edilməlidir",
            "cardDetails.expiry": "Son istifadə tarixi daxil edilməlidir",
            "cardDetails.cvv": "CVV kodu daxil edilməlidir"
          }
        }
      };
  
      // Boş alanları kontrol et ve hataları topla
      const errors = [];
  
      for (const [section, config] of Object.entries(requiredFields)) {
        for (const field of config.fields) {
          const value = field.includes(".")
            ? field.split(".").reduce((obj, key) => obj && obj[key], state)
            : state[field];
  
          if (!value || value.trim() === "") {
            errors.push({
              section,
              field,
              message: config.messages[field]
            });
          }
        }
      }
  
      // Hata varsa göster
      if (errors.length > 0) {
        const errorMessage = errors
          .map(error => `${error.message}`)
          .join('\n');
        
        throw new Error(errorMessage);
      }
  
      // Sipariş verilerini hazırla
      const orderData = {
        ...state,
        orderDate: new Date().toISOString(),
        orderNumber: generateOrderNumber()
      };
  
      // Sipariş gönderimi
      await handleOrderSubmit(orderData);
  
      // Başarılı durumda yönlendirme
      window.location.href = "/OrderSuccessScreen";
  
    } catch (error) {
      // Hata yönetimi
      console.error("Sifariş xətası:", error);
      
      // Kullanıcıya hata mesajını göster
      alert(error.message || "Sifariş zamanı xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.");
    }
  };
  
  // Sipariş numarası oluşturma yardımcı fonksiyonu
  const generateOrderNumber = () => {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.random().toString(36).substring(2, 5).toUpperCase();
    return `${random}${timestamp}`;
  };
  
  // Kullanım örneği
  // handleConfirmOrder();

  return (
    <div className="mx-auto max-w-4xl">
      <div className="progress-container">
        <div className="progress-bar">
          {/* Progress Line Background */}
          <div className="progress-line-bg" />

          {/* Active Progress Line */}
          <div
            className="progress-line-active"
            style={{ width: `${((step - 1) / 3) * 100}%` }}
          />

          {/* Progress Nodes */}
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`progress-node ${step >= s ? "active" : ""}`}
            >
              <span className="node-number">{s}</span>

              {/* Ripple effect for active transition */}
              {step === s && <span className="ripple" />}
            </div>
          ))}
        </div>
      </div>
      <div className="form-container">
        {step === 1 && (
          <div className="product-section-1">
            <h2 className="form-title-1">Məhsul haqqında məlumat</h2>
            <form className="product-form-1">
              <label className="form-group-1">
                <div className="titel">Məhsul Kateqoriya:</div>
                <select
                  className="form-select-1"
                  value={state.category}
                  onChange={handleInputChange}
                  name="category"
                >
                  <option value="">Select a category</option>
                  <option value="clothing">Geyim</option>
                  <option value="electronics">Electronika</option>
                  <option value="accessories">Acssesuar</option>
                </select>
                {errors.category && (
                  <p className="error-message">{errors.category}</p>
                )}
              </label>

              <label className="form-group-1">
                <div className="titel">Məhsul şəkli:</div>
                <input
                  className="file-input-1"
                  type="file"
                  onChange={(e) => handleFileUpload(e, "productPhoto")}
                />
              </label>

              <label className="form-group-1">
                <div className="titel">Ölçü:</div>
                <div className="size-grid-1">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      className={`size-btn ${
                        state.size === size ? "size-btn--selected" : ""
                      }`}
                      onClick={() =>
                        dispatch({
                          type: "SET_FIELD",
                          field: "size",
                          value: size,
                        })
                      }
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {errors.size && (
                  <p className="error-message-1">{errors.size}</p>
                )}
              </label>

              <label className="form-group-1">
                <div className="titel">Rəng:</div>
                <select
                  className="form-select-1"
                  value={state.color}
                  onChange={handleInputChange}
                  name="color"
                >
                  <option value="">Rəng seçin</option>
                  {colors.map((color) => (
                    <option key={color} value={color.toLowerCase()}>
                      {color}
                    </option>
                  ))}
                </select>
                {errors.color && (
                  <p className="error-message-1">{errors.color}</p>
                )}
              </label>

              <label className="form-group-1">
                <div className="titel">Miqdarı:</div>
                <input
                  className="form-input-1"
                  type="number"
                  value={state.quantity}
                  min="1"
                  onChange={(e) => handleInputChange(e, "quantity")}
                />
                {errors.quantity && (
                  <p className="error-message-1">{errors.quantity}</p>
                )}
              </label>

              <label className="form-group-1">
                <div className="titel">Çatdırılma tarixi:</div>
                <input
                  className="form-input-1"
                  type="date"
                  value={state.deliveryDate}
                  onChange={handleInputChange}
                  name="deliveryDate"
                />
              </label>

              <label className="form-group-1">
                <div className="titel">Xüsusi Qeydlər:</div>
                <textarea
                  className="form-textarea-1"
                  value={state.specialNotes}
                  onChange={handleInputChange}
                  name="specialNotes"
                />
              </label>
            </form>
          </div>
        )}

        {step === 2 && (
          <div className="personal-section-2">
            <h2 className="form-title-2">Step 2: Şəxsi Məlumatlar</h2>
            <div className="form-grid-2">
              <label className="form-group-2">
                <div className="titel">Ad Soyad:</div>
                <input
                  className="form-input-2"
                  type="text"
                  name="fullName"
                  value={state.fullName}
                  onChange={handleInputChange}
                />
                {errors.fullName && (
                  <p className="error-message-2">{errors.fullName}</p>
                )}
              </label>
              <label className="form-group-2">
                <div className="titel">E-poçt:</div>
                <input
                  className="form-input-2"
                  type="email"
                  name="email"
                  value={state.email}
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <p className="error-message-2">{errors.email}</p>
                )}
              </label>
              <label className="form-group-2">
                <div className="titel">Telefon:</div>
                <input
                  className="form-input-2"
                  type="text"
                  name="phone"
                  value={state.phone}
                  onChange={handleInputChange}
                />
                {errors.phone && (
                  <p className="error-message-2">{errors.phone}</p>
                )}
              </label>
              <label className="form-group-2">
                <div className="titel">Doğum tarixi:</div>
                <input
                  className="form-input-2"
                  type="date"
                  name="birthDate"
                  value={state.birthDate}
                  onChange={handleInputChange}
                />
                {errors.birthDate && (
                  <p className="error-message-2">{errors.birthDate}</p>
                )}
              </label>
              <label className="form-group-2">
                <div className="titel"> şəxsiyyət vəsiqəsi FİN kod:</div>
                <input
                  className="form-input-2"
                  type="text"
                  name="nationalId"
                  value={state.nationalId}
                  onChange={handleInputChange}
                />
                {errors.nationalId && (
                  <p className="error-message-2">{errors.nationalId}</p>
                )}
              </label>
              <label className="form-group-2">
                <div className="titel">Küçə Ünvanı:</div>
                <input
                  className="form-input-2"
                  type="text"
                  name="street"
                  value={state.street}
                  onChange={handleInputChange}
                />
                {errors.street && (
                  <p className="error-message-2">{errors.street}</p>
                )}
              </label>
              <label className="form-group-2">
                <div className="titel">Şəhər:</div>
                <input
                  className="form-input-2"
                  type="text"
                  name="city"
                  value={state.city}
                  onChange={handleInputChange}
                />
                {errors.city && (
                  <p className="error-message-2">{errors.city}</p>
                )}
              </label>
              <label className="form-group-2">
                <div className="titel">Ştat/Bölgə:</div>
                <input
                  className="form-input-2"
                  type="text"
                  name="state"
                  value={state.state}
                  onChange={handleInputChange}
                />
                {errors.state && (
                  <p className="error-message-2">{errors.state}</p>
                )}
              </label>
              <label className="form-group-2">
                <div className="titel">Poçt Kodu:</div>
                <input
                  className="form-input-2"
                  type="text"
                  name="postalCode"
                  value={state.postalCode}
                  onChange={handleInputChange}
                />
                {errors.postalCode && (
                  <p className="error-message-2">{errors.postalCode}</p>
                )}
              </label>
              <label className="form-group-2">
                <div className="titel">Ölkə:</div>
                <select
                  className="form-select-2"
                  name="country"
                  value={state.country}
                  onChange={handleInputChange}
                >
                  <option value="">Select Country</option>
                  <option value="turkey">Turkey</option>
                  <option value="azerbaijan">Azerbaijan</option>
                  <option value="usa">USA</option>
                  <option value="other">Other</option>
                </select>
                {errors.country && (
                  <p className="error-message-2">{errors.country}</p>
                )}
              </label>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="payment-section-3">
            <div className="payment-method-3">
              {/* Right side - Card Preview and Details */}
              <div className="card-section-3">
                {/* Card Preview */}
                <div className="card-preview">
                  <div className="card-3">
                    <div className="chip">
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/009/400/645/non_2x/sim-card-clipart-design-illustration-free-png.png"
                        alt="chip"
                        className="chip-logo"
                      />
                    </div>
                    <div className="card-type">
                      {state.cardDetails.number.startsWith("4") && (
                        <img
                          src="https://w7.pngwing.com/pngs/20/987/png-transparent-logo-visa-credit-card-business-visa-text-trademark-payment.png"
                          alt="Visa"
                          className="card-logo"
                        />
                      )}
                      {state.cardDetails.number.startsWith("5") && (
                        <img
                          src="https://image.similarpng.com/very-thumbnail/2020/06/logo-master-card-free-download-PNG.png"
                          alt="MasterCard"
                          className="card-logo"
                        />
                      )}
                    </div>
                  </div>
                  <div className="card-details">
                    <div className="number-group">
                      <span className="label">Kart nömrəsi</span>
                      <div className="number">
                        {state.cardDetails.number
                          .replace(/(\d{4})/g, "$1 ")
                          .trim() || "0123 4567 8910 1112"}
                      </div>
                    </div>
                    <div className="card-bottom">
                      <div className="name-group">
                        <span className="label">Kart sahibinin adı</span>
                        <div className="name">
                          {state.cardDetails.name || "JOHN DOE"}
                        </div>
                      </div>
                      <div className="expiry-group">
                        <span className="label">İstifadə müddəti</span>
                        <div className="expiry">
                          {state.cardDetails.expiry || "MM/YY"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Input Form */}
                <div className="card-form-1">
                  <label className="form-group-1">
                    <input
                      className="form-input-1"
                      type="text"
                      name="number"
                      value={state.cardDetails.number}
                      onChange={(e) => {
                        let formattedNumber = e.target.value.replace(/\D/g, ""); // Sadece rakamlar
                        formattedNumber = formattedNumber
                          .replace(/(.{4})/g, "$1 ")
                          .trim(); // Her 4 rakamdan sonra boşluk
                        handleNestedInputChange(
                          {
                            target: {
                              name: "number",
                              value: formattedNumber,
                            },
                          },
                          "cardDetails"
                        );
                      }}
                      placeholder="1234 5678 9012 3456"
                    />
                    {errors.cardDetailsNumber && (
                      <p className="error-message">
                        {errors.cardDetailsNumber}
                      </p>
                    )}
                  </label>

                  <label className="form-group-1">
                    <input
                      className="form-input-1"
                      type="text"
                      name="name"
                      value={state.cardDetails.name}
                      onChange={(e) =>
                        handleNestedInputChange(e, "cardDetails")
                      }
                      placeholder="John Doe"
                    />
                    {errors.cardDetailsName && (
                      <p className="error-message">{errors.cardDetailsName}</p>
                    )}
                  </label>

                  <div className="form-row">
                    <label className="form-group-1 half">
                      <input
                        className="form-input-1"
                        type="text"
                        name="expiry"
                        value={state.cardDetails.expiry}
                        onChange={(e) => {
                          const formattedExpiry = e.target.value
                            .replace(/[^0-9/]/g, "")
                            .replace(/^(\d{2})(\d{2})$/, "$1/$2");
                          handleNestedInputChange(
                            {
                              target: {
                                name: "expiry",
                                value: formattedExpiry,
                              },
                            },
                            "cardDetails"
                          );
                        }}
                        placeholder="MM/YY"
                      />
                      {errors.cardDetailsExpiry && (
                        <p className="error-message">
                          {errors.cardDetailsExpiry}
                        </p>
                      )}
                    </label>

                    <label className="form-group-1 half">
                      <input
                        className="form-input-1"
                        type="text"
                        name="cvv"
                        value={state.cardDetails.cvv}
                        onChange={(e) =>
                          handleNestedInputChange(e, "cardDetails")
                        }
                        maxLength="3"
                        placeholder="123"
                      />
                      {errors.cardDetailsCvv && (
                        <p className="error-message">{errors.cardDetailsCvv}</p>
                      )}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="review-section">
            <h2 className="form-title-4">Sifarişinizi nəzərdən keçirin</h2>

            <div className="review-content">
              <div className="review-group">
                <h3>Məhsul Təfərrüatları</h3>
                <div className="details-grid">
                  <p>
                    <strong>Kateqoriya:</strong> {state.category}
                  </p>
                  <p>
                    <strong>Ölçü:</strong> {state.size}
                  </p>
                  <p>
                    <strong>Rəng:</strong> {state.color}
                  </p>
                  <p>
                    <strong>Miqdar:</strong> {state.quantity}
                  </p>
                  <p>
                    <strong>Çatdırılma tarixi:</strong>{" "}
                    {new Date(state.deliveryDate).toLocaleDateString()}
                  </p>
                  {state.specialNotes && (
                    <p>
                      <strong>Xüsusi qeydlər:</strong> {state.specialNotes}
                    </p>
                  )}
                </div>
              </div>

              <div className="review-group">
                <h3>Şəxsi məlumat</h3>
                <div className="details-grid">
                  <p>
                    <strong>Ad Soyad:</strong> {state.fullName}
                  </p>
                  <p>
                    <strong>E-poçt:</strong> {state.email}
                  </p>
                  <p>
                    <strong>Telefon:</strong> {state.phone}
                  </p>
                  <p>
                    <strong>Doğum tarixi:</strong>{" "}
                    {new Date(state.birthDate).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>FİN kod:</strong> {state.nationalId}
                  </p>
                  <p>
                    <strong>Ünvan:</strong>{" "}
                    {`${state.street}, ${state.city}, ${state.state} ${state.postalCode}`}
                  </p>
                  <p>
                    <strong>Ölkə:</strong> {state.country}
                  </p>
                </div>
              </div>

              <div className="review-group">
                <h3>Ödəniş Məlumatı</h3>
                <div className="details-grid">
                  <p>
                    <strong>Kart nömrəsi:</strong>
                    **** **** **** {state.cardDetails.number.slice(-4)}
                  </p>
                  <p>
                    <strong>Kart sahibi:</strong> {state.cardDetails.name}
                  </p>
                  <p>
                    <strong>İstifadə müddəti:</strong>{" "}
                    {state.cardDetails.expiry}
                  </p>
                </div>
              </div>
            </div>

            <div className="action-buttons-2">
              <button className="submit-btn" onClick={handleConfirmOrder}>
               Sifarişi Tamamla
              </button>
            </div>
          </div>
        )}

        <div className="nav-buttons">
          {step > 1 && (
            <button
              className="nav-btn nav-btn--prev"
              type="button"
              onClick={handlePrev}
            >
              GERİ
            </button>
          )}
          {step < 4 && (
            <button
              className="nav-btn nav-btn--next"
              type="button"
              onClick={handleNext}
            >
              SONRAKİ
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CombinedForm;
