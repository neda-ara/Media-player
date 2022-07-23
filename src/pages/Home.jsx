import React from "react";
import Navbar from "../components/Navbar/navbar";
import Sidebar from "../components/Sidebar/sidebar";
import "../styles/pages/home.css";

const Home = ({ userDropdownOpen, setUserDropdownOpen }) => {
  return (
    <>
      <Sidebar />
      <Navbar
        userDropdownOpen={userDropdownOpen}
        setUserDropdownOpen={setUserDropdownOpen}
      />
      <div
        className="home__page__wrapper"
        onClick={() => {
          setUserDropdownOpen(false);
        }}
      >
        <section className="top__artists">
          <p className="section__heading">Top Artists</p>
        </section>
        <section className="songs__container">
          <div className="container__half" id="media-player">
            <p className="section__heading">Now Playing</p>
          </div>
          <div className="container__half" id="songs__list">
            <p className="section__heading">Most Popular</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
