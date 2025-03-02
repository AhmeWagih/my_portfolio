import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const skills = [
  {
    skill_name: 'HTML',
    Image: '/assets/skills/html.png',
    width: 64,
    height: 64,
    alt: 'Html Icon',
  },
  {
    skill_name: 'CSS',
    Image: '/assets/skills/css.png',
    width: 64,
    height: 64,
    alt: 'Css Icon',
  },
  {
    skill_name: 'JavaScript',
    Image: '/assets/skills/javascript.png',
    width: 64,
    height: 64,
    alt: 'JavaScript Icon',
  },
  {
    skill_name: 'TypeScript',
    Image: '/assets/skills/ts.png',
    width: 64,
    height: 64,
    alt: 'TypeScript Icon',
  },
  {
    skill_name: 'React.Js',
    Image: '/assets/skills/react.png',
    width: 64,
    height: 64,
    alt: 'React Icon',
  },
  {
    skill_name: 'Redux.Js',
    Image: '/assets/skills/redux.svg',
    width: 64,
    height: 64,
    alt: 'ReduxJs Icon',
  },
  {
    skill_name: 'React Query',
    Image: '/assets/skills/reactquery.png',
    width: 70,
    height: 64,
    alt: 'React Query Icon',
  },
  {
    skill_name: 'Github',
    Image: '/assets/skills/github.png',
    width: 64,
    height: 64,
    alt: 'Github Icon',
  },
  {
    skill_name: 'Tailwind Css',
    Image: '/assets/skills/tailwind.png',
    width: 64,
    height: 64,
    alt: 'Tailwind Icon',
  },
  {
    skill_name: 'Material UI',
    Image: '/assets/skills/mui.png',
    width: 64,
    height: 64,
    alt: 'Material UI Icon',
  },
  {
    skill_name: 'Next.js',
    Image: '/assets/skills/nextjs.png',
    width: 64,
    height: 64,
    alt: 'Next.js Icon',
  },
  {
    skill_name: 'NextAuth.Js',
    Image: '/assets/skills/nextauth.png',
    width: 64,
    height: 64,
    alt: 'Next Auth Js Icon',
  },
  {
    skill_name: 'Framer Motion',
    Image: '/assets/skills/framer.png',
    width: 64,
    height: 64,
    alt: 'Framer Motion Icon',
  },
  // {
  //   skill_name: 'Figma',
  //   Image: '/assets/skills/figma.png',
  //   width: 43,
  //   height: 64,
  //   alt: 'Figma Icon',
  // },
  {
    skill_name: 'shadcn/ui',
    Image: '/assets/skills/shadcn.png',
    width: 64,
    height: 64,
    alt: 'shadcn/ui Icon',
  },
  {
    skill_name: 'Node.js',
    Image: '/assets/skills/node-js.png',
    width: 55,
    height: 64,
    alt: 'Node.js Icon',
  },
  {
    skill_name: 'Express',
    Image: '/assets/skills/express.png',
    width: 60,
    height: 64,
    alt: 'Express.js Icon',
  },
  {
    skill_name: 'MongoDB',
    Image: '/assets/skills/mongodb.png',
    width: 40,
    height: 55,
    alt: 'mongoDB Icon',
  },
  {
    skill_name: 'Docker',
    Image: '/assets/skills/docker.webp',
    width: 55,
    height: 64,
    alt: 'Docker Icon',
  },
];
export const projects = [
  {
    project_name: 'Earth Simulator',
    description:
      "Created an interactive platform using NASA data to explore Earth's systems, featuring quizzes, AI-generated videos, and a personalized footprint calculator. The platform provides real-time feedback on sustainable choices, helping users understand and reduce their environmental impact.",
    src: '/projects/earth.png',
    url: 'https://nasa-space-app-mauve.vercel.app',
    github: 'https://github.com/AhmeWagih/earth_simulator',
    tags: [
      'Next',
      'React',
      'Three.js',
      'GLSX',
      'LIL-GUI',
      'Tailwind CSS ',
      'Framer Motion',
    ],
    width: 550,
    height: 300,
    alt: 'Earth Simulator',
  },
  {
    project_name: 'YoutubeClone',
    description:
      ' Developed a YouTube clone application using React and Tailwind CSS, integrating it with YouTube’s API to fetch and display videos, enabling users to search and watch videos seamlessly.',
    src: '/projects/youtubeclone.png',
    url: 'https://youtube-clone-eight-nu.vercel.app/',
    github: 'https://github.com/AhmeWagih/youtube-clone',
    tags: ['React  ', 'Tailwind CSS  ', 'Rapid API'],
    width: 550,
    height: 300,
    alt: 'Youtube Clone',
  },
  {
    project_name: 'My Portfolio',
    description:
      'This is my portfolio, I am using Next.js and Tailwind CSS. I am using Framer Motion for animation and Figma for design.',
    src: '/projects/portfolio.png',
    url: 'https://ahmed-wagih-one.vercel.app/',
    github: 'https://github.com/AhmeWagih/my_portfolio',
    tags: ['Next', 'React', 'Tailwind CSS ', 'Framer Motion'],
    width: 550,
    height: 300,
    alt: 'My Portfolio',
  },
  {
    project_name: 'Article Summarizer',
    description:
      'Developed an AI-powered article summarizer using React and Vite, which extracts concise summaries from article URLs. The tool features a responsive UI with Tailwind CSS and delivers quick, accurate results.',
    src: '/projects/ai-sum.png',
    url: 'https://youtube-clone-eight-nu.vercel.app/',
    github: 'https://github.com/AhmeWagih/article_summarizer',
    tags: ['React  ', 'Tailwind CSS  ', 'Rapid API'],
    width: 550,
    height: 300,
    alt: 'Youtube Clone',
    disabled: true,
  },
  {
    project_name: 'Promptopia',
    description:
      'Built a modern prompt-sharing platform using Next.js and MongoDB featuring glassmorphism-inspired design. Users can create, edit, and delete prompts, explore community profiles, search by tags, and copy prompts to the clipboard. The platform is fully responsive, with a smooth user experience across all devices.',
    src: '/projects/posts.png',
    url: 'https://youtube-clone-eight-nu.vercel.app/',
    github: 'https://github.com/AhmeWagih/promptopia',
    tags: ['Next', 'NextAuth', 'React', 'MongoDB', 'Tailwind CSS', 'Rapid API'],
    width: 550,
    height: 300,
    alt: 'Youtube Clone',
    disabled: true,
  },
  {
    project_name: 'JavaScript E-Commerce',
    description:
      'Built a dynamic e-commerce application using React and Redux, allowing users to effortlessly browse, select, and purchase items conveniently. The platform features a user-friendly interface and a robust state management system, enhancing the overall shopping experience.',
    src: '/projects/ecommerce.png',
    url: 'https://e-commerce-app-inky-gamma.vercel.app/',
    github: 'https://github.com/AhmeWagih/e-commerce-js',
    tags: ['React', 'Redux', 'Bootstrap'],
    width: 550,
    height: 300,
    alt: 'E-Commerce App',
  },
  {
    project_name: 'TypeScript E-Commerce',
    description:
      'Built an e-commerce application using React and Redux, allowing users to browse, select, and purchase items conveniently. The platform includes Wishlist and Cart pages, enabling users to add items to their wishlist and cart seamlessly while enjoying a responsive design with Tailwind CSS.',
    src: '/projects/ecom-ts.png',
    url: 'https://e-commerce-app-inky-gamma.vercel.app/',
    github: 'https://github.com/AhmeWagih/e-commerce-ts',
    tags: ['React', 'Redux', 'Json Server', 'Bootstrap'],
    width: 550,
    height: 300,
    alt: 'E-Commerce App',
    disabled: true,
  },
  // {
  //   project_name: "CRUD App",
  //   description:
  //     " Developed a YouTube clone application using React and Tailwind CSS, integrating it with YouTube’s API to fetch and display videos, enabling users to search and watch videos seamlessly.",
  //   src: "/projects/crudapp.png",
  //   url: "https://curd-app-three.vercel.app/",
  //   github: "https://github.com/AhmeWagih/Curd_App",
  //   tags: ["React  ", "Redux  ", "Bootstrap "],
  //   width: 550,
  //   height: 300,
  //   alt: "CRUD App",
  // },
  {
    project_name: 'Nike Website',
    description: ' Simple website application using React and Tailwind CSS.',
    src: '/projects/nike.png',
    url: 'https://app-landing-page-using-tailwind.vercel.app/',
    github: 'https://github.com/AhmeWagih/AppLandingPage_UsingTailwind',
    tags: ['React  ', 'Tailwind CSS'],
    width: 550,
    height: 300,
    alt: 'Nike Website',
  },
  {
    project_name: 'Movie App',
    description:
      'Developed a simple movie application using React and Tailwind CSS.',
    src: '/projects/movieapp.png',
    url: 'https://movie-app-one-peach.vercel.app/',
    github: 'https://github.com/AhmeWagih/movie-app',
    tags: ['React  ', 'Tailwind CSS '],
    width: 550,
    height: 300,
    alt: 'Movie App',
  },
  // {
  //   project_name: "Wego Dashboard",
  //   description:
  //     "Responsive Website Using HTML , CSS",
  //   src: "/projects/design4.png",
  //   url: "https://html-and-css-template-four-seven.vercel.app/",
  //   github: "https://github.com/AhmeWagih/HTML_and_CSS_template_Four",
  //   tags: ["HTML  ", "CSS "],
  //   width: 550,
  //   height: 300,
  //   alt: "Wego Dashboard",
  // },
  // {
  //   project_name: "Wego World",
  //   description:
  //     "Responsive Website Using HTML , CSS",
  //   src: "/projects/design3.png",
  //   url: "https://html-and-css-template-three.vercel.app/",
  //   github: "https://github.com/AhmeWagih/HTML_and_CSS_template_Three",
  //   tags: ["HTML  ", "CSS "],
  //   width: 550,
  //   height: 300,
  //   alt: "Wego World",
  // },
];
export const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  // {
  //   href: 'https://drive.google.com/file/d/1uOpZcFm_TYTXOv61pRJJ8RMEDyOOzaGi/view?usp=sharing',
  //   label: 'Resume',
  //   target: '_blank',
  // },
  { href: '/contact', label: 'Contact' },
];
export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/ahmedwagih02/",
    icon: <FaLinkedinIn aria-hidden="true" />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/AhmeWagih",
    icon: <FaGithub aria-hidden="true" />,
    label: "GitHub",
  },
  {
    href: "/contact",
    icon: <AiOutlineMail aria-hidden="true" />,
    label: "Email",
  },
  {
    href: "https://api.whatsapp.com/send?phone=+201113078687&text=Hello%20Ahmed%20Wagih",
    icon: <FaWhatsapp aria-hidden="true" />,
    label: "WhatsApp",
  },
  // {
  //   href: "https://drive.google.com/file/d/1uOpZcFm_TYTXOv61pRJJ8RMEDyOOzaGi/view?usp=sharing",
  //   icon: <BsFillPersonLinesFill aria-hidden="true" />,
  //   label: "Resume",
  // },
];
export const heroLinks = [
  {
    href: "https://www.linkedin.com/in/ahmedwagih02/",
    icon: <FaLinkedinIn aria-hidden="true" />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/AhmeWagih",
    icon: <FaGithub aria-hidden="true" />,
    label: "GitHub",
  },
  {
    href: "/contact",
    icon: <AiOutlineMail aria-hidden="true" />,
    label: "Email",
  },
  {
    href: "https://api.whatsapp.com/send?phone=+201113078687&text=Hello%20Ahmed%20Wagih",
    icon: <FaWhatsapp aria-hidden="true" />,
    label: "WhatsApp",
  },
  {
    href: "https://drive.google.com/file/d/1aDFLqCPiNuLmQRWtxq9KyXyBmWdhW8tN/view?usp=sharing",
    icon: <BsFillPersonLinesFill aria-hidden="true" />,
    label: "Resume",
  },
];
export const contactLinks = [
  {
    href: "https://www.linkedin.com/in/ahmedwagih02/",
    icon: <FaLinkedinIn aria-hidden="true" />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/AhmeWagih",
    icon: <FaGithub aria-hidden="true" />,
    label: "GitHub",
  },
  {
    href: "https://api.whatsapp.com/send?phone=+201113078687&text=Hello%20Ahmed%20Wagih",
    icon: <FaWhatsapp aria-hidden="true" />,
    label: "WhatsApp",
  },
];
