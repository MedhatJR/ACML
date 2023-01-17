import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import React, { useState } from "react";

import Home from "./pages/Home";

import Register from "./pages/Register";
import ViewData from "./pages/ViewData";
import UpdateEmail from "./pages/UpdateEmaiL";
import UpdateBiography from "./pages/UpdateBiography";
import UpdatePassword from "./pages/UpdatePassword";
import ResetPassword from "./pages/ResetPassword";
import AddCourse from "./pages/AddCourse";
import InstructorViewCourse from "./pages/InstructorViewCourse";
import InstructorPage from "./pages/InstructorPage";
import Individual_GradeAndAnswers from "./pages/IndividualGradeAndAnswers";
import Coporate_GradeAndAnswers from "./pages/CoporateGradeAndAnswers";
import IndividualPage from "./pages/IndividualPage";
import IndividualViewMyCourses from "./pages/IndividualViewMyCourses";
import CorporateViewMyCourses from "./pages/CorporateViewMyCourses";
import IndividualCoursePage from "./pages/IndividualCoursePage";
import CorporateCoursePage from "./pages/CorporateCoursePage";
import Allfilterall from "./pages/Allfilterall";
import CorpRequest from "./pages/CorpRequest";
import AdminViewRequests from "./pages/AdminViewRequests";

import CourseInstructor from "./pages/CourseInstructor";
import LogIn from "./pages/LogIn";
import Contract from "./pages/Contract";
import CorporatePage from "./pages/CorporatePage";
import RateCorp from "./pages/RateCorp";
import Rateindividual from "./pages/Rateindividual";
import CorpRatecourse from "./pages/CorpRatecourse";
import Emailsent from "./pages/Emailsent";
import AddExam from "./pages/AddExam";
import IMCQ from "./pages/IMCQ";
import CMCQ from "./pages/CMCQ";
import Terms from "./pages/Terms";
import AdminAddAdmin from "./pages/AdminAddAdmin";
import Searchtitlesubject from "./pages/Searchtitlesubject";

import AddPromotion from "./pages/AddPromotion";
import CorporateResetEmail from "./pages/CorporateResetEmail";
import CorporateResetPassword from "./pages/CorporateResetPassword";
import CorporateUpdate from "./pages/CorporateUpdate";
import EnterEmail from "./pages/EnterEmail";
import IndividualResetEmail from "./pages/IndividualResetEmail";
import IndividualResetPassword from "./pages/IndividualResetPassword";
import IndividualUpdate from "./pages/IndividualUpdate";
import IndiRatecourse from "./pages/IndiRatecourse";
import InstrMyRatings from "./pages/InstrMyRatings";
import InstrCourseRatings from "./pages/InstrCourseRatings";
import AdminOpenProblem from "./pages/AdminOpenProblem";
import AdminAddCORP from "./pages/AdminAddCORP";
import AdminAddI from "./pages/AdminAddI";
import Certificates from "./pages/Certificates";
import CorpAllCourses from "./pages/CorpAllCourses";
//import jwt from ' jsonwebtoken'
import ViewReportedProblems from "./pages/ViewReportedProblems";
import AdminstratorPage from "./pages/AdminstratorPage";
import AdminViewProblems from "./pages/AdminViewProblems";
import AdminAddPromoAllcourses from "./pages/AdminAddPromoAllcourses";
import AdminAddPromoSeveralcourses from "./pages/AdminAddPromoSeveralcourses";
import AdminAddPromoSpecificcourse from "./pages/AdminAddPromoSpecificcourse";
import AdminRefund from "./pages/AdminRefund";
import AllCourses from "./pages/AllCourses";
import Pay from "./pages/Pay";
import InstMyCourses from "./pages/InstMyCourses";
import useToken from "./useToken";
// import Header from "./pages/Header";
import ReportAProblem from "./pages/ReportAProblem";
import InstructorWallet from "./pages/InstructorWallet";
import IndividualWallet from "./pages/IndividualWallet";

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

