import React from "react";
import "./Me.scss";
import { useHistory } from "react-router-dom";

const Me = ({ user }) => {
  const history = useHistory();
  return (
    <div
      className="me"
      onClick={() => {
        history.push("/dashboard");
      }}
    >
      <span className="me__avatar" />
      <span className="me__name">{user.first}</span>
    </div>
  );
};

export default Me;
