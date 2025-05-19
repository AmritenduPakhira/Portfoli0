import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FaJava } from 'react-icons/fa';
import { FaAws, FaCloud, FaBrain, FaLock, FaRobot } from 'react-icons/fa';
// import { SiIbm, SiCisco, SiIbmcloud } from 'react-icons/si';
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaDownload } from "react-icons/fa";


import {
  SiTailwindcss,
  SiCss3,
  SiHtml5,
  SiBootstrap,
  SiJavascript,
  SiFigma,
  SiReact,
  SiExpress,
  SiMongodb,
  SiOracle,
  SiTypescript,
  SiSqlite,
  SiGit,
  SiLinux,
  SiAwsamplify,
  SiNodedotjs,
  SiGithub
} from 'react-icons/si';


const skills = [
  { name: 'TailwindCSS', icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: 'CSS3', icon: <SiCss3 className="text-blue-500" /> },
  { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
  { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
  { name: 'Java', icon: <FaJava className="text-red-700" /> },
  { name: 'React', icon: <SiReact className="text-blue-400" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-600" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
  { name: 'SQL', icon: <SiSqlite className="text-blue-600" /> }, // Using MongoDB icon for SQL
  { name: 'Oracle', icon: <SiOracle className="text-red-600" /> },
  // { name: 'C#', icon: <SiCsharp className="text-green-600" /> },
  { name: 'Git', icon: <SiGit className="text-orange-600" /> },
  { name: 'Linux', icon: <SiLinux className="text-yellow-600" /> },
  { name: 'AWS', icon: <SiAwsamplify className="text-orange-500" /> }, // Using SiAwsAmplify as a general AWS icon
  { name: 'Figma', icon: <SiFigma className="text-pink-500" /> },
  { name: 'GitHub', icon: <SiGithub className="text-gray-800" /> },
];

const certifications = [
  {
    title: "Java Full Stack Developer",
    issuer: "Wipro TalentNext",
    icon: <FaJava size={30} className="text-white" />
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    icon: <FaAws size={30} className="text-white" />
  },
  {
    title: "Introduction to Cloud Computing",
    issuer: "IBM",
    icon: <FaCloud size={30} className="text-white" />
  },
  {
    title: "AI Certification Workshop",
    issuer: "IIT Roorkee",
    icon: <FaBrain size={30} className="text-white" />
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    icon: <FaLock size={30} className="text-white" />
  }, {
    title: "AI Developer Professional Certificate",
    issuer: "IBM",
    icon: <FaRobot size={30} className="text-white" />
  }

];

const achievements = [
  {
    title: "Robotics Project Display",
    description:
      "Secured the 3rd position at CUIET, competing against participants from both CUIET and Deakin University.",
    icon: "🤖",
  },
  {
    title: "Academic Excellence",
    description: "Ranked top position among all students in the school (10+2).",
    icon: "🎓",
  },
  {
    title: "DSA Mastery",
    description:
      "Cracked 250+ challenging DSA problems, sharpening analytical thinking and mastering core algorithms.",
    icon: "🧠",
  },
  {
    title: "Naukri Campus Competition",
    description:
      "Secured an All India Rank of 320 (Top 1%) in the Naukri Campus Young Turks Competition – Round 1.",
    icon: "🏆",
  },
];






const FaLinkedinIcon: React.FC = () => <FontAwesomeIcon icon={faLinkedin} size="lg" />;

const FaInstagramIcon: React.FC = () => <FontAwesomeIcon icon={faInstagram} size="lg" />;

const FaTwitterIcon: React.FC = () => <FontAwesomeIcon icon={faTwitter} size="lg" />;
const FaFacebookIcon: React.FC = () => <FontAwesomeIcon icon={faFacebook} size="lg" />;
const FaGithubIcon: React.FC = () => <FontAwesomeIcon icon={faGithub} size="lg" />;



const Hero: React.FC = () => {
  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden flex flex-col lg:flex-row pt-20">

        {/* Left Side */}
        <div className="lg:w-1/2 w-full bg-[#0f172a] flex flex-col justify-center items-start p-6 lg:p-10 z-10">
          <h2 className="text-xl mb-2 text-white ">Hi, I am</h2>

          <h1 className="text-4xl lg:text-6xl font-bold text-gray-300">Amritendu Pakhira</h1>
          <p className="text-gray-400 mt-3">Resilient Software Engineer</p>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <a href="https://www.linkedin.com/in/amritendupakhira/" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-full bg-dark text-[#0e76a8] shadow-lg hover:scale-110 hover:bg-gray-100 transition"
              aria-label="LinkedIn">
              <FaLinkedinIcon />
            </a>
            <a href="https://github.com/AmritenduPakhira" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-full bg-dark text-[#0e76a8] shadow-lg hover:scale-110 hover:bg-gray-100 transition"
              aria-label="Github">
              <FaGithubIcon />
            </a>
            <a href="https://www.instagram.com/amritendupakhira123?igsh=MWllbA3bXdhY3o2ZQ==" target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-dark text-[#e1306c] shadow-lg hover:scale-110 hover:bg-pink-100 transition"
              aria-label="Instagram">
              <FaInstagramIcon />
            </a>
            <a href="https://x.com/AmritenduPakhi3"
              className="p-3 rounded-full bg-dark text-[#1DA1F2] shadow-lg hover:scale-110 hover:bg-blue-100 transition"
              aria-label="Twitter">
              <FaTwitterIcon />
            </a>
            <a href="https://www.facebook.com/amritendupakhira.riju"
              className="p-3 rounded-full bg-dark text-[#1877F2] shadow-lg hover:scale-110 hover:bg-blue-100 transition"
              aria-label="Facebook">
              <FaFacebookIcon />
            </a>
          </div>

          {/* Description */}
          <p className="text-white text-sm sm:text-base mt-6 leading-relaxed break-words">
            Being a software engineer and a skilled full stack developer with strong expertise in both frontend and backend technologies, including databases like MongoDB and SQL, I am dedicated to writing clean, efficient code. While I occasionally face challenges with debugging and troubleshooting, I view these as valuable opportunities to deepen my problem-solving skills and enhance my development experience.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/2 w-full bg-[#0f172a] flex justify-center items-center px-4 py-6 lg:p-10">
          <img
            src="./profile1.JPG"
            alt="Profile"
            className="object-contain max-h-[60vh] lg:max-h-[80vh] w-full rounded-lg shadow-xl"
          />
        </div>
      </section>


      {/* Experience Section */}
      <section id="experience" className="bg-[#f5f5f5] text-black py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Work Experience</h2>

          <div className="relative border-l-4 border-gray-300 pl-6 space-y-12">
            {/* Timeline Dot */}
            <div className="absolute top-0 left-[-10px] w-5 h-5 bg-white border-4 border-blue-500 rounded-full"></div>

            {/* Experience Card */}
            <div>
              <h3 className="text-xl font-semibold">Software Developer Intern @ Zoxima Solution Pvt. Ltd.</h3>
              <p className="text-sm text-gray-600">Feb 2025 – March 2025 | Noida, India</p>

              <p className="mt-2 text-justify">
                During my internship at Zoxima Solutions Pvt. Ltd., I contributed to the development of enterprise-level CRM solutions using Power Apps and Dynamics 365.
                I collaborated with senior developers to design workflows, automate business processes, and integrate data using Dataverse and Power Automate.
                This experience enhanced my understanding of low-code platforms, team collaboration, and real-world application development in a corporate environment.
              </p>

              <h4 className="mt-4 font-semibold">Achievements:</h4>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Built automation workflows using Power Automate.</li>
                <li>Integrated data with Dataverse for CRM functionality.</li>
                <li>Worked with Dynamics 365 to support real business processes.</li>
                <li>Collaborated in an Agile environment with regular feedback cycles.</li>
              </ul>

              <h4 className="mt-4 font-semibold">Technologies used:</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Power Apps", "Power Automate", "Dataverse", "Dynamics 365"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Projects section*/}
      {/* Projects Section */}
      <section id="project" className="w-full text-white bg-slate-600 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-slate-700 p-6 rounded-xl shadow-lg hover:scale-105 transition flex flex-col">
              <div className="relative w-full overflow-hidden rounded-t-xl">
                <img
                  src="\project1.png" // Replace with actual URL
                  alt="Project 1"
                  className="object-cover w-full h-48"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2">Crop Life</h3> {/* Reduced mb to 2 */}
              <p className="text-gray-200 text-sm  mb-4" style={{ minHeight: '3rem' }}>
                CropLife is a smart farming platform that helps farmers sell produce online, access expert blogs, and use tech tools for better productivity. It fosters community support and streamlines agricultural operations.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
                <span className="inline-block whitespace-nowrap bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold">
                  React
                </span>
                <span className="inline-block whitespace-nowrap bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold">
                  Node.js
                </span>
                <span className="inline-block whitespace-nowrap bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold">
                  MongoDB
                </span>
                <span className="inline-block whitespace-nowrap bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold">
                  RazorpayAPI
                </span>
                <span className="inline-block whitespace-nowrap bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold">
                  Express.js
                </span>
                <span className="inline-block whitespace-nowrap bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold">
                  TypeScript
                </span>
              </div>

              <div className="flex gap-2">
                <a
                  href="https://github.com/AmritenduPakhira/farmtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition w-1/2"
                >
                  {/* Icon */} Code
                </a>
                <a
                  href="https://farmtechs.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition w-1/2"
                >
                  {/* Icon */} Live Demo
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-700 p-6 rounded-xl shadow-lg hover:scale-105 transition flex flex-col">
              <div className="relative w-full overflow-hidden rounded-t-xl">
                <img
                  src="\project2.png" // Replace with actual URL
                  alt="Project 2"
                  className="object-cover w-full h-48"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2">Book Hub</h3> {/* Reduced mb to 2 */}
              <p className="text-gray-200 text-sm mb-4" style={{ minHeight: '3rem' }}>
                BookHub is a modern web application designed for book lovers to explore, review, and manage their favorite reads. It allows users to browse a vast collection of books, save them to their library, and share reviews with a vibrant reading community.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
                <span className="inline-block whitespace-nowrap bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold">
                JavaScript
                </span>
                <span className="inline-block whitespace-nowrap bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold">
                 React
                </span>
                <span className="inline-block whitespace-nowrap bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold">
                  Expree.js
                </span>
                <span className="inline-block whitespace-nowrap bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold">
                  Node.js
                </span>
                <span className="inline-block whitespace-nowrap bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold">
                  Bootstrap
                </span>
                <span className="inline-block whitespace-nowrap bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold">
                  API
                </span>
              </div>
              <div className="flex gap-2">
                <a
                  href="https://github.com/AmritenduPakhira/Bookhub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition w-1/2"
                >
                  {/* Icon */} Code
                </a>
                <a
                  href="https://bookhub-chi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition w-1/2"
                >
                  {/* Icon */} Live Demo
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-slate-700 p-6 rounded-xl shadow-lg hover:scale-105 transition flex flex-col">
              <div className="relative w-full overflow-hidden rounded-t-xl">
                <img
                  src="\project3.png" // Replace with actual URL
                  alt="Project 3"
                  className="object-cover w-full h-48"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2">Intelli Healthcare System</h3> {/* Reduced mb to 2 */}
              <p className="text-gray-200 text-sm mb-4" style={{ minHeight: '3rem' }}>
                Intelli Healthcare System is a smart medical management platform that streamlines patient records, appointments, and diagnostics. It enhances healthcare delivery through real-time data access, AI-driven insights, and efficient communication between doctors and patients.
              </p>
             <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
                <span className="inline-block whitespace-nowrap bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold">
                  IOT
                </span>
                <span className="inline-block whitespace-nowrap bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold">
                  Node.js
                </span>
                <span className="inline-block whitespace-nowrap bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold">
                  MongoDB
                </span>
                <span className="inline-block whitespace-nowrap bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold">
                  MQTT
                </span>
                <span className="inline-block whitespace-nowrap bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold">
                  Express.js
                </span>
                <span className="inline-block whitespace-nowrap bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold">
                  TypeScript
                </span>
              </div>
              <div className="flex gap-2">
                <a
                  href="https://github.com/AmritenduPakhira/IntelliHealthcare-Systrm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition w-1/2"
                >
                  {/* Icon */} Code
                </a>
                <a
                  href="https://drive.google.com/file/d/1LA20miIMDA-FoauOOKx_sKQLNr_Ld-2k/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition w-1/2"
                >
                  {/* Icon */} Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* {skills} */}
      <section id="skills" className="bg-[#2C2D50] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">My Skills</h2>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center justify-center">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center space-y-2 text-center transition transform duration-300 ease-in-out cursor-pointer"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                  e.currentTarget.style.color = "#a7f3d0";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.color = "white";
                }}
              >
                <div className="text-4xl">{skill.icon}</div>
                <span className="text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* {Certificates} */}
      <section id="certificates" className="bg-[#0f172a] text-white py-12 px-6">
        <div className="text-center mb-12">
          <h3 className="text-sm tracking-widest uppercase">What I Have</h3>
          <h2 className="text-3xl font-bold">Certifications</h2>
          <p className="mt-2 text-gray-400 max-w-xl mx-auto">
            These certifications highlight my dedication to continuous learning and expertise in cloud, security, and full stack development.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {certifications.map((cert, index) => (
            <div key={index} className="flex flex-col items-center space-y-4 bg-[#1e293b] p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              {cert.icon}
              <h4 className="font-semibold text-lg">{cert.title}</h4>
              <p className="text-gray-400 text-sm">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </section>
      {/* {Lettr of Recommendation} */}

      <section className="bg-[#2C2D50] py-16 px-6 md:px-12">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-center text-3xl md:text-4xl text-white font-bold mb-4">
            Letter of Recommendation
          </h2>
          <p className="text-center text-white text-lg mb-10">
            I am deeply honored to have received a Letter of Recommendation from
            <span className="font-semibold text-white"> Dr. Sourav Roy</span>, Director & Professor of Practice at Chitkara University,
            in recognition of my work in the field of Full Stack Development.
          </p>

          <motion.div
            className="bg-white shadow-lg rounded-xl p-8 md:p-10 text-gray-800 text-lg leading-relaxed flex flex-col md:flex-row md:items-start md:justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="md:flex-1">
              <p>
                This recommendation acknowledges the consistent efforts, dedication,
                and excellence I demonstrated throughout my college journey. I am
                truly grateful for Dr. Roy's guidance and support, which played a
                significant role in shaping my technical skills and professional
                growth.
              </p>

              <div className="mt-6 text-right">
                <p className="font-semibold text-gray-800">Dr. Sourav Roy</p>
                <p className="text-sm text-gray-500">
                  Director & Professor of Practice<br />
                  Chitkara University
                </p>
              </div>
            </div>

            <div className="mt-6 md:mt-0 md:ml-8 flex-shrink-0">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQGH975RGewZFQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724093611503?e=1753315200&v=beta&t=4jrfQTMKAd9oDJKSgsVKd2BE3oHoQ-Vb3qGVwbj4G_0"
                alt="Dr. Sourav Roy"
                className="w-40 h-40 rounded-full object-cover shadow-md"
              />
            </div>
          </motion.div>

          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="/Lor.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
            >
              View / Download Letter
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* {Achivements} */}
      <section id="achivements" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: "#f5f7fa", padding: "40px 20px" }}>
        <h2 style={{ color: "#0056b3", fontWeight: "700", fontSize: "2.2rem", marginBottom: "20px" }}>
          Achievements
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "25px" }}>
          {achievements.map(({ title, description, icon }) => (
            <div
              key={title}
              style={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                padding: "25px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.backgroundColor = "#e0f7fa";
                e.currentTarget.style.cursor = "pointer";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.backgroundColor = "#fff";
                e.currentTarget.style.cursor = "default";
              }}
            >
              <div
                style={{
                  fontSize: "2.8rem",
                  marginBottom: "15px",
                  color: "#007bff",
                }}
                aria-label="icon"
              >
                {icon}
              </div>
              <h3 style={{ fontWeight: "600", fontSize: "1.25rem", color: "#222", marginBottom: "10px" }}>
                {title}
              </h3>
              <p style={{ fontSize: "1rem", color: "#555", lineHeight: "1.5" }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* {Contact us} */}

      <section id="conatctus" className="bg-slate-600 text-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Google Map */}
          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
            <iframe
              title="My Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472587.3928086891!2d87.00933067343749!3d22.27461799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02b45affffffff%3A0xdfbf6be6ae060bf3!2sAllahabad%20Bank%20-%20Pingla%20Branch!5e0!3m2!1sen!2sin!4v1747635098058!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>

          {/* Right: Contact Details */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Contact Me</h2>
            <p className="text-lg">Feel free to reach out anytime:</p>

            <div className="space-y-4 text-base">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-xl mt-1 text-blue-300" />
                <p>Indian Bank, Pingla, Paschim Medinipur, West Bengal</p>
              </div>
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-xl mt-1 text-green-300" />
                <p>+91-8900564054</p>
              </div>
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-xl mt-1 text-yellow-300" />
                <p>pakhiraamritendu@gmail.com</p>
              </div>
            </div>

            <a
              href="/my_resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition duration-300"
            >
              <FaDownload /> Download Resume
            </a>
          </div>
        </div>
      </section>


    </>
  );
};


export default Hero;
