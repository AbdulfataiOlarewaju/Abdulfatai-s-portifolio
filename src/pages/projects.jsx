import ProjectData from "@/assets/data/data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code, Eye, Github, View } from "lucide-react";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";

function Projects() {
  const [projects, setProjects] = useState(ProjectData);
  const navigate = useNavigate();
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
        delay: 0.2 + i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

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
          className="text-4xl font-bold mb-4 text-center"
        >
          Featured Projects
        </motion.h2>
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="h-1 w-20  bg-gray-900 dark:bg-[#eeeeee] mx-auto rounded-full mb-15" 
        />
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="boder border-red-500 lg:px-72 text-neutral-700 dark:text-neutral-400"
        >
          <p className="text-center mb-15 ">
            Showcase of my <span className="font-bold">web development</span> projects built with <span className="font-bold">modern web technologies.</span> Each project demonstrates
            professional web design and full-stack development expertise.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 py-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card 
                className="border-neutral-300 border bg-gray-200
           dark:bg-[#131212] shadow-none  [#1a1a1a] dark:border-neutral-700
                 relative rounded-lg  transition-all duration-300 overflow-hidden p-0 md:h-full"
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.Image}
                    alt=""
                    className="w-full h-[250px] md:h-[290px] object-cover rounded-t-lg"
                  />
                </motion.div>

                <div className="absolute top-4 right-4">
                  <span className="bg-black text-white dark:text-black dark:bg-gray-200 text-xs font-semibold px-4 py-1 rounded-full">
                    {project.categories}
                  </span>
                </div>

                <div className="px-4 md:py-6 py-3 w-20% ">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p
                    className="mb-4 
                       dark:text-neutral-500 text-shadow-neutral-700 text-sm"
                  >
                    {project?.description.length > 20 ? project?.description.toString(0, 10) + '...' : project?.description} 
                  </p>
                  
                  <div className="mb-4 flex w-full space-x-2 items-center">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <Badge
                        key={`tech-${i}-${tech}`}
                        className="dark:bg-black bg-neutral-200 border-neutral-300 text-black dark:text-white dark:border-neutral-700"
                      >
                        {tech}
                      </Badge>
                    ))}

                    {project.technologies.length > 3 && (
                      <Badge
                        key={`tech-more-${index}`}
                        className="dark:bg-black bg-neutral-200 border-neutral-300 text-black dark:text-white dark:border-neutral-700"
                      >
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2 justify-between">
                    <motion.a
                      href={project.viewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="dark:bg-gray-200 dark:text-black bg-black text-white w-full
                       py-2 px-4 rounded-md font-medium text-sm cursor-pointer flex justify-center items-center gap-2 hover:opacity-85 transition-all duration-500 ease-in-out"
                    >
                      <Eye size={16} /> Live Demo
                    </motion.a>
                    <motion.a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="dark:bg-black dark:text-white dark:hover:opacity-70 dark:border-neutral-700
                     bg-[#eeeeee] border text-black hover:bg-gray-200 hover:border hover:border-gray-50 border-gray-300  w-full
                       py-2 px-4 rounded-md font-medium text-sm cursor-pointer flex justify-center items-center gap-2 hover:opacity-85 transition-all duration-500 ease-in-out"
                    >
                      <Github size={16} /> Code
                    </motion.a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-8 flex items-center justify-center"
        >
           <motion.a
               href="https://github.com/AbdulfataiOlarewaju"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className='dark:bg-black dark:text-white dark:hover:opacity-70 dark:border-neutral-700
                     bg-[#eeeeee] border text-black hover:bg-gray-200 hover:border hover:border-gray-50 border-gray-300
                py-[11px] px-7 rounded-md font-medium text-sm cursor-pointer flex justify-center items-center gap-2 hover:opacity-85 transition-all duration-500 ease-in-out '
              >
                <Github size={17}/>
                 View More on GitHub
              </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;

