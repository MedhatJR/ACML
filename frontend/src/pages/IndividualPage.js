import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
import "../styles/InstructorPageStyle.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
import teacher from "../Media/teacher.png";
import video from "../Media/tv.png";
import eye from "../Media/views.png";
import { useLocation } from "react-router-dom";
var category="IndividualTrainee";

var array = [];
const IndividualPage = () => {
  const location = useLocation();
  const passedData = location.state.Email;
  const [data, setData] = useState("");
  // const [final, setFinal] = useState("");
  const nav = useNavigate();
  console.log("Hi");

  const forwardAdd = () => {
    nav("/AddCourse");
  };
  const RateCourse = () => {
    nav("/IndiRatecourse");
  };
  const Rate = () => {
    nav("/Rateindividual");
  };
  const forwardViewMyCourses = () => {
    nav("/IndividualViewMyCourses", { state: { passedEmail: passedData } });
  };
  const change = () => {
    nav("/IndividualUpdate");
  };
  const reports = () => {
    nav("/PrevProblems", {state:{Category: category, passedEmail: passedData }});
  };
  const grade = () => {
    nav("/IndividualGradeAndAnswers");
  };
  const forward3 = () => {
    nav("/IMCQ");
  };
  const certificate = () => {
    nav("/Certificates");
  };
  const viewCourses = () => {
    nav("/AllCourses");
  };

  Axios.post("http://localhost:8000/Individual_viewPopularCourses", {}).then(
    (response) => {
      console.log(response);
      array = response.data;

      // console.log(arrayTitles.length);

      setData(response);

      // setData(response.data[1].Title);
    }
  );

  return (
    <div className="add">
      <>
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
      </>
      <br />
      <br />
      <div className="welcome">Welcome, our beloved Trainee</div>
      <img src={teacher} alt="" className="teacher" />

      <p className="moto">It's time to learn and shine</p>
      <br />
      <br />
      <h2 className="ourTopPicks">Our Top Picks for you</h2>
      {array.map((user) => (
        <div className="MyCourse">
          <>
            <h1 key={user} className="title">
              {user.Title}
            </h1>
            <iframe
              className="videoPreview"
              width="560"
              height="315"
              src={user.PreviewLink}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <p key={user} className="subject">
              {user.Subject}
            </p>

            <p key={user} className="shortsummary">
              {user.Shortsummary}.
            </p>
            <p key={user} className="rating">
              {user.Rating} ⭐'s
            </p>
            <p key={user} className="instructor">
              By: {user.Instructor}
            </p>

            <p key={user} className="hours">
              <img src={video} alt="" className="tv" />
              {user.Hours} hours on-demand video
            </p>
            <p key={user} className="views">
              <img src={eye} alt="" className="eye" />
              {user.Views} Views
            </p>
          </>
        </div>
      ))}
      <br />
      <br />

      <button className="explore-button" onClick={viewCourses}>
        Explore Courses
      </button>
      <br />
      <br />
      <button class="button-17" role="button" onClick={forwardViewMyCourses}>
        My Courses
      </button>
      <br />
      <br />
      <button class="button-17" role="button" onClick={reports}>
        ALL Reports
      </button>
      <br />
      <br />
      <button onClick={forward3}>Join the Exam</button>
      <br />
      <br />
      <button class="button-17" role="button" onClick={Rate}>
        Rate An Instructor
      </button>
      <br />
      <br />
      <button class="button-17" role="button" onClick={RateCourse}>
        Rate A Course
      </button>
      <br />
      <br />
      <button class="button-17" role="button" onClick={grade}>
        Your grades and check your anwsers
      </button>
      <br />
      <br />
      <button class="button-17" role="button" onClick={change}>
        Change Password
      </button>
      <br />
      <br />
      <button onClick={forward3}>View Exam</button>
      {/* <div>{location.state.Email}</div> */}
      <button class="button-17" role="button" onClick={certificate}>
        Certificates
      </button>
    </div>
  );
};

export default IndividualPage;
