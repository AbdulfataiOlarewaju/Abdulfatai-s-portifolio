import image1 from './image2.jpg';
import image2 from './bookMark-medium.webp'
import image3 from './image.png';
import image4 from './Screenshot 2026-02-17 075941.png';
import { Code, Globe, Palette, Phone, Rocket, Search, ShoppingCart, Smartphone, WholeWord } from 'lucide-react';


const ProjectData = [
    {
        title: "A therapist website",
        description: "A fully responsive and accessible therapist website built with modern web technologies. Features appointment booking, service listings, and a clean, professional design",
        categories: 'Web Development',
        Image: image4,
        technologies: ["React", "TypeScript", "API integration", "D3.js"],
        viewLink: "https://www.confidantszone.com/",
        codeLink: "https://github.com/AbdulfataiOlarewaju/ConfidantsZone"
    },
    {
        title: "Chi Chi Exquiste Kitchen",
        description: "A dynamic e-commerce storefront built with React and Tailwind CSS. Features responsive design, advanced client-side state management (cart/checkout).", 
        categories: 'Web Development',
        Image: image1,
        technologies: ["React", "Tailwindcss", "Frammer motion", "javascript"],
        viewLink: "https://chi-chi-exquiste-kitchen.vercel.app",
        codeLink: "https://github.com/AbdulfataiOlarewaju/Chi-Chi-Exquiste-Kitchen"
    },
    {
        title: "FARMEASY",   
        description: "Farmeasy is an innovative agricultural platform designed to empower farmers and promote sustainable farming practices in Nigeria.",
        categories: 'Web Development',
        Image: image3,
        technologies: ["Html", "Css", "Javascript", "Python"],
        viewLink: "https://ecoshop.example.comhttps://abdulfataiolarewaju.github.io/FARMEASY/about.html",
        codeLink: "https://github.com/AbdulfataiOlarewaju/FARMEASY"
    },
    {
        title: "Frontend-Mentor-Book-Manager-App",
        description: "A fully-functional bookmark manager with add, edit, archive, search, and filter features. Perfect for practicing forms and state management.",
        categories: 'Web App',
        Image: image2,
        technologies: ["Reactjs","Node.js", "MongoDB", "Tailwindcss", "Google API"],
        viewLink: "https://frontend-mentor-book-manager-app.vercel.app",
        codeLink: "https://github.com/AbdulfataiOlarewaju/Frontend-Mentor-Book-Manager-App"
    }
]

export default ProjectData;

export const serviceData = [
     {
        logo: Globe,
        title : 'Custom Website Design',
        description : 'Beautiful, responsive websites tailored to your brand identity and business goals. From landing pages to full corporate websites.',
        technologies: ['Responsive Design', 'Brand Identity', 'Modern UI/UX']
    },
    {
        logo: Code,
        title : 'Full Stack Development',
        description : 'End-to-end web application development using React, Node.js, TypeScript, and modern databases for scalable solutions.',
        technologies: ['React/Next.js', 'Node.js/Express', 'Database Design']
    },
    {
        logo: ShoppingCart,
        title : 'E-Commerce Solutions',
        description : 'Complete online store development with payment integration, inventory management, and seamless shopping experiences.',
        technologies: ['Payment Integration', 'Cart System', 'Order Management']
    },
   
    {
        logo: Smartphone,
        title : 'Mobile-First Design',
        description : 'Websites that look and perform perfectly on all devices. Optimized for touch interactions and fast mobile loading.',
        technologies: ['Touch Optimized', 'Fast Loading', 'Cross-Device']
    },
    {
        logo: Search,
        title : 'SEO Optimization',
        description : 'Technical SEO implementation to improve your search rankings and drive organic traffic to your website.',
        technologies: ['On-Page SEO', 'Schema Markup', 'Performance']
    },
    {
        logo: Palette,
        title : 'Landing Page Design',
        description : 'High-converting landing pages that capture leads and drive sales. Optimized for performance and conversions.',
        technologies: ['Lead Generationn', 'A/B Testing', 'Fast Loading']
    },
    {
        logo: Rocket,
        title : 'Website Redesign',
        description : 'Transform your outdated website into a modern, high-performing digital presence that converts visitors into customers.',
        technologies: ['Modern Refresh', 'Better UX', 'Improved Speed']
    }
]