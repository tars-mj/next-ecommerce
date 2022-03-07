import { Rating } from 'components/Rating';
import Image from 'next/image';
import Link from 'next/link';

interface ProductDetails {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
}

type ProductListItem = Pick<ProductDetails, 'id' | 'title' | 'thumbnailAlt' | 'thumbnailUrl'>;

interface ProductListItemProps {
  data: ProductListItem;
}

interface ProductDetailsProps {
  data: ProductDetails;
}

export const ProductListItem = ({ data }: ProductListItemProps) => {
  return (
    <>
      <div className="bg-white p-4">
        <Image
          src={data.thumbnailUrl}
          alt={data.thumbnailAlt}
          width="16"
          height="9"
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <Link href={`/products/${data.id}`}>
        <a>
          <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
        </a>
      </Link>
    </>
  );
};

export const ProductDetails = ({ data }: ProductDetailsProps) => {
  return (
    <>
      <Image
        src={data.thumbnailUrl}
        alt={data.thumbnailAlt}
        width="16"
        height="9"
        layout="responsive"
        objectFit="contain"
      />
      <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
      <p className="text-slate-900 p-4">{data.description}</p>
      <Rating rating={data.rating} />
    </>
  );
};
