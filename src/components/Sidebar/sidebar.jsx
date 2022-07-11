import React from "react";
import Logo from "../../assets/images/musical-wings.png";
import { ImHome } from "react-icons/im";
import { FaCompass, FaMicrophoneAlt, FaHeart } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BsFileEarmarkMusicFill } from "react-icons/bs";
import "./styles.css";

const Sidebar = () => {
  return (
    <div className="sidebar__wrapper" id="sidebar">
      <div className="logo__wrapper center">
        <img src={Logo} className="logo" alt="" />
      </div>
      <div className="list__wrapper">
        <ul className="list__ul">
          <li>
            <ImHome className="list__icon" />
            <span className="list__title">Home</span>
          </li>
          <li>
            <FaCompass className="list__icon" />
            <span className="list__title">Browse</span>
          </li>
          <li>
            <BsFileEarmarkMusicFill className="list__icon" />
            <span className="list__title">Albums</span>
          </li>
          <li>
            <FaMicrophoneAlt className="list__icon" />
            <span className="list__title">Artists</span>
          </li>
        </ul>

        <hr />

        <ul className="list__ul">
          <p className="sub__head">My Music</p>
          <li>
            <AiOutlineFieldTime className="list__icon" />
            <span className="list__title">Recently Played</span>
          </li>
          <li>
            <FaHeart className="list__icon" />
            <span className="list__title">Favorites</span>
          </li>
        </ul>

        <hr />

        <ul className="list__ul">
          <p className="sub__head">My Playlists</p>
          <li>
            <ImHome className="list__icon" />
            <span className="list__title">Rock</span>
          </li>
          <li>
            <FaCompass className="list__icon" />
            <span className="list__title">Anime</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
