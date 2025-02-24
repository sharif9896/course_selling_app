// import { assets } from "../assets/assets";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <br />
    <br />
      <hr className="border-white mx-10 bg-white" />
      <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mx-10 my-10 mt-40 text-sm">
          <div>
            <Link to={"/"}>
              <div className="flex">
                <img className="w-15 mb-5" src="log.png" alt="" />{" "}
                <h1 className="text-xl mt-4 sm:text-2xl font-semibold text-orange-500">
                  CourseHaven
                </h1>
              </div>
            </Link>
            <p className="w-full md:w-2/3 text-gray-400">
              We are passionate about delivering an exceptional shopping
              experience. Our team is dedicated to providing top-notch customer
              service, ensuring your satisfaction at every step. From selecting
              the perfect product to delivering it to your doorstep, we go the
              extra mile to make your experience seamless and enjoyable.
            </p>
            <div className="flex mt-2 gap-4">
              <a href="http://twitter.com" className=" text-white">
                <FaTwitter className="text-2xl hover:text-blue-400" />
              </a>

              <a href="http://twitter.com" className=" text-white">
                <FaFacebook className="text-2xl hover:text-blue-600" />
              </a>
              <a href="http://twitter.com" className=" text-white">
                <RiInstagramFill className="text-2xl hover:text-pink-400" />
              </a>
            </div>
          </div>
          <div>
            <p className="text-xl font-medium mb-5">Company</p>
            <ul className="flex flex-col gap-1 text-gray-400">
              <li>Home</li>
              <li>About US</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-400">
              <li>+918838612520</li>
              <li>contact@Course_Selling_amazeyou.com</li>
            </ul>
          </div>
        </div>
        <div>
          <hr className="border-gray-800" />
          <p className="text-center text-gray-200 py-5 text-sm">
            Copyright 2025@ Course_Selling_amaze.com - All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
