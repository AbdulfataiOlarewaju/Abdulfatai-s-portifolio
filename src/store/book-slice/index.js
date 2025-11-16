import { createSlice } from "@reduxjs/toolkit";
import fronendLogo from "../../assets/Frontend.jpeg";
import MDNLogo from "../../assets/MDN.png";
import ReactLogo from "../../assets/React.png";
import ClaudeLogo from "../../assets/Claude.jpeg";
import WebDevogo from "../../assets/web-dev.png";
import DevLogo from "../../assets/Dev.to.png";
import TailwindLogo from "../../assets/tailwind-css.png";
import JavaScriptLogo from "../../assets/JS.info.png";
import FreeCodeCamp from "../../assets/freecode-camp.png";

const initialState = {
  openAddBookMarkDialog : false,
  book: [
    {
      id: 1,
      title: "Frontend Mentor",
      website: "frontendmentor.io",
      desc: "Improve your front-end coding skills by building real projects. Solve real-world HTML, CSS, JavaScript challenges whislt working to professional designs.",
      logo: fronendLogo,
      gains : ['Practice', 'Learning', 'Community'],
      view: 47,
      date: "25 Sep",
      eventDate: "15 Jan",
    },
    {
      id: 2,
      title: "MDN Web Docs",
      website: "developer.mozilla.org",
      desc: "The MDN Web Docs site provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and progressive web apps.",
      logo: MDNLogo,
      gains : ['Reference', 'HTML', 'CSS', 'Javascript'],
      view: 152,
      date: "24 Sep",
      eventDate: "10 Jan",
    },
     {
      id: 3,
      title: "Raect Docs",
      website: "react.dev",
      desc: "the Library for Web and Native user interfaces. Build user interface out of individual pieces called components.",
      logo: ReactLogo,
      gains : ['Javascript', 'Framework','Reference', ],
      view: 0,
      date: "Never",
      eventDate: "20 Feb",
    },
     {
      id: 4,
      title: "Cluade",
      website: "claude.ai",
      desc: "An AI assistant created by Anthropic that can help with analyzing, brainstorming, writing, coding and creative tasks through natural conversation.",
      logo: ClaudeLogo,
      gains : ['Tools', 'AI','Learning', ],
      view: 73,
      date: "23 Sep",
      eventDate: "18 Feb",
    },
     {
      id: 5,
      title: "Web.dev",
      website: "web.dev",
      desc: "Guidance to build modern web experiences that work on any browser. Learn about web vitals, PWAs, and more.",
      logo: WebDevogo,
      gains : ['Performance', 'Learning','Tips', ],
      view: 15,
      date: "16 Aug",
      eventDate: "15 Feb",
    },
     {
      id: 6,
      title: "Tailwind CSS",
      website: "tailwindcss.com",
      desc: "A utility-first CSS framework for rapidly building modern websites without ever leaving your HTML",
      logo: TailwindLogo,
      gains : ['CSS', 'Framework','Tool', ],
      view: 52,
      date: "19 Sep",
      eventDate: "12 Feb",
    },
     {
      id: 7,
      title: "Dev.to",
      website: "Dev.to",
      desc: "A constructive and inclusive social network for software developers. Share knowledge and grow your career.",
      logo:  DevLogo,
      gains : ['Community', 'Blog','Articles', ],
      view: 34,
      date: "22 Sep",
      eventDate: "18 Feb",
    },
     {
      id: 8,
      title: "JavaScript.info",
      website: "javascript.info",
      desc: "The Modern JavaScript Tutorial. How it's done now. From the basics to advanced topics with simple, but detailed explanations.",
      logo: JavaScriptLogo,
      gains : ['Javascript', 'Tutorial','Reference', ],
      view: 89,
      date: "15 Sep",
      eventDate: "25 Jan",
    },
     {
      id: 9,
      title: "freeCodeCamp",
      website: "freecodecamp.org",
      desc: "Learn to code for free. Build projects. Earn certifications. An open source community that helps you learn to code with free online. courses and certifications.",
      logo: FreeCodeCamp,
      gains : ['Learning', 'Projects','Certifications', ],
      view: 120,
      date: "10 Sep",
      eventDate: "30 Jan",
    },
  ],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  redudcers: {
    addBook: (state, action) => {
      state.post.push(action.payload);
    }
  },
});


export const {addBook} = bookSlice.actions;
export const selectAll = (state) => state.book.book;
export default bookSlice.reducer;