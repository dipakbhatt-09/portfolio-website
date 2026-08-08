import { useEffect, useState } from "react";
import api from "../../services/api";
import "./Experience.css";

const Experience = () => {

  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetchExperience();
  }, []);


  const fetchExperience = async () => {

    try {

      const res = await api.get("experience/");

      const activeExperience = res.data.filter(
        (item) => item.is_active === true
      );

      setExperience(activeExperience);

    } catch (err) {

      console.error("Error fetching experience:", err);

    } finally {

      setLoading(false);

    }

  };


  if (loading) {

    return (
      <section className="experience-section">
        <h2>Loading...</h2>
      </section>
    );

  }


  return (

    <section className="experience-section" id="experience">

      <div className="experience-container">


        <div className="experience-header">

          <h2>Experience</h2>


        </div>



        <div className="experience-list">


          {experience.map((item)=>(


            <div 
              className="experience-card"
              key={item.id}
            >


              <div className="experience-date">

                {item.start_date} -{" "}

                {
                  item.currently_working
                  ? "Present"
                  : item.end_date
                }

              </div>



              <h3>
                {item.job_title}
              </h3>



              <h4>
                {item.company}
              </h4>



              <span className="experience-type">

                {item.employment_type}

              </span>



              <p className="experience-location">

                {item.location}

              </p>


              <p className="experience-description">

                {item.description}

              </p>


            </div>


          ))}


        </div>


      </div>


    </section>

  );

};


export default Experience;