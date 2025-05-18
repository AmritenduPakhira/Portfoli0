import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';



const FaLinkedinIcon: React.FC = () => <FontAwesomeIcon icon={faLinkedin} size="lg" />;

const FaInstagramIcon: React.FC = () => <FontAwesomeIcon icon={faInstagram} size="lg" />;

const FaTwitterIcon: React.FC = () => <FontAwesomeIcon icon={faTwitter} size="lg" />;
const FaFacebookIcon: React.FC = () => <FontAwesomeIcon icon={faFacebook} size="lg" />;
const FaGithubIcon: React.FC = () => <FontAwesomeIcon icon={faGithub} size="lg" />;

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col lg:flex-row">
      {/* Left Side */}
      <div className="lg:w-1/2 w-full bg-[#0f172a] flex flex-col justify-center items-start p-10 z-10">
        <h2 className="text-xl mb-2 text-white">Hi, I am</h2>
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-300">Amritendu Pakhira</h1>
        <p className="text-gray-600 mt-3 text-gray-400">Resilient Software Engineer</p>

        <div className="flex gap-4 mt-6">
          <a
            href="https://www.linkedin.com/in/amritendupakhira/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-dark text-[#0e76a8] shadow-lg hover:scale-110 hover:bg-gray-100 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedinIcon />
          </a>
          <a
            href="https://github.com/AmritenduPakhira"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-dark text-[#0e76a8] shadow-lg hover:scale-110 hover:bg-gray-100 transition"
            aria-label="Github"
          >
            <FaGithubIcon />
          </a>
          <a
            href="https://www.instagram.com/amritendupakhira123?igsh=MWllb3A3bXdhY3o2ZQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-dark text-[#e1306c] shadow-lg hover:scale-110 hover:bg-pink-100 transition"
            aria-label="Instagram"
          >
            <FaInstagramIcon />
          </a>
          <a
            href="https://x.com/AmritenduPakhi3"
            className="p-3 rounded-full bg-dark text-[#1DA1F2] shadow-lg hover:scale-110 hover:bg-blue-100 transition"
            aria-label="Twitter"
          >
            <FaTwitterIcon />
          </a>
          <a
            href="https://www.facebook.com/amritendupakhira.riju"
            className="p-3 rounded-full  bg-dark text-[#1877F2] shadow-lg hover:scale-110 hover:bg-blue-100 transition"
            aria-label="Facebook"
          >
            <FaFacebookIcon />
          </a>
        </div>


        <p className="mt-10 text-gray-300 max-w-lg text-base leading-relaxed font-sans tracking-wide text-justify">
          Being a software engineering student and a skilled full stack developer with strong expertise in both frontend and backend technologies, including databases like MongoDB and SQL, I am dedicated to writing clean, efficient code. While I occasionally face challenges with debugging and troubleshooting, I view these as valuable opportunities to deepen my problem-solving skills and enhance my development experience.
        </p>

      </div>


      {/* Right Side with Diagonal */}
      <div className="lg:w-1/2 bg-[#0f172a]  justify-center items-center p-10">
        <img
          src="./profile1.JPG"
          alt="Profile"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
