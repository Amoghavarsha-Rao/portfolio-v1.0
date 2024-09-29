import React from "react";
import "./experience.css";

const PROJECTS = [
  {
    image: "src/assets/projects/Project-1.jpg", // Replace with actual image path
    title: "Project 1",
    description: "This is a sample project description.",
    tech: ["React", "JavaScript", "CSS"],
  },
  {
    image: "src/assets/projects/Project-2.jpg", // Replace with actual image path
    title: "Project 2",
    description: "This is another sample project description.",
    tech: ["Node.js", "Express", "MongoDB"],
  },
];

const Projects = () => {
  return (
    <div className="pb-4 container mx-auto px-4">
      {" "}
      
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
          <div
            key={index}
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
                  fontSize: 16,
                  color: "#3B3B3B",
                }}
              >
                {project.description}
              </p>
              <div>
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="experience-wrapper mr-2 mb-2 inline-block rounded px-2 py-1 text-sm"
                    style={{
                      fontFamily: "var(--font-arimo)",
                      fontWeight: 400,
                      fontSize: 16,
                      color: "#3B3B3B",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
