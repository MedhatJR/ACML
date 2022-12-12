import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
import "../styles/register.css";
import { useNavigate } from "react-router-dom";

const UpdatePassword = () => {
    return (
        <div className="UpdatePassword">
          
          <h1>Update Your Password</h1>
          <form className="form">
            <label>Old Password</label>
            <input type="Oldpassword" name="Oldpassword" id="Oldpassword" /> <br />
            <label>New Password</label>
            <input type="Newpassword" name="Newpassword" id="Newpassword" /> <br />
            {/* onClick={updateemail} */}
            <button >Update</button>
          </form>
          {/* {final.Username} */}
        </div>
      );
    };
    export default UpdatePassword;