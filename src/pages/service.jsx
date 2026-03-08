import { serviceData } from "@/assets/data/data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

function Services() {
  const [services] = useState(serviceData);
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
          className=" font-bold mb-4  md:text-[33px] text-[24px] text-center"
        >
          Web Design & Development Services
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
            Professional{" "}
            <span className="font-bold">
              web design and development services in
            </span>{" "}
            <span className="font-bold">Ilorin, Nigeria.</span> From custom
            websites to e-commerce solutions, I deliver high-quality digital
            experiences.
          </p>
        </motion.div>
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-auto md:px-5"
      >
        {services && services.length > 0
          ? services.map((service, index) => {
              const Logo = service.logo;
              return (
                <motion.div
                  key={service.title || index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <Card
                    className="border border-neutral-300  bg-gray-200
           dark:bg-[#131212] shadow-none  [#1a1a1a] dark:border-neutral-700 rounded-lg overflow-hidden "
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="p-3 rounded-md bg-neutral-300 dark:bg-neutral-800 inline-flex items-center justify-center">
                          {Logo ? (
                            <Logo className="w-5 h-5 text-gray-800 dark:text-white" />
                          ) : null}
                        </div>
                      </div>

                      <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{service.title}</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-3 leading-relaxed">{service.description}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {service.technologies?.map((tech) => (
                          <Badge key={tech} className="dark:bg-black bg-neutral-200 border-neutral-300 text-black dark:text-white dark:border-neutral-700">{tech}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })
          : null}
      </motion.div>
      
      <motion.div 
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex items-center justify-center lg:px-72 mt-12"
      >
        <Card className='border border-neutral-300  bg-gray-200
           dark:bg-[#131212] shadow-none  [#1a1a1a] dark:border-neutral-700 rounded-lg  overflow-hidden cursor-pointer px-3 py-4'>
            <CardContent className='text-center flex flex-col items-center'>
              <h2 className="font-semibold text-xl mb-2">Need a Custom Solution?</h2>
              <p className="text-neutral-600 dark:text-neutral-300">Every business is unique. Let's discuss your specific requirements and create a tailored solution that fits your budget and goals.</p>

             
            </CardContent>
            <CardFooter className='flex items-center gap-3 justify-center'>
               <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={()=> navigate('/contact')}
                className='dark:bg-white dark:text-black bg-black text-white
                py-[14px] px-7 rounded-md font-medium text-lg cursor-pointer flex justify-center items-center gap-2 hover:opacity-85 transition-all duration-500 ease-in-out text-sm'
              >
                 Start Your Project
                 <ArrowRight/>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={()=> navigate('/projects')}
                className='dark:bg-black dark:text-white dark:hover:opacity-70 dark:hover:border
                     bg-[#eeeeee] border border-gray-50 text-black hover:bg-gray-200 hover:border hover:border-gray-50
                py-[14px] px-10 rounded-md font-medium text-lg cursor-pointer flex justify-center items-center gap-2 hover:opacity-85 transition-all duration-500 ease-in-out text-sm'
              >
                 View My Work
              </motion.button>
            </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}

export default Services;

