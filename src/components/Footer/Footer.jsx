import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <>
      <div className="bg-[#5f8458] text-white flex flex-col md:flex-row items-end justify-around px-6 pb-10 pt-5 lg:pt-0 ">
        <motion.div
          className="w-full md:w-[200px] flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <address className="not-italic text-sm text-center md:text-left">
            <img
              src="/hearttales-logo.jpg"
              width="120"
              height="120"
              className="rounded-full mb-4 mx-auto md:mx-0"
              alt="HeartTales Logo"
            />
            <strong>HeartTales Wholeness Pvt. Ltd.</strong>
            <br />
            Pune, India
          </address>

          <div className="flex justify-center md:justify-start items-center gap-4 mt-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/dr-siddhant-r-vairagar-bba51074/"
            >
              <img
                src="/icons8-linkedin-48.png"
                width="30"
                height="30"
                className="rounded-full"
                alt="LinkedIn"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/thetellmeapp/"
            >
              <img
                src="/icons8-instagram-48.png"
                width="30"
                height="30"
                className="rounded-full"
                alt="Instagram"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://youtube.com/@tellmeapp?si=pqpAWQ4hrnqiBwKi"
            >
              <img
                src="/icons8-youtube-48.png"
                width="30"
                height="30"
                className="rounded-full"
                alt="YouTube"
              />
            </a>
          </div>
        </motion.div>

        <div className=" flex flex-col items-center text-center">
          <motion.section
            className="bg-[#5f8458] px-6 py-16 w-full max-w-md"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl text-white font-bold mb-4">
              Click. Connect. Breathe.
            </h2>

            <motion.button
              className="bg-[#FFF4EC] text-[#352F2F] px-6 py-3 rounded-full shadow-md hover:opacity-90 cursor-pointer transition"
              whileTap={{ scale: 0.95 }}
            >
              Notify Me
            </motion.button>
          </motion.section>

          <footer className="w-full text-sm text-white mt-6">
            <p className="mt-2">
              © 2025 HeartTales Wholeness Pvt. Ltd. All rights reserved.
            </p>
            <p>
              Made with <span className="text-red-500">♥</span> in Bharat
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Footer;
