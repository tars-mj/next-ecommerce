// @ts-nocheck

import { ProductDetails } from 'components/Product';
import { useQuery } from 'react-query';

const getProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products/');
  const data: StoreApiResponse[] = await res.json();
  return data;
};

const ProductsCSRPage = () => {
  const { isLoading, error, data } = useQuery('products', getProducts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || error) {
    return <div>Coś poszło nie tak</div>;
  }
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {data.map((product) => {
        return (
          <li key={product.id} className="shadow-xl border-2">
            <ProductDetails
              data={{
                title: product.title,
                description: product.description,
                thumbnailUrl: product.image,
                thumbnailAlt: product.title,
                rating: product.rating.rate
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsCSRPage;

export interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
