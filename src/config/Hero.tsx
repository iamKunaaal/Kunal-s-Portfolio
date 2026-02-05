/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", icon: "https://cdn.example.com/python.svg" },
 *      { name: "React", href: "https://react.dev", icon: "https://cdn.example.com/react.svg" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';

export const heroConfig = {
  // Personal Information
  name: 'Kunal',
  title: 'A Full Stack Web Developer.',
  avatar: '/assets/kunal-avatar.jpg',

  // Skills Configuration
  skills: [
    {
      name: 'Django',
      href: 'https://www.djangoproject.com/',
      icon: 'https://cdn.simpleicons.org/django/FFFFFF',
    },
    {
      name: 'Python',
      href: 'https://www.python.org/',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    },
    {
      name: 'MySQL',
      href: 'https://www.mysql.com/',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    },
    {
      name: 'Shopify',
      href: 'https://www.shopify.com/',
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
  ],

  // Description Configuration
  description: {
    template:
      'I build modern, responsive, and scalable web applications using {skills:0}, {skills:1}, {skills:2}, {skills:3}, {skills:4}, and {skills:5}. Focused on <b>clean UI design</b>, powerful <b>backend development</b>, and seamless <b>API integrations</b>.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://in.linkedin.com/in/kunaal-darji',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/iamKunaaal',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:kunaldarji2004@gmail.com',
    icon: <Mail />,
  },
];
