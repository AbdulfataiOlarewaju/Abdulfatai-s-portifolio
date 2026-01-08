import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, MoonIcon, SunIcon } from "lucide-react";
import useDarkMode from "@/hooks/useDarkMode";
import { NavLink } from "react-router-dom";

function Header() {
  const [theme, toggleTheme] = useDarkMode();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <nav
        className={`mx-auto flex md:gap-12 justify-between md:py-5 py-4 px-4 md:px-6 z-50 backdrop-blur-md
       ${
         scrolled
           ? "dark:border-b dark:border-neutral-700 border-b dark:bg-black bg-[#efeeee6c] dark:text-white"
           : " dark:bg-transparent "
       } border-neutral-300 bg-[#e5e7ebe0]`}
      >
        {/* left-side logo */}
        <h1 className="text-xl font-extrabold text-black dark:text-white">
          SA
        </h1>
        {/* right-side */}
        <div className="flex gap-8 m:px-5 px-0 font-medium items-center">
          <ul className="hidden md:flex gap-8 font-medium text-sm items-center">
            <NavLink to="/">
              <li className="cursor-pointer transition">Home</li>
              <hr className="border-none outline-non bg-black dark:bg-white w-full m-auto h-0.5 hidden transition-all duration-500 ease-in-out" />
            </NavLink>

            <NavLink to="/about">
              <li className="cursor-pointer transition">About</li>
              <hr className="border-none outline-non bg-black dark:bg-white w-full m-auto h-0.5 hidden transition-all duration-500 ease-in-out" />
            </NavLink>
             <NavLink to="/services">
              <li className="cursor-pointer transition">Services</li>
              <hr className="border-none outline-non bg-black dark:bg-white w-full m-auto h-0.5 hidden transition-all duration-500 ease-in-out" />
            </NavLink>

            <NavLink to="projects">
              <li className="cursor-pointer transition">Projects</li>
              <hr className="border-none outline-non bg-black dark:bg-white w-full m-auto h-0.5 hidden transition-all duration-500 ease-in-out" />
            </NavLink>

            <NavLink to="skills">
              <li className="cursor-pointer transition">Skills</li>
              <hr className="border-none outline-non bg-black dark:bg-white w-full m-auto h-0.5 hidden transition-all duration-500 ease-in-out" />
            </NavLink>

            {/* <NavLink to="testimonial">
              <li className="cursor-pointer transition">Testimonials</li>
              <hr className="border-none outline-non bg-black dark:bg-white w-full m-auto h-0.5 hidden transition-all duration-500 ease-in-out" />
            </NavLink> */}

            <NavLink to="contact">
              <li className="cursor-pointer transition">Contact</li>
              <hr className="border-none outline-non bg-black dark:bg-white w-full m-auto h-0.5 hidden transition-all duration-500 ease-in-out" />
            </NavLink>
          </ul>

          {/* <Sun className=''/> */}
          <Button
            
            className="cursor-pointer px-0 rounded-sm py-3 flex gap-4 bg-transparent hover:dark:bg-neutral-800 hover:bg-neutral-50 text-black dark:text-white"
          >
            <p onClick={toggleTheme}>
              {theme === "dark" ? (
                <MoonIcon size={17} />
              ) : (
                <SunIcon size={30} />
              )}
            </p>
            <Menu size={18} className="md:hidden" onClick={() => {}} />
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
