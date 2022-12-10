import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ViewData from "./pages/ViewData";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <div className="pages">
            <Routes>
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
