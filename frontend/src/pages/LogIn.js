import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
//import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
import  setAuthToken from "../Controllers/setAuthToken";
//import CorporateTrainee from "../../../Backend/src/Models/CorporateTrainee";
var navg = false;


const LogIn = () => {
 var [final, setFinal] = useState("");
 //var setFinal;
  const nav = useNavigate();
  const forward = () => {
    nav("/");
  };
  const Email = document.getElementById("email").value;
  const Password = document.getElementById("pass").value;

  var getName = function() {
    var empass=[Email,Password]
    return empass;    // Or pull this from cookie/localStorage
  };
  
  var setName = function(email,password) {
    Email = email;
    Password=password;     
    // Also set this in cookie/localStorage
  };
  // const corplogin = () => {
  //     nav("/CorporatePage");
  //   };
  //   const indivilogin = () => {
  //     nav("/IndividualPage", {email:''});
  //   };
  //   const instlogin = () => {
  //     nav("/InstructorPage");
  //   };
  const login = () => {
    const C = document.getElementById("Category").value

    console.log("Hi");
    if (C == "CorporateTrainee") {


      Axios.post("http://localhost:8000/Corporate_Login", {
        Email: Email,
        Password: Password,
      }).then((response) => {
        setFinal = response.data;
        nav("/CorporatePage",{final:{email: document.getElementById("email").value, password: document.getElementById("pass").value}});

        //get toekn from response 
        const token = response.data.token;

        
        //set token to axios common header 
        setAuthToken(token);

        //set JWT token to local 
        localStorage.setItem("token", token);

        //redirect user to home page
        window.location.href = '/'
      }).catch(err => console.log(err));

      //Navigation to the corporate page


    }
    else if (C === "IndividualTrainee") {
      Axios.post("http://localhost:8000/Individual_Login", {
        Email: Email,
        Password: Password,
      }).then((response) => {
        setFinal = response.data;
      });
      //Navigation to the Individual page
      nav("/IndividualPage",{state:{email: document.getElementById("email").value, password: document.getElementById("pass").value}});
    }
    else {
      Axios.post("http://localhost:8000/Instructor_Login", {
        Email: Email,
        Password: Password,
      }).then((response) => {
        setFinal = response.data;
      });
      nav("/InstructorPage",{state:{email: document.getElementById("email").value, password: document.getElementById("pass").value}});
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  var getName = function() {
    var empass=[Email,Password]
    return empass;    // Or pull this from cookie/localStorage
  };

  var setName = function(email,password) {
    Email = email;
    Password=password;     
    // Also set this in cookie/localStorage
  };


  const handleSubmitt = (email, pass) => {
    //reqres registered sample user 
    const loginPayload ={
      Email: document.getElementById("email").value,
      Password: document.getElementById("pass").value,
    }
    Axios.post("http://localhost:8000/Corporate_Login",
    loginPayload).then(response => {
      //get toekn from response 
      const token = response.data.token;

      //set JWT token to local 
      localStorage.setItem("token", token);

      //set token to axios common header 
      setAuthToken(token);
      //redirect user to home page
      window.location.href='/'
    }).catch(err => console.log(err));

  };

  return (
  //   {
  //   getName: getName,
  //   setName: setName
  // },
   <>
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
          <a href="/EnterEmail">Forgot my Password</a>
        </li>
      </form>
      {/* {final.Username} */}
    </div>
  </>

  );
};

export default LogIn ;
