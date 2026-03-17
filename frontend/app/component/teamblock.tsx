"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const TEAM = [
  { name: "Tanvir Hasan", role: "Principal Architect", img: "/team1.jpg" },
  { name: "Sarah Kabir", role: "Interior Lead", img: "/team2.jpg" },
  { name: "Arif Ahmed", role: "Design Consultant", img: "/team3.jpg" },
];

const TeamBlock = () => {
  return (
    <section className="py-24 px-10 md:px-20 max-w-screen-2xl mx-auto bg-gray-100">
      {/* Header */}
      <div className="max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-light uppercase tracking-[0.15em] leading-tight text-neutral-900"
        >
          Our Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm text-neutral-500 font-light leading-relaxed mt-6 uppercase tracking-widest"
        >
          Guided by a shared vision of excellence, our diverse group of
          professionals brings decades of experience to every project.
        </motion.p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
        {TEAM.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            {/* Image Wrapper */}
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-neutral-100">
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>

            {/* Name & Role */}
            <div className="mt-6 space-y-1">
              <h3 className="text-lg font-medium uppercase tracking-widest text-neutral-900">
                {member.name}
              </h3>
              <p className="text-xs uppercase tracking-widest text-neutral-400 font-light">
                {member.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamBlock;
