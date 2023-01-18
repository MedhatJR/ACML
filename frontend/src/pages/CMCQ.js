import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import "../styles/register.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
var arr2=[];
const CMCQ = () => {
  const location = useLocation();
  var isClickedTitle = location.state.isClickedTitle;

    const [users, setData] = useState("");
    const [exam, getExam] = useState("");
    const [userGrade, setGrade] = useState("");
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
    // const getGrade = () => {
    
    //   Axios.post("http://localhost:8000/Coporate_Grade", { _id: arr2 }).then(
    //     (response) => {
    //       // answer = response.data;
    //       console.log(response.data);
    //       setGrade(response.data);
    //       //console.log(userData);
    //     })
    
    // };
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
              setData(response.data);

          });

};
    const back = () => {
      nav("/");
    };
    const Yourgrade = () => {
      nav("/CoporateGradeAndAnswers");
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

        {/* <button onClick={getResult} className="btn">
          Get Grade
        </button> */}
      

      {arr2.map((user)=>(
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


       <button onClick={SubmitAnswers1}>Submit Answers</button>
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

export default CMCQ;