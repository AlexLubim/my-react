import React from 'react';
import { Link } from "react-router-dom"
import logo from './logo.svg'

const Header = () => {
  return(
    <div className="header">
      <Link className="header__logo" to="/search">
        <img src={logo} className="logo__img"></img>
        <div className="logo__text">GitHub<span className="logo__text-thin">search</span></div>
      </Link>
      <div className="header__links">
        <Link className="links__item" to="/search"><span  className="links__item links__item-active">Search</span></Link>
        <Link className="links__item" to="/mylist"><span  className="links__item">My List</span></Link>
      </div>
    </div>
  )
}

export default Header;