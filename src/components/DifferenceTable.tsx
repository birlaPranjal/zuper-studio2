'use client';

import { motion } from 'framer-motion';
import { FaCheck, FaTimes } from 'react-icons/fa';

type ComparisonItem = {
  aspect: string;
  zuperStudio: string;
  traditional: string;
};

const comparisonData: ComparisonItem[] = [
  { aspect: 'Refund Policy', zuperStudio: '100% Money-Back Guarantee, even if 99% of work is done', traditional: 'Partial or no refunds, even if deadlines are missed' },
  { aspect: 'Service Scope', zuperStudio: 'All-in-one branding solution: social media, podcast, PR, advertising, and photography', traditional: 'Limited services, often outsourcing or requiring multiple vendors' },
  { aspect: 'Content Creation', zuperStudio: 'High-quality, platform-specific content optimized for engagement', traditional: 'Generic content with little customization for specific platforms' },
  { aspect: 'On-Time Delivery', zuperStudio: 'Guaranteed on-time delivery with a structured process', traditional: 'Missed deadlines with no accountability' },
  { aspect: 'Branding Strategy', zuperStudio: 'Deep brand discovery, market research, and tailored branding plans', traditional: 'One-size-fits-all branding strategies with minimal research' },
  { aspect: 'Production Quality', zuperStudio: 'World-class studio with professional lighting, high-end cameras, and cyclorama wall', traditional: 'Basic production setups with limited high-end capabilities' }
];

const TableRow = ({ aspect, zuperStudio, traditional, index }: ComparisonItem & { index: number }) => {
  return (
    <motion.tr 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-gray-800/20 last:border-none hover:bg-gray-800/10 transition-colors duration-300"
    >
      <td className="p-4 lg:p-6 font-medium text-gray-200">{aspect}</td>
      <td className="p-4 lg:p-6 text-emerald-400 font-medium">
        <motion.div 
          className="flex items-start gap-2"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaCheck className="mt-1 flex-shrink-0" />
          <span>{zuperStudio}</span>
        </motion.div>
      </td>
      <td className="p-4 lg:p-6 text-red-400 font-medium">
        <motion.div 
          className="flex items-start gap-2"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaTimes className="mt-1 flex-shrink-0" />
          <span>{traditional}</span>
        </motion.div>
      </td>
    </motion.tr>
  );
};

export default function ComparisonTable() {
  return (
    <div className="w-full max-w-[80vw] mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="overflow-x-auto rounded-2xl backdrop-blur-xl border border-gray-800/20"
      >
        <div className="min-w-[768px] p-6">
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-clip-text text-transparent">
              Why Choose ZuperStudio?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See how we compare to traditional marketing agencies and why we&apos;re the better choice for your business
            </p>
          </motion.div>
          
          <table className="w-full border-collapse rounded-xl overflow-hidden">
            <thead>
              <motion.tr 
                className="bg-gray-800/50 text-white text-left"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <th className="p-4 lg:p-6 text-base lg:text-lg font-semibold rounded-tl-xl">Aspect</th>
                <th className="p-4 lg:p-6 text-base lg:text-lg font-semibold">
                  <span className="text-emerald-400">ZuperStudio</span>
                </th>
                <th className="p-4 lg:p-6 text-base lg:text-lg font-semibold rounded-tr-xl">
                  <span className="text-red-400">Traditional Marketing Brands</span>
                </th>
              </motion.tr>
            </thead>
            <tbody className="divide-y divide-gray-800/20">
              {comparisonData.map((row, index) => (
                <TableRow key={index} {...row} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
