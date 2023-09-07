import React from "react";
import { Link } from "react-router-dom";
import samuel from "../assets/samuel.jpg";
import { company_brands } from "./localDatabase";
import { FaArrowRight } from "react-icons/fa";
function Brand() {
  return (
    <div>
      <div className=" w-10/12 m-auto grid sm:-grid-cols-1 md:grid-cols-2 py-8">
        <div className="mb-8 mr-4">
          <img className="w-full " src={samuel} alt="about" />
        </div>
        <div className="text">
          <p className="py-4 text-lg font-serif">
            Akeredolu Samuel, a visionary leader and tech enthusiast, hails from
            the picturesque Ondo State in Nigeria. His journey into the world of
            technology began as a young dreamer, eager to make a difference in
            his community and beyond.
          </p>
          <p className="py-4 text-lg font-serif">
            Growing up in the vibrant culture of Ondo State, Samuel exhibited a
            natural curiosity for all things tech-related. At an early age, he
            developed a knack for dismantling and reassembling gadgets, earning
            him the nickname "Tech Wizard" among his peers.
          </p>
          <p className="py-4 text-lg font-serif">
            Akeredolu Samuel is deeply committed to tech education and regularly
            mentors young tech enthusiasts in Ondo State. His work fosters a new
            generation of tech leaders in the region.
          </p>{" "}
          <p className="py-4 text-lg font-serif">
            As CEO of Wissycon, Samuel continues to lead with a vision of
            technology as a force for positive change. His journey from
            curiosity to tech leadership inspires tech enthusiasts worldwide.
          </p>
          <h1 className="text-blue-500 font-bold py-4">Akeredolu Samuel</h1>
          <h1 className="text-xl font-bold pb-4">C.E.O of Wissycon</h1>
          <div className="md:flex  items-center  ">
            <div className="grid md:grid-cols-8 gap-2">
              {company_brands.map((brand) => (
                <div
                  className="md:flex md:items-center flex-center"
                  key={brand._id}
                >
                  <img
                    src={brand.image}
                    alt="brand-image"
                    className="w-full  py-4 md:w-[40px] lg:w-[70px] rounded-md max-sm:bg-gray-100  md:bg-0"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center py-4">
              <Link className="text-green-500 rl-4 md:text-[10px] text-xl">
                See All Customers
              </Link>
              <FaArrowRight size={20} className="text-green-500 ml-4" />
            </div>
          </div>
        </div>
        {/* here */}
      </div>
    </div>
  );
}

export default Brand;
