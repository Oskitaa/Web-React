import React from 'react';
import Logo from './Logo';
import LinkButton from './LinkButton';

export const Menu = ({}) => (
  <div>
    <div className="menu">
      <Logo />
      <div className=" textmenu">
        <LinkButton url="https://www.blog.xsaun.com">Inicio</LinkButton>
      </div>
      <div className="textmenu">
        <LinkButton url="/aboutme">Sobre mi</LinkButton>
      </div>
      <div className="textmenu">
        <LinkButton url="#contact">Contacto</LinkButton>
      </div>
    </div>

    <style jsx>{`
      .textmenu {
        margin: auto 0 auto auto;
        flex: 2;
      }

      .menu {
        z-index: 1;
        background-color: #212529;
        height: 80px;
        position: fixed;
        width: 100%;
        display: flex;
        box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.27);
      }
    `}</style>
  </div>
);

export default Menu;
