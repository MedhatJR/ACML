import { useEffect, useState } from "react";
import React from "react";
import Axios from "axios";
//import "../styles/viewStyle.css";
import logo from "../Media/Logo.png";
import "../styles/IndividualCoursePage.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();
  const LogIn = () => {
         nav("/LogIn");
      };
    const Register = () => {
           nav("/Register");
        };

  return (
    <div className="add">
    <>
      <nav>
        <img src={logo} className="logo" alt="" />{" "}
        <button type="submit" class="button-17" onClick={LogIn}>Login</button>
            <button type="submit" class="button-17" onClick={Register} >Sign Up</button>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </>
    <br />
    <br />
  </div>


  );
};

export default Home;
