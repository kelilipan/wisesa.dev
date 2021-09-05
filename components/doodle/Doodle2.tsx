import { motion, Variants } from "framer-motion";
const Doodle2 = () => {
  const icon: Variants = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
    },
  };
  return (
    <div style={{ width: "200px", height: "100px" }}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 100"
        className="item"
        width="100%"
        fill="transparent"
        stroke="rgba(0, 0, 255, 0.6)"
        strokeWidth={5}
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <motion.path
          d="M 28.5,43 C 28.9,43 28.7,43 30.5, 43 C 32.3,43 33.3,42.8 37.5, 43 C 41.7,43.2 45.7,43.6 51.5, 44 C 57.3,44.4 60.9,44.6 66.5, 45 C 72.1,45.4 73.9,45.800000000000004 79.5, 46 C 85.1,46.2 88.7,46 94.5, 46 C 100.3,46 103.1,46 108.5, 46 C 113.9,46 116.9,46 121.5, 46 C 126.1,46 128.1,46 131.5, 46 C 134.9,46 135.9,46 138.5, 46 C 141.1,46 142.3,46 144.5, 46 C 146.7,46 147.5,46 149.5, 46 C 151.5,46 152.9,46.2 154.5, 46 C 156.1,45.8 156.9,45.2 157.5, 45"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 0.5, ease: "linear" },
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Doodle2;
