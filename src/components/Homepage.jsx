import React from "react";
import hompepage_image from "../assets/homepage1.svg";
function Homepage() {
  return (
    <div className="bg-[rgb(245,247,250)]  py-16  md:py-16 lg:py-32 xl:py-68 mt-4 lg:h-[calc(100vh-3.5rem)]">
      <div className="w-10/12 m-auto md:flex justify-between">
        <div className="text">
          <h1 className="md:text-4xl text-black-500 text-4xl lg:text-6xl font-bold">
            <span className="text-blue-500"> Wissycon</span>
            <br />
            Empowering Digital Excellence{" "}
          </h1>
          <p className="my-8">
            Discover the future of IT solutions with Wissycon. We're your
            trusted partners for cutting-edge technology and unparalleled
            expertise. Explore our services and embark on a journey to digital
            success today.
          </p>
          <button className="bg-blue-500 text-white rounded  p-2">
            Register
          </button>
        </div>
        <div className="image mt-8">
          <img src={hompepage_image} alt="homepage_image" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
