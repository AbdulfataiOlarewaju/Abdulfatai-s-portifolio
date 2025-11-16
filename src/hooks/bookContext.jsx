import { createContext, useState } from "react";
import { toast } from "sonner";

export const bookContext = createContext();

function BookContextProvider({ children }) {
  const [openAddBookMarkDialog, setOpenAddBookMarkDialog] = useState(false);
  const [pinnedBook, setPinnedBook] = useState([])

  console.log(pinnedBook);
  

  function handelPinned(getBookInfo){
    console.log(getBookInfo);
    
    let cpyExitingBook = [...pinnedBook]

    const findIndexOfCuurentPinnedBook = cpyExitingBook.findIndex(
        (pinnedBook)=>pinnedBook.id === getBookInfo.id
    );


    console.log(findIndexOfCuurentPinnedBook, );

    const isPinnedBook = pinnedBook.some((item)=>item.id === getBookInfo.id)
   

    if(isPinnedBook){
         const updatedBook = pinnedBook.filter((item)=> item.id !== getBookInfo.id)
        setPinnedBook(updatedBook);
          console.log(updatedBook, 'removed');
          toast.message('Bookmark removed from pinned',{
            description: `${getBookInfo.title}  removed from pinned bookmarks`,
            duration: 4000,
          })
    } else {
        const updatedBook = [...pinnedBook, getBookInfo]
        setPinnedBook(updatedBook)
          console.log(updatedBook, 'added');
          toast.success('Bookmark pinned',{
            description: `${getBookInfo.title}  added to pinned bookmarks`,
            duration: 4000,
          })
    }

  
    


    console.log(cpyExitingBook);

    
    
    
  }

  return (
    <bookContext.Provider
      value={{ openAddBookMarkDialog, setOpenAddBookMarkDialog, handelPinned, pinnedBook }}
    >
      {children}
    </bookContext.Provider>
  );
}

export default BookContextProvider;
