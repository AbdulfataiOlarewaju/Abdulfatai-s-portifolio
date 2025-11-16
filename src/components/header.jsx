import { Bookmark, Hamburger, Menu, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import profile from "../assets/user5.jpg";
import { useContext } from "react";
import { bookContext } from "@/hooks/bookContext";


function Header({ setOpen}) {

  const {openAddBookMarkDialog, setOpenAddBookMarkDialog} = useContext(bookContext);
  return (
          <header className="flex justify-between items-center px-5 py-3 bg-background border-b">
      <div className="flex justify-between items-center gap-2">
        <div
          className="bg-background border p-3 rounded-md lg:hidden cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <Menu size="20" />
        </div>

        <div className="relative w-[180px] md:w-[300px]">
          <Input className="pl-10 py-5 lg:py-3" placeholder='Search by titile...'/>
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="text-muted-foreground" size='18'/>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center gap-2">
        <Button className="bg-green-950 hover:bg-green-900 text-white cursor-pointer rounded-lg text-2xl md:py-4 py-5 inline-flex md:hidden">
          +
        </Button>
        <Button className="bg-green-950 hover:bg-green-900 text-white cursor-pointer hidden md:inline-block h-10 rounded-lg text-lg py-1" onClick={() => setOpenAddBookMarkDialog(true)}>
          + AddBookmark
        </Button>

        <img
          src={profile}
          alt=""
          className="w-10 h-10 rounded-full cursor-pointer"
        />
      </div>
    </header>

    
    
    
  );
}

export default Header;
