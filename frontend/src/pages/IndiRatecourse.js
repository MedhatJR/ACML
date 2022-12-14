import React from "react";
import { useEffect, useState } from "react";

import Axios from "axios";
import "../styles/InstructorPageStyle.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
import teacher from "../Media/teacher.png";
import "../styles/Star.css";

const IndiRatecourse = () => {
    var [rating, setRating] = useState(0);
    var [hover, setHover] = useState(0);
    var [final, setFinal] = useState("");
    const nav = useNavigate();

    const Rate = () => {
        console.log("Hi");
        Axios.post("http://localhost:8000/Individual_rateCourse", {
            Name: document.getElementById("name").value,
            Rating: rating,
        }).then(
            (response) => {
                setFinal = response.data;
            }
        );
    };
console.log(rating);
return (
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
        <form className="form">
            <label>Name of the Course</label>
            <input type="email" name="Email" id="email" /> <br />
        </form>
        <br />
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                if (index <= 5) {
                    return (
                        <button
                            type="button"
                            key={index}
                            className={index <= (hover || rating) ? "on" : "off"}
                            onClick={() => setRating(index + 1)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
                        >
                            <span className="star">&#9733;</span>
                        </button>
                    );
                }
            })}
        </div>
        <br />
        <button class="button-17" role="button" onClick={Rate}>
            Submit Rating
        </button>
    </div>
);
};


export default IndiRatecourse ;
