import React, { useState, useEffect } from "react";
import "./Dashboard.scss";
import { useAuthContext } from "../../contexts/useAuthContext";

const Dashboard = () => {
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    !loading &&
    user && (
      <div className="dashboard">
        <div className="dashboard__header">
          <h2 className="dashboard__title">Dashboard</h2>
          <p>{user.id}</p>
        </div>
      </div>
    )
  );
};

export default Dashboard;
