import React from "react";
import { IoIosStarOutline } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

const reviews = [
  {
    review:
      "As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel across her face",
    name: "Fanny Spencer",
    rating: 4.5,
  },
  {
    review:
      "As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel across her face",
    name: "Fanny Spencer",
    rating: 4.5,
  },
  {
    review:
      "As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel across her face",
    name: "Fanny Spencer",
    rating: 4.5,
  },
  {
    review:
      "As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel across her face",
    name: "Fanny Spencer",
    rating: 4.5,
  },
  {
    review:
      "As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel across her face",
    name: "Fanny Spencer",
    rating: 4.5,
  },
  {
    review:
      "As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel across her face",
    name: "Fanny Spencer",
    rating: 4.5,
  },
];

function Testimonials() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-[1240px] w-full mx-auto px-4 py-[80px]">
        <div className="text-center mx-auto w-full max-w-[700px]">
          <h1 className="font-bold text-2xl text-gray-800 mb-4">TESTIMONIALS</h1>
          <p className="text-gray-600 text-md">
            If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You
            may see some for as low as $.17 each.
          </p>
        </div>

        <div className="mt-[72px]">
          <Swiper
            autoplay={true}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 10, centeredSlides: false },
              1024: { slidesPerView: 3, spaceBetween: 30, centeredSlides: false },
            }}>
            {reviews.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="bg-white border border-gray-300 rounded-lg p-6 space-y-4">
                    <i className="text-md text-gray-700">{item.review}</i>
                    <p className="font-bold text-xl uppercase">{item.name}</p>

                    <div className="flex items-center justify-start">
                      {Array.from({ length: 5 }, (_, index) => (
                        <IoIosStarOutline
                          size={18}
                          className={`${index <= item.rating - 1 ? "fill-orange-400" : ""} mr-2`}
                        />
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
