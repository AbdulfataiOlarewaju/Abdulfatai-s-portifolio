import { Fragment, useContext } from "react";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle } from "./ui/sheet";
import { ArchiveIcon, Bookmark, HomeIcon, MoonIcon, SunIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { tagsOptions } from "./config";
import { Label } from "@radix-ui/react-label";
import { Checkbox } from "./ui/checkbox";
import useDarkMode from "@/hooks/useDarkMode";
import { bookContext } from "@/hooks/bookContext";
// import { Checkbox } from "@radix-ui/react-checkbox";

function Sidebar({ open, setOpen }) {
  const sidebarMenuItems = [
    {
      id: "home",
      label: "Home",
      path: "/home",
      icon: <HomeIcon />,
    },
    {
      id: "archives",
      label: "Archieved",
      path: "/archived",
      icon: <ArchiveIcon size="18" />,
    },
  ];

  const [theme, toggleTheme] = useDarkMode();
  const {selectedTags, toggleTag} = useContext(bookContext)


  function menuItems({ setOpen }) {
    const navigate = useNavigate();
    return (
      <nav className="mt-4 flex flex-col gap-2">
        {sidebarMenuItems.map((menuItem) => (
          <div
            key={menuItem.id}
            onClick={() => {
              navigate(menuItem.path);
              setOpen(false);
            }}
            className="flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer text-muted-foreground hover:bg-muted hover:text-foreground text-md font-medium"
          >
            {menuItem.icon}
            <span>{menuItem.label}</span>
          </div>
        ))}
      </nav>
    );
  }

  return (
    <Fragment>
      <div className="lg:hidden ">
         <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="left" className="w-72 px-2 dark:bg-[#081913] h-[100dvh]">
            <div className="flex flex-col h-full">
              <SheetHeader className="border-b">
                <SheetTitle className="flex items-center justify-baseline gap-2 cursor-pointer mt-2">
                  <Button className="bg-green-950 p-1 rounded-lg hover:bg-green-900 text-white cursor-pointer">
                    <Bookmark size={25} className="" />
                  </Button>
                  <h2 className="font-extrabold text-lg">Bookmark Manager</h2>
                </SheetTitle>
              </SheetHeader>
              <div className="flex-1 overflow-y-auto px-2" style={{ WebkitOverflowScrolling: 'touch'}}>
                 {menuItems({ setOpen })}
              <div className="p-4 space-y-4">
                {Object.keys(tagsOptions).map((tag) => (
                 <Fragment key={tag}>
                    <div>
                      <h3 className="text-sm font-medium text-gray-600">
                        {tag}
                      </h3>
                      <div className="grid gap-2 mt-2">
                        {tagsOptions[tag].map((opion) => (
                          <div className="flex justify-between" key={opion.label}>
                            <Label className="flex items-center text-muted-foreground gap-2 font-normal overflow-hidden">
                              <Checkbox
                                className="cursor-pointer"
                                checked={selectedTags.includes(opion.label)}
                                onCheckedChange={() => toggleTag(opion.label)}
                              />
                              <span className="truncate">{opion.label}</span>
                            </Label>
                            <span className="rounded-full bg-muted/80 px-2 text-sm">
                              {opion.number}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Fragment>
                ))}
                <button className="cursor-pointer ml-2 mt-4" onClick={toggleTheme}>
              {theme ? <MoonIcon size={17} /> : <SunIcon size={30} />}
            </button>
              </div>
              
              </div>
               
            
          
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <aside className="hidden w-64 flex-col border-r bg-background px-2 mt-2 lg:flex dark:bg-[#081913] dark:text-white">
        <div
          onClick={() => navigate("/admin/dashboard")}
          className="flex items-center justify-baseline gap-2 cursor-pointer mt-2"
        >
          <Button className="bg-[#0d261c] hover:bg-[#0d261c] dark:bg-[#0d261c] p-1 rounded-lg text-white cursor-pointer">
            <Bookmark size={25} className="" />
          </Button>
          <h2 className="font-extrabold text-lg">Bookmark Manager</h2>
        </div>
        {menuItems({ setOpen: () => {} })}
        <div className="p-4 space-y-4">
          {Object.keys(tagsOptions).map((tag) => (
            <Fragment key={tag}>
              <div>
                <h3 className="text-sm font-medium text-gray-600">{tag}</h3>
                <div className="grid gap-5 mt-2">
                  {tagsOptions[tag].map((opion) => (
                    <div className="flex justify-between">
                      <Label className="flex items-center text-muted-foreground gap-2 font-normal overflow-hidden">
                       <Checkbox
                                className="cursor-pointer"
                                checked={selectedTags.includes(opion.label)}
                                onCheckedChange={() => toggleTag(opion.label)}
                              />
                        <span className="truncate">{opion.label}</span>
                      </Label>

                      <span className="rounded-full bg-muted/80 px-2 text-sm">
                        {opion.number}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Fragment>
          ))}
          
          
        </div>
            <SheetFooter>
      <div className="mt-auto w-full flex justify-end p-4">
        <button className="cursor-pointer" onClick={toggleTheme}>
          {theme ? <MoonIcon size={17} /> : <SunIcon size={30} />} 
        </button>
      </div>
    </SheetFooter>
      </aside>
    </Fragment>
  );
}

export default Sidebar;
