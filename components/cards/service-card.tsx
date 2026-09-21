import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <article className="group rounded-[18px] border border-emerald/10 bg-[#fbfaf7] p-7 shadow-[0_18px_60px_rgba(13,59,46,0.04)] transition duration-300 hover:-translate-y-1 hover:border-champagne/40 hover:shadow-[0_28px_90px_rgba(33,26,23,0.1)]">
      <div className="mb-10 flex h-11 w-11 items-center justify-center rounded-full border border-emerald/15 bg-white text-emerald">
        <Icon aria-hidden="true" className="h-5 w-5 stroke-[1.35]" />
      </div>
      <h3 className="text-xl font-semibold tracking-[-0.01em] text-foreground">{title}</h3>
      <div className="mt-4 h-px w-14 bg-champagne/60 transition duration-300 group-hover:w-20" />
      <p className="mt-4 leading-7 text-muted">{description}</p>
    </article>
  );
}
