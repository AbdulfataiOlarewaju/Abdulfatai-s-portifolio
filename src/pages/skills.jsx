import { Card, CardContent, CardFooter } from "@/components/ui/card";
import React, { useEffect, useState, useRef } from "react";
import { Progress } from "@/components/ui/progress";
import { motion, useInView } from "framer-motion";

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const SkillBar = ({ label, value, index }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReduced) {
        setProgress(Number(value));
        return;
      }

      // Only animate when in view
      if (!isInView) return;

      let raf;
      const target = Number(value);
      const duration = 1500; // 1.5 seconds for smooth animation
      const steps = 60;
      const increment = target / steps;
      let currentStep = 0;

      function step() {
        currentStep++;
        setProgress(Math.min(target, Math.round(increment * currentStep)));
        if (currentStep < steps) {
          raf = requestAnimationFrame(step);
        }
      }

      // Delay start for staggered effect
      const timeout = setTimeout(() => {
        raf = requestAnimationFrame(step);
      }, index * 200);

      return () => {
        clearTimeout(timeout);
        if (raf) cancelAnimationFrame(raf);
      };
    }, [value, isInView, index]);

    return (
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="mb-4"
      >
        <div className="flex justify-between text-sm mb-1">
          <span>{label}</span>
          <span>{progress}%</span>
        </div>

        <div className="w-full">
          <Progress value={progress} />
        </div>
      </motion.div>
    );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
        delay: 0.2 + i * 0.15,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const skillCategories = [
    {
      title: "Frontend",
      emoji: "🎨",
      skills: [
        { label: "React", value: "95" },
        { label: "Javascript", value: "90" },
        { label: "Tailwind CSS", value: "95" },
        { label: "Framer Motion", value: "85" }
      ]
    },
    {
      title: "Backend",
      emoji: "⚙️",
      skills: [
        { label: "Node.js", value: "90" },
        { label: "Express", value: "80" },
        { label: "MongoDB", value: "82" },
        { label: "Python", value: "40" }
      ]
    },
    {
      title: "Tools",
      emoji: "🛠️",
      skills: [
        { label: "Git/GitHub", value: "95" },
        { label: "Figma", value: "75" },
        { label: "Docker", value: "45" }
      ]
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
      <div className="container lg:px-10 mx-auto flex flex-col justify-center">
        <motion.h2 
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="md:text-[33px] text-[24px] font-bold mb-4  text-center"
        >
          Skills & Expertise
        </motion.h2>
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="h-1 w-20  bg-gray-900 dark:bg-[#eeeeee] mx-auto rounded-full mb-8" 
        />
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="boder border-red-500 lg:px-72"
        >
          <p className="text-center mb-15 text-neutral-700 dark:text-neutral-400">
            A comprehensive overview of my technical skills and areas of
            expertise, spanning both development and technical communication.
          </p>
        </motion.div>

        {/* GRID START */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-left"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              custom={catIndex}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="
                     dark:border-neutral-700
                     border-neutral-300 bg-[#e5e7ebe0] dark:bg-[#131212]
                 rounded-md px-4 shadow-sm border py-8 "
            >
              <div className="text-3xl text-center">{category.emoji}</div>
              <p className="text-xl font-semibold text-center mb-4">{category.title}</p>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar 
                  key={skill.label} 
                  label={skill.label} 
                  value={skill.value}
                  index={skillIndex + catIndex * 4}
                />
              ))}
            </motion.div>
          ))}
        </motion.div>
        {/* GRID END */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex items-center justify-center mt-12"
        >
          <Card
            className="border border-neutral-300  bg-gray-200
                     dark:bg-[#131212] shadow-none  [#1a1a1a] dark:border-neutral-700 rounded-lg  overflow-hidden  px-3 py-4"
          >
            <CardContent className="text-center flex flex-col items-center">
              <h2 className="font-semibold text-xl mb-2">Always Learning</h2>
              <div className="flex justify-center lg:px-50">
                {" "}
                <p className="text-neutral-600 dark:text-neutral-300">
                  Technology evolves rapidly, and so do I. I'm constantly
                  exploring new frameworks, tools, and methodologies to stay at
                  the forefront of development and technical communication.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;

