// App.js or MainLayout.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../src/components/Loader";

const AppWrapper = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000); // simulate page transition delay
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
};

export default AppWrapper;
