import { RiReactjsLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { SiPytorch } from "react-icons/si";
import { SiMicrosoftazure } from "react-icons/si";
import { SiApachespark } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { SiPowerbi } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const Frameworks = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2
        className="my-20 text-center text-4xl"
        style={{
          fontFamily: "var(--font-arimo)",
          fontWeight: 500,
          fontSize: 28,
          color: "#3B3B3B",
        }}
      >
        Frameworks and Libraries
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-2 border-neutral-800 p-4">
          <FaPython className="text-5xl" style={{ color: "#3B3B3B" }} />
        </div>
        <div className="rounded-2xl border-2 border-neutral-800 p-4">
          <SiPytorch className="text-5xl" style={{ color: "#3B3B3B" }} />
        </div>
        <div className="rounded-2xl border-2 border-neutral-800 p-4">
          <SiMicrosoftazure className="text-5xl" style={{ color: "#3B3B3B" }} />
        </div>
        <div className="rounded-2xl border-2 border-neutral-800 p-4">
          <SiApachespark className="text-5xl" style={{ color: "#3B3B3B" }} />
        </div>
        <div className="rounded-2xl border-2 border-neutral-800 p-4">
          <FaJs className="text-5xl" style={{ color: "#3B3B3B" }} />
        </div>
        <div className="rounded-2xl border-2 border-neutral-800 p-4">
          <SiPowerbi className="text-5xl" style={{ color: "#3B3B3B" }} />
        </div>
        <div className="rounded-2xl border-2 border-neutral-800 p-4">
          <BiLogoPostgresql className="text-5xl" style={{ color: "#3B3B3B" }} />
        </div>
      </div>
    </div>
  );
};

export default Frameworks;
