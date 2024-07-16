import React from "react";
import avatar from "../assets/myImage.jpg";
import { RxCalendar } from "react-icons/rx";
import { LuPhone } from "react-icons/lu";
import { GoMail } from "react-icons/go";
import { PiHouseLine } from "react-icons/pi";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function Slider() {
  return (
    <section
      className="lg:pt-[180px] h-screen p-4"
      style={{ backgroundImage: "-webkit-linear-gradient(0deg, #766dff 0%, #88f3ff 100%)" }}>
      <div className="rounded-xl shadow-2xl p-8 grid lg:grid-cols-2 grid-flow-row bg-white w-full max-w-[1240px] mx-auto">
        <div className="">
          <img src={avatar} alt="Avatar" className="w-full rounded-md object-cover object-center" />
        </div>

        <div className="lg:px-[80px] md:mx-auto w-full">
          <div className="mt-6">
            <p className="uppercase">
              HELLO EVERYBODY, I AM <span className="font-bold text-4xl block text-gray-900 my-4">LE GIA CUONG</span>
            </p>
            <p className="uppercase font-medium text-xl text-gray-900">JUNIOR UI/UX DEVELOPER</p>
            <p className="text-gray-600 text-md mt-4 mb-6">
              You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost
              showing Scrooge some different futures)
            </p>
          </div>

          <div>
            <div className="flex items-center mb-4">
              <RxCalendar size={22} className="primary-color" />
              <p className="ml-4 text-gray-600 text-md">12th October, 2003</p>
            </div>
            <div className="flex items-center mb-4">
              <LuPhone size={22} className="primary-color" />
              <p className="ml-4 text-gray-600 text-md">0948800917</p>
            </div>
            <div className="flex items-center mb-4">
              <GoMail size={22} className="primary-color" />
              <p className="ml-4 text-gray-600 text-md">legiacuong789@gmail.com</p>
            </div>
            <div className="flex items-center mb-4">
              <PiHouseLine size={22} className="primary-color" />
              <p className="ml-4 text-gray-600 text-md">245 Phu Dinh, P16, Q8, Tp.HCM</p>
            </div>

            <div className="flex items-center mt-9">
              <FaFacebookSquare
                size={40}
                className="cursor-pointer primary-background rounded-md text-gray-300 hover:text-white"
              />
              <FaInstagramSquare
                size={40}
                className="cursor-pointer ml-2 primary-background rounded-md text-gray-300 hover:text-white"
              />
              <FaLinkedin
                size={40}
                className="cursor-pointer ml-2 primary-background rounded-md text-gray-300 hover:text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
