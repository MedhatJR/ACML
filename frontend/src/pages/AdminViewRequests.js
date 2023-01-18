import { useEffect, useState } from "react";
import React from "react";
import Axios from "axios";
//import "../styles/viewStyle.css";
import "../styles/IndividualViewMyCourses.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
import LogIn from "./LogIn";
//import "../styles/Star.css";
import { useLocation } from "react-router-dom";

var arr = [];
var passed_id = "";

// var id = "";

const AdminViewRequests = () => {
  //const passedEmail = location.state.passedEmail;
  const [users, setData] = useState("");
  const nav = useNavigate();
  console.log("dshsfxh");
  const back = () => {
    nav("/AdminstratorPage");
  };




  // nav("/IndividualCoursePage", { state: { passedEmail: passedEmail } });
  Axios.get("http://localhost:8000/view_requests", {
  }).then((response) => {
   // console.log(response);
    arr = response.data;
    setData(response);
  });

  const buttonPressed = (e) => {
    passed_id = e.target.id; // Get ID of Clicked Element
    console.log(passed_id);
  };

  function reply_click(clicked_id) {
    const buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
      button.addEventListener("click", buttonPressed);
    }
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]._id === passed_id) {
        
        Axios.post("http://localhost:8000/accept_requests", {
            _id : passed_id
        }).then((response) => {
         // console.log(response);
          arr = response.data;
          setData(response);
        });

      }
    }
  }

  function reply_click1(clicked_id) {
    const buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
      button.addEventListener("click", buttonPressed);
    }
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]._id === passed_id) {
       

        Axios.post("http://localhost:8000/reject_requests", {
            _id : passed_id
        }).then((response) => {
         // console.log(response);
          arr = response.data;
          setData(response);
        });



      }
    }
  }

  return (
    <div className="IndividualViewCourse">
      <nav>
        <img src={logo} className="logo" alt="" />{" "}
        <ul>
          <li>
            <a href="">Home</a>
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

      <br />
      <button className="button-17"  onClick={back}>Back  </button>
      <br />
      <br />
      {arr.map((user) => (
        //id  = user.Title
        <div className="MyCourserequest">
          <>
            <h1 key={user} className="Emailrequest">
             Email : {user.Email}
            </h1>
            <p key={user} className="Courserequest">
             Course :  {user.Course}
            </p>
            <p key={user} className="Statusrequest">
             Status : {user.Status}
            </p>
              <div > <button className="Accept"  id={user._id} onClick={reply_click}>
               Accept </button></div>
               <div > <button className="Reject" id={user._id} onClick={reply_click1}> Reject  </button></div>
          </>
          
        </div>
      ))}

      {/* <div>{location.state.passedEmail}</div> */}
    </div>
  );
};

export default AdminViewRequests;
