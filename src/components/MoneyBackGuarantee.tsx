import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'


// Note:
// Make sure the font you're using supports all the variable properties. 
// React Bits does not take responsibility for the fonts used


export default function MoneyBackGuarantee() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <motion.section
      ref={ref}
      className="max-w-3xl text-center px-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-4xl font-bold mb-6 font-poppins pt-28"
        initial={{ y: -20, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        100% MONEY BACK GUARANTEE
      </motion.h2>
      <motion.p
        className="text-xl mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        IF WE FAIL TO DELIVER AS PROMISED, EVEN IF 99% OF THE WORK IS DONE, WE REFUND 100% OF THE AMOUNT!
      </motion.p>
      <motion.p
        className="text-2xl font-semibold"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        NO RISK, NO STRESS JUST RELIABLE BRANDING SERVICES.
      </motion.p>
    </motion.section>
  )
}

