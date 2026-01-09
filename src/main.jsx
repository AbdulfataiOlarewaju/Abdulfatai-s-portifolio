import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, HashRouter } from "react-router-dom";
import GlobalContextProvider from "./hooks/global";


createRoot(document.getElementById("root")).render(
<BrowserRouter>
  <GlobalContextProvider>
  <App /> 
  </GlobalContextProvider>
  
</BrowserRouter>
);
