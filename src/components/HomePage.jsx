import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import bg from "../components/Images/slide_2.jpg";

const HomePage = () => {
  return (
    <div className="home-page">
      <img src={bg} alt="" />
      <div className="overlay">
        <h1>FOOD RECIPE</h1>
        <p>With EgoTheDev</p>
      </div>
    </div>
  );
};

export default HomePage;
