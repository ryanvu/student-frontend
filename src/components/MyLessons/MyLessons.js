import React, { useEffect, useState } from "react";
import "./MyLessons.scss";
import { useAuthContext } from "../../contexts/useAuthContext";
import axios from "axios";

const MyLessons = () => {
  const { user } = useAuthContext();
  const [lessons, setLessons] = useState();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/lessons/${user.id}`)
      .then((res) => {
        setLessons(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user.id]);

  return (
    <div className="mylessons">
      <header className="mylessons__header">
        {typeof lessons === "string" && <span>{lessons}</span>}
        <button className="mylessons__btn">Create Lesson</button>
      </header>
    </div>
  );
};

export default MyLessons;
