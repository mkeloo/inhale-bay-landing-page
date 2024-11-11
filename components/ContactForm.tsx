import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>

      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-gray-600">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          placeholder="Enter your full name"
          className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Phone Number (Optional) */}
      <div>
        <label htmlFor="phone" className="block text-gray-600">
          Phone Number (Optional)
        </label>
        <input
          type="tel"
          id="phone"
          placeholder="Enter your phone number"
          className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-gray-600">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          placeholder="Enter the subject"
          className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Write your message here"
          rows={4}
          className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Submit Button */}
      <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg p-2 mt-4 transition duration-300 ease-in-out">
        Submit
      </button>
    </div>
  );
};

export default ContactForm;
