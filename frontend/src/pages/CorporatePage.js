import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
import "../styles/InstructorPageStyle.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
import teacher from "../Media/teacher.png";
const CorporatePage = () => {
  var [final, setFinal] = useState("");
  const nav = useNavigate();
  console.log("Hi");

  const forwardAdd = () => {
    nav("/RateCorp");
  };
  return (
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
      <button class="button-17" role="button" onClick={forwardAdd}>
        Rate An Instructor
      </button>
    </div>
  );
};

export default CorporatePage;