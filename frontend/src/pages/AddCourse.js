import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
//import "../styles/register.css";
import "../styles/main.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";

var CoursesArray = [];

const AddCourse = () => {
  const [final, setFinal] = useState("");
  const nav = useNavigate();
  console.log("Hi");

  const addCourse = () => {
    const Title = document.getElementById("title").value;
    const Subtitle = document.getElementById("subtitle").value;
    const Shortsummary = document.getElementById("ss").value;
    const Subject = document.getElementById("subj").value;
    const Price = document.getElementById("price").value;
    const Instructor = document.getElementById("Iname").value;
    var Rating = 0;
    const Hours = document.getElementById("hours").value;
    const Views = 0;
    const PreviewLink = document.getElementById("cplink").value;
    const SubLink = document.getElementById("sublink").value;

    console.log("Hi");
    Axios.post("http://localhost:8000/Instructor_addcourse", {
      Title: Title,
      Subtitle: Subtitle,
      Shortsummary: Shortsummary,
      Subject: Subject,
      Price: Price,
      Instructor: Instructor,
      Rating: Rating,
      Hours: Hours,
      Views: Views,
      PreviewLink: PreviewLink,
      SubLink: SubLink,
    }).then((response) => {
      // console.log(response);
      // console.log("Okay");
      this.setFinal(response.data);
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
      <form className="CourseForm">
        <label>Title</label>
        <br />
        <input type="text" name="Title" id="title" /> <br />
        <label>Subtitle</label>
        <br />
        <input type="text" name="Subtitle" id="subtitle" /> <br />
        <label>Short Summary</label>
        <br />
        <input type="text" name="Shortsummary" id="ss" /> <br />
        <label>Subject</label>
        <br />
        <input type="text" name="Subject" id="subj" /> <br />
        <label>Price</label>
        <br />
        <input type="number" name="Price" id="price" /> <br />
        <label>Instructor Name</label>
        <br />
        <input type="text" name="name" id="Iname" /> <br />
        <label>Hours</label>
        <br />
        <input type="number" name="Hours" id="hours" /> <br />
        <label>Course Preview Video Link</label>
        <br />
        <input type="text" name="CPLink" id="cplink" /> <br />
        <label>Subtitle Video Link</label>
        <br />
        <input type="text" name="SubLink" id="sublink" /> <br />
        <button onClick={addCourse}>Add Course</button>
        <button onClick={GoToViewCourses}>View Courses</button>
      </form>
    </div>
  );
};

export default AddCourse;
