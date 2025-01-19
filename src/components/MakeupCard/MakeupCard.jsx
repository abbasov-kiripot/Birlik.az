// eslint-disable-next-line no-unused-vars
import React from "react";
import "./MakeupCard.css";
import { FaShoppingCart } from "react-icons/fa";

import { addToCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";

const MakeupCard = () => {
  const products = [
    {
      id: 1,
      image: "https://cdn.dsmcdn.com/ty1022/product/media/images/prod/SPM/PIM/20231020/14/4ad6ecf7-703c-3def-9c76-448649afc83e/1_org.jpg",
      name: "Mat Dodaq Boyası",
      description: "Uzun müddət qalıcı, parlaq rəngli mat dodaq boyası.",
      price: "19.99",
      brand: "BeautyLux",
      category: "Dodaq Boyaları",
      ratings: 4.5,
      reviews: 120,
      stock: 25,
      discount: "10%",
      features: ["Təbii tərkibli", "Nəmləndirici təsir", "uzunmüddətli rəng"],
    },
    {
      id: 2,
      image: "https://cdn.dsmcdn.com/ty1595/prod/QC/20241031/13/b098cba7-3520-3640-b1c5-df2d8cb80088/1_org.jpg",
      name: "Göz Kölgəsi Palitrası",
      description: "10 müxtəlif rəngdə yüksək piqmentli göz kölgəsi palitrası.",
      price: "29.99",
      brand: "GlamShade",
      category: "Göz Makiyajı",
      ratings: 4.8,
      reviews: 85,
      stock: 15,
      discount: "15%",
      features: ["10 fərqli rəng", "Hipoalerjenik", "Suya davamlı təsir"],
    },
    {
      id: 3,
      image: "https://cdn.dsmcdn.com/ty1065/product/media/images/prod/SPM/PIM/20231127/13/9a290f03-4f77-3de9-acfa-a2662deb3d3c/1_org.jpg",
      name: "Tonaldan Krem",
      description: "Təbii görünüşlü, yüksək örtücülük təmin edən tonaldan krem.",
      price: "24.99",
      brand: "SkinPerfection",
      category: "Üz Makiyajı",
      ratings: 4.6,
      reviews: 65,
      stock: 10,
      discount: "5%",
      features: ["Yüksək örtücülük", "Quruluq yaratmayan tərkib", "Təbii finiş"],
    },
    {
      id: 4,
      image: "https://cdn.dsmcdn.com/ty1585/product/media/images/prod/PIM/20241014/14/dd6983b7-c54d-4747-8e23-af37d8b3f71c/1_org.jpg",
      name: "Yanaq Qırmızı",
      description: "Təbii görünüş üçün mükəmməl qırmızı.",
      price: "18.50",
      brand: "BlushPerfect",
      category: "Üz Makiyajı",
      ratings: 4.3,
      reviews: 45,
      stock: 20,
      discount: "12%",
      features: ["İpək kimi tekstur", "Uzun müddət qalıcı", "Təbii görünüş"],
    },
    {
      id: 5,
      image: "https://cdn.dsmcdn.com/ty1613/product/media/images/prod/PIM/20241213/08/79c4ac0a-4bb1-44e9-a159-8d4733f4fe82/1_org.jpg",
      name: "Dırnaq Boyası",
      description: "Parlaq rənglərdə uzun müddət qalıcı dırnaq boyası.",
      price: "9.99",
      brand: "NailLux",
      category: "Dırnaq Boyaları",
      ratings: 4.7,
      reviews: 140,
      stock: 30,
      discount: "8%",
      features: ["Tez quruyan", "Qalıcı rəng", "İşıltılı finiş"],
    },
    {
      id: 6,
      image: "https://cdn.dsmcdn.com/ty1018/product/media/images/prod/SPM/PIM/20231020/13/d0b32775-fdca-3fcc-8a9f-d9bf5ae51893/1_org.jpg",
      name: "Makiyaj Fırça Dəsti",
      description: "10 ədəd peşəkar keyfiyyətli makiyaj fırçası.",
      price: "39.99",
      brand: "BrushPro",
      category: "Makiyaj Alətləri",
      ratings: 4.9,
      reviews: 200,
      stock: 10,
      discount: "20%",
      features: ["Peşəkar istifadə üçün", "Yüksək keyfiyyət", "Asan təmizləmə"],
    },
    {
      id: 7,
      image: "https://cdn.dsmcdn.com/ty1620/prod/QC/20250110/10/bb6e60b0-2f56-39b9-9eca-1a068c4225aa/1_org.jpg",
      name: "Kirpik Tuşu",
      description: "Həcm və uzunluq verən suya davamlı kirpik tuşu.",
      price: "22.99",
      brand: "LashExtend",
      category: "Göz Makiyajı",
      ratings: 4.4,
      reviews: 110,
      stock: 18,
      discount: "10%",
      features: ["Suya davamlı", "Həcmləndirici təsir", "Uzunmüddətli qalıcı"],
    },
    {
      id: 8,
      image: "https://cdn.dsmcdn.com/ty1621/product/media/images/prod/PIM/20250106/13/c71f77f9-1740-4f3a-943c-54b0322f5989/1_org.jpg",
      name: "Makiyaj Primeri",
      description: "Makiyajın uzun müddət qalıcı olmasını təmin edən primer.",
      price: "16.99",
      brand: "PrepPerfect",
      category: "Makiyaj Baza",
      ratings: 4.2,
      reviews: 50,
      stock: 12,
      discount: "6%",
      features: ["Uzunmüddətli təsir", "Hamarlaşdırıcı effekt", "Təbii finiş"],
    },
    {
      id: 9,
      image: "https://cdn.dsmcdn.com/ty1623/prod/QC/20250112/22/f22f06ee-0304-3102-a776-24ea104aae76/1_org.jpg",
      name: "Dəriyə Qulluq Serumu",
      description: "Dərinin nəmləndirilməsini və parlaq görünüşünü təmin edən serum.",
      price: "49.99",
      brand: "GlowSkin",
      category: "Dəriyə Qulluq",
      ratings: 4.7,
      reviews: 190,
      stock: 8,
      discount: "15%",
      features: ["Nəmləndirici", "Dəri bərpa edici", "Parlaq təsir"],
    },
    {
      id: 10,
      image: "https://cdn.dsmcdn.com/ty1612/prod/QC/20241209/11/432671f8-191c-348a-8a70-14e96645bed3/1_org.jpg",
      name: "Qaş Qələmi",
      description: "Qaşlarınızı vurğulamaq üçün mükəmməl qələm.",
      price: "12.99",
      brand: "BrowMaster",
      category: "Qaş Makiyajı",
      ratings: 4.6,
      reviews: 75,
      stock: 15,
      discount: "10%",
      features: ["Asan tətbiq", "Təbii rəng", "Davamlı təsir"],
    },
  ];
  


  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
      dispatch(
          addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              quantity: 1, // Varsayılan miktar
          })
      );
  };


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
              onClick={() => handleAddToCart(product)}
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
