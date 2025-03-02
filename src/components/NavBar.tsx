"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import { navOptions } from "../../public/data/navOptions";
import logo from "../../public/logo.svg"

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
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/50 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="Zuper Logo"
                className="w-20 h-20 object-contain"
                priority
                width={60}
                height={60}
              />
            </Link>
          </motion.div>

          {/* Desktop Nav Links */}
          <motion.nav
            className="hidden md:flex items-center space-x-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            {navOptions.map((option) => (
              <Link
                key={option.href}
                href={option.href}
                className="text-white font-medium hover:text-[#01a2fd] transition-colors duration-200 text-sm uppercase tracking-wider"
              >
                {option.label}
              </Link>
            ))}
          </motion.nav>

          {/* Mobile Menu Toggle */}
          <motion.div
            className="md:hidden"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-200"
            >
              {isOpen ? <FaTimes size={24} className="text-white" /> : <FaBars size={24} className="text-white" />}
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <motion.div
            className="absolute top-16 left-0 w-full bg-slate-950/95 backdrop-blur-md shadow-lg md:hidden rounded-b-2xl border-t border-slate-800"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col py-4 px-4 space-y-4">
              {navOptions.map((option) => (
                <Link
                  key={option.href}
                  href={option.href}
                  className="text-white font-medium hover:text-[#01a2fd] transition-colors duration-200 text-sm uppercase tracking-wider"
                  onClick={closeMenu}
                >
                  {option.label}
                </Link>
              ))}
              
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;