"use client";

import { useState, useEffect } from "react";
import { GateButton, RotationGateButton } from "@/components/Buttons";
import DynamicMath from "@/components/DynamicMath";
import Profile from "@/components/Profile";

export default function Home() {
  const [amps, setAmps]: any = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getSessionId = () => {
    let sessionId = sessionStorage.getItem("ephemeral_session_id");
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      sessionStorage.setItem("ephemeral_session_id", sessionId);
    }
    return sessionId;
  };

  useEffect(() => {
    async function fetchAmps() {
      try {
        const res = await fetch(
          "https://bfong-qubit-visualizer-api.vercel.app/api/amps",
          {
            headers: { "X-Session-ID": getSessionId() },
          },
        );
        if (!res.ok) throw new Error("Network response was not ok");
        const result = await res.json();
        setAmps(result);
        setError(null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchAmps();
  }, []);

  async function onGate(gate: string, theta?: number) {
    const t = theta ? theta : 0;
    const body = {
      gate_name: gate,
      theta: t,
    };
    try {
      const res = await fetch(
        "https://bfong-qubit-visualizer-api.vercel.app/api/gate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Session-ID": getSessionId(),
          },
          body: JSON.stringify(body),
        },
      );
      if (!res.ok) {
        const errorData = await res.json();
        console.error("API Error Detals:", errorData);
        throw new Error("Network response was not ok");
      }
      const result = await res.json();
      setAmps(result);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    }
  }

  const formattedState = `${
    amps &&
    `(${amps.alpha_real.toFixed(2)}
  ${amps.alpha_imag < 0 ? `-${Math.abs(amps.alpha_imag).toFixed(2)}i` : `+${amps.alpha_imag.toFixed(2)}i`})\\ket{0}+(${amps.beta_real.toFixed(2)}
  ${amps.beta_imag < 0 ? `-${Math.abs(amps.beta_imag).toFixed(2)}i` : `+${amps.beta_imag.toFixed(2)}i`})\\ket{1}`
  }`;

  return (
    <div className="flex flex-col font-gabarito text-stone-200">
      <Profile />
      <div className="flex justify-center items-center h-16 border-b border-stone-800 bg-linear-[170deg] from-stone-900 to-stone-950">
        <h1 className="text-3xl font-medium">Qubit State Visualizer</h1>
      </div>
      <div className="flex justify-center items-center text-2xl my-2">
        {loading && <span>Loading...</span>}
        {error && <span>Error: {error}</span>}
        {amps && <DynamicMath expression={`\\ket{\\psi}=${formattedState}`} />}
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
      <footer className="h-24"></footer>
    </div>
  );
}
