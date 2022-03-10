import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Main } from 'components/Main';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <Main>Home page</Main>
      <Footer />
    </div>
  );
};

export default Home;
