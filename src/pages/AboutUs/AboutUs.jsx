import React from "react";
import { motion } from "framer-motion";

function AboutUs() {
  const sectionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-[#FFF4EC] min-h-screen">
      <div className="px-6 py-12 max-w-4xl mx-auto text-gray-800">
        <motion.h1
          className="text-2xl md:text-4xl font-bold mb-6 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          TellMe: A Compassionate Response to the Global Mental Health Crisis
        </motion.h1>

        <motion.div
          className="border-[0.2px] border-gray-500 my-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="flex flex-row justify-start items-center mb-5 gap-5"
        >
          <img src="/shiddantR.png" alt="" className="h-10 rounded-4xl" />
          <p>by Dr Siddhant R</p>
        </motion.div>

        <motion.p
          className="text-lg mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <strong>8,00,000</strong> individuals die by suicide each year.{" "}
          <strong>1 in 4</strong> people will experience a mental health
          disorder in their lifetime. For every suicide, at least{" "}
          <strong>20</strong> individuals attempt it. <strong>50%</strong> of
          all lifetime mental illnesses begin by age 14, and{" "}
          <strong>75%</strong> by age 24. An estimated{" "}
          <strong>700 million</strong> people globally suffer from an untreated
          mental health condition. Depression is the leading cause of disability
          worldwide, affecting over <strong>280 million</strong> people.
          Approximately <strong>75%</strong> of those in need of mental health
          support never seek professional help.
        </motion.p>

        <motion.p
          className="text-lg mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          Did you read all these stats or just skim past them? I wouldn't blame
          you—
          <br />I might have done the same if I hadn't lost a close friend and
          seven other direct or indirect acquaintances to suicide. Their silent
          battles went unrecognised, their pain invisible, and their voices
          never heard. The grief of those left behind made me realise that
          mental health struggles often remain in the shadows, dismissed or
          misunderstood by society.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold mt-10 mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          A Vision for Preventive Mental Health Support
        </motion.h2>

        <motion.p
          className="text-lg mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          I refuse to let these numbers continue to rise.{" "}
          <strong>TellMe</strong> is my response—an initiative designed as an
          early intervention in mental health. It is not therapy, nor does it
          replace professional mental health treatment. Instead, it offers a
          safe, accessible space where individuals can express their thoughts
          and emotions openly, without fear of stigma, judgment, or societal
          expectations.
        </motion.p>

        <motion.p
          className="text-lg mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          Many people struggle to find someone who will truly listen without
          offering unsolicited advice or dismissing their concerns.
          <strong>TellMe</strong> exists to fill that gap. We recognise that
          having a conversation at the right time can be the difference between
          feeling overwhelmed and finding a moment of relief. By providing a
          platform where individuals can talk freely, we hope to create a world
          where mental health support is not a luxury, but a necessity available
          to all.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold mt-10 mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          Creating a Culture of Mental Well-Being
        </motion.h2>

        <motion.p
          className="text-lg mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          Mental health care should not be limited to moments of crisis—it
          should be a continuous, preventive approach. By fostering open
          conversations and encouraging self-expression, we aim to create a
          culture where seeking help is not seen as a last resort but as an
          essential part of overall well-being. Through <strong>TellMe</strong>,
          we envision a world where no one feels alone in their struggles, where
          everyone has a space to be heard, and where support is available
          anytime, anywhere.
        </motion.p>

        <motion.p
          className="text-xl lg:text-3xl font-bold italic text-gray-700 mt-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          "No labels. No judgments. Just a space to be heard."
        </motion.p>
      </div>
    </div>
  );
}

export default AboutUs;
