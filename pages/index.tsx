import '../css/index.scss';
import Menu from '../components/Menu';

const Index = () => {
  return (
    <div className="page">
      <Menu />
      <style jsx>{`
        .page {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Index;
