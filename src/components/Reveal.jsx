import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Reveal({ children, delay = 0, y = 30, style = {} }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      style={style}
    >
      {children}
    </motion.div>
  )
}
