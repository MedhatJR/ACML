import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
import "../styles/InstructorPageStyle.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
import teacher from "../Media/teacher.png";

const AdminAddPromoAllcourses = () => {
  var [final, setFinal] = useState("");
  const nav = useNavigate();
  console.log("Hi");

  const Add = () => {
    const Promotion = document.getElementById("Promotion").value;
    const Promotion_valid_for = document.getElementById("PromotionV").value;  
    Axios.post("http://localhost:8000/Adminstrator_addpromotionall", {
        Promotion: Promotion,
        Promotion_valid_for: Promotion_valid_for,
      }).then((response) => {
        setFinal=response.data;
        
      });
      nav("/AdminstratorPage");

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
      <br />
      <div className="title">Adding promotion to all course</div>
      <br />
      <br />
      <label>Promotion</label>
        <input type="text" name="Promotion" id="Promotion" /> <br />
        <br />
        <br />
        <label>Promotion Valid For</label>
        <input type="text" name="PromotionValidFor" id="PromotionV" /> <br />
        <br />
        <br />
      <button class="button-17" role="button" onClick={Add}>
        Add Promotion
      </button>
      <br />
      <br />
    </div>
  );
};

export default AdminAddPromoAllcourses;
