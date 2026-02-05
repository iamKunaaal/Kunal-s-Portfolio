import Bootstrap from '@/components/technologies/BootStrap';
import CSS from '@/components/technologies/CSS';
import Django from '@/components/technologies/Django';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import Python from '@/components/technologies/Python';
import SQLite from '@/components/technologies/SQLite';
import Shopify from '@/components/technologies/Shopify';
import Webflow from '@/components/technologies/Webflow';
import WordPress from '@/components/technologies/WordPress';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'ENpower Skill Lab',
    description:
      "Full-scale SaaS platform for schools to assess, track, and develop students' skills with multi-role dashboards, gamification, and competency mapping",
    image: '/projects/enpower-skill-lab.png',
    link: '#',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Django', icon: <Django key="django" /> },
      { name: 'SQLite', icon: <SQLite key="sqlite" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'HTML', icon: <Html key="html" /> },
      { name: 'CSS', icon: <CSS key="css" /> },
      { name: 'Bootstrap', icon: <Bootstrap key="bootstrap" /> },
    ],
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/enpower-skill-lab',
    isWorking: false,
  },
  {
    title: 'India Future Tycoon',
    description:
      'AI-powered innovation idea management platform for student entrepreneurship competitions with automated evaluation, jury dashboards, and ranking systems',
    image: '/projects/india-future-tycoon.png',
    link: '#',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Django', icon: <Django key="django" /> },
      { name: 'SQLite', icon: <SQLite key="sqlite" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'HTML', icon: <Html key="html" /> },
      { name: 'CSS', icon: <CSS key="css" /> },
      { name: 'Bootstrap', icon: <Bootstrap key="bootstrap" /> },
    ],
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/india-future-tycoon',
    isWorking: false,
  },
  {
    title: 'Spenta: Real Estate CRM',
    description:
      'A comprehensive real estate CRM platform for customer enquiries, lead management, and sales processes across 5 premium residential properties',
    image: '/projects/spenta-dashboard.png',
    link: '#',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Django', icon: <Django key="django" /> },
      { name: 'SQLite', icon: <SQLite key="sqlite" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'HTML', icon: <Html key="html" /> },
      { name: 'CSS', icon: <CSS key="css" /> },
      { name: 'Bootstrap', icon: <Bootstrap key="bootstrap" /> },
    ],
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/spenta',
    isWorking: true,
  },
  {
    title: 'Rapoo.in: E-Commerce Platform',
    description:
      'Official WordPress & WooCommerce e-commerce platform for Rapoo India, featuring Mumbai Indians collaboration and premium wireless peripherals showcase',
    image: '/projects/rapoo.jpg',
    link: 'https://rapoo.in',
    technologies: [
      { name: 'WordPress', icon: <WordPress key="wordpress" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'HTML', icon: <Html key="html" /> },
      { name: 'CSS', icon: <CSS key="css" /> },
      { name: 'Bootstrap', icon: <Bootstrap key="bootstrap" /> },
    ],
    live: 'https://rapoo.in',
    details: true,
    projectDetailsPageSlug: '/projects/rapoo',
    isWorking: true,
  },
  {
    title: 'EverestInd Blog',
    description:
      'Dynamic WordPress blog platform for Everest Industries with custom category automation, search functionality, and scalable publishing workflows',
    image: '/projects/everest-blog.png',
    link: 'https://www.everestind.com/blog/',
    technologies: [
      { name: 'WordPress', icon: <WordPress key="wordpress" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'HTML', icon: <Html key="html" /> },
      { name: 'CSS', icon: <CSS key="css" /> },
      { name: 'Bootstrap', icon: <Bootstrap key="bootstrap" /> },
    ],
    live: 'https://www.everestind.com/blog/',
    details: true,
    projectDetailsPageSlug: '/projects/everest-blog',
    isWorking: true,
  },
  {
    title: 'Kunuts',
    description:
      "Custom Shopify e-commerce platform for India's largest dry fruits exporter with premium UI customization and optimized shopping experience",
    image: '/projects/kunuts.png',
    link: 'https://kunuts.com/',
    technologies: [
      { name: 'Shopify', icon: <Shopify key="shopify" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'HTML', icon: <Html key="html" /> },
      { name: 'CSS', icon: <CSS key="css" /> },
    ],
    live: 'https://kunuts.com/',
    details: true,
    projectDetailsPageSlug: '/projects/kunuts',
    isWorking: true,
  },
  {
    title: 'Hypereality',
    description:
      'Animated Webflow experience with GSAP, ScrollTrigger, Locomotive Scroll, and Lottie animations for immersive scroll-driven storytelling',
    image: '/projects/hypereality.png',
    link: 'https://hypereality.webflow.io/',
    technologies: [
      { name: 'Webflow', icon: <Webflow key="webflow" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'HTML', icon: <Html key="html" /> },
      { name: 'CSS', icon: <CSS key="css" /> },
    ],
    live: 'https://hypereality.webflow.io/',
    details: true,
    projectDetailsPageSlug: '/projects/hypereality',
    isWorking: true,
  },
  {
    title: 'Mediskin',
    description:
      'Modern Shopify e-commerce platform for skincare products with clean brand aesthetic and optimized storefront experience',
    image: '/projects/mediskin.png',
    link: 'https://mediskin.care/',
    technologies: [
      { name: 'Shopify', icon: <Shopify key="shopify" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'HTML', icon: <Html key="html" /> },
      { name: 'CSS', icon: <CSS key="css" /> },
    ],
    live: 'https://mediskin.care/',
    details: true,
    projectDetailsPageSlug: '/projects/mediskin',
    isWorking: true,
  },
];
