import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
//import "../styles/register.css";
import "../styles/AllCourses.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
var arr = [];

const AllCourses = () => {
  const [users, setData] = useState("");
  const nav = useNavigate();
  const Register = () => {
    nav("/Register");
  };
  const LogIn = () => {
    nav("/LogIn");
  };

  const GoToCreditCard = () => {
    nav("/CreditCardPage");
  };

  Axios.post("http://localhost:8000/Individual_retrieveCourses").then(
    (response) => {
      console.log(response);
      arr = response.data;
      console.log(arr);
      setData(arr);
    }
  );

  return (
    <div className="add">
      <>
        <nav>
          <img src={logo} className="logo" alt="" />{" "}
          <button type="submit" className="button-17" onClick={LogIn}>
            Login
          </button>
          <button type="submit" className="button-17" onClick={Register}>
            Sign Up
          </button>
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
            <button className="pay-btn" onClick={GoToCreditCard}>
              Pay and Enroll
            </button>
          </>
        </div>
      ))}
      <br />
      <br />
    </div>
  );
};

export default AllCourses;
