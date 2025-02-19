"use client"
import { motion } from "framer-motion"
import { FaUsers, FaBullseye, FaClock } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import Card from "./Card/Card"
import CircularGallery from "./CircularGallery/CircularGallery"

export default function WhoWeAre() {
  const { ref, inView } = useInView({
    threshold: 0.0,
  });

  const features = [
    {
      icon: FaUsers,
      title: "Built by Entrepreneurs",
      description: "We understand your needs because we've been in your shoes. Our team consists of experienced entrepreneurs who have faced the same challenges you're facing.",
    },
    {
      icon: FaBullseye,
      title: "Targeted Solutions",
      description: "We provide customized branding strategies tailored to your unique business. Our solutions are designed to help you stand out in your industry and reach your target audience effectively.",
    },
    {
      icon: FaClock,
      title: "On-Time Delivery",
      description: "We respect your time and always deliver as promised. Our streamlined processes and dedicated team ensure that your projects are completed on schedule, every time.",
    },
  ]

  return (
    <div className="min-h-screen w-[99vw] overflow-hidden pt-24 bg-gradient-to-b from-black to-gray-900 flex flex-col justify-center items-center relative" id="about">
      {/* Animated Gradient Circles - Contained within parent bounds */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full max-w-[600px] h-[600px] opacity-30 mix-blend-overlay pointer-events-none"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          background: 'radial-gradient(circle at center, rgba(5, 46, 22, 0.3) 0%, rgba(5, 46, 22, 0) 70%)'
        }}
      />
      
      <motion.div
        className="absolute right-1/2 translate-x-1/2 top-0 w-full max-w-[500px] h-[500px] opacity-25 mix-blend-overlay pointer-events-none"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.25 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.2) 0%, rgba(5, 46, 22, 0) 70%)'
        }}
      />

      <motion.section
        ref={ref}
        className="w-full max-w-[1200px] text-center px-4 relative z-10"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-4xl font-bold mb-6 font-poppins"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          WHO WE ARE
        </motion.h2>
        <motion.p
          className="text-sm sm:text-lg leading-relaxed mb-12 mx-auto max-w-[800px]"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          ZuperStudio is a one-stop solution for all branding and online presence needs, built by entrepreneurs, for
          entrepreneurs. We eliminate the common issues businesses face with traditional branding services—missed
          deadlines, broken promises, and lack of engagement—by delivering high-quality content, strategic PR, and
          guaranteed on-time service.
        </motion.p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 flex-wrap">
          {features.map((feature, index) => (
            <Card key={index} className="w-full sm:w-[300px] h-[280px] sm:h-[350px] rounded-xl sm:rounded-2xl">
              <div className="flex flex-col items-center">
                <div className="p-1 rounded flex items-center justify-center">
                  <feature.icon size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <motion.p
          className="text-xl md:text-4xl mt-8 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          We are a team of entrepreneurs who understand your needs because we&apos;ve been there.
        </motion.p>
      </motion.section>
      
      <div className="w-full h-[400px] relative overflow-hidden">
        <CircularGallery />
      </div>
    </div>
  )
}

