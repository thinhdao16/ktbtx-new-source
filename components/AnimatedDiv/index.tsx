'use client'
import { motion, MotionProps } from "framer-motion";

interface AnimatedDivProps extends MotionProps {
  children?: React.ReactNode;
  className?: string; // Thêm class tùy chỉnh
  style?: React.CSSProperties; // Thêm style tùy chỉnh
}

const AnimatedDiv: React.FC<AnimatedDivProps> = ({
  children,
  className = "",
  style,
  variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
  initial = "hidden",
  whileInView = "visible",
  transition = { duration: 1, delay: 0.1 },
  viewport = { once: true },
  ...restProps 
}) => {
  return (
    <motion.div
      variants={variants}
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={viewport}
      className={`animate_top ${className}`}
      style={style}
      {...restProps} 
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
