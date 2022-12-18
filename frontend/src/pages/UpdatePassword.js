import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
import "../styles/register.css";
import { useNavigate } from "react-router-dom";

const UpdatePassword = () => {
   
     const change = () => {
      const Old = document.getElementById("Oldpassword").value
      const New = document.getElementById("Newpassword").value
      console.log(Old)
      //nav("/UpdatePassword");
      console.log("Hi");
      Axios.post("http://localhost:8000/Instructor_ChangePassword" ,{
        OldPassword : Old ,
        NewPassword : New,
      }).then(
        (response) => {
          console.log("hi")
         // this.setFinal(response.data);
        }
      );
     };

    //  const UpdateBiography = () => {
   
    //   const change = () => {
    //    const Old = document.getElementById("Oldpassword").value
    //    const New = document.getElementById("Newpassword").value
    //    console.log(Old)
    //    //nav("/UpdatePassword");
    //    console.log("Hi");
    //    Axios.post("http://localhost:8000/Instructor_ChangePassword" ,{
    //      OldPassword : Old ,
    //      NewPassword : New,
    //    }).then(
    //      (response) => {
    //        this.setFinal(response.data);
    //      }
    //    );
    //   };

    return (
        <div className="UpdatePassword">
          
          <h1>Update Your Password</h1>
          <form className="form">
            <label>Old Password</label>
            <input type="text" name="Oldpassword" id="Oldpassword" /> <br />
            <br/>
            <br/>
            <label>New Password</label>
            <input type="text" name="Newpassword" id="Newpassword" /> <br />
            <br/>
            <br/>
            {/* onClick={change} */}
            <button onClick={change}>Update</button>
          </form>
          {/* {final.Username} */}
        </div>
      );
    };
    export default UpdatePassword;