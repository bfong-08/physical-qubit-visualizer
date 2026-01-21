"use client";

import { useState, useEffect, useRef, ChangeEvent, RefObject } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { MdSettings } from "react-icons/md";
import { useClickOutside } from "@/hooks/useClickOutside";

const mathJaxConfig = {
  tex: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
  },
};

type amps = {
  alpha_real: number;
  alpha_imag: number;
  beta_real: number;
  beta_imag: number;
};

export default function Home() {
  const [amps, setAmps]: any = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [phase, setPhase] = useState("");
  const [phaseDropdownOpen, setPhaseDropdownOpen] = useState(false);

  useEffect(() => {
    async function fetchAmps() {
      try {
        const res = await fetch("http://localhost:8000/api/amps");
        if (!res.ok) throw new Error("Network response was not ok");
        const result = await res.json();
        setAmps(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchAmps();
  }, []);

  async function onGate(gate: string, theta?: number) {
    const phase = theta ? theta : 0;
    const body = {
      gate_name: gate,
      phase: phase,
    };
    try {
      const res = await fetch("http://localhost:8000/api/gate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const errorData = await res.json();
        console.error("API Error Detals:", errorData);
        throw new Error("Network response was not ok");
      }
      const result = await res.json();
      setAmps(result);
    } catch (err: any) {
      setError(err.message);
    }
  }

  const formattedState = `${amps && `(${amps.alpha_real.toFixed(2)}+${amps.alpha_imag.toFixed(2)}i)\\ket{0}+(${amps.beta_real.toFixed(2)}+${amps.beta_imag.toFixed(2)}i)\\ket{1}`}`;

  return (
    <div className="flex flex-col font-gabarito text-stone-2s00">
      <div className="flex justify-center items-center h-16 border-b border-stone-700 bg-linear-[170deg] from-stone-800 to-stone-950">
        <h1 className="text-3xl font-medium">Qubit State Visualizer</h1>
      </div>
      <MathJaxContext config={mathJaxConfig}>
        <div className="flex justify-center items-center text-2xl my-2">
          {loading && <span>Loading...</span>}
          {error && <span>Error: {error}</span>}
          {amps && <MathJax>{`$$\\ket{\\psi}=${formattedState}$$`}</MathJax>}
        </div>
        <div className="flex items-center justify-center gap-2 flex-col">
          <button
            className="border border-stone-700 px-4 py-2 rounded-lg text-stone-400 hover:bg-stone-900 hover:text-stone-200 active:bg-stone-950 active:text-stone-300 my-2"
            onClick={() => onGate("reset")}
          >
            Reset State
          </button>
          <div className="flex gap-2">
            <div className="p-2 border border-stone-700 rounded-[20px]">
              <GateButton name="h" onGate={onGate} />
            </div>
            <div className="flex gap-4 border border-stone-700 rounded-[20px] p-2">
              <GateButton name="x" onGate={onGate} color="sky" />
              <GateButton name="y" onGate={onGate} color="sky" />
              <GateButton name="z" onGate={onGate} color="sky" />
            </div>
          </div>
          <div className="flex gap-4 border border-stone-700 p-2 rounded-[20px]">
            <GateButton name="s" onGate={onGate} color="emerald" />
            <GateButton name="t" onGate={onGate} color="emerald" />
            <RotationGateButton name="p" onGate={onGate} color="emerald" />
          </div>
          <div className="flex border border-stone-700 rounded-[20px] p-2 gap-4">
            <RotationGateButton name="r_x" onGate={onGate} color="indigo" />
            <RotationGateButton name="r_y" onGate={onGate} color="indigo" />
          </div>
        </div>
      </MathJaxContext>
      <footer className="h-24"></footer>
    </div>
  );
}

const GateButton = ({
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
      <MathJax className="pointer-events-none">{`$$${name.toUpperCase()}$$`}</MathJax>
    </button>
  );
};

const RotationGateButton = ({
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
    <div className="relative flex w-54">
      <button
        className={`button w-4/5 ${color ? color : "black"} rounded-r-none!`}
        onClick={() => onGate(name, theta)}
      >
        <MathJax className="pointer-events-none">{`$$${name.toUpperCase()}(\\theta)$$`}</MathJax>
      </button>
      <button
        className={`button w-1/5 ${color ? color : "black"} bg-linear-240! p-2 rounded-h-full flex items-center justify-center rounded-l-none border-l-0`}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <MdSettings className="w-full aspect-square" />
      </button>
      <div
        className={`absolute pt-3 w-full top-full left-0 ${dropdownOpen ? "flex" : "hidden"} flex-col z-10`}
        ref={ref}
      >
        <div
          className={`border-t border-l caret-${color} absolute rotate-45 w-2 h-2 top-2 right-[9%]`}
        ></div>
        <div
          className={`flex items-center justify-center p-4 h-18 bg-linear-330 bg-${color} rounded-xl`}
        >
          <MathJax inline>{"$Set\\;\\theta=$"}</MathJax>
          <input
            type="text"
            className={`w-2/5 mx-2 text-${color} px-2 text-xl font-latex`}
            onChange={handleThetaChange}
            value={theta}
            maxLength={4}
          />
          <MathJax inline>{"$rad$"}</MathJax>
        </div>
        <div className="absolute w-full h-18 bg-stone-950 -z-10 rounded-xl"></div>
      </div>
    </div>
  );
};
