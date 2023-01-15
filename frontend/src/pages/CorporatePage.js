import React from "react";
import { useEffect, useState } from "react";
import CorporateViewMyCourses from "./CorporateViewMyCourses";
import Axios from "axios";
import "../styles/InstructorPageStyle.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
import teacher from "../Media/teacher.png";
import { useLocation } from "react-router-dom";

const CorporatePage = () => {
  const location = useLocation();
  const passedData = location.state.Email;

  var [final, setFinal] = useState("");
  const nav = useNavigate();
  console.log("Hi");
  const forwardViewMyCourses = () => {
    nav("/CorporateViewMyCourses", { state: { passedEmail: passedData } });
  };
  const forward4 = () => {
    nav("/CMCQ");
  };

  const RateInstructor = () => {
    nav("/RateCorp");
  };
  const RateCourse = () => {
    nav("/CorpRatecourse");
  };
  const change = () => {
    nav("/CorporateUpdate");
  };
  const grade = () => {
    nav("/CoporateGradeAndAnswers");
  };
  const viewCourses = () => {
    nav("/AllCourses");
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
      <div className="title">
        {" "}
        <div> Welcome, our beloved </div>
        <div> Corporate Trainee </div>
      </div>
      <img src={teacher} alt="" className="teacher" />

      <p>It's time to learn and shine</p>

      <br />
      <button class="button-17" className="explore-button" onClick={viewCourses}>
        Explore Courses
      </button>
      <br />
      <br />
      <button class="button-17" role="button" onClick={forwardViewMyCourses}>
        My Courses
      </button>
      <br />
      <br />
      <button class="button-17" role="button" onClick={RateInstructor}>
        Rate An Instructor
      </button>
      <br />
      <br />
      <button class="button-17" onClick={forward4}>
        Join the Exam
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
      <div>{location.state.passedEmail}</div>
    </div>
  );
};

export default CorporatePage;
