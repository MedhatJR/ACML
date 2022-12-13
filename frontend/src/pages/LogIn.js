import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";

const LogIn = () => {

    const [final, setFinal] = useState("");
    const nav = useNavigate();
    const login = () => {
      const Email = document.getElementById("email").value;
      const Password = document.getElementById("pass").value;  
      console.log("Hi");
      Axios.post("http://localhost:8000/createCorporateUser", {
        Email: Email,
        Password: Password,
      }).then((response) => {
        this.setFinal(response.data);
      });
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
        <label>Password</label>
        <input type="password" name="Password" id="pass" /> <br />
        <button onClick={"login"}>Log in</button>
      </form>
      {/* {final.Username} */}
    </div>
    </>

  );
};

export default LogIn;
