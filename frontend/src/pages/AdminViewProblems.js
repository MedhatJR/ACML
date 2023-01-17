import { useEffect, useState } from "react";
import React from "react";
import Axios from "axios";
//import "../styles/viewStyle.css";
import "../styles/IndividualViewMyCourses.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
import LogIn from "./LogIn";
//import "../styles/Star.css";
import { useLocation } from "react-router-dom";

var arr = [];
var passed_id = "";

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
   // console.log(response);
    arr = response.data;
    setData(response);
  });

  const buttonPressed = (e) => {
    passed_id = e.target.id; // Get ID of Clicked Element
    console.log(passed_id);
  };

  function reply_click(clicked_id) {
    const buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
      button.addEventListener("click", buttonPressed);
    }
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]._id === passed_id) {
        // console.log(arrTitles[i]);
        Axios.post("http://localhost:8000/change_status_to_seen", { _id :passed_id
     }).then((response) => {
       // console.log(response);
      //arr = response.data;
    setData(response);
        });
        nav("/AdminOpenProblem" , {state: { passed_id : arr[i]._id } } );
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
<div className="buttonProblem"> <button  className="button-17" id={user._id} onClick={reply_click}>
               View Problem            </button></div>
            
          </>
          
        </div>
      ))}

      {/* <div>{location.state.passedEmail}</div> */}
    </div>
  );
};

export default AdminViewProblems;
