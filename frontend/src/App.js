import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ViewData from "./pages/ViewData";
import AddCourse from "./pages/AddCourse";
import InstructorViewCourse from "./pages/InstructorViewCourse";
import InstructorPage from "./pages/InstructorPage";
import Instructor_GradeAndAnswers from "./pages/IndividualGradeAndAnswers";
import Coporate_GradeAndAnswers from "./pages/CoporateGradeAndAnswers";
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
              <Route path="/InstructorGradeAndAnswers" element={<Instructor_GradeAndAnswers />} />
              <Route path="/CoporateGradeAndAnswers" element={<Coporate_GradeAndAnswers />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