function App() {
  //  var token;

  // const { token, setToken } = useToken();
  // //const token = getToken();

  //   if(!token) {
  //     return <LogIn setToken={setToken} />
  //   }

  return (
    <>
      <div className="App">
        {/* <div className="App">
        <Header />
    </div> */}
        {/* <div className="App">
      <Dropdown placeHolder="Select..." />
    </div> */}

        <BrowserRouter>
          <div className="pages">
            <Routes>
              <Route path="/AdminOpenProblem" element={<AdminOpenProblem />} />
              <Route path="/IndividualUpdate" element={<IndividualUpdate />} />
              <Route
                path="/IndividualResetEmail"
                element={<IndividualResetEmail />}
              />
              <Route path="/Certificates" element={<Certificates />} />
              <Route path="/IndividualUpdate" element={<IndividualUpdate />} />
              <Route
                path="/AdminViewRequests"
                element={<AdminViewRequests />}
              />
              <Route
                path="/Searchtitlesubject"
                element={<Searchtitlesubject />}
              />
              <Route
                path="/IndividualResetEmail"
                element={<IndividualResetEmail />}
              />
              <Route path="/IndiRatecourse" element={<IndiRatecourse />} />
              <Route path="/Allfilterall" element={<Allfilterall />} />

              <Route path="/IndiRatecourse" element={<IndiRatecourse />} />
              <Route
                path="/IndividualResetPassword"
                element={<IndividualResetPassword />}
              />
              <Route path="/AdminAddAdmin" element={<AdminAddAdmin />} />
              <Route path="/AdminAddCORP" element={<AdminAddCORP />} />
              <Route path="/AdminAddI" element={<AdminAddI />} />

              <Route path="/CorpAllCourses" element={<CorpAllCourses />} />
              <Route path="/EnterEmail" element={<EnterEmail />} />
              <Route path="/ReportAProblem" element={<ReportAProblem />} />
              <Route path="/CorporateUpdate" element={<CorporateUpdate />} />
              <Route
                path="/CorporateResetPassword"
                element={<CorporateResetPassword />}
              />
              <Route
                path="/CorporateResetEmail"
                element={<CorporateResetEmail />}
              />
              <Route path="/AddPromotion" element={<AddPromotion />} />

              <Route path="/Register" element={<Register />} />

              <Route path="/" element={<Home />} />

              <Route path="/RateCorp" element={<RateCorp />} />
              <Route path="/CorpRatecourse" element={<CorpRatecourse />} />
              <Route path="/Rateindividual" element={<Rateindividual />} />
              <Route path="/CorporatePage" element={<CorporatePage />} />
              <Route path="/Contract" element={<Contract />} />
              <Route path="/LogIn" element={<LogIn />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Emailsent" element={<Emailsent />} />
              <Route path="/CourseInstructor" element={<CourseInstructor />} />
              <Route path="/ResetPassword" element={<ResetPassword />} />
              <Route path="/UpdatePassword" element={<UpdatePassword />} />
              <Route path="/UpdateBiography" element={<UpdateBiography />} />
              <Route path="/UpdateEmail" element={<UpdateEmail />} />
              <Route path="/view" element={<ViewData />} />
              <Route path="/addCourse" element={<AddCourse />} />
              <Route
                path="/InstructorViewCourse"
                element={<InstructorViewCourse />}
              />
              <Route path="/InstructorPage" element={<InstructorPage />} />
              <Route path="/AdminstratorPage" element={<AdminstratorPage />} />
              <Route
                path="/AdminAddPromoAllcourses"
                element={<AdminAddPromoAllcourses />}
              />
              <Route
                path="/AdminAddPromoSeveralcourses"
                element={<AdminAddPromoSeveralcourses />}
              />
              <Route
                path="/AdminViewProblems"
                element={<AdminViewProblems />}
              />
              <Route
                path="/AdminAddPromoSpecificcourse"
                element={<AdminAddPromoSpecificcourse />}
              />
              <Route path="/AdminRefund" element={<AdminRefund />} />
              <Route path="/InstrMyRatings" element={<InstrMyRatings />} />
              <Route
                path="/InstrCourseRatings"
                element={<InstrCourseRatings />}
              />
              <Route
                path="/IndividualGradeAndAnswers"
                element={<Individual_GradeAndAnswers />}
              />
              <Route
                path="/CoporateGradeAndAnswers"
                element={<Coporate_GradeAndAnswers />}
              />
              <Route path="/IndividualPage" element={<IndividualPage />} />
              <Route
                path="/IndividualViewMyCourses"
                element={<IndividualViewMyCourses />}
              />
              <Route
                path="/IndividualCoursePage"
                element={<IndividualCoursePage />}
              />
              <Route
                path="/CorporateCoursePage"
                element={<CorporateCoursePage />}
              />
              <Route
                path="/CorporateViewMyCourses"
                element={<CorporateViewMyCourses />}
              />
              <Route path="/Addexam" element={<AddExam />} />
              <Route path="/IMCQ" element={<IMCQ />} />
              <Route path="/CMCQ" element={<CMCQ />} />
              <Route path="/Terms" element={<Terms />} />
              <Route path="/AllCourses" element={<AllCourses />} />
              <Route path="/Pay" element={<Pay />} />
              <Route path="/CorpRequest" element={<CorpRequest />} />
              <Route
                path="/ViewReportedProblems"
                element={<ViewReportedProblems />}
              />
              <Route path="/IndividualWallet" element={<IndividualWallet />} />
              <Route path="/InstMyCourses" element={<InstMyCourses />} />
              <Route path="/InstructorWallet" element={<InstructorWallet />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
