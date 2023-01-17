import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
import "../styles/InstructorPageStyle.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
import teacher from "../Media/teacher.png";

const AdminstratorPage = () => {
  var [final, setFinal] = useState("");
  const nav = useNavigate();
  console.log("Hi");

  const specificcourse = () => {
    nav("/AdminAddPromoSpecificcourse");
  };
  const severalcourses = () => {
    nav("/AdminAddPromoSeveralcourses");
  };
  const allcourses = () => {
    nav("/AdminAddPromoAllcourses");
  };
  const refund = () => {
    nav("/AdminRefund");
  };
  const viewproblem = () => {
    nav("/AdminViewProblems");
  };
//   const Add = () => {
//     nav("/AddPromotion");
//   };
//   const Change = () => {
//     nav("/UpdatePassword");
//   };
//   const Biography = () => {
//     nav("/UpdateBiography");
//   };
//   const email = () => {
//     nav("/UpdateEmail");
//   };
//   const forward2 = () => {
//     nav("/Addexam");
//   };
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
      <div className="title">Welcome, our beloved Admin</div>
      <img src={teacher} alt="" className="teacher" />
      <br />
      <br />
      <div className="title">What would you like to do today ?</div>
      <br />
      <br />
      <button class="button-17" role="button" onClick={specificcourse}>
        Add Promotion for a specific course
      </button>
      <br />
      <br />
      <button class="button-17" role="button" onClick={severalcourses}>
      Add Promotion for  several courses
      </button>
      <br />
      <br />
      <button class="button-17" role="button" onClick={allcourses}>
      Add Promotion for all courses      </button>
      <br />
      <br />
      <button class="button-17" role="button" onClick={refund}>
        Refund Money
      </button>
      <br />
      <br />
      <button class="button-17" role="button" onClick={viewproblem}>
       View Reported Problems
      </button>
      <br />
      <br />
      {/* <button class="button-17" role="button" onClick={ Refund}>
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
      <button onClick={forward2}>Add Your Exam</button>
      <br />
      <br />
      <button class="button-17" role="button" onClick={email}>
        Change Email
      </button> */}
    </div>
  );
};

export default AdminstratorPage;
