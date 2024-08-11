import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// zone public
import Home from "./zonePublic/pages/Home";
import Contact from "./zonePublic/pages/Contact";
import Pratiques from "./zonePublic/pages/Pratiques";

// zone auth
import Login from "./zoneAuth/Login";
import Register from "./zoneAuth/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pratiques" element={<Pratiques />} />
      </Routes>
    </Router>
  );
}

export default App;
