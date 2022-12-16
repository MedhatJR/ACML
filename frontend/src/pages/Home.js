import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
//import "../styles/register.css";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";

const Home = () => {
  const nav = useNavigate();
  const Register = () => {
    nav("/Register");
  };
  const LogIn = () => {
    nav("/LogIn");
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
