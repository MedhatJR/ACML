import React from "react";
import { useEffect, useState } from "react";

import "../styles/register.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
//import CorporateTrainee from "../../../Backend/src/Models/CorporateTrainee";

const EnterEmail = () => {
 
    const [final, setFinal] = useState("");
    const nav = useNavigate();

    const login = () => {
      const C = document.getElementById("Category").value
        const Email = document.getElementById("email").value;
      console.log("Hi");
      if (C === "CorporateTrainee"){
        nav("/CorporateResetEmail"); 
    }
    else if (C === "IndividualTrainee"){
        nav("/IndividualResetEmail");
    }
    else{
     
      nav("/Emailsent");
    }
  
  };

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
      <h1>Reset Your Password</h1>
      <form className="form">
        <label>Email</label>
        <input type="email" name="Email" id="email" /> <br />
        <br />
        <br />
       < label> Category </label>
        <input type="text" name="Category" id="Category" /> <br />
        <br />
        <br />
        <button onClick={login}>Log in</button>

      </form>
      
    </div>
    </>

  );
};

export default EnterEmail;
