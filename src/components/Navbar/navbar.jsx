import React, { useState } from "react";
import "./styles.css";
import {
  BsFillGridFill,
  BsMusicNoteList,
  BsFillGearFill,
  BsBoxArrowRight,
  BsPersonCircle,
} from "react-icons/bs";
import { BiChevronDownCircle } from "react-icons/bi";
import { ImSearch } from "react-icons/im";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

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
          <BiChevronDownCircle
            className="down-arrow-icon"
            onClick={() => {
              setUserDropdownOpen(!userDropdownOpen);
            }}
            style={{ transform: userDropdownOpen ? "rotate(180deg)" : "" }}
          />
          <div
            className="user-menu__dropdown"
            style={{ display: userDropdownOpen ? "block" : "none" }}
          >
            <div className="dropdown__item">
              <BsPersonCircle className="menu-icons" />
              <p className="menu-item-text">My Profile</p>
            </div>
            <div className="dropdown__item">
              <BsMusicNoteList className="menu-icons" />
              <p className="menu-item-text">Library</p>
            </div>
            <div className="dropdown__item">
              <BsFillGearFill className="menu-icons" />
              <p className="menu-item-text">Settings</p>
            </div>
            <div className="dropdown__item">
              <BsBoxArrowRight className="menu-icons" />
              <p className="menu-item-text logout">Log out</p>
            </div>
          </div>
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
