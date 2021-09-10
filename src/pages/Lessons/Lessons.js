import React, { useState } from "react";
import MyLessons from "../../components/MyLessons/MyLessons";
import "./Lessons.scss";
import { useAuthContext } from "../../contexts/useAuthContext";
import LessonForm from "../../components/LessonForm/LessonForm";

const Lessons = () => {
  const { user } = useAuthContext();

  return <div className="lessons">{user && <MyLessons />}</div>;
};

export default Lessons;
