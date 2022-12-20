import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
import "../styles/Emailsent.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";

const Emailsent = () => {

    const nav = useNavigate();
   
    const Reset = () => {   
      
      //const code = document.getElementById("code").value;  
          nav("/IndividualResetPassword");
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
    
    <div className="email">
      <h1>Reset Your Password</h1>
      <form className="form">
        <label>Enter The Security Code Sent To You By Mail   </label>
        <br />
        <br />
        <label> Code was Sent  To ********@gmail.com  </label>
        <br />
        <br />
         <input type="text" name="code" id="code" /> <br />       
        <br />
        <br />
        <button onClick={Reset}> Proceed </button>
        
      </form>
      {/* {final.Username} */}
    </div>
    </>

  );
};

export default Emailsent;