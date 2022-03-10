import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Main } from 'components/Main';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main>About page</Main>
      <Footer />
    </div>
  );
};

export default AboutPage;
