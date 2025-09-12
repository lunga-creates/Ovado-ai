import { Zap, Bot, Grid3X3, Cloud, Network, Server } from "lucide-react";
import { useEffect, useState } from "react";

const HowItWorks = () => {
 const [activeFeature, setActiveFeature] = useState(0);

 const features = [
  {
   icon: Zap,
   title: "Intelligent, Modular, and Rapid Deployment",
   description:
    "Ovado.ai automates enterprise workflows with adaptive AI agents, streamlining processes with minimal manual effort.",
   color: "text-emerald-500",
   img: "./howitworks-img1.webp",
  },
  {
   icon: Bot,
   title: "AI-Powered Workflow Creation",
   description:
    " Define workflow goals and Ovado.ai intelligently configures agents with pre-set logic to execute complex tasks effectively.",
   color: "text-amber-600",
   img: "./howitworks-img2.webp",
  },
  {
   icon: Network,
   title: "Autonomous Multi-Agent Collaboration",
   description:
    "Specialized AI agents handle planning, execution, and decision-making, working together to maximize efficiency and accuracy.",
   color: "text-purple-500",
   img: "./howitworks-img3.webp",
  },
  {
   icon: Server,
   title: "Seamless Deployment Across Any Infrastructure",
   description:
    "Deploy on cloud, on-premise, or hybrid setups with enterprise-grade security, compliance, and scalability.",
   color: "text-purple-500",
   img: "./howitworks-img4.webp",
  },
 ];

 useEffect(() => {
  const interval = setInterval(() => {
   setActiveFeature((prev) => (prev + 1) % features.length);
  }, 4000);

  return () => clearInterval(interval);
 }, [features.length]);

 return (
  <section className="bg-white py-16 px-8 lg:px-16 ">
   <div className="container mx-auto max-w-7xl">
    <p className="text-sm mx-auto text-blue-500 mb-2 bg-blue-100 w-fit px-2 rounded-xl ">
     How It Works
    </p>
    <div>
     <h2 className="lg:text-center text-4xl md:text-5xl font-bold py-3 text-center">
      Faster, Smarter, and Built to Scale
     </h2>
     <div className="text-xl mb-8 mt-2  text-center max-w-3xl mx-auto">
      <p>
       Ovado.ai’s Agentic AI Platform lets you launch modular workflows in
       minutes, optimize decisions in real time, and adapt seamlessly as your
       business grows:
      </p>
     </div>
    </div>
   </div>
   <div className="bg-gray-50 py-16 px-4 rounded-2xl">
    <div className="max-w-7xl mx-auto">
     <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left side - Image */}
      <div className="relative">
       <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-black rounded-2xl overflow-hidden shadow-2xl">
        <img
         src={features[activeFeature].img}
         alt={features[activeFeature].title}
         className="aspect-[4/3] object-cover w-full"
        />
       </div>
      </div>

      {/* Right side - Features */}
      <div className="space-y-8">
       {features.map((feature, index) => {
        const IconComponent = feature.icon;
        const isActive = index === activeFeature;

        return (
         <div
          key={index}
          className={`cursor-pointer transition-all duration-500 ${
           isActive ? "opacity-100" : "opacity-60 hover:opacity-80"
          }`}
          onClick={() => setActiveFeature(index)}
         >
          <div className="flex items-start gap-4">
           {/* Icon with animated border */}
           <div className="relative">
            <div
             className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-500 ${
              isActive
               ? `bg-gradient-to-br from-red-500 to-orange-500 shadow-lg shadow-red-500/25`
               : "bg-gray-200"
             }`}
            >
             <IconComponent
              className={`w-6 h-6 transition-colors duration-500 ${
               isActive ? "text-white" : "text-gray-600"
              }`}
             />
            </div>

            {/* Animated progress line */}
           </div>

           {/* Content */}
           <div className="flex-1">
            <div>
             <h3
              className={`text-xl font-bold mb-3 transition-colors duration-500 ${
               isActive ? "text-gray-900" : "text-gray-700"
              }`}
             >
              {feature.title}
             </h3>

             {feature.description && (
              <p
               className={`text-gray-600 leading-relaxed transition-opacity duration-500 ${
                isActive ? "opacity-100" : "hidden"
               }`}
              >
               {feature.description}
              </p>
             )}
            </div>
            <div className="transform -translate-y-1/2 mt-3">
             <div className="w-full h-1 bg-gray-300 rounded-full overflow-hidden">
              <div
               className={`h-full bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-4000 ease-linear ${
                isActive ? "w-full" : "w-0"
               }`}
               style={{
                transitionDuration: isActive ? "4000ms" : "300ms",
               }}
              />
             </div>
            </div>
           </div>
          </div>
         </div>
        );
       })}
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default HowItWorks;
