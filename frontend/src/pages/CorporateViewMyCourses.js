import { useEffect, useState } from "react";
import React from "react";
import Axios from "axios";
//import "../styles/viewStyle.css";
import "../styles/IndividualViewMyCourses.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
var arr = [];
var arrTitles = [];
var wantedtitle = "";
// var id = "";

const CorporateViewMyCourses = () => {
  var [rating, setRating] = useState(0);
  var [hover, setHover] = useState(0);
  const [users, setData] = useState("");
  const nav = useNavigate();

  const viewCourses = () => {
    var Username = document.getElementById("myName").value;
    Axios.post("http://localhost:8000/Corporate_retrieveMyCourse", {
      Username: Username,
    }).then((response) => {
      console.log(response);
      arr = response.data.CourseDetails;

      setData(response);

      // setData(response.data[1].Title);
    });
  };

  const back = () => {
    nav("/");
  };

  const go = () => {
    nav("/CorporateCoursePage");
  };

  return (
    <div className="IndividualViewCourse">
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
      <label>Username</label>
      <input name="myUsername" id="myName" type="text" />
      <br />
      <button onClick={viewCourses} className="button-17">
        View My Courses
      </button>
      <br />
      <br />
      {arr.map((user) => (
        //id  = user.Title
        <div className="MyCourse">
          <>
            <h1 key={user} className="title">
              {user.Title}
            </h1>
            <p key={user} className="shortsummary">
              {user.Shortsummary}
            </p>
            <p key={user} className="instructor">
              By:{user.Instructor}
            </p>
            <p key={user} className="subject">
              Subject:
              {user.Subject}
            </p>

            <p key={user} className="rating">
              Rating: {user.Rating} ⭐'s
            </p>
            <div className="star-rating">
              {[...Array(5)].map((star, index) => {
                if (index <= 5) {
                  return (
                    <button
                      type="button"
                      key={index}
                      className={index <= (hover || rating) ? "on" : "off"}
                      onClick={() => setRating(index + 1)}
                      onMouseEnter={() => setHover(index)}
                      onMouseLeave={() => setHover(rating)}
                    >
                      <span className="star">&#9733;</span>
                    </button>
                  );
                }
              })}
            </div>

            <button className="button-17" id="btn17" onClick={go}>
              Go To Course
            </button>
          </>
        </div>
      ))}
    </div>
  );
};

export default CorporateViewMyCourses;
