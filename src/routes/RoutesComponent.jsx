import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Toaster } from "sonner";
import PropTypes from "prop-types";
import Home from "../pages/Home";

function ProtectedComponents({ children }) {
  const navigate = useNavigate();
  const token = true; // localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return token ? children : null;
}

ProtectedComponents.propTypes = {
  children: PropTypes.node,
};

function RoutesComponent() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedComponents>
              <Home />
            </ProtectedComponents>
          }
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default RoutesComponent;
