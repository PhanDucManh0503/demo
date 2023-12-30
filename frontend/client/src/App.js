import React from "react";
import Map from "./components/Map";
import ManageWardAndDistrict from "./components/ManageWardAndDistrict";
import NavBar from "./components/NavBar";
import AdLocationPage from "./components/adLocation/AdLocationPage";
import AdBoardsDisplay from "./components/AdBoard/AdBoardsDisplay";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/map" element={<Map />} />
        <Route path="/manage" element={<ManageWardAndDistrict />} />
        <Route path="/ad-locations" element={<AdLocationPage />} />
        <Route path="/ad-boards/:locationId" element={<AdBoardsDisplay />} />
        <Route path="/" element={<Navigate replace to="/map" />} />
      </Routes>
    </Router>
  );
}

export default App;
