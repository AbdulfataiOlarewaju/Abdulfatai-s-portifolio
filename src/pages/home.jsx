import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetFooter } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { bookContext } from "@/hooks/bookContext";
import useDarkMode from "@/hooks/useDarkMode";
import { addBook, selectAll, updateBookmark } from "@/store/book-slice";
import { DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { nanoid } from "@reduxjs/toolkit";
import { ArrowUpDown, Badge, BriefcaseBusiness, Eye, Pin, Timer } from "lucide-react";
import { Fragment, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "@/components/ui/checkbox"; 
import { toast } from "sonner";
import LogoImageUpload from "@/components/image-upload.";
import { actionType, sortOptions } from "@/components/config";



function Home() {
  const book = useSelector(selectAll);
  const [theme, toggleTheme] = useDarkMode(); //
  // const [pinned, setPinned]= useState(false)
  const dispatch = useDispatch()
  // console.log(pinned);
  const {openAddBookMarkDialog, setOpenAddBookMarkDialog, handelPinned, pinnedBook, searchTerm, handleAddToArchieve, selectedTags} = useContext(bookContext);
  const [sortBy, setSortBy] = useState(null);
  const [title, setTitle] = useState('')
  const [website, setWebsite] = useState('')
  const [desc, setDesc] = useState('')
  const [logo, setLogo] = useState('')
  const [selectedGains, setSelectedGains] = useState([]);
  const [view, setView] = useState('')
  const [date, setDate] = useState('')
  const [eventDate, setEventDate] = useState('')
  const gainOptions = ['Practice', 'Learning', 'Community', 'Reference', 'HTML', 'CSS', 'Javascript', 'Framework', 'Tools', 'AI', 'Performance', 'Tips', 'Blog', 'Articles', 'Tutorial', 'Projects', 'Certifications', 'Git'];

  // const normalizedSearch = (searchTerm || "").trim().toLowerCase();
  // const normalizedSearch = (searchTerm || "").trim().toLowerCase();
  // const filterItems = normalizedSearch?  book.filter((b) => !b.archived && (b.title || "").toLowerCase().includes(normalizedSearch)) : book.filter((b) => !b.archived);
  //  const filterItems = normalizedSearch? book.filter(b => (b.title || "").toLowerCase().includes(normalizedSearch)) : book;
  
const normalizedSearch = (searchTerm || "").trim().toLowerCase();

const filterItems = book.filter((b) => {
  // exclude archived
  if (b.archived) return false;
  // search filter
  if (normalizedSearch && !((b.title || "").toLowerCase().includes(normalizedSearch))) return false;
  // tag filter: if any tags selected, require at least one match in b.gains
  if (selectedTags && selectedTags.length > 0) {
    const gains = b.gains || [];
    if (!gains.some((g) => selectedTags.includes(g))) return false;
  }
  return true;
});

  const [currentEditedId, setCurrentEditedId] = useState(null)
  

   // helper: parse date strings like "25 Sep" -> timestamp, treat "Never" as epoch 0
   function parseDateToTime(d) {
    if (!d) return 0;
    if (String(d).toLowerCase() === "never") return 0;
    try {
      // assume format like "25 Sep" or "16 Aug" -> append current year
      const t = new Date(`${d} ${new Date()}`).getTime();
    return Number.isFinite(t) ? t : 0;
    } catch {
      return 0;
    }
  }

  // apply sorting after filtering
  const sortedItems = (() => {
    const arr = [...filterItems];
    switch (sortBy) {
      case "mostvisited":
        return arr.sort((a, b) => Number(b.view || 0) - Number(a.view || 0));
      case "recentlyvisited":
        return arr.sort((a, b) => parseDateToTime(b.date) - parseDateToTime(a.date));
      case "recentlyadded":
        // newest items assumed to be at the end of the array (push on add)
        return arr.reverse();
      default:
        return arr;
    }
  })();

  const onTitleChange = (e) => setTitle(e.target.value);
  const onWebsiteChange = (e) => setWebsite(e.target.value);
  const onDecChange = (e) => setDesc(e.target.value);
  const onViewChange = (e) => setView(e.target.value);
  const onDateChange = (e) => setDate(e.target.value);
  const onEventChange = (e) => setEventDate(e.target.value);
  

  function onAddNewBookMark(){
    if(!title || !website || !desc || !view || !date || !eventDate){
      toast.error("Please fill in all required fields.");
      return;
    }
    const payload = {
    title,
    website,
    desc,
    logo,
    gains: selectedGains,
    view,
    date: new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: 'short' }),
    eventDate
  };
  if(currentEditedId){
    dispatch(updateBookmark({
      bookmarkId: currentEditedId,
      updates : payload
    }))
  } else {
   dispatch(
      addBook({
        id : nanoid(),
        ...payload
      })
      
    )
  }
   
    setSelectedGains([]);
    setTitle('');
    setWebsite('');
    setDesc('');
    setLogo('');
    setView('');
    setDate('');
    setEventDate('');
    setOpenAddBookMarkDialog(false);
  }
  
  function handleMode() {
    toggleTheme();
}
  
  // const renderedPosts = filterItems.map((p) => (
    const renderedPosts = sortedItems.map((p) => (
    <Card
      className="w-full mx-auto bg-white shadow-md rounded-lg p-4 mb-4 dark:bg-[#0d261c]"
      key={p.id}
    >
      <div className="flex justify-between items-center ">
        <div className="flex justify-between gap-2">
          <img
            src={typeof p.logo === 'string' ? p.logo : URL.createObjectURL(p.logo[0] || p.logo)}
            alt=""
            className="w-10 h-11 border rounded-sm cursor-pointer"
          />
          <div>
            <h2 className="font-bold text-xl">{p.title}</h2>
            <a href={p.link} className="text-sm text-muted-foreground">{p.website}</a>
          </div>
        </div>
        
        <div>
          <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button className="text-gray-600` variant='ghost' dark:border-0 size='sm' border bg-background dark:bg-[#0d261c] hover:bg-muted  rounded-lg cursor-pointer px-3 py-4 text-xl">
      ⋮
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end"  className="w-[160px] h-[80px] bg-white dark:bg-[#0d261c]">
    <DropdownMenuItem
      onSelect={() => {
        setOpenAddBookMarkDialog(true);
        setCurrentEditedId(p.id);
        setSelectedGains(p.gains || []);
        setTitle(p.title || "");
        setWebsite(p.website || "");
        setDesc(p.desc || "");
        setLogo(p.logo || "");
        setView(p.view ?? "");
        setDate(p.date ?? "");
        setEventDate(p.eventDate ?? "");
      }}
      className="px-2 cursor-pointer hover:bg-muted"
    >
      Edit
    </DropdownMenuItem>

    <DropdownMenuItem
      onSelect={() => {
        handleAddToArchieve(p);
        dispatch(updateBookmark({
          bookmarkId: p.id,
          updates: { archived: true }
        }));
      }}
      className="px-2 cursor-pointer hover:bg-muted"
    >
      Archive
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
          
        </div>

      </div>
      <div className="border-b"></div>
      <div className="flex flex-col gap-3 h-24 mb-5">
        <p className="text-md text-muted-foreground wrap-break-word">{p.desc}</p>
        <div>{
          p.gains.map((gain) => (
            <span className="text-sm text-muted-foreground/90 font-semibold bg-muted px-2 py-1 rounded-md mr-2">
              {gain}
            </span>
          ))
          }</div>
      </div>
      <CardFooter className='border-t mt-6 flex justify-between w-full  text-sm p-0'>
        <div className="flex gap-3 font-medium">
          <span className="flex justify-between items-center gap-1 text-muted-foreground"><Eye className="w-4 h-4 "/>{p.view}</span>
        <span className="flex justify-between items-center gap-1 text-muted-foreground"><Timer className="w-4 h-4 "/>{p.date}</span>
        <span className="flex justify-between items-center gap-1 text-muted-foreground"><BriefcaseBusiness className='w-4 h-4'/>{p.eventDate}</span>
        </div>
        <Pin  fill={` ${pinnedBook.some(item=>item.id === p.id) ? 'gray': 'white'}`}className='w-5 h-4 text-muted-foreground cursor-pointer'  onClick={()=>{ 
          handelPinned(p)
        }}/>
      </CardFooter>
      
    </Card>
  ));

  return (
    <Fragment>
      <div className="mb-5 flex justify-between w-full ">
        <h2 className="font-bold text-xl">All bookmarks</h2>
        <DropdownMenu>
                   <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 cursor-pointer"
            >
              <ArrowUpDown />
              {sortBy ? sortOptions.find((s) => s.id === sortBy)?.label : "Sort by"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px] bg-white dark:bg-[#081913]">
            <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
              {sortOptions.map((opt) => (
                <DropdownMenuRadioItem key={opt.id} value={opt.id} className="px-2 py-1 cursor-pointer">
                  {opt.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-full ">
        {renderedPosts}
      </div>
       <Sheet open={openAddBookMarkDialog} onOpenChange={()=>{
        setOpenAddBookMarkDialog(false)
        setCurrentEditedId(null)
         setSelectedGains([]);
                setTitle('');
                setWebsite('');
                setDesc('');
                setLogo('');
                setView('');
                setDate('');
                setEventDate('');
       }}>
        <SheetContent side="right" className="min-w-72 md:w-1/2 lg:w-1/3 px-6 py-6 overflow-auto dark:bg-[#081913]">
          <h2 className="text-xl font-bold">{currentEditedId !==null ? 'Edit Bookmark' : 'Add New BookMark'}</h2>
          <LogoImageUpload  logo={logo} setLogo={setLogo} isEditmode={currentEditedId !==null}/>
          <Input placeholder="Title" className="mt-4 py-4" value={title} onChange={onTitleChange}/>              
          <Input placeholder="Website URL" className="mt-4 py-4" value={website} onChange={onWebsiteChange}/>
          <Textarea placeholder="Description" className="mt-4 w-full h-32 py-2 border rounded-md" value={desc} onChange={onDecChange}/>
         <div className="flex flex-col space-y-2">
  <span className="text-sm">Gains (select multiple)</span>
  <div className="grid grid-cols-2 gap-2">
    {gainOptions.map((option) => (
      <div key={option} className="flex items-center space-x-2">
        <Checkbox
          id={option}
          checked={selectedGains.includes(option)}
          onCheckedChange={(checked) => {
            if (checked) {
              setSelectedGains([...selectedGains, option]);
            } else {
              setSelectedGains(selectedGains.filter((gain) => gain !== option));
            }
          }}
        />
        <label htmlFor={option} className="text-sm">{option}</label>
      </div>
    ))}
  </div>
</div>
          <Input type='number' placeholder='Views' className='py-4' value={view} onChange={onViewChange}/>
          <div className="flex flex-col space-y-1">
              <span className="text-sm mb-2">Date</span>
          <Input type='date' value={date} onChange={onDateChange}/>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-sm mb-2">Event date</span>
          <Input type='date' value={eventDate} onChange={onEventChange}/>
          </div>
          <Button className='hover:bg-[#0d261c] dark:bg-[#0d261c] bg-[#0d261c] text-white cursor-pointer text-xl' onClick={onAddNewBookMark} type='button'>{currentEditedId !==null ? 'Edit' : 'Add'}</Button>
        </SheetContent>
       
      </Sheet>
     
    </Fragment>
  );
}

export default Home;
