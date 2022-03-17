import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Main } from 'components/Main';
import { ProductDetails } from 'components/Product';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

export type InferGetStaticPaths<T> = T extends () => Promise<{
  paths: Array<{ params: infer R }>;
}>
  ? { params?: R }
  : never;

const ProductIdPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>Coś poszło nie tak...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main>
        <ProductDetails
          data={{
            id: data.id,
            title: data.title,
            thumbnailUrl: data.image,
            thumbnailAlt: data.title,
            description: data.description,
            rating: data.rating.rate,
            price: data.price,
            category: data.category,
            longDescription: data.longDescription
          }}
        />
      </Main>
      <Footer />
    </div>
  );
};

export default ProductIdPage;

export const getStaticPaths = async () => {
  const res = await fetch(`https://naszsklep-api.vercel.app/api/products`);
  const data: StoreApiResponse[] = await res.json();

  return {
    paths: data.map((product) => {
      return {
        params: {
          productId: product.id.toString()
        }
      };
    }),
    fallback: false
  };
};

export const getStaticProps = async ({ params }: InferGetStaticPaths<typeof getStaticPaths>) => {
  if (!params?.productId) {
    return {
      props: {},
      notFound: true
    };
  }

  const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${params.productId}`);
  const data: StoreApiResponse | null = await res.json();

  return {
    props: {
      data
    }
  };
};

export interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  longDescription: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  category: string;
}
