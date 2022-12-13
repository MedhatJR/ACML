

import React, { useEffect, useState } from "react";
import Axios from "axios";
//import { Routes, Route, useNavigate, renderMatches } from 'react-router-dom';
import "../styles/InstructorPageStyle.css";

var data;
var array = [];
 //const [userData, setData] = useState("  ");
 const getUser = () => {
    const id = document.getElementById("id").value;
    console.log("Hello" + document.getElementById("id").value);
    const json = JSON.stringify({id:id});
    
    Axios.post("http://localhost:8000/Individual_QuestionAnswers",{id:"63989174cea7ecdc576346ca"}).then(
    (response) => {
        console.log(response.data);
      

        const div = document.getElementsByClassName("return");
        const ret = document.createElement("p");
        ret.textContent = "response.data";
        div.textContent = ret;
        console.log(array);
    })
};

  const Individual_GradeAndAnswers = () => {
  

   
  return (
   <form>
    <h1>Hi</h1>

   <label>
   Exam ID:
   <input type="text" name="id" id="id"/>
   </label>
   <div>
    <button  >Get Your Grade</button>

    <br />
    <button onClick={getUser}>Check Your Answers</button>
    
<div className = "return" >
<p> Test</p>
{array}

    </ div>

    </div>
   </form>
        );
      }
export default Individual_GradeAndAnswers;