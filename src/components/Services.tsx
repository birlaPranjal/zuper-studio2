"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { cn } from "@/lib/utils";

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

interface Service {
  title: string;
  description: string;
  img: string;
}

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 md:w-10/12 mx-auto group p-6 rounded-xl shadow-lg bg-white/5"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <motion.div
        className={cn(
          "w-full md:w-1/2 relative overflow-hidden rounded-2xl",
          index % 2 === 0 ? "md:order-1" : "md:order-2"
        )}
        initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} className="shadow-2xl rounded-2xl overflow-hidden">
          <Image
            src={service.img}
            alt={service.title}
            width={600}
            height={400}
            className="w-full h-72 object-cover"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className={cn(
          "w-full md:w-1/2 space-y-4 p-4",
          index % 2 === 0 ? "md:order-2" : "md:order-1"
        )}
        initial={{ x: index % 2 === 0 ? 100 : -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.h3 className="text-3xl font-bold text-center text-white">
          {service.title}
        </motion.h3>
        <motion.p className="text-lg text-justify text-gray-300">
          {service.description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="space-y-16">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
