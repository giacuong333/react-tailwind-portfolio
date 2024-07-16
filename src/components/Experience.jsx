import React from "react";

function Experience() {
  return (
    <section style={{ backgroundImage: "-webkit-linear-gradient(0deg, #766dff 0%, #88f3ff 100%)" }}>
      <div className="max-w-[1240px] w-full mx-auto px-4 py-[80px]">
        <div className="mx-auto w-full text-center mb-[50px]">
          <button type="button" className="px-4 py-3 text-sm font-medium mx-2 rounded-md bg-white">
            My Experiences
          </button>
          <button
            type="button"
            className="px-4 py-3 text-sm font-medium mx-2 rounded-md border border-gray-300 text-white"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1);" }}>
            My Education
          </button>
        </div>
        <div className="grid grid-cols-2 gap-x-20 relative">
          <div className="ml-auto text-white space-y-40 mt-6 md:space-y-36 md:mt-5">
            <p className="text-gray-50 opacity-90">March 2017 to present</p>
            <p className="text-gray-50 opacity-90">March 2017 to present</p>
            <p className="text-gray-50 opacity-90">March 2017 to present</p>
          </div>
          <div className="absolute top-[-20px] bottom-[-20px] left-1/2 w-[4px] rounded-full bg-slate-300 flex items-center justify-center">
            <div className="absolute top-[50px] md:top-[46px] w-4 h-4 flex items-center justify-center">
              <div className="bg-slate-200 opacity-70 w-full h-full rounded-full flex items-center justify-center">
                <div className="bg-white w-2 h-2 rounded-full opacity-100"></div>
              </div>
            </div>
            <div className="absolute top-[46%] md:top-[49%] w-4 h-4 flex items-center justify-center">
              <div className="bg-slate-200 opacity-70 w-full h-full rounded-full flex items-center justify-center">
                <div className="bg-white w-2 h-2 rounded-full opacity-100"></div>
              </div>
            </div>
            <div className="absolute bottom-[74px] md:bottom-[9%] w-4 h-4 flex items-center justify-center">
              <div className="bg-slate-200 opacity-70 w-full h-full rounded-full flex items-center justify-center">
                <div className="bg-white w-2 h-2 rounded-full opacity-100"></div>
              </div>
            </div>
          </div>
          <div className="space-y-24">
            <span className="text-white inline-block">
              <p className="font-bold text-xl mb-4">COLORLIB</p>
              <p className="text-gray-50 opacity-90">Senior Web Developer Santa monica, Los angeles</p>
            </span>
            <span className="text-white inline-block">
              <p className="font-bold text-xl mb-4">COLORLIB</p>
              <p className="text-gray-50 opacity-90">Senior Web Developer Santa monica, Los angeles</p>
            </span>
            <span className="text-white inline-block">
              <p className="font-bold text-xl mb-4">COLORLIB</p>
              <p className="text-gray-50 opacity-90">Senior Web Developer Santa monica, Los angeles</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
