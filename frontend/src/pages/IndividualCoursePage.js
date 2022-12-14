import { useEffect, useState } from "react";
import React from "react";
import Axios from "axios";
//import "../styles/viewStyle.css";
import "../styles/IndividualCoursePage.css";
import { useNavigate } from "react-router-dom";
import video from "../Media/tv.png";
import eye from "../Media/views.png";

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
        <div className="fullCourse">
          <>
            <h1 key={user} className="title">
              {user.Title}
            </h1>
            <iframe
              className="video"
              width="560"
              height="315"
              src={user.PreviewLink}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p key={user} className="subject">
              Subject: {user.Subject}
            </p>
            <p key={user} className="subtitle">
              Subject: {user.Subtitle}
            </p>
            <p key={user} className="shortsummary">
              {user.Shortsummary}.
            </p>
            <p key={user} className="rating">
              {user.Rating}
            </p>
            <p key={user} className="instructor">
              By: {user.Instructor}
            </p>

            <p key={user} className="hours">
              <img src={video} alt="" className="tv" />
              {user.Hours} hours on-demand video
            </p>
            <p key={user} className="views">
              <img src={eye} alt="" className="eye" />
              {user.Views} Views
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
