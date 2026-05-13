import { InlineMath, BlockMath } from "react-katex";
import { Sidebar, SidebarLink } from "@/components/DocsSidebar";
import { One, Zero, KetOne, KetZero } from "@/components/Math";
import Image from "next/image";
import DocsFooter from "@/components/DocsFooter";

export default function BlochSphere() {
  return (
    <div className="flex gap-16">
      <div className="flex flex-col gap-4 pr-80">
        <h1 className="font-bold text-4xl scroll-mt-24" id="gates">
          The Bloch Sphere
        </h1>
        <p>
          The Bloch Sphere provides a way to visually represent a quantum state.
          It is a hollow unit sphere about the origin, where each point on its
          surface corresponds to a unique quantum state.
        </p>
        <Image
          src={"/bloch-sphere.png"}
          alt="bloch-sphere"
          width={500}
          height={500}
          className="bg-stone-300 pl-4 rounded-xl border border-stone-700 
          w-64 aspect-auto self-center"
        />
        <p>
          The <KetZero /> and <KetOne /> states correspond to the points of
          intersection between the sphere and the positive and negative{" "}
          <InlineMath math="z" /> axis, respectively.
          <br />
          <br /> The <InlineMath math="\ket{+}" /> and{" "}
          <InlineMath math="\ket{-}" /> states correspond to the points of
          intersection between the sphere and the positive and negative{" "}
          <InlineMath math="x" /> axis, respectively.
          <br />
          <br /> The <InlineMath math="\ket{+i}" /> and{" "}
          <InlineMath math="\ket{-i}" /> states correspond to the points of
          intersection between the sphere and the positive and negative{" "}
          <InlineMath math="y" /> axis, respectively.
        </p>
        <hr className="my-8 scroll-mt-24 border-stone-700" id="plotting" />
        <h2>Plotting States</h2>
        <p>
          Any qubit state can be written in the form{" "}
          <InlineMath math="\ket{\psi}=\alpha\ket{0}+\beta\ket{1}" />, where{" "}
          <InlineMath math="\alpha" /> is a nonnegative real number, by applying
          or removing a global phase. This state can be rewritten in the form
        </p>
        <BlockMath math="\ket{\psi}=\cos\left(\frac{\theta}{2}\right)\ket{0}+e^{i\phi}\sin\left(\frac{\theta}{2}\right)\ket{1}" />
        <p>
          where <InlineMath math="\theta\in[0,\pi]" /> and{" "}
          <InlineMath math="\phi\in[0,2\pi)" />. These angles can be used to
          form the unit vector{" "}
          <InlineMath math="(\sin(\theta)\cos(\phi),\sin(\theta)\sin(\phi),\cos(\theta)" />
          , which is
          <InlineMath math="(1,\theta,\phi)" /> in spherical coordinates. This
          vector traces the unit sphere: <br />
          <br />
          At the top of the sphere, which corrpsonds to the <KetZero /> state,{" "}
          both angles <InlineMath math="\theta" /> and{" "}
          <InlineMath math="\phi" /> are equal to <Zero />. Increasing the angle{" "}
          <InlineMath math="\theta" /> corresponds to rotating the state vector
          directly downwards toward the <KetOne /> state, which is at the bottom
          of the sphere. The angle <InlineMath math="\phi" /> corresponds to a
          rotation laterally around the sphere. Looking at the vector from the
          top down, the angle <InlineMath math="\phi=0" /> means that the state
          vector is pointing in the same direction as the{" "}
          <InlineMath math="x" /> axis. Increasing the angle{" "}
          <InlineMath math="\phi" /> corresponds to a rotating the state vector
          counterclockwise around the <InlineMath math="z" /> axis.
          <br />
          <br />
          Through these two angles, every point on the Bloch sphere's surface
          can be traced.
        </p>
        <DocsFooter prev_href="/docs/gates" />
      </div>
      <Sidebar>
        <SidebarLink href="#gates">The Bloch Sphere</SidebarLink>
        <SidebarLink href="#plotting">Plotting States</SidebarLink>
      </Sidebar>
    </div>
  );
}
