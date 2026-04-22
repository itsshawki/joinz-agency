interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerLow?: boolean;
}

export default function Section({
  children,
  className = "",
  id,
  containerLow = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`px-6 md:px-12 py-24 md:py-32 ${
        containerLow ? "bg-surface-container-low" : ""
      } ${className}`}
    >
      <div className="max-w-[1300px] mx-auto">{children}</div>
    </section>
  );
}
