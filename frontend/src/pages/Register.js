import React from "react";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Axios from "axios";
import "../styles/register.css";
import { useNavigate, Link, generatePath } from "react-router-dom";
import logo from "../Media/Logo.png";
var pop = "Registration successful"

const Register = () => {
  const [values, setValues] = useState({
    Email: "",
    Passwor: "",
  });
  var [final, setFinal] = useState("");
  const nav = useNavigate();
  const addData = () => {
    const Username = document.getElementById("user").value;
    const Email = document.getElementById("email").value;
    const Password = document.getElementById("pass").value;
    const Country = document.getElementById("cou").value;
    const Firstname = document.getElementById("fn").value;
    const Lastname = document.getElementById("ln").value;
    const Gender = document.getElementById("g").value;

    console.log("Hi2");
    Axios.post("http://localhost:8000/createCorporateUser",  
    {Username: Username,
    Email: Email,
    Password: Password,
    Country: Country,
    Firstname: Firstname,
    Lastname: Lastname,
    Gender: Gender,}).then((response) => {

    console.log(response.data);
    
      setFinal = response.data;

    });

  };
  const forward = () => {
    nav("/");
  };
  const contract = () => {
    nav("/Contract");
  };
  //JWT------------------
  const generateError = (err) => toast.error(err, {
    position: "bottom-right",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post("http://localhost:3000/Register",
        { ...values, }, {
        withCredentials: true,
      });
      console.log(data);
      if (data) {
        // if (data.errors) {
        //   const { Email, Password } = data.errors;
        //   if (Email) generateError(Email);
        //   else if (Password) generateError(Password);
        // }
        // else {

        // }
      }
    } catch (err) {
      console.log(err);
    }
  };

  //------------------------------------
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
          console.log("Registered!!!");
          contract();
        }} >Submit</button>

        {/* <p> {pop}</p> */}

      </form>
      {/* {final.Username} */}
    </div>
  </>
  );
};
export default Register;
