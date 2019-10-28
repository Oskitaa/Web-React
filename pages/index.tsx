import '../css/index.scss';
import Menu from '../components/Menu';
import Home from '../components/Home';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="page">
      <Menu />
      <Home />

      <Contact />
      <Footer />
      <style jsx>{`
        .page {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Index;
