"use client";
import { useState } from "react";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    time: "",
    method: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.time.trim()) newErrors.time = "Preferred time is required";
    if (!formData.method.trim()) newErrors.method = "Please select a method";
    if (!formData.agree) newErrors.agree = "You must agree before submitting";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    toast.success("Form submitted successfully");
    // Submit logic here (e.g. fetch/axios)
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
      time: "",
      method: "",
      agree: false,
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <section
      id="contact"
      className="bg-[rgb(181,219,223)] flex flex-col-reverse  md:flex-row justify-center items-center py-32 "
    >
      <div className="md:w-1/2">
        <div className="flex justify-center ">
          <div className="bg-[rgb(218,245,241)]rounded-xl p-3 rounded-lg bg-[rgb(218,245,241)] mt-10 w-[90%] md:w-[70%]">
            <img
              src="https://res.cloudinary.com/dyjopn2oc/image/upload/v1751639205/image_lgmyh0.webp"
              alt=""
              className="  rounded-lg"
            />
          </div>
        </div>

        <div className=" rounded-xl p-6 md:p-8 w-full max-w-xl mx-auto space-y-6">
          {/* Name & Title */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-1">
              Dr. Serena Blake, PsyD
            </h3>
            <p className="text-gray-600 text-lg">Clinical Psychologist</p>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-1">
              Location
            </h4>
            <p className="text-gray-600 text-lg">
              1287 Maplewood Drive,
              <br />
              Los Angeles, CA 90026
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-1">
              Contact
            </h4>
            <p className="text-gray-600 text-lg flex items-center">
              <MdOutlineLocalPhone />
              <span className="font-medium">Phone:</span> (323) 555-0192
            </p>
            <p className="text-gray-600 text-lg flex items-center">
              <MdMarkEmailRead />
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:serena@blakepsychology.com"
                className="text-blue-600 underline hover:text-blue-800"
              >
                serena@blakepsychology.com
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-1">
              Office Hours
            </h4>
            <p className="text-gray-600 text-lg flex items-center pl-3">
              1. In-person: Tue & Thu, 10 AM–6 PM
            </p>
            <p className="text-gray-600 text-lg flex items-center pl-3">
              2. Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-1">
              Experience
            </h4>
            <p className="text-gray-600 text-lg flex items-center">
              8 years of practice, 500+ sessions
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-1">About</h4>
            <p className="text-gray-600 text-lg flex items-center">
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based
              in Los Angeles, CA, with eight years of experience and over 500
              client sessions. She blends evidence-based approaches—like
              cognitive-behavioral therapy and mindfulness—with compassionate,
              personalized care to help you overcome anxiety, strengthen
              relationships, and heal from trauma. Whether you meet in her
              Maplewood Drive office or connect virtually via Zoom, Dr. Blake is
              committed to creating a safe, supportive space for you to thrive.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-1">
              Services & Specialties
            </h4>
            <p className="text-gray-600 text-lg flex items-center pl-3">
              1. Anxiety & Stress Management{" "}
            </p>
            <p className="text-gray-600 text-lg flex items-center pl-3">
              2. Relationship Counseling{" "}
            </p>
            <p className="text-gray-600 text-lg flex items-center pl-3">
              3. Trauma Recovery{" "}
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-1">
              Session Fees:{" "}
            </h4>
            <p className="text-gray-600 text-lg flex items-center pl-3">
              1. $200 / individual session{" "}
            </p>
            <p className="text-gray-600 text-lg flex items-center pl-3">
              2. $240 / couples session{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className=" max-w-xl mx-auto bg-white shadow-md border border-[rgb(27,70,74)] text-[rgb(27,70,74)] rounded-2xl p-6">
        <h2 className="text-3xl font-bold text-center text-[rgb(27,70,74)] mb-2">
          Get In Touch
        </h2>
        <p className="text-center mb-6">
          Simply fill out the brief fields below and Ellie will be in touch with
          you soon, usually within one business day. This form is safe, private,
          and completely free.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border rounded-xl px-4 py-2"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border rounded-xl px-4 py-2"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block font-semibold mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              className="w-full border rounded-xl px-4 py-2"
              placeholder="(555) 234-5678"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block font-semibold mb-1">
              What brings you here?
            </label>
            <textarea
              name="message"
              className="w-full border rounded-xl px-4 py-2"
              rows="3"
              placeholder="How can I help you?"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Time */}
          <div>
            <label className="block font-semibold mb-1">
              Preferred time to reach you
            </label>
            <input
              type="text"
              name="time"
              className="w-full border rounded-xl px-4 py-2"
              placeholder="e.g. Mornings, Evenings"
              value={formData.time}
              onChange={handleChange}
            />
            {errors.time && (
              <p className="text-red-500 text-sm mt-1">{errors.time}</p>
            )}
          </div>

          {/* Method */}
          <div>
            <label className="block font-semibold mb-1">
              Preferred Contact Method
            </label>
            <select
              name="method"
              className="w-full border rounded-xl px-4 py-2"
              value={formData.method}
              onChange={handleChange}
            >
              <option value="">Select preferred method</option>
              <option value="phone">Phone</option>
              <option value="email">Email</option>
              <option value="text">Text</option>
            </select>
            {errors.method && (
              <p className="text-red-500 text-sm mt-1">{errors.method}</p>
            )}
          </div>

          {/* Agree Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-sm">I agree to be contacted</label>
          </div>
          {errors.agree && (
            <p className="text-red-500 text-sm">{errors.agree}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-800 text-white font-semibold py-3 rounded-xl mt-2 hover:bg-green-900 transition"
          >
            Submit
          </button>

          {/* Note */}
          <p className="text-sm mt-3 text-center text-gray-600">
            By clicking submit you consent to receive texts and emails from Dr.
            Marcia T. Norman.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
