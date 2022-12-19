import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Routes, Route, useNavigate } from 'react-router-dom';
import "../styles/InstructorPageStyle.css";
import logo from "../Media/Logo.png";
var answer ="";
const Coporate_GradeAndAnswers = () => {


  const [userGrade, setGrade] = useState("");
  
  const getGrade = () => {
    
    const _id =  document.getElementById("id").value;
    Axios.post("http://localhost:8000/Coporate_Grade", { _id: _id }).then(
      (response) => {
        // answer = response.data;
        console.log(response.data);
        setGrade(response.data);
        //console.log(userData);
      })

  };
  const [userData, setData] = useState("");
  //console.log("Hello");
  const getUser = () => {
    
    const _id =  document.getElementById("id").value;
    Axios.post("http://localhost:8000/Coporate_QuestionAnswers", { _id: _id }).then(
      (response) => {
        // answer = response.data;
        console.log(response.data);
        setData(response.data);
        //console.log(userData);
      })

  };


  return (
    <div className="add">
    <>
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
    </>
    <br />
    <br />
    <div>

      <label>
        Exam ID:
        <input type="text" name="id" id="id" />
      </label>
      <div>
        <button  onClick={getGrade} >Get Your Grade</button>

        <br />
        <button onClick={getUser}>Check Your Answers</button>
        <br></br>
        <p>{userGrade}</p>
        <p>{userData}</p>

        {/* <div className="return" >
        {answer.map((val) => {
          return (<>
              <span>{val}</span>
              </>
          )
        })}


        </ div> */}

      </div>
      </div>
    </div>
  );
}
export default Coporate_GradeAndAnswers;