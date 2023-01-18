import { useEffect, useState } from "react";
import React from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";
// import "./Dropdown.css";
// const category = "CorporateTrainee"

const IndRequest = () => {
    const nav = useNavigate();
  var [final, setFinal] = useState("");
  const location = useLocation();
  const passedEmail = location.state.passedEmail;
  const isClickedTitle = location.state.isClickedTitle;
  const passedcount=location.state.passedcount;
  //const status = "unseen"
  console.log(passedEmail);
  console.log(isClickedTitle);
  console.log(passedcount);
  
  const report = () => {
    console.log("ama")
   if(passedcount < 50){
    Axios.post("http://localhost:8000/Individual_Refund", {
      Email: passedEmail,
      Course: isClickedTitle,
      Status: "pending",
    }).then((response) => {
        
        
      console.log(response);

      setFinal(response);

      // setData(response.data[1].Title);
    });
    console.log("ewgeron")
  }
  
}
  return (
    <div className="ReportProblem">

      <h1 class="report">Request refund</h1>

      <label>Are you sure you want to request access? </label>
      
      <br />
      <br />
    
      <br />
      <br />

      <button onClick={report}>Submit</button>
    </div>

 

  );

};
export default IndRequest;