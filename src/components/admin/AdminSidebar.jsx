import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col p-5 shadow-lg rounded-tr-3xl h-[88.5vh] sticky top-0 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col gap-4">
        <Link
          to="/admin/users"
          className="p-3 rounded-lg hover:bg-gray-700 transition-all"
        >
          Manage Users
        </Link>
        <Link
          to="/admin/courses"
          className="p-3 rounded-lg hover:bg-gray-700 transition-all"
        >
          Manage Courses
        </Link>
      </nav>
    </div>
  );
};

export default AdminSidebar;
