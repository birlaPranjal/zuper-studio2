import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TextRevealComponent = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const width1 = useTransform(scrollYProgress, [0.05, 0.20], ["0%", "100%"]);
  const width2 = useTransform(scrollYProgress, [0.20, 0.30], ["0%", "100%"]);
  const width3 = useTransform(scrollYProgress, [0.30, 0.40], ["0%", "100%"]);
  const width4 = useTransform(scrollYProgress, [0.40, 0.50], ["0%", "100%"]);

  // Image and overlay animations
  const imageScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.7]);
  const layerWidth = useTransform(scrollYProgress, [0, 0.9], ["20vw", "90vw"]);

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center">
      {/* Line 1 */}
      <div className="relative text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white animate-roll-in pb-2 md:mb-4">
        <span className="text-gray-500/50 whitespace-nowrap">Where passion fuels</span>
        <motion.span 
          className="absolute top-0 left-0 text-secondary whitespace-nowrap overflow-hidden pb-2 md:pb-5"
          style={{ width: width1 }}
        >
          Where passion fuels
        </motion.span>
      </div>

      {/* Line 2 */}
      <div className="relative text-3xl sm:text-7xl md:text-8xl font-extrabold text-white animate-roll-in pb-2 md:mb-4">
        <span className="text-gray-500/50 whitespace-nowrap">commitment, creativity, and</span>
        <motion.span 
          className="absolute top-0 left-0 text-secondary whitespace-nowrap overflow-hidden pb-2 md:pb-5"
          style={{ width: width2 }}
        >
          commitment, creativity, and
        </motion.span>
      </div>

      {/* Line 3 */}
      <div className="relative text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white animate-roll-in pb-2 md:mb-4">
        <span className="text-gray-500/50 whitespace-nowrap">brands find their voice and</span>
        <motion.span 
          className="absolute top-0 left-0 text-secondary whitespace-nowrap overflow-hidden pb-2 md:pb-5"
          style={{ width: width3 }}
        >
        brands find their voice and
        </motion.span>
      </div>

      {/* Line 4 */}
      <div className="relative text-3xl sm:text-7xl md:text-8xl font-extrabold text-white animate-roll-in">
        <span className="text-gray-500/50 whitespace-nowrap">transform dreams into reality.</span>
        <motion.span 
          className="absolute top-0 left-0 text-secondary whitespace-nowrap overflow-hidden pb-2 md:pb-5"
          style={{ width: width4 }}
        >
         transform dreams into reality.
        </motion.span>
      </div>
      <div className="h-24"></div>
      {/* Image Container */}
      <div className="relative w-screen h-[80vh] overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full bg-black/50"
          style={{ width: layerWidth, borderRadius: '20px', overflow: 'hidden' }}
        >
          <motion.img
            src="/file2.svg" // Replace with your image path
            alt="Background Image"
            className="absolute w-full h-full object-cover"
            style={{ scale: imageScale, borderRadius: '20px' }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default TextRevealComponent;