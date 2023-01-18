import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import "../styles/register.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

var arr1=[];
const IMCQ = () => {
  const location = useLocation();
  const passedEmail = location.state.passedEmail;
  var isClickedTitle = location.state.isClickedTitle;
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
    const Yourgrade = () => {
      nav("/IndividualGradeAndAnswers");
    };
    const SubmitAnswers = () => {
      const Question1 = document.getElementById("QA1").value;
      const Answer1 = document.getElementById("AA1").value;
      const Question2= document.getElementById("QA2").value;
      const Answer2 = document.getElementById("AA2").value
      Axios.post("http://localhost:8000/Individual_submitAnswer", {
          Question1:Question1,
          Answer1:Answer1,
          Question2:Question2,
          Answer2:Answer2,
          }).then((response) =>{
              this.setFinal(response.data);

          });
          

};
  
    return (
      <div>
        
        <h1>Click to view Exam</h1>
  
        <br />
        <button onClick={getExam} className="btn">
          Get Exam
        </button>

        {arr1.map((user)=>(
            <>{user.Course == isClickedTitle ?
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
       <input type="text" name="Choice23" id="QA1" /> <br />
        <label>Answer1</label>
        <br />
        <input type="text" name="Choice24" id="AA1" /> <br />
        <label>Question2</label>
        <br />
        <input type="text" name="Answer2" id="QA2" /> <br />
        <label>Answer2</label>
        <br />
        <input type="text" name="Course" id="AA2" /> <br />
        <br />


       <button onClick={SubmitAnswers}>Submit Answers</button>
       <button onClick={Yourgrade} className="btn">
          Get Grade
        </button>
      
       <br />
       <h1>مع اطيب التمنيات بالنجاح و التوفيق</h1>
       </>
             : null}
        </>
        ))}
             
             
      </div>
    );
  };

export default IMCQ