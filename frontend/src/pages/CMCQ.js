import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import "../styles/register.css";
import { useNavigate } from "react-router-dom";
var arr2=[];
const CMCQ = () => {
    const [users, setData] = useState("");
    const nav = useNavigate();
    const getExam1 = () => {
      
            Axios.get("http://localhost:8000/Corporate_view_exam").then(
        (response) => {
            setData(response);
            console.log(response);
            arr2 = response.data;
    
            setData(arr2);
            console.log(arr2);
        }
      );
    };
    const SubmitAnswers1 = () => {
      const Question1 = document.getElementById("QAC1").value;
      const Answer1 = document.getElementById("AAC1").value;
      const Question2= document.getElementById("QAC2").value;
      const Answer2 = document.getElementById("AAC2").value
      Axios.post("http://localhost:8000/Corporate_submitAnswer", {
          Question1:Question1,
          Answer1:Answer1,
          Question2:Question2,
          Answer2:Answer2,
          }).then((response) =>{
              this.setFinal(response.data);

          });

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
        <button onClick={getExam1} className="btn">
          Get Exam
        </button>

        {arr2.map((user)=>(
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
       <h1>Add Your Answers</h1>
       <label>Question1</label>
       <br />
       <input type="text" name="Choice23" id="QAC1" /> <br />
        <label>Answer1</label>
        <br />
        <input type="text" name="Choice24" id="AAC1" /> <br />
        <label>Question2</label>
        <br />
        <input type="text" name="Answer2" id="QAC2" /> <br />
        <label>Answer2</label>
        <br />
        <input type="text" name="Course" id="AAC2" /> <br />


       <button onClick={SubmitAnswers1}>Submit Answers</button>
       <h1>مع اطيب التمنيات بالنجاح و التوفيق</h1>
       </>
        ))}
             
             
      </div>
    );
  };

export default CMCQ