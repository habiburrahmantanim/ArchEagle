"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-neutral-800 pt-20 pb-10 px-10 md:px-20">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-6">
            <h3 className="text-2xl font-bold tracking-[0.2em] uppercase text-white">
              ArchEagle
            </h3>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              Redefining the boundaries of space and form through innovative
              architecture and interior design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm text-neutral-400 font-light">
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About the Firm
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Office Location */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white">
              Dhaka Office
            </h4>
            <address className="not-italic text-sm text-neutral-400 font-light space-y-2">
              <p>House 12, Road 5, Banani</p>
              <p>Dhaka 1213, Bangladesh</p>
              <p className="pt-2 text-neutral-400 font-medium">+880 1234-567890</p>
            </address>
          </div>

          {/* Connect */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white">
              Connect
            </h4>
            <div className="flex flex-col space-y-4 text-sm text-neutral-400 font-light">
              <a
                href="#"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-neutral-500">
            © {currentYear} ArchEagle Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-neutral-500">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
