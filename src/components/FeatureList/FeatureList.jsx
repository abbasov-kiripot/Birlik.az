import React from "react";
import { FaTruck, FaShieldAlt, FaMoneyCheckAlt, FaStar } from "react-icons/fa";
import "./FeatureList.css";

const features = [
  {
    id: 1,
    icon: <FaMoneyCheckAlt className="feature-icon" />,
    title: "Qapıda rəsmiləşdirilmə",
    description: "Nağd, hissə-hissə və ya kartla ödəmə imkanı",
  },
  {
    id: 2,
    icon: <FaShieldAlt className="feature-icon" />,
    title: "Zəmanət seçimi",
    description: "İstehsalçı zəmanəti, qızıl zəmanət, zəmanət plus",
  },
  {
    id: 3,
    icon: <FaTruck className="feature-icon" />,
    title: "Pulsuz çatdırılma",
    description: "49.99 AZN-dən yuxarı sifarişlərə pulsuz çatdırılma",
  },
  {
    id: 4,
    icon: <FaStar className="feature-icon" />,
    title: "Ən yaxşı qiymətə zəmanət!",
    description: "Daha ucuz tap, qiymət fərqinin 120%-ni geri al",
  },
];

const FeatureList = () => {
  return (
    <div className="features">
      {features.map((feature) => (
        <div key={feature.id} className="feature-item">
          {feature.icon}
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureList;
