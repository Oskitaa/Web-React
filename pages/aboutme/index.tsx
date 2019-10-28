import React from 'react';
import LinkButton from '../../components/LinkButton';
import Menu from '../../components/Menu';

const aboutme: React.FC<{}> = () => {
  return (
    <div className="page">
      <Menu />
      <LinkButton url="https://www.blog.xsaun.com/">Inicio</LinkButton>

      <style jsx>{`
        .page {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default aboutme;
