import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Axios from "axios";
//import "../styles/register.css";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Logo.png";
import student from "../Media/Learning.jpg";
import { useLocation } from "react-router-dom";
// import "./Dropdown.css";
// const category = "CorporateTrainee"
var arr = [];
const PrevProblems = () => {
    var [final, setFinal] = useState("");
    const location = useLocation();
    const passedEmail = location.state.passedEmail;
    const passedCategory = location.state.Category;
    //const status = "unseen"
    console.log(passedEmail);
    console.log(passedCategory);

    //console.log(passedCategory);

    //   const ALLreports = () => {
    console.log("ama")
    //console.log("Hi");
    if (passedCategory === "CorporateTrainee") {
        Axios.post("http://localhost:8000/Corporate_AllProblems", {
            Email: passedEmail,
            Category: passedCategory,
        }).then((response) => {
            console.log(response);
            arr = response.data;
            console.log(arr);
            setFinal(response);

            // setData(response.data[1].Title);
        });
        console.log("ewgeron")
    }
    else if (passedCategory === "IndividualTrainee") {
        Axios.post("http://localhost:8000/Individual_AllProblems", {
            Email: passedEmail,
            Category: passedCategory,
        }).then((response) => {
            console.log(response);
            arr = response.data;
            console.log(arr);
            setFinal(response);

            // setData(response.data[1].Title);
        });
        console.log("ewgeron")
    }
    else {
        if (passedCategory === "Instructor") {
            Axios.post("http://localhost:8000/Instructor_AllProblems", {
                Email: passedEmail,
                Category: passedCategory,
            }).then((response) => {
                console.log(response);
                arr = response.data;
                console.log(arr);
                setFinal(response);

                // setData(response.data[1].Title);
            });
            console.log("ewgeron")
        }
    }

    const followUp = () => {
        if (passedCategory == "CorporateTrainee") {
            Axios.post("http://localhost:8000/Corporate_FollowUP", {
            }).then((response) => {

                setFinal(response);
            });
            console.log("Hi");
        }
        else if (passedCategory == "IndividualTrainee") {
            Axios.post("http://localhost:8000/Individual_FollowUP", {
            }).then((response) => {

                setFinal(response);
            });
            console.log("Hi");
        }
        else {
            if (passedCategory == "Instructor") {
                Axios.post("http://localhost:8000/Instructor_FollowUP", {
                }).then((response) => {

                    setFinal(response);
                });
                console.log("Hi");
            }
        }
    }



    return (
        <div className="IndividualViewCourse">

            <h1 class="report">All Previously Reported Problems</h1>

            {arr.map((user) => (
                <div className="MyCourse">
                    <>
                        <h1 key={user} className="Description">
                            Description: {user.Description}
                        </h1>
                        <p key={user} className="Type">
                            Type: {user.Type}
                        </p>
                        <p key={user} className="Course">
                            Course:{user.Course}
                        </p>
                        <p key={user} className="Status">
                            Status:
                            {user.Status}
                        </p>

                        {user.Status == 'Unseen' || user.Status == 'seen' || user.Status == 'pending'? <button className="button-17" onClick={followUp}>
                            Follow-up this Problem!
                        </button> : null}
                    </>
                </div>
            ))}
        </div>


    );

}
export default PrevProblems;