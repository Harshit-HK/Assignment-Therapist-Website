import React from "react";
import ExpFrmMotion from "./ExpFrmMotion";

const ExpSessions = () => {
  return (
    <section className=" md:h-72 md:py-10 bg-[rgb(27,70,74)] text-white flex flex-col md:flex-row  justify-center items-center md:gap-8 gap-40 py-40 ">
      <div className="md:w-1/3 p-4  mx-auto flex flex-col text-center items-center ">
        <span className="flex text-5xl font-bold ">
          <ExpFrmMotion target={40} duration={1500} />
          <span>+</span>
        </span>
        <span className="font-semibold block my-2">Years Experience</span>
        <span className="text-sm">
          Providing compassionate and effective Individual and Couples Therapy
        </span>
      </div>
      <div className="md:w-1/3 p-4  mx-auto flex flex-col text-center items-center ">
        <span className="flex text-5xl font-bold">
          <ExpFrmMotion target={45000} duration={1500} />
          <span className="text-5xl font-bold ">+</span>
        </span>
        <span className="font-semibold block my-2">Individual Client Sessions</span>
        <span className="text-sm">
          Helping individuals and couples heal, grow, and find purpose
        </span>
      </div>
    </section>
  );
};

export default ExpSessions;
