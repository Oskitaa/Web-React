import React from 'react';

export const Logo = ({}) => (
  <div className="logo">
    <a href="home">
      <img src="/static/img/logo.png" alt="" />
    </a>
    <style jsx>
      {`
        .logo {
          min-width: fit-content;
          margin: auto;
          flex: 1;
          flex-shrink: 0;
          font-size: 18pt;
          z-index: 3;
        }

        img {
          width: 80px;
        }
      `}
    </style>
  </div>
);

export default Logo;
