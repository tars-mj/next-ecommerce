import { InferGetStaticPropsType } from 'next';
import { ProductListItem } from 'components/Product';
import { Main } from 'components/Main';

export const getStaticProps = async () => {
  const res = await fetch(`https://naszsklep-api.vercel.app/api/products`);
  const data: StoreApiResponse[] = await res.json();

  return {
    props: {
      data
    }
  };
};

const ProductsPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Main>
      <ul className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
        {data.map((product) => {
          return (
            <li key={product.id} className="group text-sm">
              <ProductListItem
                data={{
                  id: product.id,
                  title: product.title,
                  thumbnailUrl: product.image,
                  thumbnailAlt: product.title,
                  price: product.price,
                  category: product.category
                }}
              />
            </li>
          );
        })}
      </ul>
    </Main>
  );
};

export default ProductsPage;

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
  category: string;
}
