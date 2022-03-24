import { CheckIcon, ClockIcon } from '@heroicons/react/solid';
import { Main } from 'components/Main';
import Link from 'next/link';
import { useCartState } from '../components/Cart/CartContext';

const CartPage = () => {
  const cartState = useCartState();
  return (
    <Main>
      <div className="max-w-2xl mx-auto px-4 sm:py-10 sm:px-6 lg:px-0">
        <h1 className="text-3xl font-extrabold text-center tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>

        <form className="mt-12">
          <section aria-labelledby="cart-heading">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul role="list" className="border-t border-b border-gray-200 divide-y divide-gray-200">
              {cartState.items.map((item) => (
                <li key={`${item.title}_${item.price}`} className="flex py-6">
                  <div className="flex-shrink-0">
                    <img
                      src={
                        'https://tailwindui.com/img/ecommerce-images/checkout-page-03-product-04.jpg'
                      }
                      alt={'alt'}
                      className="w-24 h-24 rounded-md object-center object-cover sm:w-32 sm:h-32"
                    />
                  </div>

                  <div className="ml-4 flex-1 flex flex-col sm:ml-6">
                    <div>
                      <div className="flex justify-between">
                        <h4 className="text-sm">
                          <a href={''} className="font-medium text-gray-700 hover:text-gray-800">
                            {item.title}
                          </a>
                        </h4>
                        <p className="ml-4 text-sm font-medium text-gray-900">{item.price}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{item.count}</p>
                    </div>

                    <div className="mt-4 flex-1 flex items-end justify-between">
                      <p className="flex items-center text-sm text-gray-700 space-x-2">
                        {item.price ? (
                          <CheckIcon
                            className="flex-shrink-0 h-5 w-5 text-green-500"
                            aria-hidden="true"
                          />
                        ) : (
                          <ClockIcon
                            className="flex-shrink-0 h-5 w-5 text-gray-300"
                            aria-hidden="true"
                          />
                        )}

                        <span>{item.price ? 'In stock' : `Will ship in ...`}</span>
                      </p>
                      <div className="ml-4">
                        <button
                          onClick={() => cartState.removeItemToCart(item.id)}
                          type="button"
                          className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section aria-labelledby="summary-heading" className="mt-10">
            <h2 id="summary-heading" className="sr-only">
              Order summary
            </h2>

            <div>
              <dl className="space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-base font-medium text-gray-900">Subtotal</dt>
                  <dd className="ml-4 text-base font-medium text-gray-900">$96.00</dd>
                </div>
              </dl>
              <p className="mt-1 text-sm text-gray-500">
                Shipping and taxes will be calculated at checkout.
              </p>
            </div>

            <div className="mt-10">
              <button
                type="submit"
                className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">
                Checkout
              </button>
            </div>

            <div className="mt-6 text-sm text-center">
              <p>
                or{' '}
                <Link href="/products">
                  <a className="text-indigo-600 font-medium hover:text-indigo-500">
                    Continue Shopping<span aria-hidden="true"> &rarr;</span>
                  </a>
                </Link>
              </p>
            </div>
          </section>
        </form>
      </div>
    </Main>
  );
};

export default CartPage;
