import { Route, Routes } from "react-router-dom";
import { CourseDetail, Courses } from "../components/courses";

const Course = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/:courseId" element={<CourseDetail />} />
        <Route path="/enrolled" element={<CourseDetail />} />
      </Routes>
    </>
  );
};

export default Course;
