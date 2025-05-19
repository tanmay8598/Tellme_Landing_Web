import React from "react";
import { motion } from "framer-motion";

export default function App() {
  const listeners = [
    {
      name: "Shubham Mujumdar, 32M",
      qualification: "M.A. in Psychology",
      languages: "Bengali, Hindi, English",
      time: "140 mins",
    },
    {
      name: "Ravi Sharma, 35M",
      qualification: "Ph.D. in Counseling Psychology",
      languages: "Hindi, English",
      time: "250 mins",
    },
    {
      name: "Ananya Roy, 29F",
      qualification: "M.Sc. in Clinical Psychology",
      languages: "English, Hindi",
      time: "200 mins",
    },
    {
      name: " Meera Kapoor, 31F",
      qualification: "M.A. in Counseling Psychology",
      languages: "English, Marathi, Hindi",
      time: "180 mins",
    },
  ];

  return (
    <div className="relative bg-[#FFF4EC] text-[#352F2F] font-sans overflow-hidden">
      <div className="absolute top-[-80px] left-[-100px] w-[300px] h-[300px] bg-[#C9E8DC] rounded-full opacity-30 z-0"></div>
      <div className="absolute bottom-[-100px] right-[-80px] w-[250px] h-[250px] bg-[#C9E8DC] rounded-full opacity-20 z-0"></div>

      <header className=" z-10  bg-[#FFF4EC] p-4 shadow-md sticky top-0 ">
        <div className="flex justify-between items-center max-w-5xl mx-auto ">
          <img
            src="/src/assets/tellmeLogo2.png"
            alt="TellMe Logo"
            className="h-14 "
          />
          <motion.button
            className="bg-[#336727] text-white px-6 py-2 rounded-full shadow-md hover:opacity-90 transition"
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </header>

      <motion.section
        className="relative mx-auto z-10 px-6 border-b border-gray-500 py-8 flex flex-col lg:flex-row items-start md:items-center md:w-full justify-between max-w-6xl "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex-1 flex flex-col items-start justify-center">
          <h1 className="text-6xl  font-bold leading-snug mb-4 space-x-5">
            Talk. Vent. Heal. <br />
          </h1>
          <p className="text-2xl mb-6 max-w-md ">
            TellMe is NOT therapy - it’s a listening space. <br />
            <span> Because sometimes, you just need to be heard.</span>
          </p>
        </div>

        <div className="flex-1 mt-8 lg:mt-0 lg:ml-10">
          <img
            src="/src/assets/heroTellme.png"
            alt="Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </motion.section>

      <section className="relative z-10 bg-[#FFF4EC] px-6 py-5 text-center">
        <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
          Feeling unheard? Let us hold that space for you.
        </h3>

        <div className="max-w-3xl mx-auto  px-8">
          <p className="text-3xl sm:text-4xl font-medium mb-6 text-gray-800">
            Join early to be notified when we launch.
          </p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full sm:w-auto flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 shadow-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <section className="px-6 py-10 bg-[#FFF4EC] max-w-6xl mx-auto text-center sm:text-left">
        <div className="grid sm:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug mb-4">
              No Analysis. <br />
              No Judgment. <br />
              No Labels.
            </h2>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-8">
              Just a space to talk, vent and be heard—gently guided by
              Psychologists.
            </h2>

            <p className="text-gray-500 text-base sm:text-lg">
              Because sometimes, you just need guidance and not diagnosis.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">What we offer ?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Compassionate Mental Health Practioners",
            "Seemless Audio or Video Connection",
            "Stay Anonymous",
            // "Audio/Video Connect",
          ].map((title, i) => (
            <motion.div
              key={title}
              className="bg-[#fdfbd4] p-4 rounded-lg shadow"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-sm">
                {title === "Compassionate Mental Health Practioners"
                  ? "Certified Mental Health Practitioners Always available to serve you."
                  : title === "Seemless Audio or Video Connection"
                  ? "Audio or video call - your choice, your comfort."
                  : title === "Stay Anonymous"
                  ? "No pressure to reveal personal details."
                  : "Choose the format you’re most comfortable with — audio, video, or chat-based conversation."}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-6 py-16  max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Meet Our Listeners
        </h2>
        <p className="text-md  mb-6 text-center mx-auto  max-w-md">
          Expert Listeners Trained in Human Psychology - Compassionate
          professionals dedicated to helping you navigate challenges with
          clarity and calm.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listeners.map((listener, i) => (
            <motion.div
              key={i}
              className="bg-[#fdfbd4] p-4 rounded-lg text-center shadow"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="font-semibold text-lg">{listener.name}</h3>
              <p className="text-sm">{listener.qualification}</p>
              <p className="border-b border-[#cac8a4] my-2 "></p>
              <p className="text-sm">Languages: {listener.languages}</p>
              <p className="text-sm">Listening Time: {listener.time}</p>
            </motion.div>
          ))}
        </div>
      </section>

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
    </div>
  );
}
