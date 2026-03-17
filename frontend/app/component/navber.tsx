// components/Navbar.tsx
"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-6 bg-black text-white">
      <div className="text-2xl font-bold tracking-[0.2em] uppercase">
        <div>
          <Link href="/">ArchEagle</Link>
        </div>
      </div>
      <div className="hidden md:flex space-x-12 text-sm uppercase tracking-widest font-light">
        <Link href="/about" className="hover:opacity-50 transition">
          About
        </Link>
        <Link href="/portfolio" className="hover:opacity-50 transition">
          Portfolio
        </Link>
        <Link href="/contact" className="hover:opacity-50 transition">
          Contact
        </Link>
      </div>
    </nav>
  );
}
