import TestimonialSlider from "../../components/TestimonialSlider";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center text-4xl">
        <h2>
          <span className="text-accent">{"<"}</span>
          What people say
          <span className="text-accent">{">"}</span>
        </h2>
        <div className="">
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
