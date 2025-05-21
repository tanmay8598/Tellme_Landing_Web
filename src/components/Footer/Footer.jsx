import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <>
      <motion.section
        className="relative z-10 bg-[#5f8458] px-6 py-16 text-center"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl text-white font-bold mb-4">
          Click. Connect. Breathe.
        </h2>
        <p className="mb-4 text-white ">
          Your first 10 minutes are free to feel heard.
        </p>
        <motion.button
          className="bg-[#FFF4EC] text-[#352F2F] px-6 py-3 rounded-full shadow-md hover:opacity-90 transition"
          whileTap={{ scale: 0.95 }}
        >
          Notify Me
        </motion.button>
      </motion.section>

      <footer className="relative z-10 bg-[#5f8458] text-center py-6 text-sm text-white">
        <p className="mt-2">
          © 2025 HeartTales Wholeness Pvt. Ltd. All rights reserved.
        </p>
        <p>
          Made with <span className="text-red-500">♥</span> in India
        </p>
      </footer>
    </>
  );
}

export default Footer;
