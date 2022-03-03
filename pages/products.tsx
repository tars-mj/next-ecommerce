import { InferGetStaticPropsType } from 'next';
import { ProductListItem } from 'components/Product';

export const getStaticProps = async () => {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const data: StoreApiResponse[] = await res.json();

  return {
    props: {
      data
    }
  };
};

const ProductsPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {data.map((product) => {
        return (
          <li key={product.id} className="shadow-xl border-2">
            <ProductListItem
              data={{
                title: product.title,
                thumbnailUrl: product.image,
                thumbnailAlt: product.title
              }}
            />
          </li>
        );
      })}
    </ul>
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
}
