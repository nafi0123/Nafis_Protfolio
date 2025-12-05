import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong, try again!");
        }
      );
  };

  return (
    <section id="contact" className="bg-slate-900 text-white py-20 px-6 md:px-20">
      <motion.p
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-16 text-center md:text-left text-[#FF6B5C]"
      >
        Contacts
      </motion.p>

      <div className="flex flex-col md:flex-row justify-between gap-16">
        {/* LEFT SECTION */}
        <div className="md:w-1/2 md:block hidden">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Have a project? <br /> Let’s talk!
          </motion.h2>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#FF6B5C] text-slate-900 font-semibold rounded-md mt-4"
          >
            Submit
          </motion.button>
        </div>

        {/* RIGHT SECTION — FORM */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 space-y-8"
        >
          <div>
            <label className="text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="text-gray-300">Message</label>
            <textarea
              rows="3"
              name="message"
              className="w-full bg-transparent border-b border-gray-500 py-2 resize-none focus:outline-none"
              required
            ></textarea>
          </div>

          {/* Mobile Only Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#FF6B5C] text-slate-900 font-semibold rounded-md mt-6 w-full md:hidden"
            type="submit"
          >
            Submit
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
