import "./framework.css";
import { FaPython } from "react-icons/fa";
import { SiPytorch } from "react-icons/si";
import { SiMicrosoftazure } from "react-icons/si";
import { SiApachespark } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { SiPowerbi } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const Frameworks = () => {
  return (
    <div className="pb-12">
      <p
        className="mt-20 mb-12 text-center text-4xl"
        style={{
          fontFamily: "var(--font-arimo)",
          fontWeight: 500,
          fontSize: 28,
          color: "#3B3B3B",
        }}
      >
        Frameworks and Libraries
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="framework-wrapper">
          <a
            href="https://www.python.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPython className="text-5xl icon" style={{ color: "#3B3B3B" }} />
          </a>
        </div>
        <div className="framework-wrapper">
          <a
            href="https://pytorch.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiPytorch className="text-5xl icon" style={{ color: "#3B3B3B" }} />
          </a>
        </div>
        <div className="framework-wrapper">
          <a
            href="https://azure.microsoft.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiMicrosoftazure
              className="text-5xl icon"
              style={{ color: "#3B3B3B" }}
            />
          </a>
        </div>
        <div className="framework-wrapper">
          <a
            href="https://spark.apache.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiApachespark
              className="text-5xl icon"
              style={{ color: "#3B3B3B" }}
            />
          </a>
        </div>
        <div className="framework-wrapper">
          <a
            href="https://www.javascript.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaJs className="text-5xl icon" style={{ color: "#3B3B3B" }} />
          </a>
        </div>
        <div className="framework-wrapper">
          <a
            href="https://powerbi.microsoft.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiPowerbi className="text-5xl icon" style={{ color: "#3B3B3B" }} />
          </a>
        </div>
        <div className="framework-wrapper">
          <a
            href="https://www.postgresql.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoPostgresql
              className="text-5xl icon"
              style={{ color: "#3B3B3B" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Frameworks;
