import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./../pages/HomePage/Home";
import Layout from "./../components/Layout/Layout";
import ScrollToTop from "./../components/Layout/ScrollToTop";
import AboutUs from "./../pages/AboutUs/AboutUs";
import WorkWithUs from "./../pages/WorkWithUs/WorkWithUs";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/workwithus" element={<WorkWithUs />} />
          </Routes>
        </ScrollToTop>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
