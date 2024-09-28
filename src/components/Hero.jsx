import React from "react";
import "./button.css";

const Hero = () => {
  return (
    <div className="mx-48 mt-16 flex items-center justify-between py-6">
      <div>
        <p
          style={{
            fontFamily: "var(--font-arimo)",
            fontWeight: 500,
            fontSize: 16,
            color: "#3B3B3B",
          }}
        >
          Hi, I'm Amogh!
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
              fontSize: 36,
              color: "#3B3B3B",
              lineHeight: "1.5",
            }}
          >
            I leverage machine learning and data analytics to derive impactful
            insights.
          </p>
        </div>

        <div className="pt-10">
          <button
            className="button"
            style={{
              fontFamily: "var(--font-arimo)",
            }}
          >
            <a
              href="https://www.dropbox.com/scl/fi/8nyhos4br0aac9o6mjdhn/Amogh-Resume.pdf?rlkey=pkt0vrgxy4ele7k9jz6iuo6ui&st=ost0az0h&dl=0"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#3B3B3B",
                fontWeight: 500,
                display: "flex",
                alignItems: "center", // Makes the text and icon inline
                gap: "0.5rem", // Adds space between text and icon
              }}
            >
              <div className="icon_cont">
                <span className="icon">🡪</span>
              </div>
              <span className="text_button">Download CV</span>
            </a>
          </button>
        </div>

        {/* <div className="pt-10">
          <p
            style={{
              fontFamily: "var(--font-arimo)",
              fontSize: 16,
              color: "#3B3B3B",
            }}
          >
            <a
              href="https://www.dropbox.com/scl/fi/8nyhos4br0aac9o6mjdhn/Amogh-Resume.pdf?rlkey=pkt0vrgxy4ele7k9jz6iuo6ui&st=ost0az0h&dl=0"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-arimo)",
                fontWeight: 650,
                textDecoration: "underline",
                color: "#3B3B3B",
              }}
            >
              Download CV
            </a>
          </p>
        </div> */}
      </div>

      <div className="items-center justify-between">
        <img
          className="ml -4 pl-8"
          src="src/assets/homepage_image_1.png"
          alt="homepage-headshot"
          style={{ maxWidth: "432px", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default Hero;
