import React from "react";

const Organizations = () => {
 const logos = [
  {
   name: "Barclays",
   imgUrl: "./org-1.webp",
  },
  {
   name: "National commercial bank",
   imgUrl: "./org-2.webp",
  },
  {
   name: "Mastercard",
   imgUrl: "./org-3.webp",
  },
  {
   name: "RBC",
   imgUrl: "./org-4.webp",
  },
  {
   name: "Emirates NBD",
   imgUrl: "./org-5.webp",
  },
  {
   name: "Societe Generale Bank",
   imgUrl: "./org-6.webp",
  },
  { name: "Guardian group", imgUrl: "./org-7.webp" },
  {
   name: "Bank of america",
   imgUrl: "./org-9.webp",
  },
  {
   name: "Accenture",
   imgUrl: "./org-10.webp",
  },
  {
   name: "Capgemini",
   imgUrl: "./org-11.webp",
  },
  {
   name: "Mercedes-Benz",
   imgUrl: "./org-13.webp",
  },
  {
   name: "Rolls-Royce",
   imgUrl: "./org-14.webp",
  },
  {
   name: "Toyota",
   imgUrl: "./org-15.webp",
  },
  {
   name: "Forbes",
   imgUrl: "./org-17.webp",
  },
 ];

 const duplicatedLogos = [...logos, ...logos];

 return (
  <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
   {/* Custom CSS for the animation */}
   <style>
    {`
      @keyframes scroll-left {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      .animate-scroll {
        animation: scroll-left 30s linear infinite;
      }
      .grayscale-hover:hover {
        filter: grayscale(0%);
      }
      `}
   </style>

   {/* Main content container */}
   <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl">
     Empowering Organizations to Achieve Outcomes
    </h2>
   </div>

   {/* Logo carousel container */}
   <div className="relative mt-6 overflow-hidden py-4">
    <div
     className="flex justify-center items-center space-x-12 animate-scroll"
     style={{ width: "max-content" }}
    >
     {duplicatedLogos.map((logo, index) => (
      <div
       key={index}
       className="flex-shrink-0 w-32 md:w-48 lg:w-56 grayscale filter transition duration-300 ease-in-out grayscale-hover"
      >
       <img src={logo.imgUrl} alt={logo.name} className="mx-auto" />
      </div>
     ))}
    </div>
   </div>
  </div>
 );
};

export default Organizations;
