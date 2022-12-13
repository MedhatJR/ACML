import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
import "../styles/register.css";
import { useNavigate } from "react-router-dom";

const UpdateBiography = () => {
    return (
        <div className="UpdateBiography">
          
          <h1>Update Your Biography</h1>
          <form className="form">
            <label>Old Biography</label>
            <input type="OldBiography" name="OldBiography" id="OldBiography" /> <br />
            <label>New Biography</label>
            <input type="NewBiography" name="NewBiography" id="NewBiography" /> <br />
            {/* onClick={updateemail} */}
            <button >Update</button>
          </form>
          {/* {final.Username} */}
        </div>
      );
    };
    export default UpdateBiography;