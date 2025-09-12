import { ArrowUpRight } from "lucide-react";

const BlogsSection = () => {
 const blogData = [
  {
   title: "Top 5 AI-Generated Ads of 2025 That Changed the Game",
   description:
    "2025 marked the breakout of AI ads—faster, cheaper, and bolder. From Ovado AI to Nike, brands proved AI can deliver cinematic, emotional, and cultural impact.",
   image: "./blog-img1.png",
   date: "september 5, 2025",
  },
  {
   title:
    "Agentic AI vs Generative AI in Banking: Why 2025 Belongs to Digital Workforces, Not Chatbots",
   description:
    "Generative AI chats, Agentic AI acts: Ovado AI powers banks with context-aware, compliant, multi-agent workflows for fraud, lending, CX, and wealth management.",
   image: "./blog-img2.png",
   date: "September 3, 2025",
  },
  {
   title:
    "Fine-Tuning Multi-Agent Collaboration: Teaching AI Agents to Work as a Team",
   description:
    "Fine-tuning LLM-powered AI agents unlocks precision, adaptability, and smarter workflows—driving scalable, enterprise-ready Agentic AI solutions.",
   image: "./blog-img3.png",
   date: "September 1, 2025",
  },
 ];

 return (
  <section className="bg-white max-w-6xl mx-auto py-12 px-2">
   <div className="text-center mb-12">
    <p className="mx-auto text-sm text-blue-500 mb-2 bg-blue-100 w-fit px-2 rounded-xl ">
     Blogs
    </p>
    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
     Check Out the Latest from Ovado
    </h2>
   </div>
   <div className="md:flex gap-2 p-4 md:p-0">
    {blogData.map((blog, index) => (
     <div key={index} className="flex flex-col pb-8 mb-8">
      <div className="w-full md:h-[210px] mb-3 rounded-3xl overflow-hidden">
       <img
        loading="lazy"
        src={blog.image}
        alt={blog.title}
        className="hover:scale-105 transition-all opacity-95 hover:opacity-100 h-full w-full object-cover"
       />
      </div>
      <div className="w-full">
       <p className="text-gray-500 py-2 text-sm md-text-base">{blog.date}</p>
       <h3 className="text-xl font-bold mb-4">{blog.title}</h3>
       <p className="text-gray-800 mb-1">{blog.description}</p>
       <span className="text-blue-500 hover:underline cursor-pointer">
        Read more
       </span>
      </div>
     </div>
    ))}
   </div>
   <div className="flex justify-center">
    <button className="inline-flex gap-1 py-4 items-center bg-blue-600 text-white px-6 rounded-lg shadow-lg  hover:bg-gray-100 hover:text-blue-600 transition-colors">
     More Blogs
     <ArrowUpRight size={18} />
    </button>
   </div>
  </section>
 );
};

export default BlogsSection;
