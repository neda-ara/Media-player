import React from "react";
import Navbar from "../components/Navbar/navbar";
import Sidebar from "../components/Sidebar/sidebar";
import "../styles/pages/home.css";

const Home = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="home__page__wrapper"></div>
    </>
  );
};

export default Home;
