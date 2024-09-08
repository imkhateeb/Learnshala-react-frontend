import { Route, Routes } from "react-router-dom";
import {
  Home,
  Course,
  Auth,
  Student,
  Instructor,
  Admin,
  NotFound,
} from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses/*" element={<Course />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/student/*" element={<Student />} />
      <Route path="/instructor/*" element={<Instructor />} />
      <Route path="/admin/*" element={<Admin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
