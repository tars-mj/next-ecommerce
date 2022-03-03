import { Rating } from 'components/Rating';
import Image from 'next/image';

interface ProductDetails {
  title: string;
  description: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
}

type ProductListItem = Pick<ProductDetails, 'title' | 'thumbnailAlt' | 'thumbnailUrl'>;

interface ProductListItemProps {
  data: ProductListItem;
}

interface ProductDetailsProps {
  data: ProductDetails;
}

export const ProductListItem = ({ data }: ProductListItemProps) => {
  return (
    <>
      <Image src={data.thumbnailUrl} alt={data.thumbnailAlt} width="500" height="354" />
      <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
    </>
  );
};

export const ProductDetails = ({ data }: ProductDetailsProps) => {
  return (
    <>
      <Image src={data.thumbnailUrl} alt={data.thumbnailAlt} width="500" height="354" />
      <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
      <p className="text-slate-900 p-4">{data.description}</p>
      <Rating rating={data.rating} />
    </>
  );
};
