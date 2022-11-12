import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

import logo from '../../assets/VEGA_6.png';
import whatsapp from '../../assets/whatsapp.png';

function Header() {
  return (
    <S.Container>
      <S.LeftSide>
        <a href="/">
        <img src={logo} alt="VegaRobotics" id="logo"/>
        </a>
      </S.LeftSide>
      <S.Center>
        <Link to="/">Máquinas</Link>
        <Link to="/">Componentes</Link>
        <Link to="/">Serviços</Link>
        <Link to="/">Suportes</Link>
        <Link to="/">Contato</Link>
        <a href="https://rwelectrodes.com/" target="_blank" rel="noreferrer" >
          <span>Shop</span>
        </a>
        <Link to="/vixem">BETA</Link>
      </S.Center>
      <S.RightSide>
        <a href="https://wa.me/+551151998949" target="_blank" rel="noreferrer" >
           <img src={whatsapp} alt="whatapp" />
        </a>
      </S.RightSide>
    </S.Container>
  );
}

export default Header;