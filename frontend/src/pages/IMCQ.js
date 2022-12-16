import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import "../styles/register.css";
import { useNavigate } from "react-router-dom";
var arr1=[];
const IMCQ = () => {
    const [users, setData] = useState("");
    const nav = useNavigate();
    const getExam = () => {
      
            Axios.get("http://localhost:8000/Individual_view_exam").then(
        (response) => {
            setData(response);
            console.log(response);
            arr1 = response.data;
    
            setData(arr1);
            console.log(arr1);
        }
      );
    };
    const back = () => {
      nav("/");
    };
  
    return (
      <div>
        <button onClick={back} className="btn">
          {" "}
          back
        </button>
        <h1>Click to view Exam</h1>
  
        <br />
        <button onClick={getExam} className="btn">
          Get Exam
        </button>

        {arr1.map((user)=>(
            <>
        <h1>Course:{user.Course}</h1>
       <h1>Question1:{user.Question1}</h1> 
       <h4>Choice11:{user.Choice11}</h4> 
       <h4>Choice12:{user.Choice12}</h4>
       <h4>Choice13:{user.Choice13}</h4>
       <h4>Choice14:{user.Choice14}</h4>
       <h1>Question2:{user.Question2}</h1> 
       <h4>Choice21:{user.Choice21}</h4> 
       <h4>Choice22:{user.Choice22}</h4>
       <h4>Choice23:{user.Choice23}</h4>
       <h4>Choice24:{user.Choice24}</h4>
       
       </>
        ))}
             
             
      </div>
    );
  };

export default IMCQ