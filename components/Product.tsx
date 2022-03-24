import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/solid';
import Breadcrumbs from './Breadcrumps';
import { classNames } from 'utils/classNames';
import { NextSeo } from 'next-seo';
import { Markdown } from './Markdown';
import { MarkdownResult } from 'utils/types';
import { useCartState } from './Cart/CartContext';

interface ProductDetails {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
  category: string;
  price: number;
  longDescription: MarkdownResult;
}

type ProductListItem = Pick<
  ProductDetails,
  'id' | 'title' | 'thumbnailAlt' | 'thumbnailUrl' | 'category' | 'price'
>;

interface ProductListItemProps {
  data: ProductListItem;
}

interface ProductDetailsProps {
  data: ProductDetails;
}

export const ProductListItem = ({ data }: ProductListItemProps) => {
  const cartState = useCartState();
  return (
    <>
      <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-white group-hover:opacity-75 shadow-lg shadow-gray-100 p-6">
        <Image
          src={data.thumbnailUrl}
          alt={data.thumbnailAlt}
          width="16"
          height="9"
          layout="responsive"
          objectFit="contain"
          className="w-full h-full object-center object-cover "
        />
      </div>
      <Link href={`/products/${data.id}`}>
        <a>
          <h3 className="mt-4 font-medium text-gray-900">{data.title}</h3>
          <p className="text-gray-500 italic">{data.category}</p>
          <p className="mt-2 font-medium text-gray-900">${data.price}</p>
        </a>
      </Link>
      <button
        onClick={() =>
          cartState.addItemToCart({
            title: data.title,
            price: 21.37,
            count: 1,
            id: data.id
          })
        }
        type="button"
        className="focus:outline-none mt-8 w-full rounded-md border border-transparent bg-primary-primaryBlue01 py-2 px-4 text-sm font-medium text-white shadow hover:bg-primary-primaryBlue01 focus:ring-2 focus:bg-primary-primaryBlue01 focus:ring-offset-2">
        Add to bag
      </button>
    </>
  );
};

export const ProductDetails = ({ data }: ProductDetailsProps) => {
  return (
    <>
      <NextSeo
        title={data.title}
        description={data.description}
        canonical={`https://next-ecommerce-nine-inky.vercel.app/products/${data.id}`}
        openGraph={{
          url: `https://next-ecommerce-nine-inky.vercel.app/products/${data.id}`,
          title: data.title,
          description: data.description,
          images: [
            {
              url: data.thumbnailUrl,
              alt: data.thumbnailAlt,
              type: 'image/jpeg'
            }
          ],
          site_name: 'Nasz sklep'
        }}
      />
      <div className="pt-6 pb-16 sm:pb-24">
        <Breadcrumbs />

        <div className="mt-8 max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
            <div className="lg:col-start-8 lg:col-span-5">
              <div className="flex justify-between">
                <h1 className="text-xl font-medium text-gray-900">{data.title}</h1>
                <p className="text-xl font-medium text-gray-900">{data.price}$</p>
              </div>
              {/* Reviews */}
              <div className="mt-4">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <p className="text-sm text-gray-700">
                    {data.rating}
                    <span className="sr-only"> out of 5 stars</span>
                  </p>
                  <div className="ml-1 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          data.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
                    ·
                  </div>
                  <div className="ml-4 flex"></div>
                </div>
              </div>
            </div>

            {/* Image gallery */}
            <div className="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
              <h2 className="sr-only">Images</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 lg:gap-8 h-full bg-white shadow-lg shadow-gray-100 p-6 rounded-lg">
                <div className="lg:col-span-2 lg:row-span-2 ">
                  <Image
                    src={data.thumbnailUrl}
                    alt={data.thumbnailAlt}
                    width="16"
                    height="9"
                    layout="responsive"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 lg:col-span-5">
              <form>
                <button
                  type="submit"
                  className="mt-8 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Add to cart
                </button>
              </form>

              {/* Product details */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Description</h2>

                <div
                  className="mt-4 prose prose-sm text-gray-500"
                  dangerouslySetInnerHTML={{ __html: data.description }}
                />
              </div>
            </div>
          </div>
          <article className="prose lg:prose-xl">
            <Markdown>{data.longDescription}</Markdown>
          </article>
        </div>
      </div>
    </>
  );
};
