import React from "react";
import { Mail } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="bg-[#1b1b1b] px-8 pt-8 min-h-[800px] rounded-lg shadow-md w-full h-full ">
      <h2 className="text-[40px] font-normal font-oxanium mb-2">Reach Out To Us</h2>

      <div className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block font-bold text-lg text-yellow-400">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter your full name"
            className="mt-2 w-full p-2 border-2 border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-bold text-lg text-yellow-400">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            className="mt-2 w-full p-2 border-2 border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Phone Number (Optional) */}
        <div>
          <label htmlFor="phone" className="block font-bold text-lg text-yellow-400">
            Phone Number <span className="font-medium">{' '}(Optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            className="mt-2 w-full p-2 border-2 border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block font-bold text-lg text-yellow-400">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Enter the subject"
            className="mt-2 w-full p-2 border-2 border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block font-bold text-lg text-yellow-400">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Write your message here"
            rows={4}
            className="mt-2 w-full p-2 border-2 border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

      </div>



      {/* Submit Button */}
      <div className="w-full h-full flex items-center justify-center ">
        <button
          type="submit"

          className="group/btn my-2 text-lg bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-pink-600 hover:to-red-600 mt-6 px-10 py-4 rounded-lg flex items-center text-black hover:text-white font-semibold duration-400 transition"
        >
          <span className="transition-transform duration-200 group-hover/btn:scale-110">
            Send Message
          </span>
          <Mail
            strokeWidth={3}
            className="ml-2 transform transition-transform duration-200 group-hover/btn:scale-110 group-hover/btn:translate-x-2"
          />
        </button>
      </div>

    </div>

  );
};

export default ContactForm;
