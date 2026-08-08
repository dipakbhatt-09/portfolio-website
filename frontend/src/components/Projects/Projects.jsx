import { useEffect, useState } from "react";
import api from "../../services/api";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await api.get("projects/");

      const activeProjects = res.data.filter(
        (item) => item.is_active === true
      );

      setProjects(activeProjects);
    } catch (err) {
      console.error("Error fetching projects:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="projects-section">
        <h2 className="loading-text">Loading...</h2>
      </section>
    );
  }

  return (
    <section className="projects-section" id="projects">
      <div className="container">

        <div className="section-header">
          <h2 className="section-title">
            My <span>Projects</span>
          </h2>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <div className="project-card" key={project.id}>

              <div className="project-image-box">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>

              <div className="project-content">

                <h3 className="project-title">
                  {project.title}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="technology">
                  {project.technologies}
                </div>

                <div className="project-buttons">

                  {project.github_link && (
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn github-btn"
                    >
                      GitHub
                    </a>
                  )}

                  {project.live_demo && (
                    <a
                      href={project.live_demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn live-btn"
                    >
                      Live Demo
                    </a>
                  )}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;