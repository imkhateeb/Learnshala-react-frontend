import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiUrl } from "../../config";
import axios from "axios";
import CourseDetailsLoading from "./loading/CourseDetailsLoading";
import Like from "./Like";
import Enrolled from "./Enrolled";
import timeAgo from "./utils/timeAgo";
import { HourglassHigh, MapPinLine } from "@phosphor-icons/react";
import Syllabus from "./Syllabus";
import Reviews from "./Reviews";
import { isEnrolled } from "../../redux/reducers/isEnrolled";
import { useDispatch, useSelector } from "react-redux";
import EnrollConfirmation from "./popups/EnrollConfirmation";

const CourseDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { courseId } = useParams();

  // States
  const [loadingCourse, setLoadingCourse] = useState(false);
  const [course, setCourse] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for popup

  // Selector
  const { isEnrolled: isEnrolledCourse, isEnrolledLoading } = useSelector(
    (state) => state.enrollments
  );

  // Handler
  const getCourse = async () => {
    setLoadingCourse(true);
    const url = `${apiUrl}/courses/${courseId}`;
    try {
      const { data } = await axios.get(url);
      if (data?.status === "success") {
        setCourse(data?.data?.course);
      } else {
        navigate("/courses");
      }
    } catch (error) {
      console.log(error);
      navigate("/courses");
    } finally {
      setLoadingCourse(false);
    }
  };

  const handleEnrollClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleConfirmEnroll = () => {
    // Handle enrollment logic here
    setIsPopupOpen(false);
  };

  // Effects
  useEffect(() => {
    getCourse();
    dispatch(isEnrolled(courseId));
  }, [courseId]);

  return (
    <div className="relative bg-primary rounded-[50px] min-h-[85vh] flex flex-col w-[90%] max-md:w-[95%] mx-auto p-20 max-lg:p-10 max-sm:p-5 max-md:p-8 gap-5">
      {isPopupOpen && (
        <EnrollConfirmation
          onClose={handleClosePopup}
          onConfirm={handleConfirmEnroll}
        />
      )}
      <div
        className={`w-full flex gap-5 max-sm:flex-col overflow-hidden ${
          isPopupOpen ? "filter blur-sm" : ""
        }`}
      >
        {loadingCourse ? (
          <CourseDetailsLoading />
        ) : (
          <div className="flex flex-col w-full gap-5 text-white">
            <div className="flex max-md:flex-col gap-5 w-full">
              <div className="w-[300px] h-[300px] rounded-3xl bg-gray-100 max-sm:mx-auto" />
              <div className="w-1/2 max-md:w-full flex flex-col justify-between gap-2">
                <div className="flex flex-col gap-2 w-full">
                  <p className="text-sm text-gray-300">
                    Guided By:{" "}
                    <span className="font-semibold text-gray-200">
                      {course?.instructor?.name}
                    </span>
                  </p>
                  <h2 className="text-2xl font-bold">{course?.name}</h2>
                  <p className="text-md max-sm:text-base leading-5">
                    {course?.description}
                  </p>
                  <div className="flex gap-3 items-center">
                    <Like course={course} />
                    <Enrolled enrolledStudents={course?.enrolledStudents} />
                    <p className="text-sm text-gray-300">
                      {course?.duration + " hrs"}
                    </p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <p className="text-sm text-gray-300">
                      {timeAgo(course?.createdAt)}
                    </p>
                    <div className="flex items-center text-gray-300 gap-1 text-sm">
                      <HourglassHigh
                        size={15}
                        weight="bold"
                        className="text-white"
                      />
                      <p>{course?.enrollmentStatus}</p>
                    </div>
                    <div className="flex items-center text-gray-300 gap-1 text-sm">
                      <MapPinLine
                        size={15}
                        weight="bold"
                        className="text-white"
                      />
                      <p>{course?.location}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">
                    {course?.courseSchedule}
                  </p>
                </div>
                <div className="flex gap-3 max-sm:flex-col max-sm:gap-4 max-sm:mt-4">
                  {isEnrolledCourse ? (
                    <div className="w-[250px] max-sm:w-full h-[60px] border-[2px] border-white text-white rounded-full font-semibold flex items-center justify-center text-lg hover:text-tertiary hover:bg-tertiary cursor-pointer transition-all duration-300 ease-in-out">
                      Mark As Completed
                    </div>
                  ) : isEnrolledLoading ? (
                    <div className="w-[250px] max-sm:w-full h-[60px] border-[2px] border-white rounded-full bg-gray-100 animate-pulse" />
                  ) : (
                    <div
                      className="w-[250px] max-sm:w-full h-[60px] border-[2px] border-white text-white rounded-full font-semibold flex items-center justify-center text-lg hover:text-tertiary hover:bg-tertiary cursor-pointer transition-all duration-300 ease-in-out"
                      onClick={handleEnrollClick}
                    >
                      Enroll Now
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex w-full overflow-x-auto my-5">
              {course?.prerequisites?.length === 0 ? (
                <p className="text-md sm:text-lg text-white font-semibold text-center">
                  No Prerequisites For This Course
                </p>
              ) : (
                <div className="flex flex-col gap-2">
                  <p className="text-xl font-semibold">
                    Prerequisites of the course
                  </p>
                  <div className="flex gap-5">
                    {course?.prerequisites?.map((item, idx) => (
                      <p
                        key={item + idx}
                        className="text-lg border-[2px] border-white rounded-full px-5 py-2 text-nowrap"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="w-full flex gap-5 max-sm:flex-col">
              <Syllabus syllabus={course?.syllabus} />
              <Reviews reviews={course?.reviews} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;
