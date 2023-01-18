import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import "../styles/register.css";
import { useNavigate, Link, generatePath } from "react-router-dom";
import logo from "../Media/Logo.png";

import { ToastContainer, toast } from "react-toastify";

var pop = "Registration successful";
// const Checkbox = ({ label }) => {
//   const [isChecked, setIsChecked] = useState(false);
//   return (
//     <div className="checkbox-wrapper">
//       <label>
//         <input type="checkbox" checked={isChecked} />
//         <span>{label}</span>
//       </label>
//     </div>
//   );
// };
const Register = () => {
  const Terms = () => {
    nav("/Terms");
  };
  const Checkbox = ({ label }) => {
    return (
      <div className="checkbox-wrapper">
        <label> I hereby agree to the terms and conditions</label>

        <input className="checkbox" type="checkbox" />{label}

      </div>
    );
  };
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
    const type = document.getElementById("type").value;
    var RegisteredCourses = [];
    var Courses = [];
    var Rating = 0;
    var Biography = "";

    if (type === "IndividualTrainee") {
      console.log("ana individual");
      Axios.post("http://localhost:8000/Individual_Register", {
        Username: Username,
        Email: Email,
        Password: Password,
        Country: Country,
        Firstname: Firstname,
        Lastname: Lastname,
        Gender: Gender,
        Wallet: 0,
      }).then((response) => {
        console.log(response.data);
        console.log(response);
        setFinal = response.data;
      });
    } else {
      if (type === "Instructor") {
        console.log("ana instructor");
        Axios.post("http://localhost:8000/Instructor_Register", {
          Username: Username,
          Email: Email,
          Password: Password,
          Country: Country,
          Firstname: Firstname,
          Lastname: Lastname,
          Gender: Gender,
          Wallet: 0,
          //Biography: Biography,
        }).then((response) => {
          console.log(response.data);
          console.log("added fel db");
          setFinal = response.data;
          contract();
        });
      }
    }
  };

  const contract = () => {
    nav("/Contract");
  };
  //JWT------------------
  const generateError = (err) =>
    toast.error(err, {
      position: "bottom-right",
    });
  // const generateError = (err) => toast.error(err, {
  //   position: "bottom-right",
  // });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post(
        "http://localhost:3000/Register",
        { ...values },
        {
          withCredentials: true,
        }
      );
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
  const forward2 = () => {
    nav("/Addexam");
  };
  const forward3 = () => {
    nav("/IMCQ");
  };
  const forward4 = () => {
    nav("/CMCQ");
  };
  return (
    <>
      <div className="add" onSubmit={(e) => handleSubmit(e)}>
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
        <label>Type</label>
        <br />
        <input type="text" name="type" id="type" /> <br />
        <br />
        <br />

        <button onClick={Terms}> View terms and conditions
        </button><br />
        <div className="app">
        <br />
        </div>
        <a href="/Terms">I hereby agree to the terms and conditions</a>
        <br />
        <br />
        <button
          onClick={
            addData}
        >


          Submit
        </button>
        {/* <p> {pop}</p> */}
        {/* {final.Username} */}
      </div>

    </>
  );
};
export default Register;
