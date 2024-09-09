import { Rate } from "antd";
import { useState } from "react";
import toast from "react-hot-toast";

const AddReview = ({ onClose }) => {
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");

  const handleAddReview = () => {
    if (!review?.trim()) {
      toast.error("Review is required");
      return;
    }
    // Handle enrollment logic here
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white text-black rounded-3xl p-8 w-[90%] max-w-md mx-auto animate-slight-up">
        <h2 className="text-xl font-bold mb-4">Add A Review</h2>
        <div className="flex flex-col w-full gap-2 mb-4">
          <Rate allowHalf defaultValue={5} onChange={(e) => setRating(e)} />
          <input
            type="text"
            onChange={(e) => setReview(e.target.value)}
            placeholder="Rate from 1 to 5"
            className="w-[300px] w-full h-[50px] bg-transparent rounded-full outline-none border-[2px] focus:border-tertiary border-gray-400 px-5 placeholder:text-gray-400 text-tertiary transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border-tertiary border-[2px] rounded-full hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
          >
            Cancel
          </button>
          <button
            onClick={handleAddReview}
            className="px-4 py-2 border-tertiary border-[2px] rounded-full bg-primary text-white transition-all duration-300 ease-in-out hover:bg-tertiary hover:text-tertiary"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
