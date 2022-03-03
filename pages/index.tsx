import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Main } from 'components/Main';
import { ProductDetails } from 'components/Product';

const DATA = {
  title: 'Barista nalewający kawę do Chemexa',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor facilis cupiditate
	molestiae magni eius nesciunt, nemo eligendi nam, doloremque placeat voluptatibus
	quibusdam consequatur possimus optio officia consectetur quos sint? Voluptatum.`,
  thumbnailUrl: 'https://picsum.photos/id/1060/536/354',
  thumbnailAlt: 'Barista nalewający kawę do Chemexa',
  rating: 5.5
};

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <Main>
        <ProductDetails data={DATA} />
      </Main>
      <Footer />
    </div>
  );
};

export default Home;
