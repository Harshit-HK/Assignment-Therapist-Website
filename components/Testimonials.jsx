import React from "react";
import AutoScrollSlider from "./AutoScrollSlider";

const Testimonials = () => {
  return (
    <section className="bg-[rgb(181,219,223)] pt-40" id="testimonials">
      <div className="md:px-32 md:w-[75%] ">
        <span className=" text-sm p-1 rounded-lg bg-amber-100">
          {" "}
          Client Success Story & Testimonials.
        </span>
        <p className="text-5xl font-bold py-3"> What Former Clients Say</p>
        <p className="text-2xl ">
          {" "}
          Real experience from individuals who have found healing and growth
          through our work together
        </p>
      </div>
      <AutoScrollSlider/>
    </section>
  );
};

export default Testimonials;
