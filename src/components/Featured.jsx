import React from "react";
import { GiBinoculars } from "react-icons/gi";
import Project1 from "../assets/project-1.jpg";
import Project2 from "../assets/project-2.jpg";
import Project3 from "../assets/project-3.jpg";
import Project4 from "../assets/project-4.jpg";
import Project5 from "../assets/project-5.jpg";
import Project6 from "../assets/project-6.jpg";

const projects = [
  {
    path: Project1,
    title: "3D Helmet Design",
    subtitle: "Client Project",
  },
  {
    path: Project2,
    title: "2D Vinyl Design",
    subtitle: "Client Project",
  },
  {
    path: Project3,
    title: "Creative Poster Design",
    subtitle: "Client Project",
  },
  {
    path: Project4,
    title: "Embosed Logo Design",
    subtitle: "Client Project",
  },
  {
    path: Project5,
    title: "3D Disposable Bottle",
    subtitle: "Client Project",
  },
  {
    path: Project6,
    title: "3D Logo Design",
    subtitle: "Client Project",
  },
];

function Featured() {
  return (
    <section>
      <div className="max-w-[1240px] w-full mx-auto px-4 py-[80px]">
        <div className="text-center mx-auto w-full max-w-[700px]">
          <h1 className="font-bold text-2xl text-gray-800 mb-4">OUR LATEST FEATURED PROJECTS</h1>
          <p className="text-gray-600 text-md">Who are in extremely love with eco friendly system.</p>
        </div>

        <div className="mt-[70px] duration-300 ease-in-out">
          <ul className="flex items-center justify-center text-sm font-medium">
            <li className="mr-2 cursor-pointer hover:text-primary-color primary-color">ALL</li>
            <li className="mx-4 md:mx-6 cursor-pointer hover:text-primary-color">VECTOR</li>
            <li className="mx-4 md:mx-6 cursor-pointer hover:text-primary-color">RASTER</li>
            <li className="mx-4 md:mx-6 cursor-pointer hover:text-primary-color">UI/UX</li>
            <li className="ml-2 cursor-pointer hover:text-primary-color">PRINTING</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-3 md:grid-flow-row mt-[60px] gap-y-16 gap-x-10">
          {projects.map((item, index) => {
            return (
              <div className="text-center mx-auto" key={index}>
                <div className="rounded-lg mb-4 relative overflow-hidden project">
                  <img src={item.path} alt="Project 1" className="object-contain object-center" />
                  <div className="absolute top-0 right-0 bottom-0 left-0 opacity-0 hover:opacity-100 duration-300 ease-in-out img-layer flex items-center justify-center">
                    <GiBinoculars size={60} className="text-white cursor-pointer" />
                  </div>
                </div>
                <h1 className="font-bold text-xl mb-1 hover:text-primary-color duration-300 ease-in-out">
                  {item.title}
                </h1>
                <p className="text-gray-600">{item.subtitle}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-[70px] w-full text-center">
          <button
            type="button"
            className="text-white text-sm text-center font-medium py-3 px-8 rounded-md primary-button">
            Load More Items
          </button>
        </div>
      </div>
    </section>
  );
}

export default Featured;
