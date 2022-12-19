import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
import "../styles/register.css";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [users, setData] = useState("");
  const nav = useNavigate();
  const reset = () => {
    Axios.post("http://localhost:8000/Individual_ForgotPassword",{
      Username : document.getElementById("Username").value ,
      NewPassword : document.getElementById("Newpassword").value ,
      CNewPassword : document.getElementById("Confirm").value ,

    }).then(
      (response) => {
        
       setData(response.data);

      }
    );
  };

    return (
        <div className="ResetPassword">
          
          <h1>Reset Your Password</h1>
          <form className="form">
          <br></br>
            <br></br>
            <label>Username</label>
            <input type="text" name="Username" id="Username" /> <br />
            <br></br>
            <br></br>
            <label>New Password</label>
            <input type="password" name="Newpassword" id="Newpassword" /> <br />
            <br></br>
            <br></br>
            <label>Confirm Password</label>
            <input type="password" name="Confirm" id="Confirm" /> <br />
            <br></br>
            <br></br>
            {/* onClick={updateemail} */}
            <button onClick={reset} > Reset </button>
          </form>
          {/* {final.Username} */}
        </div>
      );
    };
    export default ResetPassword;