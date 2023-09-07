import React from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { IoMdBusiness } from "react-icons/io";
import { MdDesignServices } from "react-icons/md";
function HelpingLocal() {
  return (
    <div className="bg-[#f5F5F5] ">
      <div className="w-10/12 m-auto py-8 grid md:grid-cols-2">
        <div className="">
          <h1 className="lg:text-4xl font-bold">
            Helping a local <br />
            <span className="text-blue-500">business reinvent itself</span>
          </h1>
          <p className="py-4">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <AiOutlineTeam size={35} className="text-blue-500 mr-4" />
            <div className="">
              <h1 className="text-2xl font-bold">10</h1>
              <p>Teams</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaLaptopCode size={35} className="text-blue-500 mr-4" />
            <div className="">
              <h1 className="text-2xl font-bold">140</h1>
              <p>Website developed</p>
            </div>
          </div>{" "}
          <div className="flex items-center">
            <IoMdBusiness size={35} className="text-blue-500 mr-4" />
            <div className="">
              <h1 className="text-2xl font-bold">590</h1>
              <p>Digital marketing</p>
            </div>
          </div>{" "}
          <div className="flex items-center">
            <MdDesignServices size={35} className="text-blue-500 mr-4" />
            <div className="">
              <h1 className="text-2xl font-bold">1,247</h1>
              <p>Designs for clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpingLocal;
