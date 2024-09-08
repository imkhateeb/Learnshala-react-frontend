import { useState } from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  const [coursesLoading, setCoursesLoading] = useState(true);

  return (
    <div className="bg-primary rounded-[50px] min-h-[85vh] flex flex-col w-[90%] max-md:w-[95%] mx-auto p-20 max-lg:p-10 max-sm:p-5 max-md:p-8 gap-5">
      <div>
        {coursesLoading ? (
          <div className="flex w-full items-center justify-between">
            <div className="w-[300px] max-sm:w-[250px] h-[50px] bg-gray-100 rounded-full animate-pulse max-sm:mx-auto" />

            <div className="w-[50px] h-[50px] bg-gray-100 rounded-full animate-pulse max-sm:mx-auto" />
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="flex flex-col gap-8 w-full">
        {coursesLoading ? (
          [1, 2, 3, 4].map((item, idx) => (
            <div key={item + idx} className="flex gap-4 w-full max-sm:flex-col">
              <div className="w-[180px] h-[180px] bg-gray-100 rounded-lg animate-pulse max-sm:mx-auto" />
              <div className="flex flex-col gap-3">
                <div className="w-[180px] h-[20px] bg-gray-100 rounded-full animate-pulse" />
                <div className="w-[300px] h-[20px] bg-gray-100 rounded-full animate-pulse" />
                <div className="w-[50px] h-[20px] bg-gray-100 rounded-full animate-pulse" />
                <div className="w-[50px] h-[20px] bg-gray-100 rounded-full animate-pulse" />
                <div className="h-full flex flex-col justify-between">
                  <div />
                  <div className="w-[200px] max-sm:w-full h-[50px] bg-gray-100 rounded-full animate-pulse" />
                </div>
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

export default Courses;
