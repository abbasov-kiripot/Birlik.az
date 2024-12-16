// src/redux/slices/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Sepet ürünleri
    totalQuantity: 0, // Toplam ürün miktarı
    totalAmount: 0, // Toplam tutar
  },
  reducers: {
    // Sepete ürün ekleme
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        // Eğer ürün zaten varsa, miktarını artır
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        // Yeni ürün ekle
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }

      // Toplam miktar ve fiyatı güncelle
      updateCartTotals(state);
    },

    // Sepetten ürün kaldırma
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === id);

      if (existingItemIndex !== -1) {
        const existingItem = state.items[existingItemIndex];
        // Sepet toplamından çıkar
        state.totalAmount -= existingItem.totalPrice;
        state.totalQuantity -= existingItem.quantity;
        // Ürünü sepetten kaldır
        state.items.splice(existingItemIndex, 1);
      }
    },

    // Ürün miktarını arttırma
    increaseQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        // Miktarı 1 arttır
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;

        // Toplam miktar ve fiyatı güncelle
        updateCartTotals(state);
      }
    },

    // Ürün miktarını azaltma
    decreaseQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem && existingItem.quantity > 1) {
        // Miktarı 1 azalt
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;

        // Toplam miktar ve fiyatı güncelle
        updateCartTotals(state);
      }
    },

    // Sepeti temizleme
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

// Helper function to update cart totals (avoids repetition)
const updateCartTotals = (state) => {
  const totals = state.items.reduce(
    (acc, item) => {
      acc.totalQuantity += item.quantity;
      acc.totalAmount += item.totalPrice;
      return acc;
    },
    { totalQuantity: 0, totalAmount: 0 }
  );

  state.totalQuantity = totals.totalQuantity;
  state.totalAmount = totals.totalAmount;
};

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
