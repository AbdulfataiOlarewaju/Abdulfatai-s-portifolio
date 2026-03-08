
import { Fragment, useContext, useState, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "@/hooks/global";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import useDarkMode from "@/hooks/useDarkMode";
import { motion, AnimatePresence } from "framer-motion";

function MenuItem() {
  const { openSidebar, setOpenSidebar } = useContext(GlobalContext);

  function toggleMenu() {
    setOpenSidebar(!openSidebar);
  }

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "projects", label: "Projects" },
    { to: "skills", label: "Skills" },
    { to: "contact", label: "Contact" }
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + i * 0.05,
        duration: 0.3
      }
    }),
    exit: { opacity: 0, x: -20 }
  };

  console.log(openSidebar);
  return (
    <ul className="md:hidden flex flex-col gap-8 font-medium text-md px-4 mt-10">
      <AnimatePresence>
        {menuItems.map((item, index) => (
          <motion.li
            key={item.to}
            custom={index}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <NavLink 
              to={item.to} 
              onClick={() => setOpenSidebar(!openSidebar)}
            >
              {({ isActive }) => (
                 <motion.span 
                whileHover={{ x: 10 }}
                // className="cursor-pointer transition"
                className={`${isActive ? "text-black dark:text-white font-semibold transition" : "font-normal transition"}`}
              >
                {item.label}
              </motion.span>
              )}
             
            </NavLink>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}

function Sidebar() {
  const { openSidebar, setOpenSidebar } = useContext(GlobalContext);
  const [theme, toggleTheme] = useDarkMode();

  useEffect(() => {
    function handleResize() {
      // Tailwind `md` breakpoint is 768px — close mobile sheet on larger screens
      if (window.innerWidth >= 768) {
        setOpenSidebar(false);
      }
    }

    // run once to sync state on mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setOpenSidebar]);

  const sidebarVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      x: "-100%", 
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <Fragment>
      <div className="lg:hidden">
        <Sheet
          open={openSidebar}
          onOpenChange={setOpenSidebar}
          className="bg-[#e5e7eb]"
        >
          <SheetContent
            side="left"
            className="w-72 px-2 z-50  h-[100dvh] dark:border-b dark:border-neutral-700 border-b dark:bg-black bg-[#e5e7eb] dark:text-white"
          >
            <motion.div 
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col h-full"
            >
              <div
                className="flex-1 overflow-y-auto px-2"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                <SheetHeader className="border-b-2 mt-8">
                  <motion.div
                    variants={itemVariants}
                  >
                    <SheetTitle className="flex items-center justify-baseline gap-2 cursor-pointer font-extrabold text-2xl">
                      SA
                    </SheetTitle>
                  </motion.div>
                </SheetHeader>
                {<MenuItem openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>}
              </div>
              <motion.div 
                variants={itemVariants}
                className="border-t pt-4 pb-2"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className="w-full cursor-pointer px-2 rounded-sm py-3 flex gap-4 bg-transparent hover:dark:bg-neutral-800 hover:bg-neutral-50 text-black dark:text-white"
                  >
                    <p onClick={toggleTheme}>
                      {theme === "dark" ? <MoonIcon size={17} /> : <SunIcon size={30} />}
                    </p>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </SheetContent>
        </Sheet>
      </div>
    </Fragment>
  );
}

export default Sidebar;

