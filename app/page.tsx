"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronUp,
  Download,
  Mail,
  Phone,
  Github,
  Linkedin,
  X,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Briefcase,
  Award,
  Code,
  Database,
  GitBranch,
  Cpu,
  Globe,
  Smartphone,
  ExternalLink,
  Star,
  Trophy,
  Calendar,
  MapPin,
  Zap,
} from "lucide-react"
import Image from "next/image"

// Types
interface Project {
  id: number
  title: string
  description: string
  techStack: string[]
  github: string
  images: string[]
  fullDescription: string
  keyFeatures: string[]
}

interface Education {
  id: number
  degree: string
  school: string
  period: string
  achievements: string
  logo: string
}

interface Experience {
  id: number
  position: string
  company: string
  period: string
  role: string
  logo: string
  description: string
}

interface Achievement {
  id: number
  title: string
  category: "course" | "seminar"
  image: string
  description: string
  date: string
  issuer: string
}

// Sample data with key features and more images
const projects: Project[] = [
  {
    id: 1,
    title: "EyeSee - Development of a Low-cost Lens System for Self-vision Assessment",
    description: "CPE406D (Thesis) - Practice and Design 2.",
    techStack: ["Raspberry Pi 4B", "DRV8825", "NEMA 17", "Python", "Tkinter GUI", "Firebase"],
    github: "https://github.com/mumphry/ecommerce-platform",
    images: [
      "/eye1.png?height=300&width=700&text=E-Commerce+Homepage",
      "/eye2.png?height=280&width=700&text=Product+Catalog+Grid",
      "/eye3.png?height=280&width=700&text=Product+Detail+Page",
      "/eye4.png?height=280&width=700&text=Shopping+Cart+View",
      "/eye5.png?height=280&width=700&text=Checkout+Process",
      "/eye6.png?height=280&width=700&text=User+Dashboard",
      "/eye7.png?height=280&width=700&text=Admin+Panel",
      "/eye8.png?height=280&width=700&text=Order+Management",
      "/eye9.png?height=280&width=700&text=Payment+Gateway",
      "/eye10.png?height=280&width=700&text=Mobile+Responsive",
    ],
    fullDescription:
      "EyeSee is a self-assessment lens system designed for low-cost vision testing in underserved communities. Built with a combination of software and hardware, the system allows users to rotate a set of trial lenses via a touchscreen interface powered by a Raspberry Pi. The platform offers a guided visual assessment process, stepper motor precision control, and real-time feedback for users who already know their eye grade. EyeSee is developed with accessibility and affordability in mind, especially for rural areas with limited access to optometric services.",
    keyFeatures: [
      "Low-Cost Vision Assessment System",
      "Addresses Uncorrected Refractive Errors",
      "Real-time Feedback and Adjustment Tracking",
      "Getting the Right and Left Eye Grade",
      "Detecting if Nearsighted or Farsighted",
      "Automatic Lens Disk Rotating",
      "Email and Print Output (Eye Grade)",
    ],
  },
  {
    id: 2,
    title: "BiyaHero - Your Boat Commutes Hero, Tracking at Zero",
    description: "CPE410 - Technopreneurship",
    techStack: ["Figma"],
    github: "https://github.com/mumphry/task-manager",
    images: [
      "/hero1.png?height=280&width=700&text=Task+Dashboard+Overview",
      "/hero2.png?height=280&width=700&text=Project+Management+Board",
      "/hero3.png?height=280&width=700&text=Team+Collaboration+View",
      "/hero4.png?height=280&width=700&text=Calendar+Integration",
      "/hero5.png?height=280&width=700&text=Progress+Tracking+Charts",
      "/hero6.png?height=280&width=700&text=Task+Details+Modal",
      "/hero7.png?height=280&width=700&text=Team+Member+Profiles",
      "/hero8.png?height=280&width=700&text=Notification+Center",
      "/hero9.png?height=280&width=700&text=File+Attachments",
      "/hero10.png?height=280&width=700&text=Mobile+App+View",
    ],
    fullDescription:
      "BiyaHero is a mobile and web-based application designed to provide real-time updates on boat seat availability and departure schedules, primarily for residents of Brgy. Pamarawan. It aims to make local boat commuting more efficient, organized, and accessible, especially in areas with limited transportation monitoring systems. The concept is scalable and adaptable for other terminals or remote transport hubs, addressing broader transportation issues in rural communities.",
    keyFeatures: [
      "Real-Time Seat Tracking",
      "Departure Alerts",
      "Terminal Overview",
      "Push Notifications",
      "Admin Dashboard",
      "Community-Focused Design",
    ],
  },
  {
    id: 3,
    title: "FitFusion - Where Sweat Meets Success!",
    description: "CPE312 - Elective1 and CPE315 - Elective2",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/mumphry/weather-dashboard",
    images: [
      "/pit1.png?height=280&width=700&text=Current+Weather+Display",
      "/pit2.png?height=280&width=700&text=7-Day+Forecast+Cards",
      "/pit3.png?height=280&width=700&text=Hourly+Weather+Chart",
      "/pit4.png?height=280&width=700&text=Interactive+Weather+Maps",
      "/pit5.png?height=280&width=700&text=Location+Search+Results",
      "/pit6.png?height=280&width=700&text=Weather+Alerts+Panel",
      "/pit7.png?height=280&width=700&text=Historical+Data+Graphs",
      "/pit8.png?height=280&width=700&text=Settings+Configuration",
      "/pit9.png?height=280&width=700&text=Dark+Mode+Theme",
      "/pit10.png?height=280&width=700&text=Dark+Mode+Theme",
      "/pit11.png?height=280&width=700&text=Dark+Mode+Theme",
      "/pit12.png?height=280&width=700&text=Dark+Mode+Theme",
      "/pit13.png?height=280&width=700&text=Dark+Mode+Theme",
      "/pit14.png?height=280&width=700&text=Dark+Mode+Theme",
      "/pit15.png?height=280&width=700&text=Dark+Mode+Theme",
      "/pit16.png?height=280&width=700&text=Dark+Mode+Theme",
    ],
    fullDescription:
      "FitFusion is a web-based gym management system designed to streamline operations of fitness centers. It handles membership management, staff tracking, workout plans, billing, and attendance monitoring — all in one centralized platform.",
    keyFeatures: [
      "Member Management",
      "Workout & Diet Plans",
      "Staff Management",
      "Payments & Billing",
      "Dashboard & Reports",
      "Authentication & User Roles",
      "Beautiful Data Visualizations",
      "Mobile-Responsive Design",
    ],
  },
  {
    id: 4,
    title: "8-Bit CPU Design",
    description: "CPE402/L - Computer Architechture and Organization",
    techStack: ["Logism"],
    github: "https://github.com/mumphry/social-dashboard",
    images: [
      "/log1.png?height=280&width=700&text=Analytics+Overview+Dashboard",
      "/log2.png?height=280&width=700&text=Engagement+Metrics+Charts",
      "/log3.png?height=280&width=700&text=Content+Calendar+View",
      "/log4.png?height=280&width=700&text=Audience+Demographics",
      "/log5.png?height=280&width=700&text=Performance+Reports",
      "/log6.png?height=280&width=700&text=Post+Scheduler+Interface",
      "/log7.png?height=280&width=700&text=Team+Management+Panel",
      "/log8.png?height=280&width=700&text=Social+Media+Feeds",
      "/log9.png?height=280&width=700&text=Custom+Dashboard+Builder",
      "/log10.png?height=280&width=700&text=Custom+Dashboard+Builder",
    ],
    fullDescription:
      "A complete 8-bit CPU architecture built and simulated in Logisim, featuring an Arithmetic Logic Unit (ALU), a Control Unit, and Random Access Memory (RAM) — all custom-designed to demonstrate the core functions of a basic processor.",
    keyFeatures: [
      "Arithmetic Logic Unit (ALU)",
      "Control Unit",
      "Random Access Memory (RAM)",
      "Clock & Timing System",
      "Instruction Set Architecture (ISA)",
      "Bus System",
      "Simulation & Debugging",
      "256B RAM",
    ],
  },
  {
    id: 5,
    title: "MapaChika - Connect and Share Your World",
    description: "CPE403 - Elective 3: Mobile App Development.",
    techStack: ["Flutterflow", "Firebase", "Google Map API"],
    github: "https://github.com/mumphry/portfolio",
    images: [
      "/map1.png?height=280&width=700&text=Hero+Section+Animation",
      "/map2.png?height=280&width=700&text=About+Me+Section",
      "/map3.png?height=280&width=700&text=Projects+Gallery+Grid",
      "/map4.png?height=280&width=700&text=Skills+Showcase",
      "/map5.png?height=280&width=700&text=Contact+Form+Design",
      "/map6.png?height=280&width=700&text=Dark+Light+Mode+Toggle",
    ],
    fullDescription:
      "MapaChika is a mobile application designed to combine real-time location sharing with instant messaging, helping users stay connected with friends on the move. Built with user convenience and privacy in mind, the app allows users to share their current location, chat in real time, and control their visibility on the map.",
    keyFeatures: [
      "Real-Time Location Sharing",
      "In-App Chat",
      "Location Visibility Control",
      "Dynamic Map Interface",
      "User Authentication",
      "Cross-Platform Ready",
    ],
  },
  {
    id: 6,
    title: "ENFIT: An Enhanced Tracking and Safety",
    description: "CPE304/L - Software Design.",
    techStack: ["Figma"],
    github: "https://github.com/mumphry/chat-app",
    images: [
      "/en1.png?height=280&width=700&text=Chat+Interface+Design",
      "/en2.png?height=280&width=700&text=Group+Chat+Management",
      "/en3.png?height=280&width=700&text=File+Sharing+System",
      "/en4.png?height=280&width=700&text=Voice+Message+Player",
      "/en5.png?height=280&width=700&text=User+Profile+Settings",
    ],
    fullDescription:
      "ENFIT is a simple UI/UX design prototype built using Figma, focused on improving tracking and personal safety per muscle part.",
    keyFeatures: [
      "Safety Exercises",
      "Tracking Exercises",
      "Prototype Interactions",
    ],
  },
  {
    id: 7,
    title: "E-IMS: Empowering Sari-Sari Stores with Efficient Inventory Control",
    description: "CPE206L - Data Structure and Algorithm",
    techStack: ["MySQL", "Java Swing"],
    github: "https://github.com/mumphry/expense-tracker",
    images: [
      "/ims1.png?height=280&width=700&text=Expense+Dashboard+Overview",
      "/ims2.png?height=280&width=700&text=Budget+Planning+Interface",
      "/ims3.png?height=280&width=700&text=Category+Analysis+Charts",
      "/ims4.png?height=280&width=700&text=Monthly+Reports+View",
      "/ims5.png?height=280&width=700&text=Goal+Tracking+Progress",
      "/ims6.png?height=280&width=700&text=Receipt+Scanner+Feature",
      "/ims7.png?height=280&width=700&text=Export+Data+Options",
      "/ims8.png?height=280&width=700&text=Spending+Trends+Graph",
      "/ims9.png?height=280&width=700&text=Budget+Alerts+System",
    ],
    fullDescription:
      "E-IMS (Electronic Inventory Management System) is a custom-built inventory management system developed for sari-sari store owners, specifically tailored to the real-world needs of small community retailers like Mrs. Evelyn Dela Cruz. The system empowers users to monitor stock levels, automate restocking, generate reports, and maintain sales records.. all through a user-friendly interface.",
    keyFeatures: [
      "Inventory Management",
      "Sales and Purchase Recording",
      "Reorder Point System",
      "User Interface and Usability",
      "Reporting and Analytics",
      "Data Security and Integrity",
    ],
  },
  {
    id: 8,
    title: "WordSpace: Just Do It, Just TYPE It",
    description: "CPE202L - Object Oriented Programming.",
    techStack: ["Python", "Pygame"],
    github: "https://github.com/mumphry/expense-tracker",
    images: [
      "/py1.png?height=280&width=700&text=Expense+Dashboard+Overview",
      "/py2.png?height=280&width=700&text=Budget+Planning+Interface",
      "/py3.png?height=280&width=700&text=Category+Analysis+Charts",
      "/py4.png?height=280&width=700&text=Monthly+Reports+View",
      "/py5.png?height=280&width=700&text=Goal+Tracking+Progress",
      "/py6.png?height=280&width=700&text=Receipt+Scanner+Feature",
      "/py7.png?height=280&width=700&text=Export+Data+Options",
      "/py8.png?height=280&width=700&text=Spending+Trends+Graph",
      "/py9.png?height=280&width=700&text=Budget+Alerts+System",
      "/py10.png?height=280&width=700&text=Expense+Dashboard+Overview",
      "/py11.png?height=280&width=700&text=Budget+Planning+Interface",
      "/py12.png?height=280&width=700&text=Category+Analysis+Charts",
      "/py13.png?height=280&width=700&text=Monthly+Reports+View",
      "/py14.png?height=280&width=700&text=Goal+Tracking+Progress",
      "/py15.png?height=280&width=700&text=Receipt+Scanner+Feature",
      "/py16.png?height=280&width=700&text=Export+Data+Options",
      "/py17.png?height=280&width=700&text=Spending+Trends+Graph",
      "/py18.png?height=280&width=700&text=Budget+Alerts+System",
    ],
    fullDescription:
      "WordSpace is an offline, galaxy-themed, fixed shooter typing game developed using Pygame. As a keyboard warrior, the player must defend the galaxy by typing enemy words, triggering the spaceship to fire projectiles and eliminate threats. With immersive gameplay and educational value, the game aims to make typing practice fun, interactive, and skill-enhancing.",
    keyFeatures: [
      "Adventure Mode",
      "Speed Mode",
      "Practice Mode",
      "In-Game Shop",
      "Game Controls",
      "Typing-Based Mechanics",
    ],
  },
  {
    id: 9,
    title: "ResQ: A New Way to Review",
    description: "CPE104L - Programming Logic and Design.",
    techStack: ["C++"],
    github: "https://github.com/mumphry/fitness-tracker",
    images: [
      "/c1.png?height=280&width=700&text=Workout+Dashboard+Stats",
      "/c2.png?height=280&width=700&text=Exercise+Library+Grid",
      "/c3.png?height=280&width=700&text=Progress+Tracking+Charts",
      "/c4.png?height=280&width=700&text=Nutrition+Log+Interface",
      "/c5.png?height=280&width=700&text=Goal+Setting+Panel",
      "/c6.png?height=280&width=700&text=Social+Features+Feed",
      "/c7.png?height=280&width=700&text=Wearable+Device+Sync",
      "/c8.png?height=280&width=700&text=Workout+Timer+Screen",
      "/c9.png?height=280&width=700&text=Achievement+Badges",
      "/c10.png?height=280&width=700&text=Weekly+Progress+Report",
      "/c11.png?height=280&width=700&text=Weekly+Progress+Report",
    ],
    fullDescription:
      "ResQ is a reviewer and quiz-maker desktop application developed in C++ that helps students reinforce learning using the Self-Test method, proven effective for memory recall. Designed as a virtual study buddy, ResQ allows users to convert review notes into quizzes and track exam schedules for organized preparation.",
    keyFeatures: [
      "Exam Schedule Monitor",
      "Create & View Reviewers",
      "Reviewer to Quiz Maker",
    ],
  },
]

