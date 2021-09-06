import React from "react";
import { useAuthContext } from "../../contexts/useAuthContext";
import axios from "axios";
import "./Home.scss";
const Home = () => {
  const { user } = useAuthContext();

  const test = () => {
    axios
      .get("http://localhost:8080")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="home">
      {user && <h1>{user.username}</h1>}
      <button onClick={test}>test</button>
    </div>
  );
};

export default Home;
