
import { useState, useEffect, useContext } from "react";
import { Button } from "./ui/button";
import { Menu, MoonIcon, SunIcon } from "lucide-react";
import useDarkMode from "@/hooks/useDarkMode";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import { GlobalContext } from "@/hooks/global";
import Home from "@/pages/home";
import About from "@/pages/about";
import Projects from "@/pages/projects";
import Services from "@/pages/service";
import Testimonial from "@/pages/testimonials";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found-page";
import Skills from "@/pages/skills";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [theme, toggleTheme] = useDarkMode();
  const [scrolled, setScrolled] = useState(false);
  const { openSidebar, setOpenSidebar } = useContext(GlobalContext);
  const location = useLocation();

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

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "projects", label: "Projects" },
    { to: "skills", label: "Skills" },
    { to: "contact", label: "Contact" }
  ];

  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <nav
        className={`mx-auto flex md:gap-12 justify-between md:py-5 py-4 px-4 md:px-6 z-50 backdrop-blur-md
       ${
         scrolled
           ? "dark:border-b dark:border-neutral-700 border-b dark:bg-black bg-[#efeeee6c] dark:text-white"
           : " dark:bg-transparent "
       } border-neutral-300 bg-[#e5e7ebe0]`}
      >
        {/* left-side logo */}
        <motion.h1 
          whileHover={{ scale: 1.1 }}
          className="text-xl font-extrabold text-black dark:text-white cursor-pointer"
        >
          SA
        </motion.h1>
        {/* right-side */}
        <div className="flex gap-8 m:px-5 px-0 font-medium items-center">
          <ul className="hidden md:flex gap-8 font-medium text-sm items-center">
            {navItems.map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <NavLink to={item.to}>
                  {({ isActive }) => (
                    <motion.li 
                      whileHover={{ y: -2 }}
                      className={`cursor-pointer transition relative ${
                        isActive ? "text-black dark:text-white font-semibold" : ""
                      }`}
                    >
                      {item.label}
                      <motion.hr 
                        animate={{ 
                          width: isActive ? "100%" : "0%",
                          opacity: isActive ? 1 : 0
                        }}
                        className="border-none outline-none bg-black dark:bg-white w-full m-auto h-0.5 mt-1"
                      />
                    </motion.li>
                  )}
                </NavLink>
              </motion.div>
            ))}
          </ul>
          {/*  */}
          <div className="flex justify-between items-center gap-1">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="cursor-pointer px-2 rounded-sm py-3 md:flex hidden gap-4 bg-transparent hover:dark:bg-neutral-800 hover:bg-neutral-50 text-black dark:text-white">
                <p onClick={toggleTheme}>
                  {theme === "dark" ? (
                    <MoonIcon size={17} />
                  ) : (
                    <SunIcon size={30} />
                  )}
                </p>
              </Button>
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => setOpenSidebar(!openSidebar)}
                className="cursor-pointer md:hidden px-0 rounded-sm py-3 flex gap-4 bg-transparent hover:dark:bg-neutral-800 hover:bg-neutral-50 text-black dark:text-white"
              >
                <Menu size={18} className="md:hidden" />
              </Button>
            </motion.div>
          </div>
        </div>
      </nav>
     
    </motion.div>
  );
}

export default Header;

