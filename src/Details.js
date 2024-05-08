// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.png";
import logo from "./assets/logo2.png";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";
import projectImage7 from "./assets/projects/project7.jpg";
import projectImage8 from "./assets/projects/project8.jpg";
import projectImage9 from "./assets/projects/project9.jpg";
import projectImage10 from "./assets/projects/project10.jpg";
import projectImage11 from "./assets/projects/project11.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Jagdeep",
  tagline:
    "Enthusiastic Full Stack Web Developer seeking co-ops and internships.",
  img: profile,
  about: `I am an aspiring Full Stack Web Developer currently pursuing a Bachelor's degree in Computing Science at Simon Fraser University. With a strong foundation in computer science and practical experience in software development, I bring proficiency in JavaScript, Python, React, Node.js, and more to the table. Eager to apply my skills and gain real-world experience, I am actively seeking internships and co-op opportunities where I can contribute meaningfully to innovative projects and continue my learning journey.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/jagdeepminhas/",
  github: "https://github.com/JagdeepMinhas",
  twitter: "https://twitter.com/Jagdeep78786167",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Software Devloper (Student-contract)",
    Company: `Velocity Tech`,
    Location: "Toronto",
    Type: "Part-time",
    Duration: "Feb 2024 - May 2024",
  },
  {
    Position: "Computer Network Technician",
    Company: `Skynet Wireless`,
    Location: "Langley",
    Type: "Full-time",
    Duration: "Sep 2019 - Feb 2022",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "BSc in Computer Science",
    Company: "Simon Fraser University",
    Location: "Burnaby",
    Type: "Full Time",
    Duration: "May 2022 - May 2025 (Expected)",
  },
  {
    Position: "Associate of Science: Computer Science",
    Company: `Langara College`,
    Location: "Vancouver",
    Type: "Full Time",
    Duration: "Sep 2017 - Sep 2019",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Edu-FlashCard App",
    image: projectImage1,
    description: `Simplify learning with flashcards, turning lessons into engaging games, and organize by subject for easy access.`,
    techstack: "Node.js, Express,js, React, MongoDB, GCP, Redis cloud",
    previewLink: "https://google.com",
    githubLink: "https://github.com/Sajantoor/cmpt474-project",
  },
  {
    title: "Recipe-app",
    image: projectImage2,
    description: `Dive into culinary creativity with DishCraft's sleek recipe app, featuring seamless CRUD functionality for effortless recipe management.`,
    techstack: "Node.js, Express,js, React, PostgreSQL, Docker",
    previewLink: "https://google.com",
    githubLink: "https://github.com/JagdeepMinhas/DishCraft/tree/master",
  },
  {
    title: "TradeTrove",
    image: projectImage3,
    description: `Empower your trades journey with TradeTrove, a dynamic web platform connecting users with trusted tradespeople for hassle-free service engagement.`,
    techstack:
      "Node.js, Express,js, React, Tailwind, PostgreSQL, GCP, Firebase",
    previewLink: "https://google.com",
    githubLink: "https://github.com/JagdeepMinhas/DishCraft",
  },
  {
    title: "CShell: CLI",
    image: projectImage4,
    description: `Unleash command-line efficiency with our Cshell Interpreter, featuring interactive and script modes, seamless process management, and robust system call integration.`,
    techstack: "Built in C utilizing multithreading",
    previewLink: "https://google.com",
    githubLink:
      "https://github.com/JagdeepMinhas/Cshell-Command-Line-Interpreter",
  },
  {
    title: "MuliThreadedAudio-mixer",
    image: projectImage5,
    description: `Harness the power of "myChannels," a dynamic multi-threaded mixer, for seamless aggregation and processing of audio data from multiple channels, ensuring efficiency, integrity, and precision.`,
    techstack: "Built in C utilizing multithreading and locks",
    previewLink: "https://google.com",
    githubLink: "https://github.com/JagdeepMinhas/ThreadedAudio-Mixer",
  },
  {
    title: "Classification Project",
    image: projectImage6,
    description: `Empower your projects with a versatile suite featuring diverse classifiers tailored for OCR and behavioral cloning, achieving competitive accuracy through expertly curated datasets, innovative preprocessing, and model optimization techniques`,
    techstack: "Python, NumpPy,",
    previewLink: "https://google.com",
    githubLink: "https://github.com/JagdeepMinhas/Classification-Project",
  },
  {
    title: "9MenMorris",
    image: projectImage7,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "Python, NumpPy",
    previewLink: "https://google.com",
    githubLink: "https://github.com/JagdeepMinhas/9MenMorris",
  },
  {
    title: "SweepAI: Intelligent Cleaning System",
    image: projectImage8,
    description: `SweepAI: 2D Grid Cleaning Game}: Dive into a cleaning adventure with our innovative 2D grid game, where you guide an intelligent agent through dynamic environments, optimizing cleaning efficiency using advanced search algorithms and intuitive visualization features.`,
    techstack: "Python, NumpPy",
    previewLink: "https://google.com",
    githubLink:
      "https://github.com/JagdeepMinhas/SweepAI-Intelligent-Cleaning-System",
  },
  {
    title: "Intrusion Detection System using R",
    image: projectImage9,
    description: `Engineered feature extraction for Hidden Markov models via Principal Component Analysis on electricity consumption data, optimizing data visualization and analysis for enhanced intrusion detection`,
    techstack: "R, Rstudio",
    previewLink: "https://google.com",
    githubLink:
      "https://github.com/JagdeepMinhas/Intrusion-Detection-system-Using-R",
  },
  {
    title: "Underwater Adventures: 2D Arcade Game",
    image: projectImage10,
    description: `Dive into our engaging 2D arcade game in Java, featuring captivating graphics and intuitive gameplay`,
    techstack: "Java widget toolkit, Maven",
    previewLink: "https://google.com",
    githubLink: "https://github.com/JagdeepMinhas/UnderwaterAdventures",
  },
  {
    title: "Deny and Conquer",
    image: projectImage11,
    description: `Engage in strategic multiplayer gameplay where users compete to conquer the most grids in this Java-based online gaming experience.`,
    techstack: "Java, Multithreading, Socket programming",
    previewLink: "https://google.com",
    githubLink: "https://github.com/EJNicolas/CMPT371-Project",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "jag_singh@sfu.ca",
  phone: "+1 (604)-961-8874",
};
