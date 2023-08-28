import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  django,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  elemis,
  constructorLearning,
  molteni,
  nicoleFahri,
  meta,
  osw,
  python,
  starbucks,
  smiley,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  xcelBrands,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ecommerce & Marketing Director",
    icon: creator,
  },
  {
    title: "Project Manager",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer | Student",
    company_name: "Constructor Learning",
    icon: constructorLearning,
    iconBg: "#f5f3f2",
    date: "May 2023 - August 2023",
    points: [
      "Full-stack web development intensive course. JavaScript/react, Python/Django, DevOps.",
      "Collaborating with fellow student developer to create high-quality apps.",
      "Participating to code projects daily reviews with designated team tech lead and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "eCommerce Director",
    company_name: "Xcel Brands",
    icon: xcelBrands,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - Nov 2022",
    points: [
      "Management of 2 eCommerce websites: Longaberger.com and Judith Ripka.com",
      "Lead the support maintenance process as project manager for•",
      "Collaborating with cross-functional teams including designers, product managers to create high-converting promotional campaigns.",
      "UX and UI restructure of the single level marketing technology in use",
      "Implementation of loyalty and rewards software Yotpo",
      "Implementation of the merchandising software FastSimon",
      "Implementation of automated return software LoopReturns",
      "Managed performance marketing agency Google, Meta, Tik Tok",
    ],
  },
  {
    title: "eCommerce & Marketing Manager",
    company_name: "Molteni Group",
    icon: molteni,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - Nov 2022",
    points: [
      "Managed multi-country (9) UX, debugging and visual merchandising of Molteni.com and Dada-Kitchens.com",
      "Developed, maintained and evolved the US eCommerce channel from the ground up: operations and logistics, Design and UX, eCommerce finance, UAT and Launch",
      "Managed the launch of the furniture online configurator: Agency tendering, Project management, QA, UX and debugging",
      "Managed relationships and marketing for 14 B2B retail vendors, 5 of which have flagship stores plus management of 5 local non-transactional websites",
      "Led the opening of 2 flagship stores in Miami and Los Angeles; coordinated PR, and grand opening events.",
      "Grew annual sales of “quick ship” furniture inventory by 220% through B2B channels.",
      "Team Management: 2 direct reports: data analyst and logistics manager, performance agency, web development agency, 3D configurator agency",
    ],
  },
  {
    title: "Digital Architect",
    company_name: "OneSpaWorld | Steiner Holdings",
    icon: osw,
    iconBg: "#E6DEDD",
    date: "Jul 2018 - Dec 2018",
    points: ["Project managed the launch of OneSpaWorld.com"],
  },
  {
    title: "eCommerce Manager",
    company_name: "ELEMIS | Steiner Holdings",
    icon: elemis,
    iconBg: "#E6DEDD",
    date: "Aug 2015 - Jul 2018",
    points: [
      "Developed and implemented digital upper/mid / lower funnel eCommerce promotional marketing strategy",
      "Analyzed customer insights and market analysis to build actionable short-term and long-term strategies",
      "Planned and implemented A/B testing marketing strategies, leveraging tools such as Qubit and JustUno",
      "Monitored eCommerce operations to support stock availability for campaign planning",
    ],
  },
  {
    title: "eCommerce Coordinator",
    company_name: "Nicole Fahri",
    icon: nicoleFahri,
    iconBg: "#FFFFFF",
    date: "Sep 2014 - Aug 2015",
    points: [],
  },
  {
    title: "Digital Marketing Assistant",
    company_name: "The Smiley Company",
    icon: smiley,
    iconBg: "#FFFFFF",
    date: "Oct 2012 - Aug 2014",
    points: [],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
