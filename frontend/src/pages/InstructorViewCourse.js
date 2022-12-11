import { useEffect, useState } from "react";
import React from "react";
import Axios from "axios";
//import "../styles/viewStyle.css";
import { useNavigate } from "react-router-dom";
var arr = [];

const InstructorViewCourse = () => {
  const Instructor = document.getElementById("Iname").value;
  const [users, setData] = useState("");
  const nav = useNavigate();
  // const viewCourses = () => {
  //   Axios.get("http://localhost:8000/instructor_viewMyCourses", {
  //     Instructor: Instructor,
  //   }).then((response) => {
  //     console.log(response);
  //     arr = response.data;
  //     setData(response);

  //     // setData(response.data[1].Title);
  //   });
  // };
  const back = () => {
    nav("/");
  };
  // Axios.get("http://localhost:8000/instructor_viewMyCourses", {
  //   Instructor: Instructor,
  // }).then((response) => {
  //   console.log(response);
  //   arr = response.data;
  //   setData(response);

  //   // setData(response.data[1].Title);
  // });

  return (
    <div className="InstructorViewCourse">
      <h1>w</h1>
      {/* <button onClick={back} className="btn">
        {" "}
        back
      </button>
      <h1>Click to view Data</h1>

      <br />
      <button className="btn">Get Data</button>
      <br />
      <table>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Password</th>
          <th>Country</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Gender</th>
        </tr>
        {arr.map((user) => (
          <tr>
            <>
              <td key={user}>{user.Username}</td>
              <td key={user}> {user.Email}</td>
              <td key={user}>{user.Password}</td>
              <td key={user}>{user.Country}</td>
              <td key={user}>{user.Firstname}</td>
              <td key={user}>{user.Lastname}</td>
              <td key={user}>{user.Gender}</td>
            </>
            ;
          </tr>
        ))}
        ;
      </table> */}
    </div>
  );
};

export default InstructorViewCourse;
