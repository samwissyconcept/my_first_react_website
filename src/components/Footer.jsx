import React from "react";
import {
  AiOutlineDribbble,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { CiYoutube } from "react-icons/ci";
import { BsSend } from "react-icons/bs";
import { Link } from "react-router-dom";
function Footer() {
  const day = new Date();
  const year = day.getFullYear();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-black text-white py-8">
      <div className="grid sm:grid-cols-1 md:grid-cols-4 w-10/12 m-auto gap-8">
        <div className="">
          <div className="flex items-center">
            <img src="" alt="" />
            <h1 className="text-xl font-bold uppercase">Wissycon</h1>
          </div>

          <div className="">
            <p className="text-lg py-8">
              Copy right &copy; {year} Wissycon <br /> all rights reserved{" "}
            </p>
            <div className="flex items-center">
              <a href="https://www.dribble.com/wissyccon" target="blank">
                <AiOutlineDribbble className="mx-2  cursor-pointer" size={25} />
              </a>
              <a href="https://www.twitter.com/wissyccon" target="blank">
                <AiOutlineTwitter className="mx-2 " size={25} />
              </a>
              <a href="https://www.instagram.com/wissyccon_" target="blank">
                <AiOutlineInstagram className="mx-2 " size={25} />
              </a>
              <a href="https://www.youtube.com/wissyccon" target="blank">
                <CiYoutube className="mx-2 " size={25} />
              </a>
            </div>
          </div>
        </div>
        <div className="company">
          <h1 className="text-xl font-bold uppercase">company </h1>
          <div className="">
            <ul className="py-8">
              <Link to="/about-us">
                <li className="py-2 text-xl cursor-pointer">About Us</li>
              </Link>
              <Link to="/blog">
                <li className="py-2 text-xl cursor-pointer">Blog</li>
              </Link>
              <Link to="/contact">
                <li className="py-2 text-xl cursor-pointer">Contact Us</li>
              </Link>
              <Link to="/pricing">
                <li className="py-2 text-xl cursor-pointer">Pricing</li>
              </Link>
              <Link to="/testimonials">
                <li className="py-2 text-xl cursor-pointer">Testimonials</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="support">
          <h1 className="text-xl font-bold uppercase">Support </h1>
          <div className="">
            <ul className="py-8">
              <Link to="/help-center">
                <li className="py-2 text-xl cursor-pointer">Help Center</li>
              </Link>
              <Link to="/terms-and-services">
                <li className="py-2 text-xl cursor-pointer">
                  Terms and services
                </li>
              </Link>
              <Link to="/legal">
                <li className="py-2 text-xl cursor-pointer">Legal</li>
              </Link>
              <Link to="/privacy-Policy">
                <li className="py-2 text-xl cursor-pointer">Privacy Policy</li>
              </Link>
              <Link to="/status">
                <li className="py-2 text-xl cursor-pointer">Status</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="stay tune">
          <h1 className="text-xl font-bold uppercase">Stay Tune </h1>
          <div className="py-8">
            <form
              onSubmit={handleSubmit}
              className="flex items-center justify-between bg-gray-300 p-2 md:p-1 rounded"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="outline-none bg-gray-300 w-full "
              />
              <button type="submit">
                <BsSend size={25} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
