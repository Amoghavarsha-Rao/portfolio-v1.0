import { RiReactjsLine } from "react-icons/ri";

const Techstack = () => {
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
        Techstack and Libraries
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-2 border-neutral-800 p-4">
          <RiReactjsLine className="text-5xl" style={{ color: "#3B3B3B" }} />
        </div>
      </div>
    </div>
  );
};

export default Techstack;
