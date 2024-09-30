import React from "react";
import "./experience.css";

const EXPERIENCES = [
  {
    year: "August 2024 - Present",
    role: "Software Development and Data Engineering intern",
    company: "KTech Products LLC",
    description1:
      "Engineered and optimized data pipelines that increased data processing efficiency by 40%, enabling faster analytics and reducing ETL runtime by 30%.",
    description2:
      "Developed and tested key software features that improved system efficiency, leading to a 15% reduction in processing time. Actively collaborated in code reviews, that identified and resolved 30+ critical issues overall, enhancing code quality.",
    frameworks: ["Microsoft Azure Cloud", "Pytorch", "Python"],
  },
  {
    year: "June 2024 - August 2024",
    role: "IT intern – Investment and Data Analytics",
    company: "Teacher Retirement System of Texas",
    description1:
      "Leveraged PySpark to integrate client API for data import, significantly reducing file drop incidents compared to SFTP. Implemented comprehensive data processing, including indexing, to ensure data integrity and optimal query performance in SQL Server Management Services.",
    description2:
      "Participated in migrating SSIS Packages to Azure Synapse as part of an agency-wide modernization initiative to achieve 100% functionality and reduce file drops and ensure smooth pipeline operations with a very low failure rate.",
    frameworks: [
      "Microsoft Azure Cloud",
      "PySpark",
      "SQL Server Integration Services",
    ],
  },
];

const Experience = () => {
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
        Experience
      </h2>
      <div className="max-w-4xl mx-auto">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col md:flex-row items-start"
          >
            <div className="text-left md:text-right w-full md:w-1/3 md:pr-4 mb-4 md:mb-0">
              <p
                style={{
                  fontFamily: "var(--font-arimo)",
                  fontWeight: 500,
                  fontSize: 20,
                }}
              >
                {experience.year}
              </p>
            </div>

            <div className="w-full md:w-2/3 md:pl-4">
              <h3
                className="mb-2 font-semibold"
                style={{
                  fontFamily: "var(--font-arimo)",
                  fontWeight: 600,
                  fontSize: 20,
                }}
              >
                {experience.role},{" "}
                <span
                  style={{
                    fontFamily: "var(--font-arimo)",
                    fontSize: 20,
                    fontWeight: 400,
                  }}
                >
                  {experience.company}
                </span>
              </h3>
              <ul className="list-disc pl-5">
                <li
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-arimo)",
                    fontSize: 18,
                  }}
                >
                  {experience.description1}
                </li>
                <li
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-arimo)",
                    fontSize: 18,
                  }}
                >
                  {experience.description2}
                </li>
              </ul>
              <div>
                {experience.frameworks.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="experience-wrapper mr-2 mb-2 inline-block rounded px-2 py-1"
                    style={{ fontFamily: "var(--font-arimo)" }}
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

export default Experience;
