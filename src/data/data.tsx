import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolio6 from '../images/portfolio/portfolio-6.png';
import porfolio7 from '../images/portfolio/portfolio-7.png';
import porfolio8 from '../images/portfolio/portfolio-8.png';
import porfolio9 from '../images/portfolio/portfolio-9.png';
import porfolio10 from '../images/portfolio/portfolio-10.png';
import profilepic from '../images/profilepic.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Welcome to my porfolio page',
  description: 'Look through some of my work and experience',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi! I'm Samuel`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Full Stack Software Engineer based in Ghana, currently studying at Microverse.Inc.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
         I specialize in building high-quality products, implementing new features, and creating impressive websites. Check out my portfolio and experience to see my work. If you have a coding project in mind, let's collaborate and bring your ideas to life!.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://docs.google.com/document/d/e/2PACX-1vSG_jzhk96e9ygz_Rch-NLXlhRaXfqMR3_Lj6ML4Vy8JId0nTNTjWPjZYIWoJD0V8seDWod2G_pjm4J/pub',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Experienced in HTML, CSS, Bootstrap, JavaScript,
   ReactJS, Express, SQL, Node.js, Ruby, and Ruby on Rails. 
   I have consistently demonstrated my ability to 
   deliver exceptional results both independently 
   and through collaborative efforts on a diverse range of 
   projects showcasing my ability to deliver exceptional 
   results by leveraging these technologies to meet specific project 
   requirements.`,
  aboutItems: [
    {label: 'Location', text: 'Accra, Ghana', Icon: MapIcon},
    {label: 'Nationality', text: 'Ghanaian', Icon: FlagIcon},
    {label: 'Interests', text: 'Technology, Web design', Icon: SparklesIcon},
    {label: 'Study', text: 'Microverse.Inc', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Soft & Technical skills',
    skills: [
      {
        name: 'Cross Cultural Communication',
        level: 10,
      },
      {
        name: 'Teamwork',
        level: 10,
      },
      {
        name: 'Remote Pair Programming',
        level: 10,
      },
      {
        name: 'Github',
        level: 8,
      },
      {
        name: 'Test Driven Development',
        level: 7,
      },
      {
        name: 'Code Reviewing',
        level: 7,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Ruby',
        level: 9,
      },
      {
        name: 'JavaScript',
        level: 9,
      },
       {
        name: 'Html',
        level: 9,
      },
       {
        name: 'Css',
        level: 9,
      },
       {
        name: 'SQL',
        level: 7,
      },
    ],
  },
  {
    name: 'Frameworks',
    skills: [
     
      {
        name: 'Ruby on Rails',
        level: 8,
      },
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Redux',
        level: 8,
      },
       {
        name: 'Bootstrap',
        level: 8,
      },
      {
        name: 'PostgreSQL',
        level: 8,
      },
      
      {
        name: 'Capybara',
        level: 8,
      },
       {
        name: 'Jest',
        level: 6,
      },
    ],
  },
  
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Nation Teller',
    description: `This React project is about building a mobile web application to check a list of country metrics.The project is a single-page application (SPA) built with React and Redux. The data retrieved from the RestCountries API is stored in the Redux store.`,
    url: 'https://nation-teller.onrender.com/',
    image: porfolio7,
    tags:['React', 'Redux','Html','Css', 'Api','Jest'],
    source: 'https://github.com/admirerbrown/Nation-Teller',

  },
  {
    title: 'DevOps (Bootcamp)',
    description: 'This project is a demo website for a boot-camp inspired by a design by Cindy Shin. It is mainly built with HTML, CSS and Vanilla JS.The website provides a platform for students to register for the bootcamp program, making it easy for them to sign up and get started.',
    url: 'https://admirerbrown.github.io/capstone-one/',
    image: porfolio6,
    tags:['Html','Css','Javascript',],
    source: 'https://github.com/admirerbrown/capstone-one',

  },
  {
    title: 'Tourist App (  Space Travelers)',
    description: 'In this Project, we have worked with the real live data from the SpaceX API. Our task was to build a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    url: 'https://majestic-tartufo-7d0687.netlify.app/',
    image: porfolio8,
    tags:['React', 'Redux','Html','Css', 'SpaceX Api'],
    source: 'https://github.com/admirerbrown/Space-Travelers-Hub',

  },
  
  {
    title: 'Home Rental App(Stay A While)',
    description: ` "Stay A While" is a full-stack application that allows users to reserve an apartment or home. It uses React for the frontend, Ruby on Rails for the backend, and JWT (JSON Web Tokens) for authentication on the frontend.`,
    url: 'https://stay-a-while-front-end.vercel.app/',
    image: porfolio9,
    tags:['React', 'Rails', 'Postgres','Jwt', 'Redux','Rspec'],
    source: 'https://github.com/admirerbrown/stay-a-while-front-end',

  },
  
  {
    title: 'Budget App (Wallet)',
    description: 'WALLET is a Ruby on Rails mobile web application where you can manage your budget. You have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    url: 'https://admirer-olb9.onrender.com/',
    image: porfolio10,
    tags:['Ruby', 'Rails', 'Devise','Postgres', 'Rspec'],
    source: 'https://github.com/admirerbrown/ROR-budget-App',

  },
  
   
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Emmanuella Adu',
      text: "Samuel possesses exceptional skills and dedication in his field. He showcases a deep understanding of various technologies and frameworks, excelling in both front-end and back-end development. He has a keen eye for detail and strong problem-solving abilities. His passion for continuous learning and staying updated with industry trends is always evident. He actively seeks innovative solutions and shares valuable insights. His excellent communication and collaboration skills contributes to any project's success. Samuel's technical proficiency, passion for learning, and strong work ethic make him a valuable asset to any development team.",
      image: "https://avatars.githubusercontent.com/u/105938633?v=4",
    },
    {
      name: 'Asha Vijayan',
      text: "Samuel is friendly and exactly the sort of software developer any company would love. He is a great developer who is determined and dedicated to programming. His eagerness to learn new skills and technologies makes him stand out. His patience and attention to detail are amazing. Samuel was really an amazing partner and a hard worker, he is always improving himself, striving to be the best, and has good technical skills and very high soft skills, he is a great partner to anyone and I can't recommend him enough. it was nice to work with him..",
      image: "https://avatars.githubusercontent.com/u/108219288?v=4",
    },
    {
      name: 'Mudasir Sherwani ',
      text: "Throughout my time working with Mr. Samuel Ntow Kyere, he has consistently shown a deep understanding of web development principles and has produced high-quality, innovative solutions that have greatly contributed to the success of our projects. His ability to collaborate with cross-functional teams and effectively communicate complex technical concepts has made him a valuable asset to any organization.I am confident that Mr. Samuel Ntow Kyere will continue to excel in his career as a Full Stack Developer, and would highly recommend him to any company looking for a talented and dedicated professional.",
      image: "https://avatars.githubusercontent.com/u/86018834?v=4",
    },
    {
      name: 'JACINTA NGWU ',
      text: "During my collaboration with SAMUEL NTOW KYERE, I have experienced an individual who displays exceptional skills as a developer.I am proud to offer my recommendation of SAMUEL NTOW KYERE with whom I worked remotely. I recommend his professionalism and intellectual potential which will make him a valuable contributor to your organization.",
      image: "https://avatars.githubusercontent.com/u/100554236?v=4",
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: "I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.",
  items: [
    {
      type: ContactType.Email,
      text: 'mr.kyere.s@gmail.com',
      href: 'mailto:mr.kyere.s@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Accra, Ghana',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Samuel Ntow Kyere',
      href: 'https://www.linkedin.com/in/samuel-ntow-kyere/',
    },
    {
      type: ContactType.Github,
      text: 'admirerbrown',
      href: 'https://github.com/admirerbrown',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/admirerbrown'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/samuel-ntow-kyere/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/brown_admirer'},
];
