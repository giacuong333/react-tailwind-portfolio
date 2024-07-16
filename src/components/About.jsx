import React from "react";
import { GoDatabase } from "react-icons/go";
import { FiBook } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";

function About() {
  return (
    <section className="lg:mt-[450px] md:mt-[400px] mt-[200px] mb-[100px]">
      <div className="grid md:grid-cols-2 md:gap-x-10 w-full max-w-[1240px] mx-auto px-8">
        <div>
          <h1 className="font-bold text-4xl text-gray-900">ABOUT MYSELF</h1>
          <p className="text-gray-600 my-6 max-w-[460px]">
            inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards
            especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond
            reproach. inappropriate behavior is often laughed.
          </p>
          <div className="grid md:grid-cols-3 md:gap-x-8">
            <div className="border border-gray-200 rounded-md p-4 mb-4">
              <GoDatabase size={26} className="primary-color" />
              <p className="font-bold text-2xl my-2 text-gray-800">$2.5M</p>
              <p className="text-md text-gray-500">Total Donation</p>
            </div>
            <div className="border border-gray-200 rounded-md p-4 mb-4">
              <FiBook size={26} className="primary-color" />
              <p className="font-bold text-2xl my-2 text-gray-800">1465</p>
              <p className="text-md text-gray-500">Total Projects</p>
            </div>
            <div className="border border-gray-200 rounded-md p-4 mb-4">
              <FiUsers size={26} className="primary-color" />
              <p className="font-bold text-2xl my-2 text-gray-800">3965</p>
              <p className="text-md text-gray-500">Total Volunteers</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="mb-4">
            <p className="mb-2 font-medium text-sm">After Effects 85%</p>
            <div className="w-full h-[18px] px-1 py-2 border border-gray-200 rounded-full">
              <div className="h-[10px] w-full mt-[-5px] rounded-full bg-gray-300">
                <div className="h-full w-[85%] primary-background-color rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <p className="mb-2 font-medium text-sm">Photoshop 90%</p>
            <div className="w-full h-[18px] px-1 py-2 border border-gray-200 rounded-full">
              <div className="h-[10px] w-full mt-[-5px] rounded-full bg-gray-300">
                <div className="h-full w-[90%] primary-background-color rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <p className="mb-2 font-medium text-sm">Illustrator 70%</p>
            <div className="w-full h-[18px] px-1 py-2 border border-gray-200 rounded-full">
              <div className="h-[10px] w-full mt-[-5px] rounded-full bg-gray-300">
                <div className="h-full w-[70%] primary-background-color rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <p className="mb-2 font-medium text-sm">Sublime 95%</p>
            <div className="w-full h-[18px] px-1 py-2 border border-gray-200 rounded-full">
              <div className="h-[10px] w-full mt-[-5px] rounded-full bg-gray-300">
                <div className="h-full w-[95%] primary-background-color rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <p className="mb-2 font-medium text-sm">Sketch 75%</p>
            <div className="w-full h-[18px] px-1 py-2 border border-gray-200 rounded-full">
              <div className="h-[10px] w-full mt-[-5px] rounded-full bg-gray-300">
                <div className="h-full w-[75%] primary-background-color rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
