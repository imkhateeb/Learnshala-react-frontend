import { createSlice } from "@reduxjs/toolkit";

import { getCourses } from "./reducers/getCourses";
import { likeUnlikeCourse } from "./reducers/likeUnlikeCourse";

const initialState = {
  courses: [],
  coursesLoading: false,
  coursesError: null,

  course: null,
  courseLoading: false,
  courseError: null,
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCourses.pending, (state) => {
      state.coursesLoading = true;
      state.coursesError = null;
    });
    builder.addCase(getCourses.fulfilled, (state, action) => {
      state.coursesLoading = false;
      state.courses = action.payload;
    });
    builder.addCase(getCourses.rejected, (state, action) => {
      state.coursesLoading = false;
      state.coursesError = action.payload;
    });
    builder.addCase(likeUnlikeCourse.fulfilled, (state, action) => {
      state.courses = state.courses?.map((course) =>
        course._id === action.payload._id ? action.payload : course
      );
    });
  },
});

export default courseSlice.reducer;
