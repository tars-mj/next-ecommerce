import { InferGetStaticPropsType } from 'next';
import { ProductListItem } from 'components/Product';
import { Main } from 'components/Main';
import { apolloClient } from '../graphql/apolloClient';
import { GetProductsListDocument, GetProductsListQuery } from '../generated/graphql';

export const getStaticProps = async () => {
  const { data } = await apolloClient.query<GetProductsListQuery>({
    query: GetProductsListDocument
  });

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
        {data.products.map((product) => {
          return (
            <li key={product.slug} className="group text-sm">
              <ProductListItem
                data={{
                  id: product.slug,
                  title: product.name,
                  thumbnailUrl: product.images[0].url,
                  thumbnailAlt: product.images[0].id,
                  price: product.price,
                  category: product.name
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
