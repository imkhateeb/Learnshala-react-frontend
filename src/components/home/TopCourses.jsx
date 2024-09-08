import { useState } from "react";

const TopCourses = () => {
  const [topCoursesLoading, setTopCoursesLoading] = useState(true);

  return (
    <div
      id="top-courses"
      className="w-[90%] max-md:w-[95%] mx-auto flex flex-col overflow-hidden my-16"
    >
      <h1 className="heading mx-auto">Top Courses.</h1>
      <div className="flex justify-center overflow-x-auto scrollbar-hide py-4 px-12 gap-8 animate-slight-up">
        {topCoursesLoading ? (
          [1, 2, 3, 4, 5].map((item, idx) => (
            <div
              key={item + idx}
              className="flex-shrink-0 w-[310px] h-[350px] bg-primary/50 rounded-3xl"
            >
              <div className="flex flex-col items-center justify-between gap-4 w-full h-full p-5">
                <div>
                  <div className="w-[100px] h-[100px] bg-gray-300 rounded-full animate-pulse" />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="w-[200px] h-[20px] bg-gray-300 rounded-full animate-pulse" />
                  <p className="w-[150px] h-[20px] bg-gray-300 rounded-full animate-pulse" />
                  <p className="w-[250px] h-[20px] bg-gray-300 rounded-full animate-pulse" />
                </div>
                <div className="w-[90%] h-[50px] rounded-3xl animate-pulse bg-gray-300" />
              </div>
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default TopCourses;
