import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "../../services/api";
import "./Home.css";

import {
  //FaDownload,
  //FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import TypingText from "./TypingText";

function Home() {
  const [hero, setHero] = useState(null);
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [heroRes, socialRes] = await Promise.all([
          api.get("hero/"),
          api.get("social-links/"),
        ]);

        setHero(heroRes.data[0]);
        setSocialLinks(
          socialRes.data.filter((item) => item.is_active)
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const getIcon = (platform) => {
    const name = platform.toLowerCase();

    if (name.includes("github")) return <FaGithub />;
    if (name.includes("linkedin")) return <FaLinkedin />;
    if (name.includes("facebook")) return <FaFacebook />;
    if (name.includes("instagram")) return <FaInstagram />;
    if (name.includes("twitter") || name.includes("x"))
      return <FaXTwitter />;
    if (name.includes("youtube")) return <FaYoutube />;
    if (name.includes("mail")) return <FaEnvelope />;

    return <FaGlobe />;
  };

  if (!hero) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <section className="home" id="home">
      <div className="home-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="home-content"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-tag">
             Welcome to my Portfolio
          </span>

          <h3 className="hero-small">
            Hello, It's Me
          </h3>

          <h1 className="hero-name">
            {hero.full_name}
          </h1>

          <div className="hero-title">
            <TypingText />
          </div>

          <p className="hero-description">
            {hero.subtitle}
          </p>

          {/* Social Icons */}
          <div className="social-icons">
            {socialLinks.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={item.platform}
              >
                {getIcon(item.platform)}
              </a>
            ))}
          </div>

         {/* Buttons */}
          {/* <div className="hero-buttons">
            <a
              href={hero.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary-btn"
            >
              <FaDownload />
              <span>Download CV</span>
            </a>
            <a
              href="#contact"
              className="btn secondary-btn"
            >
              <FaEnvelope />
              <span>Contact Me</span>
            </a>
          </div>


        <div className="hero-buttons">
        <a href="#contact"className="btn primary-btn">
        <FaEnvelope />
        <span>Contact Me</span>
        </a>
        </div>
   */}


        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="home-image"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-wrapper">

            <div className="image-glow"></div>

            <div className="image-ring"></div>

            <img
              src={hero.profile_image}
              alt={hero.full_name}
              className="profile-image"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Home;