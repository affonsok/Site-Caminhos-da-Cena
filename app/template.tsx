'use client';

import { motion } from 'motion/react';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, filter: 'blur(8px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ ease: 'easeInOut', duration: 0.8 }}
    >
      {children}
    </motion.main>
  );
}
