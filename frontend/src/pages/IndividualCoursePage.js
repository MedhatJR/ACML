import { useEffect, useState } from "react";
import React from "react";
import Axios from "axios";
//import "../styles/viewStyle.css";
import "../styles/IndividualCoursePage.css";
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
        <div className="MyCourse">
          <>
            <h1 key={user} id="title">
              {user.Title}
            </h1>
            <iframe
              width="560"
              height="315"
              src={user.PreviewLink}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p key={user} id="subject">
              Subject: {user.Subject}
            </p>
            <p key={user} id="shortsummary">
              {user.Shortsummary}
            </p>
            <p key={user} id="rating">
              {user.Rating}
            </p>
            <p key={user} id="instructor">
              {user.Instructor}
            </p>
            <p key={user} id="rating">
              {user.Rating}
            </p>
            <p key={user} id="hours">
              {user.Hours}
            </p>
            <p key={user} id="views">
              {user.Views}
            </p>
            {/* <p key={user}>{user.PreviewLink}</p> */}
            <p key={user}>{user.SubLink}</p>
            {/* <p key={user}>{user.Promotion}</p>
            <p key={user}>{user.Promotion_valid_for}</p> */}
          </>
        </div>
      ))}
    </div>
  );
};

export default IndividualViewMyCourses;
