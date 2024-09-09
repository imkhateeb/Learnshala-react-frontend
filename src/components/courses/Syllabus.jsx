import timeAgo from "./utils/timeAgo";

const Syllabus = ({ syllabus }) => {
  return (
    <div
      className={`w-1/2 max-sm:w-full overflow-y-auto bg-gray-300 bg-opacity-25 rounded-3xl max-sm:mx-auto flex flex-col gap-4 text-white p-4 ${
        syllabus?.length === 0 ? "h-[30vh]" : "max-h-[90vh]"
      }`}
    >
      <h2 className="text-xl font-bold">Syllabus</h2>
      {syllabus?.length > 0 ? (
        <div className="py-5 flex flex-col">
          {syllabus?.map((item, idx) => (
            <div key={item?._id} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div>
                  <div className="w-[30px] h-[30px] bg-white rounded-full text-xl font-semibold text-tertiary flex items-center justify-center">
                    {idx + 1}
                  </div>
                </div>
                <div className="h-full w-[2px] bg-white bg-opacity-50" />
              </div>
              <div className="flex flex-col pb-10">
                <p className="text-md font-semibold text-gray-300">
                  Week {idx + 1}
                </p>
                <h3 className="text-xl font-semibold">{item?.topic}</h3>
                <p className="text-gray-300 leading-4 pt-1 pb-2">
                  {item?.description}
                </p>
                <p className="text-xs text-gray-400">
                  {timeAgo(item?.createdAt)}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center pb-4">
          <p className="px-5 text-center text-lg font-semibold text-gray-300">
            Syllabus is yet to be updated by the instructor.
          </p>
        </div>
      )}
    </div>
  );
};

export default Syllabus;
