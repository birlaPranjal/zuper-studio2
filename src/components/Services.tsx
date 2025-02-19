"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useRef } from "react";

const services = [
  {
    title: "WORLD CLASS STUDIO",
    description:
      "Our state-of-the-art studio features cutting-edge equipment and versatile shooting spaces, including a full cyclorama wall, professional lighting setups, and high-end camera gear. Perfect for product photography, interviews, and creative content production.",
    img: "https://images.pexels.com/photos/134469/pexels-photo-134469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "SOCIAL MEDIA CONTENT CREATION",
    description:
      "From TikTok trends to Instagram Reels, our team creates platform-specific content that engages and converts. We handle scripting, shooting, editing, and optimization for algorithms, ensuring your brand stays relevant in fast-paced social landscapes.",
    img: "https://images.pexels.com/photos/2818118/pexels-photo-2818118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "PRODUCT PHOTOSHOOT",
    description:
      "Professional photography to showcase your products in the best light. Our photographers use advanced techniques to highlight the unique features of your products, ensuring they stand out in a competitive market.",
    img: "https://images.pexels.com/photos/26601193/pexels-photo-26601193/free-photo-of-clothes-in-a-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "ALL TYPES OF ADVERTISING",
    description:
      "Comprehensive advertising solutions across all mediums, including digital, print, and outdoor. We create compelling ad campaigns that drive brand awareness and conversions.",
    img: "https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "PODCAST SETUP",
    description:
      "Complete podcast production and distribution services. We provide everything you need to launch and grow your podcast, from professional recording equipment to editing and post-production.",
    img: "https://images.pexels.com/photos/6883807/pexels-photo-6883807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "VISUAL BRANDING",
    description:
      "Cohesive visual identity design for your brand. We create logos, color palettes, typography, and brand guidelines that reflect your brand's personality and values.",
    img: "https://images.pexels.com/photos/34639/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "PERSONAL BRANDING",
    description:
      "Tailored strategies to build your personal brand. We help you define your unique voice, create engaging content, and establish a strong online presence.",
    img: "https://images.pexels.com/photos/6333756/pexels-photo-6333756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

// Service type definition
type Service = {
  title: string;
  description: string;
  img: string;
};

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({ 
    threshold: 0.2,
    triggerOnce: true 
  });

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);

  return (
    <motion.div
      ref={cardRef}
      className="flex flex-col lg:flex-row gap-6 lg:gap-8 bg-white/5 rounded-2xl p-6 lg:p-8 backdrop-blur-lg hover:backdrop-blur-xl transition-all duration-500 border border-white/10 hover:border-white/20 shadow-xl hover:shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Title Section */}
      <motion.div 
        className="lg:w-1/3 flex items-center justify-center p-6 bg-white/5 rounded-xl border border-white/10 shadow-inner"
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.03 }}
      >
        <h3 className="text-2xl lg:text-3xl font-['Ailerons'] text-center text-white tracking-tight leading-tight">
          {service.title}
        </h3>
      </motion.div>

      {/* Image Section */}
      <motion.div
        ref={ref}
        className="lg:w-1/3 relative h-[250px] lg:h-[350px] overflow-hidden rounded-xl border border-white/10 group"
        style={{ 
          scale, 
          y,
          transformOrigin: 'center center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60 z-10" />
        <Image
          src={service.img}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 mix-blend-soft-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>

      {/* Description Section */}
      <motion.div 
        className="lg:w-1/3 flex items-center p-6 bg-white/5 rounded-xl border border-white/10 shadow-inner"
        initial={{ opacity: 0, x: 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.03 }}
      >
        <p className="text-base lg:text-lg text-white/90 font-light leading-relaxed tracking-wide">
          {service.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section className="py-20 px-4 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 10% 50%, rgba(100,100,255,0.1), transparent 40%)',
            'radial-gradient(circle at 90% 50%, rgba(255,100,255,0.1), transparent 40%)',
            'radial-gradient(circle at 50% 10%, rgba(100,255,255,0.1), transparent 40%)',
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      />
      
      <motion.h2 
        className="text-4xl md:text-6xl font-['Ailerons'] text-center mb-16 lg:mb-24 tracking-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="text-white">Our Services</span>
      </motion.h2>

      <div className="space-y-12 lg:space-y-16 max-w-7xl mx-auto relative z-10">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              scale: 0
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
