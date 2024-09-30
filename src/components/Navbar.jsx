import logosvg from "../assets/svg_logo_nobg.svg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./navbar-button.css";

const Navbar = () => {
  return (
    <nav className=" mb-4 mx-12 mt-8 flex items-center justify-between py-6 2xl:mx-64 lg:mx-48 sm:mx-24 ">
      <div className="w-16 flex flex-shrink-0 items-center ">
        <img src={logosvg} alt="logo" style={{ color: "#3B3B3B" }} />
      </div>
      <div className="flex items-center justify-center gap-4 text-2xl">
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
    </nav>
  );
};

export default Navbar;
