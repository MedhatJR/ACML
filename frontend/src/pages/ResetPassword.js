import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
import "../styles/register.css";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
    return (
        <div className="ResetPassword">
          
          <h1>Reset Your Password</h1>
          <form className="form">

            <label>New Password</label>
            <input type="Newpassword" name="Newpassword" id="Newpassword" /> <br />
            {/* onClick={updateemail} */}
            <button > Reset </button>
          </form>
          {/* {final.Username} */}
        </div>
      );
    };
    export default ResetPassword;