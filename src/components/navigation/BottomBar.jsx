import { GraduationCap, House, User, Video } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const BottomBar = () => {
  const location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);
  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  const navigations = [
    {
      id: 1,
      title: "Home",
      url: "/",
      icon: <House size={28} weight="bold" />,
      activeIcon: <House size={28} weight="fill" />,
    },
    {
      id: 2,
      title: "Courses",
      url: "/courses",
      icon: <Video size={28} weight="bold" />,
      activeIcon: <Video size={28} weight="fill" />,
    },
    {
      id: 3,
      title: "Enrolled",
      url: "/profile",
      icon: <GraduationCap size={28} weight="bold" />,
      activeIcon: <GraduationCap size={28} weight="fill" />,
    },
    {
      id: 4,
      title: "Profile",
      url: "/student",
      icon: <User size={28} weight="bold" />,
      activeIcon: <User size={28} weight="fill" />,
    },
  ];
  return (
    <div className="w-full h-full flex justify-evenly items-center">
      {navigations.map((item) => (
        <Link
          to={item.url}
          key={item.id + item.title}
          className="flex flex-col items-center p-1.5"
        >
          {pathname === item.url ? item.activeIcon : item.icon}
          <p
            className={`text-xs font-semibold ${
              pathname === item.url ? "text-black" : "text-gray-400"
            }`}
          >
            {item.title}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default BottomBar;
