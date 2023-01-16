import React, { useEffect, useState,Component } from "react";
import Axios from "axios";
import { Routes, Route, useNavigate } from 'react-router-dom';
import "../styles/InstructorPageStyle.css";
import"../styles/certificate.css";
import logo from "../Media/Logo.png";
import teacher from "../Media/teacher.png";
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import {exportComponentAsPNG }from "react-component-export-image";

const printRef =React.createRef();
const handleDownloadPdf = async () => {
   const element = printRef.current;
   const canvas = await html2canvas(element);
   const data = canvas.toDataURL('https://i.imgur.com/69nmPyf.png');

   const pdf = new jsPDF();
   const imgProperties = pdf.getImageProperties(data);
   const pdfWidth = pdf.internal.pageSize.getWidth();
   const pdfHeight =
     (imgProperties.height * pdfWidth) / imgProperties.width;

   pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
   pdf.save('print.pdf');
 };

class Certificates extends Component {
  certificateWrapper=React.createRef();
//    this.componentRef = React.createRef();
state={
    Name:" "
};
render(){
    return(
        <div className="App">
            <div className="meta">
                <h1>Your Certificate</h1>
                <p>Please enter your name :</p>
                <input type="text" placeholder="Your name.." value={this.state.Name}
                onChange={e=>
                   {this.setState({Name:e.target.value});}} />
                 
               <button onClick={e => {e.preventDefault();
            exportComponentAsPNG(this.certificateWrapper,{ html2CanvasOptions: { backgroundColor: null }});
              
              }}> Download </button>

            </div>
            
            <div id="certificateWrapper" ref={this.certificateWrapper}>
                  <p>{this.state.Name}</p>
                <img src="https://i.imgur.com/69nmPyf.png" alt="Certificate" ></img> 
             
            </div>
        </div>
    );
}

}
export default Certificates;