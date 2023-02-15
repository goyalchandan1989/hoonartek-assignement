import { BrowserRouter, Route, Routes } from "react-router-dom";
import Assignment1 from "./Assignment1";
import Assignment2 from "./Assignment2";
import Assignment3 from "./Assignment3";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Assignment1/>}/>
          <Route exact path="/assignment2" element={<Assignment2/>}/>
          <Route exact path="/assignment3" element={<Assignment3/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
