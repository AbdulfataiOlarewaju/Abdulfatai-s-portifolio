import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetFooter } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { bookContext } from "@/hooks/bookContext";
import { selectAll } from "@/store/book-slice";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ArrowUpDown, Badge, BriefcaseBusiness, Eye, Pin, Timer } from "lucide-react";
import { Fragment, useContext, useState } from "react";
import { useSelector } from "react-redux";

// 
// import { Textarea } from "./ui/textarea";


function Home() {
  const book = useSelector(selectAll);
  // const [pinned, setPinned]= useState(false)
  // console.log(pinned);
  const {openAddBookMarkDialog, setOpenAddBookMarkDialog, handelPinned, pinnedBook} = useContext(bookContext);
  const [title, setTitle] = useState('')
  const [website, setWebsite] = useState('')
  const [desc, setDesc] = useState('')
  const [logo, setLogo] = useState('')
  const [gains, setGains] = useState([]) //17 tags to be put down
  const [view, setView] = useState('')
  const [date, setDate] = useState('')
  const [eventDate] = useState('')


  
  
  
  const renderedPosts = book.map((p) => (
    <Card
      className="w-full mx-auto bg-white shadow-md rounded-lg p-4 mb-4"
      key={p.id}
    >
      <div className="flex justify-between items-center ">
        <div className="flex justify-between gap-2">
          <img
            src={p.logo}
            alt=""
            className="w-10 h-11 border rounded-sm cursor-pointer"
          />
          <div>
            <h2 className="font-bold text-xl">{p.title}</h2>
            <p className="text-sm text-muted-foreground">{p.website}</p>
          </div>
        </div>
        <div>
          <Button className="text-gray-600 variant='ghost' size='sm' border bg-background hover:bg-muted  rounded-lg cursor-pointer px-3 py-4 text-xl">
            ⋮
          </Button>
        </div>
      </div>
      <div className="border-b"></div>
      <div className="flex flex-col gap-3 h-24 mb-5">
        <p className="text-md text-muted-foreground">{p.desc}</p>
        <div>{
          p.gains.map((gain) => (
            <span className="text-sm text-muted-foreground/90 font-semibold bg-muted px-2 py-1 rounded-md mr-2">
              {gain}
            </span>
          ))
          }</div>
      </div>
      <CardFooter className='border-t mt-2 flex justify-between w-full  text-sm p-0'>
        <div className="flex gap-3 font-medium">
          <span className="flex justify-between items-center gap-1 text-muted-foreground"><Eye className="w-4 h-4 "/>{p.view}</span>
        <span className="flex justify-between items-center gap-1 text-muted-foreground"><Timer className="w-4 h-4 "/>{p.date}</span>
        <span className="flex justify-between items-center gap-1 text-muted-foreground"><BriefcaseBusiness className='w-4 h-4'/>{p.eventDate}</span>
        </div>
        <Pin  fill={` ${pinnedBook.some(item=>item.id === p.id) ? 'gray': 'white'}`}className='w-5 h-4 text-muted-foreground cursor-pointer'  onClick={()=>{ 
          handelPinned(p)
        }}/>
          {/* <Pin fill={` ${pinned ? 'gray': 'white'}`}  className={`w-5 h-4 text-muted-foreground cursor-pointer`}onClick={()=>setPinned(!pinned)}/> */}
      </CardFooter>
      
    </Card>
  ));

  return (
    <Fragment>
      <div className="mb-5 flex justify-between w-full">
        <h2 className="font-bold text-xl">All bookmarks</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 cursor-pointer"
            >
              <ArrowUpDown />
              Sort by
            </Button>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </div>
      <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-full">
        {renderedPosts}
      </div>
       <Sheet open={openAddBookMarkDialog} onOpenChange={setOpenAddBookMarkDialog}>
        <SheetContent side="right" className="min-w-72 md:w-1/2 lg:w-1/3 px-6 py-6 overflow-auto">
          <h2 className="text-xl font-bold">Add New BookMark</h2>
          <Input placeholder="Title" className="mt-4 py-4"/>
          <Input placeholder="Website URL" className="mt-4 py-4"/>
          <Textarea placeholder="Description" className="mt-4 w-full h-32 py-2 border rounded-md resize-none"/>
          <div className="flex justify-between items-center gap-1">
            <Input placeholder='Gains'/>
            <Input placeholder='Gains'/>
            <Input placeholder='Gains'/>
            <Input placeholder='Gains'/>
          </div>
          <Input type='number' placeholder='Views' className='py-4'/>
          <div className="flex flex-col space-y-1">
              <span className="text-sm">Date</span>
          <Input type='date'/>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-sm">Event date</span>
          <Input type='date'/>
          </div>
          <Button className='bg-green-950 hover:bg-green-900 text-white cursor-pointer text-xl'>Add</Button>
        </SheetContent>
       
      </Sheet>
     
    </Fragment>
  );
}

export default Home;
