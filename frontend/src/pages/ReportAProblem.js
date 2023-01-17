import { useEffect, useState } from "react";
import React from "react";
import Axios from "axios";
import "../styles/InstructorPageStyle.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png"
import { useLocation } from "react-router-dom";
// import "./Dropdown.css";
// const category = "CorporateTrainee"

const ReportAProblem = () => {
  var [final, setFinal] = useState("");
  const location = useLocation();
  const passedEmail = location.state.passedEmail;
  const passedCategory = location.state.passedCategory;
  //const status = "unseen"
  console.log(passedEmail);
  //console.log(passedCategory);
  
  const report = () => {
    console.log("ama")
    //console.log("Hi");
    // if (passedCategory === "CorporateTrainee") {
    Axios.post("http://localhost:8000/Corporate_ReportAProblem", {
      Email: passedEmail,
      Category: passedCategory,
      Description: document.getElementById("description").value,
      Type: document.getElementById("type").value,
      Course: document.getElementById("course").value,
      Status: "Unseen",
    }).then((response) => {
      console.log(response);

      setFinal(response);

      // setData(response.data[1].Title);
    });
    console.log("ewgeron")
  }
  // else if (passedCategory === "IndividualTrainee") {
  //   Axios.post("http://localhost:8000/Individual_ReportAProblem", {
  //     Email: passedEmail,
  //     Description: document.getElementById("description"),
  //     Type: document.getElementById("type"),
  //     Course: document.getElementById("course"),
  //   }).then(
  //     (response) => {
  //       console.log("hi")
  //       setFinal=response.data;        }
  //   );
  // }
  // else {
  //   if (passedCategory === "Instructor") {
  //     Axios.post("http://localhost:8000/Instructor_ReportAProblem", {
  //       Email: passedEmail,
  //       Description: document.getElementById("description"),
  //       Type: document.getElementById("type"),
  //       Course: document.getElementById("course"),
  //     }).then(
  //       (response) => {
  //         console.log("hi")
  //         setFinal=response.data;          }
  //     );
  //   }
  // }
  //};


  // const Icon = () => {
  //   return (
  //     <svg height="20" width="20" viewBox="0 0 20 20">
  //       <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
  //     </svg>
  //   );
  // };

  // const Dropdown = ({ placeHolder }) => {
  //   const getDisplay = () => {
  //     return placeHolder;
  //   };

  // }

  return (
    <div className="ReportProblem">

      <h1 class="report">Report a Problem</h1>

      <label>Describe the Problem: </label>
      <input type="text" name="description" id="description" /> <br />
      <br />
      <br />
      <label>Type: </label>
      <input type="text" name="type" id="type" /> <br />
      <br />
      <br />
      <label>Course: </label>
      <input type="text" name="course " id="course" /> <br />
      <br />
      <br />

      <button onClick={report}>Submit</button>
    </div>


  );

};
export default ReportAProblem;