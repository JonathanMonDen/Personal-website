// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "Define and identify your company.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "From mock-up to full website.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Bring your ideas to live.",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description: "Effective and quick.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Impulse your company to the top.",
  },
];

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetweeen: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetweeen: 15,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, itemIndex) => {
        return (
          <SwiperSlide key={itemIndex}>
            <div
              className="h-max min-h-[150px] sm:min-h-[250px] bg-[rgba(65,47,123,0.15)] rounded-lg px-6 py-8
                  flex justify-evenly sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer mx-2 hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
            >
              <div className="text-accent text-3xl mb-4">{item.icon}</div>
              <div>
                <div className="mb-2 text-lg">{item.title}</div>
                <div className="leading-normal max-w-[350px]">
                  {item.description}
                </div>
              </div>

              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent  transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
