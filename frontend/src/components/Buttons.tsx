import { useClickOutside } from "@/hooks/useClickOutside";
import { useState, useRef, RefObject, ChangeEvent } from "react";
import { MdSettings } from "react-icons/md";
import "katex/dist/katex.min.css"
import { InlineMath, BlockMath } from "react-katex";

export const GateButton = ({
  name,
  onGate,
  color,
}: {
  name: string;
  onGate: Function;
  color?: string;
}) => {
  return (
    <button
      className={`button ${color ? color : "black"}`}
      onClick={() => onGate(name)}
    >
      <InlineMath math={`${name.toUpperCase()}`}/>
    </button>
  );
};

export const RotationGateButton = ({
  name,
  onGate,
  color,
}: {
  name: string;
  onGate: Function;
  color?: string;
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [theta, setTheta] = useState("");
  const ref: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => {
    setDropdownOpen(false);
  });

  const handleThetaChange = (event: ChangeEvent<HTMLInputElement>) => {
    const theta = event.target.value;
    if ((theta.trim() !== "" && Number.isFinite(+theta)) || theta == "") {
      setTheta(theta);
    }
  };

  return (
    <div className="relative flex w-54" ref={ref}>
      <button
        className={`button w-4/5 ${color ? color : "black"} rounded-r-none!`}
        onClick={() => onGate(name, theta)}
      >
        <InlineMath math={`${name.toUpperCase()}(\\theta)`}/>
      </button>
      <button
        className={`button w-1/5 ${color ? color : "black"} bg-linear-240! p-2 rounded-h-full flex items-center justify-center rounded-l-none border-l-0`}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <MdSettings className="w-full aspect-square" />
      </button>
      <div
        className={`absolute pt-3 w-full top-full left-0 ${dropdownOpen ? "flex" : "hidden"} flex-col z-10`}
      >
        <div
          className={`border-t border-l caret-${color} absolute rotate-45 w-2 h-2 top-2 right-[9%]`}
        ></div>
        <div
          className={`flex items-center justify-center p-4 h-18 bg-linear-330 bg-${color} rounded-xl`}
        >
          <InlineMath math={"Set\\;\\theta="}/>
          <input
            type="text"
            className={`w-2/5 mx-2 text-${color} px-2 text-xl font-latex`}
            onChange={handleThetaChange}
            value={theta}
            maxLength={5}
          />
          <InlineMath math={"rad"}/>
        </div>
        <div className="absolute w-full h-18 bg-stone-950 -z-10 rounded-xl"></div>
      </div>
    </div>
  );
};
