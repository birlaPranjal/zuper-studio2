import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from 'react-intersection-observer'
import image2 from "../../public/t1.png"
import image1 from "../../public/t2.png"
import image3 from "../../public/f4.png"

type Testimonial = {
  name: string
  role: string
  company: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: "Amit Rao",
    role: "Co-Founder",
    company: "InnovateTech",
    image: image1.src,
    quote: "Zuper Studio transformed our brand identity from basic to bold! Their branding and content creation helped us stand out in a crowded tech market. Plus, their commitment to deadlines is unmatched—every deliverable was on time, and their money-back guarantee gave us complete confidence in their process."
  },
  {
    name: "Sangeeta Sharma",
    role: "Founder",
    company: "TrendVogue",
    image: image2.src,
    quote: "Working with Zuper Studio was a game-changer! They handled everything—from product photography to website design—with creativity and precision. Their team is reliable, fun, and always ready to go the extra mile. We received exactly what was promised, right on schedule. Highly recommended!"
  },
  {
    name: "Rahul Suresh",
    role: "Marketing Head",
    company: "DineDelight Restaurants",
    image: image3.src,
    quote: "We needed a complete digital revamp, and Zuper Studio delivered beyond expectations. From social media content to our website makeover, they made our brand look and feel premium. Their 100% Money-Back Guarantee was reassuring, but we never needed it—because they delivered everything flawlessly!"
  }
]

export default function Testimonials() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <div className="relative min-h-screen max-w-[80vw] pt-24  overflow-hidden">
      {/* Animated Gradient Circles - Updated positioning and size */}
      <motion.div
        className="fixed left-0 bottom-0 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] opacity-30 mix-blend-overlay pointer-events-none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{
          background: 'radial-gradient(circle at center, rgba(5, 46, 22, 0.3) 0%, rgba(5, 46, 22, 0) 70%)'
        }}
      />
      
      <motion.div
        className="fixed right-0 top-0 w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] opacity-25 mix-blend-overlay pointer-events-none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: 1,
          opacity: 0.25,
          rotate: [0, 360]
        }}
        transition={{ 
          duration: 4,
          ease: "linear",
          repeat: Infinity
        }}
        style={{
          background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.2) 0%, rgba(5, 46, 22, 0) 70%)'
        }}
      />

      <motion.section
        ref={ref}
        className="container mx-auto px-4 relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-16 font-poppins text-center text-white"
          initial={{ y: -20 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          CLIENT SUCCESS STORIES
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative bg-black/50 p-4 sm:p-6 rounded-2xl border border-white/10 shadow-lg sm:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/10 rounded-2xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 sm:gap-6 mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full border-2 border-blue-400/50 w-16 h-16 sm:w-20 sm:h-20"
                  />
                  <div className="text-left">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-blue-400">{testimonial.role}</p>
                    <p className="text-sm text-purple-300">{testimonial.company}</p>
                  </div>
                </div>
                
                <p className="text-sm sm:text-base leading-relaxed italic text-gray-200">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex gap-2 text-blue-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}

