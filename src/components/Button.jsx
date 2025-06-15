import { MdOutlineArrowRightAlt } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Use only if using React Router

function Button({ children, href, to, ...rest }) {
  const content = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="main-btn text-whitee sm:py-[12px] sm:px-[35px] py-[10px] px-[25px] 
      border-[2px] bg-primary border-primary
      text-sm font-medium flex items-center gap-[10px] rounded-md shadow-lg"
      {...rest}
    >
      {children}
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="arrow"
      >
        <MdOutlineArrowRightAlt className="text-xl" />
      </motion.div>
    </motion.div>
  );

  if (to) {
    return <Link to={to}>{content}</Link>; // For internal routing (React Router)
  } else if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  } else {
    return <button {...rest}>{content}</button>; // Fallback
  }
}

export default Button;
