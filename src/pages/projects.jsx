import ProjectData from "@/assets/data/data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code, Eye, Github, View } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Projects() {
  const [projects, setProjects] = useState(ProjectData);
  const navigate = useNavigate()
  return (
    <div
      className="min-h-screen lg:py-44 py-28 md:py-44 px-5 
           bg-gray-200
           dark:bg-[#000000a2]  [#1a1a1a] 
           "
    >
      <div className="container lg:px-10 mx-auto flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Featured Projects
        </h2>
        <div className="h-1 w-20  bg-gray-900 dark:bg-[#eeeeee] mx-auto rounded-full mb-15" />
        <div className="boder border-red-500 lg:px-72 text-neutral-700 dark:text-neutral-400">
          <p className="text-center mb-15 ">
            Showcase of my <span className="font-bold">web development</span> projects built with <span className="font-bold">modern web technologies.</span> Each project demonstrates
            professional web design and full-stack development expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 py-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="border-neutral-300 border bg-gray-200
           dark:bg-[#131212] shadow-none  [#1a1a1a] dark:border-neutral-700
                 relative rounded-lg  transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer p-0"
            >
              <img
                src={project.Image}
                alt=""
                className="w-full lg:h-[300px] h-[280px] object-cover relative"
              />

              <div className="absolute top-4 right-4">
                <span className="bg-black text-white dark:text-black dark:bg-gray-200 text-xs font-semibold px-4 py-1 rounded-full">
                  {project.categories}
                </span>
              </div>

              <div className="px-6 py-6 w-20%">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p
                  className="mb-4 
                       dark:text-neutral-500 text-shadow-neutral-700 text-sm"
                >
                  {project?.description.length > 20 ? project?.description.toString(0, 10) + '...' : project?.description} 
                </p>
                {/* <p className="mb-4"> */}
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
                  <a
                    href={project.viewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dark:bg-gray-200 dark:text-black bg-black text-white w-full
                       py-2 px-4 rounded-md font-medium text-sm cursor-pointer flex justify-center items-center gap-2 hover:opacity-85 transition-all duration-500 ease-in-out"
                  >
                    <Eye size={16} /> Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dark:bg-black dark:text-white dark:hover:opacity-70 dark:border-neutral-700
                     bg-[#eeeeee] border text-black hover:bg-gray-200 hover:border hover:border-gray-50 border-gray-300  w-full
                       py-2 px-4 rounded-md font-medium text-sm cursor-pointer flex justify-center items-center gap-2 hover:opacity-85 transition-all duration-500 ease-in-out"
                  >
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center">
           <a
               href="https://github.com/AbdulfataiOlarewaju"
                className='dark:bg-black dark:text-white dark:hover:opacity-70 dark:border-neutral-700
                     bg-[#eeeeee] border text-black hover:bg-gray-200 hover:border hover:border-gray-50 border-gray-300
                py-[11px] px-7 rounded-md font-medium text-sm cursor-pointer flex justify-center items-center gap-2 hover:opacity-85 transition-all duration-500 ease-in-out '
              >
                <Github size={17}/>
                 View More on GitHub
              </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
