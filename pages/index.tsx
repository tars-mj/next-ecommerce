import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-teal-100">
      <Header />
      <main className="max-w-5xl mx-auto w-full flex-grow p-6 grid gap-6 sm:grid-cols-2">
        <img src="https://picsum.photos/id/1060/536/354" alt="Barista nalewający kawę do Chemexa" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor facilis cupiditate
          molestiae magni eius nesciunt, nemo eligendi nam, doloremque placeat voluptatibus
          quibusdam consequatur possimus optio officia consectetur quos sint? Voluptatum.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
