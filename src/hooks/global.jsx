import { createContext, useState } from "react";


export const GlobalContext = createContext()

function GlobalContextProvider({children}) {
    const [openSidebar, setOpenSidebar] = useState(false)
    return ( 
        <GlobalContext.Provider value={{
            openSidebar,
            setOpenSidebar
        }}>
            {children}
        </GlobalContext.Provider>
     );
}

export default GlobalContextProvider;