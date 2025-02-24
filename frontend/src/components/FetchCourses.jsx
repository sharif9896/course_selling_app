import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { courseAction } from "../store/courseSlice";
import { BACKEND_URL } from "../utils/utils";

const FetchCourses = () => {
  const dispatch = useDispatch();
  const fetchcourse = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}api/v1//list`);
      dispatch(courseAction.addcourse(response.data.course))
    } catch (e) {
      console.log("Error in courses!");
    }
  };
  
  useEffect(() => {
    fetchcourse();
  }, []);
  return <></>;
};

export default FetchCourses;
