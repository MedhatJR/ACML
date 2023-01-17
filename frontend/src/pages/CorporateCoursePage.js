import { useEffect, useState } from "react";
import React from "react";
import Axios from "axios";
//import "../styles/viewStyle.css";
import "../styles/IndividualCoursePage.css";
import { useNavigate } from "react-router-dom";
import video from "../Media/tv.png";
import eye from "../Media/views.png";
import { useLocation } from "react-router-dom";
import Notes from "./Notes";

var array = [];

const CorporateViewMyCourses = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  // console.log(wantedtitle[0]);
  //   console.log(array);
  const location = useLocation();
  const passedEmail = location.state.passedEmail;
  var isClickedTitle = location.state.isClickedTitle;
  const [users, setData] = useState("");
  const nav = useNavigate();

  //   const back = () => {
  //     nav("/");
  //   };

  const GetExam = () => {
    nav("/CMCQ");
  };
  Axios.post("http://localhost:8000/Corporate_retrieveMyCourseData", {
    Email: passedEmail,
    myCourse: isClickedTitle,
  }).then((response) => {
    console.log(response);

    array = response.data.CourseDetails;

    setData(response);

    // setData(response.data[1].Title);
  });

  return (
    <div className="IndividualViewCourse">
      <div>
        <Notes />
      </div>
      {/* <div>
      <p> You completed {count}% of the course    
       <button onClick={() => setCount(count *30)}>
            Click after watching the video
          </button></p>
      
    </div> */}
      <div>
        You finished {count}% of the course.
        <button onClick={() => setCount(count + 30)}>
          Click after watching the video
        </button>
      </div>
      {/* <button onClick={viewMyCourses}>View</button> */}

      {array.map((user) => (
        <div className="fullCourse">
          <h1 key={user} className="title">
            {user.Title}
          </h1>

          <iframe
            className="videoPreview"
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
            {user.Subtitle}
          </p>
          <p key={user} className="subtitle1">
            {user.Subtitle1}
          </p>
          <p key={user} className="subtitle2">
            {user.Subtitle2}
          </p>
          <p key={user} className="shortsummary">
            {user.Shortsummary}.
          </p>
          <p key={user} className="rating">
            {user.Rating} ⭐'s
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
          <iframe
            className="videoSub"
            width="560"
            height="315"
            src={user.SubLink}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            className="videoSub1"
            width="560"
            height="315"
            src={user.SubLink1}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            className="videoSub2"
            width="560"
            height="315"
            src={user.SubLink2}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          {/* <p key={user}>{user.Promotion}</p>
            <p key={user}>{user.Promotion_valid_for}</p> */}
        </div>
      ))}

      <div>{location.state.Email}</div>
    </div>
  );
};

export default CorporateViewMyCourses;
