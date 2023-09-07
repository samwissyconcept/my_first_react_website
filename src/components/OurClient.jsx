import React from "react";
import { company_brands } from "./localDatabase";
import { FaLaptopCode } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { IoMdBusiness } from "react-icons/io";
import security_image from "../assets/security (2).svg";
import { Link } from "react-router-dom";
function OurClient() {
  return (
    <div className="bg-white w-10/12 m-auto py-10">
      <h1 className="font-bold text-2xl text-center">Our Clients</h1>
      <p className="text-lg text-center">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="brands_images grid md:grid-cols-4 lg:grid-cols-7 gap-4 py-8">
        {company_brands.map((image) => (
          <div className="flex items-center " key={image._id}>
            <img src={image.image} alt="brands" className="w-[80px]" />
          </div>
        ))}
      </div>
      <div className="md:hidden flex items-center flex-wrap justify-between">
        {company_brands.map((image) => (
          <div className="  " key={image._id}>
            <img src={image.image} alt="brands" className="w-[100px]" />
          </div>
        ))}
      </div>
      <h1 className="pt-8 text-center font-bold text-3xl md:w-[30%] m-auto">
        Our Expertise
      </h1>
      <p className="text-center pb-4"></p>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 ">
        <div className="text-center   boxshadow p-8 rounded-sm">
          <div className="flex justify-center">
            <FaLaptopCode className="text-blue-500" size={50} />
          </div>
          <h1 className="text-xl font-bold py-4">Web Development </h1>
          <p>
            Crafting exceptional web solutions with expertise, delivering
            outstanding results, and setting your digital presence apart.
          </p>
        </div>
        <div className="text-center boxshadow p-8 rounded-sm">
          <div className="flex justify-center">
            <MdDesignServices className="text-blue-500" size={50} color="" />
          </div>
          <h1 className="text-xl font-bold py-4 ">Graphics Design </h1>
          <p>
            Creating striking visuals, delivering captivating designs, and
            elevating your brand's visual identity
          </p>
        </div>
        <div className="text-center boxshadow p-8 rounded-sm">
          <div className="flex justify-center">
            <IoMdBusiness className="text-blue-500" size={50} />
          </div>
          <h1 className="text-xl font-bold py-4"> Digital Marketing</h1>
          <p>
            Driving online success, optimizing strategies, and amplifying your
            brand's online presence and reach.
          </p>
        </div>
      </div>
      {/* last div */}
    </div>
  );
}

export default OurClient;
