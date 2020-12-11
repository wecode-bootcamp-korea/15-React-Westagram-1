import React, { Component } from "react";
import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <div className="navbar-logo">
          <p>Westagram</p>
        </div>
        <form className="navbar-search">
          <input type="text" placeholder="검색" />
          <i className="fas fa-search"></i>
        </form>
        <div className="navbar-icons">
          <button>
            <img src="../images/junhuihan/explore.png" alt="explore" />
          </button>
          <button>
            <img src="../images/junhuihan/heart.png" alt="heart" />
          </button>
          <button>
            <img src="../images/junhuihan/profile.png" alt="profile" />
          </button>
        </div>
      </nav>
    );
  }
}

export default Nav;
