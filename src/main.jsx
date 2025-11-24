import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import BookContextProvider from "./hooks/bookContext";

createRoot(document.getElementById("root")).render(

  <HashRouter>
<Provider store={store}>
    <BookContextProvider>
   <App /> 
    </BookContextProvider>
  
  </Provider>
  </HashRouter>
  
  

);
