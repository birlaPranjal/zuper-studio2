"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";

export function Footer() {
  return (
    <motion.footer
      className="bg-gradient-to-b from-black text-white py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Centered grid container with max-width */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center justify-items-center px-4">
        {/* Logo Section - Always centered */}
        <div className="flex flex-col items-center">
          <Link href="/">
            <Image 
              src="/logo-big.svg" 
              alt="logo" 
              width={180} 
              height={150}
              className="mx-auto"
            />
          </Link>
          <p className="max-w-80 mt-4 text-center">
            Unlock endless possibilities. Shape your future. Be a part of Zuper Army!
          </p>
        </div>

        {/* Quick Links Section - Centered content */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-4 gradient-text">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {['Home', 'About'].map((item) => (
              <li key={item}>
                <Link 
                  href="/" 
                  className="hover:text-secondary transition-all block"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          {/* Social Icons - Centered grid */}
          <ul className="grid grid-cols-5 gap-4 mt-6 place-items-center">
            {[
              { icon: FaFacebookF, url: "https://www.facebook.com" },
              { icon: FaInstagram, url: "https://instagram.com/zuperstudioofficial" },
              { icon: FaTwitter, url: "https://x.com/zuperstudioofficial" },
              { icon: FaLinkedinIn, url: "https://www.linkedin.com/company/zuperstudioo" },
            ].map((social, index) => (
              <li key={index}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-teal-500 transition-all"
                >
                  <social.icon size={24} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info - Centered content */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-4 gradient-text">
            Contact Info
          </h3>
          <ul className="space-y-3">
            <li>Indore, Madhya Pradesh, India</li>
            <li>
              <Link
                href="mailto:info@zuperstudio.com"
                className="hover:text-secondary transition-all"
              >
                info@zuperstudio.com
              </Link>
            </li>
            <li>
              <Link
                href="tel:+911234567890"
                className="hover:text-secondary transition-all"
              >
                +91 9977990520
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Centered bottom section */}
      <div className="text-center mt-12 text-sm space-y-2">
        <p>&copy; {new Date().getFullYear()} Zuper Studio. All rights reserved.</p>
        <div>
          <Link
            href="#privacy-policy"
            className="hover:text-secondary transition-all"
          >
            Made with ❤️
          </Link>
        </div>
      </div>
    </motion.footer>
  );
}