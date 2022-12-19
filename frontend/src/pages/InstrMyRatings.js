import { useEffect, useState } from "react";
import React from "react";
import Axios from "axios";
//import "../styles/viewStyle.css";
//import "../styles/IndividualViewMyCourses.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
var arr = [];
var arrTitles = [];
var wantedtitle = "";
// var id = "";

const InstrMyRatings = () => {
  const [users, setData] = useState("");
  const nav = useNavigate();

  const ViewMyRatings = () => {
    var email = document.getElementById("email").value;
    Axios.post("http://localhost:8000/instructor_viewRatings", {
      Email: email,
    }).then((response) => {
      console.log(response);
      arr = response.data.CourseDetails;

      setData(response);

      // setData(response.data[1].Title);
    });
  };



  return (
    <div className="IndividualViewCourse">
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
      <label>Your Email</label>
      <input name="email" id="email" type="email" />
      <br />
      <button onClick={ViewMyRatings}> View My Ratings</button>
    
      {arr.map((user) => (
        //id  = user.Title
        <div className="MyRating">
          <>
            <p key={user} className="rating">
              Rating: {user.Rating} ⭐'s
            </p>
          </>
        </div>
      ))}
    </div>
  );
};

export default InstrMyRatings;
