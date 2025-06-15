import mainImage from "../../Assets/mainImage_1.png"
import { Link } from 'react-router-dom';
import Button from "../Button";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <div
      className="bg-cover min-h-screen text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${mainImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay with gradient */}
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-black/30 to-transparent"></div>
      
      <section className="h-[calc(100vh-80px)]">
        <div className="container mx-auto px-[10px]">
          <div className="relative h-[100vh] w-full">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center h-full flex items-center justify-center flex-col
               w-[90%] md:w-[80%] mx-auto p-[20px] uppercase relative md:gap-[30px] gap-[20px]"
            >
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative"
              >
                <h2
                  className="md:text-7xl sm:text-5xl text-2xl font-bold"
                  style={{
                    color: 'white',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                    letterSpacing: '0.05em',
                    borderLeft: '8px solid #F4A100',
                    paddingLeft: '0.5em',
                  }}
                >
                  NK CONSTRUCTION
                </h2>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-whitee md:text-xl text-base font-light max-w-2xl"
              >
                Building Dreams, Crafting Excellence
              </motion.p>
              
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="mt-4"
              >
                <Link
                  onClick={() => {
                    const section = document.getElementById("projects-section");
                    if (section) {
                      const yOffset = -40;
                      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}>
                  <Button to="/project-showcase">EXPLORE OUR PROJECTS</Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
