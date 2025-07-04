"use client";
import { services } from "@/data/services";
import Link from "next/link";
export default function ServicesSection() {

  return (
    <section
      id="services"
      className=" relative bg-gray-50 flex items-center justify-center py-10 px-4 md:px-16 lg:px-36 md:pt-20 md:pb-20  text-[rgb(30,65,69)]"
    >
      <div className="w-full max-w-7xl z-10 flex flex-col justify-center items-center md:block">
        {/* Section Heading */}
        <h2 className="  text-3xl md:text-6xl font-bold md:mb-16 mb-6">
          How I Help
        </h2>

        {/* Services Grid */}
        <div className=" z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            // Template
            <Link key={service.id} href={`/services/${service.id}`} passHref>
              <div
                key={service.id}
                className="relative bg-[rgb(181,219,223)] shadow-md rounded-xl p-4 flex flex-col items-center border transition-all duration-300 hover:translate-x-2"
              >
                {/* Image */}
                <div className="w-full h-[50%] aspect-square rounded-lg overflow-hidden bg-amber-400">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold  mb-2 flex ">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="md:mb-16">{service.description}</p>

                {/* Button */}
                <button className=" absolute bottom-4  w-[90%] border py-2 rounded-lg font-semibold hover:bg-white transition ">
                  Learn More
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className=" hidden md:flex absolute right-0 lg:right-10 bottom-0  z-0">
        <img
          src="https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2Fassets%2Fflower_green.webp&w=1080&q=75"
          alt="decor"
          className="w-52 pointer-events-none scale-x-[-1]"
        />
      </div>
    </section>
  );
}
