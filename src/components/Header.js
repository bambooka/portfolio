import React from "react";
import Menu from "./Menu";
import {Link} from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <header className='App-header'>
        <Link className='header-text' path='exact' to='/'>bambooka</Link>
        <Menu />
      </header>
    )
  }
}