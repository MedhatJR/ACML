import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
import CorporateTrainee from "../../../Backend/src/Models/CorporateTrainee";

const LogIn = () => {
  const C = document.getElementById("Category").value
  const Email = document.getElementById("email").value;
  const Password = document.getElementById("pass").value;  
    const [final, setFinal] = useState("");
    const nav = useNavigate();

    const login = () => {
    
      console.log("Hi");
      if (C == "CorporateTrainee"){
      Axios.post("http://localhost:8000//Corporate_Login", {
        Email: Email,
        Password: Password,
      }).then((response) => {
        this.setFinal(response.data);
      });
    }
    else if (C == "IndividualTrainee"){
      Axios.post("http://localhost:8000/Individual_Login", {
        Email: Email,
        Password: Password,
      }).then((response) => {
        this.setFinal(response.data);
      });
    }
    else{
      Axios.post("http://localhost:8000/Instructor_Login", {
        Email: Email,
        Password: Password,
      }).then((response) => {
        this.setFinal(response.data);
      });
    }
  
  };
    const forward = () => {
      nav("/");
    };
    const handleSubmit = (e) => {
        e.preventDefault();
      }

  return (<>
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
  </div>
    
    <div className="Register">
      <h1>Please Login</h1>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <label>Email</label>
        <input type="email" name="Email" id="email" /> <br />
        <br />
        <br />
        <label>Password</label>
        <input type="password" name="Password" id="pass" /> <br />
        <br />
        <br />
       < label> Category </label>
        <input type="text" name="Category" id="Category" /> <br />
        <br />
        <br />
        <button onClick={login}>Log in</button>
        <br />
        <br />
        <li>
            <a href="/Emailsent">Forgot my Password</a>
          </li>
      </form>
      {/* {final.Username} */}
    </div>
    </>

  );
};

export default LogIn;
