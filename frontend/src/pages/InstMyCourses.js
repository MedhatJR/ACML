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
var searchResults = [];
var filterResults = [];

const AllCourses = () => {
  const [users, setData] = useState("");
  const nav = useNavigate();
  const location = useLocation();
  const passedEmail = location.state.passedEmail;

  // const GoToCreditCard = () => {
  //   nav("/Pay", { state: { passedTitle: passedTitle } });
  // };

  const ViewAllCourses = () => {
    Axios.post("http://localhost:8000/instructor_viewMyCourses2", {
      Email: passedEmail,
    }).then((response) => {
      console.log(response);
      arr = response.data;
      for (var i = 0; i < arr.length; i++) {
        arrTitles[i] = arr[i].Title;
      }
      console.log(arr);
      setData(arr);
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      Axios.post("http://localhost:8000/Instructor_searchCourse", {
        Email: passedEmail,
        Title: document.getElementById("searchBar").value,
        Subject: document.getElementById("searchBar").value,
        Instructor: document.getElementById("searchBar").value,
      }).then((response) => {
        console.log(response);
        searchResults = response.data;
        console.log(arr);
        setData(searchResults);
      });
    }
  };

  const filterClick = () => {
    Axios.post("http://localhost:8000/instructor_filter", {
      Email: passedEmail,
      minPrice: document.getElementById("minPrice").value,
      maxPrice: document.getElementById("maxPrice").value,
      requiredSubj: document.getElementById("Subject").value,
    }).then((response) => {
      console.log(response);
      filterResults = response.data;
      console.log(arr);
      setData(filterResults);
    });
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
        <br />
        <div>
          <div className="main">
            <input
              type="text"
              placeholder="Search.."
              name="search"
              className="search"
              id="searchBar"
              onKeyDown={handleKeyDown}
            ></input>
          </div>
        </div>
        <br />
        <br />
        <button
          className="viewAllCourses"
          id="allCourses"
          onClick={ViewAllCourses}
        >
          View All Courses
        </button>
        <div className="filterBar">
          <label className="minprice"> Minimum Price</label>
          <input type="number" id="minPrice" />
          <br />
          <label> Maximum Price</label>
          <input type="number" id="maxPrice" />
          <br />
          <label> Subject</label>
          <input className="subjectFilter" type="text" id="Subject" />
          <button className="filterButton" onClick={filterClick}>
            Filter
          </button>
        </div>
      </>
      <br />
      <br />
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
              {user.Instructor}
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
            <p key={user} className="Rating">
              {user.Rating}⭐'s
            </p>
          </>
        </div>
      ))}
      {searchResults.map((user) => (
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
              {user.Instructor}
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
            <p key={user} className="Rating">
              {user.Rating}⭐'s
            </p>
          </>
        </div>
      ))}
      {filterResults.map((user) => (
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
              {user.Instructor}
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
            <p key={user} className="Rating">
              {user.Rating}⭐'s
            </p>
          </>
        </div>
      ))}
      <br />
      <br />
    </div>
  );
};

export default AllCourses;
