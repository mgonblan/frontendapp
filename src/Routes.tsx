import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const AdvancedSearch = React.lazy(() => import("pages/AdvancedSearch"));
const HamburgerMenu = React.lazy(() => import("pages/HamburgerMenu"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<HamburgerMenu />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/advancedsearch" element={<AdvancedSearch />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
