"use client";
import React, { useState } from "react";
import { Mail } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null); // Track success or failure state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");
    setIsSuccess(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST", // Ensure this is a POST request
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage("Your message has been sent successfully!");
        setIsSuccess(true); // Success state
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        const error = await response.json();
        setStatusMessage(`Failed to send message: ${error.error}`);
        setIsSuccess(false); // Failure state
      }
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage("An error occurred. Please try again.");
      setIsSuccess(false); // Failure state
    }

    setIsSubmitting(false);
  };

  return (
    <div id="contact" className="bg-neutral-900 px-8 pt-8 min-h-[800px] rounded-lg shadow-md w-full h-full">
      <h2 className="text-[40px] font-normal font-oxanium mb-2">Reach Out To Us</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block font-bold text-lg text-yellow-400">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="mt-2 w-full p-2 border-2 border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
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
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            className="mt-2 w-full p-2 border-2 border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block font-bold text-lg text-yellow-400">
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
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
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter the subject"
            className="mt-2 w-full p-2 border-2 border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block font-bold text-lg text-yellow-400">
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here"
            rows={4}
            className="mt-2 w-full p-2 border-2 border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="w-full h-full flex items-center justify-center">
          <button
            type="submit"
            className="group/btn my-2 text-lg bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-pink-600 hover:to-red-600 px-10 py-4 rounded-lg flex items-center text-black hover:text-white font-semibold duration-400 transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <Mail
              strokeWidth={3}
              className="ml-2 transform transition-transform duration-200 group-hover/btn:scale-110 group-hover/btn:translate-x-2"
            />
          </button>
        </div>
      </form>

      {/* Status Message */}
      {statusMessage && (
        <div
          className={`mt-4 text-center p-4 rounded-lg font-semibold ${isSuccess ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"
            }`}
        >
          {statusMessage}
        </div>
      )}
    </div>
  );
};

export default ContactForm;