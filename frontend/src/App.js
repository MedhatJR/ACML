import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ViewData from "./pages/ViewData";
import UpdateEmail from "./pages/UpdateEmaiL"
import UpdateBiography from "./pages/UpdateBiography"
import UpdatePassword from "./pages/UpdatePassword"
import ResetPassword from "./pages/ResetPassword"

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <div className="pages">
            <Routes>
            
            
            <Route path="/ResetPassword" element={<ResetPassword />} />
            <Route path="/UpdatePassword" element={<UpdatePassword />} />
            <Route path="/UpdateBiography" element={<UpdateBiography />} />
            <Route path="/UpdateEmail" element={<UpdateEmail />} />
              <Route path="/" element={<Register />} />
              <Route path="/view" element={<ViewData />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
