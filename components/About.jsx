import React from "react";
import { toast } from "react-toastify";

const About = () => {


  return (
    <section className="bg-[rgb(181,219,223)]" id="about">
      <div className="   text-gray-800 flex flex-col lg:flex-row items-center justify-center px-1 md:px-10 xl:px-40 py-20">
        {/* Left Image */}
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <div className="relative bg-[rgb(218,245,241)] p-3 rounded-xl ">
            <div className="absolute bottom-3 bg-[rgb(181,219,223)]/60 pt-1 pl-[5%] pr-[10%] rounded-lg">
              <p className="text-sm font-semibold ">Ellie Shumaker</p>
              <p className="text-xs">LCSW</p>
              <p className="text-sm font-semibold">
                st Top Rated | 40+ Years Experience
              </p>
            </div>
            <img
              src="https://main.d1hiqvipguwtuq.amplifyapp.com/assets/ilah-3.jpeg"
              alt="Ellie Shumaker"
              className="w-auto h-[400px] lg:h-[600px] object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 px-1 w-full space-y-6 text-[rgb(30,65,69)] ">
        
          <span className="block md:inline lg:block text-sm p-2 rounded-lg mt-2 bg-amber-100">
            About Ellie Shumaker, LCSW - Experienced Christian Therapist in
            Richmond, VA
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Hi, I'm Ellie Shumaker
          </h2>

          {/* Paragraphs */}
          <p className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
            With over <strong>40 years of dedicated experience</strong> in
            individual and couples therapy, I truly enjoy working with a wide
            variety of people of different ages, capacities, backgrounds, and
            presenting problems. My goal is to help you build credibility in
            your own journey and educate you on pathways to healing.
          </p>

          <p className="text-lg md:text-2xl font-medium leading-relaxed">
            My therapeutic approach is rooted in{" "}
            <strong>Christian principles</strong>, aiming to foster{" "}
            <strong>spiritual growth</strong>, the{" "}
            <strong>deepening of relationships,</strong> and a greater sense of{" "}
            <strong>inner peace</strong>. I am passionate about helping clients
            grow in their capacity to love and in their trust for God's love for
            them.
          </p>

          <p className="text-lg md:text-2xl font-medium leading-relaxed">
            Whether you are seeking to heal from <strong>past wounds</strong>,
            discover your <strong>life's purpose</strong>, or prepare for
            Heaven, I offer a supportive space to explore these profound areas
            of life. Together, we can work towards achieving your goals for a
            more fulfilling and purposeful existence.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8  ">
        <span className="text-3xl font-bold">Featured <br/> In</span>
        <img
          src="https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FpsychologyToday-logo.4e0fdee7.webp&w=640&q=75"
          alt="Logo 1"
          className="w-52 h-auto object-contain grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300"
        />
        <img
          src="https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftheravive.907f65bb.png&w=640&q=75"
          alt="Logo 2"
          className="w-52 h-auto object-contain grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300"
        />
        <img
          src="https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FChristianCounselorDirectory.bd202c5a.png&w=640&q=75"
          alt="Logo 3"
          className="w-52 h-auto object-contain grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300"
        />
        <img
          src="https://main.d1hiqvipguwtuq.amplifyapp.com/_next/static/media/Therapist.com-logo.43d1c2a1.svg"
          alt="Logo 4"
          className="w-52 h-auto object-contain grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300"
        />
      </div>
    </section>
  );
};

export default About;
