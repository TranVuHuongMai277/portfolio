const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Certifications",
    link: "#certifications",
  },
];

const BASE_URL = import.meta.env.BASE_URL;

const words = [
  { text: "Extendable", imgPath: `${BASE_URL}/images/ideas.svg` },
  { text: "Stable", imgPath: `${BASE_URL}/images/code.svg` },
  { text: "Reliability", imgPath: `${BASE_URL}/images/reliability.png` },
  { text: "Growth", imgPath: `${BASE_URL}/images/concepts.svg` },
  { text: "Extendable", imgPath: `${BASE_URL}/images/ideas.svg` },
  { text: "Stable", imgPath: `${BASE_URL}/images/code.svg` },
  { text: "Reliability", imgPath: `${BASE_URL}/images/reliability.png` },
  { text: "Growth", imgPath: `${BASE_URL}/images/concepts.svg` },
];

const counterItems = [
  { value: 50, suffix: "+", label: "Projects" },
  { value: 80, suffix: "+", label: "Stakeholders" },
  { value: 100, suffix: "+", label: "Datasets" },
  { value: 90, suffix: "%", label: "Manual Work Automated" },
];

const logoIconsList = [
  {
    imgPath: `${BASE_URL}/images/logos/company-logo-1.png`,
  },
  {
    imgPath: `${BASE_URL}/images/logos/company-logo-2.png`,
  },
  {
    imgPath: `${BASE_URL}/images/logos/company-logo-3.png`,
  },
  {
    imgPath: `${BASE_URL}/images/logos/company-logo-4.png`,
  },
  {
    imgPath: `${BASE_URL}/images/logos/company-logo-5.png`,
  },
  {
    imgPath: `${BASE_URL}/images/logos/company-logo-6.png`,
  },
  {
    imgPath: `${BASE_URL}/images/logos/company-logo-7.png`,
  },
  {
    imgPath: `${BASE_URL}/images/logos/company-logo-8.png`,
  },
  {
    imgPath: `${BASE_URL}/images/logos/company-logo-9.png`,
  },
  {
    imgPath: `${BASE_URL}/images/logos/company-logo-10.png`,
  },
  {
    imgPath: `${BASE_URL}/images/logos/company-logo-11.png`,
  },
];

const abilities = [
  {
    imgPath: `${BASE_URL}/images/seo.png`,
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: `${BASE_URL}/images/chat.png`,
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: `${BASE_URL}/images/time.png`,
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: `${BASE_URL}/images/logos/react.png`,
  },
  {
    name: "Python Developer",
    imgPath: `${BASE_URL}/images/logos/python.svg`,
  },
  {
    name: "Backend Developer",
    imgPath: `${BASE_URL}/images/logos/node.png`,
  },
  {
    name: "Interactive Developer",
    imgPath: `${BASE_URL}/images/logos/three.png`,
  },
  {
    name: "Project Manager",
    imgPath: `${BASE_URL}/images/logos/git.svg`,
  },
];

const techStackIcons = [
  {
    name: "Python",
    modelPath: `${BASE_URL}/models/python-transformed.glb`,
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "NodeJs",
    modelPath: `${BASE_URL}/models/node-transformed.glb`,
    scale: 4.6,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Java",
    modelPath: `${BASE_URL}/models/java.glb`,
    scale: 1.4,
    rotation: [0, 0, 0],
  },
  {
    name: "Advanced SQL",
    modelPath: `${BASE_URL}/models/sql.glb`,
    scale: 5,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "Git",
    modelPath: `${BASE_URL}/models/git.glb`,
    scale: 0.7,
    rotation: [0, 0, 0],
  },
];

const expCards = [
  {
    review:
      "Hải brings strong analytical thinking and solid technical expertise to Affina, contributing to improved data quality and optimized reporting performance. As an Analytics Engineer, he focuses on building and standardizing scalable data models, ensuring accurate and reliable datasets that effectively support business decision-making. ",
    imgPath: `${BASE_URL}/images/rikkei.png`,
    logoPath: `${BASE_URL}/images/logo.png`,
    title: "Analytics Engineer",
    date: "April 2025 - Present",
    responsibilities: [
      "Design, build, and maintain scalable data models and ELT pipelines to ensure reliable and well-structured datasets.",
      "Transform raw data into clean, validated, and business-ready insights to support reporting and decision-making.",
      "Collaborate with stakeholders to define data requirements, improve data quality, and optimize analytics performance.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: `${BASE_URL}/images/logo1.png`,
  },
  {
    name: "logo2",
    imgPath: `${BASE_URL}/images/logo2.png`,
  },
  {
    name: "logo3",
    imgPath: `${BASE_URL}/images/logo3.png`,
  },
];

const certifications = [
  {
    title: "B2 APTIS Certificate",
    issuer: "British Council",
    date: "2025",
    imgPath: `${BASE_URL}/images/aptis.png`,
    description: "English Language Proficiency",
  },
  {
    title: "SQL Certificate - HackerRank",
    issuer: "Professional SQL Developer",
    date: "2025",
    imgPath: `${BASE_URL}/images/sql.webp`,
    description: "Database Management & Query Optimization",
  },
  // {
  //   title: "Power BI Certificate - IBEP",
  //   issuer: "Microsoft Power BI",
  //   date: "2024",
  //   imgPath: `${BASE_URL}/images/powerbi.jpg`,
  //   description: "Data Visualization & Business Intelligence",
  // },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/__iamgnouh/",
    imgPath: `${BASE_URL}/images/instagram.jpg`,
  },
  {
    name: "fb",
    url: "https://chat.zalo.me/",
    imgPath: `${BASE_URL}/images/zalo.png`,
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/huongmai.277?mibextid=wwXIfr&rdid=lbbLYNCMS4rkM3sh&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ApEXX7zDg%2F%3Fmibextid%3DwwXIfr",
    imgPath: `${BASE_URL}/images/facebook.jpg`,
  },
  // {
  //   name: "linkedin",
  //   url: "https://github.com/Marcus0175",
  //   imgPath: `${BASE_URL}/images/github.jpg`,
  // },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  certifications,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
