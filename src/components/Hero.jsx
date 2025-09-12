import { ArrowUpRight } from 'lucide-react'
import { ReactTyped } from 'react-typed'

const Hero = () => {
  return (
    <div
      id="home"
      className="w-full bg-[#020d1e] text-white mt-17 bg-[url('/bg-img1.webp')] bg-cover"
    >
      <div className=" mx-auto flex flex-col lg:flex-row items-center justify-between px-8 py-16 max-w-[1346px] gap-4">
        <div className="w-full lg:w-1/2 text-left mb-10 lg:mb-0 relative">
          <h1 className="text-4xl text-white md:text-[#fdb529] md:text-5xl font-extrabold leading-tight ] mb-4">
            Unlock Smarter Customer <br /> Success! Multi-Agent AI <br /> built
            to
          </h1>
          <h2 className="text-3xl md:text-white text-[#fdb529] md:text-4xl font-bold mb-6">
            <ReactTyped
              strings={[
                'Automate Customer Support',
                'Automate Content Creation',
                'Automate Sales and Marketing',
                'Automate Plant Operations',
                ``,
              ]}
              typeSpeed={50} // typing speed
              backSpeed={30} // deleting speed
              backDelay={1500} // pause before deleting
              loop
            />
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Cut support costs, boost team efficiency, and delight every customer
            with AI-powered personalized assistance that drives results.
          </p>
          <a
            href="#contact-us"
            className="flex items-center w-fit justify-center gap-1 bg-blue-600 px-8 py-4 rounded-lg hover:text-black hover:bg-white"
          >
            Book a Demo Call
            <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-full relative">
            <img
              src="./ovado-img.png"
              alt="AI Dashboard"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
