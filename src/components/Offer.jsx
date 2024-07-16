import React from "react";
import { PiCityLight, PiBuildings } from "react-icons/pi";
import { RiDraftLine } from "react-icons/ri";

function Offer() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-[1240px] w-full mx-auto px-4 py-[80px]">
        <div className="text-center mx-auto w-full max-w-[700px]">
          <h1 className="font-bold text-2xl text-gray-800 mb-4">OFFERINGS TO MY CLIENTS</h1>
          <p className="text-gray-600 text-md">
            If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You
            may see some for as low as $.17 each.
          </p>
        </div>

        <div className="pt-[80px] grid gap-y-6 md:grid-cols-3 md:gap-x-6">
          <div className="bg-white p-8 rounded-lg shadow-sm group hover:shadow-lg duration-300 ease-in-out">
            <PiCityLight size={54} className="text-gray-300 group-hover:text-primary-color duration-300 ease-in-out" />
            <div>
              <p className="font-bold text-xl my-4">ARCHITECTURE</p>
              <p className="text-gray-600">
                If you are looking at blank cassettes on the web, you may be very confused at the difference in price.
                You may see some for as low as $17 each.
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm group hover:shadow-lg duration-300 ease-in-out">
            <PiBuildings size={54} className="text-gray-300 group-hover:text-primary-color duration-300 ease-in-out" />
            <div>
              <p className="font-bold text-xl my-4">INTERIOR DESIGN</p>
              <p className="text-gray-600">
                If you are looking at blank cassettes on the web, you may be very confused at the difference in price.
                You may see some for as low as $17 each.
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm group hover:shadow-lg duration-300 ease-in-out">
            <RiDraftLine size={54} className="text-gray-300 group-hover:text-primary-color duration-300 ease-in-out" />
            <div>
              <p className="font-bold text-xl my-4">CONCEPT DESIGN</p>
              <p className="text-gray-600">
                If you are looking at blank cassettes on the web, you may be very confused at the difference in price.
                You may see some for as low as $17 each.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offer;
