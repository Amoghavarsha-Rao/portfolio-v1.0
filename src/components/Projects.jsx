import React from "react";
import "./experience.css";

const PROJECTS = [
  {
    image: "src/assets/projects/Project-1.jpg",
    title: "Machine Learning Project Collection",
    description: "A collection of ML projects showcasing data preprocessing, feature engineering, model development, and performance evaluation across classification, regression, and clustering domains. The focus is on real-world applications, data-driven insights, and model optimization using frameworks like SK Learn and PyTorch.",
    tech: ["Python", "PyTorch", "SKLearn"],
    link: "https://github.com/Amoghavarsha-Rao/ML-Project-Collection",
  },
  {
    image: "src/assets/projects/Project-2.jpg",
    title: "Driver Truck Analysis",
    description: "Conducted in-depth analyses on variables like velocity and location, identifying key correlations with the risk factor, contributing valuable insights for strategic decision making in the transportation sector.",
    tech: ["PySpark", "R", "PowerBI"],
    link: "https://example.com/project2",
  },
  {
    image: "src/assets/projects/Project-3.jpg",
    title: "Web Portfolio",
    description: "An iterative portfolio designed and built from scratch by me. This dynamic web portfolio showcases my software and web development experience. The site features responsive design, interactive elements, and smooth navigation for an engaging user experience. Highlighting my projects, skills, and professional journey, it represents my capabilities comprehensively.",
    tech: ["ReactJS", "TailwindCSS"],
    link: "https://example.com/project3",
  },
];

const Projects = () => {
  return (
    <div className="pb-4 container mx-auto px-4">
      <h2
        className="mt-20 mb-12 text-center text-4xl"
        style={{
          fontFamily: "var(--font-arimo)",
          fontWeight: 500,
          fontSize: 28,
          color: "#3B3B3B",
        }}
      >
        Projects
      </h2>
      <div className="max-w-4xl mx-auto">
        {PROJECTS.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-8 flex flex-col md:flex-row items-start"
          >
            <div className="w-full mb-4 md:mb-0 md:w-1/3 md:pr-4">
              <img
                src={project.image}
                alt={project.title}
                className="rounded"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>

            <div className="w-full md:w-2/3 md:pl-4">
              <h3
                className="mb-2 font-semibold"
                style={{
                  fontFamily: "var(--font-arimo)",
                  fontWeight: 600,
                  fontSize: 20,
                  color: "#3B3B3B",
                }}
              >
                {project.title}
              </h3>
              <p
                className="mb-4 text-neutral-600"
                style={{
                  fontFamily: "var(--font-arimo)",
                  fontWeight: 400,
                  fontSize: 18,
                  color: "#3B3B3B",
                }}
              >
                {project.description}
              </p>
              <div>
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="experience-wrapper mr-2 mb-2 inline-block rounded px-2 py-1"
                    style={{
                      fontFamily: "var(--font-arimo)",
                      fontWeight: 400,
                      fontSize: 18,
                      color: "#3B3B3B",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
