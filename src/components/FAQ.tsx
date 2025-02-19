import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"
import { useInView } from "react-intersection-observer";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What makes ZuperStudio different from other branding agencies?",
    answer:
      "ZuperStudio is built by entrepreneurs for entrepreneurs. We understand the unique challenges of building a brand and offer a comprehensive, one-stop solution with a 100% money-back guarantee.",
  },
  {
    question: "How long does the branding process typically take?",
    answer:
      "The duration varies depending on the scope of the project. A basic branding package can be completed in 2-4 weeks, while more comprehensive solutions may take 2-3 months.",
  },
  {
    question: "Do you offer ongoing support after the initial branding is complete?",
    answer:
      "Yes, we offer various maintenance and support packages to ensure your brand continues to grow and evolve. Our team is always available to assist with updates and new content creation.",
  },
  {
    question: "Can you work with businesses in any industry?",
    answer:
      "Our team has experience working with businesses across various industries. We tailor our approach to meet the specific needs and challenges of each sector.",
  },
  {
    question: "What if I'm not satisfied with the results?",
    answer:
      "We offer a 100% money-back guarantee if we fail to deliver as promised. Your satisfaction is our top priority, and we'll work closely with you to ensure you're happy with the results.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const toggleAnswer = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <motion.section 
      ref={ref}
      className="w-full sm:w-[90%] md:w-[800px] mx-auto px-2 sm:px-4 py-8 sm:py-16"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-5xl font-extrabold mb-12 font-poppins text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400"
        initial={{ y: -20 }}
        animate={inView ? { y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        FREQUENTLY ASKED QUESTIONS
      </motion.h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1 }}
          >
            <button
              className="w-full p-6 text-left flex justify-between items-center group hover:bg-gray-700/50 transition-colors"
              onClick={() => toggleAnswer(index)}
            >
              <span className="text-base sm:text-xl font-semibold text-gray-100 group-hover:text-white">
                {faq.question}
              </span>
              <motion.div
                animate={openIndex === index ? { rotate: 180 } : { rotate: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {openIndex === index ? (
                  <MdKeyboardArrowUp className="text-blue-400" size={24} />
                ) : (
                  <MdKeyboardArrowDown className="text-gray-400 group-hover:text-white" size={24} />
                )}
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="py-3 sm:py-4 px-4 sm:px-6 text-gray-300"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
