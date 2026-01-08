import React, { useState, useEffect } from "react";
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

function About() {
  const [theme] = useDarkMode();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="min-h-screen lg:py-44 py-28 md:py-44 px-5 
           bg-gray-200
           dark:bg-[#000000a2]  [#1a1a1a] 
           "
    >
      <div className="container mx-auto flex flex-col justify-center">
        <h2 className="text-3xl lg:text-4xl  font-bold mb-4 text-center">
          About Sakariyau Abdulfatai
        </h2>
        <div className="h-1 w-20 bg-gray-900 dark:bg-[#eeeeee] mx-auto rounded-full mb-15" />
        <div className="container lg:px-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* left side of the about me */}
          <div className="px-2 text-left">
            <h1 className="lg:text-2xl text-xl font-medium mb-6">
              Full Stack Web Developer & Software Engineer in Ilorin, Nigeria
            </h1>
            <div className="mx-auto text-neutral-700 dark:text-neutral-400">
              <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
                I’m <span className="font-bold">Sakariyau Abdulfatai</span>, a
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
                for a seamless experience. Whether it’s designing a modern UI,
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
                When I’m not coding, I’m
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
          </div>
          {/* Right side of the about me */}
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div
                className="border-neutral-300 bg-gray-200
           dark:bg-[#000000a2]  [#1a1a1a] dark:border-neutral-700 rounded-md px-4  border py-8 hover:scale-105 transition-transform duration-400 cursor-pointer"
              >
                <Laptop2 className="w-8 h-8 mb-3" />
                <p className="text-md font-semibold mb-3">
                  Full-Stack Development
                </p>
                <p className="text-sm">
                  Building responsive and interactive websites using modern
                  tools
                </p>
              </div>

              <div
                className="border-neutral-300 bg-gray-200
           dark:bg-[#000000a2]  [#1a1a1a] dark:border-neutral-700 rounded-md px-4  border py-8 hover:scale-105 transition-transform duration-400 cursor-pointer"
              >
                <Brain className="w-8 h-8 mb-3" />
                <p className="text-md font-semibold mb-3">Problem Solving</p>
                <p className="text-sm">
                  Tackling challenges creatively and turning ideas into working
                  solutions.
                </p>
              </div>

              <div
                className="border-neutral-300 bg-gray-200
           dark:bg-[#000000a2]  [#1a1a1a] dark:border-neutral-700 rounded-md px-4  border py-8 hover:scale-105 transition-transform duration-400 cursor-pointer"
              >
                <Palette className="w-8 h-8 mb-3" />
                <p className="text-md font-semibold mb-3">
                  User Interface Design
                </p>
                <p className="text-sm">
                  {" "}
                  Designing interfaces that are clean, intuitive, and visually
                  engaging.
                </p>
              </div>

              <div
                className="border-neutral-300 bg-gray-200
           dark:bg-[#000000a2]  [#1a1a1a] dark:border-neutral-700 rounded-md px-4  border py-8 hover:scale-105 transition-transform duration-400 cursor-pointer"
              >
                <Code2 className="w-8 h-8 mb-3" />
                <p className="text-md font-semibold mb-3">Clean Code</p>
                <p className="text-sm">
                  I believe in writing maintainable, scalable code that tells a
                  story
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
