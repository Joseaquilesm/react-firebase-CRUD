import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Write from "../src/services/Write";
import Read from "../src/services/Read";
import Update from "../src/services/Update";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<h1>hello</h1>} />
          <Route path="/write" element={<Write />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
