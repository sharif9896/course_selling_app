import React from 'react'
import { Link } from 'react-router-dom';

const Topsection = () => {
  return (
      <section className='text-center py-1'>
        <h1 className='text-xl sm:text-4xl font-semibold text-orange-500'>
            CourseHaven
        </h1>
        <br />
        <p className='text-gray-500 text-[15px] sm:text-gray-500'>
            Sharpen Your Skills with Courses Crafted by Experts.
        </p>
        <div className="space-x-4 mt-5  flex justify-center gap-2 flex-wrap">
            <Link to={"/courses"} className='bg-green-500  text-white font-semibold py-3   px-5 cursor-pointer rounded hover:bg-white duration-300 hover:text-black '>Explore Courses</Link>
            <button className='bg-white text-black font-semibold py-3 px-5   cursor-pointer rounded hover:bg-green-500 duration-300 hover:text-white'>Courses Videos</button>
        </div>
        <br />
      </section>
  )
}

export default Topsection;
