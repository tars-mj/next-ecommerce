import { createContext, ReactNode, useState, useContext, useEffect } from 'react';
import { getCartItemsFromLocalStorage, setCartItemsInLocalStorage } from './cartModel';

export interface CartItem {
  readonly id: number;
  readonly price: number;
  readonly title: string;
  readonly count: number;
}

interface CartState {
  readonly items: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeItemToCart: (id: CartItem['id']) => void;
}

export const CartStateContext = createContext<CartState | null>(null);

export const CartStateContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setCartItems(getCartItemsFromLocalStorage());
  }, []);

  useEffect(() => {
    setCartItemsInLocalStorage(cartItems);
  }, [cartItems]);

  return (
    <CartStateContext.Provider
      value={{
        items: cartItems,
        addItemToCart: (item) => {
          setCartItems((prevState) => {
            const checkItem = prevState.find((existingItem) => existingItem.id === item.id);
            if (!checkItem) {
              return [...prevState, item];
            }

            return prevState.map((existingItem) => {
              if (existingItem.id === item.id) {
                return {
                  ...existingItem,
                  count: existingItem.count + 1
                };
              }
              return existingItem;
            });
          });
        },
        removeItemToCart: (id) => {
          setCartItems((prevState) => {
            const existingItem = prevState.find((item) => item.id === id);

            if (existingItem && existingItem.count <= 1) {
              return prevState.filter((item) => item.id === id);
            }

            return prevState.map((item) => {
              if (item.id === id) {
                return {
                  ...item,
                  count: item.count - 1
                };
              }
              return item;
            });
          });
        }
      }}>
      {children}
    </CartStateContext.Provider>
  );
};

export const useCartState = () => {
  const cartState = useContext(CartStateContext);

  if (!cartState) {
    throw new Error('You forgot CartStateContextProvider');
  }

  return cartState;
};
