"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "../../public/logo.png";
import { navOptions } from "../../public/data/navOptions";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Framer Motion animation variants
  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.5 },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <motion.header
      className={`fixed w-[99vw] z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-slate-950/20 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      {/* This container is set to relative so that the mobile menu
          can be absolutely positioned below it without overlapping. */}
      <div className="relative mx-auto px-[5%]">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <Link href="/">
              <Image
                src={logo}
                alt="IndoriX Logo"
                className="w-20 h-20 -my-5"
                priority
              />
            </Link>

          </motion.div>

          {/* Desktop Nav Links */}
          <motion.nav
            className="hidden md:flex space-x-8 text-white font-semibold w-[400px]"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            {navOptions.map((option) => (
              <Link
                key={option.href}
                href={option.href}
                className="hover:text-[#01a2fd] transition-colors min-w-24 text-center"
              >
                {option.label}
              </Link>
            ))}
          </motion.nav>

          {/* Desktop Register Button */}
          <motion.div
            className="hidden md:block"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <Link
              href="#contact"
              className="bg-[#01a2fd] text-white px-5 py-2 rounded-md hover:bg-teal-600 transition-colors border border-teal-500"
            >
              Register
            </Link>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.div
            className="md:hidden text-white"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-slate-950/95 text-white shadow-lg md:hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col items-center py-4">
              {navOptions.map((option) => (
                <Link
                  key={option.href}
                  href={option.href}
                  className="block py-2 w-full text-center hover:text-[#01a2fd] transition-colors"
                  onClick={closeMenu}
                >
                  {option.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="block bg-[#01a2fd] text-white px-4 py-2 mt-2 rounded-md hover:[#01a2fd]/9 0 transition-colors"
                onClick={closeMenu}
              >
                Join Us
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;