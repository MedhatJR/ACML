import { useEffect, useState } from "react";
import React from "react";
import Axios from "axios";
//import "../styles/viewStyle.css";
import "../styles/IndividualViewMyCourses.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
import LogIn from "./LogIn";
//import "../styles/Star.css";
import { useLocation } from "react-router-dom";

var arr = [];


// var id = "";

const AdminOpenProblem = () => {
    const location = useLocation();
  const passed_id = location.state.passed_id;
  console.log(passed_id);
  console.log("fbgdlkkl;tel");
  const [users, setData] = useState("");
   const nav = useNavigate();


  Axios.post("http://localhost:8000/view_problem", {
    _id : passed_id
  }).then((response) => {
    console.log(response);
    arr = response.data;
    setData(response);
    console.log(arr);
  });

 
  const solve = () => {
  Axios.post("http://localhost:8000/change_status_to_solved", {
    _id : passed_id
  }).then((response) => {
    console.log(response);
    setData(response);
    nav("/AdminViewProblems");
  });
  }
  const pending = () => {
    Axios.post("http://localhost:8000/change_status_to_pending", {
        _id : passed_id
    }).then((response) => {
      console.log(response);
      setData(response);
      nav("/AdminViewProblems");

    });
    }
  return (
    <div className="IndividualViewCourse">
        
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

      <br />

      <br />
      <br />
      {arr.map((user) => (
        //id  = user.Title
        <div className="adminopenproblem">
          <>
            <h1 key={user} className="Titleuser">
            This is a {user.Type} problem
            </h1> 
            <br/>
            <div>
           <p key={user} className="Courseuser">
           * This problem related to {user.Course} course
            </p>
            </div>
            <br/>
            <div>
            <p key={user} className="Emailuser">
            * This problem issued by : {user.Email}
            </p>
            </div>
            <br/>
            <div>
            <p key={user} className="Categoryuser">
            * And he/she a/an : {user.Category}
            </p>  
            </div>
            <br/> 
            <div>
           <p key={user} className="Statususer">
           *Status : {user.Status}
            </p>
            </div>
            <br/>
            <div>
            <p key={user} className="Descriptionuser">
            *Description : {user.Description}
            </p>
            </div>

          </>
          <br/>
          <br/>
          <div className="buttonProblem" > <button  className="button-19" id= "pend" onClick={pending}> Mark as Pending  </button>
               
               <button className="button-18" id="solve" onClick={solve}>  Problem Solved  </button>
               </div>
        </div>
        
      ))}
      

    
    </div>
  );
};

export default AdminOpenProblem;
