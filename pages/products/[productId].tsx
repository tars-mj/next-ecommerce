import { Main } from 'components/Main';
import { ProductDetails } from 'components/Product';
import { apolloClient } from 'graphql/apolloClient';
import { InferGetStaticPropsType } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { GetProductDetailsBySlugQueryVariables } from '../../generated/graphql';
import {
  GetProductDetailsBySlugDocument,
  GetProductDetailsBySlugQuery
} from '../../generated/graphql';
import { GetProductsSlugsDocument, GetProductsSlugsQuery } from '../../generated/graphql';

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
      <Main>
        <ProductDetails
          data={{
            id: data.slug,
            title: data.name,
            thumbnailUrl: data.images[0].url,
            thumbnailAlt: data.slug,
            description: data.description,
            rating: 5,
            price: data.price,
            category: data.categories[0].name,
            longDescription: data.longDescription
          }}
        />
      </Main>
    </div>
  );
};

export default ProductIdPage;

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query<GetProductsSlugsQuery>({
    query: GetProductsSlugsDocument
  });

  return {
    paths: data.products.map((product) => {
      return {
        params: {
          productId: product.slug
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

  const { data } = await apolloClient.query<
    GetProductDetailsBySlugQuery,
    GetProductDetailsBySlugQueryVariables
  >({
    variables: { slug: params.productId },
    query: GetProductDetailsBySlugDocument
  });

  if (!data || !data.product) {
    return {
      props: {},
      notFound: true
    };
  }

  const compiledMarkdown = await serialize(data.product.description);

  return {
    props: {
      data: { ...data.product, longDescription: compiledMarkdown }
    }
  };
};

// export interface StoreApiResponse {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   longDescription: string;
//   image: string;
//   rating: {
//     rate: number;
//     count: number;
//   };
//   category: string;
// }

// export interface GetProductsListListResponse {
//   data: Data;
// }

// export interface Data {
//   products: Product[];
// }

// export interface Product {
//   id: string;
//   slug: string;
//   title: string;
//   price: number;
//   description: string;
//   thumbnail: Thumbnail;
// }

// export interface Thumbnail {
//   height: number;
//   width: number;
//   url: string;
// }
