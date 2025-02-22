'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const floatingIcons = Array(12).fill('/logo.svg');

// Add type definition for props
interface FloatingIconProps {
  src: string;
  index: number;
}

const FloatingIcon = ({ src, index }: FloatingIconProps) => {
  const row = Math.floor(index / 3);
  const position = {
    top: `${row < 2 ? 10 + row * 15 : 70 + (row - 2) * 15}%`,
    left: `${(index % 3) * 30 + 10}%`
  };

  return (
    <motion.div
      className="absolute"
      initial={{ y: -10, opacity: 0, rotate: -45, scale: 0.5 }}
      animate={{ 
        y: [0, -15, 0],
        opacity: 1,
        rotate: 0,
        scale: 1,
      }}
      transition={{ 
        duration: 3,
        repeat: Infinity,
        delay: index * 0.2,
        ease: "easeInOut"
      }}
      style={position}
    >
      <Image
        src={src}
        alt="Branding icon"
        width={48}
        height={48}
        className="w-12 h-12 hover:scale-110 transition-transform duration-300"
      />
    </motion.div>
  );
};

export default function BrandingHero() {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-center overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 animate-pulse" />
      </motion.div>

      {/* Floating Icons */}
      {floatingIcons.map((icon, index) => (
        <FloatingIcon key={index} src='/logo.svg' index={index} />
      ))}
      
      {/* Animated Text */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          staggerChildren: 0.2
        }}
        className="text-3xl md:text-5xl font-bold text-white relative z-20"
      >
        {["Let's Start Building Your"].map((line, i) => (
          <motion.span
            key={i}
            className="block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.3 }}
          >
            {line}
          </motion.span>
        ))}
        
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative inline-block mt-4"
        >
          <span className="text-white px-3 py-1 rounded-md relative z-10">Brand Together</span>
          {/* Animated underline effect */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          />
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 blur-md opacity-0"
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              delay: 1.5
            }}
            style={{
              background: "linear-gradient(45deg, #60a5fa, #8b5cf6)"
            }}
          />
        </motion.span>
      </motion.h1>
    </div>
  );
}
