import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./navbar-button.css";

const Contact = () => {
  return (
    <div className="justify-center text-center mt-8 mx-16">
      
      <p
        style={{
          fontFamily: "var(--font-arimo)",
          fontWeight: 400,
          fontSize: 20,
          color: "#3B3B3B",
        }}
      >
        Thank you for exploring my work! I’d love to hear your thoughts—feel free to reach out with any questions or feedback.
      </p>

      
      <div className="flex items-center justify-center gap-4 text-2xl my-8">
        
        <a
          href="https://github.com/Amoghavarsha-Rao"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-hover"
        >
          <FaGithub style={{ color: "#3B3B3B" }} />
        </a>

        
        <a
          href="https://linkedin.com/in/amoghavarsharao"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-hover"
        >
          <FaLinkedin style={{ color: "#3B3B3B" }} />
        </a>

        
        <a href="mailto:amoghavarsharao99@gmail.com" className="icon-hover">
          <MdEmail
            style={{ color: "#3B3B3B", width: "28px", height: "28px" }}
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
