import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
import "../styles/register.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
var pop = "Registration successful"

const Register = () => {
  const [final, setFinal] = useState("");
  const [popup, setPopUp] = useState("");
  const nav = useNavigate();
  const addData = () => {
    const Username = document.getElementById("user").value;
    const Email = document.getElementById("email").value;
    const Password = document.getElementById("pass").value;
    const Country = document.getElementById("cou").value;
    const Firstname = document.getElementById("fn").value;
    const Lastname = document.getElementById("ln").value;
    const Gender = document.getElementById("g").value;

    console.log("Hi");
    Axios.post("http://localhost:8000/createCorporateUser", {
      Username: Username,
      Email: Email,
      Password: Password,
      Country: Country,
      Firstname: Firstname,
      Lastname: Lastname,
      Gender: Gender,
    }).then((response) => {

      this.setFinal(response.data);

    });

    this.setPopUp(pop);
  };
  const forward = () => {
    nav("/");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  function myFunction(element, color) {
    element.style.color = color;
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
      <h1>Please Register</h1>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <label>Username</label>
        <input type="text" name="Username" id="user" /> <br />
        <label>Email</label>
        <input type="email" name="Email" id="email" /> <br />
        <label>Password</label>
        <input type="password" name="Password" id="pass" /> <br />
        <label>Country</label>
        <input type="text" name="Country" id="cou" /> <br />
        <label>First Name</label>
        <input type="text" name="Firstname" id="fn" /> <br />
        <label>Last Name</label>
        <input type="text" name="Lastname" id="ln" /> <br />
        <label>Gender</label>
        <input type="text" name="Gender" id="g" /> <br />
        <button onClick={() => {
          addData();
          myFunction(pop, 'green');
        }} >Submit</button>

        {/* <p> {pop}</p> */}

      </form>
      {/* {final.Username} */}
    </div>
  </>
  );
};
export default Register;
