import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
import "../styles/InstructorPageStyle.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
import teacher from "../Media/teacher.png";
import { useLocation } from 'react-router-dom';
const CorporatePage = () => {
  const location = useLocation();
  const passedData = location.state.Email;
  var [final, setFinal] = useState("");
  const nav = useNavigate();
  console.log("Hi");
  const forwardViewMyCourses = () => {
    nav("/CorporateViewMyCourses", {state:{passedEmail:passedData}});
  };
  const forward4 = () => {
    nav("/CMCQ");
  };

  const ForwardViewMyCourses = () => {
    nav("/CorporateViewMyCourses");
  };
  const RateInstructor = () => {
    nav("/RateCorp");
  };
  const RateCourse = () => {
    nav("/CorpRatecourse");
  }
  const change = () => {
    nav("/CorporateUpdate");
  };
  const grade = () => {
    nav("/CoporateGradeAndAnswers");
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
      <button class="button-17" role="button" onClick={ForwardViewMyCourses}>
        My Courses
      </button>
      <br/>
      <br />
      <button class="button-17" role="button" onClick={forwardViewMyCourses}>
        My Courses
      </button>
      <br />
      <br />
      <button class="button-17" role="button" onClick={RateInstructor}>
        Rate An Instructor
      </button>
      <br/>
      <br/>
      <button onClick={forward4}>Join the Exam</button> 
      <br/>
      <br/>
      <button class="button-17" role="button" onClick={RateCourse}>
        Rate A Course
        </button>
        <br/>
      <br/>
      <button class="button-17" role="button" onClick={grade}>
        Your grades and check your anwsers
      </button>
      <br/>
      <br/>
      <button class="button-17" role="button" onClick={change}>
        Change Password
      </button>
      <div>{location.state.Email}</div>
    </div>
  );
};

export default CorporatePage;
