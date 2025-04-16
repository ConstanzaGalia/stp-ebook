import React from 'react'
import { motion } from "framer-motion";

export default function ECGDivider() {
  return (
    <div className="w-full overflow-hidden bg-white">
      <svg
        viewBox="0 0 1440 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-28"
        preserveAspectRatio="none"
      >
        <motion.polyline
          points="0,100 500,100 560,190 620,100 680,10 740,100 1440,100"
          fill="none"
          stroke="#26B0A4"
          strokeWidth="16"
          strokeLinejoin="miter"
          strokeLinecap="butt"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 7,
            ease: "easeInOut"
          }}
        />
      </svg>
    </div>
  );
}
