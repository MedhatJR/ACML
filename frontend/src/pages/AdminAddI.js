


import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
import "../styles/InstructorPageStyle.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
import teacher from "../Media/teacher.png";

const AdminAddI = () => {
  var [final, setFinal] = useState("");
  const nav = useNavigate();
  console.log("Hi");

  const Add = () => {
    const  Username= document.getElementById("U").value;
    const  Password = document.getElementById("P").value;
    const Email = document.getElementById("E").value; 
    const Country=document.getElementById("C").value; 
    const Firstname= document.getElementById("F").value; 
    const Lastname=document.getElementById("L").value; 
    const Gender=document.getElementById("G").value; 
    const Courses= document.getElementById("CO").value;
    const Rating= document.getElementById("R").value;
    const Biography=document.getElementById("B").value;
    const Wallet=0;
      
  
    Axios.post("http://localhost:8000/Adminstrator_addinstructor", {
        Username: Username,
        Password: Password,
        Email:Email,
        Country: Country,
        Firstname:Firstname,
        Lastname:Lastname,
        Gender:Gender,
        Courses:Courses,
        Rating:Rating,
        Biography:Biography,
        Wallet:Wallet,
      }).then((response) => {
        setFinal=response.data;
        nav("/AdminstratorPage");
      });


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
      <br />
      <br />
      <div className="title">Welcome, our beloved Adminstrator</div>
      <img src={teacher} alt="" className="teacher" />
      <br />
      <br />
      <div className="title">Adding another instructor</div>
      <br />
      <br />
      <label>Username</label>
        <input type="text" name="Username" id="U" /> <br />
        <br />
        <br />
      <label>Password</label>
        <input type="text" name="Password" id="P" /> <br />
        <br />
        <br />
        <label>Email</label>
        <input type="text" name="Email" id="E" /> <br />
        <br />
        <br />
        <label>Country</label>
        <input type="text" name="Country" id="C" /> <br />
        <br />
        <br />
        <label>Firstname</label>
        <input type="text" name="Firstname" id="F" /> <br />
        <br />
        <br />
        <label>Lastname</label>
        <input type="text" name="Lastname" id="L" /> <br />
        <br />
        <br />
        <label>Gender</label>
        <input type="text" name="Gender" id="G" /> <br />
        <br />
        <br />
        <label>Courses</label>
        <input type="text" name="Courses" id="CO" /> <br />
        <br />
        <br />
        <label>Rating</label>
        <input type="text" name="Rating" id="R" /> <br />
        <br />
        <br />
        <label>Biography</label>
        <input type="text" name="Biography" id="B" /> <br />
        <br />
        <br />
        
        <br />
        
        <br />
      <button class="button-17" role="button" onClick={Add}>
        Add another instructor
      </button>
      <br />
      <br />
    </div>
  );
};

export default AdminAddI;