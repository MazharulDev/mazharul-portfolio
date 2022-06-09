//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';


// projects images
import Project1 from './assets/img/projects/assignment-ten.png';
import Project2 from './assets/img/projects/vehicle.png';
import Project3 from './assets/img/projects/storeforpc.png';


// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import tailwindImg5 from './assets/img/skills/Tailwind.png'
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: '',
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/miforbd/?hl=en',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/miforbd',
  },
  {
    icon: <FiDribbble />,
    href: '',
  },
];



// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Health is happiness',
    category: 'Frontend website',
    des: 'This website is doctors portal',
    live: 'https://assignment-ten-8e38b.web.app/',
    clientCode: 'https://github.com/miforbd/health-is-happiness'
  },
  {
    id: '2',
    image: Project2,
    name: 'Vehicle-storehouse',
    category: 'Full stack website',
    des: 'This website is warehouse management',
    live: 'https://vehicle-storehouse.web.app/',
    clientCode: 'https://github.com/miforbd/vehicle-storehouse-client-side',
    serverCode: 'https://github.com/miforbd/vehicle-storehouse-server-side'
  },
  {
    id: '3',
    image: Project3,
    name: 'Store for pc',
    category: 'Full stack website',
    des: 'This website is Manufacturer items',
    live: 'https://storeforpc.web.app/',
    clientCode: 'https://github.com/miforbd/storeforpc-client-side',
    serverCode: 'https://github.com/miforbd/storeforpc-server-side'
  },

];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Frontend website',
  },
  {
    name: 'Full stack website',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg6,
  },
  {
    image: tailwindImg5,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at mazharul714@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Dhaka, Bangladesh',
    description: 'Serving clients worldwide',
  },
];
