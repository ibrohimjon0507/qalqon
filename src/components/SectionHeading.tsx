type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "center" | "left";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  align = "center",
}: Props) {
  return (
    <div
      className={`${align === "center" ? "mx-auto text-center" : "text-left"} max-w-2xl`}
    >
      {eyebrow && (
        <p className={`eyebrow mb-4 ${light ? "!text-gold-soft" : ""}`}>{eyebrow}</p>
      )}
      <h2
        className={`display text-[clamp(2rem,4.2vw,3.2rem)] ${
          light ? "text-ivory" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-[1.04rem] ${light ? "text-ivory/75" : "text-muted"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
