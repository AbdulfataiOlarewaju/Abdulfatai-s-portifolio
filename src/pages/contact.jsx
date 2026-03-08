import React, { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";
import { motion, useInView } from "framer-motion";

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.4,
      },
    }),
  };

  return (
    <div
      className="min-h-screen lg:py-44 py-28 md:py-44 px-5 
           bg-gray-200
           dark:bg-[#000000a2]  [#1a1a1a]"
      ref={ref}
    >
      <div className="container lg:px-10 mx-auto flex flex-col justify-center">
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="md:text-[33px] text-[25px] font-bold mb-3 text-center"
        >
          Let's Work Together
        </motion.h2>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="h-1 w-20 bg-gray-900 dark:bg-[#eeeeee] mx-auto rounded-full mb-8"
        />
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="boder border-red-500 lg:px-72 text-neutral-700 dark:text-neutral-400"
        >
          <p className="text-center mb-15 ">
            Have a project in mind or need help with web design or development?
            I'd love to hear from you. Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
          {/* Left: Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="md:col-span-2"
          >
            <Card
              className="border border-neutral-300  bg-gray-200
           dark:bg-[#131212] shadow-none  [#1a1a1a] dark:border-neutral-700 rounded-lg  overflow-hidden cursor-pointer"
            >
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                <div className="space-y-4">
                  <motion.div
                    custom={0}
                    variants={formItemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    <label className="text-sm font-medium block mb-2">
                      Name
                    </label>
                    <Input
                      placeholder="Your name"
                      className="bg-gray-200 border border-neutral-300 dark:border-neutral-700 dark:bg-black"
                    />
                  </motion.div>

                  <motion.div
                    custom={1}
                    variants={formItemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    <label className="text-sm font-medium block mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-gray-200 border border-neutral-300 dark:border-neutral-700 dark:bg-black"
                    />
                  </motion.div>

                  <motion.div
                    custom={2}
                    variants={formItemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    <label className="text-sm font-medium block mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell me about your project or how I can help..."
                      className="bg-gray-200 border border-neutral-300 dark:border-neutral-700 dark:bg-black"
                    />
                  </motion.div>

                  <motion.div
                    custom={3}
                    variants={formItemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="mailto:sakariyauabdulfatai2003@gmail.com"
                      className="w-full dark:bg-white dark:text-black bg-black text-white text-sm py-2 md:py-3 px-6 rounded-md font-medium cursor-pointer hover:bg-black justify-center flex items-center gap-2"
                    >
                      <Send size={15} />
                      Send Message
                    </motion.a>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right: Info cards stack */}
          <div className="space-y-6">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Card
                className="border border-neutral-300  bg-gray-200
           dark:bg-[#131212] shadow-none  [#1a1a1a] dark:border-neutral-700 rounded-lg  overflow-hidden cursor-pointer"
              >
                <CardContent>
                  <h4 className="text-lg font-semibold mb-3">Get In Touch</h4>
                  <div className="space-y-3">
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <div className="p-2 rounded-md bg-neutral-300 dark:bg-neutral-700  inline-flex">
                        <Mail className="w-4 h-4 text-gray-800 dark:text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">Email</div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-300">
                          sakariyauabdulfatai2003@gmail.com
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <div className="p-2 rounded-md bg-neutral-300 dark:bg-neutral-700  inline-flex">
                        <MapPin className="w-4 h-4 text-gray-800 dark:text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">Location</div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-300">
                          Ilorin, Nigeria
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Card
                className="border border-neutral-300  bg-gray-200
           dark:bg-[#131212] shadow-none  [#1a1a1a] dark:border-neutral-700 rounded-lg  overflow-hidden cursor-pointer"
              >
                <CardContent>
                  <h4 className="text-lg font-semibold mb-3">
                    Connect With Me
                  </h4>
                  <div className="flex gap-3 mt-2 text-xl dark:text-gray-300">
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      href="https://github.com/AbdulfataiOlarewaju/"
                      className="bg-neutral-300 dark:bg-neutral-700 p-2 rounded-md hover:bg-neutral-400 dark:hover:bg-neutral-600 transition-all duration-500 ease-in-out"
                    >
                      <Github size={18} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      href="https://www.linkedin.com/in/sakariyau-abdulfatai-6b202a365?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      className="bg-neutral-300 dark:bg-neutral-700 p-2 rounded-md hover:bg-neutral-400 dark:hover:bg-neutral-600 transition-all duration-500 ease-in-out"
                    >
                      <Linkedin size={18} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      href="https://x.com/Discrete_Dev"
                      className="bg-neutral-300 dark:bg-neutral-700 p-2 rounded-md hover:bg-neutral-400 dark:hover:bg-neutral-600 transition-all duration-500 ease-in-out"
                    >
                      <Twitter size={18} />
                    </motion.a>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-4">
                    Follow me for updates on new projects, technical articles,
                    and insights into web development.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Card
                className="border border-neutral-300  bg-gray-200
           dark:bg-[#131212] shadow-none  [#1a1a1a] dark:border-neutral-700 rounded-lg  overflow-hidden cursor-pointer"
              >
                <CardContent>
                  <h4 className="text-lg font-semibold mb-3">
                    Current Availability
                  </h4>
                   <div className="mt-3 flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-[#25d366] rounded-full animate-pulse"></div>
                    <Badge className="dark:bg-black bg-neutral-800 border-neutral-300 text-[#25d366] font-bold dark:text-[#25d366]  dark:border-neutral-700">
                      Available for new projects
                    </Badge>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    Open to new projects — available for freelance and contract
                    work.
                  </p>
                 
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
