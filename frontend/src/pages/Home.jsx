import React from "react";
import Topsection from "../components/Topsection";
import FetchCourses from "../components/FetchCourses";
// import CourseSlider from "../components/CourseSlider";
import Responsive from "../components/Responsive";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className=" bg-gradient-to-r from-black to-blue-950 max-w-[1380px] mx-auto w-[100%]">
        <Header />
        <Topsection />
        <FetchCourses />
        <Responsive />
        <Footer />
      </div>
    </>
  );
};

export default Home;
