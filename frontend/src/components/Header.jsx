import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { AuthAction } from "../store/AuthenticSlice";
import axios from "axios";
import { toast } from "react-toastify";
import { BACKEND_URL } from "../utils/utils";

const Header = () => {
  const [visible, setvisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // token
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  const handleLogout = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}api/user/logout`);
      toast.success(response.data.message);
      localStorage.removeItem("user");
      setIsLoggedIn(false)
    } catch (error) {
      console.log("Error in logging out ", error);
      toast.error(error.response.data.error);
    }
  };
  
  return (
    <>
      <div className="z-1 flex item-center justify-between gap-15 py-4 px-4 ">
        <Link to={"/"}>
          <div className="flex">
            <img className="w-15" src="log.png" alt="" />{" "}
            <h1 className="text-xl mt-4 sm:text-2xl font-semibold text-orange-500">
              CourseHaven
            </h1>
          </div>
        </Link>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-transparent cursor-pointer text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded"
          >
            Logout
          </button>
        ) : (
          <div className="hidden sm:flex flex-cols gap-2 my-4 text-gray-800 font-medium">
            <Link
              className="flex item-center gap-3 text-white border rounded  px-4 py-1 text-xm hover:drop-shadow-lg cursor-pointer"
              to={"/login"}
            >
              <button className="cursor-pointer">Login</button>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </Link>
            <Link
              className="flex item-center gap-3 text-white border rounded px-4 py-1  text-xm hover:drop-shadow-lg cursor-pointer"
              to={"/signup"}
            >
              <button className="cursor-pointer">Signup</button>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </Link>
          </div>
        )}
        <img
          onClick={() => setvisible(true)}
          className="sm:hidden w-8 h-8 mt-2 cursor-pointer"
          src="menu_icon.png"
          alt=""
        />
      </div>
      <div
        className={` z-2 absolute top-0 right-0 bottom-0 bg-gradient-to-r from-black to-blue-950  text-white overflow-hidden transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-cols flex-row py-5 px-5 ">
          <div
            onClick={() => setvisible(false)}
            className="flex item-center gap-5 cursor-pointer"
          >
            <img
              className="w-2 h-5 my-1 rotate-180"
              src="dropdown_icon.png"
              alt=""
            />
            <div className="flex item-center">Back</div>
          </div>
        </div>

        <hr className="border-gray-300 w-[100%]" />
        <div className="px-10 ">
          <NavLink onClick={() => setvisible(false)} to={"/"}>
            <div className="flex item-center gap-8 cursor-pointer py-3">
              Home
            </div>
          </NavLink>

          <hr className="border-gray-300" />
          <NavLink onClick={() => setvisible(false)} to={"/About"}>
            <div className="flex item-center gap-8 cursor-pointer py-3">
              About
            </div>
          </NavLink>

          <hr className="border-gray-300" />
          <NavLink onClick={() => setvisible(false)} to={"/Contact"}>
            <div className="flex item-center gap-8 cursor-pointer py-3">
              Contact
            </div>
          </NavLink>

          <hr className="border-gray-300" />
          <NavLink
            className="flex item-center justify-center gap-3 bg-gradient-to-r from-black to-blue-950 text-white   rounded  py-5 text-xm hover:drop-shadow-lg cursor-pointer"
            to={"/login"}
          >
            <button className="cursor-pointer">Login</button>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <hr className="border-gray-300" />
          <NavLink
            className="flex item-center justify-center bg-gradient-to-r from-black to-blue-950 text-white  gap-3  rounded  py-5 text-xm hover:drop-shadow-lg cursor-pointer"
            to={"/signup"}
          >
            <button className="cursor-pointer">Signup</button>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <hr className="border-gray-300" />
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default Header;
