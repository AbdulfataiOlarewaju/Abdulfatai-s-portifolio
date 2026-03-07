import React, { useState, useEffect, useRef } from "react";
import {
  MoonIcon,
  SunIcon,
  Download,
  Eye,
  Code,
  Code2,
  Laptop2,
  Brain,
  Palette,
  Menu,
} from "lucide-react";
import useDarkMode from "@/hooks/useDarkMode";
import { motion, useInView } from "framer-motion";

function About() {
  const [theme] = useDarkMode();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const cards = [
    {
      icon: <Laptop2 className="w-8 h-8 mb-3" />,
      title: "Full-Stack Development",
      description: "Building responsive and interactive websites using modern tools"
    },
    {
      icon: <Brain className="w-8 h-8 mb-3" />,
      title: "Problem Solving",
      description: "Tackling challenges creatively and turning ideas into working solutions."
    },
    {
      icon: <Palette className="w-8 h-8 mb-3" />,
      title: "User Interface Design",
      description: "Designing interfaces that are clean, intuitive, and visually engaging."
    },
    {
      icon: <Code2 className="w-8 h-8 mb-3" />,
      title: "Clean Code",
      description: "I believe in writing maintainable, scalable code that tells a story"
    }
  ];

  return (
    <div
      className="min-h-screen lg:py-44 py-28 md:py-44 px-5 
           bg-gray-200
           dark:bg-[#000000a2]  [#1a1a1a] 
           "
      ref={ref}
    >
      <div className="container mx-auto flex flex-col justify-center">
        <motion.h2 
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-3xl lg:text-4xl  font-bold mb-4 text-center"
        >
          About Sakariyau Abdulfatai
        </motion.h2>
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="h-1 w-20 bg-gray-900 dark:bg-[#eeeeee] mx-auto rounded-full mb-15" 
        />
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="container lg:px-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
        >
          {/* left side of the about me */}
          <motion.div variants={itemVariants} className="px-2 text-left">
            <h1 className="lg:text-2xl text-xl font-medium mb-6">
              Full Stack Web Developer & Software Engineer in Ilorin, Nigeria
            </h1>
            <div className="mx-auto text-neutral-700 dark:text-neutral-400">
              <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
                I'm <span className="font-bold">Sakariyau Abdulfatai</span>, a
                passionate
                <span className="font-bold"> full-stack developer </span> and
                <span className="font-bold"> problem solver</span> based in
                <span className="font-bold"> Nigeria</span>. I build
                <span className="font-bold"> clean</span>,
                <span className="font-bold"> scalable</span>, and
                <span className="font-bold"> high-performance</span> web
                applications by combining strong frontend and backend
                engineering principles.
                <br />
                <br />
                As a full-stack developer, I think beyond the user interface. I
                focus on how
                <span className="font-bold"> frontend components</span>,
                <span className="font-bold"> backend logic</span>, and
                <span className="font-bold"> databases</span> work together, how
                <span className="font-bold"> data flows</span> through the
                system, and how
                <span className="font-bold"> performance</span>,
                <span className="font-bold"> security</span>, and
                <span className="font-bold"> scalability</span> can be improved
                for a seamless experience. Whether it's designing a modern UI,
                building efficient APIs, or structuring backend services, I aim
                for clean architecture and maintainable code.
                <br />
                <br />I specialize in
                <span className="font-bold"> full-stack web development</span>,
                <span className="font-bold"> API design</span>,
                <span className="font-bold"> responsive interfaces</span>, and
                <span className="font-bold">
                  {" "}
                  end-to-end application development
                </span>
                , delivering solutions that are fast, reliable, and easy to use.
                <br />
                <br />
                When I'm not coding, I'm
                <span className="font-bold"> learning new technologies</span>,
                improving my backend and system design skills, sharing
                knowledge, and
                <span className="font-bold">
                  {" "}
                  helping other developers grow
                </span>
                . For me, every project is an opportunity to build complete
                solutions and solve real problems that matter.
              </p>

            </div>
          </motion.div>
          {/* Right side of the about me */}
          <motion.div variants={itemVariants} className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="border-neutral-300 bg-gray-200
           dark:bg-[#000000a2]  [#1a1a1a] dark:border-neutral-700 rounded-md px-4  border py-8 cursor-pointer"
                >
                  {card.icon}
                  <p className="text-md font-semibold mb-3">
                    {card.title}
                  </p>
                  <p className="text-sm">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;

