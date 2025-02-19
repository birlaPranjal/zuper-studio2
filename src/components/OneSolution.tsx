import { motion } from "framer-motion";
import { BsCheckCircleFill } from "react-icons/bs";
import { useInView } from "react-intersection-observer";

const solutions = [
  "One Stop Solution for all your branding needs",
  "On-Time Service with a 100% Money-Back Guarantee",
  "All-in-One Branding Hub for consistent brand messaging",
  "Customized strategies tailored to your business goals",
  "Experienced team of branding experts at your service",
];

export default function OneSolution() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <motion.section
      ref={ref}
      id="solutions"
      className="relative max-w-6xl mx-auto text-center px-4 py-16 overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Background Glow */}
      <motion.div
        className="absolute inset-0  rounded-full blur-3xl opacity-30"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1.5 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Header Title */}
      <motion.h2
        className="text-5xl font-extrabold mb-8 font-poppins text-white mt-20"
        initial={{ y: -20, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        ONE STOP SOLUTION
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        At ZuperStudio, we provide a comprehensive solution to all your branding challenges. Our integrated approach
        ensures that your brand message is consistent, impactful, and reaches your target audience effectively.
      </motion.p>

      {/* Solutions List */}
      <ul className="space-y-6 text-left">
        {solutions.map((solution, index) => (
          <motion.li
            key={index}
            className="relative flex items-center text-xl bg-white/10 backdrop-blur-lg p-4 rounded-lg shadow-lg border border-white/20 transition-all"
            initial={{ opacity: 0, x: -30, scale: 0.9 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 15,
              delay: 0.2 * index,
            }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.2)" }}
          >
            {/* Floating Effect */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-blue-500/10 rounded-lg blur-xl"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 0.3 } : {}}
              transition={{ duration: 1, delay: 0.2 * index }}
            />

            {/* Icon */}
            <motion.div
              className="mr-4"
              initial={{ rotate: -30, scale: 0 }}
              animate={inView ? { rotate: 0, scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 200}}
            >
              <BsCheckCircleFill size={30} className="text-green-400" />
            </motion.div>

            {/* Text */}
            <motion.span className="relative z-10">{solution}</motion.span>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
