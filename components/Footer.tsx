import React from 'react';

export const Footer = ({}) => (
  <footer>
    <div className="separator"></div>
    <p>
      Página en fase de desarrollo, puede ver todo el código
      <a href="https://github.com/Oskitaa/Web" target="blank">
        {' '}
        aquí.
      </a>
    </p>

    <style jsx>{`
      footer {
        width: 100%;
        height: 80px;
        position: absolute;

        bottom: 0;
      }

      footer .separator {
        width: 720px;
        margin-left: auto;
        margin-right: auto;
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px solid #ccc;
        padding: 0;
      }

      footer p {
        margin-top: 14px;
        color: rgb(112, 112, 112);
        font-size: 14px;
      }

      footer a {
        color: rgb(112, 112, 112);
        font-size: 14px;
        text-decoration: none;
      }

      footer a:hover {
        color: black;
      }

      @media only screen and (max-width: 800px) {
        footer .separator {
          margin: 1em 38px;
          width: auto;
        }
      }
    `}</style>
  </footer>
);

export default Footer;
