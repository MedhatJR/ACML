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


class Certificates extends Component {
  certificateWrapper=React.createRef();
  
//    this.componentRef = React.createRef();
state={
    Name:" "
};

// pdfGenerate=()=>{
//   var doc= new jsPDF('landscape','px','a4','false');
//   doc.addImage(this.certificateWrapper,'PNG',65,20,500,400);
//   doc.save('certificate.pdf');
// }

//exportComponentAsPDF(node, {fileName, html2CanvasOptions, pdfOptions})
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
            exportComponentAsPNG(this.certificateWrapper,{ html2CanvasOptions: { backgroundColor: null  } });
              }}> Download </button>

                 


            </div>
         

            <div id="certificateWrapper" ref={this.certificateWrapper}>
                  <p>{this.state.Name}</p>
                <img src="https://i.imgur.com/69nmPyf.png" alt="Certificate" ></img> 
              
                {/* <a href="mailto:`{email}`?subject={subject}&body={body}">Click to Send an Email</a> */}
            </div>

            
      {/* <a href="mailto:mennaabdallah77@yahoo.com?subject='certificate!'&body=this.certificateWrapper ">Click to Send an Email</a> */}
        </div>        
    );
}

}
export default Certificates;