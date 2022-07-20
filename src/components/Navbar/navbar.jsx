import React from "react";
import "./styles.css";
import { BsFillGridFill } from "react-icons/bs";
import { BiChevronDownCircle } from "react-icons/bi";
import { ImSearch } from "react-icons/im";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="nav__wrapper" id="navbar">
      <div className="search__container center">
        <BsFillGridFill className="grid-icon" />
        <div className="search__box">
          <ImSearch className="search-icon" />
          <input
            className="search__bar"
            placeholder="Search songs/artists/albums..."
          />
        </div>
      </div>
      <div className="user__container center">
        <div className="profile__container center">
          <div className="profile-pic center">
            <MdAccountCircle className="user-icon" />
          </div>
          <p className="user-name">Moon9</p>
          <BiChevronDownCircle className="down-arrow-icon" />
        </div>
        <div className="actions__container">
          <label>
            <input type="checkbox" className="dark__theme__switch" />
            <span className="check"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
