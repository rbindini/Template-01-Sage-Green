import "./Lightbox.css";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Lightbox({ images, current, close, next, prev }) {
  if (current === null) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="lightbox-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <button className="close-btn" onClick={close}>
          <FaTimes />
        </button>

        <button className="nav-btn left" onClick={prev}>
          <FaChevronLeft />
        </button>

        <motion.img
          key={current}
          src={images[current]}
          alt=""
          className="lightbox-image"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ duration: 0.35 }}
        />

        <button className="nav-btn right" onClick={next}>
          <FaChevronRight />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

export default Lightbox;