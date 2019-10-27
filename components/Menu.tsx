import React from 'react';
import Logo from './Logo';

export const Menu = ({}) => (
  <div className="">
    <div className="menu">
      <Logo />
      <div className=" textmenu">
        <a href="#home">Inicio</a>
      </div>
      <div className="textmenu">
        <a href="#aboutme">Sobre mi</a>
      </div>
      <div className="textmenu">
        <a href="#contact">Contacto</a>
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

      .menu a {
        text-decoration: none;
        color: white;
        font-size: 15px;
      }
    `}</style>
  </div>
);

export default Menu;
