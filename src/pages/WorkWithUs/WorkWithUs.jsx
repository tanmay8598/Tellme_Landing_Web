import React from "react";
import { motion } from "framer-motion";

function WorkWithUs() {
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

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="bg-[#FFF4EC] min-h-screen">
      <div className="px-6 py-12 max-w-4xl mx-auto text-gray-800">
        <motion.h1
          className="text-2xl md:text-4xl font-bold mb-8 text-left text-gray-900"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          Join TellMe
        </motion.h1>

        <motion.div
          className="border-[0.2px] border-gray-500 my-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        />

        <motion.h2
          className="text-2xl font-semibold mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          Why Join TellMe?
        </motion.h2>

        <motion.p
          className="text-lg mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          TellMe is a unique mental health platform that provides a safe,
          judgment-free listening space for individuals in need of support. This
          is a preventive mental health care initiative designed to offer human
          connection, compassionate listening, and emotional support. As we
          grow, we are looking for passionate psychologists who want to make a
          difference by being there for those who need to be heard.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold mt-10 mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          Benefits of Working with TellMe
        </motion.h2>

        <motion.div
          className="border-[0.2px] border-gray-500 my-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        />

        <motion.ul
          className="list-disc list-inside text-lg space-y-2 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {[
            "<strong>Flexible Schedule</strong> - Work at your convenience with <em>on-demand sessions</em>.",
            "<strong>Remote Work</strong> - Support users from anywhere in the world.",
            "<strong>Earn While Making an Impact</strong> - Psychologists receive compensation.",
            "<strong>Continuous Training</strong> - Access to training sessions and workshops to enhance your skills.",
            "<strong>Be Part of a Meaningful Initiative</strong> - Help create a preventive mental health support system that makes a difference in people's lives.",
          ].map((item, i) => (
            <motion.li
              key={i}
              variants={listItemVariants}
              custom={i}
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </motion.ul>

        <motion.h2
          className="text-2xl font-semibold mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          How to Apply
        </motion.h2>

        <motion.div
          className="border-[0.2px] border-gray-500 my-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        />

        <motion.ol
          className="list-decimal list-inside text-lg space-y-2 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {[
            "Reach out to us at <a href='mailto:info@thetellme.com' className='text-blue-600 underline'>info@thetellme.com</a>.",
            "Submit your credentials and background verification documents.",
            "If shortlisted, attend an interview or assessment call.",
            "Selected psychologists will complete TellMe's Training Program.",
            "Once approved, start taking calls and supporting users in need.",
          ].map((item, i) => (
            <motion.li
              key={i}
              variants={listItemVariants}
              custom={i}
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </motion.ol>

        <motion.h2
          className="text-2xl font-semibold mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          The Art of Listening
        </motion.h2>

        <motion.div
          className="border-[0.2px] border-gray-500 my-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        />

        <motion.p
          className="text-lg mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          Listening is not just hearing words—it is an active skill that
          requires patience, emotional intelligence, and a deep understanding of
          human communication. At TellMe, we prioritize empathetic listening as
          a core competency.
        </motion.p>

        <motion.ul
          className="list-disc list-inside text-lg space-y-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {[
            "<strong>Active Listening:</strong> The ability to focus entirely on the speaker, acknowledging their feelings and responding appropriately.",
            "<strong>Understanding Language & Context:</strong> A skilled listener picks up on tone, pauses, and unspoken emotions, creating a safe space for open dialogue.",
            "<strong>Non-Verbal Communication:</strong> Recognizing the power of silence, body language, and tone shifts to understand deeper emotions.",
            "<strong>Validation Without Judgment:</strong> Providing emotional validation while ensuring a non-directive, supportive conversation.",
            "<strong>Encouraging Safe Expression:</strong> Making individuals feel heard, understood, and accepted, helping them process their emotions.",
          ].map((item, i) => (
            <motion.li
              key={i}
              variants={listItemVariants}
              custom={i}
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

export default WorkWithUs;
