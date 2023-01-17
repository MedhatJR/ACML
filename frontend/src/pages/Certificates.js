import React, { useEffect, useState,Component } from "react";
import Axios from "axios";
import { Routes, Route, useNavigate } from 'react-router-dom';
import "../styles/InstructorPageStyle.css";
import"../styles/certificate.css";
import logo from "../Media/Logo.png";
import teacher from "../Media/teacher.png";
import html2canvas from 'html2canvas';
import  jsPDF  from 'jspdf';

import PdfContainer from './PdfContainer';
import {exportComponentAsPNG ,exportComponentAsPDF}from "react-component-export-image";
//import emailjs from '@emailjs/browser';
//import emailjs from '@emailjs/browser';
const getGrade = () => {
    
  Axios.post("http://localhost:8000/Corporate_Recieve_Certificate_Via_Email").then(
    (response) => {
      // answer = response.data;
      console.log(response.data);
      this.setState({Emailsent:response.data});
      //console.log(userData);
    })

};

class Certificates extends Component {
  certificateWrapper=React.createRef();
  
//    this.componentRef = React.createRef();
state={
    Name:" ",
    Emailsent:" "
};



render(){
  console.log(this.state);
    return(
      
        <div className="certificate"> 
            <div className="meta">
                <h1>Your Certificate</h1>
                <p>Please enter your name :</p>
                <input type="text" placeholder="Your name.." value={this.state.Name}
                onChange={e=>
                   {this.setState({Name:e.target.value});}} />
                 
               <button onClick={e => {e.preventDefault();
            exportComponentAsPDF(this.certificateWrapper,{ html2CanvasOptions: { backgroundColor: null  } });
              }}> Download </button>

<button onclick={getGrade}> Send via email  </button>


            </div>
         

            <div id="certificateWrapper" ref={this.certificateWrapper}>
                  <p>{this.state.Name}</p>
                <img src="https://i.imgur.com/69nmPyf.png" alt="Certificate" ></img> 
              
                {/* <a href="mailto:`{email}`?subject={subject}&body={body}">Click to Send an Email</a> */}
            </div>
 <p>{this.state.Emailsent}</p>
            
      {/* <a href="mailto:mennaabdallah77@yahoo.com?subject='certificate!'&body=this.certificateWrapper ">Click to Send an Email</a> */}
        </div>        
    );
}

}
export default Certificates;