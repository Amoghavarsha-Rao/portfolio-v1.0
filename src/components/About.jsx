import React from "react";

const About = () => {
  return (
    <div className="mx-8 md:mx-48 mt-16 flex flex-col md:flex-row items-center justify-between py-6">
      <div className="mb-8 md:mb-0">
        <img
          src="src/assets/about.png"
          alt="about-image"
          style={{
            width: "432px", // Set fixed width
            height: "auto",  // Maintain aspect ratio
          }}
        />
      </div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <p
          className="pb-2"
          style={{
            fontFamily: "var(--font-arimo)",
            fontWeight: 500,
            fontSize: 16,
            color: "#3B3B3B",
          }}
        >
          Nice to meet you!
        </p>

        <div
          style={{
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              fontSize: 20,
              color: "#3B3B3B",
              lineHeight: "1.5",
              marginBottom: "16px",
            }}
          >
            I am a student currently pursuing my Master’s degree in Business
            Analytics at UT Dallas. My experience includes optimizing data
            pipelines for faster processing and developing machine learning
            algorithms to tackle real-world problems.
          </p>

          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              fontSize: 20,
              color: "#3B3B3B",
              lineHeight: "1.5",
            }}
          >
            My core competencies lie in Python, PySpark, SQL, and cloud tools
            like Azure Synapse and Power BI, and I hold certifications in
            Applied Machine Learning and Google Data Analytics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
