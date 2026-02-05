export interface Technology {
  name: string;
  href: string;
  icon: string;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: 'Techinfinity',
    position: 'Web Developer',
    location: 'Charni Road (On-site)',
    image: '/company/techinfinity.png',
    description: [
      'Building and maintaining full-stack web applications using Python and Django framework.',
      'Developing custom e-commerce solutions on Shopify and WordPress platforms.',
      'Creating responsive and modern web designs with seamless user experiences.',
      'Integrating APIs and third-party services for enhanced functionality.',
    ],
    startDate: 'June 2023',
    endDate: 'Present',
    technologies: [
      {
        name: 'Python',
        href: 'https://python.org/',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      },
      {
        name: 'Django',
        href: 'https://djangoproject.com/',
        icon: 'https://cdn.simpleicons.org/django/FFFFFF',
      },
      {
        name: 'MySQL',
        href: 'https://mysql.com/',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      },
      {
        name: 'Shopify',
        href: 'https://shopify.com/',
        icon: 'https://cdn.simpleicons.org/shopify/7AB55C',
      },
      {
        name: 'WordPress',
        href: 'https://wordpress.org/',
        icon: 'https://cdn.simpleicons.org/wordpress/21759B',
      },
      {
        name: 'Webflow',
        href: 'https://webflow.com/',
        icon: 'https://cdn.simpleicons.org/webflow/4353FF',
      },
      {
        name: 'JavaScript',
        href: 'https://javascript.com/',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      {
        name: 'HTML',
        href: 'https://html.com/',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      },
      {
        name: 'CSS',
        href: 'https://css.com/',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      },
    ],
    website: 'https://techinfinity.com',
    linkedin: 'https://in.linkedin.com/company/techinfinity-io',
  },
  {
    isCurrent: false,
    company: 'Hospitality Minds',
    position: 'Web Developer Internship',
    location: 'Borivali, Maharashtra, India',
    image: '/company/hospitality-minds.png',
    description: [
      "India's Leading Revenue Management and Digital marketing company for Hotels.",
      'Developed and maintained websites for hospitality clients using HTML, CSS, and JavaScript.',
      'Created responsive web designs optimized for all devices.',
      'Collaborated with the marketing team on digital campaigns and web presence.',
    ],
    startDate: 'September 2022',
    endDate: 'April 2023',
    technologies: [
      {
        name: 'JavaScript',
        href: 'https://javascript.com/',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      {
        name: 'HTML',
        href: 'https://html.com/',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      },
      {
        name: 'CSS',
        href: 'https://css.com/',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      },
      {
        name: 'WordPress',
        href: 'https://wordpress.org/',
        icon: 'https://cdn.simpleicons.org/wordpress/21759B',
      },
    ],
    website: 'https://hospitalityminds.com',
    linkedin: 'https://www.linkedin.com/company/hospitalityminds',
  },
];
