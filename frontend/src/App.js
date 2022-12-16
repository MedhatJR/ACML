import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ViewData from "./pages/ViewData";
import AddCourse from "./pages/AddCourse";
import InstructorViewCourse from "./pages/InstructorViewCourse";
import InstructorPage from "./pages/InstructorPage";
import IndividualPage from "./pages/IndividualPage";
import IndividualViewMyCourses from "./pages/IndividualViewMyCourses";
import CorporateViewMyCourses from "./pages/CorporateViewMyCourses";
import IndividualCoursePage from "./pages/IndividualCoursePage";
import CorporateCoursePage from "./pages/CorporateCoursePage";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <div className="pages">
            <Routes>
              <Route path="/Register" element={<Register />} />
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
