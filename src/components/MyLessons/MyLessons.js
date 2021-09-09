import React, { useEffect } from "react";
import "./MyLessons.scss";
import { useAuthContext } from "../../contexts/useAuthContext";
import axios from "axios";

const MyLessons = () => {
  const { user } = useAuthContext();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/lessons/${user.id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user.id]);

  return <div className="mylessons"></div>;
};

export default MyLessons;
