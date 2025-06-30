import React from "react";

const About = () => {
  return (
    <div className="md:gap-8 mx-12 mt-16 flex flex-col 2xl:justify-around md:flex-row items-center justify-between py-6 2xl:mx-64 lg:mx-48 sm:mx-24">
      <div className="mb-8 md:mb-0">
        <img
          src={import.meta.env.VITE_PUBLIC_URL+"/about.png"}
          alt="about-image"
          style={{
            width: "432px",
            height: "auto",
          }}
        />
      </div>

      <div className="flex flex-col text-xl items-center md:items-start text-center md:text-left">
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
              // fontSize: 20,
              color: "#3B3B3B",
              lineHeight: "1.5",
              marginBottom: "16px",
            }}
          >
            I am a Data Engineer currently working at the Teacher Retirement System of Texas. I hold a Master’s degree in Business Analytics and Artificial Intelligence from UT Dallas and 
            {/* student currently pursuing my Master’s degree in Business
            Analytics at UT Dallas.  */}
            my experience includes optimizing data
            pipelines for faster processing and developing machine learning
            algorithms to tackle real-world problems.
          </p>

          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              // fontSize: 20,
              color: "#3B3B3B",
              lineHeight: "1.5",
            }}
          >
            My core competencies lie in Python, PySpark, SQL, and cloud tools
            like Azure Synapse and Power BI, and I hold certifications in
            Applied Machine Learning from UT Dallas and a Data Analytics certifications from Google.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
