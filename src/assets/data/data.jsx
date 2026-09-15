import image1 from './Chi-Chi-Exquiste.png';
import image2 from './bookMark-medium.webp'
import image3 from './image.png';
import image4 from './herapist website.png';
import image5 from './Elegant-Store.png';
import image6 from './Screenshot 2026-03-08 111153.png';

import { Code, Globe, Palette, Phone, Rocket, Search, ShoppingCart, Smartphone, WholeWord } from 'lucide-react';


const ProjectData = [
    {
        title: "Elegant-Store",
        description: "A MERN stack e-commerce platform with admin panel for product/order management. Features search, filtering, cart functionality, and PayPal payment integration.",
        categories: 'Web App',
        Image: image5,
        technologies: ["Reactjs","Node.js", "MongoDB", "Tailwindcss", "Lucide React", "PayPal API"],
        viewLink: "https://elegant-store-2.onrender.com/",
        codeLink: "https://github.com/AbdulfataiOlarewaju/Elegant-Store"
    },
     {
        title: "Thrive Africa",
        description: "A nonprofit organization website built to reach individuals in need of healthcare support. Features donation systems, volunteer sign-ups, and mission-driven content optimized for",
        categories: 'Web App',
        Image: image6,
        technologies: ["React", "TypeScript", "MongoDb", "D3.js"],
        viewLink: "https://thrive-africa-health-initiative.vercel.app/",
        codeLink: "https://github.com/AbdulfataiOlarewaju/TriveAfica"
    },
    {
        title: "Chi Chi Exquiste Kitchen",
        description: "A dynamic e-commerce storefront built with React and Tailwind CSS. Features responsive design, advanced client-side state management (cart/checkout).", 
        categories: 'Web App',
        Image: image1,
        technologies: ["React", "Tailwindcss", "Frammer motion", "javascript"],
        viewLink: "https://chi-chi-exquiste-kitchen.vercel.app",
        codeLink: "https://github.com/AbdulfataiOlarewaju/Chi-Chi-Exquiste-Kitchen"
    },
     {
        title: "A therapist website",
        description: "A fully responsive and accessible therapist website built with modern web technologies. Features appointment booking, service listings, and a clean, professional design",
        categories: 'Web App',
        Image: image4,
        technologies: ["React", "TypeScript", "API integration", "D3.js"],
        viewLink: "https://www.confidantszone.com/",
        codeLink: "https://github.com/AbdulfataiOlarewaju/ConfidantsZone"
    },
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