import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./CombinedForm.css";

const CombinedForm = () => {
    const [selectedColor, setSelectedColor] = useState("Yaşıl Ordu");
    const [selectedSize, setSelectedSize] = useState("L");
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(false);
    const [orderConfirmed, setOrderConfirmed] = useState(false);
    const [image, setImage] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();

    const onSubmit = (data) => {
        setLoading(true);
        const orderData = {
            ...data,
            productDetails: {
                color: selectedColor,
                size: selectedSize,
                quantity,
            },
            image,
        };

        setTimeout(() => {
            console.log("Tam Sifariş Məlumatları:", orderData);
            setLoading(false);
            setOrderConfirmed(true);
        }, 2000);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith("image/")) {
            setImage(file);
            setValue("image", file);
        } else {
            alert("Zəhmət olmasa keçərli bir şəkil faylı seçin.");
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Ətraflı Sifariş Formu</h2>
            {orderConfirmed && (
                <div className="order-confirmation">
                    <p>Sifarişiniz təsdiqləndi! Ən qısa zamanda sizinlə əlaqə saxlanılacaq.</p>
                </div>
            )}
            <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
                {/* Şəxsi Məlumatlar */}
                <div className="form-section personal-info">
                    <h3 className="section-title">Şəxsi Məlumatlar</h3>

                    {/* Məhsul Linki */}
                    <div className="form-group product-link">
                        <label className="form-label">Məhsul Linki</label>
                        <input
                            type="url"
                            className="form-input"
                            placeholder="Məhsul linkini daxil edin"
                            {...register("productLink", { required: "Link zəruridir." })}
                        />
                        {errors.productLink && <p className="error-message">{errors.productLink.message}</p>}
                    </div>

                    {/* Ad və Soyad */}
                    <div className="form-group full-name">
                        <label className="form-label">Ad və Soyad</label>
                        <input
                            type="text"
                            className="form-input"
                            placeholder="Ad və soyadınızı daxil edin"
                            {...register("fullname", { required: "Ad və soyad zəruridir." })}
                        />
                        {errors.fullname && <p className="error-message">{errors.fullname.message}</p>}
                    </div>

                    {/* E-poçt */}
                    <div className="form-group email">
                        <label className="form-label">E-poçt</label>
                        <input
                            type="email"
                            className="form-input"
                            placeholder="E-poçt ünvanınızı daxil edin"
                            {...register("email", {
                                required: "E-poçt zəruridir.",
                                pattern: {
                                    value: /^\S+@\S+\.\S+$/,
                                    message: "Keçərli bir e-poçt ünvanı daxil edin.",
                                },
                            })}
                        />
                        {errors.email && <p className="error-message">{errors.email.message}</p>}
                    </div>

                    {/* Telefon */}
                    <div className="form-group phone">
                        <label className="form-label">Telefon Nömrəsi</label>
                        <input
                            type="tel"
                            className="form-input"
                            placeholder="Telefon nömrənizi daxil edin"
                            {...register("phone", { required: "Telefon nömrəsi zəruridir." })}
                        />
                        {errors.phone && <p className="error-message">{errors.phone.message}</p>}
                    </div>

                    {/* Çatdırılma Ünvanı */}
                    <div className="form-group delivery-address">
                        <label className="form-label">Çatdırılma Ünvanı</label>
                        <textarea
                            className="form-textarea"
                            placeholder="Çatdırılma ünvanınızı daxil edin"
                            {...register("address", { required: "Ünvan zəruridir." })}
                        />
                        {errors.address && <p className="error-message">{errors.address.message}</p>}
                    </div>

                    {/* Poçt Kodu */}
                    <div className="form-group zip-code">
                        <label className="form-label">Poçt Kodu</label>
                        <input
                            type="text"
                            className="form-input"
                            placeholder="Poçt kodu daxil edin"
                            {...register("zipCode", {
                                required: "Poçt kodu zəruridir.",
                                maxLength: { value: 10, message: "Poçt kodu maksimum 10 simvol olmalıdır." },
                            })}
                        />
                        {errors.zipCode && <p className="error-message">{errors.zipCode.message}</p>}
                    </div>
                </div>

                {/* Məhsul Seçimləri */}
                <div className="form-section product-details">
                    <h3 className="section-title">Məhsul Seçimləri</h3>

                    {/* Rəng Seçimi */}
                    <div className="form-group color-selection">
                        <label className="form-label">Rəng:</label>
                        <div className="color-options">
                            {["Lacivert", "Qara", "Yaşıl Ordu", "Torpaq Sarısı"].map((color) => (
                                <button
                                    type="button"
                                    key={color}
                                    className={`color-button-2 ${selectedColor === color ? "active" : ""}`}
                                    onClick={() => setSelectedColor(color)}
                                >
                                    {color}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Ölçü Seçimi */}
                    <div className="form-group size-selection">
                        <label className="form-label">Ölçü:</label>
                        <div className="size-options">
                            {["L", "XL", "XXL", "XXXL"].map((size) => (
                                <button
                                    type="button"
                                    key={size}
                                    className={`size-button ${selectedSize === size ? "active" : ""}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Miqdar Seçimi */}
                    <div className="form-group quantity-selection">
                        <label className="form-label">Miqdar:</label>
                        <input
                            type="number"
                            className="form-input"
                            value={quantity}
                            min={1}
                            max={10}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                        />
                    </div>

                    {/* Əlavə Qeydlər */}
                    <div className="form-group additional-notes">
                        <label className="form-label">Əlavə Qeydlər</label>
                        <textarea
                            className="form-textarea"
                            placeholder="Sifarişlə bağlı qeydlərinizi yazın"
                            {...register("notes")}
                        />
                    </div>

                    {/* Şəkil Yükləmə */}
                    <div className="form-group image-upload">
                        <label className="form-label">Məhsul Şəkli Yüklə</label>
                        <input
                            type="file"
                            className="form-file-input"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                        {image && <p className="uploaded-file-name">Yüklənən şəkil: {image.name}</p>}
                    </div>
                </div>

                {/* Yüklənir Göstəricisi */}
                {loading ? (
                    <div className="loading-indicator">
                        <p className="loading-text">Yüklənir...</p>
                    </div>
                ) : (
                    <button type="submit" className="submit-button">
                        Sifariş Et
                    </button>
                )}
            </form>
        </div>
    );
};

export default CombinedForm;
