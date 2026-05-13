import { Sidebar, SidebarLink } from "@/components/DocsSidebar";
import { BlockMath, InlineMath } from "react-katex";
import { One, Zero } from "@/components/Math";
import DocsFooter from "@/components/DocsFooter";

export default function Docs() {
  return (
    <div className="flex gap-16">
      <div className="flex flex-col gap-4 pr-80">
        <h1 className="font-bold text-4xl scroll-mt-24" id="qubit">
          The Qubit
        </h1>
        <p>
          While a classical bit must exist wholly in one of two binary states
          (i.e. <Zero /> or <One />
          ), a qubit can exist as a superposition of either state. This means
          that prior to "observation," the qubit can be treated as if it exists
          in both states at once. Once a qubit is "observed," or "measured," the
          qubit's state collapses completely the measured state (i.e. it is no
          longer in superposition).
        </p>
        <hr className="border-stone-700 my-8 scroll-mt-24" id="notation" />
        <h2 className="scroll-mt-24">Notation</h2>
        <p>
          Typically, a qubit state is written in Dirac notation. A "ket,"
          represented by the angled brackets{" "}
          <InlineMath math="\ket{\hspace{2pt}}" />, denotes a 2-by-1 column
          vector, where the first entry corresponds to the amplitude of the{" "}
          <Zero />
          state and the second entry corresponds to the amplitude of the <One />
          state. The following qubit states are equivalent to the classical
          binary states:
        </p>
        <BlockMath math="\ket{0}=\begin{bmatrix}1\\0\end{bmatrix},\qquad\ket{1}=\begin{bmatrix}0\\1\end{bmatrix}" />
        <p>
          Arbitrary qubit states, often denoted by{" "}
          <InlineMath math="\ket{\psi}" /> or <InlineMath math="\ket{\phi}" />,
          are written as weighted sums of the basis states{" "}
          <InlineMath math="\ket{0}" /> and <InlineMath math="\ket{1}" />. The
          general form is
        </p>
        <BlockMath math="\ket{\psi}=a\ket{0}+b\ket{1}," />
        <p>
          where <InlineMath math="a" /> and <InlineMath math="b" /> are real or
          complex numbers. These coefficients are referred to as "amplitudes,"
          and the squared magnitudes of these amplitudes corresponds to the
          probabilities of measuring either a <Zero /> or a <One />:
        </p>
        <BlockMath math="P(0)=|a|^2,\qquad P(1)=|b|^2." />
        <p>
          As a result, the "Euclidean norm" of the entire qubit state must be
          equal to <One /> to ensure that the total probability of measuring a{" "}
          <Zero />
          or <One />
          is <One />:
        </p>
        <BlockMath math="\lVert\ket{\psi}\rVert=\sqrt{|a|^2+|b|^2}=1." />
        <p>
          Changing a qubit's amplitudes changes its state. However, multiplying
          an entire qubit state by <InlineMath math="e^{i\theta}" /> has no
          physical effect on the qubit. This is called a "global phase."
        </p>
        <h3 id="example" className="scroll-mt-24">
          Example
        </h3>
        <p>Consider the state</p>
        <BlockMath math="\ket{+}=\frac{1}{\sqrt{2}}\ket{0}+\frac{1}{\sqrt{2}}\ket{1}." />
        <p>
          The coefficients of both <InlineMath math="\ket{0}" /> and{" "}
          <InlineMath math="\ket{1}" /> are equal, so the probabilities of
          measuring either state is also equal. To calculate the probability
          value, we must square the coefficient:
        </p>
        <BlockMath math="P(0)=P(1)=\left(\frac{1}{\sqrt{2}}\right)^2=\frac{1}{2}." />
        <p>
          Thus, the probabilities of measuring a <Zero /> or <One /> are both{" "}
          <InlineMath math="0.5" />.
        </p>
        <hr className="my-8 border-stone-700 scroll-mt-24" id="important" />
        <h2>Important States</h2>
        <p>
          Some states are important and common enough to warrant their own
          unique symbols. Listed below are a few:
        </p>
        <BlockMath
          math="\ket{+}=\frac{1}{\sqrt{2}}\ket{0}+\frac{1}{\sqrt{2}}\ket{1}\\[2ex]
        \ket{-}=\frac{1}{\sqrt{2}}\ket{0}-\frac{1}{\sqrt{2}}\ket{1} \\[2ex]
        \ket{+i}=\frac{1}{\sqrt{2}}\ket{0}+\frac{i}{\sqrt{2}}\ket{1} \\[2ex]
        \ket{-i}=\frac{1}{\sqrt{2}}\ket{0}-\frac{i}{\sqrt{2}}\ket{1}"
        />
        <DocsFooter next_href="/docs/gates" />
      </div>
      <Sidebar>
        <SidebarLink href="#qubit">The Qubit</SidebarLink>
        <SidebarLink href="#notation">Notation</SidebarLink>
        <SidebarLink href="#example" nested>
          Example
        </SidebarLink>
        <SidebarLink href="#important">Important States</SidebarLink>
      </Sidebar>
    </div>
  );
}
