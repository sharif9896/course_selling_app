import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";

const Responsive = () => {
  const course = useSelector((store) => store.courses);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    draggable: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        dots: true,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-full max-w-5xl mx-auto p-4">
        <Slider className="" {...settings}>
          {course.map((card) => (
            <div key={card._id} className="p-2">
              <div className="relative flex-shrink-0 transition-transform duration-300 transform hover:scale-105">
                <div className="bg-gray-900 cursor-pointer shadow-lg rounded-xl overflow-hidden">
                  <img
                    src={card.image.url}
                    alt={card.title}
                    className="hover:scale-110 h-32 w-full transition ease-in-out card-img-top  object-cover"
                  />
                  <div className="p-6 text-center">
                    <h2 className="text-lg font-semibold text-white">
                      {card.title}
                    </h2>

                    <center>
                      <Link
                        to={"/courses"}
                        className="mt-4 cursor-pointer bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-blue-500 duration-300"
                      >
                        Enroll now
                      </Link>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Responsive;
