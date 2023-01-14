import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; 

import Axios from "axios";
import "../styles/InstructorPageStyle.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
import teacher from "../Media/teacher.png";

const IndividualPage = () => {
  const [final, setFinal] = useState("");
  const nav = useNavigate();
  console.log("Hi");

  //   const viewMyCourses = () => {
  //     console.log("Hi");
  //     Axios.get("http://localhost:8000/Individual_retrieveMyCourse").then(
  //       (response) => {
  //         this.setFinal(response.data);
  //       }
  //     );
  //   };
  //   const viewMyRating = () => {
  //     console.log("Hi");
  //     Axios.post("http://localhost:8000/instructor_viewRatings").then(
  //       (response) => {
  //         this.setFinal(response.data);
  //       }
  //     );
  //   };

  // final=useLocation();
  // const {email, password}=final;

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
    nav("/IndividualViewMyCourses");
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
      {/* <button class="button-17" role="button" onClick={viewCourseRating}>
        View Course Ratings
      </button>
      <br />
      <br />
      <button class="button-17" role="button" onClick={viewMyRating}>
        View My Ratings
      </button>
      <br />
      <br />
      <button class="button-17" role="button" onClick={forwardAdd}>
        Add Course
      </button>
      <br />
      <br /> */}
      <button class="button-17" role="button" onClick={forwardViewMyCourses}>
        My Courses
      </button>
      <br/>
      <br/>
      <button onClick={forward3}>Join the Exam</button>
      <br/>
      <br/>
      <button class="button-17" role="button" onClick={Rate}>
        Rate An Instructor
      </button>
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
    </div>
  );
};

export default IndividualPage;
