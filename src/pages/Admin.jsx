import { Link, Route, Routes } from "react-router-dom";
import AddCourse from "../components/admin/AddCourse";

const RootAdmin = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[88.5vh] w-full">
      <h1 className="text-3xl max-sm:text-xl font-bold">
        This Page is under development.
      </h1>
      <Link
        to={"/admin/add-course"}
        className="mt-4 px-4 py-2 bg-black text-white rounded-lg"
      >
        Add Course
      </Link>
    </div>
  );
};

const Admin = () => {
  const userRole = localStorage.getItem("userRole");
  if (userRole !== "admin") {
    window.location.href = "/";
  }
  return (
    <div className="flex w-full h-full">
      <div className="flex-1">
        <Routes>
          <Route path="/*" element={<RootAdmin />} />
          <Route path="/add-course" element={<AddCourse />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
