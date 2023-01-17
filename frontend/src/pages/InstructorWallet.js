import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
import "../styles/InstructorPageStyle.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
import teacher from "../Media/teacher.png";
import wallet from "../Media/wallet.png";
import { useLocation } from "react-router-dom";

const InstructorWallet = () => {
  const location = useLocation();
  const passedEmail = location.state.passedEmail;
  console.log(passedEmail);
  var [final, setFinal] = useState("");
  const nav = useNavigate();
  console.log("Hi");

  //   const viewCourseRating = () => {
  //     console.log("Hi");
  //     Axios.post("http://localhost:8000/instructor_viewCourseRatings").then(
  //       (response) => {
  //         setFinal=response.data;
  //       }
  //     );
  //   };
  //   const viewMyRating = () => {
  //     console.log("Hi");
  //     Axios.post("http://localhost:8000/instructor_viewRatings").then(
  //       (response) => {
  //         this.setFinal(response.data);
  //       }
  //     );
  //   };

  //   Axios.post("http://localhost:8000/Instructor_viewMyWallet", {
  //     Email: passedData,
  //   }).then((response) => {
  //     setFinal(response.data);
  //   });

  Axios.post("http://localhost:8000/Instructor_viewMyWallet", {
    Email: passedEmail,
  }).then((response) => {
    console.log(response);

    setFinal(response.data[0].Wallet);

    // setData(response.data[1].Title);
  });

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
      <h1>
        My Wallet: <h3>{final} $</h3>
      </h1>
      <br />
      <br />
      <br />
    </div>
  );
};

export default InstructorWallet;
