import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { 
  FaExclamationTriangle, 
  FaUnlink, 
  FaDollarSign, 
  FaClock, 
  FaTimesCircle, 
  FaLayerGroup 
} from 'react-icons/fa'
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"
];
const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)"
];
const issues = [
  {
    icon: FaExclamationTriangle,
    title: "LACK OF ENGAGEMENT",
    description: "Branding agencies fail to create content that connects with audiences.",
  },
  {
    icon: FaUnlink,
    title: "WEAK PR STRATEGIES",
    description: "Poor relationship-building between brands and audiences.",
  },
  {
    icon: FaDollarSign,
    title: "OVER-RELIANCE ON ADS",
    description: "Businesses spend too much on paid ads instead of organic brand growth.",
  },
  {
    icon: FaClock,
    title: "COMMITMENT ISSUES",
    description: "Agencies often miss deadlines and don't do anything about it.",
  },
  {
    icon: FaTimesCircle,
    title: "DELIVERY ISSUES",
    description: "Agencies fail to deliver as promised and they often deliver much less.",
  },
  {
    icon: FaLayerGroup,
    title: "SCATTERED SOLUTIONS",
    description: "Businesses struggle with multiple vendors for branding, PR, content, and web management.",
  },
] as const;



interface BounceCardsProps {
  className?: string;
  images: string[];
  containerWidth?: number;
  containerHeight?: number;
  animationDelay?: number;
  animationStagger?: number;
  transformStyles: string[];
}

function BounceCards({
  className = "",
  images,
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  transformStyles,
}: BounceCardsProps) {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{
        width: containerWidth,
        height: containerHeight,
      }}
    >
      {images.map((src, idx) => (
        <motion.div
          key={idx}
          className="card absolute w-[200px] aspect-square border-8 border-white rounded-[30px] overflow-hidden"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: animationDelay + (idx * animationStagger)
          }}
          style={{
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            transform: transformStyles[idx] !== undefined ? transformStyles[idx] : "none",
          }}
        >
          <Image
            className="w-full h-full object-cover"
            src={src}
            alt={`card-${idx}`}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default function CurrentIssues() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <motion.section
      ref={ref}
      className="w-[99vw] sm:w-[60vw] mt-20 px-4 relative z-10 -mb-32"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="absolute left-0 top-0 w-[500px] h-[500px] opacity-25 mix-blend-overlay"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { 
          scale: 1,
          opacity: 0.25,
          rotate: [0, 360]
        } : {}}
        transition={{ 
          duration: 4,
          ease: "linear",
          repeat: Infinity
        }}
        style={{
          background: 'radial-gradient(circle at center, rgba(1, 162, 253, 0.2) 0%, rgba(5, 46, 22, 0) 70%)'
        }}
      />

      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold mb-8 font-poppins text-center"
        >
          CURRENT ISSUES OF BRANDS
        </motion.h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {issues.map((issue, index) => (
          <motion.div
            key={index}
            className="group bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg flex items-start relative overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.2 * index
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="p-2 rounded-lg mr-4 mt-1 flex-shrink-0 bg-[#01a2fd]/10"
              initial={{ scale: 0.8, rotate: -15 }}
              animate={inView ? { scale: 1, rotate: 0 } : {}}
              transition={{ 
                type: "spring",
                delay: 0.2 * index,
                stiffness: 150
              }}
            >
              <issue.icon size={24} className="text-[#01a2fd]" />
            </motion.div>

            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 * index + 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{issue.title}</h3>
              <p className="text-gray-300">{issue.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className="">
      <BounceCards
        className="custom-class hidden md:block ml-96 mt-16 -mb-32"
        images={images}
        containerWidth={950}
        containerHeight={500}
        animationDelay={1.5}
        animationStagger={0.2}
        transformStyles={transformStyles}
      />
      </div>
    </motion.section>
  )
}

