"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// 1. Project Data - Added 'slug' to match your dynamic route structure
const PROJECTS = [
  {
    id: 1,
    title: "Banani Corporate Hub",
    slug: "banani-corporate-hub",
    category: "Architecture",
    img: "/p1.jpg",
  },
  {
    id: 2,
    title: "Gulshan Luxury Suite",
    slug: "gulshan-luxury-suite",
    category: "Interior Design",
    img: "/p2.jpg",
  },
  {
    id: 3,
    title: "Industrial Warehouse",
    slug: "industrial-warehouse",
    category: "Landscape Design",
    img: "/p3.jpg",
  },
  {
    id: 4,
    title: "Minimalist Villa",
    slug: "minimalist-villa",
    category: "Architecture",
    img: "/p4.jpg",
  },
  {
    id: 5,
    title: "Modernist Office",
    slug: "modernist-office",
    category: "Interior Design",
    img: "/p5.jpg",
  },
];

const CATEGORIES = [
  "All",
  "Architecture",
  "Interior Design",
  "Landscape Design",
];

const PortfolioPage = () => {
  const [filter, setFilter] = useState("All");

  // Filtering Logic
  const filteredProjects =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <main className="min-h-screen bg-white pt-40 pb-20 px-6 md:px-20 lg:px-32">
      {/* Header Section */}
      <div className="text-center mb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-light tracking-[0.2em] uppercase text-black"
        >
          Portfolio
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1.5 bg-[#E67E22] mx-auto mt-8"
        />
      </div>

      {/* 2. Filter Bar */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-20 border-b border-stone-100 pb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-300 relative pb-2 ${
              filter === cat
                ? "text-black"
                : "text-neutral-400 hover:text-black"
            }`}
          >
            {cat}
            {filter === cat && (
              <motion.div
                layoutId="activeFilter"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E67E22]"
              />
            )}
          </button>
        ))}
      </div>

      {/* 3. Project Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <Link href={`/portfolio/${project.slug}`} className="group block">
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  {/* High-end Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center">
                    <p className="text-white text-[10px] uppercase tracking-[0.4em] mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      View Project
                    </p>
                    <div className="h-[1px] w-12 bg-[#E67E22] scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="mt-8 space-y-2">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#E67E22] font-bold">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-light uppercase tracking-widest text-black group-hover:text-[#E67E22] transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* 4. Bottom CTA (Optional) */}
      <div className="mt-40 text-center border-t border-stone-100 pt-20">
        <p className="text-sm text-neutral-400 uppercase tracking-widest mb-8">
          Ready to start your project?
        </p>
        <Link
          href="/contact"
          className="inline-block border border-black px-12 py-5 text-xs font-bold uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all duration-500"
        >
          Work With Us
        </Link>
      </div>
    </main>
  );
};

export default PortfolioPage;
