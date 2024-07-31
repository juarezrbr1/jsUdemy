import React from "react";
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function Header() {
  const botaoClicado = useSelector(state => state.botaoClicado);

  return (
  <Nav>
    <Link to="/">
      <FaHome size={24} />
    </Link>
    <Link to="/login">
      <FaSignInAlt size={24} />
    </Link>
    <Link to="/asd">
      <FaUserAlt size={24} />
    </Link>
    {botaoClicado ? <h1>Botão foi clicado</h1> : <h1>Não clicado</h1>}
  </Nav>
  )
}
