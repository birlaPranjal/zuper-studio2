import { motion } from "framer-motion"
import { BsLightbulb, BsRocket } from "react-icons/bs"
import { FaSearch } from "react-icons/fa"
import { MdBrush } from "react-icons/md"
import { useInView } from 'react-intersection-observer'

const processSteps = [
  {
    icon: BsLightbulb,
    title: "Discovery",
    description: "We dive deep into understanding your brand, goals, and target audience.",
  },
  {
    icon: FaSearch,
    title: "Research",
    description: "Thorough market analysis and competitor research to position your brand effectively.",
  },
  {
    icon: MdBrush,
    title: "Creation",
    description: "Our team crafts tailored strategies and creates compelling content for your brand.",
  },
  {
    icon: BsRocket,
    title: "Launch",
    description: "We execute the strategy, monitor performance, and optimize for the best results.",
  },
]

export default function OurProcess() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <motion.section
      ref={ref}
      className="px-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-8 font-poppins text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        OUR PROCESS
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md flex items-start"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.1 * index 
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <step.icon size={36} className="text-[#01a2fd] mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Custom highlight section replacing HeroHighlight */}
      <motion.div 
        className="mt-16 mb-8 relative"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
        
        <div className="relative bg-black/40 backdrop-blur-sm rounded-xl p-8 md:p-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? {
              opacity: 1,
              y: [20, -5, 0],
            } : {}}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-xl px-4 md:text-4xl lg:text-5xl font-bold text-white leading-relaxed lg:leading-snug text-center mx-auto"
          >
            Innovation at Zuper Studio is relentless.
            <br/> 
            Every vision is a concept, every concept a creation, 
            <br/>
            every creation a reinvention
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              &nbsp;again, and again, and again.
            </motion.span>
          </motion.h1>
        </div>
      </motion.div>
    </motion.section>
  )
}

