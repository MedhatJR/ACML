import { useEffect, useState } from "react";
import React from "react";
import Axios from "axios";
//import "../styles/viewStyle.css";
import "../styles/IndividualViewMyCourses.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
import LogIn from "./LogIn";
import "../styles/Star.css";
import { useLocation } from "react-router-dom";

var arr = [];
var arrTitles = [];
var isClickedTitle = "";

// var id = "";

const IndividualViewMyCourses = () => {
  const location = useLocation();
  const passedEmail = location.state.passedEmail;

  var [rating, setRating] = useState(0);
  var [hover, setHover] = useState(0);
  const [users, setData] = useState("");
  const nav = useNavigate();

  const back = () => {
    nav("/");
  };

  const go = () => {
    nav("/IndividualCoursePage", { state: { passedEmail: passedEmail } });
  };

  // nav("/IndividualCoursePage", { state: { passedEmail: passedEmail } });
  Axios.post("http://localhost:8000/Individual_retrieveMyCourse", {
    Email: passedEmail,
  }).then((response) => {
    console.log(response);
    arr = response.data.CourseDetails;
    for (var i = 0; i < arr.length; i++) {
      arrTitles[i] = arr[i].Title;
    }
    setData(response);
  });

  const buttonPressed = (e) => {
    isClickedTitle = e.target.id; // Get ID of Clicked Element
    console.log(isClickedTitle);
  };

  function reply_click(clicked_id) {
    const buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
      button.addEventListener("click", buttonPressed);
    }
    for (var i = 0; i < arrTitles.length; i++) {
      if (arrTitles[i] === isClickedTitle) {
        // console.log(arrTitles[i]);
        nav("/IndividualCoursePage", {
          state: { passedEmail: passedEmail, isClickedTitle: arrTitles[i] },
        });
      }
    }
  }

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

      <br />

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

            <button className="button-17" id={user.Title} onClick={reply_click}>
              Go To Course
            </button>
          </>
        </div>
      ))}

      <div>{location.state.passedEmail}</div>
    </div>
  );
};

export default IndividualViewMyCourses;
