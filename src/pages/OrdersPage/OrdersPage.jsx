// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaFilter,
  FaShoppingBag,
  FaSortAmountDown,
  FaEye,
  FaTruck,
  FaTimesCircle,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import "./OrdersPage.css";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [sortConfig, setSortConfig] = useState({
    field: "date",
    direction: "desc",
  });
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showOrderModal, setShowOrderModal] = useState(false);

  const ordersPerPage = 10;

  // Örnek sipariş verileri
  const mockOrders = [
    {
      id: "SİF-2024-001",
      date: "2024-01-10",
      status: "Tamamlandı", // Status: Tamamlandı
      total: 1250.99,
      items: [
        { id: 1, name: "iPhone 13", price: 999.99, quantity: 1 },
        { id: 2, name: "AirPods Pro", price: 249.99, quantity: 1 },
      ],
      paymentMethod: "Kredit Kartı",
      customer: {
        name: "Əhməd Əliyev",
        email: "ahmed@example.com",
        phone: "050-0001",
      },
      shippingAddress: "Nizami küç., 10 Bakı",
      trackingNumber: "AZ123456789",
      deliveryDate: "2024-01-15",
    },
    {
      id: "SİF-2024-002",
      date: "2024-01-12",
      status: "Yolda", // Status: Yolda
      total: 500.0,
      items: [{ id: 1, name: "Samsung Galaxy S22", price: 500.0, quantity: 1 }],
      paymentMethod: "Nağd",
      customer: {
        name: "Leyla Hüseynova",
        email: "leyla@example.com",
        phone: "050-1234",
      },
      shippingAddress: "Füzuli küç., 5 Bakı",
      trackingNumber: "AZ223344556",
      deliveryDate: "2024-01-18",
    },
    {
      id: "SİF-2024-003",
      date: "2024-01-14",
      status: "Tamamlandı", // Status: Tamamlandı
      total: 300.5,
      items: [
        { id: 1, name: "Xiaomi Mi Band 7", price: 50.5, quantity: 3 },
        { id: 2, name: "Xiaomi Powerbank", price: 75.0, quantity: 2 },
      ],
      paymentMethod: "Kredit Kartı",
      customer: {
        name: "Nigar Məmmədova",
        email: "nigar@example.com",
        phone: "070-5678",
      },
      shippingAddress: "28 May küç., 17 Sumqayıt",
      trackingNumber: "AZ998877665",
      deliveryDate: "2024-01-19",
    },
    {
      id: "SİF-2024-004",
      date: "2024-01-16",
      status: "Ləğv edildi", // Status: Ləğv edildi
      total: 150.0,
      items: [{ id: 1, name: "Huawei FreeBuds 4i", price: 150.0, quantity: 1 }],
      paymentMethod: "Nağd",
      customer: {
        name: "Rəşad İbrahimov",
        email: "reshad@example.com",
        phone: "055-4321",
      },
      shippingAddress: "Qarabağ küç., 7 Gəncə",
      trackingNumber: "AZ112233445",
      deliveryDate: "2024-01-21",
    },
    {
      id: "SİF-2024-005",
      date: "2024-01-18",
      status: "Yolda", // Status: Yolda
      total: 720.0,
      items: [{ id: 1, name: "PlayStation 5", price: 720.0, quantity: 1 }],
      paymentMethod: "Kredit Kartı",
      customer: {
        name: "Orxan Həsənov",
        email: "orxan@example.com",
        phone: "077-8765",
      },
      shippingAddress: "Hüseyn Cavid pr., 23 Bakı",
      trackingNumber: "AZ445566778",
      deliveryDate: "2024-01-25",
    },
    {
      id: "SİF-2024-006",
      date: "2024-01-20",
      status: "Tamamlandı", // Status: Tamamlandı
      total: 90.0,
      items: [{ id: 1, name: "Kitab: Uğura Doğru", price: 30.0, quantity: 3 }],
      paymentMethod: "Nağd",
      customer: {
        name: "Aysel Qasımova",
        email: "aysel@example.com",
        phone: "051-9876",
      },
      shippingAddress: "Bakı küç., 15 Şəki",
      trackingNumber: "AZ556677889",
      deliveryDate: "2024-01-23",
    },
    {
      id: "SİF-2024-007",
      date: "2024-01-22",
      status: "Yolda", // Status: Yolda
      total: 1199.99,
      items: [{ id: 1, name: "MacBook Air M1", price: 1199.99, quantity: 1 }],
      paymentMethod: "Kredit Kartı",
      customer: {
        name: "Kamran Şirinov",
        email: "kamran@example.com",
        phone: "055-1234",
      },
      shippingAddress: "Gənclik küç., 12 Bakı",
      trackingNumber: "AZ667788990",
      deliveryDate: "2024-01-28",
    },
    {
      id: "SİF-2024-008",
      date: "2024-01-25",
      status: "Tamamlandı", // Status: Tamamlandı
      total: 250.0,
      items: [{ id: 1, name: "Elektrik Çaydan", price: 125.0, quantity: 2 }],
      paymentMethod: "Nağd",
      customer: {
        name: "Sevinc Əliyeva",
        email: "sevinc@example.com",
        phone: "050-9876",
      },
      shippingAddress: "Xətai küç., 9 Lənkəran",
      trackingNumber: "AZ778899001",
      deliveryDate: "2024-01-30",
    },
    {
      id: "SİF-2024-009",
      date: "2024-01-28",
      status: "Yolda", // Status: Yolda
      total: 200.0,
      items: [
        { id: 1, name: "Logitech Klaviatura", price: 100.0, quantity: 2 },
      ],
      paymentMethod: "Kredit Kartı",
      customer: {
        name: "Elvin Nəcəfov",
        email: "elvin@example.com",
        phone: "070-7654",
      },
      shippingAddress: "Cavad Xan küç., 4 Qazax",
      trackingNumber: "AZ889900112",
      deliveryDate: "2024-02-02",
    },
    {
      id: "SİF-2024-010",
      date: "2024-01-30",
      status: "Tamamlandı", // Status: Tamamlandı
      total: 50.0,
      items: [{ id: 1, name: "USB Kabellər", price: 10.0, quantity: 5 }],
      paymentMethod: "Nağd",
      customer: {
        name: "Fidan Əkbərova",
        email: "fidan@example.com",
        phone: "051-3456",
      },
      shippingAddress: "Görüş küç., 3 Şamaxı",
      trackingNumber: "AZ990011223",
      deliveryDate: "2024-02-05",
    },
  ];

  // Sipariş verilerini yükleme
  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        // API çağrısı simülasyonu
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setOrders(mockOrders);
        setFilteredOrders(mockOrders);
      } catch (error) {
        console.error("Siparişler yüklenirken hata:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Arama ve filtreleme işlevi
  useEffect(() => {
    const filterOrders = () => {
      let result = [...orders];

      // Arama filtresi
      if (searchTerm) {
        result = result.filter(
          (order) =>
            order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.customer.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      // Durum filtresi
      if (selectedStatus !== "all") {
        result = result.filter((order) => order.status === selectedStatus);
      }

      // Tarih aralığı filtresi
      if (dateRange.start && dateRange.end) {
        result = result.filter((order) => {
          const orderDate = new Date(order.date);
          const start = new Date(dateRange.start);
          const end = new Date(dateRange.end);
          return orderDate >= start && orderDate <= end;
        });
      }

      // Sıralama
      result.sort((a, b) => {
        const aValue = a[sortConfig.field];
        const bValue = b[sortConfig.field];

        if (sortConfig.direction === "asc") {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });

      setFilteredOrders(result);
      setCurrentPage(1);
    };

    filterOrders();
  }, [orders, searchTerm, selectedStatus, dateRange, sortConfig]);

  // Sayfalama hesaplamaları
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  // Durum badge'i için renk belirleme
  const getStatusDetails = (status) => {
    switch (status) {
      case "Tamamlandı":
        return { className: "status-completed", icon: <FaCheckCircle /> };
      case "Yolda":
        return { className: "status-shipping", icon: <FaTruck /> };
      case "İşlenir":
        return { className: "status-processing", icon: <FaClock /> };
      case "Ləğv edildi":
        return { className: "status-cancelled", icon: <FaTimesCircle /> };
      default:
        return { className: "status-default", icon: null };
    }
  };

  // Sipariş detaylarını görüntüleme
  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setShowOrderModal(true);
  };

  // Filtreleme modalı
  const FilterModal = () => (
    <div className={`filter-modal ${showFilterModal ? "show" : ""}`}>
      <div className="filter-modal-content">
        <h3>Filtrləmə Seçimləri</h3>

        <div className="filter-section">
          <label>Sifariş Statusu</label>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="all">Hamısı</option>
            <option value="Tamamlandı">Tamamlandı</option>
            <option value="Kargoda">Kargoda</option>
            <option value="İşleniyor">Emal Edilir</option>
            <option value="İptal">Ləğv Edildi</option>
          </select>
        </div>

        <div className="filter-section">
          <label>Tarix Aralığı</label>
          <input
            type="date"
            value={dateRange.start}
            onChange={(e) =>
              setDateRange((prev) => ({ ...prev, start: e.target.value }))
            }
          />
          <input
            type="date"
            value={dateRange.end}
            onChange={(e) =>
              setDateRange((prev) => ({ ...prev, end: e.target.value }))
            }
          />
        </div>

        <div className="filter-actions">
          <button
            className="button-secondary"
            onClick={() => {
              setSelectedStatus("all");
              setDateRange({ start: "", end: "" });
            }}
          >
            Filtrləri Təmizlə
          </button>
          <button
            className="button-primary"
            onClick={() => setShowFilterModal(false)}
          >
            Tətbiq Et
          </button>
        </div>
      </div>
    </div>
  );

  // Sipariş detay modalı
  const OrderModal = () => {
    if (!selectedOrder) return null;

    return (
      <div className={`order-modal ${showOrderModal ? "show" : ""}`}>
        <div className="order-modal-content">
          <div className="order-modal-header">
            <h3>Sipariş Detayları</h3>
            <button
              className="close-button"
              onClick={() => setShowOrderModal(false)}
            >
              ×
            </button>
          </div>

          <div className="order-details">
            <div className="order-details__left">
              <div className="order-details__card">
                <h4 className="order-details__title">Sifariş Məlumatları</h4>
                <div className="order-details__info">
                  <p className="order-details__row">
                    <span className="order-details__label">Sifariş No:</span>
                    <span className="order-details__value">
                      {selectedOrder.id}
                    </span>
                  </p>
                  <p className="order-details__row">
                    <span className="order-details__label">Tarix:</span>
                    <span className="order-details__value">
                      {new Date(selectedOrder.date).toLocaleDateString("az-AZ")}
                    </span>
                  </p>
                  <p className="order-details__row">
                    <span className="order-details__label">Status:</span>
                    <span className="order-details__badge">
                      {selectedOrder.status}
                    </span>
                  </p>
                  <p className="order-details__row">
                    <span className="order-details__label">Cəmi:</span>
                    <span className="order-details__value order-details__value--price">
                      {selectedOrder.total.toLocaleString("az-AZ")} ₼
                    </span>
                  </p>
                </div>
              </div>

              <div className="order-details__card">
                <h4 className="order-details__title">Müştəri Məlumatları</h4>
                <div className="order-details__info">
                  <p className="order-details__row">
                    <span className="order-details__label">Ad və Soyad:</span>
                    <span className="order-details__value">
                      {selectedOrder.customer.name}
                    </span>
                  </p>
                  <p className="order-details__row">
                    <span className="order-details__label">E-poçt:</span>
                    <span className="order-details__value">
                      {selectedOrder.customer.email}
                    </span>
                  </p>
                  <p className="order-details__row">
                    <span className="order-details__label">Telefon:</span>
                    <span className="order-details__value">
                      {selectedOrder.customer.phone}
                    </span>
                  </p>
                  <p className="order-details__row">
                    <span className="order-details__label">
                      Çatdırılma Ünvanı:
                    </span>
                    <span className="order-details__value">
                      {selectedOrder.shippingAddress}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="order-details__right">
              <div className="order-details__card order-details__card--products">
                <h4 className="order-details__title">Məhsullar</h4>
                <div className="order-details__table-wrapper">
                  <table className="order-details__table">
                    <thead>
                      <tr>
                        <th>Məhsul</th>
                        <th>Ədəd</th>
                        <th>Qiymət</th>
                        <th>Cəmi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedOrder.items.map((item) => (
                        <tr key={item.id}>
                          <td>{item.name}</td>
                          <td>{item.quantity}</td>
                          <td>{item.price.toLocaleString("az-AZ")} ₼</td>
                          <td>
                            {(item.price * item.quantity).toLocaleString(
                              "az-AZ"
                            )}{" "}
                            ₼
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return <div className="loading">Siparişler yükleniyor...</div>;
  }

  return (
    <div className="orders-page">
      <div className="orders-header">
        <div className="header-title">
          <FaShoppingBag className="header-icon" />
          <h1>Siparişlerim</h1>
        </div>

        <div className="header-actions">
          <div className="search-box-3">
            <FaSearch className="search-icon-3" />
            <input
              type="text"
              placeholder="Sipariş ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button
            className="filter-button"
            onClick={() => setShowFilterModal(true)}
          >
            <FaFilter />
            <span>Filtrele</span>
          </button>
        </div>
      </div>

      <div className="orders-stats">
        <div className="stat-card">
          <h3>Ümumi Sifariş</h3>
          <p>{orders.length}</p>
        </div>
        <div className="stat-card">
          <h3>Tamamlanan</h3>
          <p>
            {orders.filter((order) => order.status === "Tamamlandı").length}
          </p>
        </div>
        <div className="stat-card">
          <h3>Çatdırılmada</h3>
          <p>{orders.filter((order) => order.status === "Kargoda").length}</p>
        </div>
        <div className="stat-card">
          <h3>İşlənir</h3>
          <p>{orders.filter((order) => order.status === "İşleniyor").length}</p>
        </div>
      </div>

      <div className="orders-table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th
                onClick={() =>
                  setSortConfig({
                    field: "id",
                    direction: sortConfig.direction === "asc" ? "desc" : "asc",
                  })
                }
              >
                Sipariş Nömrəsi{" "}
                {sortConfig.field === "id" && <FaSortAmountDown />}
              </th>
              <th>Müştəri</th>
              <th
                onClick={() =>
                  setSortConfig({
                    field: "date",
                    direction: sortConfig.direction === "asc" ? "desc" : "asc",
                  })
                }
              >
                Tarix {sortConfig.field === "date" && <FaSortAmountDown />}
              </th>
              <th>Vəziyyət</th>
              <th
                onClick={() =>
                  setSortConfig({
                    field: "total",
                    direction: sortConfig.direction === "asc" ? "desc" : "asc",
                  })
                }
              >
                Cəm {sortConfig.field === "total" && <FaSortAmountDown />}
              </th>
              <th>Ödəniş</th>
              <th>Əməliyyatlar</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr key={order.id}>
                <td className="order-id">{order.id}</td>
                <td>{order.customer.name}</td>
                <td>{new Date(order.date).toLocaleDateString("az-AZ")}</td>
                <td>
                  <span
                    className={`status-badge ${
                      getStatusDetails(order.status).className
                    }`}
                  >
                    {getStatusDetails(order.status).icon}
                    {order.status}
                  </span>
                </td>
                <td className="order-total">
                  {order.total.toLocaleString("az-AZ")} ₼
                </td>
                <td>{order.paymentMethod}</td>
                <div className="acction-4">
                  <button
                    className="action-button-4 detail-button-4"
                    onClick={() => handleViewDetails(order)}
                  >
                    <FaEye />
                  </button>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredOrders.length === 0 && (
          <div className="no-results">
            <p>Sipariş tapılmadı.</p>
          </div>
        )}
      </div>

      <div className="pagination">
        <div className="pagination-info">
          Toplam {filteredOrders.length} siparişdən {indexOfFirstOrder + 1}-
          {Math.min(indexOfLastOrder, filteredOrders.length)} arası göstərilir
        </div>

        <div className="pagination-controls">
          <button
            className="pagination-button"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            <BiChevronLeft /> Önceki
          </button>
          <div className="pagination-pages">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`page-number ${
                  currentPage === page ? "active" : ""
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            className="pagination-button"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Sonraki <BiChevronRight />
          </button>
        </div>
      </div>

      {/* Modaller */}
      <FilterModal />
      <OrderModal />
    </div>
  );
};
export default OrdersPage;
