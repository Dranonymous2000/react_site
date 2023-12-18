import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom'; // Import Routes and BrowserRouter

import HomePage from '../pages/HomePage';
import AllServicePage from '../pages/AllServicePage';
import AllCoursePage from '../pages/AllCoursePage';
import PortfolioPage from '../pages/PortfolioPage';
import Contact from '../pages/Contact';
import AboutPage from '../pages/AboutPage';
import RefundPage from '../pages/RefundPage';
import TermsPage from '../pages/TermsPage';
import PrivacyPage from '../pages/PrivacyPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';

class AppRouter extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route exact path="/" element={<HomePage />} /> {/* Use element prop for component rendering */}
          <Route exact path="/service" element={<AllServicePage />} />
          <Route exact path="/course" element={<AllCoursePage />} />
          <Route exact path="/portfolio" element={<PortfolioPage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/refund" element={<RefundPage />} />
          <Route exact path="/terms" element={<TermsPage />} />
          <Route exact path="/privacy" element={<PrivacyPage />} />
          <Route exact path="/projectDetails" element={<ProjectDetailsPage/>} />
          <Route exact path="/courseDetails" element={<CourseDetailsPage/>} />
        </Routes>
      </Fragment>
    );
  }
}

export default AppRouter;
