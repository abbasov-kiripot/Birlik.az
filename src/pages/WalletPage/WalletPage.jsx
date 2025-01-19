// WalletPage.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { 
  FaWallet, 
  FaMoneyBillWave, 
  FaPlusCircle, 
  FaMinusCircle,
  FaChartLine,
  FaRegBell,
  FaSearch,
  FaCalendarAlt
} from 'react-icons/fa';
import './WalletPage.css';

const WalletPage = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState('');
  const [showAddMoney, setShowAddMoney] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  // Fake initial data
  useEffect(() => {
    const initialTransactions = [
      {
        id: 1,
        type: 'deposit',
        amount: 128.22,
        date: '2024-01-14',
        description: 'Birlik balans artımı',
        category: 'credit'
      },
      {
        id: 2,
        type: 'payment',
        amount: 22.85,
        date: '2024-01-13',
        description: 'Birlik alış-veriş',
        category: 'shopping'
      },
      {
        id: 3,
        type: 'payment',
        amount: 125.28,
        date: '2024-01-12',
        description: 'Birlik alış-veriş',
        category: 'transfer'
      },
      {
        id: 4,
        type: 'deposit',
        amount: 52.89,
        date: '2024-01-11',
        description: 'Birlik balans artımı',
        category: 'income'
      }
    ];

    const initialNotifications = [
      {
        id: 1,
        text: 'Son əməliyyatınız uğurla tamamlandı',
        date: '2024-01-14',
        read: false
      },
      {
        id: 2,
        text: 'Xüsusi təklif: Növbəti daxilatınıza 5% cashback qazanın',
        date: '2024-01-13',
        read: false
      }
    ];

    setTransactions(initialTransactions);
    setNotifications(initialNotifications);
    setBalance(0.00);
  }, []);

  const handleAddMoney = (e) => {
    e.preventDefault();
    if (!amount || isNaN(amount)) return;

    const newAmount = parseFloat(amount);
    setBalance(prevBalance => prevBalance + newAmount);
    
    const newTransaction = {
      id: transactions.length + 1,
      type: 'deposit',
      amount: newAmount,
      date: selectedDate.toISOString().split('T')[0],
      description: 'Birlik Credit Deposit',
      category: 'credit'
    };
    
    setTransactions(prev => [newTransaction, ...prev]);
    addNotification('Transaction successful! Amount: ' + newAmount.toFixed(2) + ' ₼');
    setAmount('');
    setShowAddMoney(false);
  };

  const addNotification = (text) => {
    const newNotification = {
      id: notifications.length + 1,
      text,
      date: new Date().toISOString().split('T')[0],
      read: false
    };
    setNotifications(prev => [newNotification, ...prev]);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
  };

  const filterTransactions = (transactions) => {
    return transactions
      .filter(transaction => {
        if (activeFilter === 'all') return true;
        return transaction.type === activeFilter;
      })
      .filter(transaction => 
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
  };

  const getSpendingAnalytics = () => {
    const spending = transactions
      .filter(t => t.type === 'payment')
      .reduce((acc, curr) => acc + Math.abs(curr.amount), 0);
    
    const income = transactions
      .filter(t => t.type === 'deposit')
      .reduce((acc, curr) => acc + curr.amount, 0);

    return {
      spending,
      income,
      ratio: (spending / income * 100).toFixed(1)
    };
  };

  const analytics = getSpendingAnalytics();

  return (
    <div className="wallet-container">
      <div className="wallet-header">
        <div className="header-left">
          <FaWallet className="wallet-icon" />
          <h1>Mənim Pulqabım</h1>
        </div>
        <div className="header-right-2">
          <button 
            className="notification-button-2"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <FaRegBell />
            {notifications.some(n => !n.read) && <span className="notification-badge-2" />}
          </button>
        </div>
      </div>

      {showNotifications && (
        <div className="notifications-panel">
          <h3>Notifications</h3>
          {notifications.map(notification => (
            <div 
              key={notification.id} 
              className={`notification-item ${!notification.read ? 'unread' : ''}`}
            >
              <span className="notification-text">{notification.text}</span>
              <span className="notification-date">{formatDate(notification.date)}</span>
            </div>
          ))}
        </div>
      )}

      <div className="balance-section">
        <div className="balance-card">
          <div className="balance-info">
            <h2>Ümumi Balans</h2>
            <span className="balance-amount">{balance.toFixed(2)} ₼</span>
          </div>
          <button 
            className="add-money-button"
            onClick={() => setShowAddMoney(true)}
          >
            <FaPlusCircle />Artır
          </button>
        </div>

        <div className="analytics-cards">
          <div className="analytics-card">
            <div className="analytics-icon income">
              <FaPlusCircle />
            </div>
            <div className="analytics-info">
              <span className="analytics-label">Toplam Gəlir</span>
              <span className="analytics-value">{analytics.income.toFixed(2)} ₼</span>
            </div>
          </div>
          <div className="analytics-card">
            <div className="analytics-icon spending">
              <FaMinusCircle />
            </div>
            <div className="analytics-info">
              <span className="analytics-label">Toplam Xərc</span>
              <span className="analytics-value">{analytics.spending.toFixed(2)} ₼</span>
            </div>
          </div>
          <div className="analytics-card">
            <div className="analytics-icon ratio">
              <FaChartLine />
            </div>
            <div className="analytics-info">
              <span className="analytics-label">Xərcləmə Faizi</span>
              <span className="analytics-value">%{analytics.ratio}</span>
            </div>
          </div>
        </div>
      </div>

      {showAddMoney && (
        <div className="add-money-modal">
          <div className="modal-content">
            <h3>Balans Artır</h3>
            <form onSubmit={handleAddMoney}>
              <div className="input-group">
                <FaMoneyBillWave className="input-icon" />
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Miqdarı Girin"
                  min="1"
                  step="0.01"
                />
              </div>
              <div className="date-picker-group">
                <FaCalendarAlt className="input-icon" />
                <input
                  type="date"
                  value={selectedDate.toISOString().split('T')[0]}
                  onChange={(e) => setSelectedDate(new Date(e.target.value))}
                />
              </div>
              <div className="modal-buttons">
                <button type="submit" className="confirm-button">
                  Təstiklə
                </button>
                <button 
                  type="button" 
                  className="cancel-button"
                  onClick={() => setShowAddMoney(false)}
                >
                  Rədet
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


      <div className="transactions-section">
        <div className="transactions-header">
          <h2>Ən Son Əməliyyatlar</h2>
          <div className="transactions-filters">
            <div className="search-box">
              <FaSearch className="search-icon-2" />
              <input
                type="text"
                placeholder="Əməliyyat axdar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filter-buttons-3">
              <button 
                className={`filter-button-2 ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                Hamısı
              </button>
              <button 
                className={`filter-button-2 ${activeFilter === 'deposit' ? 'active' : ''}`}
                onClick={() => setActiveFilter('deposit')}
              >
                Gəlirlər
              </button>
              <button 
                className={`filter-button-2 ${activeFilter === 'payment' ? 'active' : ''}`}
                onClick={() => setActiveFilter('payment')}
              >
                Xərclər
              </button>
            </div>
          </div>
        </div>

        <div className="transactions-list">
          {filterTransactions(transactions).map(transaction => (
            <div 
              key={transaction.id} 
              className={`transaction-item ${transaction.type}`}
            >
              <div className="transaction-icon">
                {transaction.type === 'deposit' ? 
                  <FaPlusCircle className="deposit-icon" /> : 
                  <FaMinusCircle className="payment-icon" />
                }
              </div>
              <div className="transaction-details">
                <span className="transaction-description">
                  {transaction.description}
                </span>
                <span className="transaction-category">
                  {transaction.category}
                </span>
                <span className="transaction-date">
                  {formatDate(transaction.date)}
                </span>
              </div>
              <span className={`transaction-amount ${transaction.type}`}>
                {transaction.type === 'deposit' ? '+' : '-'}
                {Math.abs(transaction.amount).toFixed(2)} ₼
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WalletPage;