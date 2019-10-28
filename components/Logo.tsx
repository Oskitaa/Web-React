import React from 'react';
import LinkButton from './LinkButton';

export const Logo = ({}) => (
  <div className="logo">
    <LinkButton url="https://www.blog.xsaun.com">
      <img src="/static/img/logo.png" alt="" />
    </LinkButton>
    <style jsx>
      {`
        .logo {
          min-width: fit-content;
          margin: auto;
          flex: 1;
          flex-shrink: 0;
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
