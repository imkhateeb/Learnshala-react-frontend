import { useSelector } from "react-redux";
import { useState } from "react";
import { apiUrl } from "../../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddCourse = () => {
  const { instructors } = useSelector((state) => state.user);
  const [addingCourse, setAddingCourse] = useState(false);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    instructor: "",
    description: "",
    enrollmentStatus: "Open",
    thumbnail: "",
    duration: "",
    courseSchedule: "",
    location: "Online",
    prerequisites: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handlePrerequisitesChange = (e) => {
    setFormData({
      ...formData,
      prerequisites: e.target.value.split(",").map((item) => item.trim()),
    });
  };

  const userToken = localStorage.getItem("userToken");

  const uploadImage = async () => {
    if (!file) return null;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const { data } = await axios.post(
        `https://learnshala-node-backend.onrender.com/upload`,
        formData,
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      );
      return data.data.url;
    } catch (error) {
      console.log(error);
      toast.error("Image upload failed.");
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAddingCourse(true);

    let imageUrl = await uploadImage();
    if (!imageUrl) {
      setAddingCourse(false);
      return;
    }

    const finalData = { ...formData, thumbnail: imageUrl };

    console.log(finalData);

    try {
      const { data } = await axios.post(`${apiUrl}/courses`, finalData, {
        headers: { Authorization: `Bearer ${userToken}` },
      });
      if (data.status === "success") {
        toast.success("Course added successfully!");
        navigate("/courses");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error adding course. Please try again.");
    } finally {
      setAddingCourse(false);
    }
  };

  return (
    <div className="h-[88.5vh] flex items-center justify-center  text-white overflow-y-auto">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-6 rounded-xl bg-gray-900 shadow-lg h-[80vh] overflow-y-auto"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Add a New Course
        </h2>

        <label className="block mb-3">
          <span>Course Name:</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mt-1 bg-gray-800 border rounded-lg"
            required
          />
        </label>

        <label className="block mb-3">
          <span>Instructor:</span>
          <select
            name="instructor"
            value={formData.instructor}
            onChange={handleChange}
            className="w-full p-2 mt-1 bg-gray-800 border rounded-lg"
            required
          >
            <option value="">Select Instructor</option>
            {instructors.map((instructor) => (
              <option key={instructor._id} value={instructor._id}>
                {instructor.name}
              </option>
            ))}
          </select>
        </label>

        <label className="block mb-3">
          <span>Description:</span>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 mt-1 bg-gray-800 border rounded-lg"
            rows="3"
            required
          ></textarea>
        </label>

        <label className="block mb-3">
          <span>Course Schedule:</span>
          <input
            type="date"
            name="courseSchedule"
            value={formData.courseSchedule}
            onChange={handleChange}
            className="w-full p-2 mt-1 bg-gray-800 border rounded-lg"
            required
          />
        </label>

        <label className="block mb-3">
          <span>Thumbnail Image:</span>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-2 mt-1 bg-gray-800 border rounded-lg"
            required
          />
        </label>

        <label className="block mb-3">
          <span>Duration (hours):</span>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full p-2 mt-1 bg-gray-800 border rounded-lg"
            required
          />
        </label>

        <label className="block mb-3">
          <span>Prerequisites (comma-separated):</span>
          <input
            type="text"
            name="prerequisites"
            value={formData.prerequisites.join(", ")}
            onChange={handlePrerequisitesChange}
            className="w-full p-2 mt-1 bg-gray-800 border rounded-lg"
          />
        </label>

        <button
          type="submit"
          className="w-full py-2 mt-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-300 transition-all"
        >
          {addingCourse ? "Adding Course..." : "Add Course"}
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
