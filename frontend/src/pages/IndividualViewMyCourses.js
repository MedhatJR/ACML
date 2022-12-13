import { useEffect, useState } from "react";
import React from "react";
import Axios from "axios";
//import "../styles/viewStyle.css";
import "../styles/IndividualViewMyCourses.css";
import { useNavigate } from "react-router-dom";
var arr = [];
var arrTitles = [];
var wantedtitle = "";
// var id = "";

const IndividualViewMyCourses = () => {
  const [users, setData] = useState("");
  const nav = useNavigate();

  const viewCourses = () => {
    var Username = document.getElementById("myName").value;
    Axios.post("http://localhost:8000/Individual_retrieveMyCourse", {
      Username: Username,
    }).then((response) => {
      console.log(response);
      arr = response.data.CourseDetails;

      setData(response);

      // setData(response.data[1].Title);
    });
  };

  const back = () => {
    nav("/");
  };

  const go = () => {
    nav("/IndividualCoursePage");
  };

  return (
    <div className="IndividualViewCourse">
      <label>Username</label>
      <input name="myUsername" id="myName" type="text" />
      <br />
      <button onClick={viewCourses} className="button-17">
        View My Courses
      </button>
      <br />
      <br />
      {arr.map((user) => (
        //id  = user.Title
        <div className="MyCourse">
          <>
            <p key={user} className="Title">
              {user.Title}
            </p>
            <p key={user} className="shortsummary">
              {user.Shortsummary}
            </p>
            <p key={user} className="Instructor">
              By:{user.Instructor}
            </p>
            <p key={user} className="subject">
              Subject:
              {user.Subject}
            </p>

            <p key={user} className="Rating">
              Rating:{user.Rating}
            </p>

            <button className="button-17" onClick={go} id={user.Title}>
              Go To Course
            </button>
            <br />
          </>
        </div>
      ))}
    </div>
  );
};

export default IndividualViewMyCourses;
