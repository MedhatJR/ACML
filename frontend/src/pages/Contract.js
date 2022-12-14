import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
//import "../styles/register.css";
import "../styles/main.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";

const Contract = () => {
    const nav = useNavigate();
    const Home = () => {
      nav("/");
    };
    const login = () => {
        nav("/LogIn");
      };

    return(<>
        <div className="add">
          <>
            <nav>
              <img src={logo} className="logo" alt="" />{" "}
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
        <div>
            <h1>Contract</h1>
            <div>
                <p> I,as an instructor, agree on all the rights to the posted Videos
                    and materials as well as the percentage % taken by the company on each video per registered trainee.
                </p>
            </div>
            <div>
            <button onClick={login}> Agree</button>
            <button onClick={Home}> Discard</button>
            </div>
        </div>
        </>
    );
};
export default Contract;