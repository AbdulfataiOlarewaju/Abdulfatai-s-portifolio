import { Fragment, useContext, useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "@/hooks/global";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import useDarkMode from "@/hooks/useDarkMode";

function MenuItem() {
  const { openSidebar, setOpenSidebar } = useContext(GlobalContext);

  function toggleMenu() {
    setOpenSidebar(!openSidebar);
  }
  console.log(openSidebar);
  return (
    <ul className="md:hidden flex flex-col gap-8 font-medium text--md px-4 mt-10">
      <NavLink to="/" onClick={() => setOpenSidebar(!openSidebar)}>
        <li className="cursor-pointer transition">Home</li>
      </NavLink>

      <NavLink to="/about" onClick={() => setOpenSidebar(!openSidebar)}>
        <li className="cursor-pointer transition">About</li>
      </NavLink>
      <NavLink to="/services">
        <li className="cursor-pointer transition">Services</li>
      </NavLink>

      <NavLink to="projects" onClick={() => setOpenSidebar(!openSidebar)}>
        <li className="cursor-pointer transition">Projects</li>
      </NavLink>

      <NavLink to="skills" onClick={() => setOpenSidebar(!openSidebar)}>
        <li className="cursor-pointer transition">Skills</li>
      </NavLink>

      {/* <NavLink to="testimonial">
            <li className="cursor-pointer transition">Testimonials</li>
            
          </NavLink> */}

      <NavLink to="contact" onClick={() => setOpenSidebar(!openSidebar)}>
        <li className="cursor-pointer transition">Contact</li>
      </NavLink>
    </ul>
  );
}

function Sidebar() {
  const { openSidebar, setOpenSidebar } = useContext(GlobalContext);
  const [theme, toggleTheme] = useDarkMode();

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
            <div className="flex flex-col h-full">
              <div
                className="flex-1 overflow-y-auto px-2"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                <SheetHeader className="border-b-2 mt-20">
                  <SheetTitle className="flex items-center justify-baseline gap-2 cursor-pointer mt-2 font-extrabold text-2xl">
                    SA
                  </SheetTitle>
                </SheetHeader>
                {<MenuItem />}
              </div>
              <div className="border-t pt-4 pb-2">
                <Button className="w-full cursor-pointer px-2 rounded-sm py-3 flex gap-4 bg-transparent hover:dark:bg-neutral-800 hover:bg-neutral-50 text-black dark:text-white">
                  <p onClick={toggleTheme}>
                    {theme === "dark" ? <MoonIcon size={17} /> : <SunIcon size={30} />}
                  </p>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </Fragment>
  );
}

export default Sidebar;
