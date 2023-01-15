import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
import "../styles/InstructorPageStyle.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
import teacher from "../Media/teacher.png";
import { useLocation } from "react-router-dom";

const IndividualPage = () => {
  const location = useLocation();
  const passedData = location.state.Email;
  const [final, setFinal] = useState("");
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
  const grade = () => {
    nav("/IndividualGradeAndAnswers");
  };
  const forward3 = () => {
    nav("/IMCQ");
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
      <div className="title">Welcome, our beloved Trainee</div>
      <img src={teacher} alt="" className="teacher" />

      <p>It's time to learn and shine</p>
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
      <button class="button-17" onClick={forward3}>
        Join the Exam
        </button>
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
      {/* <div>{location.state.Email}</div> */}
    </div>
  );
};

export default IndividualPage;
