import { useEffect, useState } from "react";
import React from "react";
import Axios from "axios";
//import "../styles/viewStyle.css";
//import "../styles/IndividualViewMyCourses.css";
import { useNavigate } from "react-router-dom";

var array = [];

const IndividualViewMyCourses = () => {
  // console.log(wantedtitle[0]);
  //   console.log(array);

  const [users, setData] = useState("");
  const nav = useNavigate();

  //   const back = () => {
  //     nav("/");
  //   };

  const viewMyCourses = () => {
    const Username = document.getElementById("user").value;
    const myCourse = document.getElementById("course").value;
    Axios.post("http://localhost:8000/Individual_retrieveMyCourseData", {
      Username: Username,
      myCourse: myCourse,
    }).then((response) => {
      console.log(response);
      console.log(Username);
      array = response.data.CourseDetails;

      setData(response);

      // setData(response.data[1].Title);
    });
  };

  return (
    <div className="IndividualViewCourse">
      <label>Username</label>
      <br />
      <input type="text" id="user" />

      <label>Course</label>
      <input type="text" id="course" />
      <br />
      <button onClick={viewMyCourses}>View</button>

      {array.map((user) => (
        <div className="courseSection">
          <>
            <p key={user}>{user.Title}</p>
            <p key={user}> Subject: {user.Subject}</p>
            <p key={user}>{user.Shortsummary}</p>
            <p key={user}>{user.Rating}</p>
            <p key={user}>{user.Instructor}</p>
            <p key={user}>{user.Rating}</p>
            <p key={user}>{user.Hours}</p>
            <p key={user}>{user.Views}</p>
            <p key={user}>{user.PreviewLink}</p>
            <p key={user}>{user.SubLink}</p>
          
          </>
        </div>
      ))}
    </div>
  );
};

export default IndividualViewMyCourses;
