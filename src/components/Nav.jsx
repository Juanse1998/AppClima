import React from 'react';
import Logo from '../descarga.jpg'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div>
      <nav className="navbar">
        <img src={Logo} width={50}>
        </img>
        <a class="navbar-brand" href="#" color="white"> Clima </a>
        <a class="navbar-brand" href="#"> About </a>
        <div class='search'>
          <SearchBar  onSearch={onSearch}/>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
