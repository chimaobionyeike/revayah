import { industries } from "@/config/site";
import { MotionSection } from "@/components/common/motion-section";
import { SectionHeading } from "@/components/common/section-heading";

export function IndustriesSection() {
  return (
    <MotionSection className="container py-24 md:py-32">
      <SectionHeading
        eyebrow="Industries"
        title="Built for digital health companies with complex commercial paths."
        description="REVAYAH works across technology-led healthcare segments where trust, clinical relevance, implementation readiness, and stakeholder access shape commercial outcomes."
      />
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => {
          const Icon = industry.icon;
          return (
            <article key={industry.title} className="group rounded-[18px] border border-emerald/10 bg-[#fbfaf7] p-7 transition duration-300 hover:-translate-y-1 hover:border-champagne/40 hover:bg-white hover:shadow-[0_24px_80px_rgba(13,59,46,0.07)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald/10 bg-white text-emerald">
                <Icon aria-hidden="true" className="h-5 w-5 stroke-[1.5]" />
              </div>
              <h3 className="mt-10 text-2xl font-semibold text-foreground">{industry.title}</h3>
              <div className="mt-5 h-px w-12 bg-champagne/55" />
              <p className="mt-4 leading-7 text-muted">{industry.description}</p>
            </article>
          );
        })}
      </div>
    </MotionSection>
  );
}
