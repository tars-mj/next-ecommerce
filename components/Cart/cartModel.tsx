import { CartItem } from './CartContext';

export const getCartItemsFromLocalStorage = () => {
  const itemsFromLocalStorage = localStorage.getItem('ZAISTE_SHOPPING_CART');
  if (!itemsFromLocalStorage) {
    return [];
  }

  try {
    const items = JSON.parse(itemsFromLocalStorage);
    return items;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const setCartItemsInLocalStorage = (cartItems: CartItem[]) => {
  localStorage.setItem('ZAISTE_SHOPPING_CART', JSON.stringify(cartItems));
};
