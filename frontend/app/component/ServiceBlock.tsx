"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ServiceProps {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  number: string;
  reversed?: boolean; // If true, image goes to the right
}

const ServiceBlock = ({
  title,
  subtitle,
  description,
  image,
  number,
  reversed = false,
}: ServiceProps) => {
  return (
    <section
      className={`flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"} ${reversed ? "bg-gray-100" : "bg-white"} items-center gap-12 py-24 px-6 md:px-20 max-w-screen-2xl mx-auto overflow-hidden`}
    >
      {/* Image Container */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full md:w-3/5 h-[500px] md:h-[600px] overflow-hidden"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-1000 hover:scale-105"
        />
        <div className="absolute bottom-6 left-6 bg-white/90 px-4 py-2 text-[10px] uppercase tracking-widest font-bold">
          {number} — {title}
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full md:w-2/5 flex flex-col justify-center space-y-8"
      >
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-light uppercase tracking-[0.15em] leading-tight text-neutral-900">
            {subtitle ? (
              <>
                {subtitle} <br /> <span className="font-semibold">{title}</span>
              </>
            ) : (
              title
            )}
          </h2>
          <div className="h-[2px] w-16 bg-neutral-900" />
        </div>

        <p className="text-neutral-600 text-lg font-light leading-relaxed">
          {description}
        </p>

        <div className="pt-4">
          <button className="group relative overflow-hidden border border-neutral-900 px-8 py-4 transition-all hover:text-white">
            <span className="relative z-10 text-xs uppercase tracking-widest font-bold">
              Explore Projects
            </span>
            <div className="absolute inset-0 z-0 bg-neutral-900 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceBlock;
