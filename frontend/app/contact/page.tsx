"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { postContact } from "../../lib/api";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    service: "Architecture Design",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      const response = await postContact(formData);
      setMessage({
        type: "success",
        text: response.message || "Your message has been sent successfully!",
      });
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        service: "Architecture Design",
      });
    } catch (error) {
      setMessage({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "Failed to send your message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-30 px-10 md:px-20 max-w-7xl mx-auto bg-white grid grid-cols-1 md:grid-cols-2 gap-16">
      {/* Left Side: Headline & Description */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-8 "
      >
        <div className="space-y-4 pt-10">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black uppercase">
            Contact
          </h2>
          <div className="h-1.5 w-20 bg-[#E67E22]" />
        </div>

        <p className="text-lg text-neutral-600 font-light leading-relaxed max-w-md">
          Whether you’re looking to redefine a commercial space or design your
          dream residence, our team is ready to bring your vision to life. Reach
          out to start a conversation about your next project.
        </p>

        <div className="pt-4 space-y-2 text-sm uppercase tracking-widest text-neutral-400 font-medium">
          <p>General Inquiries: info@archeagle.com</p>
          <p>Career: careers@archeagle.com</p>
        </div>
      </motion.div>

      {/* Right Side: The Form */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-stone-50 p-8 md:p-12 border border-stone-100"
      >
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              required
              className="w-full p-4 bg-white border border-stone-200 focus:border-[#E67E22] outline-none transition-all placeholder:text-stone-400 font-light"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
              required
              className="w-full p-4 bg-white border border-stone-200 focus:border-[#E67E22] outline-none transition-all placeholder:text-stone-400 font-light"
            />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-4 bg-white border border-stone-200 focus:border-[#E67E22] outline-none transition-all placeholder:text-stone-400 font-light"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 bg-white border border-stone-200 focus:border-[#E67E22] outline-none transition-all placeholder:text-stone-400 font-light"
          />

          <div className="pt-4 space-y-3">
            <p className="text-xs uppercase tracking-widest text-[#E67E22] font-bold">
              I am interested in:
            </p>
            <div className="relative">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-4 bg-white border border-stone-200 outline-none appearance-none cursor-pointer font-light text-stone-600 focus:border-[#E67E22]"
              >
                <option>Architecture Design</option>
                <option>Interior Design</option>
                <option>Landscaping</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E67E22"
                  strokeWidth="4"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>

          {message && (
            <div
              className={`p-4 rounded ${
                message.type === "success"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {message.text}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-black text-white py-5 uppercase tracking-[0.3em] text-xs font-bold hover:bg-[#E67E22] transition-all duration-500 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
