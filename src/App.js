import React from "react";
import "./App.css";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./pages/Dashboad.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/contact.jsx";
import Chatbox from "./pages/Chatbox.jsx";
import Feedback from "./pages/Feedback.jsx";
import Zenesh from "./profiles/zenesh.jsx";
import Shristi from "./profiles/shristi.jsx";
import Bikalpa from "./profiles/bikalpa.jsx";
import Profileview from "./profiles/profileview.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/chatbox" element={<Chatbox />} />
          <Route path="/profile/zenesh" element={<Zenesh />} />
          <Route path="/profile/shristi" element={<Shristi />} />
          <Route path="/profile/bikalpa" element={<Bikalpa />} />
          <Route path="/profile/profileview" element={<Profileview />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
