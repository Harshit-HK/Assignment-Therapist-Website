"use client";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const faqs = [
  {
    question: "Do you accept insurance?",
    answer: "No, but a superbill is provided for self-submission.",
  },
  {
    question: "Are online sessions available?",
    answer: "Yes—all virtual sessions via Zoom.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "24-hour notice required.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-[rgb(181,219,223)] text-[rgb(27,70,74)]  pb-20 pt-44 px-4 md:px-16 lg:px-36"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-10">
          Frequently Asked Questions
        </h2>
        <hr />
        <div>
          {faqs.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left pr-2 py-8 flex justify-between items-center font-bold text-2xl md:text-lg xl:text-3xl focus:outline-none"
              >
                <span>{item.question}</span>
                <span className="text-xl font-bold">
                  {activeIndex === index ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </span>
              </button>

              <div
                className={`origin-top transform transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "scale-y-100 opacity-100 py-2"
                    : "scale-y-0 opacity-0 py-0"
                }`}
              >
                <div className="text-xl">{item.answer}</div>
              </div>

              <hr />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
