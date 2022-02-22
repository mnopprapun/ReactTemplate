import React from "react";
import "/Users/mathawudnopprapun/Development/react/template/src/Components/Navbar.css";

const NavBar= () => {
  return (
    <div class="nav">
      {/* <div class="banner">
        <img src="#" alt="banner" />
      </div> */}
      <div class="nav-bar">
        <h1 class="logo"> Company Title</h1>
        <ul class="nav-links">
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 3</a>
          </li>
          <li>
            <a href="#">Link 4</a>
          </li>
        </ul>
        <div class="searchbar">
          <input placeholder="Search Here"></input>
          <button class="search-btn">Search</button>
        </div>
        <button class="signin-up">Login/Signup</button>
      </div>
    </div>
  );
}

export default NavBar;