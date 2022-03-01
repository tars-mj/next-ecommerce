import { Rating } from 'components/Rating';
import Image from 'next/image';

interface ProductProps {
  data: {
    description: string;
    thumbnailUrl: string;
    thumbnailAlt: string;
    rating: number;
  };
}

export const Product = ({ data }: ProductProps) => {
  return (
    <>
      <Image src={data.thumbnailUrl} alt={data.thumbnailAlt} width="500" height="354" />
      <p className="text-slate-900">{data.description}</p>
      <Rating rating={data.rating} />
    </>
  );
};
