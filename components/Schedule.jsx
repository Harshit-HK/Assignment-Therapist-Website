import React from "react";
import Star from "./Star";

const Schedule = () => {
  return (
    <section className=" md:h-56  md:py-32 py-20 bg-[rgb(27,70,74)] text-[rgb(181,219,223)] flex justify-center items-center">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 md:w-[80%]">
        <span className="text-4xl font-bold text-center">
          Schedule A Consultation
        </span>
        <span className="text-lg md:text-xl font-bold text-center md:w-[65%] ">
          Ellie Shumaker is currently accepting new clients. Availabile for
          online and in-person sessions.
        </span>
        <button className="border-2 border-white hover:bg-white hover:text-[rgb(27,70,74)] rounded-md py-2 px-4 w-52 flex">
          <Star />
          Start Healing
        </button>
      </div>
    </section>
  );
};

export default Schedule;
