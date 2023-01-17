import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
import "../styles/InstructorPageStyle.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
import teacher from "../Media/teacher.png";
import { useLocation } from "react-router-dom";

const InstructorPage = () => {
  const location = useLocation();
  const passedData = location.state.Email;
  var [final, setFinal] = useState("");
  const nav = useNavigate();
  
  console.log("Hi");

  //   const viewCourseRating = () => {
  //     console.log("Hi");
  //     Axios.post("http://localhost:8000/instructor_viewCourseRatings").then(
  //       (response) => {
  //         setFinal=response.data;
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
  const viewMyRating = () => {
    nav("/InstrMyRatings");
  };
  const viewCourseRating = () => {
    nav("/InstrCourseRatings");
  };
  const forwardView = () => {
    nav("/InstructorViewCourse",  { state: { passedEmail: passedData } });
  };
  const Add = () => {
    nav("/AddPromotion");
  };
  const Change = () => {
    nav("/UpdatePassword");
  };
  const Biography = () => {
    nav("/UpdateBiography");
  };
  const email = () => {
    nav("/UpdateEmail");
  };

  const forward2 = () => {
    nav("/Addexam");
  };
  const viewCourses = () => {
    nav("/AllCourses");
  };
  const MyCourses = () => {
    nav("/InstMyCourses", { state: { passedEmail: passedData } });
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
      <br />
      <div className="title">Welcome, our beloved Instructor</div>
      <img src={teacher} alt="" className="teacher" />

      <p>What would you like to do today ?</p>
      <button class="button-17" className="explore-button" onClick={viewCourses}>
        Explore Courses
      </button>
      <br />
      <button class="button-17" role="button" onClick={MyCourses}>
        My Courses
      </button>
      <br />
      <button class="button-17" role="button" onClick={viewCourseRating}>
        View Course Ratings
      </button>
      <br />
      
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
      <br />
      <button class="button-17" role="button" onClick={forwardView}>
        View Course
      </button>
      <br />
      <br />
      <button class="button-17" role="button" onClick={Add}>
        Add Promotion
      </button>
      <br />
      <br />
      <button class="button-17" role="button" onClick={Change}>
        Change Password
      </button>
      <br />
      <br />
      <button class="button-17" role="button" onClick={Biography}>
        Change Biography
      </button>
      <br />
      <br />
      <button class="button-17" onClick={forward2}>
        Add Your Exam
        </button>
      <br />
      <br />
      <button class="button-17" role="button" onClick={email}>
        Change Email
      </button>
      <br />
      <br />
      
      
    </div>
  );
};

export default InstructorPage;
