import React from "react";
import { useAuthContext } from "../../contexts/useAuthContext";
const Home = () => {
  const { user } = useAuthContext();

  return <div className="home">{user && <h1>{user.username}</h1>}</div>;
};

export default Home;
