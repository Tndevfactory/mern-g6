import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// zone public
import Home from "./zonePublic/pages/Home";
import Contact from "./zonePublic/pages/Contact";
import Pratiques from "./zonePublic/pages/Pratiques";

// zone auth
import Login from "./zoneAuth/Login";
import Register from "./zoneAuth/Register";

// zone Admin
import ManageProducts from "./zoneAdmin/pages/ManageProducts";

// zone client
import Profile from "./zoneClient/pages/Profile";

// zone Layouts
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";
import ClientLayout from "./layouts/ClientLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<ManageProducts />} />
        </Route>

        <Route path="/user" element={<ClientLayout />}>
          <Route index element={<Profile />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pratiques" element={<Pratiques />} />
      </Routes>
    </Router>
  );
}

export default App;
