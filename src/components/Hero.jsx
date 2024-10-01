import React from "react";
import "./button.css";

const Hero = () => {
  return (
    <div className=" mx-12 mt-24 flex flex-col-reverse 2xl:mx-64 lg:mx-48 sm:mx-24 2xl:justify-around md:flex-row md:gap-8 items-center justify-between py-6">
      <div className="flex flex-col items-center md:items-start md:text-left text-center">
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
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <div className="icon_cont">
                <span className="icon"></span>
              </div>
              <span className="text_button">Download Résumé</span>
            </a>
          </button>
        </div>
      </div>

      <div className="mb-8 xl:mb-0 ml- lg:flex-col">
        <img
          src={import.meta.env.VITE_PUBLIC_URL+"/homepage_image_1.png"}
          alt="homepage-headshot"
          style={{
            width: "450px",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
