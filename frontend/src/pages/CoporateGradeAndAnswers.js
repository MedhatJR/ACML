import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Routes, Route, useNavigate } from 'react-router-dom';

var answer ="";
const Coporate_GradeAndAnswers = () => {


  const [userGrade, setGrade] = useState("");
  
  const getGrade = () => {
    
    const _id =  document.getElementById("id").value;
    Axios.post("http://localhost:8000/Coporate_Grade", { _id: _id }).then(
      (response) => {
        // answer = response.data;
        console.log(response.data);
        setGrade(response.data);
        //console.log(userData);
      })

  };
  const [userData, setData] = useState("");
  //console.log("Hello");
  const getUser = () => {
    
    const _id =  document.getElementById("id").value;
    Axios.post("http://localhost:8000/Coporate_QuestionAnswers", { _id: _id }).then(
      (response) => {
        // answer = response.data;
        console.log(response.data);
        setData(response.data);
        //console.log(userData);
      })

  };


  return (
    <div>
    
      <h1>Hi</h1>

      <label>
        Exam ID:
        <input type="text" name="id" id="id" />
      </label>
      <div>
        <button  onClick={getGrade} >Get Your Grade</button>

        <br />
        <button onClick={getUser}>Check Your Answers</button>
        <br></br>
        <p>{userGrade}</p>
        <p>{userData}</p>

        {/* <div className="return" >
        {answer.map((val) => {
          return (<>
              <span>{val}</span>
              </>
          )
        })}


        </ div> */}

      </div>
    
    </div>
  );
}
export default Coporate_GradeAndAnswers;