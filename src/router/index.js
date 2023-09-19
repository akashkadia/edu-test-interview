import React from "react";
import Gender from "../pages/gender";
import InputField from "../pages/input-field";
import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import MaritalStatus from "../pages/marital-status";
const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gender />} />
        <Route path="/marital-status" element={<MaritalStatus />} />
        <Route path="/input-field" element={<InputField />} />
      </Routes>
    </Router>
  );
};

export default Routers;