const educationData: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Engineering",
    school: "Bulacan State University - Main",
    period: "2024 - 2025",
    achievements: "GWA: 1.53",
    logo: "/bulsu.jpg?height=60&width=60&text=BSU",
  },
  {
    id: 2,
    degree: "Science, Technology, Engineering, and Mathematics (STEM)",
    school: "Sta. Lucia National High School",
    period: "2019 - 2021",
    achievements: "Valedictorian with High Honor",
    logo: "/lucia.jpg?height=60&width=60&text=SLNHS",
  },
  {
    id: 3,
    degree: "Junior High School",
    school: "Sta. Lucia National High School",
    period: "2014 - 2019",
    achievements: "with High Honor",
    logo: "/lucia.jpg?height=60&width=60&text=SLNHS",
  },
  {
    id: 4,
    degree: "Elementary",
    school: "Bulusan Elementary School",
    period: "2008 - 2014",
    achievements: "1st Honorable Mention",
    logo: "/bulusan.jpg?height=60&width=60&text=BES",
  },
]

const experienceData: Experience[] = [
  {
    id: 1,
    position: "Database Administrator - IT Support",
    company: "Allied Care Experts (ACE) Malolos Doctors",
    period: "June 2024 - July 2024",
    role: "Intern",
    logo: "/ace.png?height=60&width=60&text=ACE",
    description: "Managed database systems and provided IT support for healthcare operations.",
  },
  {
    id: 2,
    position: "Marketing Assistant - Graphic Designer",
    company: "Allied Care Experts (ACE) Malolos Doctors",
    period: "August 2024 - October 2024",
    role: "Part time",
    logo: "/ace.png?height=60&width=60&text=ACE",
    description: "Created marketing materials and designed graphics for healthcare campaigns.",
  },
]

