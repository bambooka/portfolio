import React from "react";
import {Link} from "react-router-dom";


export default class Menu extends React.Component {
  render() {
    return (
      <div className='menu-container'>
        <Link className='header-text' to='/about'>About</Link>
        <Link className='header-text' to='/projects'>Projects</Link>
        <Link className='header-text' to='/contact'>Contact</Link>
      </div>
    )
  }
}