import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
import "../styles/InstructorPageStyle.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
import teacher from "../Media/teacher.png";

const AdminAddPromoSeveralcourses = () => {
  var [final, setFinal] = useState("");
  const nav = useNavigate();
  console.log("Hi");

  const Add = () => {
    const Title1 = document.getElementById("Title1").value;
    const Title2 = document.getElementById("Title2").value;
    const Title3 = document.getElementById("Title3").value;
    const Title4 = document.getElementById("Title4").value;
    const Title5 = document.getElementById("Title5").value;
    const Promotion = document.getElementById("Promotion").value;
    const Promotion_valid_for = document.getElementById("PromotionV").value;  
    Axios.post("http://localhost:8000/Adminstrator_addpromotion_several", {
        Title1: Title1,
        Title2: Title2,
        Title3: Title3,
        Title4: Title4,
        Title5: Title5,
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
      <div className="title">Welcome, our beloved Instructor</div>
      <img src={teacher} alt="" className="teacher" />
      <br />
      <br />
      <div className="title">Adding promotion to several course</div>
      <br />
      <br />
      <label>Course 1 Title</label>
        <input type="text" name="Title1" id="Title1" /> <br />
        <br />
        <br />
        <label>Course 2 Title</label>
        <input type="text" name="Titl2" id="Title2" /> <br />
        <br />
        <br /> 
        <label>Course 3 Title</label>
        <input type="text" name="Title3" id="Title3" /> <br />
        <br />
        <br />
        <label>Course 4 Title</label>
        <input type="text" name="Title4" id="Title4" /> <br />
        <br />
        <br />
        <label>Course 5 Title</label>
        <input type="text" name="Title5" id="Title5" /> <br />
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

export default AdminAddPromoSeveralcourses;
