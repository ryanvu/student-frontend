import React, { useEffect, useState } from "react";
import "./MyLessons.scss";
import { useAuthContext } from "../../contexts/useAuthContext";
import axios from "axios";
import LessonForm from "../LessonForm/LessonForm";

const MyLessons = () => {
  const { user } = useAuthContext();
  const [lessons, setLessons] = useState();
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/lessons/${user.id}`)
      .then((res) => {
        setLessons(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user.id]);

  return (
    !loading && (
      <div className="mylessons">
        <header className="mylessons__header">
          {typeof lessons === "string" && <span>{lessons}</span>}
          {user.user_type === "teacher" && (
            <button
              onClick={() => setShowForm((prev) => !prev)}
              className="mylessons__btn"
            >
              Create Lesson
            </button>
          )}
        </header>
        {showForm && <LessonForm />}
      </div>
    )
  );
};

export default MyLessons;
