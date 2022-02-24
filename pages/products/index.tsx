import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

const Products = () => {
  return (
    <div className="flex flex-col min-h-screen bg-teal-100">
      <Header />
      <main className="max-w-5xl mx-auto w-full flex-grow p-6 grid gap-6 sm:grid-cols-2">
        <Sidebar />
        <p className="text-slate-900">Produkty</p>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
