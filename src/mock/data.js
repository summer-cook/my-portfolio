import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Summer Cook | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Summer Cook is a skilled web-developer working remotely, currently in San Diego, CA.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Summer Cook',
  subtitle: '',
  cta: '',
  img: 'hero.jpeg'
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "After years of working for marketing agencies and creating websites with templates, I realized I was always intrigued by code and felt driven to take my knowledge a step further.  I finally made the leap & committed to an immersive Full Stack Web Development bootcamp, LEARN Academy.",
  paragraphTwo: 'My favorite things about being a developer are the constant opportunity to push the limits of my knowledge & the ability to learn something unique every day. I have worked in client-facing roles, and I know the importance of delivering results that captivate the end user. My branding and design background drives my interest in creating satisfying user experiences & beautifying the front end of applications.',
  paragraphThree: ' My dream is to keep learning & growing as a developer by applying my knowledge in a challenging, collaborative role at a company that supports continual growth. Feel free to reach out to me to connect! ',
  resume: '/SummerCook-Developer-Resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Wildlife Tracker App',
    info: 'Full-stack app built with Ruby-on-Rails. Allows the user to track sightings of endangered species of the Pacific Northwest region. Full CRUD functionality & tests for each RESTful route written with RSPEC.',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email Me',
  email: 'summercook.dev@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/summbc/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/summer-cook',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
