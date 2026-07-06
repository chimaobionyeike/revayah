import { industries } from "@/config/site";
import { MotionSection } from "@/components/common/motion-section";
import { SectionHeading } from "@/components/common/section-heading";

export function IndustriesSection() {
  return (
    <MotionSection className="container py-24 md:py-32">
      <SectionHeading
        eyebrow="Industries"
        title="Built for healthcare companies with complex commercial paths."
        description="REVAYAH works across healthcare segments where trust, clinical relevance, and local stakeholder access shape commercial outcomes."
      />
      <div className="mt-14 grid gap-px overflow-hidden rounded-[18px] border border-emerald/10 bg-emerald/10 md:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => {
          const Icon = industry.icon;
          return (
            <article key={industry.title} className="bg-background p-7">
              <Icon aria-hidden="true" className="h-6 w-6 stroke-[1.5] text-emerald" />
              <h3 className="mt-10 text-2xl font-semibold text-foreground">{industry.title}</h3>
              <p className="mt-4 leading-7 text-muted">{industry.description}</p>
            </article>
          );
        })}
      </div>
    </MotionSection>
  );
}
