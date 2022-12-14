import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
import "../styles/register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [final, setFinal] = useState("");
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
      Ge8nder: Gender,
    }).then((response) => {
      // console.log(response);
      // console.log("Okay");
      this.setFinal(response.data);
    });
  };
  const forward = () => {
    nav("/view");
  };

  return (
    <div className="Register">
      <button onClick={forward}>Forward</button>
      <h1>Please Register</h1>
      <form className="form">
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
        <button onClick={addData}>Submit</button>
      </form>
      {/* {final.Username} */}
    </div>
  );
};
export default Register;
