import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";

function Layout() {
  const [openSidebar, setOpenSidebar] = useState(false);
  
   
  return (
    <div className="flex min-h-screen w-screen px-2">
      {/* sidebar */}
      <Sidebar open={openSidebar} setOpen={setOpenSidebar} />
      <div className="flex flex-1 flex-col ">
        {/* header */}
        <Header setOpen={setOpenSidebar} />
        <main className="flex flex-col flex-1 bg-muted/85 dark:bg-[#081913] p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
