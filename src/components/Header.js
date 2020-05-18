import React from "react";
import { Link } from "react-router-dom";
import "./styles/header.css";

function Header() {
  return (
    <div id="header">
      <Link to="/">
        <img src="/img/logo.png" alt="Gamificator" />
      </Link>
    </div>
  );
}

export default Header;
