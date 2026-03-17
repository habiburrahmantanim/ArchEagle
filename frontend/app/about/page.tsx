"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <main className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
        <Image
          src="/about/a1.jpg"
          alt="ArchEagle Studio"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-5xl md:text-7xl font-light uppercase tracking-[0.3em]"
          >
            About Us
          </motion.h1>
        </div>
      </section>

      {/* 2. Mission Statement */}
      <section className="max-w-screen-xl mx-auto px-10 md:px-20 py-32 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[#E67E22] text-xs uppercase tracking-[0.5em] font-bold mb-6">
            Our Purpose
          </h2>
          <p className="text-3xl md:text-5xl font-light text-neutral-800 leading-tight max-w-4xl mx-auto">
            We believe that{" "}
            <span className="font-medium italic">great design</span> is a
            dialogue between local heritage and global innovation.
          </p>
        </motion.div>
      </section>

      {/* 3. OUR SERVICES SECTION (New Addition) */}
      <section className="bg-gray-100  py-32 px-10 md:px-20">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.4em] text-[#E67E22] font-bold">
                What We Do
              </h2>
              <h3 className="text-4xl md:text-5xl font-light uppercase tracking-tighter">
                Our Expertise
              </h3>
            </div>
            <p className="text-neutral-500 max-w-sm font-light leading-relaxed">
              From initial concept to final execution, we provide comprehensive
              design solutions tailored to the unique needs of each client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-stone-200 border border-stone-200">
            {/* Service 1: Architecture */}
            <div className="bg-gray-100 p-12 space-y-6 hover:bg-white transition-colors duration-500 group">
              <div className="h-12 w-12 border border-gray-300 flex items-center justify-center group-hover:border-[#E67E22] transition-colors">
                <span className="text-xs font-bold">01</span>
              </div>
              <h4 className="text-2xl font-medium uppercase tracking-widest">
                Architecture
              </h4>
              <p className="text-neutral-500 font-light leading-relaxed">
                Ground-up residential and commercial builds with a focus on
                sustainable materials and structural integrity.
              </p>
            </div>

            {/* Service 2: Interior Design */}
            <div className="bg-gray-100 p-12 space-y-6 hover:bg-white transition-colors duration-500 group">
              <div className="h-12 w-12 border border-gray-300 flex items-center justify-center group-hover:border-[#E67E22] transition-colors">
                <span className="text-xs font-bold">02</span>
              </div>
              <h4 className="text-2xl font-medium uppercase tracking-widest text-nowrap">
                Interior Design
              </h4>
              <p className="text-neutral-500 font-light leading-relaxed">
                Curating internal environments that balance aesthetics with
                functionality, specializing in luxury finishes.
              </p>
            </div>

            {/* Service 3: Urban Planning */}
            <div className="bg-gray-100 p-12 space-y-6 hover:bg-white transition-colors duration-500 group">
              <div className="h-12 w-12 border border-gray-300 flex items-center justify-center group-hover:border-[#E67E22] transition-colors">
                <span className="text-xs font-bold">03</span>
              </div>
              <h4 className="text-2xl font-medium uppercase tracking-widest">
                Master Planning
              </h4>
              <p className="text-neutral-500 font-light leading-relaxed">
                Strategic large-scale planning for developments that integrate
                seamlessly into the Dhaka urban landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Story (Shifted down) */}
      <section className="max-w-screen-2xl mx-auto px-10 md:px-20 py-32 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-sm">
          <Image
            src="/about/a2.jpg"
            alt="The Process"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-8">
          <h3 className="text-4xl font-bold uppercase tracking-tighter">
            The Journey of ArchEagle
          </h3>
          <p className="text-neutral-600 leading-relaxed text-lg font-light">
            Founded in Dhaka, ArchEagle began with a simple vision: to elevate
            the architectural landscape of Bangladesh. We specialize in creating
            spaces that are experiences.
          </p>
          <div className="pt-6 border-t border-stone-100 flex gap-12">
            <div>
              <p className="text-3xl font-bold">50+</p>
              <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">
                Projects
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold">12</p>
              <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">
                Awards
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
