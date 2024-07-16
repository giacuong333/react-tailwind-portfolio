import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { RiCameraLensLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <section className="bg-black">
      <div className="max-w-[1240px] w-full mx-auto px-4 py-[80px]">
        <div className="grid md:grid-cols-5 gap-x-4 gap-y-6 text-white">
          <div className="space-y-6 md:col-span-2">
            <h1 className="font-bold text-xl">About Me</h1>
            <p className="text-gray-400 text-sm">
              Do you want to be even more successful? Learn to love learning and growth. The more effort you put into
              improving your skills, <br /> <br /> Copyright ©2024 All rights reserved | This template is made with{" "}
              <FaRegHeart className="inline-block" /> by{" "}
              <a href="/" className="primary-color inline-block">
                Colorlib
              </a>
            </p>
          </div>
          <div className="space-y-6 md:col-span-2 md:ml-4">
            <h1 className="font-bold text-xl">Newsletter</h1>
            <p className="text-gray-400 text-sm">Stay updated with our latest trends</p>
            <div className="w-full h-10 flex items-center justify-start">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent outline-none email-input w-[78%] h-full text-sm pl-4"
              />
              <button
                type="button"
                style={{ backgroundImage: "-webkit-linear-gradient(0deg, #766dff 0%, #88f3ff 100%)" }}
                className="h-full px-4">
                <GoArrowRight />
              </button>
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="font-bold text-xl">Follow Me</h1>
            <p className="text-gray-400 text-sm">Let us be social</p>
            <ul className="flex items-center justify-start">
              <li className="cursor-pointer primary-color-hover duration-300 ease-in-out">
                <FaFacebookF />
              </li>
              <li className="ml-4 cursor-pointer primary-color-hover duration-300 ease-in-out">
                <FaTwitter />
              </li>
              <li className="ml-4 cursor-pointer primary-color-hover duration-300 ease-in-out">
                <RiCameraLensLine />
              </li>
              <li className="ml-4 cursor-pointer primary-color-hover duration-300 ease-in-out">
                <FaGithub />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
