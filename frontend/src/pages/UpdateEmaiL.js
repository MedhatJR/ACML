import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
import "../styles/register.css";
import { useNavigate } from "react-router-dom";

const Update1 = () => {
  var [final, setFinal] = useState("");
  const update = () => {
    //nav("/UpdatePassword");
    console.log("Hi");
    Axios.post("http://localhost:8000/Instructor_editemail" ,{
      Emailold : document.getElementById("Oldemail").value ,
      Emailnew : document.getElementById("NewEmail").value,
    }).then(
      (response) => {
        console.log()
        setFinal(response.data);
      }
    );
   };
    return (
        <div className="UpdateEmail">
          
          <h1>Change Your Email</h1>
          <form className="form">
            <label>Old Email</label>
            <input type="Oldemail" name="Oldemail" id="Oldemail" /> <br />
            <br />
            <br />
            <label>New Email</label>
            <input type="NewEmail" name="NewEmail" id="NewEmail" /> <br />
            <br />
            <br />
            {/* onClick={updateemail} */}
            <button onClick={update} >Update</button>
          </form>
          {/* {final.Username} */}
        </div>
      );
    };
    export default Update1;