import { Download, Eye } from "lucide-react";
import resumePdf from "@/assets/data/Sakariyau_Abdulfatais_Resume.docx";
import ProjectData from "@/assets/data/data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Github } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";

function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const titles = ["Full-Stack Developer", "Software Engineer", "Problem Solver"];
  const typingSpeed = 100; // ms per character
  const deletingSpeed = 50; // ms per character when deleting
  const pauseTime = 2000; // ms to pause at full text
  const navigate = useNavigate()

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8 + i * 0.15,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };



  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
        if (displayedText.length === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
     return () => clearTimeout(timeout);
     }, [displayedText, isDeleting, currentTitleIndex, titles]);

  
  return ( 
   <div
        className="min-h-screen lg:py-20 py-28 md:py-44 px-5 
           bg-gray-200
           dark:bg-[#000000a2]  [#1a1a1a]"
      >
        <div className="container mx-auto flex flex-col justify-center text-center mt-10" ref={ref}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
           <motion.h3 variants={itemVariants} className="text-center text-xl text-neutral-400 lg:mb-5 lg:m-6  mb-8">
            👋 Hello, I'm
          </motion.h3>
           <motion.h1 variants={itemVariants} className="text-2xl lg:text-5xl font-bold md:mb-4 mb-2">
            SAKARIYAU ABDULFATAI
          </motion.h1>
           <motion.h1 variants={itemVariants} className="text-2xl lg:text-[40px] font-bold mb-3">
             {/* {displayedText} */}
             {/* <motion.span 
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                className="blinking-cursor">|</motion.span> */}
           </motion.h1>
           <motion.div variants={itemVariants} className="text-center lg:mx-48 mx-auto md:py-10 py-8 lg:px-20 px-2">
            <p className="text-center mb-15 text-neutral-700 dark:text-neutral-400">
              <p
              className="md:text-[20px] sm:text-sm font-normal lg:mb-8 mb-15 lg:px-10"
            >
              Professional web developer and full-stack software engineer based in Ilorin, Nigeria. I build beautiful, performant web applications that helps businesses grow across Ilorin, Lagos, and Nigeria.
            </p>
            </p>
             
            <div className="flex flex-col sm:flex-row lg:gap-4 gap-5 justify-center">
              <motion.button 
                variants={buttonVariants}
                custom={0}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                onClick={()=>navigate('/projects')}
                className='dark:bg-white dark:text-black bg-black text-white
                py-[11px] px-7 w- rounded-md font-medium text-md cursor-pointer flex justify-center items-center gap-2 hover:opacity-85 transition-all duration-500 ease-in-out text-sm'
              >
                <Eye size={15} /> Viewe Projects
              </motion.button>
              
              <motion.a
                variants={buttonVariants}
                custom={1}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                href={resumePdf}
                download
                className='dark:bg-black dark:text-white dark:hover:opacity-70 dark:hover:border bg-[#eeeeee] border text-black hover:bg-gray-200 hover:border hover:border-gray-50 py-[11px] px-7 rounded-md font-medium text-md cursor-pointer flex justify-center items-center gap-2 transition-all duration-500 ease-in-out text-sm'
              >
                <Download size={15} /> Download Resume
              </motion.a>
            </div>
           </motion.div>
          </motion.div>
        </div>

        <section className="container mx-auto mt-24">
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="md:text-[33px] text-[24px] font-bold mb-4 text-center"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="h-1 w-20 bg-gray-900 dark:bg-[#eeeeee] mx-auto rounded-full mb-10"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
          >
            {ProjectData.slice(0, 3).map((project) => (
              <motion.div key={project.title} variants={itemVariants} whileHover={{ y: -8 }}>
                <Card className="border-neutral-300 border bg-gray-200 dark:bg-[#131212] dark:border-neutral-700 shadow-none rounded-lg overflow-hidden h-full flex flex-col">
                  <img
                    src={project.Image}
                    alt={project.title}
                    className="w-full h-[210px] object-cover"
                  />
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-neutral-700 dark:text-neutral-400 mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.slice(0, 3).map((technology) => (
                        <Badge
                          key={`${project.title}-${technology}`}
                          className="dark:bg-black bg-neutral-200 border-neutral-300 text-black dark:text-white dark:border-neutral-700"
                        >
                          {technology}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.viewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-white dark:bg-gray-200 dark:text-black w-full py-2 px-3 rounded-md text-sm font-medium flex justify-center items-center gap-2 hover:opacity-85"
                      >
                        <Eye size={16} /> Live Demo
                      </a>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#eeeeee] border border-gray-300 text-black dark:bg-black dark:text-white dark:border-neutral-700 w-full py-2 px-3 rounded-md text-sm font-medium flex justify-center items-center gap-2 hover:opacity-70"
                      >
                        <Github size={16} /> Code
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => navigate('/projects')}
              className="bg-[#eeeeee] border border-gray-300 text-black dark:bg-black dark:text-white dark:border-neutral-700 py-3 px-7 rounded-md font-medium text-sm hover:opacity-85"
            >
              View All Projects
            </button>
          </div>
        </section>

      </div>
   );
}

export default Home;
