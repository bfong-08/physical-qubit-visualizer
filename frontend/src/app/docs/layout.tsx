import DocsNav from "@/components/DocsNav";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="font-gabarito pt-16 ml-64">
      <DocsNav />
      <div className="pl-16 pt-16 r-8">{children}</div>
    </section>
  );
}
