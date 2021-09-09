import React, { useState, useEffect } from "react";
import "./Dashboard.scss";
import { useAuthContext } from "../../contexts/useAuthContext";
import MyLessons from "../../components/MyLessons/MyLessons";

const Dashboard = () => {
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      setLoading(true);
    };
  }, []);

  return (
    !loading &&
    user && (
      <div className="dashboard">
        <div className="dashboard__header">
          <h2 className="dashboard__title">Dashboard</h2>
          <p>{user.id}</p>
        </div>
        <MyLessons />
      </div>
    )
  );
};

export default Dashboard;
