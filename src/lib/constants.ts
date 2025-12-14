import {
  SiJavascript,
  SiPython,
  SiReact,
  SiSocketdotio,
  SiNextdotjs,
  SiAstro,
  SiTailwindcss,
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiFigma,
  SiOpencv,
  SiNodedotjs,
  SiHono,
  SiTrpc,
  SiExpo,
  SiPrisma,
  SiDrizzle,
  SiSupabase,
  SiFirebase,
  SiTurborepo,
  SiHoppscotch,
  SiGithubactions,
  SiRoboflow,
  SiVercel,
  SiNetlify,
  SiRender,
  SiCloudflare,
  SiTwilio,
  SiArduino,
  SiRaspberrypi,
  SiTypescript,
  SiStreamlit,
  SiShadcnui,
  SiFramework,
  SiFramer,
  SiJekyll,
  SiPostgresql,
  SiJsonwebtokens,
  SiVite,
  SiChainlink,
  SiTensorflow,
  SiCss3,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiGit,
  SiHtml5,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiLangchain,
  SiAmazonwebservices,
  SiGooglecloud,
  SiGooglecolab,
  SiFacebook,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";
import {
  FaBrain,
  FaFileAlt,
  FaGlobe,
  FaLayerGroup,
  FaServer,
} from "react-icons/fa";
import { HiMiniCpuChip, HiMiniCommandLine } from "react-icons/hi2";
import { image } from "framer-motion/client";

export const SITE_CONFIG = {
  title: "Rishi Kapadia — Developer | Builder | Problem Solver",
  author: "Rishi Kapadia",
  description:
    "Full-stack developer passionate about building fast, intuitive digital experiences. I blend strong fundamentals in web development, AI, and core CS concepts to craft impactful products—from scalable MERN apps to intelligent tools powered by automation and LLMs.",
  lang: "en",
  siteLogo: "/logo.svg",
  socialLinks: [
    {
      text: "Resume",
      href: "/projects/cv_therishikapadia1.pdf",
      download:"Rishi_Kapadia_CV.pdf",
      icon: FaFileAlt,
    },
    {
      text: "Github",
      href: "https://github.com/therishikapadia/",
      icon: SiGithub,
    },
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/therishikapadia/",
      icon: SiLinkedin,
    },
    {
      text: "Instagram",
      href: "https://www.instagram.com/therishikapadia/",
      icon: SiInstagram,
    },
  ],
  socialImage: "/og.webp",
  canonicalURL: "",
  contact: {
    email: "rishikapadia05@gmail.com",
    cal_link: "",
  },
};

export const SITE_CONTENT = {
  hero: {
    name: "Rishi Kapadia",
    specialty: [
  "AI Enthusiast","Backend Developer","Problem-solver"
    ],
    summary: `
      Full-stack developer, backend-focused, AI-curious, practical and product-oriented.
    `,
    currentWork: "",
    location: "Ahmedabad, Gujarat",
    image: "https://github.com/therishikapadia.png?v=2",
  },
  skills: {
  languages: [
    { name: "JavaScript", icon: SiJavascript },
    { name: "Python", icon: SiPython },
    { name: "SQL", icon: SiMysql },
  ],

  libraries: [
    { name: "React", icon: SiReact },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Socket.IO Client", icon: SiSocketdotio },
    { name: "LangChain", icon: SiLangchain },
    { name: "Tesseract OCR", icon: SiTensorflow }, // closest icon
  ],

  frameworks: [
    { name: "Express.js", icon: SiExpress },
    { name: "Next.js", icon: SiNextdotjs },
    {name : "React.js",icon:SiReact},
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Django", icon: SiDjango },
    { name: "Flask", icon: SiFlask },
    { name: "FastAPI", icon: SiFastapi },
  ],

  databases: [
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
  ],

  tools: [
    { name: "Docker", icon: SiDocker },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Postman", icon: SiPostman },
    { name: "Github Actions", icon: SiGithubactions },
  ],

  platforms: [
    { name: "AWS", icon: SiAmazonwebservices },
    { name: "GCP", icon: SiGooglecloud },
    { name: "Colab", icon: SiGooglecolab },
    {name:"Vercel", icon :SiVercel},
    {name:"Netlify", icon:SiNetlify}
  ],
}

,

  education: [
    {
      name: "LJ Institute of Engineering & Technology",
      location: "Ahmedabad, Gujarat, India",
      position: "B.E in Computer Science & Engineering",
      start: "August 2024",
      end: "Expected 2027",
      link: "https://ljku.edu.in/",
      logo: "https://ljku.edu.in/web/image/res.company/1/logo",
    },
    {
      name: "LJ University",
      location: "Ahmedabad, Gujarat, India",
      position: "Diploma in Computer Engineering",
      start: "August 2021",
      end: "May 2024",
      link: "https://ljku.edu.in/",
      logo: "https://ljku.edu.in/web/image/res.company/1/logo",
    },
  ],
  categories: [
    { value: "all", label: "All", icon: FaLayerGroup },
    { value: "frontend", label: "Frontend", icon: FaGlobe },
    { value: "backend", label: "Backend", icon: FaServer },
    { value: "genai", label: "GenAI", icon: FaBrain },

  ],
  projects: [
    {
      name: "WordWars",
      description:
        "Real-time multiplayer word battle game with chat, lobbies, and fast-paced competitive gameplay built using Socket.IO.",
      category: ["Frontend", "Backend"],
      image: "/projects/Ww.png",
      url: "https://github.com/therishikapadia/WordWars",
      hosted_url: "",
      technologies: [
        { name: "Flask", icon: SiFlask },
        { name: "React", icon: SiReact },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Framer Motion", icon: SiFramer },
        { name: "Shadcn/UI", icon: SiShadcnui },
      ],
    },
    {
      name: "NutriMind",
      description:
        "NutriMind uses AI to analyze food ingredients and provide personalized, allergy-aware nutrition safety recommendations.",
      category: ["Frontend", "Backend", "GenAI"],
      image: "/projects/hero.png",
      url: "https://github.com/therishikapadia/Extract",
      hosted_url: "",
      technologies: [
        { name: "LangChain", icon: SiLangchain },
        { name: "Django", icon: SiDjango },
        { name: "PostgreSQL", icon: SiPostgresql   },
        { name: "React", icon: SiReact },
      ],
    },
    {
      name: "AttendEase",
      description:
      "Smart attendance management system enabling seamless tracking, authentication, analytics, and streamlined workflows for institutions and teams.",
      category: "Frontend",
      image: "/projects/image.png",
      url: "https://github.com/therishikapadia/AttendEase",
      hosted_url: "",
      technologies: [
        { name: "React", icon: SiReact },
        { name: "Flask", icon: SiFlask },
        { name: "MongoDB", icon: SiMongodb },
      ],
    },
    {
      name: "AI-Powered Doc Retrieval & Q&A System",
      description:
        "Intelligent system that retrieves documents and answers queries using embeddings, vector search, and LLM reasoning.",
      category: ["Frontend", "Backend", "GenAI"],
      image: "",
      url: "https://github.com/therishikapadia/RAG",
      hosted_url: "",
      technologies: [
        { name: "FAISS", icon: SiFacebook },
        { name: "Streamlit", icon: SiStreamlit },
      ],
    },
  ],
};
