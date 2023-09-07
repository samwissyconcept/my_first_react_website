import React from "react";
import { Link } from "react-router-dom";
import about from "../assets/about1.svg";
function AboutUs() {
  return (
    <div>
      <div className=" w-10/12 m-auto grid sm:-grid-cols-1 md:grid-cols-2 py-8">
        <div className="mb-8">
          <img className="w-full p-4" src={about} alt="about" />
        </div>
        <div className="text">
          <h1 className="text-3xl font-bold ">About Wissycon</h1>
          <p className="py-4 text-lg">
            At Wissycon, we are driven by a deep passion for technology and its
            transformative power. Established as a beacon of innovation in the
            tech industry, we've dedicated ourselves to delivering cutting-edge
            solutions that empower businesses in the digital age.
          </p>
          <p className="text-lg pb-4 md:hidden lg:block">
            Our journey began with a group of tech enthusiasts who recognized
            the immense potential of the digital world. Over the years, we've
            evolved into a powerhouse of creativity and expertise, offering a
            comprehensive suite of services spanning web development, graphic
            design, and digital marketing.
          </p>
          <p className="text-lg pb-4 md:hidden lg:block">
            Our mission is clear: to bridge the gap between your vision and
            technological reality. We believe that every challenge is an
            opportunity for innovation, and we thrive on turning ideas into
            impactful digital experiences.
          </p>
          <Link to="/about">
            <a href="https://wa.me/+2349066393038">
              <button className="text-white bg-blue-500 rounded-md p-2 hover:bg-blue-600">
                Connect with Wissycon
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
