import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import IndividualPage from "./pages/IndividualPage";
import IndividualViewMyCourses from "./pages/IndividualViewMyCourses";
import CorporateViewMyCourses from "./pages/CorporateViewMyCourses";
import IndividualCoursePage from "./pages/IndividualCoursePage";
import CourseInstructor from "./pages/CourseInstructor";
import LogIn from "./pages/LogIn";
import Contract from "./pages/Contract";
import CorporatePage from "./pages/CorporatePage";
import RateCorp from "./pages/RateCorp";
import Rateindividual from "./pages/Rateindividual";
import Emailsent from "./pages/Emailsent";
import AddExam from "./pages/AddExam";
import IMCQ from "./pages/IMCQ";
import CorporateCoursePage from "./pages/CorporateCoursePage";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <div className="pages">
            <Routes>
              <Route path="/" element={<Register />} />
              <Route path="/view" element={<ViewData />} />
              <Route path="/addCourse" element={<AddCourse />} />
              <Route
                path="/InstructorViewCourse"
                element={<InstructorViewCourse />}
              />
              <Route path="/InstructorPage" element={<InstructorPage />} />
              <Route path="/IndividualPage" element={<IndividualPage />} />
              <Route
                path="/IndividualViewMyCourses"
                element={<IndividualViewMyCourses />}
              />
              <Route
                path="/IndividualCoursePage"
                element={<IndividualCoursePage />}
              />
              <Route path="/Addexam" element={<AddExam />} />
              <Route path="/IMCQ" element={<IMCQ />} />
              <Route
                path="/CorporateCoursePage"
                element={<CorporateCoursePage />}
              />
              <Route
                path="/CorporateViewMyCourses"
                element={<CorporateViewMyCourses />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
