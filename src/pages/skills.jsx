

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import React from 'react'

function Skills() {
   const SkillBar = ({ label, value }) => {
    return (
      
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span>{label}</span>
          <span>{value}%</span>
        </div>

        <div
          className='w-full h-2 
             dark:bg-[#1a1a1a] bg-[#eeeeee]
              rounded-full'
        >
          <div
            style={{ width: `${value}%` }}
            className='h-2  rounded-full 
               dark:bg-gray-100 bg-[#000000]
            '
          ></div>
        </div>
      </div>
    );
  };
  return (
     <div
      className="min-h-screen lg:py-44 py-28 md:py-44 px-5 
           bg-gray-200
           dark:bg-[#000000a2]  [#1a1a1a] 
           "
    >
        <div className="container lg:px-10 mx-auto flex flex-col justify-center">
        <h2 className="lg:text-4xl font-bold mb-4  text-xl text-center">
         Skills & Expertise
        </h2>
        <div className="h-1 w-20  bg-gray-900 dark:bg-[#eeeeee] mx-auto rounded-full mb-8" />
        <div className="boder border-red-500 lg:px-72">
          <p className="text-center mb-15 text-neutral-700 dark:text-neutral-400">
           A comprehensive overview of my technical skills and areas of expertise, spanning both development and technical communication.
          </p>
        </div>

        {/* GRID START */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-left">
            {/* FRONTEND */}
            <div
              className='
                    
                       dark:border-neutral-700
                       border-neutral-300 bg-[#e5e7ebe0] dark:bg-[#131212]
                   rounded-md px-4 shadow-sm border py-8 hover:scale-101 transition-transform duration-400 cursor-pointer'
            >
              <div className="text-3xl text-center">🎨</div> 
              <p className="text-xl font-semibold text-center mb-4">Frontend</p>

              <SkillBar label="React" value="95" />
              <SkillBar label="Javascript" value="90" />
              <SkillBar label="Tailwind CSS" value="95" />
              <SkillBar label="Framer Motion" value="85" />
            </div>

            {/* BACKEND */}
            <div
                 className='
                    
                       dark:border-neutral-700
                       border-neutral-300 bg-[#e5e7ebe0] dark:bg-[#131212]
                   rounded-md px-4 shadow-sm border py-8 hover:scale-101 transition-transform duration-400 cursor-pointer'
            >
              <div className="text-3xl text-center">⚙️</div>
              <p className="text-xl font-semibold text-center mb-4">Backend</p>

              <SkillBar label="Node.js" value="90" />
              <SkillBar label="Express" value="80" />
              <SkillBar label="MongoDB" value="82" />
              <SkillBar label="Python" value="40" />
            </div>

            {/* WRITING */}
            {/* <div
                 className='
                    
                       dark:border-neutral-700
                       border-neutral-300 bg-[#e5e7ebe0]
                   rounded-md px-4 shadow-sm border py-8 hover:scale-101 transition-transform duration-400 cursor-pointer'
            >
              <div className="text-3xl text-center">✍️</div>
              <p className="text-xl font-semibold text-center mb-4">Writing</p>

              <SkillBar label="Technical Documentation" value="95" />
              <SkillBar label="Blog Writing" value="90" />
            </div> */}

            {/* TOOLS */}
            <div
                 className='
                    
                       dark:border-neutral-700
                       border-neutral-300 bg-[#e5e7ebe0] dark:bg-[#131212]
                   rounded-md px-4 shadow-sm border py-8 hover:scale-101 transition-transform duration-400 cursor-pointer'
            >
              <div className="text-3xl text-center">🛠️</div>
              <p className="text-xl font-semibold text-center mb-4">Tools</p>

              <SkillBar label="Git/GitHub" value="95" />
              <SkillBar label="Figma" value="75" />
              <SkillBar label="Docker" value="45" />
            </div>
          </div>
          {/* GRID END */}
          <div className="flex items-center justify-center mt-12">
               <Card className='border border-neutral-300  bg-gray-200
                     dark:bg-[#131212] shadow-none  [#1a1a1a] dark:border-neutral-700 rounded-lg  overflow-hidden cursor-pointer px-3 py-4'>
                      <CardContent className='text-center flex flex-col items-center'>
                        <h2 className="font-semibold text-xl mb-2">Always Learning</h2>
                       <div className='flex justify-center lg:px-50'> <p className="text-neutral-600 dark:text-neutral-300">Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, tools, and methodologies to stay at the forefront of development and technical communication.</p></div>
          
                       
                      </CardContent>
                     
                  </Card>
          </div>
          
      </div>
    </div>
  )
}

export default Skills