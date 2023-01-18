import { useEffect, useState } from "react";
import React from "react";
import Axios from "axios";
//import "../styles/viewStyle.css";
import "../styles/IndividualViewMyCourses.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
import { useLocation } from "react-router-dom";
var arr = [];
var arrTitles = [];
var wantedtitle = "";
// var id = "";

const InstrCourseRatings = () => {
  const [users, setData] = useState("");
  const nav = useNavigate();
  const location = useLocation();
  const passedEmail = location.state.passedEmail;

  const ViewCourseRatings = () => {
    Axios.post("http://localhost:8000/instructor_viewCourseRatings", {
      Email: passedEmail,
    }).then((response) => {
      console.log(response);
      arr = response.data;

      setData(response);

      // setData(response.data[1].Title);
    });
  };

  const back = () => {
    nav("/");
  };

//   const go = () => {
//     nav("/IndividualCoursePage");
//   };

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
      <button onClick={ViewCourseRatings} className="button-17">
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
            

            <p key={user} className="rating">
              Rating: {user.Rating} ⭐'s
            </p>

          </>
        </div>
      ))}
    </div>
  );
};

export default InstrCourseRatings;
