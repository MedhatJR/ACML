import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
import "../styles/register.css";
import { useNavigate } from "react-router-dom";
//import Instructor from "../../../Backend/src/Models/Instructor";

const AddCourse = () => {
  const [final, setFinal] = useState("");
  const nav = useNavigate();

  const addCourse = () => {
    const Title = document.getElementById("user").value;
    const Subtitle = document.getElementById("email").value;
    const Shortsummary = document.getElementById("pass").value;
    const Subject = document.getElementById("cou").value;
    const Price = document.getElementById("fn").value;
    const Instructor = document.getElementById("ln").value;
    const Rating = document.getElementById("g").value;
    const Hours = document.getElementById("g").value;
    const Views = document.getElementById("g").value;
    const PreviewLink = document.getElementById("g").value;
    const SubLink = document.getElementById("g").value;

    console.log("Hi");
    Axios.post("http://localhost:8000/Instructor_addcourse", {
      Titlle: Title,
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

  //   const viewCourses = () => {

  //     Axios.get("http://localhost:8000/Corporate_retrieveAll").then(
  //         (response) => {
  //           console.log(response);
  //           arr = response.data;

  //           setData(arr);
  //           console.log(arr);
  //           // setData(response.data[1].Title);
  //         }
  //       );
  //     };
  // }

  return (
    <div>
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
        {/* <button onClick={viewCourses}>View Courses</button>b */}
      </form>
    </div>
  );
};
