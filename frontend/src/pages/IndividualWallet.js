import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
import "../styles/InstructorPageStyle.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
import teacher from "../Media/teacher.png";
import { useLocation } from "react-router-dom";

const IndividualWallet = () => {
  const location = useLocation();
  const passedEmail = location.state.passedEmail;
  const [data, setData] = useState("");
  const nav = useNavigate();
  console.log("Hi");

  Axios.post("http://localhost:8000/Individual_Wallet", {
    Email: passedEmail,
  }).then((response) => {
    console.log(response);
    
    setData(response.data[0].Wallet);
  });
  
  
  return (
    <div className="add">
      <>
        <nav>
          <img src={logo} className="logo" alt="" />{" "}
          <ul>
            <li>
              <a href="">Home</a>
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
      <div>Your Wallet has
        <div>
        {data}$
        </div>
        
      </div>
     
   
      {/* <div>{location.state.Email}</div> */}
    </div>
  );
};

export default IndividualWallet;
