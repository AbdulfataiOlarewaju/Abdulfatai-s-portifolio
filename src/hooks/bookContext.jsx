import { updateBookmark } from "@/store/book-slice";
import { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

export const bookContext = createContext();

function BookContextProvider({ children }) {
  const [openAddBookMarkDialog, setOpenAddBookMarkDialog] = useState(false);
  const [pinnedBook, setPinnedBook] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [archieveBookMark, setArchieveBookMark] = useState([])
  const [selectedTags, setSelectedTags] = useState([])

  const dispatch = useDispatch()
  
  console.log(pinnedBook);
  
 
function handleAddToArchieve(getBookInfo){
  console.log(getBookInfo);

  let cpyExitingBook = [...archieveBookMark]

  const findIndexOfCuurentArchievedBook = cpyExitingBook.findIndex((archieveBookMark)=>archieveBookMark.id === getBookInfo.id)

  console.log(findIndexOfCuurentArchievedBook);
  
  if(findIndexOfCuurentArchievedBook === -1){
    cpyExitingBook.push({
      ...getBookInfo
      
    });
    setArchieveBookMark(cpyExitingBook);
    localStorage.setItem('ArchievedBookMark', JSON.stringify(cpyExitingBook))
     dispatch(updateBookmark({
      bookmarkId: getBookInfo.id,
      updates: { archived: true }
    }));
    toast.success(`${getBookInfo.title} archived`, { duration: 4000 });
    //  toast.message('Bookmark removed from pinned',{
    //         description: `${getBookInfo.title}  archivieved successfully`,
    //         duration: 4000,
    //       })
  } else {
    console.log(`it's comming here`);
    
  }
  console.log(cpyExitingBook);
  

  
  console.log(archieveBookMark);
  
  
}

function handleUnArchieveBookMark(getBookInfo){
     let cpyExitingBook = [...archieveBookMark]

  const findIndexOfCuurentArchievedBook = cpyExitingBook.findIndex((archieveBookMark)=>archieveBookMark.id === getBookInfo.id)

  console.log(findIndexOfCuurentArchievedBook);
  cpyExitingBook.splice(findIndexOfCuurentArchievedBook, 1)
  setArchieveBookMark(cpyExitingBook);
  localStorage.setItem('ArchievedBookMark', JSON.stringify(cpyExitingBook));
  dispatch(updateBookmark({
    bookmarkId: getBookInfo.id,
    updates: { archived: false }
  }));
  toast.success(`${getBookInfo.title} unarchived`, { duration: 4000 });

  console.log(archieveBookMark);
}

  useEffect(() => {
    // after refreshing the cart page so that the food items will not go, we store thm to local storage
    setArchieveBookMark(JSON.parse(localStorage.getItem("ArchievedBookMark") || "[]"));
    setSelectedTags(JSON.parse(localStorage.getItem("selectedTags") || "[]"));
  }, []);
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

function toggleTag(tags){
  setSelectedTags((state)=>{
    const exists = state.includes(tags);
    const next = exists ? state.filter((t) => t !== tags) : [...state, tags];
    localStorage.setItem('selectedTags', JSON.stringify(next));
    return next;
  })
}

  return (
    <bookContext.Provider
      value={{ openAddBookMarkDialog, setOpenAddBookMarkDialog, handelPinned, pinnedBook, searchTerm, setSearchTerm, handleAddToArchieve, archieveBookMark, setArchieveBookMark, handleUnArchieveBookMark, toggleTag, selectedTags }}
    >
      {children}
    </bookContext.Provider>
  );
}

export default BookContextProvider;
