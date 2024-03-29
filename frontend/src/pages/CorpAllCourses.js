import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
//import "../styles/register.css";
import "../styles/AllCourses.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
import { useLocation } from "react-router-dom";
var arr = [];
var arrTitles = [];
var isClickedTitle = "";


const CorpAllCourses = () => {
    
  const [users, setData] = useState("");
  const nav = useNavigate();
  const location = useLocation();
  const passedEmail = location.state.passedEmail;
  const Register = () => {
    nav("/Register");
  };
  const LogIn = () => {
    nav("/LogIn");
  };

  // const GoToCreditCard = () => {
  //   nav("/Pay", { state: { passedTitle: passedTitle } });
  // };

  Axios.post("http://localhost:8000/Individual_retrieveCourses").then(
    (response) => {
      console.log(response);
      arr = response.data;
      for (var i = 0; i < arr.length; i++) {
        arrTitles[i] = arr[i].Title;
      }
      console.log(arr);
      setData(arr);
    }
  );
  
  
  const buttonPressed = (e) => {
    isClickedTitle = e.target.id; // Get ID of Clicked Element
    console.log(isClickedTitle);
  };

  function reply_click(clicked_id) {
    const buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
      button.addEventListener("click", buttonPressed);
    }
    for (var i = 0; i < arrTitles.length; i++) {
      if (arrTitles[i] === isClickedTitle) {
        nav("/CorpRequest", {
          state: { passedEmail: passedEmail, isClickedTitle: isClickedTitle },
        });
      }
    }
  }

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
      {arr.map((user) => (
        //id  = user.Title
        <div className="MyCourse">
          <>
            <h1 key={user} className="title">
              {user.Title}
            </h1>
            <p key={user} className="shortsummary">
              {user.Shortsummary}
            </p>
            {/* <p key={user} className="PreviewLink">
              {user.PreviewLink}
            </p> */}
            <iframe
              className="previewVideo"
              width="560"
              height="315"
              src={user.PreviewLink}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p key={user} className="instructor">
              By: {user.Instructor}
            </p>
            <p key={user} className="subject">
              Subject: {user.Subject}
            </p>
            <p key={user} className="Hours">
              {user.Hours} Total Hours
            </p>
            <p key={user} className="Price">
              {user.Price}$
            </p>
            <p key={user} className="Promotion">
              ({user.Promotion}%) OFF
            </p>
            <p key={user} className="Promotion_valid_for">
              Promotion is valid for: {user.Promotion_valid_for}
            </p>

            <p key={user} className="Price_after_promotion">
              {user.Price_after_promotion}$
            </p>

            <p key={user} className="Rating">
              {user.Rating}⭐'s
            </p>
            <button className="pay-btn" id={user.Title} onClick={reply_click}>
              Request Access
            </button>
          </>
        </div>
      ))}
      <br />
      <br />
    </div>
  );
};

export default CorpAllCourses;
