import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "../../Pages/User/UserMedGuide/Home/Home";
import About from "../../Pages/User/UserMedGuide/About/About";
import Prediction from "../../Pages/User/UserMedGuide/Prediction/Prediction";
const UserRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/prediction" element={<Prediction />} />
        <Route path="/*" element={<Outlet />} />
      </Routes>
    </>
  );
};

export default UserRoute;
