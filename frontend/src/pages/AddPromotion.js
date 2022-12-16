import { useEffect, useState } from "react";
import React from "react";
import Axios from "axios";
import "../styles/register.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png"

const AddPromotion = () => {
  //const Instructor = document.getElementById("Iname").value;
  const [users, setData] = useState("");
  const nav = useNavigate();

  const Add = () => {
    Axios.post("http://localhost:8000/Instructor_addpromotion", {
        Title: document.getElementById("CourseTitle").value,
        Promotion: document.getElementById("Promotion").value,
        price: document.getElementById("OriginalPrice").value,
        Promotion_valid_for: document.getElementById("Promotionvalidfor").value,
    }).then((response) => {
      console.log(response);
     
      setData(response);

      // setData(response.data[1].Title);
    });
  };

  const back = () => {
    nav("/InstructorPage");
  };


  return (
    <div className="InstructorViewCourse">
              <nav>
          <img src={logo} className="logo" alt="" />{" "}
          <ul>
            <li>
              <a href="">Home</a>
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
      
      <h1>Add Promotion</h1>
      <label> Enter Course Title</label>
            <input type="text" name="CourseTitle" id="CourseTitle" /> <br />
            <br />
            <br />
            <label> Enter Promotion </label>
            <input type="text" name="Promotion" id="Promotion" /> <br />
            <br />
            <br />
            <label> Promotion valid for </label>
            <input type="text" name="Promotionvalidfor" id="Promotionvalidfor" /> <br />
            <br />
            <br />
            <label> Enter The Original Price</label>
            <input type="text" name="OriginalPrice" id="OriginalPrice" /> <br />
            <br />
            <br />
      
       <button onClick={back} className="btn">
        {" "}
        back
      </button>
      <br/>
      <br/>
      <button onClick={Add} className="btn">Confirm Promotion</button>
      <br />
      
     

        
      
    </div>
  );
};

export default AddPromotion;
