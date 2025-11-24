import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { bookContext } from "@/hooks/bookContext";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { BriefcaseBusiness, Eye, Timer } from "lucide-react";
import { Fragment, useContext } from "react";




function Archieves() {
    const {archieveBookMark, handleUnArchieveBookMark} = useContext(bookContext)
    console.log(archieveBookMark);
    


    const renderArchievedBookMarks = archieveBookMark.map((book)=>(
        <Card className="w-full mx-auto bg-white shadow-md rounded-lg p-4 mb-4 dark:bg-[#0d261c]"
      key={book.id}>
        <div className="flex justify-between items-center">
             <div className="flex justify-between gap-2">
          <img
            src={typeof book.logo === 'string' ? book.logo : URL.createObjectURL(book.logo[0] || book.logo)}
            alt=""
            className="w-10 h-11 border rounded-sm cursor-pointer"
          />
          <div>
            <h2 className="font-bold text-xl">{book.title}</h2>
            <a href={book.link} className="text-sm text-muted-foreground">{book.website}</a>
          </div>
        </div>

        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="text-gray-600` variant='ghost' dark:border-0 size='sm' border bg-background dark:bg-[#0d261c] hover:bg-muted  rounded-lg cursor-pointer px-3 py-4 text-xl">
            ⋮
          </Button>
            </DropdownMenuTrigger>
             <DropdownMenuContent align="end" className="w-[150px] bg-white dark:bg-[#0d261c]">
          
            {/* <div className="px-2 py-1 cursor-pointer hover:bg-muted" onClick={()=>{
              handleUnArchieveBookMark(book, true)
            }}>
              Unarchive
            </div> */}
            <DropdownMenuItem className="px-2 py-1 cursor-pointer hover:bg-muted" onSelect={()=>{
                handleUnArchieveBookMark(book, true)
            }}>
Unarchive
            </DropdownMenuItem>
          </DropdownMenuContent>
          </DropdownMenu>
          
        </div>
        </div>

        <div className="border-b"></div>
      <div className="flex flex-col gap-3 h-24 mb-5">
        <p className="text-md text-muted-foreground wrap-break-word">{book.desc}</p>
        <div>{
          book.gains.map((gain) => (
            <span className="text-sm text-muted-foreground/90 font-semibold bg-muted px-2 py-1 rounded-md mr-2">
              {gain}
            </span>
          ))
          }</div>
      </div>
      <CardFooter className='border-t mt-2 flex justify-between w-full  text-sm p-0'>
        <div className="flex gap-3 font-medium">
          <span className="flex justify-between items-center gap-1 text-muted-foreground"><Eye className="w-4 h-4 "/>{book.view}</span>
        <span className="flex justify-between items-center gap-1 text-muted-foreground"><Timer className="w-4 h-4 "/>{book.date}</span>
        <span className="flex justify-between items-center gap-1 text-muted-foreground"><BriefcaseBusiness className='w-4 h-4'/>{book.eventDate}</span>
        </div>

        </CardFooter>

        </Card>
    ))

    return ( 
        <Fragment>
            <div className="mb-5 flex justify-between w-full">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-full">
                   {
                    renderArchievedBookMarks
                   }
                </div>
            </div>
        </Fragment>
     );
}

export default Archieves;