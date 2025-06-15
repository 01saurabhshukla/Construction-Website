import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { headerData } from "../data/data";
import { MdOutlineDehaze, MdClose, MdPhone } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/NK_logo_with_text.png";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggleHeader = () => {
    setIsActive((prevState) => !prevState);
  };

  const handleCloseHeader = () => {
    setIsActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`h-[80px] w-full fixed z-50 flex items-center transition-all duration-300 ${
        isScrolled || isActive 
          ? "bg-secondary shadow-lg" 
          : "md:bg-transparent bg-secondary/90"
      }`}
    >
      <div className="container relative mx-auto px-[20px] flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center"
        >
          <Link to={"/"} className="flex items-center">
            <img src={logo} alt="NK Construction logo" className="w-[100px]" />
          </Link>
        </motion.div>
        
        
        
        <nav>
          <AnimatePresence>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`flex items-center md:flex-row flex-col gap-[40px] uppercase
                md:static fixed top-[80px] md:h-auto h-[calc(100vh-80px)] 
                md:w-auto md:bg-transparent bg-secondary/95
                transition-all duration-300 ease-in-out
                ${isActive ? "w-full right-0" : "right-[-100%] md:right-0"}
                z-50 md:p-0 p-8`}
            >
              {headerData.map((l, index) => (
                <motion.li 
                  key={l.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <NavLink
                    to={l.to}
                    onClick={handleCloseHeader}
                    className={({ isActive }) => 
                      `relative font-medium transition-all duration-300 ease-in-out
                      ${isActive 
                        ? 'text-primary bg-primary/10 px-4 py-2 rounded-lg' 
                        : isScrolled 
                          ? 'text-primary hover:text-primary hover:bg-primary/10 px-4 py-2 rounded-lg' 
                          : 'text-primary hover:text-primary hover:bg-primary/10 px-4 py-2 rounded-lg'
                      }`
                    }
                  >
                    {l.title}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </nav>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="md:hidden block" 
          onClick={handleToggleHeader}
        >
          {isActive ? (
            <MdClose className="text-2xl text-white cursor-pointer" />
          ) : (
            <MdOutlineDehaze className="text-2xl text-white cursor-pointer" />
          )}
        </motion.div>
      </div>
    </motion.header>
  );
}

export default Header;
