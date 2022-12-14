import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
import "../styles/register.css";
import { useNavigate } from "react-router-dom";

const UpdateEmail = () => {
    return (
        <div className="UpdateEmail">
          
          <h1>Change Your Email</h1>
          <form className="form">
            <label>Old Email</label>
            <input type="Oldemail" name="Oldemail" id="Oldemail" /> <br />
            <label>New Email</label>
            <input type="NewEmail" name="NewEmail" id="NewEmail" /> <br />
            {/* onClick={updateemail} */}
            <button >Update</button>
          </form>
          {/* {final.Username} */}
        </div>
      );
    };
    export default UpdateEmail;