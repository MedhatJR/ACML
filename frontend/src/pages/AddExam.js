import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
import "../styles/register.css";
import { useNavigate } from "react-router-dom";
const AddExam = () => {
    const [final, setFinal] = useState("");
    const nav = useNavigate();
    const AddExam = () => {
        const Question1 = document.getElementById("Q1").value;
        const Choice11 = document.getElementById("C11").value;
        const Choice12 = document.getElementById("C12").value;
        const Choice13 = document.getElementById("C13").value;
        const Choice14 = document.getElementById("C14").value;
        const Answer1 = document.getElementById("A1").value;
        const Question2= document.getElementById("Q2").value;
        const Choice21 = document.getElementById("C21").value;
        const Choice22 = document.getElementById("C22").value;
        const Choice23 = document.getElementById("C23").value;
        const Choice24 = document.getElementById("C24").value;
        const Answer2 = document.getElementById("A2").value;
        const Course = document.getElementById("C").value;
        Axios.post("http://localhost:8000/Instructor_create_exams", {
            Question1:Question1,
            Choice11:Choice11,
            Choice12:Choice12,
            Choice13:Choice13,
            Choice14:Choice14,
            Answer1:Answer1,
            Question2:Question2,
            Choice21:Choice21,
            Choice22:Choice22,
            Choice23:Choice23,
            Choice24:Choice24,
            Answer2:Answer2,
            Course:Course,}).then((response) =>{
                this.setFinal(response.data);

            });

};

return(
    <div>
      <h1>Add Your Exam</h1>
      <form className="Exam">
        <label>Question1</label>
        <br />
        <input type="text" name="Question1" id="Q1" /> <br />
        <label>Choice11</label>
        <br />
        <input type="text" name="Choice11" id="C11" /> <br />
        <label>Choice12</label>
        <br />
        <input type="text" name="Choice12" id="C12" /> <br />
        <label>Choice13</label>
        <br />
        <input type="text" name="Choice13" id="C13" /> <br />
        <label>Choice14</label>
        <br />
        <input type="text" name="Choice14" id="C14" /> <br />
        <label>Answer1</label>
        <br />
        <input type="text" name="Answer1" id="A1" /> <br />
        <label>Question2</label>
        <br />
        <input type="text" name="Question2" id="Q2" /> <br />
        <label>Choice21</label>
        <br />
        <input type="text" name="Choice21" id="C21" /> <br />
        <label>Choice22</label>
        <br />
        <input type="text" name="Choice22" id="C22" /> <br />
        <label>Choice23</label>
        <br />
        <input type="text" name="Choice23" id="C23" /> <br />
        <label>Choice24</label>
        <br />
        <input type="text" name="Choice24" id="C24" /> <br />
        <label>Answer2</label>
        <br />
        <input type="text" name="Answer2" id="A2" /> <br />
        <label>Course</label>
        <br />
        <input type="text" name="Course" id="C" /> <br />
        <button onClick={AddExam}>Add Exam</button>
        
      </form>
    </div>





);

}
export default AddExam;