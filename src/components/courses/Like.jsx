import { Heart } from "@phosphor-icons/react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { likeUnlikeCourse } from "../../redux/reducers/likeUnlikeCourse";
import { useEffect, useState } from "react";

const userToken = localStorage.getItem("userToken");
const userRole = localStorage.getItem("userRole");

const Like = ({ course, isDetail, setCourse }) => {
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();

  const handleIsLiked = () => {
    const userId = localStorage.getItem("userId");

    if (course?.likes?.length > 0) {
      const isLiked = course?.likes?.find((like) => like?._id === userId);
      if (isLiked) {
        setIsLiked(true);
      } else {
        setIsLiked(false);
      }
    } else {
      setIsLiked(false);
    }
  };

  useEffect(() => {
    handleIsLiked(course);
  }, [course]);

  const handleLoginToast = async () => {
    toast.error("Please login to like the course", {
      position: "top-center",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const handleStudentAccessToast = async () => {
    toast.error("Only students can like the course", {
      position: "top-center",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const handleLikeUnlikeCourse = async () => {
    dispatch(likeUnlikeCourse(course?._id));
  };
  return (
    <div className="flex gap-1 items-center">
      {isLiked ? (
        <Heart
          onClick={() =>
            !userToken
              ? handleLoginToast()
              : userRole !== "student"
              ? handleStudentAccessToast()
              : handleLikeUnlikeCourse()
          }
          size={18}
          weight="fill"
          className="text-red-500 cursor-pointer"
        />
      ) : (
        <Heart
          onClick={() =>
            userToken && userRole === "student"
              ? handleLikeUnlikeCourse()
              : handleLoginToast()
          }
          size={18}
          weight="bold"
          className="text-white cursor-pointer"
        />
      )}
      {course?.likes?.length || 0}
    </div>
  );
};

export default Like;
