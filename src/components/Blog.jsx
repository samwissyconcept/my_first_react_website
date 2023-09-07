import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import { news } from "./localDatabase";
function Blog() {
  return (
    <div className="bg-gray-100">
      <div className="w-10/12 m-auto py-8">
        <h1 className="text-center font-bold py-4 text-xl uppercase">
          Explore the World of Tech Insights
        </h1>
        <p className="text-center text-lg pb-4">
          Stay Informed and Inspired with Our Latest Blog Posts on Innovation,
          Tech Trends, and Digital Transformation.
        </p>
        <div className="">
          <div className="grid max-sm:grid-cols-1 md:grid-cols-3 gap-y-28">
            {news.map((x) => (
              <div className="bg-white rounded-md p-2 m-2 " key={x._id}>
                <img src={x.image} className="" alt="news-image" />

                <div className="py-2">
                  <h1 className="text-xl font-bold py-4">{x.headline}</h1>
                  <div className="">
                    <p className="text-lg ">{x.newsDetails.slice(0, 70)}...</p>
                    <div className="flex items-center">
                      <Link to="/blog-detail" className=" text-blue-500">
                        Read More
                      </Link>
                      <BsArrowRightShort
                        size={20}
                        className="ml-4 text-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
