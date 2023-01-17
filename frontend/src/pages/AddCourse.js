import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
//import "../styles/register.css";
//import "../styles/main.css";
import "../styles/addCourse.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
import { useLocation } from "react-router-dom";
var CoursesArray = [];

const AddCourse = () => {
  const [final, setFinal] = useState("");
  const nav = useNavigate();
  console.log("Hi");
  const location = useLocation();
  const passedEmail = location.state.passedEmail;
  console.log(passedEmail);
  const addCourse = () => {

    const Title = document.getElementById("title").value;
    console.log(Title);
    const Subtitle = document.getElementById("subtitle").value;
    console.log(Subtitle);
    const Subtitle1 = document.getElementById("subtitle1").value;
    console.log(Subtitle1);
    const Subtitle2 = document.getElementById("subtitle2").value;
    const Shortsummary = document.getElementById("ss").value;
    const Subject = document.getElementById("subj").value;
    const Price = document.getElementById("price").value;
    const Rating = 0;
    const Hours = document.getElementById("hours").value;
    const Views = 0;
    const PreviewLink = document.getElementById("cplink").value;
    const SubLink = document.getElementById("sublink").value;
    const SubLink1 = document.getElementById("sublink1").value;
    const SubLink2 = document.getElementById("sublink2").value;
    const Description = document.getElementById("description").value;
    const Description1 = document.getElementById("description1").value;
    const Description2 = document.getElementById("description2").value;
    const Price_after_promotion = document.getElementById(
      "Price_after_promotion"
    ).value;
    const Promotion = document.getElementById("Promotion").value;
    const Promotion_valid_for = document.getElementById(
      "Promotion_valid_for"
    ).value;

    console.log("Hi");
    console.log(passedEmail);
     Axios.post("http://localhost:8000/Instructor_addcourse", {
      Title: Title,
      Subtitle:Subtitle,
      Subtitle1: Subtitle1,
      Subtitle2: Subtitle2,
      Shortsummary: Shortsummary,
      Subject: Subject,
      Price:Price,
      Price_after_promotion: Price_after_promotion,
      Email: passedEmail,
      Rating: Rating,
      Hours: Hours,
      Views: Views,
      PreviewLink:PreviewLink,
      SubLink: SubLink,
      Description:Description,
      SubLink1: SubLink1,
      Description1:Description1,
      SubLink2: SubLink2,
      Description2:Description2,
      Promotion: Promotion,
      Promotion_valid_for: Promotion_valid_for,
    }).then((response) => {
      // console.log(response);
      // console.log("Okay");
      setFinal(response.data);
    });
  };

  const GoToViewCourses = () => {
    nav("/InstructorViewCourse");
    // Axios.get("http://localhost:8000/instructor_viewMyCourses", {
    //   Instructor: Instructor,
    // }).then((response) => {
    //   console.log(response);

    //   setFinal(response);

    //   // setData(response.data[1].Title);
    // });
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

      <h1>Add Your Course</h1>
      <div className="CourseForm">
        <label>Title</label>
        <br />
        <input type="text" name="Title" id="title" /> <br />
        <label>Short Summary</label>
        <br />
        <input type="text" name="Shortsummary" id="ss" /> <br />
        <label>Subject</label>
        <br />
        <input type="text" name="Subject" id="subj" /> <br />
        <label>Price</label>
        <br />
        <input type="text" name="name" id="price" /> <br />
        <br/>
        <label>Price_after_promotion</label>
        <br />
        <input type="text" name="name" id="Price_after_promotion" /> <br />
        <label>Hours</label>
        <br />
        <input type="number" name="Hours" id="hours" /> <br />
        <label>Course Preview Video Link</label>
        <br />
        <input type="text" name="CPLink" id="cplink" /> <br />
        <label>Subtitle 1</label>
        <br />
        <input type="text" name="Subtitle" id="subtitle" /> <br />
        <label>Subtitle 1 Video Link</label>
        <br />
        <input type="text" name="SubLink" id="sublink" /> <br />
        <label>Subtitle 1 Description</label>
        <br />
        <input type="text" name="SubLink" id="description" /> <br />
        <label>Subtitle 2</label>
        <br />
        <input type="text" name="Title" id="subtitle1" /> <br />
        <label>Subtitle 2 Video Link</label>
        <br />
        <input type="text" name="SubLink" id="sublink1" /> <br />
        <label>Subtitle 2 Description</label>
        <br />
        <input type="text" name="SubLink" id="description1" /> <br />
        <label>Subtitle 3</label>
        <br />
        <input type="text" name="Title" id="subtitle2" /> <br />
        <label>Subtitle 3 Video Link</label>
        <br />
        <input type="text" name="SubLink" id="sublink2" /> <br />
        <label>Subtitle 3 Description</label>
        <br />
        <input type="text" name="SubLink" id="description2" /> <br />
        <label>Promotion</label>
        <br />
        <input type="text" name="SubLink" id="Promotion" /> <br />
        <label>Promotion valid for</label>
        <br />
        <input type="text" name="SubLink" id="Promotion_valid_for" /> <br />
        <button className="button-17" onClick={addCourse}>
          Add Course
        </button>
        <button className="button-17" onClick={GoToViewCourses}>
          View Courses
        </button>
      </div>
    </div>
  );
};

export default AddCourse;
