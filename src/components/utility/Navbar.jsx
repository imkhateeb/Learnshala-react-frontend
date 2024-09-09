import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const userToken = localStorage.getItem("userToken");

const Navbar = () => {
  const [showSiderbar, setshowSiderbar] = useState(false);
  const sidebarRef = useRef(null);
  const location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);

  const { user } = useSelector((state) => state.user);

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
        {!userToken ? (
          <Link
            to="/auth/signin"
            className="py-2 px-8 border-[2px] border-tertiary text-tertiary hover:bg-primary hover:text-primary rounded-full text-xl font-bold flex items-center justify-center transition-all duration-300"
          >
            Login
          </Link>
        ) : (
          <div className="relative">
            {/* Show DP for bigger screen */}
            <div
              ref={sidebarRef}
              className={`${
                showSiderbar ? "block" : "hidden"
              } absolute top-10 right-0 bg-white w-[250px] h-[75vh] shadow-lg p-4 rounded-3xl animate-slight-up`}
            ></div>
            <div>
              <div
                onClick={() => setshowSiderbar(!showSiderbar)}
                className="flex items-center gap-1 border-[1px] border-gray-300 rounded-full pr-5 cursor-pointer"
              >
                {user?.photo ? (
                  <img
                    src={user?.photo}
                    alt="user"
                    className="w-[40px] h-[40px] rounded-full object-cover border"
                  />
                ) : (
                  <div className="w-[40px] h-[40px] bg-gray-400 rounded-full" />
                )}
                <div className="h-full flex flex-col leading-5 justify-between">
                  <p className="font-semibold">{user?.name?.split(" ")[0]}</p>
                  <p className="text-xs text-gray-500">
                    {`${user?.role[0]?.toUpperCase()}${user?.role?.slice(1)}`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
