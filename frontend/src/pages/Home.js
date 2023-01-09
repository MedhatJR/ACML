import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
//import "../styles/register.css";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
import student from "../Media/Learning.jpg";
var arr = [];

const Home = () => {
  const [users, setData] = useState("");
  const nav = useNavigate();
  const Register = () => {
    nav("/Register");
  };
  const LogIn = () => {
    nav("/LogIn");
  };

  // const viewCourses = () => {
  //   // var Username = document.getElementById("myName").value;
  //   Axios.post("http://localhost:8000/Individual_retrieveCourses").then(
  //     (response) => {
  //       console.log(response);
  //       arr = response.data;
  //       console.log(arr);

  //       setData(arr);

  //       // setData(response.data[1].Title);
  //     }
  //   );
  // };
  const viewCourses = () => {
    nav("AllCourses");
  };

  // const ExploreCourses = () => {
  //   nav("/AllCoursesPage", { arr });
  // };
  return (
    <div className="Container">
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

        <div className="Slogan">
          <h1>Move beyond </h1>
          <h1> the limitations of</h1>
          <h1> e-learning.</h1>
          <h4>Explore a wide variety of Courses right now!</h4>
          <button className="explore-button" onClick={viewCourses}>
            Explore Courses
          </button>
          <img src={student} className="student" alt="" />{" "}
        </div>
      </>
      <br />
      <br />
    </div>
  );
};

export default Home;
