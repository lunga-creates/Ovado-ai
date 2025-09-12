import { useState } from "react";
import { motion } from "framer-motion";

const AgenticSection = () => {
 const smallSectionData = [
  {
   text: "Constantly evolving with new data.",
   image: "./howitworks-img3.webp",
   button: "Dynamic Learning",
  },
  {
   text: "Insights aligned with outcomes that matter.",
   image: "./agentic-small-img2.webp",
   button: "Goal-Driven Outputs",
  },
 ];

 const [activeIndex, setActiveIndex] = useState(0);

 return (
  <section className="bg-white py-6 md:py-12">
   <div className="container  px-4 md:px-8 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
     {/* Left Column: Text Content */}
     <div>
      <p className="text-sm text-blue-500 mb-2 bg-blue-100 w-fit px-2 rounded-xl">
       Agentic RAG
      </p>
      <h1 className="text-4xl md:text-5xl font-semibold md:font-bold leading-tight mb-6">
       Smarter RAG: Real-Time Learning that Drives Results
      </h1>
      <p className="text-lg text-gray-500 mb-8 font-semibold">
       Unlike standard RAG, Ovado.ai’s Agentic RAG doesn’t just answer
       questions—it learns, adapts, and optimizes continuously to meet your
       business goals with precision.
       {/* <ul className="list-disc list-inside text-black">
        <li className="text-gray-500">
         <span className="font-bold text-black">Dynamic Learning</span> -
         Constantly evolving with new data.
        </li>
        <li className="text-gray-500">
         <span className="font-bold text-black">Goal-Driven Outputs</span> -
         Insights aligned with outcomes that matter.
        </li>
       </ul> */}
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
       {smallSectionData.map((item, index) => (
        <button
         key={index}
         onClick={() => setActiveIndex(index)}
         className={`py-3 px-6 rounded-lg font-medium shadow-md transition-colors ${
          activeIndex === index
           ? "bg-blue-600 text-white shadow-lg"
           : "bg-gray-200 text-gray-800 hover:text-[#fdb529]"
         }`}
        >
         {item.button}
        </button>
       ))}
      </div>

      {/* Sub-section (Dynamic) */}
      <motion.div
       key={activeIndex} // ensures animation runs on change
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.4 }}
       className="bg-gray-100 p-6 rounded-lg flex items-center gap-6"
      >
       <div className="flex items-center">
        <img
         src={smallSectionData[activeIndex].image}
         alt={smallSectionData[activeIndex].button}
         className="rounded-lg max-h-[120px] object-contain"
        />
       </div>
       <p className="text-base font-bold">
        {smallSectionData[activeIndex].text}
       </p>
      </motion.div>
     </div>

     {/* Right Column: Image */}
     <div className="flex-col md:flex justify-center items-center">
      <motion.div
       initial={{ x: -200, opacity: 0 }}
       whileInView={{ x: 0, opacity: 1 }}
       transition={{ duration: 0.8, ease: "easeOut" }}
       viewport={{ once: true }}
       className="w-full max-w-[500px] bg-gray-200 rounded-lg flex items-center justify-center"
      >
       <img src="./agentic-img.webp" alt="Agentic RAG" className="rounded-lg" />
      </motion.div>
     </div>
    </div>

    {/* Bottom text line */}
    <div className="mt-6 text-left flex flex-col gap-2">
     <p className="text-gray-600 font-bold">
      Agents enhance every response by combining past context with real-time
      signals, delivering intelligence you can act on immediately.
     </p>
     <p className="text-gray-600 font-bold">
      Ovado.ai transforms information into strategy—accurate, evolving, and
      business-ready.
     </p>
    </div>
   </div>
  </section>
 );
};

export default AgenticSection;
