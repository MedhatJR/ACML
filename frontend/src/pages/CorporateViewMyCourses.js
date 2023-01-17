import { useEffect, useState } from "react";
import React from "react";
import Axios from "axios";
//import "../styles/viewStyle.css";
import "../styles/IndividualViewMyCourses.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
import "../styles/Star.css";
import { useLocation } from "react-router-dom";


var arr = [];
var arrTitles = [];
var arrTitlesRate = [];
var arrReportedTitles = [];
var isClickedTitle = "";
var passedCategory="";
var isClickedTitleRate = "";
var isClickedReportTitle = "";

const CorporateViewMyCourses = () => {
  const location = useLocation();
  const passedEmail = location.state.passedEmail;
  //var category="CorporateTrainee";
  var [rating, setRating] = useState(0);
  var [hover, setHover] = useState(0);
  const [users, setData] = useState("");
  var [final, setFinal] = useState("");
  const nav = useNavigate();

  Axios.post("http://localhost:8000/Corporate_retrieveMyCourse", {
    Email: passedEmail,
  }).then((response) => {
    console.log(response);
    arr = response.data.CourseDetails;
    for (var i = 0; i < arr.length; i++) {
      arrTitles[i] = arr[i].Title;
      arrTitlesRate[i] = arr[i].Rating;
      arrReportedTitles[i] = arr[i].Title;
    }
    setData(response);

    // setData(response.data[1].Title);
  });

  const buttonPressed = (e) => {
    isClickedTitle = e.target.id; // Get ID of Clicked Element
    console.log(isClickedTitle);
  };
  const buttonPressedRate = (e) => {
    isClickedTitleRate = e.target.name; // Get Name of Clicked Element ???????
    console.log(isClickedTitleRate);
  };

  const buttonPressedReport = (e) => {
    isClickedReportTitle = e.target.name; // Get ID of Clicked Element
    console.log(isClickedReportTitle);
  };

  const Rate = () => {
    console.log("Hi");
    Axios.post("http://localhost:8000/Corporate_rateCourse", {
      Title: isClickedTitleRate,
      Rating: rating,
    }).then(
      (response) => {
        setFinal = response.data;
      }
    );
  };

  function rating(clicked_id) {
    const buttons = document.getElementsByTagName("button");
    for (let buttonRate of buttons) {
      buttonRate.addEventListener("click", buttonPressedRate);
    }

    for (var i = 0; i < arrTitlesRate.length; i++) {
      if (arrTitlesRate[i] === isClickedTitle) {
        isClickedTitleRate = arrTitlesRate[i];

      }
    }

  }

  function reply_click(clicked_id) {
    const buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
      button.addEventListener("click", buttonPressed);
    }

    for (var i = 0; i < arrTitles.length; i++) {
      if ((arrTitles[i]+"k") === isClickedTitle) {
        // console.log(arrTitles[i]);
        nav("/CorporateCoursePage", {
          state: { passedEmail: passedEmail, isClickedTitle: arrTitles[i] },
        });
      }
    }
  }

  function reply_click1(clicked_id) {
    const buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
      button.addEventListener("click", buttonPressedReport);
    }

    for (var i = 0; i < arrReportedTitles.length; i++) {
      if (arrReportedTitles[i] === isClickedReportTitle) {
        // console.log(arrTitles[i]);
        nav("/ReportAProblem",{state: { passedEmail: passedEmail, passedCategory : "CorporateTrainee", isClickedReportTitle: arrReportedTitles[i]},
      });
      }
    }
  }

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
                      name={user.Title} 
                      className={index <= (hover || rating) ? "on" : "off"}
                      onClick={() => { setRating(index + 1); Rate(); rating(); }}
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
            <br/>
            <br/>
            <button className="button-17" name={user.Title}  onClick={reply_click1}>
              Report a Problem
            </button>
          </>
        </div>
      ))}
    </div>
  );
};

export default CorporateViewMyCourses;
