import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
import "../styles/register.css";
import { useNavigate } from "react-router-dom";

const UpdateBiography = () => {
  var [final, setFinal] = useState("");
  const updatebio = () => {
//nav("/UpdatePassword");

// console.log("Hi", x);
Axios.post("http://localhost:8000/Instructor_editbiography" ,{
  Email : document.getElementById("Email").value,
  Biography :document.getElementById("NewBiography").value,
}).then(
  (response) => {
    console.log(response)
    setFinal(response.data);
  }
);
   };
      // const change = () => {
      //   const Old = document.getElementById("Oldpassword").value
      //   const New = document.getElementById("Newpassword").value
      //   console.log(Old)
      //   //nav("/UpdatePassword");
      //   console.log("Hi");
      //   Axios.post("http://localhost:8000/Instructor_ChangePassword" ,{
      //     OldPassword : Old ,
      //     NewPassword : New,
      //   }).then(
      //     (response) => {
      //       this.setFinal(response.data);
      //     }
      //   );
      //  };


    return (
        <div className="UpdateBiography">
          
          <h1>Update Your Biography</h1>
          <form className="form">
            <label> Enter Your Email</label>
            <input type="text" name="Email" id="Email" /> <br />
            <br/>
            <br/>
            <label>New Biography</label>
            <input type="text" name="NewBiography" id="NewBiography" /> <br />
            {/* onClick={updateemail} */}
            <br/>
            <br/>
            <button onClick={updatebio}>Update</button>
          </form>
          {/* {final.Username} */}
        </div>
      );
    };
    export default UpdateBiography;