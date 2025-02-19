"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../public/logo-big.svg";

export default function Header() {
  return (
    <motion.header className="w-[99vw] relative text-center min-h-screen flex flex-col items-center justify-center overflow-hidden  bg-gradient-to-b from-transparent via-transparent to-black">
      {/* Background Video */}
      <motion.video
        src="https://res.cloudinary.com/travelee/video/upload/v1739967362/bg-video_brllwe.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-[99vw] h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{ filter: "blur(40px) brightness(0.7)" }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <motion.div
          className="flex items-center justify-center -mt-10"
          initial={{ scale: 0.5, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <Image src={logo} alt="Zuper Studio Logo" className="h-[280px] sm:h-[250px] md:h-[550px] w-[450px] mb-10 sm:mb-4 md:-mb-16" />
        </motion.div>
        <motion.div
          className="text-md md:text-2xl border-2 border-white rounded-xl py-2 flex items-center md:px-5 justify-center text-white mx-5 -mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Nation Building Through Entrepreneurship
        </motion.div>
        <div className="h-8"></div>
        <motion.a
          href="#about"
          className="px-6 py-3 bg-[#01a2fd] text-white font-bold rounded-full text-lg hover:bg-[#01a2fd]/60 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          100% MoneyBack Guarantee
        </motion.a>
        <motion.p className="max-w-[600px] mx-auto text-white text-lg md:text-2xl pt-8 font-mono"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}>
        EVEN IF 99% OF THE WORK IS DONE,<br/> WE REFUND 100% OF THE AMOUNT!
        </motion.p>
        
        
      </div>
    </motion.header>
  );
}
