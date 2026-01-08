import { 
  Github, Linkedin, Mail, MapPin, Phone, Twitter, 
  Heart, // Added Heart for the bottom bar
  ArrowUp
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <footer className="py-20 px-4 md:px-20 overflow-hidden relative dark:border-neutral-700 border-t border-neutral-300 bg-[#e5e7ebe0] shadow-2xl dark:bg-black z-30">
        <div onClick={scrollToTop} className="absolute left-47/100  top-4 w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-600 flex justify-center items-center cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-900 transition-all duration-300">
  <ArrowUp size={20} className="text-neutral-600 dark:text-neutral-300" />
</div>
      <div className="mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Brand Section */}
        <div className="flex flex-col gap-2 mb-8 md:mb-0 w-full md:w-1/4 md:m-0">
          <div className="flex gap-2 items-center text-neutral-400">
            <p className="text-xl text-black dark:text-white font-semibold">
              Code-With-Abdulfatai
            </p>
          </div>
          <p className="mt-3 text-neutral-400 text-sm max-w-2xl font-semibold ">
            Professional web developer and full-stack software engineer creating
            modern, responsive websites for businesses in Ilorin, Lagos, Nigeria.
          </p>
          <div className="flex gap-3 mt-2 text-xl dark:text-gray-300">
            <a href="https://github.com/AbdulfataiOlarewaju/" className="bg-neutral-300 dark:bg-neutral-700 p-2 rounded-md hover:bg-neutral-400 dark:hover:bg-neutral-600 hover:scale-105 transition-all duration-500 ease-in-out"><Github size={18}/></a>
            <a href="https://www.linkedin.com/in/sakariyau-abdulfatai-6b202a365?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="bg-neutral-300 dark:bg-neutral-700 p-2 rounded-md hover:bg-neutral-400 dark:hover:bg-neutral-600 hover:scale-105 transition-all duration-500 ease-in-out"><Linkedin size={18}/></a>
            <a href="https://x.com/Discrete_Dev" className="bg-neutral-300 dark:bg-neutral-700 p-2 rounded-md hover:bg-neutral-400 dark:hover:bg-neutral-600 hover:scale-105 transition-all duration-500 ease-in-out"><Twitter size={18}/></a>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex justify-between gap-4 w-full md:w-1/3">
          <div className="flex flex-col space-y-4">
            <h3 className="text-[15px] text-black dark:text-white font-semibold">Quick Links</h3>
            <ul className="flex flex-col space-y-4 text-sm text-neutral-400">
              <Link onClick={scrollToTop} to="/" className="hover:text-black dark:hover:text-white transition-all duration-300">Home</Link>
              <Link onClick={scrollToTop} to="/about" className="hover:text-black dark:hover:text-white transition-all duration-300">About</Link>
              <Link onClick={scrollToTop} to="/services" className="hover:text-black dark:hover:text-white transition-all duration-300">Services</Link>
              <Link onClick={scrollToTop} to="/projects" className="hover:text-black dark:hover:text-white transition-all duration-300">Projects</Link>
              <Link onClick={scrollToTop} to="/skills" className="hover:text-black dark:hover:text-white transition-all duration-300">Skills</Link>
              <Link onClick={scrollToTop} to="/contact" className="hover:text-black dark:hover:text-white transition-all duration-300">Contacts</Link>
            </ul>
          </div>

          <div className="flex flex-col space-y-4 text-sm">
            <h3 className="text-black text-[15px] dark:text-white font-semibold">Services</h3>
            <div className="flex flex-col space-y-4 text-sm text-neutral-400">
              <p>Website Development</p>
              <p>Full Stack Development</p>
              <p>E-Commerce Solutions</p>
              <p>SEO Optimization</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Contact</h3>
          <p className="dark:text-white text-neutral-black mb-4 flex gap-2 font-bold text-sm">
            <MapPin size={16} /> <span className="text-neutral-400">Ilorin, Kwara State, Nigeria</span>
          </p>
          <a href="mailto:sakariyauabdulfatai2003@gmail.com" className="dark:text-white text-neutral-black mb-4 flex gap-2 text-sm">
            <Mail size={16} />  <span className="text-neutral-400">sakariyauabdulfatai2003@gmail.com</span>
          </a>
          <a href="tel:+2347082814167" className="dark:text-white text-neutral-black mb-4 flex gap-2 text-sm">
            <Phone size={16} /><span className="text-neutral-400">+2347082814167</span>
          </a>
        </div>
      </div>

      
      <div className="border-neutral-300 dark:border-neutral-900 border-t mt-12 pt-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-neutral-500 dark:text-neutral-500 text-xs md:text-sm text-center">
          
          {/* Left: Copyright */}
          <div className="flex items-center gap-1">
            © {currentYear} Built with 
            <Heart size={14} className="text-red-500 " /> 
            by <span className="font-bold text-gary-400 dark:text-neutral-400">Sakariyau Abdulfatai</span>
          </div>

          {/* Center: Tagline */}
          <div className="max-w-md">
            Best Web Developer & Full Stack Software Engineer in Ilorin, Lagos, Nigeria
          </div>

          {/* Right: Tech Stack */}
          <div className="flex gap-2 items-center">
            <span>React</span> • <span>TypeScript</span> • <span>Tailwind CSS</span> • <span>Framer Motion</span>
          </div>

        </div>
        
      </div>
      {/* --- WHATSAPP FLOATING BUTTON START --- */}
      <div className="fixed bottom-6 right-6 flex items-center gap-2 z-50">
        {/* The WhatsApp Button */}
        <a 
          href="https://wa.me/2347082814167" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white dark:bg-black p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center relative"
        >
          {/* WhatsApp SVG Icon */}
          <svg 
            viewBox="0 0 24 24" 
            width="32" 
            height="32" 
            fill="#25D366" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.63 1.432h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
      {/* --- WHATSAPP FLOATING BUTTON END --- */}
    </footer>
  );
}

export default Footer;