import { useEffect, useState } from "react";
import React from "react";
import Axios from "axios";
import "../styles/InstructorPageStyle.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png"
import { useLocation } from "react-router-dom";
var arr = [];
var passedCategory="";
const InstructorViewCourse = () => {
  //const Instructor = document.getElementById("Iname").value;
  const [users, setData] = useState("");
  const nav = useNavigate();
  const location = useLocation();
  const passedEmail = location.state.passedEmail;

  const getData = () => {
    Axios.post("http://localhost:8000/instructor_viewMyCourses", {
      Instructor: document.getElementById("LastName").value,
    }).then((response) => {
      console.log(response);
      arr = response.data;
      setData(response);

      // setData(response.data[1].Title);
    });
  };

  const back = () => {
    nav("/");
  };

  const problemReport = () => {
    nav("/ReportAProblem", {
      state: { passedEmail: passedEmail, passedCategory: "Instructor" },
    });
  };
  // const Instructor = document.getElementById("Iname").value;
  // Axios.get("http://localhost:8000/instructor_viewMyCourses", {
  //   Instructor: Instructor,
  // }).then((response) => {
  //   console.log(response);
  //   arr = response.data;
  //   setData(response);
  //   console.log(arr);

  //   // setData(response.data[1].Title);
  // });

  return (
    <div className="InstructorViewCourse">
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

      <h1>Your Courses</h1>
      <label> Enter Your Lastname </label>
      <input type="LastName" name="LastName" id="LastName" /> <br />
      <br />


      <br />


      <button onClick={getData} className="btn">Get Data</button>
      <br />


      {arr.map((user) => (
        <div>
          <>
            <a href="/CourseInstructor" id={user.Title} key={user}>{user.Title} </a>
            {/* <td key={user}> {user.Email}</td>
              <td key={user}>{user.Password}</td>
              <td key={user}>{user.Country}</td>
              <td key={user}>{user.Firstname}</td>
              <td key={user}>{user.Lastname}</td>
              <td key={user}>{user.Gender}</td> */}
          </>
          <br />
          <br />
          <button className="button-17" id={user.Title} onClick={problemReport}>
            Report a Problem
          </button>
        </div>
      ))}
      <br />
      <br />

      <button onClick={back} className="btn">
        {" "}
        back
      </button>


    </div>
  );
};

export default InstructorViewCourse;
