import { Header } from '../../../components/Header';
import { useRouter } from 'next/router';
import { Footer } from '../../../components/Footer';
import { Sidebar } from '../../../components/Sidebar';

const Product = () => {
  const { asPath } = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-teal-100">
      <Header />
      <main className="max-w-5xl mx-auto w-full flex-grow p-6 grid gap-6 sm:grid-cols-2">
        <Sidebar />
        <p className="text-slate-900">Produkt: {asPath.split('/')[2]}</p>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
