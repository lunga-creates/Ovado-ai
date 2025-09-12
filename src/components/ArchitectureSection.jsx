import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

// Define the content for each tab
const content = {
 "Fully Private Cloud": {
  title: "Fully Private Cloud: Enterprise-Grade Security at Every Level.",
  features: [
   "100% Self-Hosted – Keep AI fully under your control.",
   "Ultra-Secure On-Prem & Air-Gapped – For industries where compliance is non-negotiable.",
   "No Third-Party Risks – Own your AI stack end-to-end.",
   "True Data Sovereignty – Protect and manage your most sensitive information with confidence.",
  ],
  imageSrc: "./architecture-img1.webp",
  imageAlt: "Diagram of Fully Private Cloud architecture",
 },
 "Cloud Infrastructure": {
  title: "Scale Without Limits on Ovado.ai Cloud.",
  features: [
   "End-to-End Managed AI – Let Ovado.ai handle the heavy lifting on a secure, high-speed cloud.",
   "Smart LLM Orchestration – Real-time learning, auto-tuning, and effortless upgrades.",
   "Built to Scale – Expand instantly with elastic compute and enterprise-grade security.",
  ],
  imageSrc: "./architecture-img2.webp",
  imageAlt: "Diagram of Cloud Infrastructure architecture",
 },
 "Hybrid Cloud": {
  title: "Hybrid Cloud: The Best of Both Worlds.",
  features: [
   " Process Locally, Compute Securely – Keep your data in your cloud while Ovado.ai handles the AI workloads.",
   "No Data Exposure – Architecture built to prevent raw data from ever leaving your environment.",
   "Compliance at the Core – Governance-first approach ensures policies and regulations are met effortlessly.",
  ],
  imageSrc: "./architecture-img3.webp",
  imageAlt: "Diagram of Hybrid Cloud architecture",
 },
 "Private LLM Deployment": {
  title: "Private LLM Deployment: Your Models, Your Cloud.",
  features: [
   "100% In-Cloud – Deploy the complete LLM stack inside your enterprise cloud.",
   "Rock-Solid Security – Data never leaves your environment; only orchestration is external.",
   "Total Governance – Own and control every aspect of AI access, policies, and compliance.",
  ],
  imageSrc: "./architecture-img4.webp",
  imageAlt: "Diagram of Private LLM Deployment architecture",
 },
};

const ArchitectureSection = () => {
 const [activeTab, setActiveTab] = useState("Hybrid Cloud");

 const activeContent = content[activeTab];

 return (
  <section id="deployment" className="bg-white py-8 md:py-14">
   <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-8">
     <p className="mx-auto text-sm text-blue-500 mb-2 bg-blue-100 w-fit px-2 rounded-xl ">
      Your AI, Your Infrastructure
     </p>

     <h2 className="text-3xl md:text-4xl font-bold leading-tight">
      Flexible Deployment Choices for you Infrastructure
     </h2>
    </div>

    {/* Buttons */}
    <div className="flex flex-wrap justify-center gap-2 sm:space-x-4 mb-6">
     {Object.keys(content).map((key) => (
      <button
       key={key}
       onClick={() => setActiveTab(key)}
       className={`
                px-4 py-2 rounded-full border-2 font-medium text-sm transition-all duration-300 
                ${
                 activeTab === key
                  ? "border-black bg-white text-gray-900 shadow-sm"
                  : "border-gray-200 bg-gray-100 text-gray-600 hover:border-gray-400"
                }
              `}
      >
       {key}
      </button>
     ))}
    </div>

    {/* Content Box */}
    <div className="border border-gray-200 p-8 md:p-12 rounded-lg bg-gray-50 max-w-6xl mx-auto">
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
      {/* Left Content */}
      <div>
       <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        {activeContent.title}
       </h3>
       <ul className="space-y-4">
        {activeContent.features.map((feature, index) => (
         <li key={index} className="flex items-start text-gray-700">
          <svg
           className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1 mr-2"
           fill="currentColor"
           viewBox="0 0 20 20"
          >
           <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
           />
          </svg>
          <span>{feature}</span>
         </li>
        ))}
       </ul>
       <button className="mt-8 bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-gray-200 hover:text-blue-600 transition-colors flex items-center">
        View Architecture
        <ArrowUpRight />
       </button>
      </div>

      {/* Right Image/Diagram */}
      <div className="flex justify-center items-center h-full">
       <img
        className="w-full rounded-lg flex items-center justify-center"
        src={activeContent.imageSrc}
        alt={activeContent.imageAlt}
       />
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default ArchitectureSection;
