import React from "react";
import "./MakeupCard.css";
import { FaShoppingCart } from "react-icons/fa";

const MakeupCard = () => {
  const products = [
    {
      id: 1,
      image: "https://cdn.dsmcdn.com/ty1600/prod/QC/20241112/09/1e71e272-ad50-3c70-a557-a41d650835f2/1_org.jpg",
      name: "Mat Dodaq Boyası",
      description: "Uzun müddət qalıcı, parlaq rəngli mat dodaq boyası.",
      price: "19.99",
      brand: "BeautyLux",
      category: "Dodaq Boyaları",
      ratings: 4.5,
      reviews: 120,
      stock: 25,
      discount: "10%",
      features: [
        "Təbii tərkibli",
        "Nəmləndirici təsir",
        "uzunmüddətli rəng",
      ],
    },
    {
      id: 2,
      image: "https://cdn.dsmcdn.com/ty1600/prod/QC/20241112/09/1e71e272-ad50-3c70-a557-a41d650835f2/1_org.jpg",
      name: "Göz Kölgəsi Palitrası",
      description: "10 müxtəlif rəngdə yüksək piqmentli göz kölgəsi palitrası.",
      price: "29.99",
      brand: "GlamShade",
      category: "Göz Makiyajı",
      ratings: 4.8,
      reviews: 85,
      stock: 15,
      discount: "15%",
      features: [
        "10 fərqli rəng",
        "Hipoalerjenik",
        "Suya davamlı təsir",
      ],
    },
    {
      id: 3,
      image: "https://cdn.dsmcdn.com/ty1354/product/media/images/prod/QC/20240605/16/edad5f52-4b4e-312f-9180-ee4d3ce740fb/1_org.jpg",
      name: "Tonaldan Krem",
      description: "Təbii görünüşlü, yüksək örtücülük təmin edən tonaldan krem.",
      price: "24.99",
      brand: "SkinPerfection",
      category: "Üz Makiyajı",
      ratings: 4.6,
      reviews: 65,
      stock: 10,
      discount: "5%",
      features: [
        "Yüksək örtücülük",
        "Quruluq yaratmayan tərkib",
        "Təbii finiş",
      ],
    },
    {
        id: 4,
        image: "https://cdn.dsmcdn.com/ty1354/product/media/images/prod/QC/20240605/16/edad5f52-4b4e-312f-9180-ee4d3ce740fb/1_org.jpg",
        name: "Tonaldan Krem",
        description: "Təbii görünüşlü, yüksək örtücülük təmin edən tonaldan krem.",
        price: "24.99",
        brand: "SkinPerfection",
        category: "Üz Makiyajı",
        ratings: 4.6,
        reviews: 65,
        stock: 10,
        discount: "5%",
        features: [
          "Yüksək örtücülük",
          "Quruluq yaratmayan tərkib",
          "Təbii finiş",
        ],
      },
  ];

  return (
    <div className="makeup-card-list">
      {products.map((product) => (
        <div key={product.id} className="makeup-card">
          <div className="makeup-card-image-container">
            <img
              src={product.image}
              alt={product.name}
              className="makeup-card-image"
            />
          </div>
          <div className="makeup-card-details">
            <h3 className="makeup-card-name">{product.name}</h3>
            <p className="makeup-card-brand">{product.brand}</p>
            <p className="makeup-card-category">{product.category}</p>
            <p className="makeup-card-description">{product.description}</p>
            <p className="makeup-card-price">
              {product.price} ₼{" "}
              {product.discount && (
                <span className="makeup-card-discount">-{product.discount}</span>
              )}
            </p>
            <p className="makeup-card-ratings">
              ⭐ {product.ratings} ({product.reviews} rəy)
            </p>
            <ul className="makeup-card-features">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <p className={`makeup-card-stock ${product.stock < 10 ? "low-stock" : ""}`}>
              {product.stock > 0
                ? `Stok: ${product.stock} ədəd`
                : "Stokda yoxdur"}
            </p>
            <button
              className="makeup-card-button"
              disabled={product.stock === 0}
            >
               <FaShoppingCart /> {product.stock > 0 ? "Səbətə əlavə et" : "Tükənmişdir"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MakeupCard;
