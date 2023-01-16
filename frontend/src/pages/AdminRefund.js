import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
import "../styles/InstructorPageStyle.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
import teacher from "../Media/teacher.png";

const AdminRefund = () => {
  var [final, setFinal] = useState("");
  const nav = useNavigate();
  console.log("Hi");

  const Add = () => {
    const Email = document.getElementById("Email").value;
    const amount = document.getElementById("Amount").value;  
    const Category = document.getElementById("Category").value;  
    Axios.post("http://localhost:8000/Adminstrator_Refund", {
        Email: Email,
        amount: amount,
        Category: Category,
      }).then((response) => {
        setFinal=response.data;
        
      });
      nav("/AdminstratorPage");

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
      <div className="title">Refund Money to a trainee</div>
      <br />
      <br />
      <label>Email of the trainee</label>
        <input type="Email" name="Email" id="Email" /> <br />
        <br />
        <br />
        <label>Amount</label>
        <input type="text" name="Amount" id="Amount" /> <br />
        <br />
        <br />
        <label>Category</label>
        <input type="text" name="Category" id="Category" /> <br />
        <br />
        <br />
      <button class="button-17" role="button" onClick={Add}>
        Add Promotion
      </button>
      <br />
      <br />
    </div>
  );
};

export default AdminRefund;
