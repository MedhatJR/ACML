import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
//import "../styles/register.css";
//import "../styles/main.css";
import "../styles/addCourse.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
var arr = [];
var arr2 = [];
var isClickedTitle = "";


const Allfilterall = () => {
  const [final, setFinal] = useState("");
  const [price, setPrice] = useState("");
  const [exercise, setex] = useState("");
  const nav = useNavigate();


  const filter = () => {
    const minRating = document.getElementById("minRating").value;
    const maxRating = document.getElementById("minRating").value
    const requiredSubj = document.getElementById("requiredSubj").value

    // setData(response.data[1].Title);
    Axios.post("http://localhost:8000/instructor_filter_allcourses", {
      maxRating: maxRating,
      minRating: minRating,
      requiredSubj: requiredSubj,
    }).then((response) => {
      console.log(response);
      arr = response.data;
      console.log(arr)
      setFinal(response);

      // setData(response.data[1].Title);
    });
  };


  const filterPrice = () => {

    const Price = document.getElementById("Price").value

    Axios.post("http://localhost:8000/Individual_filtercourse_price", {

      Price: Price,
    }).then((response) => {
      console.log(response);
      arr = response.data;
      console.log(arr)
      setPrice(response);

      // setData(response.data[1].Title);
    });

  };

  // const getexer = () => {
  //   Axios.post("http://localhost:8000/courses_ex", {
  //     Course:arr[0].Title,
  //     }).then((response) => {
  //        console.log(response.data);
  //       console.log(arr[0].Title);

  //     arr2 = response.data;
  //     //console.log(arr)  
  //     setex(response.data);

  //     // setData(response.data[1].Title);
  //     });
  //   };
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
        <label>Subject : </label>
        <input type="text" name="Subject" id="requiredSubj" /> <br />
        <br />
        <br />
        <label>Min Rating : </label>
        <input type="text" name="Rating" id="minRating" /> <br />
        <br />
        <label>Max Rating : </label>
        <input type="text" name="Rating" id="maxRating" /> <br />


        <button className="button-17" onClick={filter}>
          Filter Courses
        </button>
        <br />
        <br />

        <label>Price : </label>
        <input type="text" name="Price" id="Price" /> <br />
        <br />
        <br />

        <button className="button-17" onClick={filterPrice}>
          Filter Price
        </button>
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
            {/*MENNAAA*******************/}
            <p key={user} className="Subtitles">
              Subtites: {user.Subtitle},{user.Subtitle1},{user.Subtitle2}
            </p>
            <p key={user} className="exer">

              Exercise: {user.Exercises}
            </p>
            <p key={user} className="HPS">

              Hours per subtitle: {(user.Hours) / 3}
            </p>
            {/*MENNAAA*******************/}
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
            <button className="pay-btn" onClick={reply_click} id={user.Title}>
              Pay and Enroll
            </button>
          </>
        </div>
      ))}

    </div>
  );
};

export default Allfilterall;
