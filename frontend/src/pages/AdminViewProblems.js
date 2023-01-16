import { useEffect, useState } from "react";
import React from "react";
import Axios from "axios";
//import "../styles/viewStyle.css";
import "../styles/IndividualViewMyCourses.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
import LogIn from "./LogIn";
import "../styles/Star.css";
import { useLocation } from "react-router-dom";

var arr = [];
var isClickedTitle = "";

// var id = "";

const AdminViewProblems = () => {
  //const passedEmail = location.state.passedEmail;
  const [users, setData] = useState("");
  const nav = useNavigate();
  console.log("dshsfxh");
  const back = () => {
    nav("/AdminstratorPage");
  };




  // nav("/IndividualCoursePage", { state: { passedEmail: passedEmail } });
  Axios.get("http://localhost:8000/view_problems", {
  }).then((response) => {
    console.log(response);
    arr = response.data;
    setData(response);
    console.log(arr);
  });

  const buttonPressed = (e) => {
    isClickedTitle = e.target.id; // Get ID of Clicked Element
    console.log(isClickedTitle);
  };

  function reply_click(clicked_id) {
    const buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
      button.addEventListener("click", buttonPressed);
    }
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]._id === isClickedTitle) {
        // console.log(arrTitles[i]);
        nav("/AdminstratorPage");
      }
    }
  }

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
      <br />
      {arr.map((user) => (
        //id  = user.Title
        <div className="MyCourse">
          <>
            <h1 key={user} className="title">
              {user.Type}
            </h1>
            <p key={user} className="shortsummary">
              {user.Course}
            </p>
            <p key={user} className="instructor">
              {user.Status}
            </p>

            <button className="button-17" id={user._id} onClick={reply_click}>
               View Problem            </button>
          </>
        </div>
      ))}

      {/* <div>{location.state.passedEmail}</div> */}
    </div>
  );
};

export default AdminViewProblems;
