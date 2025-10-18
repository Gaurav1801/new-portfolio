import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_PUBLIC_ID
      )
      .then(() => {
        setSuccess("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setSuccess("❌ Failed to send message. Please try again."))
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 lg:px-20 bg-[#F8FAFF] text-gray-900"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl text-center font-extrabold tracking-wide"
      >
        <span className="text-blue-600">Contact</span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-center text-gray-700 mt-4 max-w-2xl mx-auto text-lg"
      >
        Have a question or want to work together? Let’s connect — I’d love to
        hear from you!
      </motion.p>

      {/* Contact Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-14 flex justify-center"
      >
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-lg border border-gray-100 p-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full p-3 text-gray-900 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full p-3 text-gray-900 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message..."
                rows="5"
                className="w-full p-3 text-gray-900 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all"
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
    type="submit"
    disabled={loading}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    // Changed the background to a single solid blue color
    className="w-full bg-blue-600 text-white py-3 font-semibold rounded-xl shadow-md hover:shadow-xl flex items-center justify-center gap-2 transition-all duration-300 hover:bg-blue-700"
>
    {loading ? "Sending..." : (
        <>
            Send Message 
            <FaPaperPlane /> 
        </>
    )}
</motion.button>

            {/* Success/Error Message */}
            {success && (
              <p
                className={`text-center font-medium mt-3 ${
                  success.includes("Failed") ? "text-red-600" : "text-green-600"
                }`}
              >
                {success}
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
}