const achievements: Achievement[] = [
  // Online Courses
  {
    id: 1,
    title: "Information Representation and Data Organization",
    category: "course",
    image: "/co1.png?height=300&width=400&text=React+Certificate",
    description: "This course introduces the concepts of information anddata, the way they are represented and organized in acomputer system, along with basic knowledgepresented through engaging real-life cases.",
    date: "2025",
    issuer: "Huawei Academy",
  },
  {
    id: 2,
    title: "Overview of AI",
    category: "course",
    image: "/co2.png?height=300&width=400&text=JS+Certificate",
    description: "This course introduces the fundamentals of AI, coveringthe founding and history of AI, schools of thought, majortechnical trends, as well as controversies and prospects.This course is engaging and uses vivid real-life examples.",
    date: "2024",
    issuer: "Huawei Academy",
  },
  {
    id: 3,
    title: "Ethical Hacker",
    category: "course",
    image: "/co3.png?height=300&width=400&text=Node+Certificate",
    description: "This course is designed to prepare with an Ethical Hacker skillset and give a solid understanding of offensive security. You will become proficient in the art of scoping, executing, and reporting on vulnerability assessments, while recommending mitigation strategies.",
    date: "2024",
    issuer: "Cisco Network Academy",
  },

  // Seminars and Training
  {
    id: 6,
    title: "Tech Innovation Summit 2024",
    category: "seminar",
    image: "/sem10.png?height=300&width=400&text=Tech+Summit",
    description: "Technology innovation trends and future developments in software engineering",
    date: "2024",
    issuer: "Tech Conference",
  },
  {
    id: 7,
    title: "Cybersecurity Awareness Training",
    category: "seminar",
    image: "/sem9.png?height=300&width=400&text=Cybersecurity",
    description: "Cybersecurity best practices and threat prevention strategies",
    date: "2024",
    issuer: "Security Institute",
  },
  {
    id: 8,
    title: "Agile Development Workshop",
    category: "seminar",
    image: "/sem8.png?height=300&width=400&text=Agile+Workshop",
    description: "Agile methodology, Scrum practices, and team collaboration techniques",
    date: "2023",
    issuer: "Agile Alliance",
  },
  {
    id: 9,
    title: "Cloud Computing Fundamentals",
    category: "seminar",
    image: "/sem7.png?height=300&width=400&text=Cloud+Computing",
    description: "Cloud computing concepts, services, and deployment strategies",
    date: "2023",
    issuer: "Cloud Academy",
  },
  {
    id: 10,
    title: "Mobile App Development Bootcamp",
    category: "seminar",
    image: "/sem6.png?height=300&width=400&text=Mobile+Dev",
    description: "Mobile application development for iOS and Android platforms",
    date: "2024",
    issuer: "Mobile Institute",
  },
  {
    id: 11,
    title: "Data Science Workshop",
    category: "seminar",
    image: "/sem5.png?height=300&width=400&text=Data+Science",
    description: "Data science methodologies, machine learning, and analytics",
    date: "2023",
    issuer: "Data Science Hub",
  },
  {
    id: 12,
    title: "Web Security Best Practices",
    category: "seminar",
    image: "/sem4.png?height=300&width=400&text=Web+Security",
    description: "Web application security, vulnerability assessment, and protection strategies",
    date: "2024",
    issuer: "Security Conference",
  },
  {
    id: 13,
    title: "DevOps Implementation Training",
    category: "seminar",
    image: "/sem3.png?height=300&width=400&text=DevOps",
    description: "DevOps practices, CI/CD pipelines, and automation tools",
    date: "2023",
    issuer: "DevOps Institute",
  },
  {
    id: 14,
    title: "THRIVING UNDER PRESSURE: The Art of Managing Time and Stress in a Fast-Paced World",
    category: "seminar",
    image: "/sem2.png?height=300&width=400&text=AI+ML",
    date: "2025",
    issuer: "Event Organizer",
  },
  {
    id: 15,
    title: "LEADING WITH IMPACT: Strategies for Inspiring and Engaging Teams",
    category: "seminar",
    image: "/sem1.png?height=300&width=400&text=Blockchain",
    date: "2025",
    issuer: "Event Organizer",
  },
]

