import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <article className="group rounded-[18px] border border-emerald/10 bg-white p-7 shadow-[0_18px_60px_rgba(13,59,46,0.05)] transition duration-300 hover:-translate-y-1 hover:border-emerald/20">
      <div className="mb-10 flex h-11 w-11 items-center justify-center rounded-full bg-emerald text-white">
        <Icon aria-hidden="true" className="h-5 w-5 stroke-[1.5]" />
      </div>
      <h3 className="text-xl font-semibold tracking-[-0.01em] text-foreground">{title}</h3>
      <p className="mt-4 leading-7 text-muted">{description}</p>
    </article>
  );
}
