import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Sepetteki ürünler
  totalQuantity: 0, // Toplam ürün sayısı
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Sepete ürün ekleme
    addToCart: (state, action) => {
      const newItem = action.payload; // Eklenecek ürün bilgisi
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        // Ürün zaten varsa miktarını artır
        existingItem.quantity += newItem.quantity || 1;
      } else {
        // Ürün yoksa yeni bir ürün olarak ekle
        state.items.push({ ...newItem, quantity: newItem.quantity || 1 });
      }
      state.totalQuantity += newItem.quantity || 1; // Toplam ürünü güncelle
    },

    // Sepetten ürün çıkarma
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity; // Toplam ürünü azalt
        state.items = state.items.filter((item) => item.id !== id); // Ürünü kaldır
      }
    },

    // Ürün miktarını artırma
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity++;
        state.totalQuantity++;
      }
    },

    // Ürün miktarını azaltma
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        state.totalQuantity--;
      } else if (existingItem) {
        // Eğer miktar 1 ise ürünü kaldır
        state.items = state.items.filter((item) => item.id !== id);
        state.totalQuantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
