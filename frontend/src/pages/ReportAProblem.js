import { useEffect, useState } from "react";
import React from "react";
import Axios from "axios";
import "../styles/InstructorPageStyle.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png"
import { useLocation } from "react-router-dom";

const ReportAProblem = () => {
  var [final, setFinal] = useState("");
  const location = useLocation();
  var passedEmail = location.state.passedEmail;
  //var passedCategory = location.state.passedCategory;
  var status = "unseen";
  console.log(passedEmail);
  //console.log(passedCategory);
  const report = () => {
    Axios.post("http://localhost:8000/Corporate_ReportAProblem", {
      Email: passedEmail,
      Category: "CorporateTrainee",
      Description: document.getElementById("description"),
      Type: document.getElementById("type"),
      Course: document.getElementById("course"),
      Status: status,
    }).then((response) => {
      console.log(response.data);
      setFinal = response.data;
    });
  }

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