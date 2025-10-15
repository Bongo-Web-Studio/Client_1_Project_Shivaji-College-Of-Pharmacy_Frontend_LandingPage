import React, { useState, type FormEvent } from "react";
import { FaArrowRight } from "react-icons/fa";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
  };

  return (
    <div className="p-6 mt-[4cm] mb-[4cm] sm:mt-[8vh] sm:mb-[8vh]">
      <section className="w-full flex flex-col md:flex-row bg-white gap-8">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 flex flex-col justify-center">
          <p className="text-lg text-gray-700 mb-3 italic">Contact Us</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 leading-tight">
            Have Questions? <br />
            We’d Love to Hear <br />
            From You.
          </h1>
          <p className="text-md text-gray-400 mt-6 max-w-md sm:max-w-lg md:max-w-xl">
            For admissions, academic queries, or administrative assistance —
            fill out the form and our team at Shivaji College of Pharmacy will
            get back to you shortly.
          </p>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 bg-gray-50 rounded-[30px] p-6 sm:p-8 shadow-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-xl sm:text-2xl font-medium text-black mb-1">
                  First Name
                </label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none italic"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-xl sm:text-2xl font-medium text-black mb-1">
                  Last Name
                </label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none italic"
                  required
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-xl sm:text-2xl font-medium text-black mb-1">
                  Email
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none italic"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-xl sm:text-2xl font-medium text-black mb-1">
                  Phone Number
                </label>
                <div className="flex items-center">
                  <span className="px-3 py-2 border border-r-0 rounded-l-lg bg-gray-100 text-sm text-black font-semibold">
                    +91
                  </span>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    className="w-full px-4 py-2 border rounded-r-lg text-sm focus:outline-none"
                    placeholder="Mobile number"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-xl sm:text-2xl font-medium text-black mb-1">
                Subject
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none"
                required
              >
                <option value="">Select your query</option>
                <option>Admission Inquiry</option>
                <option>Course Details</option>
                <option>Campus Facilities</option>
                <option>Events / Seminar Info</option>
                <option>Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xl sm:text-2xl font-medium text-black mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Type your message"
                className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#0D1531] text-white px-3 py-2 rounded-lg text-md hover:bg-[#111b3b] transition duration-200"
            >
              Send Message
              <span className="px-3 py-3 bg-white text-black rounded-lg">
                <FaArrowRight size={20} className="rotate-[-40deg]" />
              </span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
