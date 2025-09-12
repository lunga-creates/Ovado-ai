import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

const faqData = [
 {
  question: "What is Ovado.ai ?",
  answer:
   "Ovado.ai is a next-gen multi-agent AI platform designed to automate workflows, enhance decision-making, and deliver human-like experiences. It helps businesses achieve efficiency, speed, and scalability with intelligent automation.",
 },
 {
  question:
   "Can I integrate Ovado.ai with my organisation’s current workflows ?",
  answer:
   "Yes. Ovado.ai integrates seamlessly with your existing tools, systems, and applications. Whether on cloud, on-premises, or hybrid setups, our platform adapts to your infrastructure with minimal effort.",
 },
 {
  question:
   "How can I choose the use cases to deploy the Generative AI Solution for my organisation ?",
  answer:
   "Our team works closely with you to identify high-impact areas where AI delivers the most value—be it customer support, operations, marketing, or sales. Ovado.ai’s modular design allows you to start small and scale across multiple use cases as your needs grow.",
 },
];

const FaqSection = () => {
 const [openIndex, setOpenIndex] = useState(null);

 const toggleAnswer = (index) => {
  setOpenIndex(openIndex === index ? null : index);
 };

 return (
  <section
   id="faq"
   className="bg-white py-16 md:py-24 border-t-2 border-2 border-gray-100 lg:bg-[url('/bg-img2.webp')]"
  >
   <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-12">
     <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
      FAQ's
     </h2>
    </div>
    <div className="max-w-3xl mx-auto space-y-4">
     {faqData.map((item, index) => (
      <div key={index} className="p-6 rounded-lg shadow-sm">
       <button
        onClick={() => toggleAnswer(index)}
        className="flex justify-between items-center w-full text-left font-bold text-lg md:text-xl text-gray-900"
       >
        <span>{item.question}</span>
        <motion.div
         className="w-12 h-12 flex items-center justify-center"
         animate={{ rotate: openIndex === index ? 180 : 0 }}
         transition={{ duration: 0.3 }}
        >
         {openIndex === index ? (
          <Minus className="text-blue-600" />
         ) : (
          <Plus className="text-blue-600" />
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
          className="mt-4 text-gray-700 leading-relaxed"
         >
          <p>{item.answer}</p>
         </motion.div>
        )}
       </AnimatePresence>
      </div>
     ))}
    </div>

    <div className="text-center mt-12">
     <button className="inline-flex gap-1 py-4 items-center bg-blue-600 text-white px-6 rounded-lg shadow-lg  hover:bg-gray-100 hover:text-blue-600 transition-colors">
      Explore more FAQ's
      <ArrowUpRight size={18} />
     </button>
    </div>
   </div>
  </section>
 );
};

export default FaqSection;
