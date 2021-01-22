"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.githubButtons = exports.footerData = exports.contactData = exports.projectsData = exports.aboutData = exports.heroData = exports.headData = void 0;

var _nanoid = require("nanoid");

// HEAD DATA
var headData = {
  title: 'Summer Cook | Web Developer & Designer',
  // e.g: 'Name | Developer'
  lang: 'en',
  // e.g: en, es, fr, jp
  description: 'Check out my portfolio 🌻' // e.g: Welcome to my website

}; // HERO DATA

exports.headData = headData;
var heroData = {
  title: '',
  name: 'Summer Cook',
  subtitle: '',
  cta: '',
  img: 'hero.jpeg'
}; // ABOUT DATA

exports.heroData = heroData;
var aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'After years of working for marketing agencies and creating websites with templates, I realized I was always intrigued by code and felt driven to take my knowledge a step further.  I finally made the leap & committed to an immersive Full Stack Web Development bootcamp, LEARN Academy.',
  paragraphTwo: 'My favorite things about being a developer are the constant opportunity to push the limits of my knowledge & the ability to learn something unique every day. I have worked in client-facing roles, and I know the importance of delivering results that captivate the end user. My branding and design background drives my interest in creating satisfying user experiences & beautifying the front end of applications.',
  paragraphThree: ' My dream is to keep learning & growing as a developer by applying my knowledge in a challenging, collaborative role at a company that supports continual growth. Feel free to reach out to me to connect! ',
  resume: '/SummerCookDeveloper.pdf' // if no resume, the button will not show up

}; // PROJECTS DATA

exports.aboutData = aboutData;
var projectsData = [{
  id: (0, _nanoid.nanoid)(),
  img: 'hotaliens.png',
  title: 'Alien Tinder',
  info: 'Full-stack app built with a React front-end and Ruby-on-Rails back-end, deployed on Heroku. Styled with bootstrap & custom CSS, graphics created on Canva.',
  info2: 'CRUD functionality makes it possible to see, add, update, & delete alien "matches" from a database.',
  url: 'https://alien-tinder.herokuapp.com/',
  repo: 'https://github.com/summer-cook/alien-tinder' // if no repo, the button will not show up

}, {
  id: (0, _nanoid.nanoid)(),
  img: 'doggorandomizer.png',
  title: 'Doggo Randomizer',
  info: 'React.js app initialized with create-react-app and deployed on Netlify.',
  info2: 'Written in Javascript/React and custom CSS. Fetches dog images from an external API by dogCEO.com.',
  url: 'https://doggorandomizer.netlify.app/',
  repo: 'https://github.com/summer-cook/dog-randomizer' // if no repo, the button will not show up

}, {
  id: (0, _nanoid.nanoid)(),
  img: 'project.jpg',
  title: 'Wildlife Tracker App',
  info: 'Backend API built with Ruby-on-Rails. Allows the user to track sightings of endangered species of the Pacific Northwest region. Full CRUD functionality. ',
  info2: 'Includes tests for each RESTful route written with RSPEC. (This photo was taken by me in North Cascades National Park, and I found it fitting! ☺ )',
  url: 'https://github.com/summer-cook/wildlife-tracker-summer-cook',
  repo: '' // if no repo, the button will not show up

}, {
  id: (0, _nanoid.nanoid)(),
  img: 'bareandbee.png',
  title: 'Bare & Bee Brand Reboot',
  info: 'Web design & branding project for a Esthetics business in Del Mar, CA.',
  info2: 'Process included client interviews/current brand audit, photoshoots, social media aesthetics, web design with Squarespace and an integration with Square to provide increased brand cohesiveness.',
  url: 'https://www.bareandbee.com/',
  repo: '' // if no repo, the button will not show up

}, {
  id: (0, _nanoid.nanoid)(),
  img: 'monadella.png',
  title: 'Monadella Investments Website',
  info: 'Web design project for a Boutique Real Estate Syndication firm. Designed with Divi theme on Wordpress.',
  info2: '',
  url: 'https://monadellainvestments.com/',
  repo: '' // if no repo, the button will not show up

}]; // CONTACT DATA

exports.projectsData = projectsData;
var contactData = {
  cta: '',
  btn: 'Email Me',
  email: 'summercook.dev@gmail.com'
}; // FOOTER DATA

exports.contactData = contactData;
var footerData = {
  networks: [// {
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
    id: (0, _nanoid.nanoid)(),
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/summbc/'
  }, {
    id: (0, _nanoid.nanoid)(),
    name: 'github',
    url: 'https://github.com/summer-cook'
  }]
}; // Github start/fork buttons

exports.footerData = footerData;
var githubButtons = {
  isEnabled: false // set to false to disable the GitHub stars/fork buttons

};
exports.githubButtons = githubButtons;