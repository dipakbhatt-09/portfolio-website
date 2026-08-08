import { useEffect, useState } from "react";
import api from "../../services/api";
import "./About.css";



function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await api.get("about/");
        setAbout(response.data[0]);
      } catch (error) {
        console.error("About data fetch failed:", error);
      }
    };

    fetchAbout();
  }, []);

  if (!about) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <section className="about" id="about">
      <div className="about-content">

        <h2>About Me</h2>

        <h3>{about.heading}</h3>

        <p>{about.description}</p>

        <div className="about-info">

          <p>
            <strong>Email :</strong> {about.email}
          </p>

          <p>
            <strong>Phone :</strong> {about.phone}
          </p>

          <p>
            <strong>Address :</strong> {about.address}
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;