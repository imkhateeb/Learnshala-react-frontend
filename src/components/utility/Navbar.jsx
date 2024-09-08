import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  return (
    <div className="w-[90%] max-md:w-[95%] mx-auto py-5 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold md:text-3xl">
        LearnShala.
      </Link>
      <div className="flex gap-8 text-xl font-bold max-sm:hidden">
        <Link
          to="/"
          className={`underline-animation ${
            pathname === "/" ? "text-tertiary" : "text-gray-500"
          }`}
        >
          Home
        </Link>
        <Link
          to="/courses"
          className={`underline-animation ${
            pathname === "/courses" ? "text-tertiary" : "text-gray-500"
          }`}
        >
          Courses
        </Link>
      </div>
      <div>
        <Link
          to="/auth/signin"
          className="py-2 px-8 border-[2px] border-tertiary text-tertiary hover:bg-primary hover:text-primary rounded-full text-xl font-bold flex items-center justify-center transition-all duration-300"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
