import { Rating } from 'components/Rating';
import Image from 'next/image';

interface ProductProps {
  data: {
    title: string;
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
      <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
      <p className="text-slate-900 p-4">{data.description}</p>
      <Rating rating={data.rating} />
    </>
  );
};
