import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "../../services/api";
import "./Education.css";


const Education = () => {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchEducation = async () => {

      try {

        const res = await api.get("education/");

        const activeEducation = res.data.filter(
          item => item.is_active
        );

        setEducation(activeEducation);

      } catch(error){

        console.log(
          "Education error:",
          error
        );

      } finally {
        setLoading(false);
      }
    };
    fetchEducation();

  }, []);



  if(loading){

    return (

      <section className="education-section">

        <h2 className="loading-text">
          Loading Education...
        </h2>

      </section>
    );
  }

  return (
    <section 
      className="education-section"
      id="education"
    >
      <div className="container">

        <div className="section-header">

          <h2 className="section-title">
            Education
          </h2>

        </div>

        <div className="education-grid">

          {
            education.map(item=>(

              <motion.div
                className="education-card"
                key={item.id}
                initial={{
                  opacity:0,
                  y:40
                }}


                whileInView={{
                  opacity:1,
                  y:0
                }}


                viewport={{
                  once:true
                }}


                whileHover={{
                  y:-10,
                  scale:1.03
                }}

                transition={{
                  duration:.4
                }}

              >

                <span className="education-year">
                  {item.start_year} - {item.end_year}
                </span>

                <h3>
                  {item.degree}
                </h3>

                <h4>
                  {item.institution}
                </h4>


                <p className="education-location">
                  {item.location}
                </p>

                <p className="education-description">
                  {item.description}
                </p>

              </motion.div>

            ))
          }

        </div>

      </div>

    </section>

  );

};

export default Education;