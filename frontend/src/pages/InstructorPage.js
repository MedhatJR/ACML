import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
import "../styles/InstructorPageStyle.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";

const InstructorPage = () => {
    
    const [final, setFinal] = useState("");
    const nav = useNavigate();
    console.log("Hi");

    const viewCourseRating =()=>{
        console.log("Hi");
        Axios.post("http://localhost:8000/instructor_viewCourseRatings").then((response) => {
          this.setFinal(response.data);
        });
    }
    const viewMyRating =()=>{
        console.log("Hi");
        Axios.post("http://localhost:8000/instructor_viewRatings").then((response) => {
          this.setFinal(response.data);
        });
    }
    const forwardAdd = () => {
        nav("/AddCourse");
      };
      const forwardView = () => {
        nav("/InstructorViewCourse");
      };


    return (
        <div className="add">
            <>
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
            </>
            <br/>
            <br/>
            <button class="button-17" role="button" onClick={viewCourseRating}>View Course Ratings</button>
            <br/>
            <br/>
            <button class="button-17" role="button" onClick={viewMyRating}>View My Ratings</button>
            <br/>
            <br/>
            <button class="button-17" role="button" onClick={forwardAdd}>Add Course</button>
            <br/>
            <br/>
            <button class="button-17" role="button" onClick={forwardView}>View Course</button>

        </div>

    );

};



export default InstructorPage;