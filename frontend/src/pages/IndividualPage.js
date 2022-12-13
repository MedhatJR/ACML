import React from "react";
import { useEffect, useState } from "react";

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
  const forwardAdd = () => {
    nav("/AddCourse");
  };
  const forwardViewMyCourses = () => {
    nav("/IndividualViewMyCourses");
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
    </div>
  );
};

export default IndividualPage;
