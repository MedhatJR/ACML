import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Routes, Route, useNavigate } from 'react-router-dom';
import "../styles/InstructorPageStyle.css";
import logo from "../Media/Logo.png";


var answer ="";
var arr2=[];



const Coporate_GradeAndAnswers = () => {

  const nav = useNavigate();
  const [userGrade, setGrade] = useState("");
  const [userCer, setCer] = useState("");
 

const Certificate = () => {
  nav("/Certificates");
};
  const getGrade = () => {
    
    Axios.post("http://localhost:8000/Corporate_getExamId").then( (response) => {
    
    arr2 = response.data;
   
   } );
   console.log(arr2);
    Axios.post("http://localhost:8000/Coporate_Grade", { _id: arr2 }).then(
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
    
   
   console.log(arr2);

    Axios.post("http://localhost:8000/Corporate_QuestionAnswers", { _id:arr2 }).then(
      (response) => {
        // answer = response.data;
        console.log(response.data);
        setData(response.data);
        //console.log(userData);
      })

  };

 
  const certificateEmail = () => {
    
    Axios.post("http://localhost:8000/Corporate_Recieve_Certificate_Via_Email").then(
      (response) => {
        // answer = response.data;
        console.log(response.data);
        setCer(response.data);
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
      <br />
        <br />
      <div>
        <button  onClick={getGrade} >Get Your Grade</button>
        <p>{userGrade}</p>
        <br />
        <br />
        <button onClick={getUser}>Check Your Answers</button>
        <br></br>
        
        <p>{userData}</p>

        <br />
        <br />
        <button onClick={Certificate}>Get your certificate</button>
        <br></br>
        <br />
        <br />
        <br />
        <button onClick={certificateEmail}>Send your certificate via email</button>
        <br></br>
        <p>{userCer}</p>

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