"use client";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/dist/client/link";

// This would typically come from a database or a shared data file
const PROJECT_DATA = {
  "banani-corporate-hub": {
    title: "Banani Corporate Hub",
    category: "Architecture",
    location: "Dhaka, Bangladesh",
    client: "Eagle Group",
    year: "2025",
    description:
      "A 12-story commercial landmark designed to integrate natural lighting and sustainable cooling systems in the heart of Banani's business district.",
    images: ["/p1.jpg", "/p1-detail-1.jpg", "/p1-detail-2.jpg"],
  },
  // Add other projects here...
};

const ProjectDetailPage = () => {
  const params = useParams();
  const slug = params.slug as string;
  const project = PROJECT_DATA[slug as keyof typeof PROJECT_DATA];

  if (!project)
    return (
      <div className="pt-40 text-center uppercase tracking-widest">
        Project Not Found
      </div>
    );

  return (
    <main className="bg-white min-h-screen pb-20">
      {/* 1. Full-width Hero Image */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* 2. Project Info Bar */}
      <section className="max-w-screen-2xl mx-auto px-10 md:px-20 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Title & Metadata */}
        <div className="lg:col-span-1 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <h1 className="text-4xl font-light uppercase tracking-widest leading-tight">
              {project.title}
            </h1>
            <div className="h-1 w-20 bg-[#E67E22]" />
          </motion.div>

          <div className="grid grid-cols-2 gap-y-8 text-xs uppercase tracking-[0.2em]">
            <div>
              <p className="text-neutral-400 mb-1 font-bold">Location</p>
              <p className="text-black">{project.location}</p>
            </div>
            <div>
              <p className="text-neutral-400 mb-1 font-bold">Client</p>
              <p className="text-black">{project.client}</p>
            </div>
            <div>
              <p className="text-neutral-400 mb-1 font-bold">Year</p>
              <p className="text-black">{project.year}</p>
            </div>
            <div>
              <p className="text-neutral-400 mb-1 font-bold">Category</p>
              <p className="text-black">{project.category}</p>
            </div>
          </div>
        </div>

        {/* 3. Narrative Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2"
        >
          <p className="text-xl md:text-2xl font-light text-neutral-600 leading-relaxed italic border-l-4 border-stone-100 pl-8">
            "{project.description}"
          </p>
        </motion.div>
      </section>

      {/* 4. Secondary Gallery (Masonry Style) */}
      <section className="max-w-screen-2xl mx-auto px-10 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="relative aspect-[16/9] bg-stone-100">
          <Image
            src={project.images[0]}
            alt="detail"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[16/9] bg-stone-100">
          <Image
            src={project.images[0]}
            alt="detail"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* 5. Next Project Navigation */}
      <section className="mt-32 border-t border-stone-100">
        <Link
          href="/portfolio/gulshan-luxury-suite"
          className="group block relative overflow-hidden h-[40vh] md:h-[50vh]"
        >
          {/* Background Image that zooms slightly on hover */}
          <div className="absolute inset-0">
            <Image
              src="/p2.jpg" // This should dynamically be the next project image
              alt="Next Project"
              fill
              className="object-cover brightness-50 group-hover:scale-105 transition-transform duration-1000"
            />
          </div>

          {/* Centered Text */}
          <div className="relative h-full flex flex-col items-center justify-center text-white text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[10px] uppercase tracking-[0.5em] mb-4 font-bold"
            >
              Next Project
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-light uppercase tracking-widest"
            >
              Gulshan Luxury Suite
            </motion.h2>

            {/* Animated Arrow */}
            <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
              <svg
                width="60"
                height="20"
                viewBox="0 0 72 22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M1 11H70M70 11L60 1M70 11L60 21" />
              </svg>
            </div>
          </div>
        </Link>
      </section>
    </main>
  );
};

export default ProjectDetailPage;
