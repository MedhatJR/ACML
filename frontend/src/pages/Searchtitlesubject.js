import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
//import "../styles/register.css";
//import "../styles/main.css";
import "../styles/addCourse.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
var arr = [];
var isClickedTitle = "";


const Searchtitlesubject = () => {
  const [final, setFinal] = useState("");
  const [price, setPrice] = useState("");
  const nav = useNavigate();

 const search = () => {
      const Title = document.getElementById("title").value;
      const Subject = document.getElementById("subject").value
      const Instructor = document.getElementById("instructor").value
      

       Axios.post("http://localhost:8000/Corporate_searchCourse", {
        Title : Title,
        Subject : Subject,
        Instructor  :Instructor,
    }).then((response) => {
      console.log(response);
      arr = response.data;
      console.log(arr)
      setFinal(response);

      // setData(response.data[1].Title);
    });
}
 
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
      if (arr[i].Title === isClickedTitle) {
        console.log(arr[i])
        nav("/Pay", {
          state: { isClickedTitle: isClickedTitle },
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

      <h1></h1>
      <div className="filterall">
        <label>Title : </label>
        <input type="text" name="Subject" id="title" /> <br />
        <br />
        <br />
        <label> Subject : </label>
        <input type="text" name="Rating" id="subject" /> <br />
        <br />
        <label>Instructor : </label>
        <input type="text" name="Rating" id="instructor" /> <br />
       

        <button className="button-17" onClick={search}>
          Search
        </button>   
        <br />
     <br />
     

      </div>

      
      {arr.map((user) => (
        //id  = user.Title
        <div className="MyCoursefilter">
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
              width="350"
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
            {/*MENNAAA*******************/ }
            <p key={user} className="Subtitles">
             Subtites: {user.Subtitle},{user.Subtitle1},{user.Subtitle2}
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
            <button className="pay-btn" onClick={reply_click} id = {user.Title}>
              Pay and Enroll
            </button>
          </>
        </div>
      ))}

    </div>
  );
};

export default Searchtitlesubject;
