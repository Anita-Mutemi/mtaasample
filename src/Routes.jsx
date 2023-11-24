import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Businessdescriptionbizdetails = React.lazy(
  () => import("pages/Businessdescriptionbizdetails"),
);
const User = React.lazy(() => import("pages/User"));
const Forgotpassword = React.lazy(() => import("pages/Forgotpassword"));
const LogIn = React.lazy(() => import("pages/LogIn"));
const Signinpage = React.lazy(() => import("pages/Signinpage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Signinpage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/user" element={<User />} />
          <Route
            path="/businessdescriptionbizdetails"
            element={<Businessdescriptionbizdetails />}
          />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
