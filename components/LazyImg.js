import { motion } from "framer-motion";

export default ({
  pre = { scale: 0.95, opacity: 0.85, y: 20 },
  duration = 0.3,
  once = true,
  ...rest
}) => (
  <motion.img
    initial="pre"
    whileInView="visible"
    viewport={{ once }}
    transition={{ duration }}
    variants={{
      visible: { opacity: 1, scale: 1, y: 0 },
      pre,
    }}
    {...rest}
  />
);