const skills = [
  { name: "C++", icon: Cpu, color: "from-blue-500 via-purple-500 to-indigo-600", description: "Systems programming" },
  { name: "Python", icon: Code, color: "from-green-500 via-emerald-500 to-teal-600", description: "Data science & AI" },
  { name: "Java", icon: Cpu, color: "from-orange-500 via-red-500 to-pink-600", description: "Enterprise applications" },
  { name: "HTML", icon: Globe, color: "from-orange-500 via-amber-500 to-yellow-600", description: "Web structure" },
  { name: "CSS", icon: Globe, color: "from-blue-500 via-indigo-500 to-purple-600", description: "Web styling" },
  {
    name: "JavaScript",
    icon: Code,
    color: "from-yellow-500 via-orange-500 to-red-600",
    description: "Web interactivity",
  },
  {
    name: "FlutterFlow",
    icon: Smartphone,
    color: "from-blue-400 via-cyan-500 to-teal-600",
    description: "Mobile development",
  },
  { name: "Git", icon: GitBranch, color: "from-gray-600 via-slate-700 to-gray-800", description: "Version control" },
  { name: "GitHub", icon: Github, color: "from-gray-700 via-gray-800 to-black", description: "Code collaboration" },
  {
    name: "MySQL",
    icon: Database,
    color: "from-blue-600 via-cyan-600 to-teal-700",
    description: "Database management",
  },
]

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true) // DEFAULT TO DARK MODE
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [projectScrollPosition, setProjectScrollPosition] = useState(0)
  const [showAnimeProfile, setShowAnimeProfile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setProjectScrollPosition((prev) => (prev + 1) % projects.length)
    }, 1500) // Faster carousel - reduced from 3000ms to 1500ms
    return () => clearInterval(interval)
  }, [])

  // Apply theme to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  // Anime profile animation - more frequent and visible
  useEffect(() => {
    const interval = setInterval(() => {
      setShowAnimeProfile(true)
      setTimeout(() => {
        setShowAnimeProfile(false)
      }, 5000) // Show anime for 5 seconds
    }, 10000) // Cycle every 10 seconds (more frequent)
    return () => clearInterval(interval)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length)
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length)
    }
  }

  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    setActiveModal("project-detail")
  }

  const openGmailCompose = () => {
    const email = "murphycaparas@gmail.com"
    const subject = "Hello from your portfolio!"
    const body = "Hi Mumphry,\n\nI visited your portfolio and would like to connect with you.\n\nBest regards,"

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(gmailUrl, "_blank")
  }

  const SkillIcon = ({ skill, index }: { skill: (typeof skills)[0]; index: number }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
      <div className="relative group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <motion.div
          whileHover={{ scale: 1.05, rotateY: 5 }}
          className={`relative p-8 rounded-3xl bg-gradient-to-br ${skill.color} backdrop-blur-sm border border-white/20 shadow-2xl overflow-hidden transition-all duration-300`}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8" />
          </div>

          <div className="relative z-10">
            <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }} className="mb-4">
              <skill.icon className="w-10 h-10 text-white mx-auto drop-shadow-lg" />
            </motion.div>

            <h3 className="text-white text-lg font-bold text-center mb-2">{skill.name}</h3>
            <p className="text-white/80 text-sm text-center font-medium">{skill.description}</p>
          </div>

          {/* Special Python snake animation - only on hover */}
          {skill.name === "Python" && isHovered && (
            <motion.div
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              exit={{ pathLength: 0, opacity: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0 pointer-events-none z-20"
            >
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <motion.path
                  d="M20,50 Q35,25 50,50 Q65,75 80,50 Q65,25 50,50 Q35,75 20,50"
                  stroke="#00ff41"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: 2, ease: "easeInOut" }}
                  className="drop-shadow-lg"
                />
                <motion.circle
                  cx="20"
                  cy="50"
                  r="3"
                  fill="#00ff41"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.5, 1] }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                  className="drop-shadow-lg"
                />
              </svg>
            </motion.div>
          )}

          {/* Hover glow effect */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-3xl"
          />
        </motion.div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? "dark" : ""}`}>
      {/* Enhanced Dynamic Background with Stars and Orbits */}
      <div
        className={`fixed inset-0 transition-all duration-1000 ${
          isDarkMode
            ? "bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900"
            : "bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50"
        }`}
      >
        {isDarkMode ? (
          <>
            {/* Dark mode - Cosmic theme with stars and orbits */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),rgba(255,255,255,0))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.2),rgba(255,255,255,0))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.15),rgba(255,255,255,0))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(29,78,216,0.1),rgba(255,255,255,0))]" />

            {/* Animated Stars */}
            <div className="absolute inset-0">
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={`star-${i}`}
                  className="absolute"
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 5,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                >
                  <Star className="w-1 h-1 text-blue-300/60" />
                </motion.div>
              ))}
            </div>

            {/* Orbiting Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute top-1/4 left-1/4 w-32 h-32"
              >
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full -translate-x-1/2" />
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute top-3/4 right-1/4 w-24 h-24"
              >
                <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full -translate-x-1/2" />
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute top-1/2 right-1/3 w-20 h-20"
              >
                <div className="absolute top-0 left-1/2 w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full -translate-x-1/2" />
              </motion.div>
            </div>

            {/* Floating Geometric Shapes */}
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`shape-${i}`}
                  className="absolute"
                  animate={{
                    y: [0, -30, 0],
                    x: [0, Math.random() * 20 - 10, 0],
                    rotate: [0, 180, 360],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: Math.random() * 8 + 6,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 5,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                >
                  <div
                    className={`w-3 h-3 ${i % 3 === 0 ? "rounded-full" : i % 3 === 1 ? "rotate-45" : "rounded-sm"} bg-gradient-to-r from-blue-400/20 to-purple-500/20`}
                  />
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Light mode - Softer, eye-friendly theme */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(148,163,184,0.08),rgba(255,255,255,0))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(100,116,139,0.06),rgba(255,255,255,0))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(71,85,105,0.05),rgba(255,255,255,0))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(51,65,85,0.04),rgba(255,255,255,0))]" />

            {/* Animated Light Particles - Softer */}
            <div className="absolute inset-0">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={`light-${i}`}
                  className="absolute w-1 h-1 bg-gradient-to-r from-slate-300/30 to-gray-400/30 rounded-full"
                  animate={{
                    x: [0, Math.random() * 80, 0],
                    y: [0, Math.random() * 80, 0],
                    opacity: [0, 0.6, 0],
                    scale: [0, 1.2, 0],
                  }}
                  transition={{
                    duration: Math.random() * 8 + 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 3,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

            {/* Floating Gradient Orbs - Softer */}
            <div className="absolute inset-0">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={`orb-${i}`}
                  className="absolute"
                  animate={{
                    y: [0, -30, 0],
                    x: [0, Math.random() * 20 - 10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 8,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 4,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                >
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-slate-200/15 to-gray-300/15 blur-sm" />
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-500 border-b ${
          isDarkMode
            ? "bg-gradient-to-r from-gray-900/30 via-purple-900/20 to-indigo-900/30 border-blue-500/30"
            : "bg-gradient-to-r from-white/40 via-slate-50/30 to-gray-50/40 border-slate-200/40"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`text-2xl font-bold transition-all duration-300 ${
              isDarkMode
                ? "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent"
            }`}
          >
            merfi_wipz
          </motion.div>

          <div className="flex items-center space-x-8">
            {["Home", "About", "Projects", "Achievements", "Contact"].map((item, index) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`transition-colors relative group ${
                  isDarkMode ? "text-blue-100/80 hover:text-blue-50" : "text-slate-700/90 hover:text-slate-900"
                }`}
              >
                {item}
                <motion.div
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                      : "bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600"
                  }`}
                />
              </motion.button>
            ))}

            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/30 hover:from-blue-500/30 hover:to-purple-500/30"
                  : "bg-gradient-to-r from-cyan-200/30 to-blue-200/30 border-cyan-300/40 hover:from-cyan-200/50 hover:to-blue-200/50"
              }`}
            >
              <motion.div animate={{ rotate: isDarkMode ? 0 : 180 }} transition={{ duration: 0.5 }}>
                {isDarkMode ? "☀️" : "🌙"}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4 sm:px-6 lg:px-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6"
            >
              <span className={isDarkMode ? "text-white" : "text-gray-800"}>Hi, I'm </span>
              <span
                className={`bg-clip-text text-transparent ${
                  isDarkMode
                    ? "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                    : "bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600"
                }`}
              >
                Mumphry Caparas
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-xl lg:text-2xl mb-4 ${isDarkMode ? "text-white/80" : "text-gray-700/80"}`}
            >
              a Computer Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className={`text-lg mb-8 ${isDarkMode ? "text-white/60" : "text-gray-600/70"}`}
            >
              Powered by coffee & curiosity
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
                className={`px-8 py-4 text-white rounded-full font-semibold shadow-2xl transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 hover:from-blue-600 hover:via-purple-700 hover:to-pink-700"
                    : "bg-gradient-to-r from-slate-600 via-gray-700 to-stone-700 hover:from-slate-700 hover:via-gray-800 hover:to-stone-800"
                }`}
              >
                Let's Connect
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/file/d/1oRZNmAZ4ymcUv44hFA-WNQt_RGwzmek6/view?usp=drive_link"
                target="_blank"
                className={`px-8 py-4 backdrop-blur-sm border text-white rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border-blue-400/30 hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20"
                    : "bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 border-cyan-400/30 hover:from-cyan-500/20 hover:via-blue-500/20 hover:to-indigo-500/20"
                }`}
                rel="noreferrer"
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
              {/* Enhanced background effects */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className={`absolute inset-0 rounded-full blur-3xl opacity-40 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                    : "bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500"
                }`}
              />

              <motion.div
                animate={{
                  scale: [1.1, 1, 1.1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className={`absolute inset-2 rounded-full blur-2xl opacity-30 ${
                  isDarkMode
                    ? "bg-gradient-to-l from-pink-500 via-purple-500 to-blue-400"
                    : "bg-gradient-to-l from-indigo-500 via-blue-500 to-cyan-400"
                }`}
              />

              {/* Profile image with enhanced styling and anime transformation */}
              <motion.div whileHover={{ scale: 1.05 }} className="relative z-10 w-full h-full">
                <AnimatePresence mode="wait">
                  {showAnimeProfile ? (
                    <motion.div
                      key="anime"
                      initial={{ scale: 0, rotate: -180, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      exit={{ scale: 0, rotate: 180, opacity: 0 }}
                      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src="/profile1.png?height=320&width=320&text=🎌+Anime+Mumphry+🎌&bg=linear-gradient(45deg,ff6b6b,4ecdc4,45b7d1,96ceb4,feca57)"
                        alt="Anime Mumphry Waving"
                        width={320}
                        height={320}
                        className={`relative z-10 rounded-full border-4 shadow-2xl transition-all duration-300 ${
                          isDarkMode
                            ? "border-pink-400/70 hover:border-purple-400/90"
                            : "border-orange-400/70 hover:border-pink-400/90"
                        }`}
                      />
                      {/* Enhanced waving animation effect */}
                      <motion.div
                        animate={{
                          rotate: [0, 25, -25, 25, -25, 25, 0],
                          scale: [1, 1.2, 1, 1.2, 1, 1.2, 1],
                        }}
                        transition={{ duration: 0.8, repeat: 6, ease: "easeInOut" }}
                        className="absolute top-12 right-8 text-5xl z-20"
                      >
                        👋
                      </motion.div>
                      {/* Sparkle effects */}
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                            rotate: [0, 180, 360],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: 3,
                            delay: i * 0.2,
                            ease: "easeInOut",
                          }}
                          className="absolute text-2xl z-20"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${15 + (i % 2) * 70}%`,
                          }}
                        >
                          ✨
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="normal"
                      initial={{ scale: 0, rotate: 180, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      exit={{ scale: 0, rotate: -180, opacity: 0 }}
                      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    >
                      <Image
                        src="/profile2.png?height=320&width=320&text=Mumphry+Caparas&bg=gradient"
                        alt="Mumphry Caparas"
                        width={320}
                        height={320}
                        className={`relative z-10 rounded-full border-4 shadow-2xl transition-all duration-300 ${
                          isDarkMode
                            ? "border-blue-400/30 hover:border-purple-400/50"
                            : "border-slate-400/40 hover:border-gray-500/60"
                        }`}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Floating elements around the image */}
                <motion.div
                  animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  className={`absolute -top-4 -right-4 w-8 h-8 rounded-full opacity-80 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500"
                      : "bg-gradient-to-r from-slate-400 to-gray-500"
                  }`}
                />
                <motion.div
                  animate={{ y: [10, -10, 10], rotate: [360, 180, 0] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                  className={`absolute -bottom-4 -left-4 w-6 h-6 rounded-full opacity-80 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
                      : "bg-gradient-to-r from-gray-400 via-slate-500 to-stone-500"
                  }`}
                />
                <motion.div
                  animate={{ x: [-5, 5, -5], rotate: [0, 90, 180] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className={`absolute top-1/2 -left-6 w-4 h-4 rounded-full opacity-80 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-green-400 to-blue-500"
                      : "bg-gradient-to-r from-slate-500 to-gray-600"
                  }`}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl lg:text-5xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
              About Me
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className={`text-lg lg:text-xl leading-relaxed ${isDarkMode ? "text-white/80" : "text-gray-700/80"}`}>
                Fresh Computer Engineering graduate passionate about clean code, creative problem-solving, and
                user-centered design. Willing to learn, explore new technologies, and build digital experiences that
                make a difference.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Skills - NO ANIMATIONS */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
              Technical Skills
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? "text-white/60" : "text-gray-600/70"}`}>
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8">
            {skills.map((skill, index) => (
              <SkillIcon key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`p-3 rounded-2xl ${
                  isDarkMode
                    ? "bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600"
                    : "bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600"
                }`}
              >
                <GraduationCap className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}>Education</h3>
            </div>

            {educationData.slice(0, 2).map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`p-8 rounded-3xl backdrop-blur-sm border transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 border-blue-400/20 hover:from-blue-500/10 hover:via-purple-500/10 hover:to-pink-500/10 hover:border-blue-400/30"
                    : "bg-gradient-to-br from-cyan-100/30 via-blue-100/30 to-indigo-100/30 border-cyan-200/30 hover:from-cyan-100/50 hover:via-blue-100/50 hover:to-indigo-100/50 hover:border-cyan-200/50"
                }`}
              >
                <div className="flex items-start gap-6">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="relative">
                    <div
                      className={`absolute inset-0 rounded-full blur-lg opacity-50 ${
                        isDarkMode
                          ? "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                          : "bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500"
                      }`}
                    />
                    <Image
                      src={edu.logo || "/placeholder.svg"}
                      alt={edu.school}
                      width={70}
                      height={70}
                      className={`relative z-10 rounded-full border-3 transition-all duration-300 ${
                        isDarkMode ? "border-blue-400/30" : "border-cyan-400/30"
                      }`}
                    />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                      {edu.degree}
                    </h4>
                    <p className={`text-lg font-semibold mb-2 ${isDarkMode ? "text-blue-400" : "text-cyan-600"}`}>
                      {edu.school}
                    </p>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className={`w-4 h-4 ${isDarkMode ? "text-white/60" : "text-gray-600/60"}`} />
                      <p className={`text-sm ${isDarkMode ? "text-white/60" : "text-gray-600/60"}`}>{edu.period}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-yellow-500" />
                      <p className={`text-sm font-medium ${isDarkMode ? "text-white/80" : "text-gray-700/80"}`}>
                        {edu.achievements}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveModal("education")}
              className={`w-full py-4 text-white rounded-2xl font-semibold shadow-lg transition-all duration-300 ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 hover:from-blue-600 hover:via-purple-700 hover:to-pink-700"
                  : "bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-600 hover:via-blue-700 hover:to-indigo-700"
              }`}
            >
              View All Education
            </motion.button>
          </motion.div>

          {/* Experience */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="p-3 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-600 to-red-600"
              >
                <Briefcase className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}>Experience</h3>
            </div>

            {experienceData.slice(0, 2).map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`p-8 rounded-3xl backdrop-blur-sm border transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-red-500/5 border-purple-400/20 hover:from-purple-500/10 hover:via-pink-500/10 hover:to-red-500/10 hover:border-purple-400/30"
                    : "bg-gradient-to-br from-purple-100/30 via-pink-100/30 to-red-100/30 border-purple-200/30 hover:from-purple-100/50 hover:via-pink-100/50 hover:to-red-100/50 hover:border-purple-200/50"
                }`}
              >
                <div className="flex items-start gap-6">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 blur-lg opacity-50" />
                    <Image
                      src={exp.logo || "/placeholder.svg"}
                      alt={exp.company}
                      width={70}
                      height={70}
                      className={`relative z-10 rounded-full border-3 transition-all duration-300 ${
                        isDarkMode ? "border-purple-400/30" : "border-purple-400/30"
                      }`}
                    />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                      {exp.position}
                    </h4>
                    <p className="text-purple-500 mb-2 font-semibold">{exp.company}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className={`w-4 h-4 ${isDarkMode ? "text-white/60" : "text-gray-600/60"}`} />
                      <p className={`text-sm ${isDarkMode ? "text-white/60" : "text-gray-600/60"}`}>{exp.period}</p>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className={`w-4 h-4 ${isDarkMode ? "text-white/60" : "text-gray-600/60"}`} />
                      <p className={`text-sm font-medium ${isDarkMode ? "text-white/80" : "text-gray-700/80"}`}>
                        Role: {exp.role}
                      </p>
                    </div>
                    <p className={`text-sm leading-relaxed ${isDarkMode ? "text-white/70" : "text-gray-600/70"}`}>
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveModal("experience")}
              className="w-full py-4 bg-gradient-to-r from-purple-500 via-pink-600 to-red-600 hover:from-purple-600 hover:via-pink-700 hover:to-red-700 text-white rounded-2xl font-semibold shadow-lg transition-all duration-300"
            >
              View All Experience
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
              Featured Projects
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? "text-white/60" : "text-gray-600/70"}`}>
              A showcase of my latest work and creative solutions
            </p>
          </motion.div>

          <div className="relative overflow-hidden rounded-3xl p-2">
            <div
              className={`absolute inset-0 rounded-3xl ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
                  : "bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10"
              }`}
            />

            <motion.div
              animate={{ x: -projectScrollPosition * 340 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="flex gap-8 py-4"
              style={{ width: `${projects.length * 340}px` }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="relative w-80 h-56 rounded-2xl overflow-hidden cursor-pointer group shadow-2xl"
                  onClick={() => openProjectModal(project)}
                >
                  <Image
                    src={project.images[0] || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-xl mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {project.description}
                    </p>
                  </div>

                  {/* Project number indicator */}
                  <div
                    className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                      isDarkMode ? "bg-blue-500/80" : "bg-cyan-500/80"
                    }`}
                  >
                    {index + 1}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveModal("projects")}
              className={`px-10 py-4 text-white rounded-full font-semibold shadow-lg transition-all duration-300 ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-600 via-purple-700 to-pink-700 hover:from-blue-700 hover:via-purple-800 hover:to-pink-800"
                  : "bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-600 hover:via-blue-700 hover:to-indigo-700"
              }`}
            >
              View All Projects
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Achievements Preview */}
      <section id="achievements" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
              Achievements
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? "text-white/60" : "text-gray-600/70"}`}>
              Certifications, courses, and professional development milestones
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {achievements.slice(0, 6).map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 group shadow-2xl ${
                  isDarkMode
                    ? "bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 border border-blue-400/20 hover:from-blue-500/10 hover:via-purple-500/10 hover:to-pink-500/10 hover:border-blue-400/30"
                    : "bg-gradient-to-br from-cyan-100/30 via-blue-100/30 to-indigo-100/30 border border-cyan-200/30 hover:from-cyan-100/50 hover:via-blue-100/50 hover:to-indigo-100/50 hover:border-cyan-200/50"
                }`}
                onClick={() => {
                  setSelectedAchievement(achievement)
                  setActiveModal("achievement-detail")
                }}
              >
                {/* Achievement Image with Enhanced Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={achievement.image || "/placeholder.svg"}
                    
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Multi-layer Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-300" />
                  <div
                    className={`absolute inset-0 opacity-20 group-hover:opacity-30 transition-all duration-300 ${
                      achievement.category === "course"
                        ? "bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-pink-500/40"
                        : "bg-gradient-to-br from-purple-500/40 via-pink-500/40 to-red-500/40"
                    }`}
                  />

                  {/* Category Badge with Enhanced Shape */}
                  <div className="absolute top-3 left-3">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`relative px-3 py-1.5 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                        achievement.category === "course"
                          ? isDarkMode
                            ? "bg-gradient-to-r from-blue-500/90 via-purple-600/90 to-pink-600/90 border-blue-400/40 text-white shadow-lg shadow-blue-500/25"
                            : "bg-gradient-to-r from-cyan-500/90 via-blue-600/90 to-indigo-600/90 border-cyan-400/40 text-white shadow-lg shadow-cyan-500/25"
                          : "bg-gradient-to-r from-purple-500/90 via-pink-600/90 to-red-600/90 border-purple-400/40 text-white shadow-lg shadow-purple-500/25"
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        {achievement.category === "course" ? (
                          <Award className="w-3 h-3" />
                        ) : (
                          <Star className="w-3 h-3" />
                        )}
                        <span className="text-xs font-semibold">
                          {achievement.category === "course" ? "Course" : "Seminar"}
                        </span>
                      </div>

                      {/* Enhanced Decorative Shapes */}
                      <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-white/40 rounded-full" />
                      <div className="absolute -bottom-0.5 -left-0.5 w-1.5 h-1.5 bg-white/30 rounded-full" />
                      <div className="absolute top-1/2 -right-1 w-1 h-1 bg-white/20 rounded-full" />
                    </motion.div>
                  </div>

                  {/* Enhanced Achievement Icon */}
                  <div className="absolute top-3 right-3">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.3 }}
                      transition={{ duration: 0.6 }}
                      className={`p-2 rounded-full backdrop-blur-sm border-2 transition-all duration-300 ${
                        achievement.category === "course"
                          ? isDarkMode
                            ? "bg-gradient-to-r from-blue-500/30 to-purple-500/30 border-blue-400/60 shadow-lg shadow-blue-500/30"
                            : "bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border-cyan-400/60 shadow-lg shadow-cyan-500/30"
                          : "bg-gradient-to-r from-purple-500/30 to-pink-500/30 border-purple-400/60 shadow-lg shadow-purple-500/30"
                      }`}
                    >
                      {achievement.category === "course" ? (
                        <Award className="w-4 h-4 text-white drop-shadow-lg" />
                      ) : (
                        <Star className="w-4 h-4 text-white drop-shadow-lg" />
                      )}
                    </motion.div>
                  </div>

                  {/* Enhanced Floating Elements */}
                  <motion.div
                    animate={{
                      y: [-3, 3, -3],
                      rotate: [0, 180, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute bottom-3 left-3 w-3 h-3 bg-white/25 rounded-full opacity-70"
                  />
                  <motion.div
                    animate={{
                      y: [3, -3, 3],
                      rotate: [360, 180, 0],
                      scale: [1.1, 1, 1.1],
                    }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute bottom-4 right-4 w-2 h-2 bg-white/20 rounded-full opacity-50"
                  />
                  <motion.div
                    animate={{
                      x: [-2, 2, -2],
                      rotate: [0, 90, 180],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-white/15 rounded-full"
                  />
                </div>

                {/* Content Section with Enhanced Styling */}
                <div className="p-4 space-y-3">
                  <h3
                    className={`font-bold text-base transition-colors ${
                      isDarkMode ? "text-white group-hover:text-cyan-300" : "text-gray-800 group-hover:text-cyan-600"
                    }`}
                  >
                    {achievement.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${isDarkMode ? "text-white/60" : "text-gray-600/70"}`}>
                    {achievement.description}
                  </p>

                  <div
                    className={`flex items-center justify-between text-xs ${isDarkMode ? "text-white/50" : "text-gray-500/60"}`}
                  >
                    <span className="font-medium">{achievement.issuer}</span>
                    <span className="font-medium">{achievement.date}</span>
                  </div>
                </div>

                {/* Enhanced Hover Glow Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 rounded-3xl transition-all duration-300 ${
                    achievement.category === "course"
                      ? "bg-gradient-to-br from-blue-500/8 via-purple-500/8 to-pink-500/8"
                      : "bg-gradient-to-br from-purple-500/8 via-pink-500/8 to-red-500/8"
                  }`}
                />

                {/* Corner Accent Shapes */}
                <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                  <div
                    className={`absolute -top-4 -right-4 w-8 h-8 rounded-full opacity-20 ${
                      achievement.category === "course"
                        ? "bg-gradient-to-br from-blue-400 to-purple-500"
                        : "bg-gradient-to-br from-purple-400 to-pink-500"
                    }`}
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-6 h-6 overflow-hidden">
                  <div
                    className={`absolute -bottom-3 -left-3 w-6 h-6 rounded-full opacity-15 ${
                      achievement.category === "course"
                        ? "bg-gradient-to-tr from-pink-400 to-blue-500"
                        : "bg-gradient-to-tr from-red-400 to-purple-500"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveModal("achievements")}
              className="px-10 py-4 bg-gradient-to-r from-purple-500 via-pink-600 to-red-600 hover:from-purple-600 hover:via-pink-700 hover:to-red-700 text-white rounded-full font-semibold shadow-lg transition-all duration-300"
            >
              View All Achievements
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
              Let's Connect
            </h2>
            <p className={`text-xl mb-12 ${isDarkMode ? "text-white/80" : "text-gray-700/80"}`}>
              Ready to bring your ideas to life? Let's work together!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {[
              {
                icon: Mail,
                label: "Email",
                value: "murphycaparas@gmail.com",
                href: "#",
                color: "from-red-500 via-pink-600 to-rose-600",
                onClick: openGmailCompose,
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+63 123 456 7890",
                href: "tel:+631234567890",
                color: "from-green-500 via-emerald-600 to-teal-600",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "linkedin.com/in/mumphry",
                href: "https://linkedin.com",
                color: "from-blue-500 via-cyan-600 to-sky-600",
              },
              {
                icon: Github,
                label: "GitHub",
                value: "github.com/mumphry",
                href: "https://github.com",
                color: "from-gray-600 via-slate-700 to-gray-800",
              },
            ].map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-4 sm:p-6 lg:p-8 rounded-3xl backdrop-blur-sm border transition-all duration-300 group cursor-pointer ${
                  isDarkMode
                    ? "bg-gradient-to-br from-white/5 via-white/3 to-white/5 border-white/10 hover:from-white/10 hover:via-white/8 hover:to-white/10 hover:border-white/20"
                    : "bg-gradient-to-br from-white/30 via-white/20 to-white/30 border-white/20 hover:from-white/50 hover:via-white/40 hover:to-white/50 hover:border-white/30"
                }`}
                onClick={contact.onClick || (() => window.open(contact.href, "_blank"))}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 rounded-2xl bg-gradient-to-r ${contact.color} flex items-center justify-center`}
                >
                  <contact.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                </motion.div>
                <h3
                  className={`font-bold text-base sm:text-lg mb-2 text-center ${isDarkMode ? "text-white" : "text-gray-800"}`}
                >
                  {contact.label}
                </h3>
                <p
                  className={`text-xs sm:text-sm text-center break-words px-1 ${isDarkMode ? "text-white/60" : "text-gray-600/70"}`}
                >
                  {contact.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 p-4 text-white rounded-full shadow-2xl z-40 transition-all duration-300 ${
              isDarkMode
                ? "bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 hover:from-blue-600 hover:via-purple-700 hover:to-pink-700"
                : "bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-600 hover:via-blue-700 hover:to-indigo-700"
            }`}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Modals */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className={`backdrop-blur-md rounded-3xl border max-w-6xl w-full max-h-[90vh] overflow-y-auto ${
                isDarkMode ? "bg-gray-900/90 border-blue-400/20" : "bg-white/90 border-cyan-200/30"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                    {activeModal === "education" && "All Education"}
                    {activeModal === "experience" && "All Experience"}
                    {activeModal === "projects" && "All Projects"}
                    {activeModal === "achievements" && "All Achievements"}
                    {activeModal === "project-detail" && selectedProject?.title}
                    {activeModal === "achievement-detail" && selectedAchievement?.title}
                  </h2>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setActiveModal(null)}
                    className={`p-3 rounded-full transition-colors ${
                      isDarkMode ? "hover:bg-blue-500/20" : "hover:bg-cyan-200/30"
                    }`}
                  >
                    <X className={`w-6 h-6 ${isDarkMode ? "text-white" : "text-gray-800"}`} />
                  </motion.button>
                </div>

                {/* Education Modal */}
                {activeModal === "education" && (
                  <div className="space-y-8">
                    {educationData.map((edu, index) => (
                      <motion.div
                        key={edu.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`p-8 rounded-2xl border transition-all duration-300 ${
                          isDarkMode
                            ? "bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 border-blue-400/20 hover:from-blue-500/10 hover:via-purple-500/10 hover:to-pink-500/10"
                            : "bg-gradient-to-br from-cyan-100/30 via-blue-100/30 to-indigo-100/30 border-cyan-200/30 hover:from-cyan-100/50 hover:via-blue-100/50 hover:to-indigo-100/50"
                        }`}
                      >
                        <div className="flex items-start gap-6">
                          <div className="flex-1">
                            <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                              {edu.degree}
                            </h3>
                            <p
                              className={`text-lg font-semibold mb-2 ${isDarkMode ? "text-blue-400" : "text-cyan-600"}`}
                            >
                              {edu.school}
                            </p>
                            <div className="flex items-center gap-2 mb-2">
                              <Calendar className={`w-4 h-4 ${isDarkMode ? "text-white/60" : "text-gray-600/60"}`} />
                              <p className={`text-sm ${isDarkMode ? "text-white/60" : "text-gray-600/60"}`}>
                                {edu.period}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Trophy className="w-4 h-4 text-yellow-500" />
                              <p className={`text-sm font-medium ${isDarkMode ? "text-white/80" : "text-gray-700/80"}`}>
                                {edu.achievements}
                              </p>
                            </div>
                          </div>
                          <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="relative">
                            <div
                              className={`absolute inset-0 rounded-full blur-lg opacity-50 ${
                                isDarkMode
                                  ? "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                                  : "bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500"
                              }`}
                            />
                            <Image
                              src={edu.logo || "/placeholder.svg"}
                              alt={edu.school}
                              width={90}
                              height={90}
                              className={`relative z-10 rounded-full border-3 transition-all duration-300 ${
                                isDarkMode ? "border-blue-400/30" : "border-cyan-400/30"
                              }`}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Experience Modal */}
                {activeModal === "experience" && (
                  <div className="space-y-8">
                    {experienceData.map((exp, index) => (
                      <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`p-8 rounded-2xl border transition-all duration-300 ${
                          isDarkMode
                            ? "bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-red-500/5 border-purple-400/20 hover:from-purple-500/10 hover:via-pink-500/10 hover:to-red-500/10 hover:border-purple-400/30"
                            : "bg-gradient-to-br from-purple-100/30 via-pink-100/30 to-red-100/30 border-purple-200/30 hover:from-purple-100/50 hover:via-pink-100/50 hover:to-red-100/50 hover:border-purple-200/50"
                        }`}
                      >
                        <div className="flex items-start gap-6">
                          <div className="flex-1">
                            <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                              {exp.position}
                            </h3>
                            <p className="text-purple-500 mb-2 font-semibold">{exp.company}</p>
                            <div className="flex items-center gap-2 mb-2">
                              <Calendar className={`w-4 h-4 ${isDarkMode ? "text-white/60" : "text-gray-600/60"}`} />
                              <p className={`text-sm ${isDarkMode ? "text-white/60" : "text-gray-600/60"}`}>
                                {exp.period}
                              </p>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                              <MapPin className={`w-4 h-4 ${isDarkMode ? "text-white/60" : "text-gray-600/60"}`} />
                              <p className={`text-sm font-medium ${isDarkMode ? "text-white/80" : "text-gray-700/80"}`}>
                                Role: {exp.role}
                              </p>
                            </div>
                            <p
                              className={`text-sm leading-relaxed ${isDarkMode ? "text-white/70" : "text-gray-600/70"}`}
                            >
                              {exp.description}
                            </p>
                          </div>
                          <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="relative">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 blur-lg opacity-50" />
                            <Image
                              src={exp.logo || "/placeholder.svg"}
                              alt={exp.company}
                              width={90}
                              height={90}
                              className={`relative z-10 rounded-full border-3 transition-all duration-300 ${
                                isDarkMode ? "border-purple-400/30" : "border-purple-400/30"
                              }`}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Projects Modal - Landscape Images */}
                {activeModal === "projects" && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-2xl"
                        onClick={() => openProjectModal(project)}
                      >
                        <div className="relative w-full h-48">
                          <Image
                            src={project.images[0] || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-white font-bold text-xl mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {project.title}
                          </h3>
                          <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                            {project.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Achievements Modal */}
                {activeModal === "achievements" && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={achievement.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 group ${
                          isDarkMode
                            ? "bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 border-blue-400/20 hover:from-blue-500/10 hover:via-purple-500/10 hover:to-pink-500/10"
                            : "bg-gradient-to-br from-cyan-100/30 via-blue-100/30 to-indigo-100/30 border-cyan-200/30 hover:from-cyan-100/50 hover:via-blue-100/50 hover:to-indigo-100/50"
                        }`}
                        onClick={() => {
                          setSelectedAchievement(achievement)
                          setActiveModal("achievement-detail")
                        }}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className={`p-3 rounded-2xl ${
                              achievement.category === "course"
                                ? isDarkMode
                                  ? "bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600"
                                  : "bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600"
                                : "bg-gradient-to-r from-purple-500 via-pink-600 to-red-600"
                            }`}
                          >
                            {achievement.category === "course" ? (
                              <Award className="w-6 h-6 text-white" />
                            ) : (
                              <Star className="w-6 h-6 text-white" />
                            )}
                          </motion.div>
                          <div className="flex-1">
                            <span
                              className={`text-xs font-semibold px-3 py-1 rounded-full ${
                                achievement.category === "course"
                                  ? isDarkMode
                                    ? "bg-blue-500/20 text-blue-300"
                                    : "bg-cyan-500/20 text-cyan-700"
                                  : "bg-purple-500/20 text-purple-600"
                              }`}
                            >
                              {achievement.category === "course" ? "Course" : "Seminar"}
                            </span>
                          </div>
                        </div>

                        <h3
                          className={`font-bold text-lg mb-3 transition-colors ${
                            isDarkMode
                              ? "text-white group-hover:text-cyan-300"
                              : "text-gray-800 group-hover:text-cyan-600"
                          }`}
                        >
                          {achievement.title}
                        </h3>
                        <p
                          className={`text-sm mb-3 leading-relaxed ${isDarkMode ? "text-white/60" : "text-gray-600/70"}`}
                        >
                          {achievement.description}
                        </p>

                        <div
                          className={`flex items-center justify-between text-xs ${isDarkMode ? "text-white/50" : "text-gray-500/60"}`}
                        >
                          <span>{achievement.issuer}</span>
                          <span>{achievement.date}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Enhanced Project Detail Modal */}
                {activeModal === "project-detail" && selectedProject && (
                  <div className="space-y-8">
                    {/* Project Image Gallery */}
                    <div className="relative w-full h-96 rounded-2xl overflow-hidden">
                      <Image
                        src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                        alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                        fill
                        className="object-cover"
                      />

                      {/* Navigation Arrows */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors backdrop-blur-sm"
                      >
                        <ChevronLeft className="w-6 h-6 text-white" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors backdrop-blur-sm"
                      >
                        <ChevronRight className="w-6 h-6 text-white" />
                      </motion.button>

                      {/* Image Indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedProject.images.map((_, index) => (
                          <motion.button
                            key={index}
                            whileHover={{ scale: 1.2 }}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                              index === currentImageIndex ? "bg-white" : "bg-white/50"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Image Counter */}
                      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-white text-sm font-medium">
                          {currentImageIndex + 1} / {selectedProject.images.length}
                        </span>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-6">
                      {/* Description */}
                      <div>
                        <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                          Details
                        </h3>
                        <p className={`text-base leading-relaxed ${isDarkMode ? "text-white/80" : "text-gray-700/80"}`}>
                          {selectedProject.fullDescription}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                          Tech Used
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {selectedProject.techStack.map((tech, index) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                              className={`px-4 py-2 rounded-full font-medium border transition-all duration-300 ${
                                isDarkMode
                                  ? "bg-blue-500/10 border-blue-400/30 text-blue-300 hover:bg-blue-500/20"
                                  : "bg-cyan-500/10 border-cyan-400/30 text-cyan-700 hover:bg-cyan-500/20"
                              }`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                          Key Features
                        </h3>
                        <div className="grid md:grid-cols-2 gap-3">
                          {selectedProject.keyFeatures.map((feature, index) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                                isDarkMode ? "bg-blue-500/5 hover:bg-blue-500/10" : "bg-cyan-500/5 hover:bg-cyan-500/10"
                              }`}
                            >
                              <div className={`p-1 rounded-full ${isDarkMode ? "bg-blue-500/20" : "bg-cyan-500/20"}`}>
                                <Zap className={`w-4 h-4 ${isDarkMode ? "text-blue-400" : "text-cyan-600"}`} />
                              </div>
                              <span
                                className={`text-sm font-medium ${isDarkMode ? "text-white/80" : "text-gray-700/80"}`}
                              >
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* GitHub Link */}
                      <div>
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                            isDarkMode
                              ? "bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 hover:from-blue-500/30 hover:via-purple-500/30 hover:to-pink-500/30 text-blue-300 border border-blue-400/30"
                              : "bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 hover:from-cyan-500/30 hover:via-blue-500/30 hover:to-indigo-500/30 text-cyan-700 border border-cyan-400/30"
                          }`}
                        >
                          <Github className="w-5 h-5" />
                          View on GitHub
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                )}

                {/* Achievement Detail Modal */}
                {activeModal === "achievement-detail" && selectedAchievement && (
                  <div className="space-y-6">
                    {/* Enhanced Achievement Image */}
                    <div className="relative w-full h-80 rounded-2xl overflow-hidden">
                      <Image
                        src={selectedAchievement.image || "/placeholder.svg"}
                        alt={selectedAchievement.title}
                        fill
                        className="object-cover"
                      />

                      {/* Multi-layer Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                      <div
                        className={`absolute inset-0 opacity-20 ${
                          selectedAchievement.category === "course"
                            ? "bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30"
                            : "bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-red-500/30"
                        }`}
                      />

                      {/* Enhanced Category Badge */}
                      <div className="absolute top-4 left-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`relative px-6 py-3 rounded-full backdrop-blur-md border-2 transition-all duration-300 ${
                            selectedAchievement.category === "course"
                              ? isDarkMode
                                ? "bg-gradient-to-r from-blue-500/90 via-purple-600/90 to-pink-600/90 border-blue-400/50 text-white shadow-xl shadow-blue-500/25"
                                : "bg-gradient-to-r from-cyan-500/90 via-blue-600/90 to-indigo-600/90 border-cyan-400/50 text-white shadow-xl shadow-cyan-500/25"
                              : "bg-gradient-to-r from-purple-500/90 via-pink-600/90 to-red-600/90 border-purple-400/50 text-white shadow-xl shadow-purple-500/25"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {selectedAchievement.category === "course" ? (
                              <Award className="w-5 h-5" />
                            ) : (
                              <Star className="w-5 h-5" />
                            )}
                            <span className="text-base font-bold">
                              {selectedAchievement.category === "course" ? "Course Certificate" : "Seminar Certificate"}
                            </span>
                          </div>

                          {/* Enhanced Decorative Shapes */}
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-white/40 rounded-full" />
                          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-white/30 rounded-full" />
                          <div className="absolute top-1/2 -right-2 w-2 h-2 bg-white/20 rounded-full" />
                          <div className="absolute bottom-1/2 -left-2 w-1.5 h-1.5 bg-white/15 rounded-full" />
                        </motion.div>
                      </div>

                      {/* Floating Decorative Elements */}
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            y: [Math.random() * 10 - 5, Math.random() * 10 + 5, Math.random() * 10 - 5],
                            x: [Math.random() * 10 - 5, Math.random() * 10 + 5, Math.random() * 10 - 5],
                            rotate: [0, 180, 360],
                            opacity: [0.2, 0.6, 0.2],
                            scale: [0.8, 1.2, 0.8],
                          }}
                          transition={{
                            duration: Math.random() * 4 + 3,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.5,
                          }}
                          className={`absolute w-3 h-3 rounded-full ${
                            i % 3 === 0 ? "bg-white/30" : i % 3 === 1 ? "bg-white/20" : "bg-white/15"
                          }`}
                          style={{
                            left: `${10 + i * 15}%`,
                            top: `${20 + (i % 2) * 60}%`,
                          }}
                        />
                      ))}

                      {/* Corner Accent Shapes */}
                      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                        <div
                          className={`absolute -top-8 -right-8 w-16 h-16 rounded-full opacity-25 ${
                            selectedAchievement.category === "course"
                              ? "bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500"
                              : "bg-gradient-to-br from-purple-400 via-pink-500 to-red-500"
                          }`}
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 w-12 h-12 overflow-hidden">
                        <div
                          className={`absolute -bottom-6 -left-6 w-12 h-12 rounded-full opacity-20 ${
                            selectedAchievement.category === "course"
                              ? "bg-gradient-to-tr from-pink-400 via-purple-500 to-blue-500"
                              : "bg-gradient-to-tr from-red-400 via-pink-500 to-purple-500"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Rest of the achievement detail content remains the same */}
                    <h3 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                      {selectedAchievement.title}
                    </h3>
                    <p className={`text-base ${isDarkMode ? "text-white/70" : "text-gray-700/70"}`}>
                      {selectedAchievement.description}
                    </p>
                    <div
                      className={`flex items-center justify-between text-xs ${isDarkMode ? "text-white/50" : "text-gray-500/60"}`}
                    >
                      <span>{selectedAchievement.issuer}</span>
                      <span>{selectedAchievement.date}</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
