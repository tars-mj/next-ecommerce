import { ShoppingBagIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useCartState } from './CartContext';

export const CartBar = () => {
  const cartState = useCartState();
  return (
    <div className="ml-4 flow-root lg:ml-8">
      <Link href="/cart">
        <a href="#" className="group -m-2 p-2 flex items-center">
          <ShoppingBagIcon
            className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
            aria-hidden="true"
          />
          <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
            {cartState.items.length}
          </span>
          <span className="sr-only">items in cart, view bag</span>
        </a>
      </Link>
    </div>
  );
};
