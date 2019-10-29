import React from 'react';

export const Home = ({}) => (
  <section className="home" id="home">
    <div className="welcome">
      <h1>xSauN</h1>
    </div>
    <style jsx>{`
      .welcome {
        width: 100%;
        top: 50%;
        position: absolute;
      }
    `}</style>
  </section>
);

export default Home;
