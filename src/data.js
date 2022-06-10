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


// health and hepiness
import health1 from './assets/img/projects/health-and-happiness/1.png';
import health2 from './assets/img/projects/health-and-happiness/2.png';
import health3 from './assets/img/projects/health-and-happiness/3.png';
import health4 from './assets/img/projects/health-and-happiness/4.png';
//vehicle store house
import vehicle1 from './assets/img/projects/vehicle/1.png';
import vehicle2 from './assets/img/projects/vehicle/2.png';
import vehicle3 from './assets/img/projects/vehicle/3.png';
import vehicle4 from './assets/img/projects/vehicle/4.png';
import vehicle5 from './assets/img/projects/vehicle/5.png';
// storeforpc
import storeforpc1 from './assets/img/projects/storeforpc/1.png';
import storeforpc2 from './assets/img/projects/storeforpc/2.png';
import storeforpc3 from './assets/img/projects/storeforpc/3.png';
import storeforpc4 from './assets/img/projects/storeforpc/4.png';
import storeforpc5 from './assets/img/projects/storeforpc/5.png';
import storeforpc6 from './assets/img/projects/storeforpc/6.png';
import storeforpc7 from './assets/img/projects/storeforpc/7.png';
import storeforpc8 from './assets/img/projects/storeforpc/8.png';


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
    image1: health1,
    image2: health2,
    image3: health3,
    image4: health4,
    name: 'Health is happiness',
    category: 'Frontend website',
    feature: 'This is a treatment service website. Users will be able to log in and sign up here through Firebase. Users will not be able to take treatment without a login.',
    technology: "React.js,Firebase, React router, React hook form,React Bootstrap, React toastify ,React icon.",
    des: 'This website is doctors portal',
    live: 'https://assignment-ten-8e38b.web.app/',
    clientCode: 'https://github.com/miforbd/health-is-happiness'
  },
  {
    id: '2',
    image1: vehicle1,
    image2: vehicle2,
    image3: vehicle3,
    image4: vehicle4,
    image5: vehicle5,
    name: 'Vehicle-storehouse',
    category: 'Full stack website',
    feature: "The seller's products are handled on this site.Login and Signup using Firebase, Ensure that only authorized users can add, delete, and update product quantity. You can see your own added product on the My Items page. Fully responsive.",
    technology: "React.js, Node.js, MongoDB, Express.js, Firebase, React router, React hook form, Tailwind css, React toastify ,Heroku.",
    des: 'This website is warehouse management',
    live: 'https://vehicle-storehouse.web.app/',
    clientCode: 'https://github.com/miforbd/vehicle-storehouse-client-side',
    serverCode: 'https://github.com/miforbd/vehicle-storehouse-server-side'
  },
  {
    id: '3',
    image1: storeforpc1,
    image2: storeforpc2,
    image3: storeforpc3,
    image4: storeforpc4,
    image5: storeforpc5,
    image6: storeforpc6,
    image7: storeforpc7,
    image8: storeforpc8,
    name: 'Store for pc',
    category: 'Full stack website',
    feature: " This is a manufacturing website site. Here users can log in to make sure to authorize users to order products, give reviews, and update their profiles. Can pay for ordered products. There is also an admin panel in the dashboard where the admin can make admin, manage orders and add products. Fully responsive. Payment gateway has been added.",
    technology: "React.js, Node.js, MongoDB, Express.js, Stripe, Firebase, React router,React hook form,React toastify ,React icon, Tailwind css,DaisyUI, Heroku.",
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
