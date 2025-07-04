import React from "react";
import TextSlider from "./TextSlider";
import Star from "./Star";
const Hero = () => {
  return (
    <main >
      {/* Hero Section */}
      <section
        className="h-[calc(100vh-100px)] bg-[url('https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-b.79c9c9cd.jpg&w=3840&q=75')] bg-cover bg-center flex items-center justify-center"
        id="home"
      >
        <div className=" flex flex-col items-center justify-center text-center bg-black/30 h-full w-full p-4 text-white ">
          <p className="text-sm">
            Christian Counseling Services in Richmond & Central Virginia
          </p>
          <h1 className="text-3xl lg:text-4xl  font-extrabold my-4">
            Professional Counseling for Christian Healing and Growth
          </h1>
          <span className="text-lg font-medium">
            Begin your journey today towards spiritual growth, deeper
            <span className="sm:block">
             {" "} relationships, and lasting inner peace.
            </span>
          </span>
          <span className="text-lg  font-extrabold">
            I want to work with you for…
          </span>
          <TextSlider />
          <div className=" flex gap-3">
            <span className="text-sm font-bold">Top Rated</span>
            <span className="text-xs font-bold">•</span>
            <a href="#" className="text-xs font-bold hover:underline">
              40+ Years Experience
            </a>
            <span className="text-xs font-bold">•</span>
            <a
              href="#testimonials"
              className="text-xs font-bold hover:underline"
            >
              Testimonials
            </a>
            <span className="text-xs font-bold">•</span>
            <a href="#" className="text-xs font-bold hover:underline">
              Media Mentions
            </a>
          </div>

          <a
            href="#contact"
            className=" text-lg font-medium flex justify-center items-center bg-slate-100 text-[rgb(30,58,138)] px-6 py-2 my-2 rounded-xl transition "
          >
            <Star />
            Start Healing Today
          </a>
        </div>
      </section>
    </main>
  );
};

export default Hero;
