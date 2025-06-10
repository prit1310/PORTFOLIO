export const projects = [
  {
    id: "1",
    title: "TechXtreme2k25",
    description:
      "I lead the development of the official website for TechXtreme, Gandhinagar University’s national-level tech fest. The site was designed to showcase events, manage registrations, and provide all key information in a clean, responsive layout. As the project lead, I oversaw the entire development process—from design to deployment—ensuring timely delivery and smooth user experience.",
    technologies: [
      "Next.js",
      "PostgreSQL",
      "Tailwind CSS",
      "VPS Server",
      "Docker",
    ],
    image: "/projects/7.png",
    liveUrl: "https://techxtreme.gu-tech.org/",
    githubUrl: "",
    featured: true,
    category: "Full Stack",
  },
  {
    id: "2",
    title: "InstaBook",
    description:
      "Instabook is a social media app built with React.js and Firebase,similar to Instagram. It allows users to sign up, share photos, follow friends, chat, and see real-time updates, all in a simple and easy-touse interface.",
    technologies: [
      "React.js",
      "Firebase",
      "Tailwind CSS",
      "Redux",
      "Framer Motion",
    ],
    image: "/projects/2.png",
    liveUrl: "https://social-instabook.netlify.app",
    githubUrl:
      "https://github.com/prit1310/social-media",
    featured: true,
    category: "Frontend",
  },
  {
    id: "3",
    title: "Expense tracker",
    description:
      "I developed a user-friendly Expense Tracker web app using React and Firebase, allowing real-time tracking and management of expenses with ease.",
    technologies: [
      "React.js",
      "Firebase",
      "Tailwind CSS",
      "Redux",
      "Framer Motion",
    ],
    image: "/projects/3.png",
    liveUrl: "https://expensetrakerdemo.netlify.app",
    githubUrl: "https://github.com/prit1310/expenseTracker",
    featured: false,
    category: "Frontend",
  },
  {
    id: "4",
    title: "Senjaliya Solutions",
    description:
      "Senjaliya Solutions is a web platform built using the MERN stack, providing innovative technical solutions with a user-friendly interface, scalable back-end, and secure data management.",
    technologies: ["Node.js", "MongoDB", "React.js", "Tailwind CSS", "Render"],
    image: "/projects/4.png",
    liveUrl: "https://senjaliyatechnical-izls.onrender.com/",
    githubUrl: "https://github.com/prit1310/senjaliyatechnical",
    featured: true,
    category: "Full Stack",
  },
  {
    id: "5",
    title: "Job Portal",
    description:
      "Job Portal is a full-stack web application designed to bridge the gap between job seekers and employers. It allows users to post jobs, search for opportunities.",
    technologies: ["Node.js", "Tailwind CSS", "Framer Motion", "Render", "MongoDB"],
    image: "/projects/5.png",
    liveUrl: "https://job-portal-h7sp.onrender.com/",
    githubUrl: "https://github.com/prit1310/job_portal",
    featured: false,
    category: "Full Stack",
  },
  {
    id: "6",
    title: "QR Generator",
    description:
      "This project simplifies product purchases by generating a QR code that contains detailed product information along with step-by-step payment instructions.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
    ],
    image: "/projects/6.png",
    liveUrl: "https://qr-genrator.onrender.com/",
    githubUrl: "https://github.com/prit1310/QR_Genrator",
    featured: true,
    category: "Full Stack",
  },
  {
    id: "7",
    title: "QuizMaker",
    description:
      "Quiz Maker is a user-friendly web application built with the MERN stack. It lets users easily create, manage, and take quizzes, providing a smooth and seamless experience.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "/projects/1.png",
    liveUrl: "https://quiz-maker-57t4.onrender.com/",
    githubUrl: "https://github.com/prit1310/Quiz-Maker",
    featured: true,
    category: "Full Stack",
  },
];

export const skills = [
  {
    name: "React",
    category: "Frontend",
    icon: "FaReact",
    color: "from-blue-400 to-blue-600", // React blue
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: "SiNextdotjs",
    color: "from-gray-900 to-black", // Next.js black
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: "FaNodeJs",
    color: "from-green-400 to-green-600", // Node.js green
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: "SiMongodb",
    color: "from-green-600 to-green-800", // MongoDB dark green
  },
  {
    name: "TypeScript",
    category: "Language",
    icon: "SiTypescript",
    color: "from-blue-600 to-blue-800", // TypeScript blue
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: "SiTailwindcss",
    color: "from-cyan-400 to-cyan-600", // Tailwind cyan
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: "SiPostgresql",
    color: "from-blue-700 to-blue-900", // PostgreSQL navy-ish blue
  },
  {
    name: "VPS Server",
    category: "Cloud",
    icon: "FaServer",
    color: "from-orange-500 to-orange-700", // Orange server
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: "FaDocker",
    color: "from-blue-500 to-blue-700", // Docker blue
  },
  {
    name: "Git",
    category: "Tools",
    icon: "FaGitAlt",
    color: "from-red-500 to-red-700", // Git red
  },
  {
    name: "Firebase",
    category: "Backend",
    icon: "SiFirebase",
    color: "from-yellow-400 to-yellow-600", // Firebase yellow
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: "SiExpress",
    color: "from-gray-800 to-gray-900", // Express black/dark gray
  },
  {
    name: "GraphQL",
    category: "API",
    icon: "SiGraphql",
    color: "from-pink-500 to-pink-700", // GraphQL pink
  },
  {
    name: "Framer Motion",
    category: "Animation",
    icon: "SiFramer",
    color: "from-blue-600 to-blue-800", // Framer blue
  },
];

// export const testimonials = [
//   {
//     id: "1",
//     name: "Sarah son",
//     role: "Product Manager",
//     company: "Tech Innovations Inc.",
//     content:
//       " delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made the entire project seamless.",
//     avatar: "/placeholder.svg?height=80&width=80",
//     rating: 5,
//   },
//   {
//     id: "2",
//     name: "Michael Chen",
//     role: "CTO",
//     company: "Digital Solutions Ltd.",
//     content:
//       "Working with  was a game-changer for our startup. He built our entire web application from scratch and delivered it on time and within budget.",
//     avatar: "/placeholder.svg?height=80&width=80",
//     rating: 5,
//   },
//   {
//     id: "3",
//     name: "Emily Rodriguez",
//     role: "Design Director",
//     company: "Creative Agency",
//     content:
//       "'s ability to translate our designs into pixel-perfect, responsive websites is remarkable. He's our go-to developer for all frontend projects.",
//     avatar: "/placeholder.svg?height=80&width=80",
//     rating: 5,
//   },
// ];

export const personalInfo = {
  name: "Prit Senjaliya",
  title: "Full Stack Developer & Devops Engineer",
  bio: "I'm a passionate Full Stack Developer with over 2 years of experience creating digital solutions that make a difference. I love turning complex problems into simple, beautiful, and intuitive solutions.",
  location: "Ahmedabad, Gujrat , India",
  email: "pritsenjaliya1162@gmail.com",
  phone: "+91 99982 32047",
  website: "",
  experience: "2+",
  projectsCompleted: "15+",
  satisfactionRate: "100%",
  responseTime: "< 24h",
};
