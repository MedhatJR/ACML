import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
//import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
import { Link } from "react-router-dom";
// import CorporateTrainee from "../../../Backend/src/Models/CorporateTrainee";
// import IndividualTrainee from "../../../Backend/src/Models/IndividualTrainee";
// import Instructor from "../../../Backend/src/Models/Instructor";
// import Adminstrator from "../../../Backend/src/Models/Adminstrator";
//import setAuthToken from "../Controllers/setAuthToken";
//import PropTypes from 'prop-types';   
import { validEmail, validPassword } from '../regex.js';

// async function loginUser(credentials) {
//   return fetch('http://localhost:8000/Corporate_Login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(credentials)
//   })
//     .then(data => data.json())
//  }

const LogIn = () => {
  var [final, setFinal] = useState("");
  const nav = useNavigate();
  // var [username, setUserName] = useState();
  // var [password, setPassword] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);

//   const validate = () => {
//     const Email = document.getElementById("email").value;
//     const Password = document.getElementById("pass").value;

//     if (!validEmail.test(email)) {
//        setEmailErr(true);
//     }
//     if (!validPassword.test(password)) {
//        setPwdError(true);
//     }
//  };

  const forward = () => {
    nav("/");
  };
  const corplogin = () => {
    nav("/CorporatePage");
  };
  const indivilogin = () => {
    nav("/IndividualPage");
  };
  const instlogin = () => {
    nav("/InstructorPage");
  };
  const Terms = () => {
    nav("/Terms");
  };


  // async function loginUser(credentials) {
  //   return fetch('http://localhost:8000/Corporate_Login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(credentials)
  //   })
  //     .then(data => data.json())
  //  }

  // const [data, setData] = useState({
  //   Email: '',
  //   Password: ''
  // });
  // const changeHandler = (e) => {
  //   setData({...data, [e.target.name]: e.target.value})
  // }


  const login = () => {
    const C = document.getElementById("Category").value;
    const Email = document.getElementById("email").value;
    const Password = document.getElementById("pass").value;

    console.log("Hi");
    if (C === "CorporateTrainee") {
      Axios.post("http://localhost:8000/Corporate_Login", {
        Email: Email,
        Password: Password,
      }).then((response) => {
        setFinal = response.data;
        nav("/CorporatePage", { state: { Email: Email } });
      });

      console.log(setFinal + "   wronggggg");

     
      //Navigation to the corporate page
    } else if (C === "IndividualTrainee") {
      Axios.post("http://localhost:8000/Individual_Login", {
        Email: Email,
        Password: Password,
      }).then((response) => {
        setFinal = response.data;
        nav("/IndividualPage", { state: { Email: Email } });
      });
      
      //Navigation to the Individual page
    } else if (C === "Instructor") {
      Axios.post("http://localhost:8000/Instructor_Login", {
        Email: Email,
        Password: Password,
      }).then((response) => {
        setFinal = response.data;
        nav("/InstructorPage", { state: { Email: Email } });
        // nav("/Contract", { state: { Email: Email } });
      });
    } else if (C === "Adminstrator") {
      Axios.post("http://localhost:8000/Adminstrator_Login", {
        Email: Email,
        Password: Password,
      }).then((response) => {
        setFinal = response.data;
        nav("/AdminstratorPage");
      });

      
    }
  };

//   const checkUser = () => {
//     const usercheck = CorporateTrainee.find(user => (user.Email === data.username && user.Password === data.Password));
//     if(usercheck) {
//       console.log("Login successful");
//     }else {
//       console.log("Wrong password or username");
//     }
//     // console.log(uname);
//     console.log(usercheck);
//   }


//   useEffect(() => {
// checkUser(users)
//   }, [data.username, data.password])



  const handleSubmit = async e => {
    e.preventDefault();
    // const token = await loginUser({
    //   username,
    //   password
    // });
    // setToken(token);
  }
  return (
    <>
      <div className="add">
        <>
          <nav>

            <img src={logo} className="logo" alt="" />{" "}
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
          </nav>
        </>
        <br />
        <br />
      </div>

      <div className="Register">
        <h1>Please Login</h1>
        <form className="form" onSubmit={(e) => handleSubmit(e)}
        >
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />
           {/* onChange={e => setUserName(e.target.value)} /> */}
           <br />
          <br />
          <br />
          <label>Password</label>
          <input
            type="password" id="pass"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
         />          
         {/* //onChange={e => setPassword(e.target.value)}  */}
           <br />
          <br />
          <br />
          <label> Category </label>
          <input type="text" name="Category" id="Category" /> <br />
          <br />
          <br />
          <button onClick={login}>Log in</button>
          <br />
          <br />
          {emailErr && <p>Your email is invalid</p>}
         {pwdError && <p>Your password is invalid</p>}
          <li>
            <a href="/EnterEmail">Forgot my Password</a>
          </li>
        </form>
        {/* {final.Username} */}
      </div>
    </>
  );
};
// LogIn.propTypes = {
//   setToken: PropTypes.func.isRequired
// };
export default LogIn;
