// index.jsx veya main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  
import { Provider } from 'react-redux';  // Redux Provider'ı unutmayalım
import App from "./App";
import store from './components/redux/store';

// React 18'de createRoot kullanımı
const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
