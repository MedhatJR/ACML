import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
//import "../styles/register.css";
import "../styles/main.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
const Terms = () => {
    
    

    return(<>
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
        <div>
            <h1>Terms</h1>
            <div>
                <p>by agreeing to the website policy and terms of use :
                    <h2>You aren't allowed to:</h2>
                    <p>Do anything that violates local, state, national, or international law or breaches any of your contractual obligations or fiduciary duties.</p>
                    <p>Share your password, let anyone besides yourself access your account, or do anything that might put your account at risk.</p>
                    <p>Reproduce, transfer, sell, resell, or otherwise misuse any content from our Services, unless specifically authorized to do so.</p>
                    <h2>Refund policy:</h2>
                    <p>Refund for individual trainees  is only acceptable if you attend less than 50% of the course </p>
                    <p>If the refund request is accepted the payment will be refunded to your walllet</p>
                    <h2>Payment policy:</h2>
                    <p>Mafish feloos Mafish Deroos</p>

 









                    
                </p>
            </div>
            
            
            
        </div>
        </>
    );
};
export default Terms;