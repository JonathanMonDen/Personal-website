// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/placeholder.jpg",
        },
        {
          title: "title",
          path: "/placeholder.jpg",
        },
        {
          title: "title",
          path: "/placeholder.jpg",
        },
        {
          title: "title",
          path: "/placeholder.jpg",
        },
      ],
    },
  ],
};

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { HiArrowRight } from "react-icons/hi2";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, itemIndex) => {
        return (
          <SwiperSlide key={itemIndex}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden cursor-pointer">
                      <Image
                        src={image.path}
                        width={500}
                        height={500}
                        alt={`work slide number: ${index + 1}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-primary via-accent to-primary opacity-0 group-hover:opacity-90 transition-all duration-700"></div>
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          <div className="delay-100">LIVE</div>
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-110">
                            PROJECT
                          </div>
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-120">
                            <HiArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
