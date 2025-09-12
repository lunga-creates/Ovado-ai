import { ArrowUpRight } from "lucide-react";

const logos = [
 {
  id: 1,
  src: "gemini-img.webp",
  alt: "Gemini Logo",
 },
 {
  id: 2,
  src: "anthropic-img.webp",
  alt: "Anthropic Logo",
 },
 {
  id: 3,
  src: "openai-img.webp",
  alt: "OpenAI Logo",
 },
 {
  id: 4,
  src: "claude-img.webp",
  alt: "Claude Logo",
 },
 {
  id: 5,
  src: "m-img.webp",
  alt: "HuggingFace Logo",
 },
 {
  id: 6,
  src: "deepseek-img.webp",
  alt: "Deepseek Logo",
 },
 {
  id: 7,
  src: "microsoft-img.webp",
  alt: "Microsoft Logo",
 },
 {
  id: 8,
  src: "llama-img.webp",
  alt: "LLaMA Logo",
 },
 {
  id: 9,
  src: "grok-img.webp",
  alt: "Grok Logo",
 },
];

const LLMsSection = () => {
 return (
  <section className="bg-white py-16 md:py-24 ">
   <div className="container mx-auto px-4 md:px-8 ">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-center max-w-7xl mx-auto">
     {/* Left Column: Logos Grid */}
     <div className="flex justify-center lg:justify-start ">
      <div className="grid grid-cols-3 gap-8 md:gap-12 max-w-lg lg:max-w-none">
       {logos.map((logo) => (
        <div key={logo.id} className="flex justify-center items-center">
         <img
          src={logo.src}
          alt={logo.alt}
          className="max-h-16 md:max-h-24 w-auto"
         />
        </div>
       ))}
      </div>
     </div>

     {/* Right Column: Text Content and Button */}
     <div className="text-center lg:text-left">
      <p className="text-center md:text-left text-sm text-blue-500 mb-4 bg-blue-100 w-fit px-2 rounded-xl mt-4">
       AI That Understands, Thinks & Acts
      </p>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
       The Brains Behind Ovado.ai
      </h2>
      <p className="text-lg text-gray-700 mb-8 max-w-xl lg:max-w-none mx-auto lg:mx-0">
       Ovado.ai harnesses the world’s leading LLMs—trusted, high-performing
       models that fuel intelligence, adaptability, and unmatched results.
      </p>
      <a
       href="#contact-us"
       className="mx-auto lg:mx-0 flex items-center w-fit justify-center gap-1 bg-blue-600 px-8 py-4 rounded-lg hover:text-black hover:bg-white text-white"
      >
       Book a Demo Call
       <ArrowUpRight size={18} />
      </a>
     </div>
    </div>
   </div>
  </section>
 );
};

export default LLMsSection;
