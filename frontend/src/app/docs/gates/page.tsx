import DocsFooter from "@/components/DocsFooter";
import { Sidebar, SidebarLink } from "@/components/DocsSidebar";
import { One } from "@/components/Math";
import { BlockMath, InlineMath } from "react-katex";

export default function Gates() {
  return (
    <div className="flex gap-16">
      <div className="flex flex-col gap-4 pr-80">
        <h1 className="font-bold text-4xl scroll-mt-24" id="gates">
          Quantum Gates
        </h1>
        <p className="">
          Quantum gates are operations used to update a qubit's state. Since
          pure qubit states are generally represented by 2-by-1 matrices,
          quantum gates are represented by 2-by-2 matrices.
        </p>
        <hr className="border-stone-700 my-8 scroll-mt-24" id="properties" />
        <h2>Properties of Quantum Gate Matrices</h2>
        <p>
          Not all 2-by-2 matrices can be quantum gates. There are certain
          properties that a quantum gate matrix must have.
        </p>
        <h3 id="unitary" className="scroll-mt-24">
          Unitary
        </h3>
        <p>
          Quantum gates must be unitary. A matrix <InlineMath math="U" /> is
          unitary if its conjugate-transpose <InlineMath math="U^\dagger" /> is
          also its inverse. This means
        </p>
        <BlockMath math="UU^\dagger=I." />
        <p>
          This property ensures that when a qubit state vector is evolved by a
          quantum gate, the Euclidean norm remains equal to <One /> (i.e. the
          total probability of of measuring either <InlineMath math="\ket{0}" />{" "}
          or <InlineMath math="\ket{1}" /> is <One />
          ).
        </p>
        <h3 id="reversibility" className="scroll-mt-24">
          Reversibility
        </h3>
        <p>
          If a matrix is unitary, it must be reversible. Reversibility ensures
          that any quantum gate operation can be undone.
        </p>
        <h3 id="linearity" className="scroll-mt-24">
          Linearity
        </h3>
        <p>
          A quantum gate is a linear operation, meaning it is compatible with
          both adding and scaling. For a quantum gate <InlineMath math="U" />{" "}
          and a quantum state <InlineMath math="\ket{\psi}=a\ket{0}+b\ket{1}" />
          ,
        </p>
        <BlockMath math="U\ket{\psi}=U(a\ket{0}+b\ket{1})=aU\ket{0}+bU\ket{1}." />
        <hr className="border-stone-700 my-8 scroll-mt-24" id="glossary" />
        <h2>Common Quantum Gates</h2>
        <p>
          Here is a glossary of the various quantum gates used in this
          visualizer, including their matrix representations and effects on a
          basic qubit state (assume{" "}
          <InlineMath math="\ket{\psi}=a\ket{0}+b\ket{1}" />
          ).
        </p>
        <h3 id="hadamard" className="scroll-mt-24">
          Hadamard Gate
        </h3>
        <p>
          The Hadamard gate is one of the most important gates in quantum
          computing. On a basis state such as <InlineMath math="\ket{0}" />, the
          Hadamard gate will transform the state into an equal superposition of
          basis states. In other words, the probabilities of measuring
          <InlineMath math="\ket{0}" /> or <InlineMath math="\ket{1}" /> are
          50%.
        </p>
        <GlossaryGateRow>
          <GateTile name="H" />
          <BlockMath math="\frac{1}{\sqrt{2}}\begin{bmatrix}1 & 1 \\ 1 & -1\end{bmatrix}" />
          <BlockMath math="H\ket{0}=\ket{+}\\ H\ket{1}=\ket{-}" />
        </GlossaryGateRow>
        <h3 id="pauli" className="scroll-mt-24">
          Pauli Gates
        </h3>
        <p>
          The Pauli gates <InlineMath math="(X,Y,Z)" /> denote, respectively, a
          rotation around the <InlineMath math="x" />, <InlineMath math="y" />,
          and <InlineMath math="z" /> axes of the Bloch sphere by{" "}
          <InlineMath math="\pi" /> radians. The <InlineMath math="X" /> gate is
          sometimes called the "bit-flip" gate because it transforms{" "}
          <InlineMath math="\ket{0}" /> into <InlineMath math="\ket{1}" /> and
          vice versa. The <InlineMath math="Z" /> gate is sometimes called the
          "phase flip" gate because it multiplies the amplitude of the{" "}
          <InlineMath math="\ket{1}" /> by <InlineMath math="-1" /> while
          leaving <InlineMath math="\ket{0}" /> unchanged.
        </p>
        <GlossaryGateRow>
          <GateTile name="X" color="sky" />
          <BlockMath math="\begin{bmatrix}0 & 1 \\ 1 & 0\end{bmatrix}" />
          <BlockMath math="X\ket{\psi}=b\ket{0}+a\ket{1}" />
        </GlossaryGateRow>
        <GlossaryGateRow>
          <GateTile name="Y" color="sky" />
          <BlockMath math="\begin{bmatrix}0 & -i \\ i & 0\end{bmatrix}" />
          <BlockMath math="Y\ket{\psi}=-bi\ket{0}+ai\ket{1}" />
        </GlossaryGateRow>{" "}
        <GlossaryGateRow>
          <GateTile name="Z" color="sky" />
          <BlockMath math="\begin{bmatrix}1 & 0 \\ 0 & -1\end{bmatrix}" />
          <BlockMath math="Z\ket{\psi}=a\ket{0}-b\ket{1}" />
        </GlossaryGateRow>
        <h3 id="phase" className="scroll-mt-24">
          Phase Gates
        </h3>
        <p>
          As the name suggests, phase gates shift the phase of a qubit state.
          This is equivalent to multiplying the <InlineMath math="\ket{1}" />{" "}
          state by <InlineMath math="e^{i\theta}" />, where{" "}
          <InlineMath math="\theta" /> is an arbitrary angle. While shifting the
          phase does not change the probabilities of measuring{" "}
          <InlineMath math="\ket{0}" /> or <InlineMath math="\ket{1}" />, it
          enables quantum interference, which can alter how the state evolves
          with other gates. <br /> <br />
          The general phase gate <InlineMath math="P" />, is practically
          equivalent to the <InlineMath math="R_z" /> gate. The{" "}
          <InlineMath math="S" /> gate shifts the phase by{" "}
          <InlineMath math="\pi/2" /> radians, while the <InlineMath math="T" />{" "}
          gate shifts the phase by <InlineMath math="\pi/4" />.
        </p>
        <GlossaryGateRow>
          <GateTile name="P" color="emerald" />
          <BlockMath math="\begin{bmatrix}1 & 0 \\ 0 & e^{i\theta}\end{bmatrix}" />
          <BlockMath math="P\ket{\psi}=a\ket{0}+be^{i\theta}\ket{1}" />
        </GlossaryGateRow>
        <GlossaryGateRow>
          <GateTile name="S" color="emerald" />
          <BlockMath math="\begin{bmatrix}1 & 0 \\ 0 & i\end{bmatrix}" />
          <BlockMath math="S\ket{\psi}=a\ket{0}+bi\ket{1}" />
        </GlossaryGateRow>
        <GlossaryGateRow>
          <GateTile name="T" color="emerald" />
          <BlockMath math="\begin{bmatrix}1 & 0 \\ 0 & e^{i\pi/4}\end{bmatrix}" />
          <BlockMath math="T\ket{\psi}=a\ket{0}+be^{i\pi/4}\ket{1}" />
        </GlossaryGateRow>
        <h3 id="rotation" className="scroll-mt-24">
          Rotation Gates
        </h3>
        <p>
          The rotation gates <InlineMath math="(R_x, R_y, R_z)" /> denote,
          respectively, a rotation around the <InlineMath math="x" />,{" "}
          <InlineMath math="y" />, and <InlineMath math="z" /> axes of the Bloch
          sphere by an arbitrary angle.
          <br />
          <br />
          <span className="italic text-stone-500">
            The <InlineMath math="R_z" /> gate is not included below because it
            is practically equivalent to the <InlineMath math="P" /> gate listed
            above.
          </span>
        </p>
        <div className="grid grid-cols-2 place-items-center pl-16 pr-32 gap-16">
          <GateTile name="R_x" color="indigo" />
          <BlockMath math="\begin{bmatrix}\cos(\frac{\theta}{2}) & -i\sin(\frac{\theta}{2}) \\ -i\sin(\frac{\theta}{2}) & \cos(\frac{\theta}{2})\end{bmatrix}" />
        </div>
        <div className="grid grid-cols-2 place-items-center pl-16 pr-32 gap-16">
          <GateTile name="R_y" color="indigo" />
          <BlockMath math="\begin{bmatrix}\cos(\frac{\theta}{2}) & -\sin(\frac{\theta}{2}) \\ \sin(\frac{\theta}{2}) & \cos(\frac{\theta}{2})\end{bmatrix}" />
        </div>
        <DocsFooter prev_href="/docs" next_href="/docs/bloch-sphere" />
      </div>
      <Sidebar>
        <SidebarLink href="#gates">Quantum Gates</SidebarLink>
        <SidebarLink href="#properties">
          Properties of Gate Matrices
        </SidebarLink>
        <SidebarLink href="#unitary" nested>
          Unitary
        </SidebarLink>
        <SidebarLink href="#reversibility" nested>
          Reversibility
        </SidebarLink>
        <SidebarLink href="#linearity" nested>
          Linearity
        </SidebarLink>
        <SidebarLink href="#glossary">Common Quantum Gates</SidebarLink>
        <SidebarLink href="#hadamard" nested>
          Hadamard Gate
        </SidebarLink>
        <SidebarLink href="#pauli" nested>
          Pauli Gates
        </SidebarLink>
        <SidebarLink href="#phase" nested>
          Phase Gates
        </SidebarLink>
        <SidebarLink href="#rotation" nested>
          Rotation Gates
        </SidebarLink>
      </Sidebar>
    </div>
  );
}

const GateTile = ({ name, color }: { name: string; color?: string }) => {
  return (
    <button className={`button ${color ? color : "black"} pointer-events-none`}>
      <InlineMath math={`${name.toUpperCase()}`} />
    </button>
  );
};

const GlossaryGateRow = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-3 place-items-center items-center px-16 pr-32 gap-16">
      {children}
    </div>
  );
};
