import { motion } from "framer-motion";

export default ({
  pre = { scale: 1, opacity: 1, y: 200 },
  duration = 0.3,
  once = true,
  ...rest
}) => (
  <div
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
