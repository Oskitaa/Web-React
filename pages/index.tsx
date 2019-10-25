import '../css/index.scss';
import Working from '../components/Working';

const Index = () => {
  return (
    <div className="page">
      <Working />

      <style jsx>{`
        .page {
          margin-top: 10vh;
          font-family: monospace;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Index;
