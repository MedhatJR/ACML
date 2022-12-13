import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ViewData from "./pages/ViewData";
import UpdateEmail from "./pages/UpdateEmaiL"
import UpdateBiography from "./pages/UpdateBiography"
import UpdatePassword from "./pages/UpdatePassword"
import ResetPassword from "./pages/ResetPassword"
import AddCourse from "./pages/AddCourse";
import InstructorViewCourse from "./pages/InstructorViewCourse";
import InstructorPage from "./pages/InstructorPage";
import CourseInstructor from "./pages/CourseInstructor";
import LogIn from "./pages/LogIn";
import Contract from "./pages/Contract";
import CorporatePage from "./pages/CorporatePage";
import RateCorp from "./pages/RateCorp";

import Emailsent from "./pages/Emailsent";
import AddExam from "./pages/AddExam";
import IMCQ from"./pages/IMCQ";
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <div className="pages">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/RateCorp" element={<RateCorp />} />
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
              <Route path="/Addexam" element={<AddExam />} />
              <Route path="/IMCQ" element={<IMCQ/>} />


            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
