"use client";

import { useState, useEffect } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

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

  useEffect(() => {
    async function fetchAmps() {
      try {
        const res = await fetch("http://localhost:8000/api/data");
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

  const formatNumber = (amps: amps) => {
    return "";
  };

  return (
    <div className="flex flex-col font-gabarito text-stone-2s00">
      <div className="flex justify-center items-center h-16 border-b border-stone-700 bg-linear-[170deg] from-stone-800 to-stone-950">
        <h1 className="text-3xl font-medium">
          Qubit State Visualizer (in progress)
        </h1>
      </div>
      <MathJaxContext config={mathJaxConfig}>
        <div className="flex justify-center items-center text-2xl my-2">
          {loading && <span>Loading...</span>}
          {error && <span>Error: {error}</span>}
          {amps && (
            <MathJax>
              {`$$\\ket{\\psi}=
              (${amps.alpha_real.toFixed(2)}+${amps.alpha_imag.toFixed(2)}i)\\ket{0}+
              (${amps.beta_real.toFixed(2)}+${amps.beta_imag.toFixed(2)}i)\\ket{1}$$`}
            </MathJax>
          )}
        </div>
        <div className="flex items-center justify-center gap-4">
          <button className="button black">
            <MathJax>{`$$H$$`}</MathJax>
          </button>
          <button className="button indigo">
            <MathJax>{`$$X$$`}</MathJax>
          </button>
          <button className="button sky">
            <MathJax>{`$$Z$$`}</MathJax>
          </button>
          <button className="button emerald">
            <MathJax>{`$$S$$`}</MathJax>
          </button>
        </div>
      </MathJaxContext>
    </div>
  );
}
