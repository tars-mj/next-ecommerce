import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-teal-100">
      <Header />
      <main className="max-w-5xl mx-auto w-full flex-grow p-6 grid gap-6 sm:grid-cols-2"></main>
      <Footer />
    </div>
  );
};

export default AboutPage;
