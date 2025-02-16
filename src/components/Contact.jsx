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
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setSuccess("Failed to send message. Try again."))
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-16 px-4 flex justify-center items-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl bg-white bg-opacity-90 shadow-2xl rounded-2xl p-8"
      >
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
          <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h1>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 font-semibold rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all duration-300"
          >
            {loading ? "Sending..." : <>Send Message <FaPaperPlane /></>}
          </motion.button>

          {/* Success/Error Message */}
          {success && (
            <p
              className={`text-center mt-3 ${
                success.includes("Failed") ? "text-red-500" : "text-green-500"
              }`}
            >
              {success}
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
