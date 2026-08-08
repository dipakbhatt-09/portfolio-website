import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  FaPython,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaBug
} from "react-icons/fa";

import {
  SiDjango,
  SiPostgresql,
  SiPostman,
  SiSelenium,
  SiTensorflow,
  SiPytorch,
  SiDocker
} from "react-icons/si";

import api from "../../services/api";
import "./Skills.css";


const skillIcons = {

  python: <FaPython />,
  react: <FaReact />,
  javascript: <FaJs />,
  html: <FaHtml5 />,
  css: <FaCss3Alt />,

  django: <SiDjango />,
  postgresql: <SiPostgresql />,
  sql: <FaDatabase />,

  git: <FaGitAlt />,
  github: <FaGithub />,
  linux: <FaLinux />,
  docker: <SiDocker />,

  postman: <SiPostman />,

  "qa engineer": <FaBug />,
  selenium: <SiSelenium />,

  "machine learning": <SiTensorflow />,
  tensorflow: <SiTensorflow />,
  pytorch: <SiPytorch />

};



const Skills = () => {

  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchSkills = async () => {

      try {

        const response = await api.get("skills/");

        const activeSkills = response.data.filter(
          (skill) => skill.is_active
        );

        setSkills(activeSkills);

      } catch (error) {

        console.log(
          "Error fetching skills:",
          error
        );

      } finally {

        setLoading(false);

      }

    };


    fetchSkills();

  }, []);



  if (loading) {

    return (

      <section className="skills-section">

        <div className="container">

          <h2 className="section-title">
            My Skills
          </h2>

          <p className="loading-text">
            Loading skills...
          </p>

        </div>

      </section>

    );

  }



  return (

    <section 
      className="skills-section"
      id="skills"
    >

      <div className="container">


        <div className="section-header">

          <h2 className="section-title">
            My Skills
          </h2>

        </div>



        <div className="skills-grid">


          {skills.map((skill) => (

            <motion.div

              className="skill-card"

              key={skill.id}

              initial={{
                opacity: 0,
                y: 40
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              viewport={{
                once: true
              }}

              whileHover={{
                y: -10,
                scale: 1.05
              }}

              transition={{
                duration: 0.3
              }}

            >


              <div className="skill-icon">

                {
                  skillIcons[
                    skill.skill_name.toLowerCase()
                  ] || <FaDatabase />
                }

              </div>



              <h3>
                {skill.skill_name}
              </h3>



              <p>
                {skill.description}
              </p>


            </motion.div>

          ))}


        </div>


      </div>


    </section>

  );

};


export default Skills;