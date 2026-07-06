import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2 className="serif-heading text-balance text-[clamp(2.7rem,6vw,5.9rem)] text-foreground">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted md:text-xl">{description}</p>
      ) : null}
    </div>
  );
}
